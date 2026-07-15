import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "迷路遊びの効果｜集中力・考える力が育つ理由",
  description:
    "迷路遊びは集中力や考える力、運筆力を育てる遊びです。4〜6歳向けに迷路遊びの効果や楽しみ方を紹介します。",
  alternates: {
    canonical: "/blog/maze-benefits",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "迷路遊びの効果" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          迷路遊びの効果｜集中力・考える力が育つ理由
        </h1>

        <p className="leading-8 mb-6">
          迷路遊びは、子どもが楽しみながら学べる人気の知育遊びです。
          ゴールまでの道を探すだけでなく、
          集中力や考える力、運筆力も育てられます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          集中力が身につく
        </h2>

        <p className="leading-8">
          ゴールまでの道を探すためには、
          最後まであきらめずに考える必要があります。
          自然と集中して取り組む習慣が身につきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          考える力が育つ
        </h2>

        <p className="leading-8">
          「行き止まりかな？」
          「別の道に行ってみよう。」
          と試行錯誤することで、
          論理的に考える力が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          運筆練習にもなる
        </h2>

        <p className="leading-8">
          鉛筆を使って線をたどることで、
          手先のコントロールも上達します。
          文字を書く準備としてもおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          難しすぎない問題を選ぼう
        </h2>

        <p className="leading-8">
          難しすぎる迷路は途中で飽きてしまいます。
          年齢に合った問題を選び、
          「できた！」という達成感を大切にしましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつ続けよう
        </h2>

        <p className="leading-8">
          1日5〜10分でも十分です。
          継続することで集中力や考える力が少しずつ育っていきます。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            迷路だけでなく、
            算数・論理・ひらがな・パターン認識など毎日10問を無料で楽しめます。
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