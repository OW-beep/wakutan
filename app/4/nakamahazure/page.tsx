import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けなかまはずれ問題｜わくたん",
  description:
    "4歳向け無料なかまはずれドリル。4つの中から仲間はずれを見つける問題を毎日更新。",
  alternates: {
    canonical: "/4/nakamahazure",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.nakamahazure,
    20
  );

  return (
    <main className="min-h-screen bg-rose-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "なかまはずれ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-rose-700">
            🔀 4歳向けなかまはずれ問題
          </h1>

          <p className="leading-8">
            4つのものの中から、仲間ではない1つを見つける問題です。観察力・分類する力を育てます。
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
            なかまわけと似ていますが、こちらは「ちがうもの」を見つける問題です。理由も一緒に確認してあげましょう。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            仲間はずれを見つける力は、複数の情報を同時に比較して判断する「実行機能」という力とも関わりがあるとされています。すぐに正解が出なくても、選択肢を一つずつ確認していく過程が力になります。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
