# uploadplaystore.my.id

Situs pemasaran statis untuk layanan upload dan publish aplikasi Android ke Play Store (brand andikaputradev).

## Teknologi Utama (Fase 1)

- **Framework**: Next.js 16.3.7 (App Router)
- **Library UI**: React 19.2.8
- **Bahasa**: TypeScript 5.7.3 (Strict mode, noUncheckedIndexedAccess)
- **Styling**: Tailwind CSS v4 (@tailwindcss/postcss)
- **Blog & MDX**: `next-mdx-remote`, `gray-matter`, `reading-time`
- **Dynamic OG Image**: `next/og` (bawaan Next.js)
- **Analitik**: `@vercel/analytics` (tanpa cookie, diatur untuk menghormati privasi)
- **Tema**: next-themes 0.4.6, lucide-react 1.48.0, clsx 2.1.1, tailwind-merge 3.7.0
- **Validasi Data**: zod 4.6.5
- **Pengujian**: Vitest 5.0.2, Playwright 1.63.0, @axe-core/playwright 4.13.0

## Dependensi Tambahan (di luar stack awal)

- `next-mdx-remote`, `gray-matter`, `reading-time`: Digunakan untuk memproses artikel blog berformat MDX. Dampak ukuran sangat minimal (berjalan murni di server/build-time).
- `@vercel/analytics`: Digunakan untuk pelacakan kunjungan pasif. Tanpa cookie, tanpa PII, legal-compliant dengan Kebijakan Privasi. Ukuran ringan.
- `@types/rss`: Definisi tipe untuk kemungkinan build feed di masa mendatang.

## Hasil Pengukuran dan Uji

Berdasarkan proses CI otomatis:
- **Linting**: Lolos
- **Typecheck**: Lolos
- **Vitest (Unit & Typo)**: Lolos
- **Playwright (E2E & Aksesibilitas)**: Lolos (Axe-core memvalidasi tidak ada pelanggaran `serious` atau `critical` pada tema terang maupun gelap)
- **Aksesibilitas Ekstra**: Rasio kontras pada `process-steps` dan `text-faint` telah ditala melebihi skor 4.5:1. `BreadcrumbList`, `FAQPage`, dan `Article` JSON-LD telah diverifikasi berjalan dengan struktur metadata yang utuh.

## Keamanan

- **Content-Security-Policy (CSP)** terkonfigurasi ketat via `next.config.ts`.
- **Risiko residual CSP**: `script-src` dan `style-src` mengizinkan `'unsafe-inline'`. Hal ini diperlukan oleh injeksi skrip `next-themes` (untuk menghindari flash tema) dan analitik minimalis Vercel. Rencana mitigasi masa depan adalah _nonce_ (jika SSR) atau _hash_.

## Asumsi Kebijakan Bisnis (Catatan untuk Pemilik)
Lima klausul legal disusun berbasis asumsi berikut, harap disesuaikan dengan kondisi operasional di masa mendatang:
1. **App Transfer**: Belum ada biaya spesifik untuk permintaan pemindahan aplikasi ke akun milik Klien.
2. **Waktu Pembayaran**: Diasumsikan dibayar utuh sebelum proses pengerjaan dimulai, bukan setelah terbit.
3. **Refund/Pengembalian Dana**: Dana hanya dikembalikan jika terjadi technical error pada pihak kami; apabila ditolak akibat pelanggaran konten Klien, tidak ada refund.
4. **Penyimpanan Data**: Jangka waktu penahanan berkas aplikasi mengacu pada ketersediaan jatah update tiap paket (tidak ditetapkan spesifik mis. 30 hari).
5. **Keystore**: Tidak disebutkan siapa yang akan mengelola dan menyimpan keystore; bergantung apakah ini project buat-baru atau sekadar upload.

## Fase 3: Pengerasan Keamanan, SEO, Analitik, dan Go-Live

Fase 3 berfokus pada penyelesaian detail krusial sebelum peluncuran resmi.

### 1. CSP Nonce & Keamanan
CSP telah diperkuat menggunakan `nonce` dinamis yang dibangkitkan secara acak pada setiap request di `middleware.ts`. Atribut ini disisipkan ke header CSP dan `x-nonce`. Next.js otomatis mendeteksi konfigurasi ini dan menerapkannya pada tag `<script>` internal (termasuk skrip hidrasi dan _next-themes_). Pengaturan header keamanan statis juga sudah dipusatkan di Middleware untuk satu sumber kebenaran. Pengujian di _browser console_ menunjukkan **0 pelanggaran CSP**.

### 2. CI/CD & Dependabot
Berkas workflow `.github/workflows/ci.yml` telah dikonfigurasi untuk menjalankan serangkaian uji: _lint, typecheck, test, e2e, build,_ dan pengecekan Lighthouse otomatis via `lhci`. Pull request sengaja diujicobakan gagal lewat _linting_ sebagai bukti bahwa gerbang ini aktif mencegah masalah terselip ke produksi, lalu dikembalikan hijau. Disediakan pula `.github/dependabot.yml` untuk pengelolaan _npm_ mingguan yang rapi.

### 3. SEO Penutup
- `/rss.xml` ditambahkan, me-render metadata XML otomatis bagi semua artikel blog non-draf.
- Verifikasi Search Console (Google) dan Bing telah disambung ke objek `metadata`. Kode verifikasi ini tinggal menunggu pendaftaran manual dari pemilik bisnis.

### 4. Analitik (Event Vercel Analytics)
Fase ini mengimplementasikan pencatatan _custom event_ `@vercel/analytics` di semua CTA WhatsApp, tanpa merekam data pribadi (tanpa _cookie_). Event yang dilacak: `whatsapp_click` dengan variasi `source` (hero, pricing, final_cta, floating_button, service_page, case_studies_empty) dan varian paket `package`. Pengujian manual (dengan DevTools) memastikan metrik ini dikirimkan dengan sempurna.

### 5. Skema Studi Kasus
Modul koleksi `case-studies` dirancang dengan MDX statis dan skema Zod (termasuk properti `clientType` dan `outcome`). Admin Panel turut dikembangkan supaya mampu beralih mode jenis konten (`Artikel Blog` dan `Studi Kasus`) dan menyimpannya ke struktur folder yang sesuai. Saat ini layar UI masih menampilkan halaman kosong yang jujur, siap merender begitu data ditambahkan oleh admin.

### 6. Dokumentasi Go-Live Domain (Langkah Manual)
Mengarahkan Vercel dengan Cloudflare:
1. Hubungkan `uploadplaystore.my.id` di Dashboard Vercel dan salin record DNS yang direkomendasikan.
2. Tambahkan _record_ pada Cloudflare (gunakan _DNS-only_). Setelah sertifikat aktif di Vercel, _Proxy Cloudflare_ bisa dikembalikan on.
3. Tetapkan Apex (`uploadplaystore.my.id`) sebagai _canonical_ (tidak memakai www) di setelan domain Vercel dengan mekanisme 308 Redirect.
4. Aktifkan DNSSEC dari registri ke Cloudflare untuk _chain of trust_ paripurna.
5. Search Console: Isi variabel `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` dan `NEXT_PUBLIC_BING_SITE_VERIFICATION` setelah mendaftar di dashboard mereka masing-masing.
6. Penyerahan HSTS Preload (`hstspreload.org`) wajib disetujui secara sadar oleh pemilik karena ini sulit dibatalkan.
7. Harap tinjau ulang draf Dokumen Kebijakan Privasi dan Syarat Layanan dengan tenaga hukum sebelum peresmian penuh.

### Daftar Environment Variables (Fase 2 & Fase 3)
| Nama Env | Kegunaan | Wajib/Opsional |
|---|---|---|
| `ADMIN_PASSWORD_HASH` | Hash bcrypt dari sandi login Admin | Wajib |
| `ADMIN_SESSION_SECRET` | Kunci enkripsi untuk JWT Session (`jose`) | Wajib |
| `GITHUB_CONTENT_TOKEN` | Fine-grained PAT, akses tulis Repositori (untuk MDX CMS) | Wajib |
| `GITHUB_REPO` | Nama repo. Contoh: `pemilik/nama-repo` | Wajib |
| `GITHUB_BRANCH` | Nama Branch untuk target commit Admin | Wajib (Default: `main`) |
| `UPSTASH_REDIS_REST_URL` | URL Upstash Redis untuk proteksi _Rate Limiting_ Admin | Wajib |
| `UPSTASH_REDIS_REST_TOKEN` | Token REST Upstash Redis | Wajib |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Kode verifikasi HTML Google Search Console | Opsional (Fase 3) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Kode verifikasi Bing Webmaster | Opsional (Fase 3) |

