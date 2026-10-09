import { cn } from "@/lib/utils";
import type { Service } from "@/content/services";
import { ArrowRight, Upload, Smartphone, Globe, Package } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "upload-play-store": Upload,
  "pembuatan-aplikasi": Smartphone,
  "pembuatan-website": Globe,
  "konversi-webview-ke-apk": Package,
};

interface ServiceCardProps {
  readonly service: Service;
  readonly className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.slug] ?? Upload;

  return (
    <a
      href={service.href}
      className={cn(
        "frame group flex h-full flex-col p-7 transition-colors duration-200 hover:bg-bg-elevated",
        className
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-accent/10 text-accent-text mb-4">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-[1.375rem] font-semibold leading-[1.3] text-text">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-text-muted leading-relaxed">
        {service.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-text group-hover:gap-2 transition-all duration-150">
        Lihat detail
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}
