import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wakutan.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    // 年齢別ドリル
    {
      url: `${baseUrl}/4`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/5`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/6`,
      lastModified: new Date(),
      priority: 0.9,
    },

    // 記事・カテゴリ
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

    // ブログ記事
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

    // 固定ページ
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}