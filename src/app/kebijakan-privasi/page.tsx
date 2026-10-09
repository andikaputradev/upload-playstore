import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan Privasi " + brand.name,
  alternates: { canonical: "/kebijakan-privasi" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: brand.name,
    url: "/kebijakan-privasi",
    title: "Kebijakan Privasi | " + brand.name,
    description: "Kebijakan Privasi " + brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan Privasi | " + brand.name,
    description: "Kebijakan Privasi " + brand.name,
  },
};

import { Breadcrumb } from "@/components/breadcrumb";

export default function KebijakanPrivasiPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  ];

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16 md:py-24">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
        Kebijakan Privasi
      </h1>
      <div className="prose prose-invert prose-p:text-text-muted prose-headings:text-text prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
        <p>
          Kebijakan ini berlaku untuk situs uploadplaystore.my.id yang dikelola oleh andikaputradev (&quot;kami&quot;). Kebijakan ini menjelaskan data apa yang kami proses saat kamu menggunakan situs ini atau memesan jasa kami, dan bagaimana data tersebut kami tangani.
        </p>
        
        <h2>Data yang Kami Proses</h2>
        <p>
          Situs ini tidak memiliki formulir pendaftaran dan tidak meminta kamu membuat akun. Data yang kami proses berasal dari percakapan yang kamu mulai sendiri melalui WhatsApp, Instagram, TikTok, atau Telegram, umumnya berupa: nama dan nomor kontak, berkas rilis aplikasi (AAB atau APK), aset store listing (ikon, screenshot, feature graphic, deskripsi), dan detail pesanan jasa yang kamu pilih.
        </p>

        <h2>Bagaimana Kami Memperoleh Data</h2>
        <p>
          Seluruh data di atas kamu kirimkan secara sukarela saat menghubungi kami untuk berkonsultasi atau memesan jasa. Kami tidak mengumpulkan data ini secara otomatis dari situs.
        </p>

        <h2>Tujuan Pemrosesan</h2>
        <p>
          Data kamu kami gunakan semata untuk memproses pesanan jasa yang kamu minta: mengunggah dan mempublikasikan aplikasi, melakukan update sesuai paket yang dibeli, dan berkomunikasi seputar pesanan tersebut. Kami tidak menjual atau menyewakan data kamu kepada pihak ketiga untuk tujuan pemasaran.
        </p>

        <h2>Berbagi Data ke Pihak Ketiga</h2>
        <p>
          Berkas dan aset aplikasi yang kamu berikan akan diunggah ke Google Play Console sebagai bagian dari proses publikasi, sesuai kebutuhan layanan yang kamu pesan. Google memproses data tersebut sesuai kebijakan privasinya sendiri.
        </p>

        <h2>Penyimpanan Data</h2>
        <p>
          Berkas dan aset yang kamu kirimkan kami simpan selama pesanan berjalan dan selama masa berlaku kuota update pada paket yang kamu beli, agar kami dapat memproses update tersebut. Kamu dapat meminta kami menghapus salinan berkas yang kami simpan kapan saja setelah pesanan selesai, dengan menghubungi kontak di bawah.
        </p>
        <p className="text-sm italic text-text-faint mt-2">
          [Asumsi] Durasi retensi dinyatakan mengikuti masa kuota update, bukan angka hari yang pasti; tentukan angka pasti bila Anda ingin lebih spesifik.
        </p>

        <h2>Keamanan Data</h2>
        <p>
          Kami membatasi akses terhadap berkas dan data pesanan hanya kepada tim yang menangani pesanan kamu, dan tidak pernah meminta kata sandi akun Google Play atau akun lain milikmu.
        </p>
        <p className="text-sm italic text-text-faint mt-2">
          [Asumsi] Kunci penandatanganan (keystore) tidak disebutkan karena kebijakan teknisnya belum ditentukan; tambahkan klausul terpisah begitu diputuskan.
        </p>

        <h2>Hak Kamu</h2>
        <p>
          Kamu berhak meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan terkait pesananmu. Ajukan permintaan ini melalui WhatsApp di <a href="https://wa.me/6287730139582" target="_blank" rel="noopener noreferrer">https://wa.me/6287730139582</a>.
        </p>

        <h2>Analitik</h2>
        <p>
          Situs ini memakai alat analitik kunjungan yang tidak memakai cookie dan tidak merekam data yang dapat mengidentifikasi kamu secara pribadi, semata untuk memahami halaman mana yang paling banyak dikunjungi.
        </p>

        <h2>Anak-Anak</h2>
        <p>
          Layanan ini ditujukan untuk pelaku usaha dan pengembang, bukan untuk anak di bawah umur, dan kami tidak sengaja mengumpulkan data dari anak di bawah umur.
        </p>

        <h2>Perubahan Kebijakan</h2>
        <p>
          Kebijakan ini dapat kami perbarui sewaktu-waktu mengikuti perubahan cara kami menjalankan layanan. Tanggal pembaruan terakhir tercantum di bagian bawah halaman ini.
        </p>

        <h2>Kontak</h2>
        <p>
          Pertanyaan seputar kebijakan ini dapat disampaikan melalui WhatsApp di <a href="https://wa.me/6287730139582" target="_blank" rel="noopener noreferrer">https://wa.me/6287730139582</a>.
        </p>

        <p className="mt-8 text-sm text-text-faint">
          Terakhir diperbarui: September 2026
        </p>
      </div>
    </div>
  );
}
