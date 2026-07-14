import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "点つなぎ遊びの効果｜集中力・数字・運筆力が育つ",
  description:
    "点つなぎ遊びは数字を覚えながら集中力や運筆力を育てられる知育遊びです。4〜6歳向けに効果や遊び方を紹介します。",
  alternates: {
    canonical: "/blog/dot-to-dot-benefits",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "点つなぎ遊びの効果" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          点つなぎ遊びの効果｜集中力・数字・運筆力が育つ
        </h1>

        <p className="leading-8 mb-6">
          点つなぎは、数字を順番につないで絵を完成させる人気の知育遊びです。
          遊びながら数字への興味が育ち、集中力や鉛筆を動かす力も自然と身につきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          数字を楽しく覚えられる
        </h2>

        <p className="leading-8">
          「1、2、3…」と順番を確認しながら進めるため、
          数字の並びを無理なく覚えられます。
          数字が苦手なお子さんでも、遊び感覚で取り組めます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          集中力が育つ
        </h2>

        <p className="leading-8">
          ゴールまで一つずつ点をつないでいくため、
          最後まで集中して取り組む力が身につきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          運筆力アップにつながる
        </h2>

        <p className="leading-8">
          点から点へまっすぐ線を引くことで、
          鉛筆をコントロールする力が育ちます。
          文字を書く準備にもぴったりです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          達成感が自信になる
        </h2>

        <p className="leading-8">
          最後に絵が完成すると、
          「できた！」という達成感を味わえます。
          小さな成功体験を積み重ねることで、
          学習への意欲も高まります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつ楽しもう
        </h2>

        <p className="leading-8">
          1日5〜10分程度でも十分です。
          毎日続けることで、数字や運筆への自信が少しずつ育っていきます。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            わくたんでは、数字・ひらがな・論理・パターン認識など、
            毎日10問の無料ドリルを公開しています。
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