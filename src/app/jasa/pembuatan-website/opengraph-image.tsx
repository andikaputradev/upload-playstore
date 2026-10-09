import { generateOgImage } from "@/lib/og-image";

export const alt = "Jasa Pembuatan Website";
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage(
    "Pembuatan Website",
    "Jasa Layanan"
  );
}
