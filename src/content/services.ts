export interface Service {
  readonly slug: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly description: string;
  readonly href: string;
}

export const services: readonly Service[] = [
  {
    slug: "upload-play-store",
    title: "Upload & Publish ke Play Store",
    shortTitle: "Upload Play Store",
    description:
      "Kirim berkas rilis, kami tangani upload sampai diajukan untuk ditinjau Google Play.",
    href: "/jasa/upload-play-store",
  },
  {
    slug: "pembuatan-aplikasi",
    title: "Pembuatan Aplikasi",
    shortTitle: "Pembuatan App",
    description:
      "Butuh aplikasi Android dari nol? Kami bantu bangun sesuai kebutuhanmu.",
    href: "/jasa/pembuatan-aplikasi",
  },
  {
    slug: "pembuatan-website",
    title: "Pembuatan Website",
    shortTitle: "Pembuatan Web",
    description:
      "Landing page, company profile, atau website bisnis, siap pakai dan siap tayang.",
    href: "/jasa/pembuatan-website",
  },
  {
    slug: "konversi-webview-ke-apk",
    title: "Konversi WebView ke APK",
    shortTitle: "WebView ke APK",
    description:
      "Ubah website yang sudah ada menjadi aplikasi Android siap dipasang.",
    href: "/jasa/konversi-webview-ke-apk",
  },
];
