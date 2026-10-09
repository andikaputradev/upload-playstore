import { generateOgImage } from "@/lib/og-image";
import { formatPrice, packages } from "@/lib/packages";

export const alt = "Harga Jasa Upload dan Publish ke Play Store - uploadplaystore.my.id";
export const contentType = "image/png";

export default async function Image() {
  const lowest = Math.min(...packages.map((pkg) => pkg.price));
  return generateOgImage("Paket Harga Upload dan Publish ke Play Store", `Mulai Rp${formatPrice(lowest)}`);
}
