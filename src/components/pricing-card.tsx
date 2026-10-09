import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { type PricingPackage, formatPrice } from "@/lib/packages";

interface PricingCardProps {
  readonly pkg: PricingPackage;
  readonly className?: string;
}

export function PricingCard({ pkg, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        "frame relative flex flex-col p-6",
        pkg.highlighted
          ? "border-highlight md:-translate-y-2"
          : "border-border",
        className
      )}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-highlight px-3 py-1 text-xs font-semibold text-black">
          {pkg.badge}
        </span>
      )}
      <h3 className="font-display text-lg font-semibold text-text">
        {pkg.name}
      </h3>
      <p className="mt-1 text-sm text-text-muted">{pkg.scope}</p>
      <div className="mt-4">
        <span className="font-display text-[2rem] font-bold leading-none text-text">
          Rp{formatPrice(pkg.price)}
        </span>
        <div className="mt-1">
          <span className="text-sm text-text-muted line-through">
            Rp{formatPrice(pkg.normalPrice)}
          </span>
          <span className="ml-2 text-xs text-text-faint">Harga normal</span>
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-2.5">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <a
        href={pkg.waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-6 h-11 w-full text-sm",
          pkg.highlighted
            ? "btn-gold"
            : "btn-outline"
        )}
      >
        Pilih Paket
      </a>
    </div>
  );
}
