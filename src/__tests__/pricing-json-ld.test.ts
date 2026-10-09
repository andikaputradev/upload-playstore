import { describe, it, expect } from "vitest";
import { getPricingJsonLd } from "@/lib/pricing-json-ld";
import { packages } from "@/lib/packages";

describe("getPricingJsonLd", () => {
  const data = getPricingJsonLd();
  const offers = data.hasOfferCatalog.itemListElement;

  it("memuat satu Offer per paket dengan harga identik", () => {
    expect(offers).toHaveLength(packages.length);
    offers.forEach((offer, i) => {
      expect(offer.price).toBe(String(packages[i]?.price));
      expect(offer.priceCurrency).toBe("IDR");
    });
  });

  it("tidak memuat AggregateRating atau Review", () => {
    const json = JSON.stringify(data);
    expect(json).not.toContain("AggregateRating");
    expect(json).not.toContain("Review");
  });
});
