import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 10);

  return (
    <div>
      <section className="home-intro animate-in">
        <h1 className="home-greeting">A place for thoughts.</h1>
        <p className="home-bio">
          I&rsquo;m Kathleen. I write about what I&rsquo;m noticing, what I&rsquo;m learning,
          and whatever else is rattling around in my head. Part reflection, part
          thinking out loud.
        </p>
      </section>

      {recentPosts.length > 0 ? (
        <section>
          <p className="section-label animate-in animate-in-delay-1">Recent writing</p>
          <div className="posts-list">
            {recentPosts.map((post, i) => (
              <div
                key={post.slug}
                className={`animate-in animate-in-delay-${Math.min(i + 2, 3)}`}
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
