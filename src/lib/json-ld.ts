import { brand, socialLinks } from "./brand";

interface ContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  contactType: string;
  availableLanguage: string[];
}

interface Organization {
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  logo: string;
  image: string;
  description: string;
  sameAs: string[];
  contactPoint: ContactPoint;
  knowsAbout: string[];
}

export function getOrganization(): Organization {
  return {
    "@type": "Organization",
    "@id": `${brand.url}/#organization`,
    name: brand.name,
    url: brand.url,
    logo: `${brand.url}/apple-icon`,
    image: `${brand.url}/opengraph-image`,
    description:
      "Layanan upload dan publish aplikasi Android ke Google Play Store, pembuatan aplikasi Android, website bisnis, dan konversi WebView ke APK.",
    sameAs: [socialLinks.instagram, socialLinks.tiktok, socialLinks.telegram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brand.whatsapp.e164,
      contactType: "customer service",
      availableLanguage: ["id", "en"],
    },
    knowsAbout: [
      "Android App Publishing",
      "Google Play Console",
      "Mobile App Development",
      "WebView to APK Conversion",
    ],
  };
}

export function getWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${brand.url}/#website`,
    name: brand.name,
    url: brand.url,
    inLanguage: "id-ID",
    publisher: {
      "@id": `${brand.url}/#organization`,
    },
  };
}

export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    ...getOrganization(),
  };
}

interface ServiceJsonLdOptions {
  name: string;
  description: string;
  url: string;
  offers?: {
    price: number;
    priceCurrency: string;
  };
}

export function getServiceJsonLd(options: ServiceJsonLdOptions): Record<string, unknown> {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: options.url,
    provider: getOrganization(),
  };

  if (options.offers) {
    base.offers = {
      "@type": "Offer",
      price: options.offers.price,
      priceCurrency: options.offers.priceCurrency,
    };
  }

  return base;
}

export function escapeJsonLd(json: string): string {
  return json.replace(/</g, "\\u003c");
}
