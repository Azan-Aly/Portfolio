<<<<<<< HEAD
export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

=======
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function robots() {
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
  return {
    rules: {
      userAgent: "*",
      allow: "/",
<<<<<<< HEAD
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
=======
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
