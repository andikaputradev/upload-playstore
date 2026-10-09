"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ArticleFormProps {
  initialData?: {
    title: string;
    description: string;
    slug: string;
    draft: boolean;
    content: string;
    contentType?: "blog" | "case-study";
  };
}

export function ArticleForm({ initialData }: ArticleFormProps) {
  const router = useRouter();
  
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [draft, setDraft] = useState(initialData?.draft ?? true);
  const [content, setContent] = useState(initialData?.content || "");
  const [contentType, setContentType] = useState<"blog" | "case-study">(initialData?.contentType || "blog");
  const [clientType, setClientType] = useState((initialData as unknown as { clientType?: string })?.clientType || "");
  const [outcome, setOutcome] = useState((initialData as unknown as { outcome?: string })?.outcome || "");
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string, type: "success" | "error" } | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (!initialData) {
      setSlug(generateSlug(e.target.value));
    }
  };

  const handleSave = async (isDraft: boolean) => {
    setLoading(true);
    setToast(null);
    setDraft(isDraft);

    const now = new Date().toISOString();
    let frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
publishedAt: "${initialData?.title ? (initialData as unknown as {publishedAt: string}).publishedAt || now : now}"
updatedAt: "${now}"
draft: ${isDraft}`;

    if (contentType === "case-study") {
      frontmatter += `\nclientType: "${clientType.replace(/"/g, '\\"')}"\noutcome: "${outcome.replace(/"/g, '\\"')}"`;
    }

    frontmatter += `\n---\n\n${content}`;

    try {
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: isDraft ? "draft" : "publish",
          slug,
          title,
          content: frontmatter,
          contentType,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setToast({ message: data.message, type: "success" });
      if (!initialData) {
         router.push(`/admin/articles/${slug}/edit`);
      } else {
         router.refresh();
      }
    } catch (err) {
      const e = err as Error;
      setToast({ message: e.message || "Gagal menyimpan artikel.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setToast(null);
    try {
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", slug, title }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setToast({ message: data.message, type: "success" });
      setTimeout(() => router.push("/admin"), 1000);
    } catch (err) {
      const e = err as Error;
      setToast({ message: e.message || "Gagal menghapus artikel.", type: "error" });
      setLoading(false);
      setShowConfirmDelete(false);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className={`p-4 rounded-md ${toast.type === "success" ? "bg-success/10 text-success" : "bg-red-500/10 text-red-500"}`}>
          {toast.message}
        </div>
      )}

      {showConfirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-lg bg-surface p-6 shadow-lg border border-border">
            <h3 className="text-lg font-bold text-text mb-2">Hapus artikel ini?</h3>
            <p className="text-text-muted text-sm mb-6">Tindakan ini akan menghapus berkas dari repositori dan tidak dapat dibatalkan.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmDelete(false)}
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-text hover:bg-bg-elevated rounded-md"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md disabled:opacity-50"
              >
                {loading ? "Menghapus..." : "Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {!initialData && (
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Jenis Konten</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value as "blog" | "case-study")}
                className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                <option value="blog">Artikel Blog</option>
                <option value="case-study">Studi Kasus</option>
              </select>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Judul</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Deskripsi Meta</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          {contentType === "case-study" && (
            <>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Tipe Klien (mis. Aplikasi Produktivitas)</label>
                <input
                  type="text"
                  value={clientType}
                  onChange={(e) => setClientType(e.target.value)}
                  className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Hasil (mis. Terbit dalam 3 hari)</label>
                <input
                  type="text"
                  value={outcome}
                  onChange={(e) => setOutcome(e.target.value)}
                  className="w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-text outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </>
          )}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="draft"
              checked={draft}
              onChange={(e) => setDraft(e.target.checked)}
              className="rounded border-border text-accent focus:ring-accent"
            />
            <label htmlFor="draft" className="text-sm font-medium text-text-muted">
              Draf
            </label>
          </div>
        </div>
        <div className="w-full md:w-64 flex flex-col gap-3 shrink-0">
          <button
            onClick={() => handleSave(true)}
            disabled={loading}
            className="w-full rounded-md bg-bg-elevated border border-border px-4 py-2 text-sm font-medium text-text hover:bg-border disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan sebagai Draf"}
          </button>
          <button
            onClick={() => handleSave(false)}
            disabled={loading}
            className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent hover:bg-accent-strong disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Terbitkan"}
          </button>
          {initialData && (
            <button
              onClick={() => setShowConfirmDelete(true)}
              disabled={loading}
              className="w-full mt-4 rounded-md border border-red-500/50 text-red-500 px-4 py-2 text-sm font-medium hover:bg-red-500/10 disabled:opacity-50"
            >
              Hapus Artikel
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
        <div className="flex flex-col border border-border rounded-md overflow-hidden">
          <div className="bg-bg-elevated px-3 py-2 text-xs font-medium text-text-muted border-b border-border">
            MDX
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 w-full bg-surface p-4 text-sm font-mono text-text outline-none resize-none"
          />
        </div>
        <div className="flex flex-col border border-border rounded-md overflow-hidden">
          <div className="bg-bg-elevated px-3 py-2 text-xs font-medium text-text-muted border-b border-border">
            Pratinjau Langsung
          </div>
          <div className="flex-1 w-full bg-bg p-4 overflow-auto prose prose-invert prose-sm max-w-none">
            {/* Very simple markdown preview since MDXRemote is server-side and we need client-side live preview. We can just use a simple regex or display raw for now, or just let the user know preview is limited on client */}
            <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />
          </div>
        </div>
      </div>
    </div>
  );
}
