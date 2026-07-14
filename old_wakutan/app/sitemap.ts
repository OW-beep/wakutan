import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wakutan.vercel.app";

  const pages = [
    "",

    "/4",
    "/5",
    "/6",

    "/4/sansu",
    "/4/ronri",
    "/4/pattern",
    "/4/hiragana",
    "/4/nakamawake",

    "/about",
    "/articles",
    "/categories",
    "/category/age",
    "/category/parent",

    "/contact",
    "/print",
    "/privacy-policy",
    "/terms",

    "/blog/how-4year-learn",
    "/blog/how-5year-learn",
    "/blog/how-6year-learn",

    "/blog/study-habit",
    "/blog/5min-study",
    "/blog/print-learning",
    "/blog/why-drill",

    "/blog/school-preparation",

    "/blog/when-start-hiragana",
    "/blog/when-start-numbers",

    "/blog/educational-play",
    "/blog/toys-vs-drills",
    "/blog/maze-benefits",
    "/blog/puzzle-benefits",

    "/blog/improve-concentration",
    "/blog/child-hates-study",
    "/blog/reward-for-study",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      page === ""
        ? 1.0
        : ["/4", "/5", "/6"].includes(page)
        ? 0.95
        : page === "/articles"
        ? 0.9
        : page.startsWith("/category")
        ? 0.85
        : page.startsWith("/blog")
        ? 0.8
        : 0.7,
  }));
}