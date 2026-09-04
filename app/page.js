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
            Sixteen years making other people look good online. Then I got
            tired of advising and <em>wrote the code myself.</em>
          </h1>
          <div className="hero-rule" />
          <p className="home-bio">
            That software is <a href="https://boomp.net">boomp.net</a>. It
            reads your website, writes the posts, you say yes. That&rsquo;s
            why it&rsquo;s ninety-nine bucks and not two grand.
          </p>
          <p className="home-bio">
            I built it, I run it, I answer the support email. 5,600 commits
            since May 2025. Nobody raised a round.
          </p>
          <a className="hero-cta" href={FIRST_LOOK_URL}>
            See what it would say about you
          </a>
          <p className="home-receipts">
            HubSpot contributor &middot; SCORE Phoenix contributor &middot;
            200+ commits a month &middot; 0 rounds raised
          </p>
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
