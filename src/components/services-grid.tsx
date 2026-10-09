import { services } from "@/content/services";
import { ServiceCard } from "./service-card";

import { RevealMotion } from "./reveal-motion";

export function ServicesGrid() {
  return (
    <section id="layanan" className="bg-bg-elevated py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent-text">Layanan</p>
          <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[3rem]">
            <span className="fade-text">Dari kode selesai</span> <span className="gold-text">sampai terbit.</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Empat layanan yang saling menyambung: bangun, ubah, rilis, dan rawat aplikasimu tanpa berpindah vendor.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <RevealMotion key={service.slug} index={index}>
              <ServiceCard service={service} />
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
