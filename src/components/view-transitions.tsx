"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ViewTransitions() {
  const pathname = usePathname();

  useEffect(() => {
  }, [pathname]);

  return null;
}
