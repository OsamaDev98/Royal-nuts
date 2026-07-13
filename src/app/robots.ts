import { MetadataRoute } from "next";

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://royal-nuts.net";
const BASE_URL = rawBaseUrl.startsWith("http://") || rawBaseUrl.startsWith("https://")
  ? rawBaseUrl
  : `https://${rawBaseUrl}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
