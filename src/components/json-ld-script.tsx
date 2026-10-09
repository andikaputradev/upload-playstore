import { escapeJsonLd } from "@/lib/json-ld";

interface JsonLdScriptProps {
  readonly data: Record<string, unknown>;
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: escapeJsonLd(JSON.stringify(data)),
      }}
    />
  );
}
