import { generateOgImage } from "@/lib/og-image";

export const alt = "Jasa Pembuatan Aplikasi";
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage(
    "Pembuatan Aplikasi Android",
    "Jasa Layanan"
  );
}
