import Link from "next/link";

export function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// One entry in the feed: title, subtitle, date and length. No numbers,
// no arrows. The whole block is the link.
export default function PostCard({ post }) {
  return (
    <Link href={`/writing/${post.slug}`} className="post-card">
      <h3 className="post-card-title">{post.title}</h3>
      {post.description && (
        <p className="post-card-excerpt">{post.description}</p>
      )}
      <p className="post-card-meta">
        <span>{formatDate(post.date)}</span>
        <span>{post.readingTime}</span>
      </p>
    </Link>
  );
}
