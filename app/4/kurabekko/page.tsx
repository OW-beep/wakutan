import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けくらべっこ問題｜わくたん",
  description:
    "4歳向け無料くらべっこドリル。大小・多い少ないを比べる問題を毎日更新。",
  alternates: {
    canonical: "/4/kurabekko",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.kurabekko,
    20
  );

  return (
    <main className="min-h-screen bg-teal-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "くらべっこ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            ⚖️ 4歳向けくらべっこ問題
          </h1>

          <p className="leading-8">
            大きい・小さい、多い・少ないなど、ものを比べて考える問題です。数の感覚の土台になります。
          </p>

          <p className="leading-8 mt-3 text-teal-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>比べる力・数の感覚</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-teal-700"
          accentButton="bg-teal-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            くらべっこは、日常のさまざまな場面でも取り入れやすいテーマです。「どっちが多いかな？」と生活の中でも聞いてみましょう。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            比べる力は、算数における「量の保存」や「順序」の理解につながる重要な力です。実際にものを並べて数えたり、手で触れて確かめたりする経験が、こうした感覚を育てる助けになります。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
