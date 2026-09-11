import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import ShindanWizard from "./ShindanWizard";

export const metadata: Metadata = {
  title: "わくたん習い事診断｜4〜6歳向け 無料・習い事選びサポート",
  description:
    "4〜6歳のお子さんに合いそうな習い事を、目的・興味・性格・家庭の条件から無料で診断します。人気ランキングではなく、今どんな経験をさせるとよさそうかを親子で考えるための診断ツールです。",
  alternates: {
    canonical: "/narai-shindan",
  },
};

export default function NaraiShindanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 pb-20">
      <section className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumb items={[{ name: "わくたん習い事診断" }]} />
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-10">
        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-10 shadow-lg text-center">
          <div className="text-6xl mb-4">🧭</div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-700 mb-4">
            わくたん習い事診断
          </h1>

          <p className="text-lg leading-8">
            何を習わせるかの前に、何を大切にしたいか考えてみよう。
          </p>

          <p className="mt-4 text-gray-700 leading-7">
            「人気の習い事ランキング」ではありません。
            お子さんの「好き・得意」とご家庭の「こうなってほしい」を整理して、
            今の体験が小学生・中学生まで、どんな経験につながる可能性があるのかを
            一緒に考えるための無料診断ツールです。
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-10">
        <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-white rounded-2xl shadow p-5">
            <p className="text-2xl mb-2">⏱️</p>
            <p className="font-bold">所要時間 約3分</p>
            <p className="text-gray-500 mt-1">6つの質問に答えるだけ</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <p className="text-2xl mb-2">🆓</p>
            <p className="font-bold">診断・結果は無料</p>
            <p className="text-gray-500 mt-1">TOP3と理由まで見られます</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <p className="text-2xl mb-2">🔒</p>
            <p className="font-bold">登録不要</p>
            <p className="text-gray-500 mt-1">その場で結果が見られます</p>
          </div>
        </div>
      </section>

      <ShindanWizard />

      <section className="max-w-3xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-3xl shadow p-8 text-sm text-gray-600 leading-7">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            この診断について
          </h2>
          <p className="mb-3">
            この診断は、特定の習い事や教室をおすすめしたり、
            将来の成果を保証したりするものではありません。
            お子さんに合いそうな経験の方向性を考えるための、あくまで参考情報です。
          </p>
          <p>
            研究に関する記述がある場合も、「関連が報告されている」
            「〜につながる可能性がある」といった表現にとどめ、
            断定的な効果を示すものではないことをご了承ください。
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-6 text-center">
        <Link href="/blog/narai-shindan-guide" className="text-orange-700 font-semibold hover:underline">
          📖 習い事選びで大切にしたい考え方の記事を読む →
        </Link>
      </section>
    </main>
  );
}
