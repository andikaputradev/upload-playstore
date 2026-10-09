"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-text-muted hover:text-text transition-colors duration-150"
      aria-label={mounted ? (isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap") : "Ganti tema"}
      type="button"
      suppressHydrationWarning
    >
      <Sun 
        className={`absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} 
      />
      <Moon 
        className={`absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} 
      />
    </button>
  );
}
