import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ひらがなを楽しく覚える方法｜4〜6歳向け",
  description:
    "4〜6歳向けに、ひらがなを遊びながら覚える方法を紹介。毎日の生活の中で楽しく文字に親しむコツを解説します。",
  alternates: {
    canonical: "/blog/hiragana-fun",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "ひらがなを楽しく覚える方法" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          ひらがなを楽しく覚える方法
        </h1>

        <p className="leading-8 mb-6">
          「まだ文字が読めない…」
          と心配する保護者の方も多いですが、
          4〜6歳は遊びを通して自然に文字へ興味を持つ時期です。
          無理に書かせるより、「楽しい！」と思える体験を増やしましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          絵本を毎日読む
        </h2>

        <p className="leading-8">
          絵本を読み聞かせることで、
          子どもは文字と音のつながりを自然に覚えていきます。
          同じ本を何度も読むことも効果的です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          名前から覚える
        </h2>

        <p className="leading-8">
          自分の名前は子どもにとって特別な文字です。
          最初は名前に使われているひらがなから覚えると、
          興味を持ちやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          身近な文字を探そう
        </h2>

        <p className="leading-8">
          スーパーの看板やお菓子のパッケージなど、
          身近な場所にはたくさんのひらがながあります。
          「この文字は『あ』だね！」と親子で探すだけでも学習になります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          書く練習は少しずつ
        </h2>

        <p className="leading-8">
          読めるようになってから書く練習を始めると、
          無理なく進められます。
          1日数文字でも十分です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日のドリルで定着
        </h2>

        <p className="leading-8">
          遊びや絵本で覚えた文字は、
          ドリルで復習すると忘れにくくなります。
          毎日5分程度でも継続することが大切です。
        </p>

        <div className="bg-pink-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            無料ドリルはこちら
          </h2>

          <ul className="space-y-2">

            <li>
              <Link href="/4" className="text-blue-600 hover:underline">
                4歳向け無料ドリル
              </Link>
            </li>

            <li>
              <Link href="/5" className="text-blue-600 hover:underline">
                5歳向け無料ドリル
              </Link>
            </li>

            <li>
              <Link href="/6" className="text-blue-600 hover:underline">
                6歳向け無料ドリル
              </Link>
            </li>

          </ul>

        </div>

      </article>

    </main>
  );
}