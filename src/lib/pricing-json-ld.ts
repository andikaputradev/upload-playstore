import { brand } from "./brand";
import { packages } from "./packages";

export function getPricingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Upload dan Publish Aplikasi ke Google Play Store",
    serviceType: "Upload dan publish aplikasi Android",
    areaServed: "ID",
    url: `${brand.url}/harga`,
    provider: { "@type": "Organization", name: brand.name, url: brand.url },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paket harga",
      itemListElement: packages.map((pkg) => ({
        "@type": "Offer",
        name: `Paket ${pkg.name}`,
        description: pkg.scope,
        price: String(pkg.price),
        priceCurrency: "IDR",
        url: `${brand.url}/harga`,
      })),
    },
  };
}
