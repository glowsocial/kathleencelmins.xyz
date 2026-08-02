import Link from "next/link";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post, index }) {
  return (
    <Link href={`/writing/${post.slug}`} className="post-card">
      <span className="post-card-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="post-card-body">
        <p className="post-card-date">{formatDate(post.date)}</p>
        <h3 className="post-card-title">{post.title}</h3>
        {post.description && (
          <p className="post-card-excerpt">{post.description}</p>
        )}
        <div className="post-card-footer">
          <div className="post-card-meta">
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
