import type { Metadata } from "next";
import { servicePages } from "@/content/service-pages";
import { brand } from "./brand";
import { seoData } from "./seo";

export function serviceMetadata(slug: string): Metadata {
  const page = servicePages.find((item) => item.slug === slug);
  const seo = page ? seoData[page.seoKey] : undefined;
  const path = `/jasa/${slug}`;
  return {
    title: seo?.title,
    description: seo?.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: brand.name,
      url: path,
      title: seo?.title,
      description: seo?.description,
    },
  };
}
