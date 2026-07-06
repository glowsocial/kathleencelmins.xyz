import { getAllPosts } from "@/lib/posts";
import { getAllArchivePosts, getArchiveSources } from "@/lib/archive";

export default function sitemap() {
  const baseUrl = "https://www.kathleencelmins.xyz";

  const posts = getAllPosts();
  const archiveSources = getArchiveSources();
  const archivePosts = getAllArchivePosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const archiveSourceUrls = archiveSources.map((source) => ({
    url: `${baseUrl}/archive/${source.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.4,
  }));
  const archivePostUrls = archivePosts.map((post) => ({
    url: `${baseUrl}/archive/${post.sourceId}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/goals`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...archiveSourceUrls,
    ...postUrls,
    ...archivePostUrls,
  ];
}
