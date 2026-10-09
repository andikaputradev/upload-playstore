import { describe, it, expect } from "vitest";
import { packages } from "@/lib/packages";

describe("packages", () => {
  it("has 4 packages", () => {
    expect(packages).toHaveLength(4);
  });

  it("all normal prices are greater than sale prices", () => {
    for (const pkg of packages) {
      expect(pkg.normalPrice).toBeGreaterThan(pkg.price);
    }
  });

  it("each package has a valid waLink", () => {
    for (const pkg of packages) {
      expect(pkg.waLink).toMatch(/^https:\/\/wa\.me\/6287730139582\?text=/);
      expect(pkg.waLink).toContain(encodeURIComponent(pkg.name));
    }
  });

  it("premium package is highlighted with badge", () => {
    const premium = packages.find((p) => p.code === "premium");
    expect(premium?.highlighted).toBe(true);
    expect(premium?.badge).toBe("Paling Hemat");
  });
});
