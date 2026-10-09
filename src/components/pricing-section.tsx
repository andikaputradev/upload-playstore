import { packages } from "@/lib/packages";
import Link from "next/link";
import PricingCardClient from "./pricing-card-client";

export function PricingSection() {
  return (
    <section id="harga" className="relative bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent-text">Paket</p>
          <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[3rem]">
            <span className="fade-text">Pilih paket sesuai</span> <span className="gold-text">seberapa jauh kamu ingin dibantu.</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Semua paket memakai alur yang sama: kirim berkas, kami periksa, lalu ajukan untuk ditinjau Google. Bedanya ada pada jumlah update, optimasi store listing, dan tingkat dukungan.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PricingCardClient key={pkg.code} pkg={pkg} />
          ))}
        </div>
        <p className="frame mt-10 px-5 py-4 text-[0.875rem] leading-[1.6] text-text-muted">
          <span className="mr-2 text-sm font-semibold text-text">Catatan</span>
          Harga dapat berubah sewaktu-waktu. Proses tetap tunduk pada peninjauan Google Play, dan hasil peninjauan ditentukan oleh Google. Lihat{" "}
          <Link href="/syarat-layanan" className="underline transition-colors duration-150 hover:text-text">
            Syarat Layanan
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
