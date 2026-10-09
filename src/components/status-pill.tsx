import { cn } from "@/lib/utils";

interface StatusPillProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function StatusPill({ children, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-[0.8125rem] font-medium tracking-[0.01em] text-success",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
      {children}
    </span>
  );
}
