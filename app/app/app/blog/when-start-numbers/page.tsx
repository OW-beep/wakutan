import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "数字は何歳から覚える？年齢別の教え方を解説",
  description:
    "数字は何歳から覚え始めるのでしょうか。4〜6歳向けに数字の覚え方や家庭でできる練習方法を紹介します。",
  alternates: {
    canonical: "/blog/when-start-numbers",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "数字は何歳から？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          数字は何歳から覚える？年齢別の教え方を解説
        </h1>

        <p className="leading-8 mb-6">
          「数字は何歳から教えればいい？」
          「数えられるけど読めない…」
          と悩む保護者は少なくありません。
          数字は遊びの中で自然に覚えていくのが理想です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          4歳頃は数える遊びがおすすめ
        </h2>

        <p className="leading-8">
          おもちゃやお菓子を数えたり、
          階段を数えたりする遊びを通して、
          数字に親しみましょう。
          「1・2・3」と声に出すだけでも十分です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          5歳頃は数字を書く練習も
        </h2>

        <p className="leading-8">
          鉛筆に慣れてきたら、
          なぞり書きや簡単な数字を書く練習を始めるとよいでしょう。
          書ける数字が少しずつ増えていきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          6歳頃は計算の土台づくり
        </h2>

        <p className="leading-8">
          数字の読み書きだけでなく、
          「どちらが多い？」
          「あと1つで10になる」
          といった数の感覚を育てることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつ続けよう
        </h2>

        <p className="leading-8">
          1日5〜10分でも十分です。
          継続することで数字への苦手意識がなくなり、
          算数への自信につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          焦らず子どものペースで
        </h2>

        <p className="leading-8">
          数字を覚える時期には個人差があります。
          他の子と比べず、
          「今日は1つ覚えられたね」と成長を認めることが大切です。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料数字ドリル
          </h2>

          <p className="mb-4">
            わくたんでは、
            算数・ひらがな・論理・図形など、
            毎日10問の無料知育ドリルを公開しています。
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