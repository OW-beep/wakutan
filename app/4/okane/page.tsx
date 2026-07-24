import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けおかね問題｜わくたん",
  description:
    "4歳向け無料おかねドリル。硬貨を数える問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/okane",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.okane,
    20
  );

  return (
    <main className="min-h-screen bg-lime-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "おかね問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-lime-700">
            💰 4歳向けおかね問題
          </h1>

          <p className="leading-8">
            1円・5円・10円などの硬貨を数える問題です。数の感覚とあわせて、お金への興味を育てます。
          </p>

          <p className="leading-8 mt-3 text-lime-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>数の感覚・お金への興味</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-lime-700"
          accentButton="bg-lime-600"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            4歳のうちは、正確な計算よりも「硬貨には種類がある」「数を合わせると増える」という感覚を育てることを大切にしています。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            お金の学習は、実際の硬貨やお買い物ごっこと組み合わせると理解が深まりやすいテーマです。可能であれば、本物の硬貨を並べながら一緒に数えてみるのもおすすめです。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-lime-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
