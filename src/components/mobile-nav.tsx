"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { brand, waLink } from "@/lib/brand";

const navLinks = [
  { href: "/#layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/#proses", label: "Proses" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        'button, a[href]'
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-muted hover:text-text md:hidden"
        aria-label="Buka menu navigasi"
        aria-expanded={isOpen}
        type="button"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            className="drawer-in absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col border-l border-border bg-bg p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <ThemeToggle />
              <button
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-text-muted hover:text-text"
                aria-label="Tutup menu navigasi"
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-full px-4 py-3 text-base font-medium text-text-muted transition-colors duration-150 hover:bg-text/10 hover:text-text"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <a
                href={waLink("Halo, saya ingin konsultasi upload aplikasi ke Play Store")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold h-11 w-full text-sm"
                onClick={close}
              >
                Hubungi via WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-text-faint">
                {brand.whatsapp.display}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
