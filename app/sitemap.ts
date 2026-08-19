import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thewheelsturbocafe.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ajith-kumar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
