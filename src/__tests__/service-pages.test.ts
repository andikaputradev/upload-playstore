import { describe, it, expect } from "vitest";
import { servicePages } from "@/content/service-pages";
import { services } from "@/content/services";
import { seoData } from "@/lib/seo";

const forbidden = ["100% lolos", "dijamin", "langsung tayang", "aman & legal", "bebas risiko"];

describe("servicePages", () => {
  it("memiliki satu halaman untuk setiap layanan", () => {
    expect(servicePages.map((p) => p.slug).sort()).toEqual(services.map((s) => s.slug).sort());
  });

  it("setiap halaman memiliki data SEO", () => {
    for (const page of servicePages) {
      expect(seoData[page.seoKey]).toBeDefined();
    }
  });

  it("tidak memuat frasa klaim yang dilarang AGENTS.md", () => {
    const text = JSON.stringify([servicePages, services]).toLowerCase();
    for (const phrase of forbidden) {
      expect(text).not.toContain(phrase);
    }
  });
});
