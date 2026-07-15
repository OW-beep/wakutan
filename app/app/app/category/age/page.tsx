import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "年齢別学習 | わくたん",
  description:
    "4歳・5歳・6歳向けの家庭学習・知育・入学準備の記事一覧です。",

  alternates: {
    canonical: "/category/age",
  },
};

const articles = [
  {
    href: "/blog/how-4year-learn",
    emoji: "🧸",
    title: "4歳の学び方",
    desc: "4歳におすすめの家庭学習と知育の進め方",
  },
  {
    href: "/blog/concentration-4year",
    emoji: "🎯",
    title: "4歳なのに集中できない…",
    desc: "1日5分から始める集中力の育て方",
  },
  {
    href: "/blog/how-5year-learn",
    emoji: "🚀",
    title: "5歳の学び方",
    desc: "考える力を育てる5歳向け学習法",
  },
  {
    href: "/blog/hiragana-worry-5year",
    emoji: "🔤",
    title: "5歳でひらがなが読めない…",
    desc: "無理強いせず興味を持たせるステップ",
  },
  {
    href: "/blog/how-6year-learn",
    emoji: "🎓",
    title: "6歳の学び方",
    desc: "小学校入学前に身につけたい力",
  },
  {
    href: "/blog/sansu-weak-6year",
    emoji: "🔢",
    title: "6歳で算数が苦手でも大丈夫！",
    desc: "小学校でつまずかない土台の作り方",
  },
  {
    href: "/blog/when-start-hiragana",
    emoji: "🔤",
    title: "ひらがなは何歳から？",
    desc: "始めるタイミングとコツ",
  },
  {
    href: "/blog/when-start-numbers",
    emoji: "🔢",
    title: "数字は何歳から覚える？",
    desc: "数字遊びの始め方",
  },
  {
    href: "/blog/skills-by-age",
    emoji: "🌱",
    title: "4歳・5歳・6歳の発達段階別 「今」伸ばしたい力",
    desc: "年齢に合わせた関わり方のヒント",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-10 shadow-lg mb-10">

          <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
            🎂 年齢別学習
          </h1>

          <p className="text-lg leading-8">
            4歳・5歳・6歳それぞれの発達に合わせた家庭学習や、
            幼児教育のポイントをまとめています。
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
            🌱 年齢に合わせた学びが大切
          </h2>

          <p className="leading-8">
            幼児期は年齢によって理解できる内容や興味が大きく変わります。
            無理に先取りするよりも、その年齢に合った学びを積み重ねることが、
            将来の学力につながります。
          </p>

        </div>

      </section>

    </main>
  );
}