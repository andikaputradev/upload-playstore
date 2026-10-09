import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = process.env.ADMIN_SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: unknown) {
  return await new SignJWT(payload as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(key);
}

export async function decrypt(input: string): Promise<unknown> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: unknown) {
  const req = request as { cookies: { get: (name: string) => { value: string } | undefined } };
  const session = req.cookies.get("admin_session")?.value;
  if (!session) return;
  const parsed = await decrypt(session) as { expires: Date };
  parsed.expires = new Date(Date.now() + 12 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "admin_session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return res;
}
