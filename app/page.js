import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 10);

  return (
    <div>
      {/* Hero — the unshrunk version */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-greeting animate-in">
            Everything,<br />out loud.
          </h1>
          <div className="hero-rule animate-in animate-in-delay-1" />
          <p className="home-bio animate-in animate-in-delay-2">
            I&rsquo;m Kathleen. I build software, I write about what
            I notice, and I stopped waiting for permission.
          </p>
        </div>
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 ? (
        <section className="posts-section">
          <p className="section-label animate-in animate-in-delay-3">
            Recent writing
          </p>
          <div className="posts-list">
            {recentPosts.map((post, i) => (
              <div
                key={post.slug}
                className={`animate-in animate-in-delay-${Math.min(i + 3, 4)}`}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="empty-state">
          <p>Nothing here yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
