"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/brand";
import { TrackedCta } from "./tracked-cta";

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const footer = document.querySelector("footer");
      if (!footer) {
        setVisible(true);
        return;
      }

      const rect = footer.getBoundingClientRect();
      const footerFullyVisible = rect.top < window.innerHeight && rect.bottom <= window.innerHeight;
      setVisible(!footerFullyVisible);
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  if (!visible) return null;

  return (
    <TrackedCta
      source="floating_button"
      href={waLink("Halo, saya ingin bertanya tentang layanan di uploadplaystore.my.id")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors duration-150"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </TrackedCta>
  );
}
