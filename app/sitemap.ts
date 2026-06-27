import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://wakutan.vercel.app";

  return [

    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/category/age`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/category/parent`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-4year-learn`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-5year-learn`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/how-6year-learn`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/school-preparation`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/print-learning`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/blog/why-drill`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/blog/5min-study`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/blog/study-habit`,
      lastModified: new Date(),
      priority: 0.7,
    },

  ];
}