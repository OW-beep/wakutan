import type { RakutenItem } from "@/lib/rakuten";

export default function RakutenProducts({
  items,
  title = "関連グッズ",
}: {
  items: RakutenItem[] | null;
  title?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-10 bg-white rounded-3xl shadow p-6">

      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-bold text-lg">🛒 {title}</h3>
        <span className="text-[10px] font-bold text-gray-400 border border-gray-300 rounded px-1.5 py-0.5">
          PR
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="block bg-yellow-50 rounded-2xl p-3 hover:opacity-90 transition"
          >
            {item.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full aspect-square object-cover rounded-xl mb-2 bg-white"
              />
            )}
            <p className="text-xs leading-5 line-clamp-2 mb-1">{item.name}</p>
            <p className="text-orange-600 font-bold text-sm">
              ¥{item.price.toLocaleString()}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">{item.shopName}</p>
          </a>
        ))}
      </div>

      <p className="text-[10px] text-gray-400 mt-3">
        ※商品情報は楽天市場の検索結果を表示しています。価格・在庫状況は変動する場合があります。
      </p>

    </div>
  );
}
