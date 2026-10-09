GUNAKAN SEMUA SKILL YANG TERSEDIA DI .agents/skill

# DESIGN.md

## 1. Konsep

Audiens utama adalah pengembang aplikasi Android individu dan tim kecil yang sudah selesai membangun aplikasi tetapi terhambat oleh proses rilis. Konsep visual: **konsol deployment**, bukan brosur jasa umum. Alih-alih mockup ponsel berlogo Google Play (dilarang, lihat AGENTS.md), elemen hero adalah panel log deployment orisinal yang berakhir pada status "TERBIT" berwarna hijau. Ini menghubungkan identitas dev tool (cocok untuk audiens RPL/developer) dengan janji inti: melewati antrean closed testing 14 hari.

Referensi arah dari ObsidianUI yang dipakai: tipografi display besar rata kiri, nav bar tipis dengan latar blur, badge pill kecil di atas judul, kontras tinggi latar gelap sebagai default. Yang **tidak** ditiru: bintang GitHub dan avatar kontributor, karena tidak relevan untuk jasa ini.

## 2. Token

### Warna, mode gelap (default)

| Token | Hex | Peran |
|---|---|---|
| `--bg` | `#0B0F14` | Latar dasar |
| `--bg-elevated` | `#10151C` | Latar section alternatif |
| `--surface` | `#141A22` | Kartu, panel |
| `--border` | `#232B36` | Garis pemisah, outline kartu |
| `--text` | `#E7EBF0` | Teks utama |
| `--text-muted` | `#8D97A6` | Teks sekunder |
| `--text-faint` | `#5C6675` | Label, meta |

### Warna, mode terang

| Token | Hex | Peran |
|---|---|---|
| `--bg` | `#F6F7F9` | Latar dasar |
| `--bg-elevated` | `#FFFFFF` | Latar section alternatif |
| `--surface` | `#FFFFFF` | Kartu, panel |
| `--border` | `#E1E5EA` | Garis pemisah, outline kartu |
| `--text` | `#0E1218` | Teks utama |
| `--text-muted` | `#57616F` | Teks sekunder |
| `--text-faint` | `#7C8592` | Label, meta |

### Aksen (sama di kedua mode, satu titik keberanian)

| Token | Hex | Peran |
|---|---|---|
| `--accent` | `#3D7EFF` | CTA utama, tautan, focus ring |
| `--accent-strong` | `#2E63D9` | Hover/active pada elemen aksen |
| `--success` | `#22C55E` | Status pill "TERBIT", ikon centang, khusus fungsional |
| `--highlight` | `#F2B807` | Hanya untuk pita "Paling Hemat" pada paket Premium, tidak dipakai di tempat lain |

Kontras seluruh pasangan teks/latar di atas wajib diverifikasi mencapai rasio WCAG AA (4.5:1 teks normal, 3:1 teks besar) sebelum implementasi final; sesuaikan lightness bila alat pengukur menunjukkan kurang.

### Tipografi

| Peran | Font | Bobot | Catatan |
|---|---|---|---|
| Display (H1, H2, angka harga) | **Space Grotesk** | 500, 600, 700 | Karakter geometris, beda tegas dari body |
| Body, UI, nav | **IBM Plex Sans** | 400, 500, 600 | Mendukung diakritik Indonesia dengan baik |
| Data mono (harga coret, status pill, kode paket) | **IBM Plex Mono** | 500 | Dipakai sempit, hanya elemen data pendek, bukan paragraf |

Skala tipe (rem, basis 16px, desktop lalu mobile):
- H1: `3.25rem / 1.05` tracking `-0.02em`, mobile `2.25rem / 1.1`
- H2: `2rem / 1.15`, mobile `1.625rem`
- H3: `1.375rem / 1.3`
- Body besar: `1.125rem / 1.6`
- Body: `1rem / 1.6`
- Kecil/meta: `0.875rem / 1.5`
- Mono label: `0.8125rem`, tracking `0.01em`

Panjang baris konten dijaga di bawah 80 karakter (`max-width: 65ch` pada paragraf).

### Spasi dan radius

- Skala spasi: `4, 8, 12, 16, 24, 32, 48, 64, 96` px
- `--radius-sm: 8px` (tombol, chip)
- `--radius-md: 14px` (kartu layanan, kartu FAQ)
- `--radius-lg: 20px` (panel hero, kartu harga)
- `--radius-full` (badge, pita, avatar/monogram logo)

Radius tidak seragam di semua elemen. Tombol lebih kecil dari kartu, panel hero paling besar, badge selalu pil penuh.

### Bayangan

Mode gelap: tanpa bayangan, hierarki dibentuk lewat `--border` dan `--surface`. Mode terang: kartu diam tanpa bayangan (`border: 1px solid var(--border)`), saat hover baru muncul `box-shadow: 0 8px 24px rgba(15,23,42,0.10)`. Tidak ada bayangan abu-abu generik yang seragam di semua kartu dalam kondisi diam.

## 3. Layout

Grid 12 kolom, `max-width: 1200px`, margin luar `24px` mobile dan `64px` desktop. Konten rata kiri, bukan rata tengah, mengikuti pola ObsidianUI.

### Wireframe: Header

```
[AP]  Layanan  Harga  Proses  FAQ                [☾/☀]  [Hubungi via WhatsApp →]
```

Sticky, latar blur tipis (`backdrop-filter: blur(8px)`), border bawah 1px. Di mobile: logo kiri, tombol hamburger kanan, tema toggle masuk ke drawer.

### Wireframe: Hero (desktop, 7 kolom teks / 5 kolom visual)

```
[pil: Jasa Rilis Aplikasi Android]

Aplikasimu Siap.
Terbit di Play Store           +----------------------------+
Tanpa Antre 14 Hari.           | $ deploy submit --app=rpl  |
                                | > verifikasi berkas   OK   |
Lorong closed testing 14 hari  | > unggah ke Play Console OK|
dibuat untuk akun developer    | > kirim untuk ditinjau  OK |
baru. Akun kami aktif sejak    |                            |
2022, jadi berkas yang lolos   | ● TERBIT DI PLAY STORE     |
syarat bisa langsung diproses. |   tanpa closed testing     |
                                +----------------------------+
[Konsultasi Gratis via WhatsApp →]   [Lihat Paket Harga]
```

Panel kanan (`Deploy Console`) adalah satu-satunya elemen bermotion terorkestrasi: baris log muncul berurutan sekali saat pertama masuk viewport (staggered fade, total < 900ms), berhenti di status akhir. Tidak diulang saat hover.

### Wireframe: Trust strip

```
⚡ Proses Cepat          🕓 Akun Aktif Sejak 2022        🤝 Ditangani Tim
Tanpa antre closed       Publish tetap tunduk pada        Cukup kirim berkas,
testing 14 hari          peninjauan standar Google        sisanya kami proses
```

Tiga kartu tipis sejajar, ikon di kiri teks (bukan di atas), tanpa border tebal, dipisah garis vertikal tipis antar item pada desktop.

### Wireframe: Layanan (4 kartu, 2x2 desktop, 1 kolom mobile)

```
+-------------------+  +-------------------+
| Upload & Publish  |  | Pembuatan Aplikasi |
| ke Play Store     |  |                    |
| ...               |  | ...                |
| Lihat detail →    |  | Lihat detail →     |
+-------------------+  +-------------------+
+-------------------+  +-------------------+
| Pembuatan Website |  | Konversi WebView   |
| ...               |  | ke APK             |
| Lihat detail →    |  | Lihat detail →     |
+-------------------+  +-------------------+
```

### Wireframe: Harga (4 kartu sejajar desktop, carousel/stack mobile)

```
Basic          Standard        Pro            Premium ⭐ Paling Hemat
Rp199.000      Rp299.000       Rp399.000      Rp499.000
Rp225.000      Rp325.000       Rp450.000      Rp599.000   (mono, dicoret)
--------       --------        --------       --------
✓ item         ✓ item          ✓ item         ✓ item
✓ item         ✓ item          ✓ item         ✓ item
[Pilih Paket]  [Pilih Paket]   [Pilih Paket]  [Pilih Paket]
```

Kartu Premium: border memakai `--highlight`, pita teks "Paling Hemat" di sudut atas, sedikit lebih tinggi (`transform: translateY(-8px)` desktop saja). Setiap tombol paket adalah tautan `wa.me` dengan pesan pra-isi menyebut nama paket.

### Wireframe: Proses (sequence, penomoran sah karena memang berurutan)

```
01 Kirim Berkas → 02 Verifikasi → 03 Upload & Publish → 04 Serah Terima
```

Garis penghubung tipis horizontal (desktop) atau vertikal (mobile) di antara nomor.

### Wireframe: FAQ

Accordion satu kolom, `max-width: 720px`, satu item terbuka default (pertanyaan closed testing), item lain tertutup. Ikon chevron berotasi saat dibuka.

### Wireframe: CTA penutup dan Footer

```
Siap rilis aplikasimu?
[Konsultasi Gratis via WhatsApp →]

--------------------------------------------------
Layanan          Kontak                 Legal
- Upload Play    WhatsApp               Kebijakan Privasi
  Store          Instagram              Syarat Layanan
- Pembuatan App  TikTok
- Pembuatan Web  Telegram
- WebView ke APK

andikaputradev bukan afiliasi resmi Google atau Google Play.
Google Play adalah merek dagang Google LLC.
```

Tombol WhatsApp mengambang (`position: fixed; bottom: 24px; right: 24px`) muncul di semua halaman kecuali saat footer sudah terlihat penuh di viewport (dihindari tumpang tindih dengan CTA penutup).

## 4. Komponen

| Komponen | Client/Server | Catatan |
|---|---|---|
| `SiteHeader` | Server, kecuali `ThemeToggle` dan `MobileNav` di dalamnya | Sticky |
| `ThemeToggle` | Client | `next-themes`, ikon matahari/bulan, tanpa flash |
| `MobileNav` | Client | Drawer, trap fokus, tutup dengan Escape |
| `Hero` + `DeployConsole` | Server, animasi via CSS `@keyframes` murni tanpa JS animasi | Hormati `prefers-reduced-motion`: langsung tampil status akhir |
| `TrustStrip` | Server | 3 item tetap |
| `ServiceCard` / `ServicesGrid` | Server | Tautan ke `/jasa/[slug]` |
| `PricingCard` / `PricingSection` | Server | Data dari `packages.ts`, harga mono |
| `ProcessSteps` | Server | Data dari `process.ts` |
| `FAQAccordion` | Client (state buka/tutup) | Data dari `faq.ts`, `<details>`/`<summary>` native lebih disukai untuk aksesibilitas dan progressive enhancement |
| `FinalCta` | Server | |
| `SiteFooter` | Server | |
| `WhatsAppFloatingButton` | Client | `aria-label="Hubungi via WhatsApp"`, disembunyikan dari pembaca layar duplikat saat CTA utama terlihat via `aria-hidden` kondisional opsional, minimal `44x44px` |
| `Badge`, `StatusPill` | Server | Pil, dipakai di hero dan trust strip |
| `Logo` | Server | Monogram teks "AP" dalam kotak `--radius-full`? Tidak, kotak `--radius-md`, latar `--accent`, huruf putih Space Grotesk 700. Bukan file gambar |

## 5. Gerak dan aksesibilitas

- Satu momen bermotion: sekuens log di `DeployConsole` saat pertama masuk viewport.
- Transisi tema: `transition: background-color .2s ease, color .2s ease` pada `body` saja, tidak pada seluruh elemen.
- Hover kartu: elevasi bayangan (mode terang) atau border lebih terang (mode gelap), `150ms ease`.
- Semua motion di atas nonaktif total di balik `@media (prefers-reduced-motion: reduce)`.
- Fokus: `outline: 2px solid var(--accent); outline-offset: 2px` pada semua elemen interaktif, tidak dihilangkan dengan `outline: none` tanpa pengganti.
- Urutan tab logis mengikuti urutan visual. Skip link "Lompat ke konten utama" sebagai elemen pertama di `<body>`.

## 6. Nada penulisan

Aktif, langsung, tanpa jargon pemasaran berlebihan. Tombol memakai kata kerja yang menyatakan hasil ("Konsultasi Gratis via WhatsApp", bukan "Klik di sini"). Tidak ada eyebrow huruf kapital semua, tidak ada tanda panah "→" ditambahkan otomatis ke setiap tautan, hanya dipakai pada CTA utama sebagai penanda tindakan eksternal (membuka WhatsApp).

## 7. Adendum Fase 1

Berlaku di atas bagian 1 sampai 6, tidak menggantikannya.

### Breadcrumb

Teks kecil di atas H1 pada semua halaman kecuali beranda: `Beranda / Layanan / Upload & Publish`, pemisah `/` dalam `--text-faint`, item terakhir dalam `--text`, bukan tautan. `font-family: var(--font-mono)`, `font-size: 0.8125rem`.

### Tipografi artikel blog

Lebar konten `max-width: 68ch`. `H2` artikel dalam skala sama seperti H2 situs tapi `2rem` menjadi batas atas, `H3` artikel `1.25rem`. Paragraf `1.0625rem/1.75` (sedikit lebih lega dari body situs untuk keterbacaan artikel panjang). Blok kode (bila ada) memakai `--font-mono`, latar `--surface`, border `--border`, tanpa nomor baris. Kutipan (`blockquote`) memakai garis kiri `3px solid var(--accent)`, bukan tanda kutip besar dekoratif.

### Kartu artikel (blog index)

Sama seperti `ServiceCard` (radius medium, border tipis) ditambah baris meta di bawah judul: `{waktu baca} • {tanggal terbit}` dalam `--font-mono`, `--text-faint`.

### Template OG image (`@vercel/og`)

1200x630, latar `--bg` mode gelap selalu (OG image tidak mengikuti tema pembaca), logo monogram di kiri atas, judul halaman dalam Space Grotesk 600 memenuhi dua pertiga lebar, satu baris meta di bawah judul (nama layanan atau "Blog"), tanpa foto atau ilustrasi tambahan.

### Ikon dan manifest

Favicon dan `apple-touch-icon` adalah versi vektor dari `Logo` (monogram "AP" di atas `--accent`), diekspor pada 16, 32, 180, 192, 512 px. `manifest.json`: `name: "andikaputradev"`, `short_name: "andikaputradev"`, `theme_color: "#0B0F14"`, `background_color: "#0B0F14"`, `display: "standalone"`. Tidak ada service worker atau caching offline pada Fase 1, hanya manifest untuk "tambahkan ke layar utama".

## 8. Sistem Motion (Fase 2)

Arahan berubah dari "satu momen bermotion" di Fase 0/1 menjadi katalog animasi penuh yang disengaja, atas permintaan eksplisit pemilik bisnis. Prinsip yang tetap dipegang: setiap animasi punya alasan (menunjukkan hierarki, status, atau urutan), bukan sekadar hiasan yang diulang identik di setiap bagian, dan semuanya berhenti total di balik `prefers-reduced-motion: reduce`.

### Latar hero: aurora dan watermark

Dua sampai tiga radial-gradient blur lembut (`--accent` dan `--highlight` opasitas rendah) bergerak perlahan dalam `@keyframes` 20 sampai 30 detik per siklus, `will-change: transform`, murni CSS tanpa JS. Wordmark raksasa "uploadplaystore" opasitas sangat rendah di latar belakang hero, bergeser halus mengikuti scroll lewat `transform: translateY()` yang terikat pada posisi scroll (bukan parallax library, cukup `scroll` event yang di-throttle lewat `requestAnimationFrame` atau `animation-timeline: scroll()` di browser yang mendukung, dengan fallback statis).

### H1: reveal per baris

Setiap baris H1 dibungkus `overflow: hidden`, teks masuk dengan `clip-path` atau `transform: translateY(100%) → 0` bertahap antar baris (`stagger` 60 sampai 80ms), sekali saat halaman dimuat, tidak diulang.

### Deploy Console: typewriter

Baris log muncul karakter demi karakter (bukan sekadar fade), diakhiri kursor mono berkedip yang tetap berkedip pelan setelah sekuens selesai sebagai penanda "live", frekuensi kedap rendah agar tidak mengganggu.

### Header: condense on scroll

Padding vertikal header mengecil dan intensitas `backdrop-blur` bertambah saat `scrollY > 24px`, transisi `200ms ease`. Garis bawah tautan nav aktif berpindah antar item lewat animasi layout (`layoutId` pada pustaka `motion`) saat hover, bukan muncul-hilang statis.

### Kartu (layanan, artikel): reveal bervariasi per kelompok

Kartu layanan: scale-up halus (`0.96 → 1`) plus opacity, staggered per kartu saat masuk viewport. Item trust strip: reveal lewat `clip-path` wipe kiri ke kanan, staggered, teknik berbeda dari kartu layanan agar tidak terasa seperti satu efek yang ditempel ke semua elemen. Kartu artikel blog: opacity saja tanpa transform tambahan, sengaja lebih tenang karena halaman blog memprioritaskan keterbacaan.

### Spotlight cursor-glow

Pada `PricingCard` dan panel `DeployConsole`: lapisan `radial-gradient` mengikuti posisi kursor lewat CSS custom properties (`--mx`, `--my`) yang diperbarui lewat `pointermove` yang dibungkus `requestAnimationFrame`. Aktif hanya di `@media (hover: hover) and (pointer: fine)`, mati total di perangkat sentuh dan di balik reduced motion.

### Harga: angka menghitung naik

Digit harga (`PricingCard`) menghitung dari 0 ke nilai asli sekali saat kartu pertama masuk viewport, `font-variant-numeric: tabular-nums` agar lebar digit stabil selama animasi. Reduced motion: langsung tampil nilai akhir tanpa hitungan.

### Kartu Premium: glow pulsa

Border kartu Premium berdenyut halus dengan `--highlight` (opacity 0.4 sampai 0.7, siklus 3 detik, `ease-in-out`), menandakan status "paling direkomendasikan", berhenti di balik reduced motion.

### Proses: garis tergambar

Garis penghubung antar langkah di `ProcessSteps` adalah `<svg>` dengan `stroke-dasharray`/`stroke-dashoffset` yang beranimasi seiring elemen memasuki viewport, meniru "menggambar" jalur, sesuai dengan sifat kontennya yang memang berurutan.

### Tombol dan tautan: hover terarah

Tombol primer: `transform: scale(1.02)` plus bayangan glow `--accent` pada hover, `120ms ease`. Tautan nav: garis bawah tipis muncul dari tengah ke tepi (`transform: scaleX(0) → 1`, `transform-origin: center`), bukan sekadar berganti warna.

### Transisi halaman

Navigasi antar rute memakai View Transitions API native (`document.startViewTransition`) untuk cross-fade halus, terdegradasi anggun (navigasi instan tanpa transisi) di browser yang belum mendukung, tanpa pustaka tambahan.

### Batasan yang disengaja

Tidak ada kursor kustom, tidak ada efek tilt 3D pada kartu, tidak ada partikel atau confetti, tidak ada parallax berlapis-lapis di luar yang disebut di atas. Kepadatan animasi dijaga supaya tiap efek tetap terasa sebagai keputusan, bukan tempelan generik di setiap elemen.

## 9. UI Admin (Fase 2)

Admin adalah alat kerja internal, bukan panggung showcase, sehingga secara sengaja jauh lebih tenang dibanding situs publik: token warna dan tipografi sama (`--bg`, `--surface`, `--border`, Space Grotesk/IBM Plex Sans), tetapi tanpa aurora, tanpa watermark, tanpa spotlight cursor. Motion di admin murni fungsional: transisi status tombol (memuat, tersimpan, gagal), highlight singkat pada baris yang baru disimpan, dan animasi buka/tutup dialog konfirmasi.

**`/admin/login`:** satu kartu terpusat, field kata sandi, tombol "Masuk", pesan galat inline bila salah.

**`/admin`:** tabel/daftar artikel (judul, status `Draf`/`Terbit`, tanggal ubah terakhir), tombol "Tulis Artikel Baru", aksi edit dan hapus per baris.

**`/admin/articles/new` dan `/admin/articles/[slug]/edit`:** form dengan field `title`, `description`, `slug` (otomatis dari judul, dapat diedit manual), area teks MDX dengan pratinjau berdampingan (split view), toggle `draft`, tombol "Simpan sebagai Draf" dan "Terbitkan".

## 10. Redesain Fase 3

Arah visual berganti ke gabungan tiga referensi: ObsidianUI (judul display besar rata kiri dengan gradien putih ke abu, nav berbentuk pil, watermark raksasa), ASTER (latar hitam pekat, judul dua warna emas dan putih, CTA pil gradien emas, cincin bercahaya, garis kisi dan bintang), Lighter (label mono huruf kapital, panel berbingkai dengan sudut siku, kolom ASCII, teks yang teracak lalu terungkap).

Token baru: `--gold-a`, `--gold-b`, `--gold-c` (gradien emas), `--periwinkle` (CTA sekunder mono), `--on-accent` dan `--on-periwinkle` (teks di atas isian). Tema terang memakai versi gelap dari emas agar kontras tetap mencapai AA. Font: Inter Tight (display), Inter (body), JetBrains Mono (data dan label).

Bagian 6 yang melarang eyebrow huruf kapital semua dicabut untuk label mono kecil dan tombol sekunder. Aturan klaim di AGENTS.md tetap berlaku penuh. Ilustrasi konsol hero wajib diberi keterangan bahwa itu simulasi.


## 11. Pembersihan Keterbacaan

Bagian 10 diperbarui: label mono huruf kapital, sudut siku pada panel, kolom ASCII, bintang, watermark, teks teracak, dan gradien pudar pada judul dicabut karena menurunkan keterbacaan. Judul memakai warna solid dengan satu frasa beraksen emas. Label seksi memakai kalimat biasa berwarna aksen. Panel memakai sudut membulat dan garis tipis. Tombol sekunder berupa pil bergaris. Konsol hero diganti kartu status teks biasa yang bersifat ilustrasi dan diberi keterangan. Font mono hanya untuk kode.
