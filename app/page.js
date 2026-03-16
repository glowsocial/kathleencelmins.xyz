import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 10);

  return (
    <div>
      {/* Hero section with warm dark background */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-greeting animate-in">
            A place for thoughts.
          </h1>
          <p className="home-bio animate-in animate-in-delay-1">
            I&rsquo;m Kathleen. I write about what I&rsquo;m noticing, what
            I&rsquo;m learning, and whatever else is rattling around in my head.
            Part reflection, part thinking out loud.
          </p>
        </div>
      </section>

      {/* Wave transition */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,0 L0,40 Q360,60 720,40 Q1080,20 1440,40 L1440,0 Z"
            fill="#3E2A1F"
          />
        </svg>
      </div>

      {/* Recent posts */}
      {recentPosts.length > 0 ? (
        <section className="posts-section">
          <p className="section-label animate-in animate-in-delay-2">
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
