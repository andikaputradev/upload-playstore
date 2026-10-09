import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "src/content/blog");

const blogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string().optional(),
  keywords: z.string().optional(),
  draft: z.boolean().default(false).optional(),
});

export type BlogPostFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
  readingTime: string;
}

export function getAllPostsIncludingDrafts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const parsedData = blogFrontmatterSchema.parse(data);
      const rt = readingTime(content);
      
      return {
        slug: file.replace(".mdx", ""),
        frontmatter: {
            ...parsedData,
            draft: parsedData.draft ?? false
        },
        content,
        readingTime: Math.ceil(rt.minutes) + " mnt baca",
      };
    })
    .sort((a, b) => (new Date(b.frontmatter.publishedAt) > new Date(a.frontmatter.publishedAt) ? 1 : -1));
    
  return posts;
}

export function getAllPosts(): BlogPost[] {
  return getAllPostsIncludingDrafts().filter(post => !post.frontmatter.draft);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPostsIncludingDrafts();
  return posts.find((p) => p.slug === slug);
}
