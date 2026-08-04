import { getAllPosts } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";

export const dynamic = "force-static";

const baseUrl = "https://www.kathleencelmins.xyz";
const siteTitle = "Kathleen Celmins";
const siteDescription =
  "Everything, in writing. Essays on building boomp.net and what running it teaches — by Kathleen Celmins.";

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absolutize(html) {
  return html
    .replaceAll('src="/', `src="${baseUrl}/`)
    .replaceAll('href="/', `href="${baseUrl}/`);
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/writing/${post.slug}`;
      const html = absolutize(markdownToHtml(post.content));
      const safeHtml = html.replaceAll("]]>", "]]]]><![CDATA[>");

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description || "")}</description>
      <content:encoded><![CDATA[${safeHtml}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = posts.length
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${siteTitle}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
