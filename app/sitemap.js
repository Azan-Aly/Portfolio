import { workData } from "@/assets/assets";
import { cleanSiteUrl } from "./site-url";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    {
      url: `${cleanSiteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${cleanSiteUrl}/certifications`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectPages = workData.map(({ slug }) => ({
    url: `${cleanSiteUrl}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}

