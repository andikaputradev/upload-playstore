import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-bg py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
      </div>
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-16">
        <p className="gold-text font-display text-[7rem] font-semibold leading-none tracking-[-0.05em] md:text-[10rem]">404</p>
        <h1 className="mt-4 font-display text-[1.75rem] font-semibold tracking-[-0.02em] text-text md:text-[2.25rem]">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-4 text-text-muted">Halaman yang kamu cari tidak ada atau sudah dipindahkan.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-gold">
            Kembali ke Beranda
          </Link>
          <Link href="/harga" className="btn-mono">
            Lihat paket harga
          </Link>
        </div>
      </div>
    </section>
  );
}
