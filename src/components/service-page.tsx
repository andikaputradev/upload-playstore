import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "./breadcrumb";
import { FAQAccordion } from "./faq-accordion";
import { FinalCta } from "./final-cta";
import { JsonLdScript } from "./json-ld-script";
import { PricingSection } from "./pricing-section";
import { ProcessSteps } from "./process-steps";
import { ServiceCard } from "./service-card";
import { TrackedCta } from "./tracked-cta";
import { faqItems } from "@/content/faq";
import { servicePages } from "@/content/service-pages";
import { services } from "@/content/services";
import { brand, waLink } from "@/lib/brand";
import { getServiceJsonLd } from "@/lib/json-ld";

export function ServicePage({ slug }: { readonly slug: string }) {
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) notFound();

  const title = `${page.accent} ${page.rest}`;
  const related = services.filter((service) => service.slug !== slug);
  const jsonLd = getServiceJsonLd({
    name: title,
    description: page.jsonLdDescription,
    url: `${brand.url}/jasa/${slug}`,
    ...(page.price ? { offers: { price: page.price, priceCurrency: "IDR" } } : {}),
  });

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <section className="relative isolate overflow-hidden bg-bg pb-10 pt-14 md:pb-14 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="bg-grid absolute inset-0" />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <Breadcrumb
            items={[{ label: "Beranda", href: "/" }, { label: "Layanan", href: "/#layanan" }, { label: title }]}
          />
          <h1 className="max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] md:text-[4rem]">
            <span className="gold-text">{page.accent}</span> <span className="fade-text">{page.rest}</span>
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-text-muted md:text-xl">{page.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <TrackedCta
              source="service_page"
              href={waLink(page.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              {page.ctaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </TrackedCta>
            <a href={page.secondary.href} className="btn-mono">
              {page.secondary.label}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-text-muted">
            {page.signals.map((signal) => (
              <li key={signal} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-text-faint" aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:px-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-accent-text">Rincian</p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[2.75rem]">
              <span className="fade-text">{page.sectionTitle}</span>
            </h2>
            <p className="mt-4 text-lg text-text-muted">{page.sectionLead}</p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {page.items.map((item, index) => (
                <li key={item} className="frame flex items-start gap-4 p-5">
                  <span className="text-sm tabular-nums text-accent-text" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            {page.note && (
              <p className="frame mt-4 px-5 py-4 text-[0.875rem] leading-[1.6] text-text-muted">
                <span className="mr-2 text-sm font-semibold text-text">Catatan</span>
                {page.note}
              </p>
            )}
          </div>
        </div>
      </section>

      {page.showPricing && (
        <>
          <PricingSection />
          <ProcessSteps />
          <FAQAccordion items={faqItems.slice(0, 4)} />
        </>
      )}

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <p className="text-sm font-medium text-accent-text">Layanan terkait</p>
          <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[2.75rem]">
            <span className="fade-text">Butuh yang lain</span> <span className="gold-text">sekalian?</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
