import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import SubscribeForm from "../../components/SubscribeForm";
import { formatDate } from "../../components/PostCard";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description || "",
  };
}

// The reading layout: one narrow column, title, subtitle, byline, body,
// a subscribe box at the end, then the neighbours in the feed.
export default async function WritingPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = markdownToHtml(post.content);
  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === slug);
  const newer = i > 0 ? all[i - 1] : null;
  const older = i >= 0 && i < all.length - 1 ? all[i + 1] : null;

  return (
    <div className="read-container">
      <article>
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          {post.description && (
            <p className="article-subtitle">{post.description}</p>
          )}
          <div className="article-byline">
            <span className="article-byline-name">Kathleen Celmins</span>
            <p className="article-meta">
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </p>
          </div>
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className="article-footer">
          <p className="article-footer-text">
            Thanks for reading. If something here resonated, I&rsquo;d love to
            hear about it.
          </p>
          <SubscribeForm />
          {(newer || older) && (
            <nav className="article-nav" aria-label="More writing">
              <div>
                {older && (
                  <Link href={`/writing/${older.slug}`}>
                    <span className="article-nav-label">Previous</span>
                    <span className="article-nav-title">{older.title}</span>
                  </Link>
                )}
              </div>
              <div className="article-nav-next">
                {newer && (
                  <Link href={`/writing/${newer.slug}`}>
                    <span className="article-nav-label">Next</span>
                    <span className="article-nav-title">{newer.title}</span>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </footer>
      </article>
    </div>
  );
}
