import Link from "next/link";
import Doodle from "./Doodle";

export function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// The doodle sits in the meta line on phones and hangs in the left margin on
// wider screens, so it is one element either way.
export default function PostCard({ post, doodle }) {
  return (
    <Link href={`/writing/${post.slug}`} className="post-card">
      <h3 className="post-card-title">{post.title}</h3>
      {post.description && (
        <p className="post-card-excerpt">{post.description}</p>
      )}
      <p className="post-card-meta">
        {doodle && (
          <Doodle name={doodle.name} className={`post-doodle doodle-tone-${doodle.tone}`} />
        )}
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
    </Link>
  );
}
