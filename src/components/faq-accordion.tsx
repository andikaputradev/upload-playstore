import type { FaqItem } from "@/content/faq";

interface FAQAccordionProps {
  readonly items: readonly FaqItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <section id="faq" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[820px] px-6 md:px-16">
        <p className="text-sm font-medium text-accent-text">FAQ</p>
        <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[3rem]">
          <span className="fade-text">Pertanyaan</span> <span className="gold-text">Umum</span>
        </h2>
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <details key={item.id} className="frame group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-medium text-text [&::-webkit-details-marker]:hidden">
                <span className="flex items-baseline gap-4">
                  <span className="text-sm tabular-nums text-accent-text" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </span>
                <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-text-muted" />
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-text-muted transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-text-muted">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
