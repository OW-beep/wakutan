import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運筆練習はいつから？4〜6歳向けの始め方",
  description:
    "4〜6歳向けに運筆練習の始め方を紹介。鉛筆の持ち方や線を書く練習を楽しく進めるコツを解説します。",
  alternates: {
    canonical: "/blog/unpitsu-practice",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "運筆練習はいつから？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          運筆練習はいつから？4〜6歳向けの始め方
        </h1>

        <p className="leading-8 mb-6">
          運筆とは、鉛筆を思い通りに動かす力を育てる練習です。
          文字を書く前の大切な土台となるため、幼児期から少しずつ取り組むのがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          運筆とは？
        </h2>

        <p className="leading-8">
          線をまっすぐ引いたり、
          曲線を書いたり、
          点と点を結んだりする活動です。
          手や指の力を育てる効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          4歳は線を書く練習
        </h2>

        <p className="leading-8">
          まっすぐな線、
          ジグザグ、
          波線など、
          簡単な線を書く遊びから始めましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          5歳は曲線や迷路
        </h2>

        <p className="leading-8">
          迷路や点つなぎなど、
          少し複雑な線を書く遊びがおすすめです。
          集中力も育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          6歳は文字につなげよう
        </h2>

        <p className="leading-8">
          運筆が安定してきたら、
          ひらがなを書く練習へ進みます。
          無理をせず、
          少しずつ進めることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日5分で十分
        </h2>

        <p className="leading-8">
          長時間続けるより、
          毎日5分程度の積み重ねが効果的です。
          「今日はここまで」と楽しく終えることが継続のポイントです。
        </p>

        <div className="bg-orange-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            運筆やひらがな、算数などを毎日10問ずつ楽しく学べます。
          </p>

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