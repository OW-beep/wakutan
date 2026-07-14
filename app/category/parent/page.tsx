import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "保護者向け記事 | わくたん",
  description:
    "家庭学習・知育・小学校入学準備など、保護者向けの記事一覧です。",

  alternates: {
    canonical: "/category/parent",
  },
};

const articles = [
  {
    href: "/blog/school-preparation",
    emoji: "🎒",
    title: "小学校入学前に身につけたい力",
    desc: "入学前に育てたい力を解説",
  },
  {
    href: "/blog/study-habit",
    emoji: "🌱",
    title: "家庭学習を続けるコツ",
    desc: "毎日続けるための習慣づくり",
  },
  {
    href: "/blog/5min-study",
    emoji: "⏰",
    title: "毎日5分学習の効果",
    desc: "短時間学習を継続するメリット",
  },
  {
    href: "/blog/print-learning",
    emoji: "📚",
    title: "プリント学習のメリット",
    desc: "紙で学ぶことの良さ",
  },
  {
    href: "/blog/why-drill",
    emoji: "🧠",
    title: "なぜドリル学習が効果的？",
    desc: "幼児期のドリル学習を解説",
  },
  {
    href: "/blog/improve-concentration",
    emoji: "🎯",
    title: "幼児の集中力を伸ばす方法",
    desc: "家庭でできる集中力アップ",
  },
  {
    href: "/blog/child-hates-study",
    emoji: "😊",
    title: "子どもが勉強を嫌がるときは？",
    desc: "楽しく続けるための工夫",
  },
  {
    href: "/blog/reward-for-study",
    emoji: "🏅",
    title: "幼児にごほうびは必要？",
    desc: "やる気を育てる褒め方",
  },
  {
    href: "/blog/educational-play",
    emoji: "🧩",
    title: "幼児におすすめの知育遊び10選",
    desc: "遊びながら学ぶアイデア",
  },
  {
    href: "/blog/toys-vs-drills",
    emoji: "⚖️",
    title: "知育玩具とドリルどっち？",
    desc: "それぞれのメリットを比較",
  },
  {
    href: "/blog/maze-benefits",
    emoji: "🌀",
    title: "迷路遊びで育つ5つの力",
    desc: "集中力・思考力を育てる",
  },
  {
    href: "/blog/puzzle-benefits",
    emoji: "🧩",
    title: "パズル遊びで育つ力",
    desc: "論理的思考を楽しく伸ばそう",
  },
  {
    href: "/blog/concentration-4year",
    emoji: "🎯",
    title: "4歳なのに集中できない…",
    desc: "1日5分から始める集中力の育て方",
  },
  {
    href: "/blog/hiragana-worry-5year",
    emoji: "🔤",
    title: "5歳でひらがなが読めない…",
    desc: "無理強いせず興味を持たせるステップ",
  },
  {
    href: "/blog/sansu-weak-6year",
    emoji: "🔢",
    title: "6歳で算数が苦手でも大丈夫！",
    desc: "小学校でつまずかない土台の作り方",
  },
  {
    href: "/blog/kakekoe-collection",
    emoji: "💬",
    title: "勉強嫌いにならないための声かけ集",
    desc: "「頑張れ」だけじゃない伝え方",
  },
  {
    href: "/blog/school-checklist",
    emoji: "🎒",
    title: "小学校入学準備チェックリスト",
    desc: "学用品だけじゃない本当に大切な準備",
  },
  {
    href: "/blog/busy-parent-5min",
    emoji: "⏰",
    title: "忙しいママ・パパ向け 1日5分ルーティン",
    desc: "無理なく続けるコツ",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-10 shadow-lg mb-10">

          <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
            👨‍👩‍👧 保護者向け記事
          </h1>

          <p className="text-lg leading-8">
            家庭学習・知育・入学準備・学習習慣づくりなど、
            保護者の方に役立つ記事をまとめています。
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {articles.map((article) => (

            <Link
              key={article.href}
              href={article.href}
              className="bg-white rounded-3xl shadow p-6 hover:shadow-xl transition"
            >

              <div className="text-5xl mb-3">
                {article.emoji}
              </div>

              <h2 className="text-2xl font-bold mb-2">
                {article.title}
              </h2>

              <p className="text-gray-600">
                {article.desc}
              </p>

            </Link>

          ))}

        </div>

        <div className="mt-12 bg-white rounded-3xl shadow p-8">

          <h2 className="text-3xl font-bold mb-4">
            🌈 保護者の方へ
          </h2>

          <p className="leading-8">
            幼児期の学習で大切なのは、
            「たくさん勉強すること」ではなく、
            楽しく続けることです。
          </p>

          <p className="leading-8 mt-4">
            わくたんでは、家庭で無理なく取り組める知育や、
            小学校につながる学習習慣づくりを応援しています。
          </p>

        </div>

      </section>

    </main>
  );
}