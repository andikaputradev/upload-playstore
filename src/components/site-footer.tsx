import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { brand, waLink, socialLinks } from "@/lib/brand";
import { services } from "@/content/services";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg pb-10 pt-16">
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="frame flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight md:text-3xl"><span className="fade-text">Siap merilis aplikasimu?</span></p>
            <p className="mt-2 text-sm text-text-muted">Konsultasi awal gratis via WhatsApp.</p>
          </div>
          <a href={waLink("Halo, saya ingin konsultasi upload aplikasi ke Play Store")} target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0">
            Konsultasi via WhatsApp
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-text">Layanan</h3>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-muted hover:text-text transition-colors duration-150"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text">Jelajahi</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/harga" className="text-sm text-text-muted hover:text-text transition-colors duration-150">Paket Harga</Link></li>
              <li><Link href="/blog" className="text-sm text-text-muted hover:text-text transition-colors duration-150">Blog</Link></li>
              <li><a href="/rss.xml" className="text-sm text-text-muted hover:text-text transition-colors duration-150">RSS Feed</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text">Kontak</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={waLink("Halo, saya ingin bertanya tentang layanan di uploadplaystore.my.id")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-150"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-150"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-150"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.53 5.7 5.7 5.7 3.15 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-150"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="text-sm text-text-muted hover:text-text transition-colors duration-150"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/syarat-layanan"
                  className="text-sm text-text-muted hover:text-text transition-colors duration-150"
                >
                  Syarat Layanan
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-text-faint">&copy; {new Date().getFullYear()} {brand.name}</p>
          <p className="text-xs text-text-faint leading-relaxed">
            {brand.name} bukan afiliasi resmi Google atau Google Play. Google Play adalah merek dagang Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
