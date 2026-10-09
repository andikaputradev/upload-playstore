import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Syarat Layanan",
  description: "Syarat Layanan " + brand.name,
  alternates: { canonical: "/syarat-layanan" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: brand.name,
    url: "/syarat-layanan",
    title: "Syarat Layanan | " + brand.name,
    description: "Syarat Layanan " + brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Syarat Layanan | " + brand.name,
    description: "Syarat Layanan " + brand.name,
  },
};

import { Breadcrumb } from "@/components/breadcrumb";

export default function SyaratLayananPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Syarat Layanan", href: "/syarat-layanan" },
  ];

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16 md:py-24">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
        Syarat Layanan
      </h1>
      <div className="prose prose-invert prose-p:text-text-muted prose-headings:text-text prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
        <p>
          Syarat Layanan ini mengatur penggunaan jasa yang ditawarkan andikaputradev (&quot;Penyedia Jasa&quot;) melalui situs uploadplaystore.my.id kepada setiap pemesan jasa (&quot;Klien&quot;). Dengan memesan jasa kami, Klien dianggap menyetujui syarat berikut.
        </p>

        <h2>1. Ruang Lingkup Layanan</h2>
        <p>
          Penyedia Jasa menawarkan empat jenis layanan: upload dan publish aplikasi ke Google Play Store sesuai paket harga yang berlaku, pembuatan aplikasi Android, pembuatan website, dan konversi website menjadi aplikasi Android (WebView ke APK). Cakupan detail tiap paket layanan upload dan publish mengikuti tabel harga yang tercantum di halaman Harga pada saat pesanan dibuat.
        </p>

        <h2>2. Kewajiban Klien</h2>
        <p>
          Klien menjamin bahwa berkas rilis aplikasi (AAB/APK) yang diserahkan sah, sudah ditandatangani dengan benar, dan bahwa Klien memiliki hak penuh atas seluruh konten aplikasi termasuk kode, aset, dan merek yang digunakan. Klien bertanggung jawab penuh atas kepatuhan aplikasi terhadap Kebijakan Program Developer Google Play, termasuk namun tidak terbatas pada larangan malware, konten dewasa tanpa rating yang sesuai, perjudian ilegal, pinjaman online ilegal, dan pelanggaran hak kekayaan intelektual pihak lain. Klien wajib menyediakan tautan kebijakan privasi aplikasi yang aktif sebagaimana disyaratkan Google Play.
        </p>

        <h2>3. Kewajiban Penyedia Jasa</h2>
        <p>
          Penyedia Jasa akan mengunggah berkas dan aset sesuai yang diserahkan Klien tanpa mengubah fungsi aplikasi, dan memproses update sesuai kuota paket yang dibeli. Penyedia Jasa tidak dapat menjamin aplikasi akan disetujui oleh Google Play karena keputusan peninjauan sepenuhnya berada di tangan Google.
        </p>

        <h2>4. Publikasi dan Kepemilikan Akun</h2>
        <p>
          Pada tahap layanan saat ini, aplikasi dipublikasikan melalui akun developer Google Play milik Penyedia Jasa. Klien tidak menerima kepemilikan akun tersebut. Permintaan pemindahan aplikasi (app transfer) ke akun developer milik Klien sendiri dapat didiskusikan secara terpisah dan dapat dikenakan biaya tambahan sesuai kesepakatan.
        </p>
        <p className="text-sm italic text-text-faint mt-2">
          [Asumsi] Butir 4, biaya tambahan untuk app transfer: besarannya belum ditentukan.
        </p>

        <h2>5. Pembayaran</h2>
        <p>
          Pembayaran dilakukan secara manual melalui transfer, dikonfirmasi lewat WhatsApp, tanpa melalui payment gateway di situs ini. Rincian nominal dan metode pembayaran disepakati langsung antara Klien dan Penyedia Jasa sebelum proses pengerjaan dimulai. Harga yang tercantum di situs dapat berubah sewaktu-waktu dan tidak berlaku surut terhadap pesanan yang sudah disepakati sebelumnya.
        </p>
        <p className="text-sm italic text-text-faint mt-2">
          [Asumsi] Butir 5, waktu pembayaran (diasumsikan sebelum pengerjaan dimulai): sesuaikan bila kebijakan Anda berbeda, misalnya sebagian di muka dan sebagian setelah terbit.
        </p>

        <h2>6. Pembatalan dan Pengembalian Dana</h2>
        <p>
          Apabila aplikasi ditolak Google Play akibat kesalahan teknis dalam proses pengunggahan oleh Penyedia Jasa, Penyedia Jasa akan memperbaiki dan mengajukan ulang tanpa biaya tambahan. Apabila penolakan disebabkan oleh isi atau konten aplikasi milik Klien yang tidak sesuai kebijakan Google Play, dana yang telah dibayarkan untuk upaya pengunggahan tersebut tidak dapat dikembalikan.
        </p>
        <p className="text-sm italic text-text-faint mt-2">
          [Asumsi] Butir 6, kebijakan refund: ini adalah kebijakan default yang wajar, tetapi Anda mungkin ingin memberi sebagian pengembalian dana dalam skenario tertentu.
        </p>

        <h2>7. Batasan Tanggung Jawab</h2>
        <p>
          Penyedia Jasa tidak bertanggung jawab atas kerugian tidak langsung yang timbul akibat penundaan peninjauan, penolakan, penurunan (takedown), atau penangguhan aplikasi oleh Google Play. Tanggung jawab Penyedia Jasa atas suatu pesanan dibatasi maksimal sebesar nilai yang telah dibayarkan Klien untuk pesanan tersebut.
        </p>

        <h2>8. Keadaan Memaksa</h2>
        <p>
          Penyedia Jasa tidak bertanggung jawab atas keterlambatan atau kegagalan pemenuhan layanan yang disebabkan oleh keadaan di luar kendali wajar, termasuk gangguan pada platform Google Play.
        </p>

        <h2>9. Hukum yang Berlaku</h2>
        <p>
          Syarat Layanan ini tunduk pada hukum Republik Indonesia. Perselisihan yang timbul akan diupayakan penyelesaiannya secara musyawarah terlebih dahulu.
        </p>

        <h2>10. Perubahan Syarat</h2>
        <p>
          Penyedia Jasa dapat memperbarui Syarat Layanan ini sewaktu-waktu. Tanggal pembaruan terakhir tercantum di bagian bawah halaman ini.
        </p>

        <h2>11. Kontak</h2>
        <p>
          Pertanyaan seputar Syarat Layanan ini dapat disampaikan melalui WhatsApp di <a href="https://wa.me/6287730139582" target="_blank" rel="noopener noreferrer">https://wa.me/6287730139582</a>.
        </p>

        <p className="mt-8 text-sm text-text-faint">
          Terakhir diperbarui: September 2026
        </p>
      </div>
    </div>
  );
}
