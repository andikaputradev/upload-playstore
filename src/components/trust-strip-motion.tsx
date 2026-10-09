"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { ReactNode } from "react";

export function TrustStripMotion({ children, index }: { children: ReactNode; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="flex-1"
    >
      {children}
    </motion.div>
  );
}
