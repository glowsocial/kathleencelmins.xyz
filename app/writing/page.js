import { getAllPosts } from "@/lib/posts";
import PostCard from "../components/PostCard";

export const metadata = {
  title: "Writing",
  description: "Essays, reflections, and thoughts by Kathleen Celmins.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Writing</h1>
        <p className="page-description">
          Everything I&rsquo;ve put to page. Essays, reflections, half-formed
          thoughts that turned into something.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nothing here yet. The first entry is the hardest.</p>
        </div>
      )}
    </div>
  );
}
