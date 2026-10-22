import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import PostCard from "./components/PostCard";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="writing-home">
      <aside className="home-intro" aria-labelledby="home-title">
        <div className="home-intro-inner">
          <h1 id="home-title">Everything, <br />in writing.</h1>
          <p className="home-hello">I&rsquo;m Kathleen.</p>
          <p>
            I build things, read books, and write to figure out what I think.
          </p>
          <p>
            Some of it is about work. Some of it is about life. There&rsquo;s
            room for all of it here.
          </p>
          <Link href="/about" className="home-about">A little more about me</Link>
        </div>
      </aside>

      <div className="home-pages">
        <section className="home-feed" aria-labelledby="writing-heading" id="writing">
          <h2 id="writing-heading">Recent writing</h2>
          {posts.length > 0 ? (
          <div className="posts-list">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
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
