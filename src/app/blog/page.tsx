import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { RevealOpacityMotion } from "@/components/reveal-opacity-motion";
import { getAllPosts } from "@/lib/blog";
import { brand } from "@/lib/brand";

const title = "Blog Panduan Rilis Aplikasi Android ke Play Store";
const description =
  "Artikel dan panduan praktis seputar persiapan berkas, kebijakan, dan proses rilis aplikasi Android ke Google Play Store.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/rss.xml" } },
  openGraph: { type: "website", locale: "id_ID", siteName: brand.name, url: "/blog", title, description },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const format = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-bg pb-10 pt-14 md:pb-14 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="bg-grid absolute inset-0" />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Blog", href: "/blog" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] md:text-[4rem]">
              <span className="gold-text">Blog</span> <span className="fade-text">rilis aplikasi Android</span>
            </h1>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="btn-outline h-10 px-4 text-sm" aria-label="RSS Feed">
              <Rss className="h-4 w-4" aria-hidden="true" />
              RSS
            </a>
          </div>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-text-muted md:text-xl">{description}</p>
        </div>
      </section>
      <section className="bg-bg pb-20 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16">
          {posts.length === 0 ? (
            <p className="frame px-6 py-10 text-center text-text-muted">
              Artikel pertama sedang disiapkan. Sementara itu, tanyakan langsung lewat WhatsApp.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post, index) => (
                <RevealOpacityMotion key={post.slug} index={index}>
                  <Link href={`/blog/${post.slug}`} className="frame group flex h-full flex-col p-7 hover:bg-bg-elevated">
                    <p className="text-sm text-text-faint">
                      {format.format(new Date(post.frontmatter.publishedAt))} / {post.readingTime}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-semibold leading-[1.2] tracking-tight text-text transition-colors group-hover:text-accent-text md:text-2xl">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-3 flex-grow text-[0.9375rem] leading-[1.6] text-text-muted">{post.frontmatter.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[0.8125rem] text-accent-text">
                      Baca artikel
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </RevealOpacityMotion>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
