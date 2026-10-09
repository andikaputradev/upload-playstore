import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSteps } from "@/components/process-steps";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalCta } from "@/components/final-cta";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLdScript } from "@/components/json-ld-script";
import { faqItems } from "@/content/faq";
import { brand } from "@/lib/brand";
import { packages, formatPrice } from "@/lib/packages";
import { getPricingJsonLd } from "@/lib/pricing-json-ld";
import { seoData } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoData.harga?.title,
  description: seoData.harga?.description,
  alternates: { canonical: "/harga" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: brand.name,
    url: "/harga",
    title: seoData.harga?.title,
    description: seoData.harga?.description,
  },
};

const breadcrumbItems = [{ label: "Beranda", href: "/" }, { label: "Harga", href: "/harga" }];

export default function HargaPage() {
  const selectedFaq = faqItems.filter((item) => item.id === "closed-testing" || item.id === "berkas");
  const lowest = Math.min(...packages.map((pkg) => pkg.price));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: selectedFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLdScript data={getPricingJsonLd()} />
      <JsonLdScript data={faqJsonLd} />
      <section className="relative isolate overflow-hidden bg-bg pb-6 pt-14 md:pb-10 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="bg-grid absolute inset-0" />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] md:text-[4rem]">
            <span className="gold-text">Paket harga</span> <span className="fade-text">upload dan publish ke Play Store</span>
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-text-muted md:text-xl">
            Mulai dari Rp{formatPrice(lowest)}. Aplikasi yang sudah kamu bangun berbulan-bulan tidak perlu menunggu lebih lama: kirim berkasnya, kami yang mengurus pengajuan untuk ditinjau Google.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-text-muted">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-text-faint" aria-hidden="true" />
              Harga coret ditampilkan sebagai harga normal
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-text-faint" aria-hidden="true" />
              Konsultasi awal gratis via WhatsApp
            </li>
          </ul>
        </div>
      </section>
      <PricingSection />
      <ProcessSteps />
      <FAQAccordion items={selectedFaq} />
      <FinalCta />
    </>
  );
}
