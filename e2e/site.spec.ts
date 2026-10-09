import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  { path: "/", name: "Beranda" },
  { path: "/jasa/upload-play-store", name: "Upload Play Store" },
  { path: "/jasa/pembuatan-aplikasi", name: "Pembuatan Aplikasi" },
  { path: "/jasa/pembuatan-website", name: "Pembuatan Website" },
  { path: "/jasa/konversi-webview-ke-apk", name: "Konversi WebView" },
  { path: "/harga", name: "Harga" },
  { path: "/kebijakan-privasi", name: "Kebijakan Privasi" },
  { path: "/syarat-layanan", name: "Syarat Layanan" },
];

test.describe("All routes accessible", () => {
  for (const route of routes) {
    test(`${route.name} (${route.path}) returns 200`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("Accessibility (axe-core)", () => {
  for (const theme of ["dark", "light"] as const) {
    test(`Beranda has no serious/critical a11y violations (${theme})`, async ({ page }) => {
      await page.goto("/");
      await page.evaluate((t) => {
        document.documentElement.setAttribute("data-theme", t);
      }, theme);
      await page.waitForTimeout(200);

      const results = await new AxeBuilder({ page }).analyze();
      const serious = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      expect(serious).toEqual([]);
    });

    test(`Upload Play Store has no serious/critical a11y violations (${theme})`, async ({ page }) => {
      await page.goto("/jasa/upload-play-store");
      await page.evaluate((t) => {
        document.documentElement.setAttribute("data-theme", t);
      }, theme);
      await page.waitForTimeout(200);

      const results = await new AxeBuilder({ page }).analyze();
      const serious = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      expect(serious).toEqual([]);
    });
  }
});

test("WhatsApp CTA links are valid", async ({ page }) => {
  await page.goto("/");
  const waLinks = await page.locator('a[href*="wa.me"]').all();
  expect(waLinks.length).toBeGreaterThan(0);
  for (const link of waLinks) {
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^https:\/\/wa\.me\/6287730139582\?text=.+/);
  }
});

test("Theme toggle works", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).toHaveAttribute("data-theme", "dark");

  const toggle = page.locator('button[aria-label*="tema"]').first();
  await toggle.click();
  await expect(html).toHaveAttribute("data-theme", "light");
});

test("Not found page returns 404", async ({ page }) => {
  const response = await page.goto("/nonexistent-page-xyz");
  expect(response?.status()).toBe(404);
});
