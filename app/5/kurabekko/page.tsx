import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けくらべっこ問題｜わくたん",
  description:
    "5歳向け無料くらべっこドリル。3つの比較や数の差を考える問題を毎日更新。",
  alternates: {
    canonical: "/5/kurabekko",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.kurabekko,
    20
  );

  return (
    <main className="min-h-screen bg-teal-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "くらべっこ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-teal-700">
            ⚖️ 5歳向けくらべっこ問題
          </h1>

          <p className="leading-8">
            3つのものを比べたり、数の差を考えたりする問題です。算数の土台となる比較の力を育てます。
          </p>

          <p className="leading-8 mt-3 text-teal-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>比べる力・数の差の理解</p>
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
            3つを比べる問題は少し難しく感じるかもしれません。1つずつ順番に比べていく方法を一緒に確認してあげましょう。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            比べる力は、算数における「量の保存」や「順序」の理解につながる重要な力です。実際にものを並べて数えたり、手で触れて確かめたりする経験が、こうした感覚を育てる助けになります。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
