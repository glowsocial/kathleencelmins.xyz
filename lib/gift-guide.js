import { markdownToHtml } from "./markdown.js";

const escape = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const slug = (value) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const arrow = '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 12 12 4M4 4h8v8"/></svg>';

// The Markdown remains the source. Only this post's reading layout changes.
export function giftGuideToHtml(markdown) {
  const headings = [...markdown.matchAll(/^## (.+)$|^<h2(?: id="([^"]+)")?>(.+)<\/h2>$/gm)];
  if (!headings.length) return markdownToHtml(markdown);

  const opening = markdown.slice(0, headings[0].index).trim().split(/\n\n+/);
  const disclosure = opening[0]?.startsWith("**Affiliate disclosure:") ? opening.shift() : "";
  const firstParagraph = opening.shift() || "";
  const sections = headings.map((heading, index) => {
    const title = heading[1] || heading[3];
    const content = markdown.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? markdown.length).trim();
    const itemHeadings = [...content.matchAll(/^### (.+)$/gm)];
    return {
      title,
      id: heading[2] || slug(title),
      intro: content.slice(0, itemHeadings[0]?.index ?? content.length),
      items: itemHeadings.map((item, itemIndex) => ({
        title: item[1],
        body: content.slice(item.index + item[0].length, itemHeadings[itemIndex + 1]?.index ?? content.length).trim(),
      })),
    };
  });

  const labels = {
    stockings: "Stocking stuffers",
    "something-to-play-with": "To play with",
    "something-to-make": "To make",
    "wear-read": "To wear & read",
    "little-kids": "Younger kids",
    shared: "Shared gifts",
    "wish-list": "My wish list",
  };
  const nav = sections.filter((section) => section.items.length).map((section) => `<a href="#${section.id}">${escape(labels[section.id] || section.title)}</a>`).join("");

  function renderItem(item) {
    let body = item.body;
    const photo = body.match(/<div class="gift-media">[\s\S]*?<\/div>/)?.[0] || "";
    body = body.replace(photo, "");
    const shop = body.match(/<a class="shop-link"[^>]*>[\s\S]*?<\/a>/)?.[0] || "";
    body = body.replace(shop, "");
    const closingIndex = body.indexOf("\n---\n");
    const closing = closingIndex >= 0 ? body.slice(closingIndex + 5) : "";
    if (closingIndex >= 0) body = body.slice(0, closingIndex);
    let action = shop;
    if (shop) {
      const href = shop.match(/href="([^"]+)"/)?.[1] || "";
      const label = href.includes("amazon.com") ? (href.includes("/s?") ? "Search Amazon" : "View at Amazon") : shop.replace(/<span[\s\S]*?<\/span>/, "").replace(/<[^>]+>/g, "").trim();
      action = shop.replace(/>[^]*<\/a>$/, `>${escape(label)}${arrow}</a>`).replace('class="shop-link"', `class="shop-link" aria-label="${escape(`${label}: ${item.title}`)}"`);
    }
    return `<div class="gift-row${photo ? " gift-row-with-photo" : ""}" id="gift-${slug(item.title)}">${photo}<div class="gift-copy"><h3>${escape(item.title)}</h3>${markdownToHtml(body.trim())}${action}</div></div>${closing ? `<div class="gift-guide-closing">${markdownToHtml(closing.trim())}</div>` : ""}`;
  }

  return `<div class="gift-guide-layout"><nav class="gift-guide-nav" aria-label="Gift guide sections"><p>In this guide</p>${nav}</nav><div class="gift-guide-body"><div class="gift-guide-intro">${markdownToHtml(firstParagraph)}${opening.length ? `<details><summary>More about this year's list</summary>${markdownToHtml(opening.join("\n\n"))}</details>` : ""}</div>${disclosure ? `<div class="gift-guide-disclosure">${markdownToHtml(disclosure)}</div>` : ""}${sections.map((section) => `<section class="gift-section${section.items.length ? "" : " gift-section-intro"}" aria-labelledby="${section.id}"><h2 id="${section.id}">${escape(section.title)}</h2>${section.intro.trim() ? `<div class="gift-section-intro-copy">${markdownToHtml(section.intro.trim())}</div>` : ""}${section.items.map(renderItem).join("")}</section>`).join("")}</div></div>`;
}
