import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image?: string;
  published: boolean;
  readingTime: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

function getPostsFromDir(dir: string): BlogPost[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        author: data.author || "TotalView AI",
        category: data.category || "General",
        excerpt: data.excerpt || "",
        image: data.image,
        published: data.published !== false,
        readingTime: stats.text,
        content,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPosts(): BlogPost[] {
  return getPostsFromDir(BLOG_DIR);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === current.category)
    .slice(0, limit);
}

export function getAllCaseStudies(): BlogPost[] {
  return getPostsFromDir(CASE_STUDIES_DIR);
}

export function getCaseStudyBySlug(slug: string): BlogPost | undefined {
  return getAllCaseStudies().find((p) => p.slug === slug);
}
