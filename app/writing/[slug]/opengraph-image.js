import { ImageResponse } from "next/og";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/posts";
import { doodleForPost } from "../../components/doodles";
import { EssayCard, OG_SIZE, ogFonts } from "@/lib/og";

export const alt = "An essay by Kathleen Celmins";
export const size = OG_SIZE;
export const contentType = "image/png";

// Drawn at build time, one per essay, like the pages themselves.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const doodle = doodleForPost(getAllPosts(), slug) || { name: "sparkle", tone: "gold" };
  return new ImageResponse(<EssayCard title={post?.title || "Kathleen Celmins"} doodle={doodle} />, {
    ...size,
    fonts: await ogFonts(),
  });
}
