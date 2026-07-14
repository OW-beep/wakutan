import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ひらがなは何歳から？無理なく始めるタイミングを解説",
  description:
    "ひらがなは何歳から始めればいいのでしょうか。4〜6歳の発達に合わせた練習方法や家庭でできる教え方を紹介します。",
  alternates: {
    canonical: "/blog/when-start-hiragana",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "ひらがなは何歳から？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          ひらがなは何歳から？無理なく始めるタイミングを解説
        </h1>

        <p className="leading-8 mb-6">
          「ひらがなの練習は何歳から始めればいいの？」
          と悩む保護者は多くいます。
          実は決まった年齢はありませんが、
          子どもの興味や発達に合わせて始めることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          4歳頃は文字に親しむ時期
        </h2>

        <p className="leading-8">
          4歳頃は、文字を読んだり自分の名前を見つけたりすることに
          興味を持ち始めます。
          この時期は無理に書かせるより、
          絵本や看板などで文字に触れることがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          5歳頃から書く練習を始める子が増える
        </h2>

        <p className="leading-8">
          鉛筆を持つ力が育ち、
          線を書くことにも慣れてきます。
          なぞり書きや短い言葉を書く練習から始めると、
          楽しく続けやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          6歳頃は小学校入学の準備
        </h2>

        <p className="leading-8">
          小学校入学前には、
          自分の名前を書いたり、
          簡単なひらがなが読めたり書けたりすると安心です。
          ただし、個人差があるため焦る必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          楽しく続けることが一番大切
        </h2>

        <p className="leading-8">
          「勉強」と考えるより、
          遊びの延長として取り組むことが長続きします。
          1日5〜10分程度でも十分な効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          無理に教えなくても大丈夫
        </h2>

        <p className="leading-8">
          子どもによって興味を持つ時期は違います。
          「できない」よりも「できた！」を増やすことで、
          学ぶことが好きになります。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ひらがなドリル
          </h2>

          <p className="mb-4">
            わくたんでは4〜6歳向けに、
            毎日10問の無料知育ドリルを公開しています。
            ひらがな・算数・論理・図形などを楽しく学べます。
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