import Link from "next/link";
import { JsonLdScript } from "./json-ld-script";
import { brand } from "@/lib/brand";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${brand.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-6 text-[0.8125rem]">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-text font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href || "/"}
                      className="text-text-faint hover:text-text transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                    <span className="text-text-faint" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
