import { ArticleForm } from "@/app/admin/components/article-form";

export default function NewArticlePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Tulis Artikel Baru</h1>
      <ArticleForm />
    </div>
  );
}
