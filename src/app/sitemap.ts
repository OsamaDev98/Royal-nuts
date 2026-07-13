import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://royal-nuts.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "",          priority: 1.0,  changeFreq: "weekly"  as const },
    { path: "/products", priority: 0.9,  changeFreq: "weekly"  as const },
  ];

  const productSlugs = [
    "raw-peanuts",
    "roasted-peanuts",
    "peanut-butter",
    "sesame-tahini",
    "white-sesame",
    "roasted-sesame",
    "sesame-oil",
    "industrial-bulk-peanuts",
  ];

  const localeRoutes = staticRoutes.flatMap(({ path, priority, changeFreq }) => [
    {
      url: `${BASE_URL}${path}`,          // Arabic (default, no prefix)
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
      alternates: {
        languages: {
          ar: `${BASE_URL}${path}`,
          en: `${BASE_URL}/en${path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${path}`,       // English
      lastModified: now,
      changeFrequency: changeFreq,
      priority: priority - 0.05,
    },
  ]);

  const productRoutes = productSlugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]);

  return [...localeRoutes, ...productRoutes];
}
