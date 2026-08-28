<<<<<<< HEAD
export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return [
    {
      url: siteUrl,
=======
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  return [
    {
      url: `${siteUrl.replace(/\/$/, "")}/`,
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
<<<<<<< HEAD
}
=======
}
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
