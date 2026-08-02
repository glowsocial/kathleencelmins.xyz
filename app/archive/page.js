import Link from "next/link";
import { getAllArchivePosts, getArchiveSources } from "@/lib/archive";

export const metadata = {
  title: "Archive",
  description: "Recovered writing by Kathleen Celmins from older sites and platforms.",
};

export default function ArchivePage() {
  const sources = getArchiveSources();
  const posts = getAllArchivePosts();

  const published = sources.filter((source) => source.postCount > 0);
  const pending = sources.filter((source) => source.postCount === 0);

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
          <span className="archive-stat-label">published here</span>
        </div>
        <div className="archive-stat">
          <span className="archive-stat-number">{published.length}</span>
          <span className="archive-stat-label">
            {published.length === 1 ? "source" : "sources"}
          </span>
        </div>
      </div>

      {published.length > 0 ? (
        <div className="archive-sources">
          {published.map((source) => (
            <Link
              href={`/archive/${source.id}`}
              className="archive-source-card"
              key={source.id}
            >
              <p className="archive-source-meta">
                {source.activeYears} / {source.domain}
              </p>
              <h2 className="archive-source-title">{source.title}</h2>
              <p className="archive-source-description">{source.description}</p>
              <div className="archive-source-footer">
                <span>{source.postCount} here</span>
                <span>{source.estimatedPosts} written</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nothing has been published from the archive yet.</p>
        </div>
      )}

      {pending.length > 0 && (
        <p className="archive-pending">
          Still being recovered:{" "}
          {pending.map((source, i) => (
            <span key={source.id}>
              {i > 0 && ", "}
              {source.title} ({source.activeYears})
            </span>
          ))}
          .
        </p>
      )}
    </div>
  );
}
