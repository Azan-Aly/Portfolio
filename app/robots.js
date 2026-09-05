import { cleanSiteUrl } from "./site-url";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${cleanSiteUrl}/sitemap.xml`,
  };
}
