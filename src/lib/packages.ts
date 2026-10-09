import { waLink } from "./brand";

export interface PackageFeature {
  readonly text: string;
}

export interface PricingPackage {
  readonly code: string;
  readonly name: string;
  readonly price: number;
  readonly normalPrice: number;
  readonly scope: string;
  readonly features: readonly PackageFeature[];
  readonly highlighted: boolean;
  readonly badge?: string;
  readonly waLink: string;
}

const basicFeatures: readonly PackageFeature[] = [
  { text: "Upload aplikasi ke Google Play Console" },
  { text: "Tanpa antre closed testing 14 hari untuk aplikasi yang memenuhi syarat" },
  { text: "Panduan singkat pengelolaan setelah aplikasi terbit" },
  { text: "Dukungan dasar via WhatsApp" },
];

const standardFeatures: readonly PackageFeature[] = [
  ...basicFeatures,
  { text: "1 kali update aplikasi setelah terbit" },
  { text: "Revisi deskripsi dan aset store listing" },
  { text: "Dukungan prioritas via WhatsApp" },
];

const proFeatures: readonly PackageFeature[] = [
  ...standardFeatures.filter((f) => f.text !== "Dukungan dasar via WhatsApp"),
  { text: "3 kali update aplikasi setelah terbit" },
  { text: "Optimasi store listing: judul, deskripsi, kata kunci" },
  { text: "Konsultasi ringan strategi rilis" },
];

const premiumFeatures: readonly PackageFeature[] = [
  ...proFeatures.filter(
    (f) =>
      f.text !== "1 kali update aplikasi setelah terbit" &&
      f.text !== "3 kali update aplikasi setelah terbit"
  ),
  { text: "5 kali update aplikasi setelah terbit" },
  { text: "Optimasi penuh store listing dan aset visual" },
  { text: "Konsultasi tanpa batas selama masa paket" },
  { text: "Respons prioritas utama" },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID").format(price);
}

function buildWaLink(name: string, price: number): string {
  return waLink(
    `Halo, saya ingin konsultasi untuk paket ${name} (Rp${formatPrice(price)}) di uploadplaystore.my.id`
  );
}

export const packages: readonly PricingPackage[] = [
  {
    code: "basic",
    name: "Basic",
    price: 199000,
    normalPrice: 225000,
    scope: "1x Upload & Publish",
    features: basicFeatures,
    highlighted: false,
    waLink: buildWaLink("Basic", 199000),
  },
  {
    code: "standard",
    name: "Standard",
    price: 299000,
    normalPrice: 325000,
    scope: "1x Upload & Publish + 1x Update",
    features: standardFeatures,
    highlighted: false,
    waLink: buildWaLink("Standard", 299000),
  },
  {
    code: "pro",
    name: "Pro",
    price: 399000,
    normalPrice: 450000,
    scope: "1x Upload & Publish + 3x Update",
    features: proFeatures,
    highlighted: false,
    waLink: buildWaLink("Pro", 399000),
  },
  {
    code: "premium",
    name: "Premium",
    price: 499000,
    normalPrice: 599000,
    scope: "1x Upload & Publish + 5x Update",
    features: premiumFeatures,
    highlighted: true,
    badge: "Paling Hemat",
    waLink: buildWaLink("Premium", 499000),
  },
];

export { formatPrice };
