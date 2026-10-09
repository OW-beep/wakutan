import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

/**
 * 全ページを「いまの日時」で出していると、Google が lastmod を信用しなくなる。
 * ブログ記事は、記事自身の dateModified を使う。それ以外のページは、内容を大きく
 * 変えたときに、下の日付を手で更新する。
 */
const SITE_UPDATED = "2026-10-09";

function lastModFor(page: string): Date {
  if (page.startsWith("/blog/")) {
    try {
      const file = path.join(process.cwd(), "app", page, "page.tsx");
      const m = fs.readFileSync(file, "utf8").match(/dateModified="(\d{4}-\d{2}-\d{2})"/);
      if (m) return new Date(m[1]);
    } catch {
      /* 読めなければ SITE_UPDATED を使う */
    }
  }
  return new Date(SITE_UPDATED);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wakutan.vercel.app";

  const pages = [
    "",

    "/4",
    "/5",
    "/6",

    "/4/sansu",
    "/4/ronri",
    "/4/suiri",
    "/4/kokki",
    "/4/pattern",
    "/4/hiragana",
    "/4/nakamawake",
    "/4/kurabekko",
    "/4/nakamahazure",
    "/4/nazonazo",
    "/4/okane",
    "/4/tsumiki",
    "/4/onajikatachi",
    "/4/kaiten",
    "/4/sentaisho",
    "/4/mikata",
    "/4/keiyoushi",
    "/4/masu",

    "/5/sansu",
    "/5/ronri",
    "/5/suiri",
    "/5/kokki",
    "/5/pattern",
    "/5/hiragana",
    "/5/nakamawake",
    "/5/kurabekko",
    "/5/nakamahazure",
    "/5/moji",
    "/5/nazonazo",
    "/5/okane",
    "/5/tsumiki",
    "/5/onajikatachi",
    "/5/kaiten",
    "/5/sentaisho",
    "/5/mikata",
    "/5/keiyoushi",
    "/5/masu",

    "/6/sansu",
    "/6/ronri",
    "/6/suiri",
    "/6/kokki",
    "/6/pattern",
    "/6/hiragana",
    "/6/nakamawake",
    "/6/kurabekko",
    "/6/nakamahazure",
    "/6/moji",
    "/6/tokei",
    "/6/nazonazo",
    "/6/okane",
    "/6/tsumiki",
    "/6/onajikatachi",
    "/6/kaiten",
    "/6/sentaisho",
    "/6/mikata",
    "/6/keiyoushi",
    "/6/masu",

    "/about",
    "/articles",
    "/categories",
    "/category/age",
    "/category/parent",
    "/narai-shindan",
    "/search",

    "/contact",
    "/privacy-policy",
    "/terms",

    "/blog/print-builder-guide",
    "/blog/kodomo-hikaku-tebanasu",
    "/blog/nencho-katei-gakushu",
    "/blog/akachan-gaeri",
    "/blog/chiiku-otoshiana",
    "/blog/self-time-childcare",
    "/blog/drill-hurdle-down",
    "/blog/narai-shindan-guide",
    "/blog/question-bank-by-age",
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

    "/blog/money-education-age",
    "/blog/allowance-timing",
    "/blog/shopping-play-benefits",
    "/blog/self-esteem-words",

    "/blog/4year-drill-refusal",
    "/blog/5year-number-weak",
    "/blog/6year-prep-timeline",

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
    "/blog/spatial-skills-preschool",
    "/blog/pattern-repeating-math",
    "/blog/emotion-words-keiyoushi",
    "/blog/tracing-vs-handwriting",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: lastModFor(page),
    changeFrequency: "weekly",
    priority:
      page === ""
        ? 1.0
        : ["/4", "/5", "/6"].includes(page)
        ? 0.95
        : page === "/articles"
        ? 0.9
        : page === "/narai-shindan"
        ? 0.9
        : page.startsWith("/category")
        ? 0.85
        : page.startsWith("/blog")
        ? 0.8
        : 0.7,
  }));
}