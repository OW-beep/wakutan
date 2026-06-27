import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "家庭学習・知育・入学準備に役立つ記事一覧です。",

  alternates: {
    canonical: "/articles",
  },
};

const articles = [
  
  {
    href: "/blog/how-6year-learn",
    emoji: "🎓",
    title: "6歳の学び方",
    desc: "小学校入学前に育てたい力を解説",
  },
  {
    href: "/blog/school-preparation",
    emoji: "🎒",
    title: "小学校入学前に身につけたい力",
    desc: "入学準備で本当に大切なことを解説",
  },
  {
    href: "/blog/how-5year-learn",
    emoji: "🚀",
    title: "5歳の学び方",
    desc: "5歳におすすめの家庭学習方法",
  },
  {
    href: "/blog/how-4year-learn",
    emoji: "🧸",
    title: "4歳の学び方",
    desc: "4歳の好奇心を伸ばす学び方",
  },
  {
    href: "/blog/school-preparation",
    emoji: "🎒",
    title: "小学校入学前に身につけたい力",
    desc: "入学準備で本当に大切なことを解説",
  },
  {
    href: "/blog/how-5year-learn",
    emoji: "🚀",
    title: "5歳の学び方",
    desc: "5歳におすすめの家庭学習方法",
  },
  {
    href: "/blog/how-4year-learn",
    emoji: "🧸",
    title: "4歳の学び方",
    desc: "4歳の好奇心を伸ばす学び方",
  },
  {
    href: "/blog/study-habit",
    emoji: "🌱",
    title: "家庭学習を続けるコツ",
    desc: "学習習慣を無理なく身につける方法",
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
    desc: "紙で学ぶことの良さを紹介",
  },
  {
    href: "/blog/why-drill",
    emoji: "🧠",
    title: "なぜドリル学習が効果的？",
    desc: "幼児期の学習にドリルがおすすめな理由",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-10 shadow-lg mb-10">

          <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
            📖 記事一覧
          </h1>

          <p className="text-lg leading-8">
            家庭学習や知育、入学準備に役立つ記事をまとめています。
            気になるテーマから読んでみてください。
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
            🌈 わくたんについて
          </h2>

          <p className="leading-8">
            わくたん（わくわくたんけんたい）は、
            4歳〜6歳向けの無料知育ドリルサイトです。
          </p>

          <p className="leading-8 mt-4">
            算数・論理・パターン認識などの問題を通して、
            子どもたちの考える力を育てます。
          </p>

          <p className="leading-8 mt-4">
            毎日少しずつ学ぶことで、
            小学校につながる学習習慣づくりを応援しています。
          </p>

        </div>

      </section>

    </main>
  );
}