import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";
import SubscribeForm from "./components/SubscribeForm";

// The homepage has one job: a stranger who just searched her name learns
// who she is and what she built, and has one place to click. The writing
// is the proof and sits underneath; the newsletter form sits with it.
const FIRST_LOOK_URL =
  "https://boomp.net/preview?utm_source=kathleencelmins.xyz&utm_medium=referral&utm_campaign=free_preview&utm_content=homepage_hero";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 10);

  return (
    <div>
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-kicker">Founder &middot; Writer &middot; Chandler, Arizona</p>
          <h1 className="home-greeting">
            I built <em>software</em>{" "}that runs social media for business
            owners who&rsquo;d rather not do it themselves.
          </h1>
          <div className="hero-rule" />
          <p className="home-bio">
            It reads your website, writes the posts, and all you do is say
            yes. That&rsquo;s <a href="https://boomp.net">boomp.net</a>.
          </p>
          <p className="home-bio">
            I&rsquo;m Kathleen Celmins, the founder. I&rsquo;ve worked in
            marketing since 2010; in 2025 I stopped advising on it and built
            the software instead. I write the code, answer the support email,
            and decide what ships.
          </p>
          <a className="hero-cta" href={FIRST_LOOK_URL}>
            See what it would say about you
          </a>
        </div>
      </section>

      {recentPosts.length > 0 ? (
        <section className="posts-section">
          <h2 className="posts-heading">
            Everything, <em>in writing.</em>
          </h2>
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

      <section className="subscribe-section">
        <SubscribeForm />
      </section>
    </div>
  );
}
