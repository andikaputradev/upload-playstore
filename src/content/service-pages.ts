export interface ServicePageContent {
  readonly slug: string;
  readonly seoKey: string;
  readonly accent: string;
  readonly rest: string;
  readonly intro: string;
  readonly signals: readonly string[];
  readonly sectionTitle: string;
  readonly sectionLead: string;
  readonly items: readonly string[];
  readonly note?: string;
  readonly ctaLabel: string;
  readonly waMessage: string;
  readonly secondary: { readonly label: string; readonly href: string };
  readonly jsonLdDescription: string;
  readonly price?: number;
  readonly showPricing: boolean;
}

export const servicePages: readonly ServicePageContent[] = [
  {
    slug: "upload-play-store",
    seoKey: "uploadPlayStore",
    accent: "Upload & Publish",
    rest: "Aplikasi ke Google Play Store",
    intro:
      "Aplikasimu sudah jadi, tinggal satu hambatan: proses rilis. Kirim berkas rilis aplikasi Android kamu, kami tangani upload ke Google Play Console sampai diajukan untuk ditinjau. Cocok untuk developer individu, tim kecil, maupun agensi yang ingin fokus membangun produk tanpa mengurus proses publish.",
    signals: ["Akun developer aktif sejak 2022", "Berkas diproses oleh tim", "Peninjauan tetap oleh Google"],
    sectionTitle: "Syarat berkas sebelum dikirim",
    sectionLead:
      "Berkas yang lengkap mempercepat proses pengajuan. Belum yakin semuanya siap? Tanyakan lewat konsultasi awal yang gratis.",
    items: [
      "AAB atau APK yang sudah ditandatangani (signed release)",
      "Ikon aplikasi 512x512 piksel, format PNG 32-bit",
      "Minimal 2 screenshot per jenis perangkat yang didukung",
      "Feature graphic 1024x500 piksel",
      "Deskripsi singkat (maks. 80 karakter) dan deskripsi lengkap",
      "Tautan kebijakan privasi yang aktif dan dapat diakses publik",
      "Kategori aplikasi dan rating konten (target usia)",
    ],
    ctaLabel: "Konsultasi Gratis via WhatsApp",
    waMessage: "Halo, saya ingin konsultasi upload aplikasi ke Play Store",
    secondary: { label: "Lihat paket harga", href: "/harga" },
    jsonLdDescription:
      "Kirim berkas rilis aplikasi Android kamu, kami tangani proses upload ke Google Play Console sampai diajukan untuk ditinjau.",
    price: 199000,
    showPricing: true,
  },
  {
    slug: "pembuatan-aplikasi",
    seoKey: "pembuatanAplikasi",
    accent: "Pembuatan Aplikasi Android",
    rest: "Sesuai Kebutuhan",
    intro:
      "Punya ide aplikasi tapi belum punya aplikasinya? Ceritakan kebutuhanmu, kami bantu membangun aplikasi Android dari nol sesuai kebutuhan bisnis atau proyekmu, lalu siap lanjut ke tahap upload dan publish.",
    signals: ["Diskusi kebutuhan lebih dulu", "Spesifikasi disepakati di awal", "Bisa lanjut ke upload Play Store"],
    sectionTitle: "Cakupan layanan",
    sectionLead: "Empat hal yang termasuk dalam layanan ini, dari diskusi kebutuhan sampai serah terima.",
    items: [
      "Diskusi kebutuhan dan alur fitur aplikasi",
      "Pengembangan aplikasi Android sesuai spesifikasi yang disepakati",
      "Pengujian dasar sebelum serah terima",
      "Opsi lanjut ke jasa upload dan publish ke Play Store",
    ],
    ctaLabel: "Konsultasi Kebutuhan via WhatsApp",
    waMessage: "Halo, saya ingin konsultasi pembuatan aplikasi Android",
    secondary: { label: "Lihat layanan lain", href: "/#layanan" },
    jsonLdDescription: "Kami bantu membangun aplikasi Android dari nol, sesuai kebutuhan bisnis atau proyekmu.",
    showPricing: false,
  },
  {
    slug: "pembuatan-website",
    seoKey: "pembuatanWebsite",
    accent: "Pembuatan Website",
    rest: "untuk Bisnis dan Personal",
    intro:
      "Website adalah tempat pertama calon pelanggan menilai bisnismu. Kami bangun landing page, company profile, atau website bisnis yang cepat, ringan, dan siap tayang.",
    signals: ["Tampilan mobile dan desktop", "Dasar SEO on-page", "Bisa lanjut jadi aplikasi Android"],
    sectionTitle: "Cakupan layanan",
    sectionLead: "Empat hal yang termasuk dalam layanan ini, dari desain sampai siap dipakai.",
    items: [
      "Desain dan pengembangan website sesuai kebutuhan",
      "Optimasi tampilan untuk perangkat mobile dan desktop",
      "Dasar-dasar SEO on-page",
      "Opsi lanjut ke jasa konversi WebView ke APK",
    ],
    ctaLabel: "Konsultasi Kebutuhan via WhatsApp",
    waMessage: "Halo, saya ingin konsultasi pembuatan website",
    secondary: { label: "Lihat layanan lain", href: "/#layanan" },
    jsonLdDescription: "Landing page, company profile, atau website bisnis, dibangun cepat, ringan, dan siap tayang.",
    showPricing: false,
  },
  {
    slug: "konversi-webview-ke-apk",
    seoKey: "konversiWebview",
    accent: "Konversi Website Menjadi Aplikasi Android",
    rest: "(WebView ke APK)",
    intro:
      "Sudah punya website tapi ingin hadir juga sebagai aplikasi Android? Kami bantu bungkus website kamu menjadi APK siap pasang, lengkap dengan ikon dan splash screen.",
    signals: ["Ikon dan splash screen sesuai brand", "Pengujian dasar sebelum serah terima", "Bisa lanjut ke upload Play Store"],
    sectionTitle: "Cakupan layanan",
    sectionLead: "Empat hal yang termasuk dalam layanan ini, dari pembungkusan sampai serah terima.",
    items: [
      "Pembuatan wrapper aplikasi Android dari website yang sudah ada",
      "Ikon dan splash screen sesuai brand",
      "Pengujian dasar sebelum serah terima",
      "Opsi lanjut ke jasa upload dan publish ke Play Store",
    ],
    note: "Google Play dapat menolak aplikasi yang hanya membungkus website tanpa fungsi tambahan. Kelayakan aplikasimu kami bahas saat konsultasi, sebelum masuk tahap upload.",
    ctaLabel: "Konsultasi Kebutuhan via WhatsApp",
    waMessage: "Halo, saya ingin konsultasi konversi website ke APK",
    secondary: { label: "Lihat layanan lain", href: "/#layanan" },
    jsonLdDescription: "Kami bantu bungkus website kamu menjadi APK siap pasang, lengkap dengan ikon dan splash screen.",
    showPricing: false,
  },
];
