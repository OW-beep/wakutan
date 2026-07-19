import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けパターン問題｜わくたん",
  description:
    "4歳向け規則性ドリル。繰り返しのパターンを考える問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/pattern",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.pattern,
    20
  );

  return (
    <main className="min-h-screen bg-purple-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "パターン問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-purple-700">
            🔷 4歳向けパターン問題
          </h1>

          <p className="leading-8">
            規則性を見つけたり、
            次にくる形や文字を考えたりする問題です。
            パターン認識は論理的思考の土台になります。
          </p>

          <p className="leading-8 mt-3 text-purple-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>規則性を見つける力・観察力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-purple-700"
          accentButton="bg-purple-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            繰り返しのパターンを見つける問題は、規則性に気づく力を育てます。「次はどうなるかな？」と一緒に予想しながら取り組むと、より楽しく学べます。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            繰り返しのパターンに気づく力は、予測する力や論理的に考える力の基礎になるといわれています。答えを急がせず、「次はどうなりそう?」と一緒に考える過程を楽しんでみてください。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}