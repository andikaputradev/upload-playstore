import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const gold = "#E8B879";
const goldLight = "#F7E2C4";
const layer = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
} as const;

async function loadFonts() {
  try {
    const dir = join(process.cwd(), "src", "assets", "og");
    const [display, mono] = await Promise.all([
      readFile(join(dir, "inter-tight-600.woff")),
      readFile(join(dir, "jetbrains-mono-500.woff")),
    ]);
    return [
      { name: "Inter Tight", data: display, weight: 600 as const, style: "normal" as const },
      { name: "JetBrains Mono", data: mono, weight: 500 as const, style: "normal" as const },
    ];
  } catch {
    return [];
  }
}

export async function generateOgImage(title: string, meta: string) {
  const fonts = await loadFonts();
  const titleSize = title.length > 40 ? 58 : title.length > 26 ? 68 : 80;

  return new ImageResponse(
    (
      <div style={{ ...layer, background: "#050506", fontFamily: "Inter Tight" }}>
        <div
          style={{
            ...layer,
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            ...layer,
            backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            ...layer,
            backgroundImage: "radial-gradient(circle at 92% 100%, rgba(232,184,121,0.34), rgba(5,5,6,0) 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -150,
            top: 50,
            width: 580,
            height: 580,
            display: "flex",
            borderRadius: 9999,
            borderWidth: 4,
            borderStyle: "solid",
            borderColor: "rgba(232,184,121,0.12)",
            borderTopColor: goldLight,
            borderLeftColor: gold,
            boxShadow: "0 0 80px rgba(232,184,121,0.32)",
            transform: "rotate(-24deg)",
          }}
        />
        <div
          style={{
            ...layer,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundImage: `linear-gradient(180deg, ${goldLight}, ${gold})`,
                color: "#150E04",
                fontSize: 26,
                fontWeight: 600,
              }}
            >
              AP
            </div>
            <div style={{ marginLeft: 20, display: "flex", fontFamily: "JetBrains Mono", fontSize: 22, color: "#A3A3AD" }}>
              {brand.domain}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 760 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 22,
                letterSpacing: 4,
                color: gold,
                marginBottom: 28,
              }}
            >
              {`/ ${meta}`}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                fontWeight: 600,
                letterSpacing: -2,
                lineHeight: 1.04,
                color: "#F5F5F7",
              }}
            >
              {title}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "JetBrains Mono",
              fontSize: 20,
              color: "#8A8A96",
            }}
          >
            <div style={{ display: "flex", width: 10, height: 10, borderRadius: 9999, background: gold, marginRight: 14 }} />
            Peninjauan tetap oleh Google Play
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
