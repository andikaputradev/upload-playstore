"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useReducedMotion } from "motion/react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept local navigation that isn't modified with keys
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    
    // Only intercept if startViewTransition is available and motion is not reduced
    if (shouldReduceMotion || !document.startViewTransition) return;

    e.preventDefault();
    document.startViewTransition(() => {
      // In Next.js App Router, router.push is not synchronous in updating the DOM,
      // but wrapping it like this at least triggers the API. Next.js 15+ has better support.
      router.push(href.toString());
    });
  };

  return (
    <Link href={href} className={className} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
}
