import { getAllPosts } from "@/lib/blog";
import { brand } from "@/lib/brand";

export async function GET() {
  const posts = getAllPosts();
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${brand.name} Blog</title>
    <link>https://${brand.domain}/blog</link>
    <description>Artikel dan panduan seputar rilis aplikasi Android ke Google Play Store.</description>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>https://${brand.domain}/blog/${post.slug}</link>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <pubDate>${new Date(post.frontmatter.publishedAt).toUTCString()}</pubDate>
      <guid>https://${brand.domain}/blog/${post.slug}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
