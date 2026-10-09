"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || reduce;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-200 ease-in-out ${
        solid ? "h-14 border-border bg-bg/75 backdrop-blur-xl" : "h-[4.5rem] border-transparent bg-transparent"
      }`}
    >
      {children}
    </header>
  );
}
