import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { brand } from "@/lib/brand";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: `Jasa Upload Aplikasi ke Play Store | ${brand.name}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Jasa upload dan publish aplikasi Android ke Google Play Store lewat akun developer aktif sejak 2022, tanpa antre closed testing 14 hari. Cepat, transparan, dan profesional.",
  keywords: [
    "jasa upload play store",
    "jasa publish aplikasi android",
    "upload play store tanpa 14 hari",
    "jasa upload aplikasi",
    "akun developer google play",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan website",
    "konversi webview ke apk",
    "andikaputradev",
  ],
  applicationName: brand.name,
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: brand.url,
    siteName: brand.name,
    title: `Jasa Upload Aplikasi ke Play Store | ${brand.name}`,
    description:
      "Jasa upload dan publish aplikasi Android ke Google Play Store lewat akun developer aktif sejak 2022, tanpa antre closed testing 14 hari.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `Jasa Upload dan Publish Aplikasi Android ke Play Store - ${brand.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Jasa Upload Aplikasi ke Play Store | ${brand.name}`,
    description:
      "Jasa upload dan publish aplikasi Android ke Google Play Store lewat akun developer aktif sejak 2022, tanpa antre closed testing 14 hari.",
    images: ["/opengraph-image"],
    creator: brand.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? [process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION] : [],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark light",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || undefined;
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${interTight.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          disableTransitionOnChange={false}
          nonce={nonce}
        >
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" title={`${brand.name} Blog RSS Feed`} />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent focus:text-sm"
          >
            Lompat ke konten utama
          </a>
          <SiteHeader />
          <main id="main">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppFloatingButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
