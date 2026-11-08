import fs from "node:fs";
import path from "node:path";
import { blogMeta } from "@/app/data/blogMeta";

const SITE_URL = "https://wakutan.vercel.app";
const FEED_LIMIT = 50;

// ビルド時に1回だけ作る（記事を足したら、次のデプロイで自動的に反映されます）
export const dynamic = "force-static";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type FeedItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  published: string;
  modified: string;
};

/** 各記事の page.tsx から、公開日・更新日・説明文を読み取る */
function readItem(entry: { slug: string; title: string; category: string }): FeedItem | null {
  try {
    const file = path.join(process.cwd(), "app", "blog", entry.slug, "page.tsx");
    const src = fs.readFileSync(file, "utf8");
    const published = src.match(/datePublished="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const modified = src.match(/dateModified="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const description = src.match(/description:\s*"([^"]+)"/)?.[1] ?? "";
    if (!published || !modified) return null;
    return { ...entry, description, published, modified };
  } catch {
    return null;
  }
}

export async function GET() {
  const items = blogMeta
    .map(readItem)
    .filter((x): x is FeedItem => x !== null)
    .sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0))
    .slice(0, FEED_LIMIT);

  const lastBuild = items.reduce(
    (latest, it) => (it.modified > latest ? it.modified : latest),
    "2026-01-01",
  );

  const itemsXml = items
    .map((it) => {
      const url = `${SITE_URL}/blog/${it.slug}`;
      return `
    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${it.published}T09:00:00+09:00`).toUTCString()}</pubDate>
      <category>${escapeXml(it.category)}</category>
      <description>${escapeXml(it.description)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>わくたん｜4〜6歳の無料知育ドリルと家庭学習の記事</title>
    <link>${SITE_URL}</link>
    <description>4〜6歳向けの無料知育ドリルと、家庭学習・知育についての記事を配信しています。</description>
    <language>ja</language>
    <lastBuildDate>${new Date(`${lastBuild}T09:00:00+09:00`).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
