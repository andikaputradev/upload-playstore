import { ArrowUpRight, Check } from "lucide-react";
import { waLink } from "@/lib/brand";
import { GridBackdrop, HeroTitle } from "./hero-motion";
import { ReleaseStatus } from "./release-status";
import { TrackedCta } from "./tracked-cta";

const signals = ["Akun developer aktif sejak 2022", "Berkas diproses oleh tim", "Peninjauan tetap oleh Google"] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-bg pb-20 pt-16 md:pb-28 md:pt-24">
      <GridBackdrop />
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <HeroTitle />
            <p className="mt-7 max-w-[52ch] text-xl leading-[1.6] text-text">
              Berbulan-bulan kamu membangunnya. Jangan biarkan tertahan di antrean.
            </p>
            <p className="mt-3 max-w-[56ch] text-base leading-[1.7] text-text-muted">
              Closed testing 14 hari berlaku untuk akun developer baru. Berkas yang memenuhi syarat kami ajukan lewat akun developer yang aktif sejak 2022, lalu keputusan akhir tetap di tangan Google.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <TrackedCta
                source="hero"
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
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-text-muted">
              {signals.map((signal) => (
                <li key={signal} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <ReleaseStatus />
          </div>
        </div>
      </div>
    </section>
  );
}
