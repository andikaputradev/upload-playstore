import { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 flex h-14 items-center justify-between">
          <Link href="/admin" className="font-bold text-text">
            Admin Panel
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text"
          >
            Lihat Situs ↗
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        {children}
      </main>
    </div>
  );
}
