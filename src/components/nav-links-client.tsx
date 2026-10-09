"use client";

import { TransitionLink as Link } from "./transition-link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { href: "/#layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/#proses", label: "Proses" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;

export function NavLinksClient() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const current = navLinks.find((link) => link.href === pathname)?.href ?? null;
  const marked = hovered ?? current;

  return (
    <nav
      className="relative hidden items-center gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur-md md:flex"
      aria-label="Navigasi utama"
      onMouseLeave={() => setHovered(null)}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onMouseEnter={() => setHovered(link.href)}
          className="relative isolate rounded-full px-4 py-1.5 text-sm font-medium text-text-muted transition-colors duration-150 hover:text-text focus-visible:text-text"
        >
          {link.label}
          {marked === link.href && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 -z-10 rounded-full bg-text/10"
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
