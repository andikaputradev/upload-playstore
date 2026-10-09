"use client";

import { motion, useReducedMotion } from "motion/react";

export function ProcessLineMotion() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className="absolute left-[2.5rem] top-5 hidden h-[2px] w-[calc(100%-1.5rem)] bg-border md:block -z-10"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="absolute left-[2.5rem] top-[1.125rem] hidden h-1 w-[calc(100%-1rem)] md:block -z-10"
      aria-hidden="true"
    >
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 2" fill="none">
        <motion.line
          x1="0" y1="1" x2="100" y2="1"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100, opacity: 0 }}
          whileInView={{ strokeDashoffset: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <line
          x1="0" y1="1" x2="100" y2="1"
          stroke="var(--border)"
          strokeWidth="2"
          className="-z-20"
        />
      </svg>
    </div>
  );
}
