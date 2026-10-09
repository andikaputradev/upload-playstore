import { generateOgImage } from "@/lib/og-image";
import { getPostBySlug } from "@/lib/blog";

export const contentType = "image/png";

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return generateOgImage("Blog", "uploadplaystore.my.id");
  }

  return generateOgImage(
    post.frontmatter.title,
    "Blog"
  );
}
