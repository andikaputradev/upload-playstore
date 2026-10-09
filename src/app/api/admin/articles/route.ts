import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_CONTENT_TOKEN,
});

const ownerAndRepo = process.env.GITHUB_REPO || "";
const [owner, repo] = ownerAndRepo.split("/");
const branch = process.env.GITHUB_BRANCH || "main";

export async function POST(request: Request) {
  try {
    const { action, slug, content, title, contentType = "blog" } = await request.json();
    const folder = contentType === "case-study" ? "case-studies" : "blog";
    const path = `src/content/${folder}/${slug}.mdx`;

    if (!owner || !repo) {
      return NextResponse.json({ error: "GITHUB_REPO tidak dikonfigurasi" }, { status: 500 });
    }

    let sha: string | undefined;

    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
        ref: branch,
      });
      if (!Array.isArray(data) && data.type === "file") {
        sha = data.sha;
      }
    } catch (error) {
      const e = error as { status?: number };
      if (e.status !== 404) {
        throw e;
      }
    }

    if (action === "delete") {
      if (!sha) {
        return NextResponse.json({ error: "Berkas tidak ditemukan" }, { status: 404 });
      }
      await octokit.repos.deleteFile({
        owner,
        repo,
        path,
        message: `content: delete "${title}"`,
        sha,
        branch,
      });
      return NextResponse.json({ success: true, message: "Artikel dihapus." });
    }

    const isDraft = action === "draft";
    const message = isDraft ? `content: save draft "${title}"` : `content: publish "${title}"`;

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message,
      content: Buffer.from(content).toString("base64"),
      sha,
      branch,
    });

    return NextResponse.json({ 
      success: true, 
      message: isDraft ? "Draf tersimpan." : "Artikel diterbitkan. Perubahan biasanya aktif dalam waktu sekitar satu menit." 
    });

  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json({ error: "Gagal menyimpan artikel. Periksa koneksi dan coba lagi." }, { status: 500 });
  }
}
