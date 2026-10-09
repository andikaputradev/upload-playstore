"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { ReactNode } from "react";

export function RevealMotion({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
