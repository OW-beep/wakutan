import Link from "next/link";

type GenreItem = {
  href: string;
  emoji: string;
  label: string;
};

type Props = {
  items: GenreItem[];
  accentText: string;
  accentBorder: string;
  accentBg: string;
};

/**
 * 年齢ページから、それぞれのジャンルの問題ページへ飛べる一覧。
 * これまでサイト内に「全ジャンルへのリンク一覧」がどこにも無く、URLを直接
 * 知らないと各ジャンルのドリルページ（つみき・おなじかたち等）にたどり着けなかったため追加。
 */
export default function GenreNav({ items, accentText, accentBorder, accentBg }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 mb-10">
      <h2 className={`text-xl font-bold mb-4 ${accentText}`}>
        📚 もんだいの しゅるい
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-white border ${accentBorder} hover:${accentBg} transition font-bold`}
          >
            <span className="text-2xl">{item.emoji}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
