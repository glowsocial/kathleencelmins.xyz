import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Doodle from "./components/Doodle";
import { doodleForPost } from "./components/doodles";
import PostCard from "./components/PostCard";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="writing-home">
      <aside className="home-intro" aria-labelledby="home-title">
        <div className="home-intro-inner">
          <Doodle name="sparkle" className="intro-sparkle intro-sparkle-big" />
          <Doodle name="sparkle" className="intro-sparkle intro-sparkle-small" />
          <h1 id="home-title">
            Everything, <span className="home-title-script">in writing.</span>
          </h1>
          <Doodle name="squiggle" className="intro-squiggle" />
          <p className="home-hello">I&rsquo;m Kathleen.</p>
          <p>
            I build things, read books, and write to figure out what I think.
          </p>
          <p>
            Some of it is about work. Some of it is about life. There&rsquo;s
            room for all of it here.
          </p>
          <Link href="/about" className="home-about">A little more about me</Link>
          <Doodle name="curlicue" className="intro-curlicue" />
        </div>
        <Doodle name="sprout" className="intro-sprout" />
      </aside>

      <div className="home-pages">
        <section className="home-feed" aria-labelledby="writing-heading" id="writing">
          <div className="home-feed-heading">
            <h2 id="writing-heading">Recent writing</h2>
            <Doodle name="arrow" className="feed-arrow" />
          </div>
          {posts.length > 0 ? (
          <div className="posts-list">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} doodle={doodleForPost(posts, post.slug)} />
            ))}
          </div>
          ) : (
            <div className="empty-state"><p>The first piece will be here soon.</p></div>
          )}
          <p className="home-archive-link">
            <Link href="/archive">From earlier chapters: the archive</Link>
          </p>
        </section>
        <section className="home-subscribe" id="subscribe" aria-label="Subscribe by email">
          <SubscribeForm />
        </section>
      </div>
    </div>
  );
}
