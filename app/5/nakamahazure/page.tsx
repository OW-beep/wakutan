import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けなかまはずれ問題｜わくたん",
  description:
    "5歳向け無料なかまはずれドリル。少しまぎらわしい選択肢から仲間はずれを見つける問題を毎日更新。",
  alternates: {
    canonical: "/5/nakamahazure",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.nakamahazure,
    20
  );

  return (
    <main className="min-h-screen bg-rose-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "なかまはずれ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔀 5歳向けなかまはずれ問題
          </h1>

          <p className="leading-8">
            4つのうち仲間ではない1つを見つける問題です。5歳向けは少しまぎらわしい選択肢を含みます。
          </p>

          <p className="leading-8 mt-3 text-rose-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>観察力・分類する力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-rose-700"
          accentButton="bg-rose-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            まぎらわしい問題も出てきますが、間違えても「どうしてそう思ったの？」と一緒に考える時間を大切にしましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
