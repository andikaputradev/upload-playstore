import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { encrypt } from "@/lib/session";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const ratelimit =
  redisUrl && redisToken
    ? new Ratelimit({
        redis: new Redis({
          url: redisUrl,
          token: redisToken,
        }),
        limiter: Ratelimit.slidingWindow(5, "15 m"),
      })
    : null;

export async function POST(request: Request) {
  try {
    if (ratelimit) {
      const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
      const { success } = await ratelimit.limit(`login_${ip}`);

      if (!success) {
        return NextResponse.json(
          { error: "Terlalu banyak percobaan. Coba lagi dalam beberapa menit." },
          { status: 429 }
        );
      }
    }

    const { password } = await request.json();

    const expectedHash = process.env.ADMIN_PASSWORD_HASH;
    if (!expectedHash) {
      console.error("ADMIN_PASSWORD_HASH is not set");
      return NextResponse.json({ error: "Sistem error" }, { status: 500 });
    }

    const isMatch = await bcrypt.compare(password, expectedHash);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Kata sandi salah" },
        { status: 401 }
      );
    }

    const expires = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours
    const session = await encrypt({ admin: true, expires });

    const cookieStore = await cookies();
    cookieStore.set("admin_session", session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sistem error" }, { status: 500 });
  }
}
