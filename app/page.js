import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";
import SubscribeForm from "./components/SubscribeForm";

// The home page is the publication page: who writes it, what it's about,
// the subscribe box, then the feed. The founder pitch lives on /about.
export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="masthead" id="subscribe">
        <h1 className="masthead-title">Everything, in writing.</h1>
        <p className="masthead-tagline">
          Notes from building and running boomp.net, and whatever else
          I&rsquo;m thinking about. Unpolished on purpose.
        </p>
        <p className="masthead-byline">
          By <a href="/about">Kathleen Celmins</a>, founder of{" "}
          <a href="https://boomp.net">boomp.net</a>
        </p>
        <SubscribeForm />
      </section>

      {posts.length > 0 ? (
        <section className="feed">
          <h2 className="feed-heading">Latest</h2>
          <div className="posts-list">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
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
