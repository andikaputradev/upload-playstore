import { generateOgImage } from "@/lib/og-image";

export const alt = "Jasa Upload & Publish Aplikasi Android ke Play Store";
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage(
    "Jasa Upload & Publish Aplikasi Android",
    "uploadplaystore.my.id"
  );
}
