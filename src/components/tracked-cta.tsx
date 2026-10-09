"use client";

import { track } from "@vercel/analytics/react";
import React from "react";
interface TrackedCtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  source: string;
  pkgName?: string;
  href: string;
  children: React.ReactNode;
}

export function TrackedCta({ source, pkgName, href, children, className, ...props }: TrackedCtaProps) {
  const handleClick = () => {
    track("whatsapp_click", { source, package: pkgName || "none" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
