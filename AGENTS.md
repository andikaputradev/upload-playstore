GUNAKAN SEMUA SKILL YANG TERSEDIA DI .agents/skill

# AGENTS.md

## Konteks proyek

Situs pemasaran statis untuk **uploadplaystore.my.id** (brand **andikaputradev**). Layanan: upload dan publish aplikasi Android ke Play Store, pembuatan aplikasi, pembuatan website, konversi WebView ke APK. Semua konversi terjadi lewat **CTA WhatsApp**.

Fase 0 tidak memiliki: payment gateway, backend, database, form, autentikasi, analitik atau pelacak pihak ketiga.

Baca sebelum bekerja: `DESIGN.md` (token, komponen, wireframe) dan `PROMPT-FASE-0.md` (lingkup, konten lengkap, kriteria terima). Bila dua dokumen bertentangan, urutan prioritas: AGENTS.md, DESIGN.md, PROMPT-FASE-0.md. Laporkan setiap konflik yang ditemukan.

## Stack

- Next.js (App Router, `src/`), React, TypeScript strict, Tailwind CSS, next-themes, lucide-react, clsx, tailwind-merge, zod
- Uji: Vitest, Playwright, @axe-core/playwright
- Manajer paket: npm, dengan `package-lock.json` yang di-commit
- Pasang versi stabil terbaru dari setiap paket, catat versi terpasang di README. Jangan menebak nomor versi dari ingatan.
- Node LTS aktif, dinyatakan di `.nvmrc` dan `engines`

## Perintah wajib tersedia

`npm run dev`, `lint`, `typecheck`, `test`, `e2e`, `build`

## Aturan kode

- `strict: true` dan `noUncheckedIndexedAccess: true`. Tanpa `any`. Tanpa non-null assertion tanpa alasan tertulis.
- Server Components secara default. `"use client"` hanya untuk: ThemeToggle, MobileNav, scroll-spy navigasi.
- Tanpa komentar di kode kecuali benar-benar diperlukan.
- Tanpa placeholder, `TODO`, lorem ipsum, kode mati, `console.log`.
- Semua data bisnis (nomor WhatsApp, handle sosial, paket, harga, FAQ, layanan) berada di `src/lib` dan `src/content` sebagai satu sumber kebenaran. Komponen tidak boleh menulis ulang nilai tersebut.
- Identifier berbahasa Inggris. Teks antarmuka berbahasa Indonesia yang formal dan ramah.
- Alias impor `@/`. Komponen kecil, satu tanggung jawab, props bertipe eksplisit.
- Dependensi di luar daftar Stack hanya boleh ditambah bila ada justifikasi tertulis di README (nama, alasan, dampak ukuran).

## Aturan tipografi

Dilarang menggunakan em dash (U+2014) dan en dash (U+2013) di mana pun: teks UI, string kode, komentar, dokumentasi, pesan commit. Gunakan koma, titik dua, tanda kurung, atau kalimat baru. Untuk rentang gunakan kata "sampai" atau tanda hubung biasa. Wajib ada tes Vitest yang memindai `src/`, `README.md`, `DESIGN.md`, dan `AGENTS.md` untuk kedua karakter tersebut dan gagal bila ditemukan.

## Aturan konten dan klaim

- Dilarang mengarang testimoni, jumlah klien, jumlah aplikasi, rating, atau statistik. Bagian testimoni dan portofolio tidak ada di Fase 0.
- Dilarang menulis: "Aman & Legal", "100% lolos", "dijamin tayang", "langsung tayang", "bebas risiko".
- Klaim "tanpa closed testing 14 hari" wajib disertai penjelasan sebabnya dan keterbukaan bahwa aplikasi diterbitkan melalui akun developer penyedia jasa dan review tetap dilakukan Google.
- Harga coret tampil sebagai "Harga normal". Nilainya opsional per paket di `packages.ts` dan harus lebih besar dari harga jual.
- Dilarang memakai logo resmi Google Play. Mockup memakai ikon buatan sendiri. Footer wajib memuat disclaimer merek dagang.
- Dilarang menaruh tanggal pembuatan akun developer yang persis di situs. Cukup "aktif sejak 2022".

## Keamanan

- Tidak ada rahasia di repositori. Fase 0 tidak memerlukan rahasia.
- Tautan eksternal: `target="_blank"` dengan `rel="noopener noreferrer"`.
- Header keamanan diatur di `next.config`: CSP, HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` yang menonaktifkan kamera, mikrofon, geolokasi, `frame-ancestors 'none'`, `Cross-Origin-Opener-Policy: same-origin`.
- CSP Fase 0: `default-src 'self'`; `script-src 'self' 'unsafe-inline'` (dibutuhkan skrip inline Next.js dan next-themes); `style-src 'self' 'unsafe-inline'`; `img-src 'self' data:`; `font-src 'self'`; `connect-src 'self'`; `base-uri 'self'`; `form-action 'self'`; `object-src 'none'`. `'unsafe-eval'` hanya di development. Catat `'unsafe-inline'` sebagai risiko residual di README beserta rencana penguatan (nonce atau hash) untuk fase berikutnya.
- `dangerouslySetInnerHTML` hanya untuk JSON-LD lewat satu helper yang meng-escape karakter `<`.
- Tanpa skrip, font, atau CDN pihak ketiga. Semua aset self-hosted.
- CI menjalankan `npm audit --audit-level=high`.

## SEO

- `metadataBase` adalah `https://uploadplaystore.my.id`, `lang="id"`, satu canonical, satu `h1` per halaman.
- JSON-LD dibangkitkan dari data di `src/lib` dan `src/content`, bukan ditulis tangan.
- Dilarang menambahkan `AggregateRating` atau `Review`.
- `sitemap.ts` dan `robots.ts` memakai App Router. Halaman `not-found` diberi `noindex`.

## Performa dan aksesibilitas

- Target di mobile ber-throttle: LCP di bawah 2,5 s, INP di bawah 200 ms, CLS di bawah 0,1. JS awal di bawah 120 KB gzip. Ukur dan laporkan hasil aktual, jangan memperkirakan.
- Tanpa pustaka animasi. Semua gerak berbasis CSS dan menghormati `prefers-reduced-motion`.
- WCAG 2.2 AA sebagai batas minimum: kontras terverifikasi dengan alat, fokus terlihat, navigasi papan ketik penuh, HTML semantik, landmark, skip link, target CTA minimal 44 px.
- Tema: default gelap, dapat diganti ke terang, tanpa flash saat muat.

## Git

Branch `fase-0`. Conventional Commits, commit kecil dan bermakna. Jangan `git push`, jangan mengubah remote.

## Verifikasi dan kejujuran

Definition of Done: `lint`, `typecheck`, `test`, `build`, `e2e` lulus; pemeriksaan axe tanpa pelanggaran serious atau critical pada kedua tema; tangkapan layar 375, 768, 1280 px pada kedua tema telah diperiksa secara visual (gunakan browser agent bila tersedia); README lengkap.

Jangan menyatakan sesuatu sudah diuji, dibangun, atau diukur bila perintahnya tidak dijalankan. Laporkan keluaran nyata dan kegagalan apa adanya. Bila ada ambiguitas, ambil asumsi paling konservatif dan catat di README pada bagian Asumsi.

## Adendum Fase 1

Berlaku di atas seluruh aturan Fase 0 di atas, tidak menggantikannya.

- Stack tambahan yang diizinkan: `@vercel/og` (OG image dinamis), `reading-time`, `rss` (feed XML manual tanpa dependensi besar), `@vercel/analytics` versi pelacakan tanpa cookie (bukan Google Analytics). Setiap paket baru tetap dicatat di README beserta versi terpasang.
- Blog memakai MDX statis di `src/content/blog/*.mdx`, frontmatter divalidasi Zod (`title`, `description`, `publishedAt`, `updatedAt`, `keywords`). Dilarang membuat artikel dengan tanggal publikasi di masa depan atau mengarang tanggal; pakai tanggal saat artikel benar-benar ditulis pada fase ini.
- Dilarang membuat halaman portofolio/studi kasus berisi klien atau hasil nyata pada Fase 1. Jika bagian ini diminta, tampilkan hanya sebagai halaman "segera hadir" yang jujur, tanpa data fiktif, atau tunda seluruhnya.
- Halaman legal (`/kebijakan-privasi`, `/syarat-layanan`) memakai isi lengkap yang disediakan di `PROMPT-FASE-1.md`, disalin verbatim ke komponen, bukan digubah ulang oleh agent. Bagian yang ditandai `[Asumsi]` di dalam isi tersebut wajib direproduksi apa adanya berikut catatan asumsinya, tidak dihapus.
- JSON-LD tambahan wajib: `BreadcrumbList` di semua halaman kecuali beranda, `FAQPage` di beranda dan `/harga`, `Article` di setiap halaman blog.
- Analitik, jika dipasang, wajib tanpa cookie, tanpa pengumpulan PII, dan disebutkan keberadaannya di `/kebijakan-privasi`.
- Ikon dan manifest PWA-lite (`manifest.json`, `apple-touch-icon`, `favicon` set) dibangun sebagai SVG/PNG hasil generate dari `Logo`, bukan gambar diunduh dari internet.

## Adendum Fase 2

Berlaku di atas seluruh aturan Fase 0 dan Fase 1, tidak menggantikannya.

### Stack tambahan

`motion` (penerus Framer Motion, `import { motion } from "motion/react"`), `@octokit/rest` (menulis berkas MDX ke repositori lewat GitHub REST API), `bcryptjs` (hashing kata sandi admin), `jose` (menandatangani sesi JWT), `@upstash/redis` dan `@upstash/ratelimit` (khusus membatasi percobaan login `/admin/login`, bukan untuk fitur publik). Setiap paket dicatat di README beserta versi terpasang.

### Admin panel berbasis git, bukan database

Konten blog tetap berupa berkas MDX di `src/content/blog`, bukan dipindah ke database. Admin panel menulis perubahan langsung ke repositori lewat GitHub REST API (`@octokit/rest`), memicu deployment ulang otomatis di Vercel. Draft disimpan sebagai berkas dengan frontmatter `draft: true`, dikecualikan dari `/blog`, `sitemap.ts`, dan diberi `noindex`, tetapi tetap bisa diakses langsung lewat URL-nya untuk pratinjau.

- Autentikasi: satu akun admin, tanpa tabel pengguna. Kata sandi disimpan sebagai hash di env var `ADMIN_PASSWORD_HASH` (bcrypt, dibuat manual sebelum deploy, tidak pernah dikomit ke repositori). Sesi berupa JWT (`jose`) di cookie `httpOnly`, `secure`, `sameSite: strict`, umur maksimal 12 jam.
- Token GitHub (`GITHUB_CONTENT_TOKEN`) memakai fine-grained personal access token yang dibatasi hanya izin `contents: write` pada repositori ini, disimpan sebagai env var, dipakai hanya di route handler sisi server, tidak pernah dikirim ke klien.
- Mitigasi CSRF: pemeriksaan header `Origin`/`Referer` pada setiap route handler `POST`/`PUT` di `/admin`, dikombinasikan dengan `sameSite: strict`. Ini dipilih sebagai mitigasi yang proporsional untuk alat internal satu pengguna, bukan token CSRF terpisah; nyatakan batasan ini di README.
- Rute `/admin/**` diberi `robots: { index: false, follow: false }` dan tidak ditautkan dari navigasi publik maupun sitemap.
- Middleware memeriksa sesi di setiap rute `/admin/**` kecuali `/admin/login`, redirect ke login bila tidak ada sesi valid.
- Setiap aksi publish/hapus dari admin menampilkan dialog konfirmasi sebelum memanggil API, dan menampilkan status jelas (menyimpan, tersimpan, gagal) tanpa membiarkan pengguna menekan tombol dua kali saat proses berjalan (disable tombol selama pending).

### Sistem motion (lihat detail di `DESIGN.md` bagian 8)

- Semua animasi non-interaktif tetap wajib berhenti total di balik `prefers-reduced-motion: reduce`, tanpa kecuali, termasuk animasi hias seperti aurora gradient dan watermark parallax.
- Komponen bermotion berat (aurora background, spotlight cursor-glow, deploy console typewriter) dimuat sebagai client component dengan `dynamic(..., { ssr: false })` agar tidak membebani render server dan tidak menahan LCP.
- Anggaran JS awal untuk halaman beranda naik dari 120 KB menjadi maksimal 180 KB gzip pada Fase 2, sebagai trade-off yang disengaja untuk memenuhi permintaan animasi penuh; halaman blog dan legal tetap di bawah 120 KB karena tidak memuat modul motion berat.
- Efek yang mengikuti kursor (spotlight glow) wajib dinonaktifkan pada perangkat tanpa hover (deteksi lewat `@media (hover: hover)`), tidak dipaksakan di perangkat sentuh.