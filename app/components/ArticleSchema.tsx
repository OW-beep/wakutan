type Props = {
  title: string;
  description: string;
  slug: string;
  datePublished: string; // 例: "2026-07-01"
  dateModified?: string; // 省略時は datePublished と同じ扱い
};

/**
 * ブログ記事ページに埋め込む Article 構造化データ。
 * E-E-A-T（運営者の実務経験）や更新性をGoogleに機械的に伝えるための情報。
 * 著者情報は about ページの運営者情報と揃えている。
 */
export default function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://wakutan.vercel.app/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "わくたん運営者",
      url: "https://wakutan.vercel.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "わくたん",
      url: "https://wakutan.vercel.app",
    },
    inLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
