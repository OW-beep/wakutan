import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "パズル遊びの効果｜考える力・集中力・空間認識力が育つ",
  description:
    "パズル遊びは考える力や集中力、空間認識力を育てる人気の知育遊びです。4〜6歳向けにパズルの効果や遊び方を紹介します。",
  alternates: {
    canonical: "/blog/puzzle-benefits",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "パズル遊びの効果" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          パズル遊びの効果｜考える力・集中力・空間認識力が育つ
        </h1>

        <p className="leading-8 mb-6">
          パズル遊びは、子どもが楽しみながら考える力を育てられる人気の知育遊びです。
          ピースを組み合わせる過程で、集中力や空間認識力など、さまざまな力が身につきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          考える力が育つ
        </h2>

        <p className="leading-8">
          「どこにはまるかな？」
          「向きを変えてみよう。」
          と試行錯誤することで、
          自分で考えて解決する力が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          集中力が身につく
        </h2>

        <p className="leading-8">
          完成を目指して取り組むことで、
          一つのことに集中する習慣が身につきます。
          少しずつ難しいパズルにも挑戦できるようになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          空間認識力が伸びる
        </h2>

        <p className="leading-8">
          ピースの形や向きを考えることで、
          物の位置や形をイメージする力が育ちます。
          この力は図形や算数の学習にも役立ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          あきらめない力が身につく
        </h2>

        <p className="leading-8">
          最初はうまくできなくても、
          何度も挑戦して完成させる経験は、
          粘り強く取り組む力につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          年齢に合った難しさを選ぼう
        </h2>

        <p className="leading-8">
          簡単すぎても難しすぎても飽きてしまいます。
          少し頑張れば完成できるレベルを選ぶことで、
          楽しく続けられます。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            パズルだけでなく、算数・論理・ひらがな・パターン認識など、
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