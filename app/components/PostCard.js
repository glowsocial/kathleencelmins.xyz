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

export default function PostCard({ post }) {
  return (
    <Link href={`/writing/${post.slug}`} className="post-card">
      <h3 className="post-card-title">{post.title}</h3>
      {post.description && (
        <p className="post-card-excerpt">{post.description}</p>
      )}
      <p className="post-card-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
    </Link>
  );
}
