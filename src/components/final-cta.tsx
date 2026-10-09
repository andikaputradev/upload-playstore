import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/brand";
import { TrackedCta } from "./tracked-cta";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-bg-elevated py-20 md:py-28">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="frame mx-auto max-w-3xl px-6 py-14 text-center md:px-14">
          <p className="text-sm font-medium text-accent-text">Langkah terakhir</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[3rem]">
            <span className="fade-text">Aplikasi yang sudah jadi</span>
            <br />
            <span className="gold-text">layak dipakai orang.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-text-muted">
            Kirim berkasnya, kami periksa dan urus prosesnya sampai diajukan untuk ditinjau Google. Konsultasi awal gratis, tanpa kewajiban.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedCta
              source="final_cta"
              href={waLink("Halo, saya ingin konsultasi upload aplikasi ke Play Store")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Konsultasi Gratis via WhatsApp
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </TrackedCta>
            <a href="/harga" className="btn-mono">
              Lihat paket harga
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
