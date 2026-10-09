import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import type { Metadata } from "next";
import { JsonLdScript } from "@/components/json-ld-script";
import { brand } from "@/lib/brand";
import { FinalCta } from "@/components/final-cta";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${params.slug}` },
    robots: post.frontmatter.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.publishedAt,
      modifiedTime: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
      url: `/blog/${params.slug}`,
      siteName: brand.name,
      locale: "id_ID",
    },
  };
}

import { Breadcrumb } from "@/components/breadcrumb";

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const { title, description, publishedAt } = post.frontmatter;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    mainEntityOfPage: `${brand.url}/blog/${params.slug}`,
    image: `${brand.url}/blog/${params.slug}/opengraph-image`,
    datePublished: publishedAt,
    dateModified: post.frontmatter.updatedAt || publishedAt,
    author: {
      "@type": "Organization",
      name: brand.name,
      url: brand.url,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.url,
      logo: {
        "@type": "ImageObject",
        url: `${brand.url}/favicon.ico`,
      },
    },
  };

  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: title },
  ];

  return (
    <>
      <JsonLdScript data={articleJsonLd} />
      <article className="relative isolate">
        <header className="relative overflow-hidden bg-bg pb-10 pt-14 md:pb-14 md:pt-20">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="bg-grid absolute inset-0" />
          </div>
          <div className="mx-auto max-w-[68ch] px-6">
            <Breadcrumb items={breadcrumbItems} />
            <p className="text-sm text-text-faint">
              {new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(publishedAt))} / {post.readingTime}
            </p>
            <h1 className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] md:text-5xl">
              <span className="fade-text">{title}</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">{description}</p>
          </div>
        </header>
        <div className="mx-auto max-w-[68ch] px-6 pb-20 md:pb-28">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
      <FinalCta />
    </>
  );
}
