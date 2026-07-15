import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "カタカナはいつから教える？無理なく始めるタイミング",
  description:
    "4〜6歳向けにカタカナを始めるタイミングや楽しく覚える方法を紹介します。ひらがなが読めるようになってからがおすすめです。",
  alternates: {
    canonical: "/blog/katakana-start",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "カタカナはいつから教える？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          カタカナはいつから教える？無理なく始めるタイミング
        </h1>

        <p className="leading-8 mb-6">
          「ひらがなは読めるようになったけど、
          カタカナはまだ教えた方がいいのかな？」
          と悩む保護者の方も多いでしょう。
          カタカナは焦って覚えさせる必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          まずはひらがなを優先
        </h2>

        <p className="leading-8">
          小学校入学前は、
          まずひらがなが読めることが大切です。
          カタカナはひらがながある程度身についてから始めると、
          子どもも混乱しにくくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          身近な言葉から覚えよう
        </h2>

        <p className="leading-8">
          テレビやスーパーには、
          カタカナがたくさんあります。
          「アイス」「バス」「ジュース」など、
          身近な言葉から覚えると興味を持ちやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          一度に全部覚えなくてOK
        </h2>

        <p className="leading-8">
          46文字を一気に覚える必要はありません。
          1日2〜3文字でも十分です。
          続けることが一番大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          遊びながら学ぼう
        </h2>

        <p className="leading-8">
          カタカナ探しゲームやカード遊びなど、
          遊びの中で文字に触れると、
          自然と覚えられるようになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ドリルで復習
        </h2>

        <p className="leading-8">
          覚えた文字はドリルで確認すると定着しやすくなります。
          毎日少しずつ取り組むことが成功のコツです。
        </p>

        <div className="bg-green-100 rounded-xl p-6 mt-10">

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