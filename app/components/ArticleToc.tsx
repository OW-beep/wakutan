type Item = { id: string; text: string };

/**
 * 記事の「もくじ」。見出し（h2）へのページ内リンクを並べる。
 * 各見出しの id は、記事ファイル側の <h2 id="..."> と揃えてある。
 */
export default function ArticleToc({ items }: { items: Item[] }) {
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="もくじ"
      className="print-hide mb-8 rounded-2xl border-2 border-dashed border-orange-200 bg-white p-6"
    >
      <p className="mb-3 font-bold text-orange-700">🔖 もくじ</p>
      <ol className="list-decimal space-y-1.5 pl-6 text-gray-700">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="underline underline-offset-4 decoration-orange-300 hover:text-orange-700"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
