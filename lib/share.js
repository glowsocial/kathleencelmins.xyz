// Share tags for one piece of writing. Next merges page metadata into the
// layout's one key deep, so without these a page shares with the site's
// title and the home page's link instead of its own.
export function shareMetadata({ title, description, path, date }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
      siteName: "Kathleen Celmins",
      locale: "en_US",
      ...(date ? { publishedTime: new Date(date).toISOString() } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
