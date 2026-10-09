import { describe, it, expect } from "vitest";
import { waLink, brand } from "@/lib/brand";

describe("waLink", () => {
  it("generates correct WhatsApp URL", () => {
    const result = waLink("Halo");
    expect(result).toBe(`https://wa.me/${brand.whatsapp.number}?text=Halo`);
  });

  it("encodes special characters", () => {
    const result = waLink("Halo, saya ingin konsultasi");
    expect(result).toContain("Halo%2C%20saya%20ingin%20konsultasi");
  });
});
