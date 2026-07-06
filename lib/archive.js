import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");
const ARCHIVE_DIR = path.join(CONTENT_DIR, "archive");
const SOURCES_FILE = path.join(ARCHIVE_DIR, "sources.json");

function readSources() {
  if (!fs.existsSync(SOURCES_FILE)) return [];
  return JSON.parse(fs.readFileSync(SOURCES_FILE, "utf-8"));
}

function getSourceDir(sourceId) {
  return path.join(ARCHIVE_DIR, sourceId);
}

function readArchivePost(source, filename) {
  const filePath = path.join(getSourceDir(source.id), filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const slug = data.slug || filename.replace(/\.(md|mdx)$/, "");
  const stats = readingTime(content);

  return {
    slug,
    sourceId: source.id,
    sourceTitle: source.title,
    source,
    content,
    readingTime: stats.text,
    ...data,
    date: data.date ? new Date(data.date).toISOString() : null,
  };
}

export function getArchiveSources() {
  const posts = getAllArchivePosts();
  const counts = posts.reduce((memo, post) => {
    memo.set(post.sourceId, (memo.get(post.sourceId) || 0) + 1);
    return memo;
  }, new Map());

  return readSources().map((source) => ({
    ...source,
    postCount: counts.get(source.id) || 0,
  }));
}

export function getArchiveSourceById(sourceId) {
  return getArchiveSources().find((source) => source.id === sourceId) || null;
}

function isPublicArchivePost(post) {
  return post.curated === true && !post.draft;
}

export function getAllArchivePosts({ includeDrafts = false } = {}) {
  return readSources()
    .flatMap((source) => {
      const dir = getSourceDir(source.id);
      if (!fs.existsSync(dir)) return [];

      return fs
        .readdirSync(dir)
        .filter((filename) => /\.(md|mdx)$/.test(filename))
        .map((filename) => readArchivePost(source, filename));
    })
    .filter((post) => includeDrafts || isPublicArchivePost(post))
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArchivePostsBySource(sourceId) {
  return getAllArchivePosts().filter((post) => post.sourceId === sourceId);
}

export function getArchivePostBySlug(sourceId, slug, { includeDrafts = false } = {}) {
  const source = readSources().find((item) => item.id === sourceId);
  if (!source) return null;

  const dir = getSourceDir(sourceId);
  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const post = readArchivePost(source, `${slug}${ext}`);
      if (!includeDrafts && !isPublicArchivePost(post)) return null;
      return post;
    }
  }

  return null;
}

export function getArchiveSourceIds() {
  return readSources().map((source) => source.id);
}

export function getArchiveStaticParams() {
  return getAllArchivePosts().map((post) => ({
    source: post.sourceId,
    slug: post.slug,
  }));
}
