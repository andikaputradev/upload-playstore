export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Kirim Berkas",
    description:
      "Kirim AAB/APK yang sudah ditandatangani beserta aset store listing via WhatsApp.",
  },
  {
    number: "02",
    title: "Verifikasi",
    description:
      "Tim memeriksa kelengkapan berkas dan kesesuaian dengan kebijakan Google Play.",
  },
  {
    number: "03",
    title: "Upload & Publish",
    description:
      "Aplikasi diunggah dan disubmit untuk ditinjau Google, tanpa antre closed testing.",
  },
  {
    number: "04",
    title: "Serah Terima",
    description:
      "Kamu menerima tautan Play Store dan panduan pengelolaan setelah aplikasi terbit.",
  },
];
