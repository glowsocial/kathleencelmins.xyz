import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 10);

  return (
    <div>
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-greeting">
            Everything,<br /><em>out loud.</em>
          </h1>
          <div className="hero-rule" />
          <p className="home-bio">
            I&rsquo;m Kathleen. I build <a href="https://boomp.net">boomp.net</a>
            {" "}&mdash; it keeps local businesses current on social without a
            content hire &mdash; and I write down what I learn running it.
          </p>
        </div>
      </section>

      <section className="subscribe-section">
        <SubscribeForm />
      </section>

      {recentPosts.length > 0 ? (
        <section className="posts-section">
          <p className="section-label">Writing</p>
          <div className="posts-list">
            {recentPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
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
