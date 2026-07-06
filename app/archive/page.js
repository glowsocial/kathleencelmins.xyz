import Link from "next/link";
import { getAllArchivePosts, getArchiveSources } from "@/lib/archive";

export const metadata = {
  title: "Archive",
  description: "Recovered writing by Kathleen Celmins from older sites and platforms.",
};

export default function ArchivePage() {
  const sources = getArchiveSources();
  const posts = getAllArchivePosts();

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Archive</h1>
        <p className="page-description">
          The long shelf: old blogs, old bylines, and the writing that should
          not disappear because a platform or domain changed hands.
        </p>
      </div>

      <div className="archive-stats" aria-label="Archive totals">
        <div className="archive-stat">
          <span className="archive-stat-number">{posts.length}</span>
          <span className="archive-stat-label">curated</span>
        </div>
        <div className="archive-stat">
          <span className="archive-stat-number">{sources.length}</span>
          <span className="archive-stat-label">sources</span>
        </div>
      </div>

      <div className="archive-sources">
        {sources.map((source) => (
          <Link
            href={`/archive/${source.id}`}
            className="archive-source-card"
            key={source.id}
          >
            <p className="archive-source-meta">
              {source.activeYears} / {source.status}
            </p>
            <h2 className="archive-source-title">{source.title}</h2>
            <p className="archive-source-description">{source.description}</p>
          <div className="archive-source-footer">
              <span>{source.postCount} curated</span>
              <span>{source.estimatedPosts}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
