import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArchivePostBySlug,
  getArchiveStaticParams,
} from "@/lib/archive";
import { markdownToHtml } from "@/lib/markdown";

export function generateStaticParams() {
  return getArchiveStaticParams();
}

export async function generateMetadata({ params }) {
  const { source, slug } = await params;
  const post = getArchivePostBySlug(source, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description || "",
  };
}

export default async function ArchivePostPage({ params }) {
  const { source, slug } = await params;
  const post = getArchivePostBySlug(source, slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="page-container">
      <article>
        <Link href={`/archive/${post.sourceId}`} className="back-link">
          {post.sourceTitle}
        </Link>

        <header className="article-header">
          <p className="article-date">
            {formattedDate} / recovered from {post.sourceTitle}
          </p>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <span className="article-reading-pill">{post.readingTime}</span>
            {post.needsReview ? (
              <span className="archive-review-pill">needs review</span>
            ) : null}
          </div>
          {post.archiveUrl || post.originalUrl ? (
            <p className="archive-origin-links">
              {post.archiveUrl ? (
                <a href={post.archiveUrl}>Wayback snapshot</a>
              ) : null}
              {post.archiveUrl && post.originalUrl ? " / " : null}
              {post.originalUrl ? <a href={post.originalUrl}>Original URL</a> : null}
            </p>
          ) : null}
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className="article-footer">
          <p className="article-footer-text">
            Recovered for the permanent archive.
          </p>
        </footer>
      </article>
    </div>
  );
}
