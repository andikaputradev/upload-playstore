import { ArticleForm } from "@/app/admin/components/article-form";
import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EditArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Edit Artikel</h1>
      <ArticleForm
        initialData={{
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          slug: post.slug,
          draft: post.frontmatter.draft ?? false,
          content: post.content,
        }}
      />
    </div>
  );
}
