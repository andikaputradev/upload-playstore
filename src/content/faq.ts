export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export const faqItems: readonly FaqItem[] = [
  {
    id: "closed-testing",
    question: "Apa itu closed testing 14 hari, dan kenapa aplikasi saya tidak perlu menunggunya?",
    answer:
      "Google mewajibkan akun developer personal baru menjalankan closed testing dengan minimal 12 penguji tetap selama 14 hari sebelum bisa rilis ke publik. Akun kami sudah aktif sejak 2022 sehingga tidak termasuk dalam kewajiban tersebut. Aplikasi tetap melewati peninjauan standar Google Play seperti biasa.",
  },
  {
    id: "akun-publish",
    question: "Apakah aplikasi saya terbit atas nama akun saya sendiri?",
    answer:
      "Pada Fase 0 layanan ini, aplikasi dipublikasikan melalui akun developer kami. Opsi pemindahan aplikasi (app transfer) ke akun developer kamu sendiri bisa didiskusikan terpisah, tergantung ketersediaan dan kebijakan Google Play saat itu.",
  },
  {
    id: "berkas",
    question: "Berkas apa saja yang perlu saya siapkan?",
    answer:
      "AAB atau APK yang sudah ditandatangani (signed), ikon aplikasi 512x512 piksel, minimal 2 screenshot, feature graphic 1024x500 piksel, deskripsi singkat dan lengkap, tautan kebijakan privasi aktif, serta informasi kategori dan rating konten.",
  },
  {
    id: "jenis-aplikasi",
    question: "Apakah semua jenis aplikasi bisa dibantu?",
    answer:
      "Sebagian besar aplikasi umum bisa diproses. Kategori yang dibatasi ketat oleh Google, seperti aplikasi keuangan/pinjaman online, perjudian, atau konten dewasa, memerlukan verifikasi tambahan dari Google dan berisiko ditolak terlepas dari siapa yang mengunggah. Jasa ini tidak melayani aplikasi yang melanggar kebijakan Google Play.",
  },
  {
    id: "ditolak",
    question: "Bagaimana kalau aplikasi ditolak saat proses peninjauan Google?",
    answer:
      "Kami bantu meninjau catatan penolakan dari Google dan melakukan perbaikan sesuai arahan tersebut untuk pengajuan ulang. Penerimaan akhir tetap menjadi keputusan Google dan tidak dapat dijamin oleh pihak manapun.",
  },
  {
    id: "durasi",
    question: "Berapa lama proses sampai aplikasi terbit?",
    answer:
      "Verifikasi berkas oleh tim biasanya selesai dalam 1x24 jam. Setelah disubmit, waktu peninjauan Google bervariasi, umumnya beberapa jam hingga beberapa hari, dan berada di luar kendali penyedia jasa.",
  },
];
