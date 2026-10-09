import { generateOgImage } from "@/lib/og-image";

export const alt = "Jasa Upload Play Store";
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage(
    "Upload & Publish Aplikasi ke Google Play Store",
    "Jasa Layanan"
  );
}
