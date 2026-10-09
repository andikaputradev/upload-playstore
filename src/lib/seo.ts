import { brand } from "./brand";

interface SeoData {
  readonly title: string;
  readonly description: string;
}

export const seoData: Record<string, SeoData> = {
  home: {
    title: `Jasa Upload Aplikasi ke Play Store | ${brand.name}`,
    description:
      "Jasa upload dan publish aplikasi Android ke Google Play Store lewat akun developer aktif sejak 2022, tanpa antre closed testing 14 hari. Mulai Rp199.000.",
  },
  uploadPlayStore: {
    title: `Jasa Upload dan Publish Aplikasi ke Play Store | ${brand.name}`,
    description:
      "Serahkan berkas rilis, tim kami mengurus upload ke Google Play Console sampai diajukan untuk ditinjau. Paket mulai Rp199.000, konsultasi awal gratis.",
  },
  pembuatanAplikasi: {
    title: `Jasa Pembuatan Aplikasi Android | ${brand.name}`,
    description:
      "Punya ide aplikasi? Kami bangun aplikasi Android dari nol sesuai kebutuhan bisnismu, lanjut ke upload Play Store. Konsultasi awal gratis.",
  },
  pembuatanWebsite: {
    title: `Jasa Pembuatan Website Bisnis dan Personal | ${brand.name}`,
    description:
      "Landing page, company profile, atau website bisnis yang cepat, ringan, dan tampil baik di mobile, dengan dasar SEO on-page. Konsultasi awal gratis via WhatsApp.",
  },
  konversiWebview: {
    title: `Jasa Konversi WebView ke APK | ${brand.name}`,
    description:
      "Ubah website yang sudah ada menjadi aplikasi Android siap pasang, lengkap dengan ikon dan splash screen. Konsultasi awal gratis via WhatsApp.",
  },
  harga: {
    title: `Harga Jasa Upload Play Store, Mulai Rp199.000 | ${brand.name}`,
    description:
      "Bandingkan paket Basic, Standard, Pro, dan Premium untuk upload dan publish aplikasi ke Google Play Store. Konsultasi awal gratis via WhatsApp.",
  },
};
