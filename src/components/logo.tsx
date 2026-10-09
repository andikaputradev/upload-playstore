import { cn } from "@/lib/utils";

interface LogoProps {
  readonly className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,var(--gold-a),var(--gold-b))] font-display text-sm font-bold text-on-accent shadow-[inset_0_1px_0_rgba(255,255,255,.5)] select-none",
        "h-8 w-8",
        className
      )}
      aria-hidden="true"
    >
      AP
    </span>
  );
}
