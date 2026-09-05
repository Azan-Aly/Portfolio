const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelSiteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl =
  configuredSiteUrl && !configuredSiteUrl.includes("your-domain.example")
    ? configuredSiteUrl
    : vercelSiteUrl || "http://localhost:3000";

export const cleanSiteUrl = siteUrl.replace(/\/$/, "");
