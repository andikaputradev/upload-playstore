"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { type PricingPackage, formatPrice } from "@/lib/packages";
import { TrackedCta } from "./tracked-cta";

interface PricingCardProps {
  readonly pkg: PricingPackage;
  readonly className?: string;
}

export default function PricingCardClient({ pkg, className }: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const saving = pkg.normalPrice - pkg.price;

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(0, pkg.price, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (value) => {
        if (priceRef.current) priceRef.current.textContent = formatPrice(Math.round(value));
      },
      onComplete: () => {
        if (priceRef.current) priceRef.current.textContent = formatPrice(pkg.price);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, pkg.price]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={onPointerMove}
      className={cn(
        "frame group flex flex-col p-6",
        pkg.highlighted ? "border-accent md:-translate-y-2 glow-pulse" : "border-border",
        className
      )}
    >
      <div className="spot" aria-hidden="true" />
      {pkg.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-highlight px-3 py-1 text-xs font-semibold text-black">
          {pkg.badge}
        </span>
      )}
      <div className="relative flex flex-1 flex-col">
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text">{pkg.name}</h3>
        <p className="mt-1 min-h-[2.75rem] text-sm text-text-muted">{pkg.scope}</p>
        <div className="mt-6">
          <p className="flex items-baseline gap-1 font-display font-semibold leading-none tracking-[-0.03em] text-text tabular-nums">
            <span className="text-lg text-text-muted">Rp</span>
            <span ref={priceRef} className="gold-text text-[2.5rem]">
              {formatPrice(pkg.price)}
            </span>
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm text-text-muted line-through tabular-nums">
              Rp{formatPrice(pkg.normalPrice)}
            </span>
            <span className="text-xs text-text-faint">Harga normal</span>
            <span className="rounded-full border border-border px-2 py-0.5 text-[0.6875rem] text-success tabular-nums">
              Hemat Rp{formatPrice(saving)}
            </span>
          </p>
        </div>
        <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
          {pkg.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-2 text-sm text-text-muted">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <TrackedCta
          source="pricing"
          pkgName={pkg.code}
          href={pkg.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("mt-6 h-11 w-full text-sm", pkg.highlighted ? "btn-gold" : "btn-outline")}
        >
          Pilih paket {pkg.name}
        </TrackedCta>
      </div>
    </div>
  );
}
