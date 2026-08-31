import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.brand.domain}`;
  const lastModified = new Date();
  return [
    {
      url: base,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...site.servicePages.map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
