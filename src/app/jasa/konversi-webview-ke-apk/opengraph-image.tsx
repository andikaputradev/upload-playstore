import { generateOgImage } from "@/lib/og-image";

export const alt = "Jasa Konversi WebView ke APK";
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage(
    "Konversi Website Menjadi Aplikasi Android (WebView ke APK)",
    "Jasa Layanan"
  );
}
