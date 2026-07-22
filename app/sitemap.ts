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
    "/4/kurabekko",
    "/4/nakamahazure",
    "/4/nazonazo",

    "/5/sansu",
    "/5/ronri",
    "/5/pattern",
    "/5/hiragana",
    "/5/nakamawake",
    "/5/kurabekko",
    "/5/nakamahazure",
    "/5/moji",
    "/5/nazonazo",

    "/6/sansu",
    "/6/ronri",
    "/6/pattern",
    "/6/hiragana",
    "/6/nakamawake",
    "/6/kurabekko",
    "/6/nakamahazure",
    "/6/moji",
    "/6/tokei",
    "/6/nazonazo",

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

    "/blog/concentration-4year",
    "/blog/hiragana-worry-5year",
    "/blog/sansu-weak-6year",
    "/blog/kakekoe-collection",
    "/blog/school-checklist",
    "/blog/busy-parent-5min",

    "/blog/summer-study-schedule",
    "/blog/rainy-day-play",
    "/blog/outing-learning-games",
    "/blog/drill-vs-print",
    "/blog/study-mistakes",
    "/blog/skills-by-age",

    "/blog/morning-routine",
    "/blog/age-gap-siblings",
    "/blog/tablet-vs-paper",
    "/blog/almost-can-do",

    "/blog/4year-hiragana",
    "/blog/4year-number",
    "/blog/4year-study-time",
    "/blog/dot-to-dot-benefits",
    "/blog/find-differences-benefits",
    "/blog/hiragana-fun",
    "/blog/how-read-clock",
    "/blog/katakana-start",
    "/blog/number-play",
    "/blog/scissors-practice",
    "/blog/shape-learning",
    "/blog/unpitsu-practice",
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