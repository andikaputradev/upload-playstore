import Link from "next/link";
import { getAllPostsIncludingDrafts } from "@/lib/blog";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const dynamic = "force-dynamic"; // Ensure fresh data on admin route if Vercel tries to cache

export default function AdminDashboard() {
  const posts = getAllPostsIncludingDrafts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text">Artikel Blog</h1>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent hover:bg-accent-strong"
        >
          Tulis Artikel Baru
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="mb-4 text-text-muted">Belum ada artikel. Tulis artikel pertama.</p>
            <Link
              href="/admin/articles/new"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent hover:bg-accent-strong"
            >
              Tulis Artikel Baru
            </Link>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-bg-elevated text-text-muted">
              <tr>
                <th className="px-6 py-3 font-medium">Judul</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Tanggal</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr key={post.slug} className="group hover:bg-bg-elevated/50">
                  <td className="px-6 py-4 font-medium text-text">
                    {post.frontmatter.title}
                  </td>
                  <td className="px-6 py-4">
                    {post.frontmatter.draft ? (
                      <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-600">
                        Draf
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
                        Terbit
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-text-muted">
                    {format(new Date(post.frontmatter.updatedAt || post.frontmatter.publishedAt), "d MMM yyyy", { locale: id })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/articles/${post.slug}/edit`}
                      className="text-accent hover:text-accent-strong font-medium"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
