import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Get all posts from the writing directory.
 * Supports .md and .mdx files.
 * Expects frontmatter: title, date, description, (optional) slug, tags
 */
export function getAllPosts() {
  const dir = path.join(CONTENT_DIR, "writing");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => /\.(md|mdx)$/.test(f));

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const slug = data.slug || filename.replace(/\.(md|mdx)$/, "");
      const stats = readingTime(content);

      return {
        slug,
        content,
        readingTime: stats.text,
        ...data,
        date: data.date ? new Date(data.date).toISOString() : null,
      };
    })
    .filter((p) => p.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug) {
  const dir = path.join(CONTENT_DIR, "writing");

  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        content,
        readingTime: stats.text,
        ...data,
        date: data.date ? new Date(data.date).toISOString() : null,
      };
    }
  }

  return null;
}

/**
 * Get all slugs (for static generation)
 */
export function getAllSlugs() {
  const dir = path.join(CONTENT_DIR, "writing");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}
