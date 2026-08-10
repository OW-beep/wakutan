import Link from "next/link";
import { getRelatedArticles } from "@/app/data/blogMeta";

type Props = {
  currentSlug: string;
  count?: number;
};

/**
 * 記事末尾に表示する「関連記事」ブロック。
 * 同じカテゴリの記事を優先して最大 count 件表示し、
 * サイト内の回遊（記事→記事）を促す。
 */
export default function RelatedArticles({ currentSlug, count = 3 }: Props) {
  const related = getRelatedArticles(currentSlug, count);

  if (related.length === 0) return null;

  return (
    <div className="mt-10 bg-white border rounded-2xl p-6 shadow-sm">
      <h3 className="font-bold text-xl mb-4">📖 あわせて読みたい</h3>

      <ul className="space-y-3">
        {related.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/blog/${article.slug}`}
              className="text-orange-700 font-semibold hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
