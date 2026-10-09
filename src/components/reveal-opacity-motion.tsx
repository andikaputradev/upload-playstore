"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { ReactNode } from "react";

export function RevealOpacityMotion({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
