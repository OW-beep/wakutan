import Link from "next/link";

type Props = {
  /** 最終更新日（例: "2026-10-17"）。記事の ArticleSchema の dateModified と同じ値を渡す */
  dateModified: string;
};

function formatJa(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

/**
 * 記事の冒頭に置く「誰が書いたか・いつ更新したか」の表示。
 * 運営者情報（/about#operator）と編集方針（/editorial-policy）への入口を、
 * すべての記事に同じ形で置くことで、サイトの透明性を読者と審査の両方に伝える。
 */
export default function ArticleByline({ dateModified }: Props) {
  return (
    <div className="print-hide mb-6 rounded-2xl border border-orange-100 bg-white px-5 py-3 text-sm leading-7 text-gray-600">
      <p>
        <span className="font-bold text-gray-700">執筆：</span>
        <Link
          href="/about#operator"
          className="text-orange-700 underline underline-offset-4 hover:text-orange-800"
        >
          わくたん運営者
        </Link>
        <span className="mx-2 text-gray-300">|</span>
        <span className="font-bold text-gray-700">最終更新：</span>
        <time dateTime={dateModified}>{formatJa(dateModified)}</time>
        <span className="mx-2 text-gray-300">|</span>
        <Link
          href="/editorial-policy"
          className="text-orange-700 underline underline-offset-4 hover:text-orange-800"
        >
          編集方針
        </Link>
      </p>
    </div>
  );
}
