import type { Metadata } from "next";
import Link from "next/link";
import { blogMeta } from "@/app/data/blogMeta";

export const metadata: Metadata = {
  title: "サイトマップ",
  description:
    "わくたんの全ページの一覧です。年齢別・ジャンル別のドリル、家庭学習の記事、運営者情報などをカテゴリごとにまとめています。",
  alternates: {
    canonical: "/sitemap",
  },
};

type Entry = { href: string; label: string };

const GENRES_4: Entry[] = [
  { href: "/4/sansu", label: "さんすう" },
  { href: "/4/ronri", label: "ろんり" },
  { href: "/4/suiri", label: "すいり" },
  { href: "/4/kokki", label: "こっき" },
  { href: "/4/pattern", label: "パターン" },
  { href: "/4/hiragana", label: "ひらがな" },
  { href: "/4/nakamawake", label: "なかまわけ" },
  { href: "/4/kurabekko", label: "くらべっこ" },
  { href: "/4/nakamahazure", label: "なかまはずれ" },
  { href: "/4/nazonazo", label: "なぞなぞ" },
  { href: "/4/okane", label: "おかね" },
  { href: "/4/tsumiki", label: "つみき" },
  { href: "/4/onajikatachi", label: "おなじかたち" },
  { href: "/4/kaiten", label: "くるくるパズル" },
  { href: "/4/sentaisho", label: "かがみうつし" },
  { href: "/4/mikata", label: "どこからみる？" },
  { href: "/4/keiyoushi", label: "ぴったりことば" },
  { href: "/4/masu", label: "ますけいさん" },
];

const GENRES_5: Entry[] = [
  { href: "/5/sansu", label: "さんすう" },
  { href: "/5/ronri", label: "ろんり" },
  { href: "/5/suiri", label: "すいり" },
  { href: "/5/kokki", label: "こっき" },
  { href: "/5/pattern", label: "パターン" },
  { href: "/5/hiragana", label: "ひらがな" },
  { href: "/5/nakamawake", label: "なかまわけ" },
  { href: "/5/kurabekko", label: "くらべっこ" },
  { href: "/5/nakamahazure", label: "なかまはずれ" },
  { href: "/5/moji", label: "もじのよみとき" },
  { href: "/5/nazonazo", label: "なぞなぞ" },
  { href: "/5/okane", label: "おかね" },
  { href: "/5/tsumiki", label: "つみき" },
  { href: "/5/onajikatachi", label: "おなじかたち" },
  { href: "/5/kaiten", label: "くるくるパズル" },
  { href: "/5/sentaisho", label: "かがみうつし" },
  { href: "/5/mikata", label: "どこからみる？" },
  { href: "/5/keiyoushi", label: "ぴったりことば" },
  { href: "/5/masu", label: "ますけいさん" },
  { href: "/5/kuriagari", label: "くりあがりたしざん" },
  { href: "/5/kurisagari", label: "くりさがりひきざん" },
  { href: "/5/okane-keisan", label: "おかねの けいさん" },
  { href: "/5/otsuri", label: "おつりの けいさん" },
];

const GENRES_6: Entry[] = [
  { href: "/6/sansu", label: "さんすう" },
  { href: "/6/ronri", label: "ろんり" },
  { href: "/6/suiri", label: "すいり" },
  { href: "/6/kokki", label: "こっき" },
  { href: "/6/pattern", label: "パターン" },
  { href: "/6/hiragana", label: "ひらがな" },
  { href: "/6/nakamawake", label: "なかまわけ" },
  { href: "/6/kurabekko", label: "くらべっこ" },
  { href: "/6/nakamahazure", label: "なかまはずれ" },
  { href: "/6/moji", label: "もじのよみとき" },
  { href: "/6/tokei", label: "とけい" },
  { href: "/6/nazonazo", label: "なぞなぞ" },
  { href: "/6/okane", label: "おかね" },
  { href: "/6/tsumiki", label: "つみき" },
  { href: "/6/onajikatachi", label: "おなじかたち" },
  { href: "/6/kaiten", label: "くるくるパズル" },
  { href: "/6/sentaisho", label: "かがみうつし" },
  { href: "/6/mikata", label: "どこからみる？" },
  { href: "/6/keiyoushi", label: "ぴったりことば" },
  { href: "/6/masu", label: "ますけいさん" },
  { href: "/6/kuriagari", label: "くりあがりたしざん" },
  { href: "/6/kurisagari", label: "くりさがりひきざん" },
  { href: "/6/okane-keisan", label: "おかねの けいさん" },
  { href: "/6/otsuri", label: "おつりの けいさん" },
];

const AGE_BLOCKS: { age: string; href: string; items: Entry[]; color: string }[] = [
  { age: "4歳", href: "/4", items: GENRES_4, color: "text-yellow-700" },
  { age: "5歳", href: "/5", items: GENRES_5, color: "text-orange-700" },
  { age: "6歳", href: "/6", items: GENRES_6, color: "text-rose-700" },
];

const OTHER_TOOLS: Entry[] = [
  { href: "/narai-shindan", label: "習い事診断" },
  { href: "/otsuri", label: "おつりのドリル" },
  { href: "/okane-keisan", label: "おかねのけいさん" },
  { href: "/kuriagari", label: "くりあがりのドリル" },
  { href: "/kurisagari", label: "くりさがりのドリル" },
  { href: "/favorites", label: "お気に入り" },
  { href: "/review", label: "ふくしゅうリスト" },
  { href: "/search", label: "サイト内検索" },
];

const SITE_INFO: Entry[] = [
  { href: "/about", label: "わくたんについて・運営者情報" },
  { href: "/editorial-policy", label: "編集方針" },
  { href: "/privacy-policy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/contact", label: "お問い合わせ" },
];

// 記事をカテゴリごとにまとめる（blogMeta に新しい記事を足せば、ここにも自動で載る）
function groupByCategory() {
  const groups = new Map<string, { slug: string; title: string }[]>();
  for (const a of blogMeta) {
    const list = groups.get(a.category) ?? [];
    list.push({ slug: a.slug, title: a.title });
    groups.set(a.category, list);
  }
  return Array.from(groups.entries());
}

export default function SitemapPage() {
  const groups = groupByCategory();

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <article className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow mb-8">
          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            🗺️ サイトマップ
          </h1>
          <p className="text-lg text-gray-700">
            わくたんのページを、種類ごとにまとめました。
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">🧸 年齢別のドリル</h2>
          <p className="leading-7 text-gray-600 mb-6">
            4歳・5歳・6歳それぞれの、ジャンル別ドリルページです。
          </p>

          <div className="space-y-8">
            {AGE_BLOCKS.map((block) => (
              <div key={block.age}>
                <h3 className={`text-xl font-bold mb-3 ${block.color}`}>
                  <Link href={block.href} className="hover:underline">
                    {block.age}ドリル
                  </Link>
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                  {block.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-gray-700 underline underline-offset-4 decoration-gray-300 hover:text-orange-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">🧰 そのほかのドリル・ツール</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
            {OTHER_TOOLS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 underline underline-offset-4 decoration-gray-300 hover:text-orange-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">📝 家庭学習・知育の記事</h2>
          <p className="leading-7 text-gray-600 mb-6">
            全{blogMeta.length}本の記事を、カテゴリごとに並べています。
            <Link
              href="/articles"
              className="ml-1 text-orange-700 underline underline-offset-4"
            >
              記事一覧ページ
            </Link>
            もあわせてどうぞ。
          </p>

          <div className="space-y-8">
            {groups.map(([category, list]) => (
              <div key={category}>
                <h3 className="text-lg font-bold mb-3 text-orange-700">
                  {category}（{list.length}）
                </h3>
                <ul className="space-y-1.5 text-sm">
                  {list.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/blog/${a.slug}`}
                        className="text-gray-700 underline underline-offset-4 decoration-gray-300 hover:text-orange-700"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4">ℹ️ サイトについて</h2>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {SITE_INFO.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 underline underline-offset-4 decoration-gray-300 hover:text-orange-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/feed.xml"
                className="text-gray-700 underline underline-offset-4 decoration-gray-300 hover:text-orange-700"
              >
                RSSフィード（新着記事）
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
