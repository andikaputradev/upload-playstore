import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { brand, waLink } from "@/lib/brand";
import Link from "next/link";
import { HeaderWrapper } from "./header-wrapper";
import { NavLinksClient } from "./nav-links-client";

export function SiteHeader() {
  return (
    <HeaderWrapper>
      <div className="mx-auto grid h-full max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 md:px-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${brand.name}, beranda`}>
          <Logo />
          <span className="hidden font-display text-[1.05rem] font-semibold tracking-tight text-text sm:inline">
            {brand.name}
          </span>
        </Link>
        <div className="flex justify-center">
          <NavLinksClient />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a
            href={waLink("Halo, saya ingin konsultasi upload aplikasi ke Play Store")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden h-10 text-sm md:inline-flex"
          >
            Hubungi via WhatsApp
          </a>
          <MobileNav />
        </div>
      </div>
    </HeaderWrapper>
  );
}
