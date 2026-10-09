import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const linkClass =
  "text-accent-text underline decoration-accent/40 underline-offset-4 transition-colors duration-150 hover:decoration-accent";
const listClass = "mb-6 space-y-2 pl-6 text-[1.0625rem] leading-[1.75] text-text-muted marker:text-text-faint";

export const mdxComponents = {
  h1: ({ children }: Props) => (
    <h1 className="mb-6 mt-12 font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">{children}</h1>
  ),
  h2: ({ children }: Props) => (
    <h2 className="mb-4 mt-14 scroll-mt-24 border-t border-border pt-8 font-display text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.02em] text-text md:text-[2rem]">
      {children}
    </h2>
  ),
  h3: ({ children }: Props) => (
    <h3 className="mb-4 mt-8 scroll-mt-24 font-display text-[1.25rem] font-semibold leading-[1.3] tracking-tight text-text">
      {children}
    </h3>
  ),
  p: ({ children }: Props) => <p className="mb-6 text-[1.0625rem] leading-[1.75] text-text-muted">{children}</p>,
  a: ({ href, children }: { href?: string; children: ReactNode }) =>
    href && href.startsWith("/") ? (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {children}
      </a>
    ),
  ul: ({ children }: Props) => <ul className={`list-disc ${listClass}`}>{children}</ul>,
  ol: ({ children }: Props) => <ol className={`list-decimal ${listClass}`}>{children}</ol>,
  li: ({ children }: Props) => <li>{children}</li>,
  strong: ({ children }: Props) => <strong className="font-semibold text-text">{children}</strong>,
  blockquote: ({ children }: Props) => (
    <blockquote className="frame my-8 border-l-2 border-l-accent px-5 py-4 text-text-muted [&>p]:mb-0">{children}</blockquote>
  ),
  code: ({ children }: Props) => (
    <code className="rounded-[var(--radius-sm)] border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.875rem] text-text [pre_&]:border-0 [pre_&]:bg-transparent [pre_&]:p-0">
      {children}
    </code>
  ),
  pre: ({ children }: Props) => (
    <pre className="frame my-8 overflow-x-auto p-5 font-mono text-[0.875rem] leading-[1.7] text-text">{children}</pre>
  ),
  hr: () => <hr className="my-10 border-t border-border" />,
};
