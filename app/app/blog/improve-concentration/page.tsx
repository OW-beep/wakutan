import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "幼児の集中力を伸ばす方法｜家庭で今日からできるコツ",
  description:
    "幼児の集中力は遊びや生活の工夫で育てられます。4〜6歳向けに家庭でできる集中力アップの方法を紹介します。",
  alternates: {
    canonical: "/blog/improve-concentration",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "幼児の集中力を伸ばす方法" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          幼児の集中力を伸ばす方法｜家庭で今日からできるコツ
        </h1>

        <p className="leading-8 mb-6">
          「すぐに飽きてしまう」
          「最後まで続かない」
          と悩む保護者は多いでしょう。
          幼児の集中力は、生まれつきではなく日々の生活や遊びの中で少しずつ育っていきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          集中できる時間は短くて当たり前
        </h2>

        <p className="leading-8">
          4〜6歳の子どもは長時間集中することが難しい時期です。
          まずは5〜10分程度取り組めれば十分と考えましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          遊びながら学ぶ
        </h2>

        <p className="leading-8">
          ドリルだけではなく、
          パズル・迷路・間違い探し・点つなぎなど、
          楽しい遊びを取り入れることで自然に集中する時間が増えます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          「できた！」をたくさん作る
        </h2>

        <p className="leading-8">
          難しすぎる問題は途中でやる気を失ってしまいます。
          少し頑張れば解ける問題を選び、
          成功体験を積み重ねることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日同じ時間に取り組む
        </h2>

        <p className="leading-8">
          朝食後や夕食前など、
          毎日決まった時間に学習すると習慣になりやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          たくさん褒めよう
        </h2>

        <p className="leading-8">
          結果だけではなく、
          「最後まで頑張ったね」
          「昨日より早くできたね」
          と努力を褒めることで、
          学ぶことが好きになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          無理をさせないことも大切
        </h2>

        <p className="leading-8">
          疲れている日は短時間で終わっても問題ありません。
          毎日少しずつ続けることが、集中力を育てる近道です。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料知育ドリル
          </h2>

          <p className="mb-4">
            わくたんでは、
            算数・論理・ひらがな・図形など、
            毎日10問の無料ドリルを公開しています。
            短時間で楽しく取り組める内容なので、
            学習習慣づくりにもおすすめです。
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