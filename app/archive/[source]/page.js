import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArchivePostsBySource,
  getArchiveSourceById,
  getArchiveSourceIds,
} from "@/lib/archive";

export function generateStaticParams() {
  return getArchiveSourceIds().map((source) => ({ source }));
}

export async function generateMetadata({ params }) {
  const { source: sourceId } = await params;
  const source = getArchiveSourceById(sourceId);
  if (!source) return {};

  return {
    title: `${source.title} Archive`,
    description: source.description,
  };
}

export default async function ArchiveSourcePage({ params }) {
  const { source: sourceId } = await params;
  const source = getArchiveSourceById(sourceId);
  if (!source) notFound();

  const posts = getArchivePostsBySource(sourceId);

  return (
    <div className="page-container">
      <Link href="/archive" className="back-link">
        Archive
      </Link>

      <div className="page-header">
        <p className="archive-source-meta">
          {source.domain} / {source.activeYears}
        </p>
        <h1 className="page-title">{source.title}</h1>
        <p className="page-description">{source.description}</p>
      </div>

      <dl className="source-summary">
        <div className="source-summary-row">
          <dt>Status</dt>
          <dd>{source.status}</dd>
        </div>
        <div className="source-summary-row">
          <dt>Original byline</dt>
          <dd>{source.originalByline}</dd>
        </div>
        <div className="source-summary-row">
          <dt>Estimated footprint</dt>
          <dd>{source.estimatedPosts}</dd>
        </div>
        <div className="source-summary-row">
          <dt>Curated here</dt>
          <dd>{posts.length}</dd>
        </div>
      </dl>

      {posts.length > 0 ? (
        <div className="posts-list">
          {posts.map((post) => (
            <Link
              href={`/archive/${source.id}/${post.slug}`}
              className="post-card"
              key={post.slug}
            >
              <p className="post-card-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="post-card-title">{post.title}</h2>
              <p className="post-card-excerpt">{post.description}</p>
              <div className="post-card-footer">
                <div className="post-card-meta">
                  <span>{post.readingTime}</span>
                  {post.needsReview ? <span>needs review</span> : null}
                </div>
                <span className="post-card-arrow">Read</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nothing has been curated for this source yet.</p>
        </div>
      )}
    </div>
  );
}
