import { processSteps } from "@/content/process";
import { ProcessLineMotion } from "./process-line-motion";

export function ProcessSteps() {
  return (
    <section id="proses" className="bg-bg-elevated py-16 md:py-24 z-10 relative">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <p className="text-sm font-medium text-accent-text">Alur</p>
        <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[3rem]">
          <span className="fade-text">Proses</span> <span className="gold-text">Kerja</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {i < processSteps.length - 1 && (
                <ProcessLineMotion />
              )}
              <div className="flex items-start gap-4 md:flex-col md:gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface text-sm font-medium text-accent-text shadow-[0_0_20px_-6px_var(--accent)]">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
