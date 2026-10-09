import { ShieldCheck, Clock, Users } from "lucide-react";

import { TrustStripMotion } from "./trust-strip-motion";

const items = [
  {
    icon: ShieldCheck,
    title: "Proses Cepat",
    description: "Tanpa antre closed testing 14 hari untuk aplikasi yang memenuhi syarat.",
  },
  {
    icon: Clock,
    title: "Akun Aktif Sejak 2022",
    description: "Publish tetap tunduk pada peninjauan standar Google Play.",
  },
  {
    icon: Users,
    title: "Ditangani Tim",
    description: "Cukup kirim berkas, sisanya kami yang proses.",
  },
] as const;

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-elevated py-10 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:divide-x md:divide-border">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <TrustStripMotion key={i} index={i}>
                <div
                  className="flex items-start gap-4 md:pl-8 md:first:pl-0 h-full"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-surface text-accent-text">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TrustStripMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
