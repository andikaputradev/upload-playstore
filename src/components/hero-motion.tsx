"use client";

import { motion, useReducedMotion } from "motion/react";

export function GridBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_100%_at_70%_0%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent)]" />
    </div>
  );
}

export function HeroTitle() {
  const reduce = useReducedMotion();
  return (
    <motion.h1
      className="font-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-balance text-text sm:text-[3.25rem]"
      initial={reduce ? false : { y: 14 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="block">Aplikasimu sudah siap.</span>
      <span className="block">
        Terbit di <span className="whitespace-nowrap text-accent">Play Store</span> tanpa antre 14 hari.
      </span>
    </motion.h1>
  );
}
