import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ServicesGrid } from "@/components/services-grid";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSteps } from "@/components/process-steps";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalCta } from "@/components/final-cta";
import { JsonLdScript } from "@/components/json-ld-script";
import { faqItems } from "@/content/faq";
import { seoData } from "@/lib/seo";
import { brand } from "@/lib/brand";
import { getOrganizationJsonLd, getWebSiteJsonLd, getServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: seoData.home?.title,
  description: seoData.home?.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: brand.name,
    url: "/",
    title: seoData.home?.title,
    description: seoData.home?.description,
  },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceJsonLd = getServiceJsonLd({
    name: "Jasa Upload dan Publish Aplikasi ke Play Store",
    description: seoData.uploadPlayStore?.description ?? "",
    url: `${brand.url}/jasa/upload-play-store`,
    offers: {
      price: 199000,
      priceCurrency: "IDR",
    },
  });

  return (
    <>
      <JsonLdScript data={getOrganizationJsonLd()} />
      <JsonLdScript data={getWebSiteJsonLd()} />
      <JsonLdScript data={serviceJsonLd} />
      <JsonLdScript data={faqJsonLd} />
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <PricingSection />
      <ProcessSteps />
      <FAQAccordion items={faqItems} />
      <FinalCta />
    </>
  );
}
