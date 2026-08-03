import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向け仲間分け問題｜わくたん",
  description:
    "6歳向け無料仲間分けドリル。分類する力を育てる問題を毎日更新。",
  alternates: {
    canonical: "/6/nakamawake",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.nakamawake,
    30
  );

  return (
    <main className="min-h-screen bg-green-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "仲間分け問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-green-600">
            📦 6歳向け仲間分け問題
          </h1>

          <p className="leading-8">
            仲間分けや分類を通して、物事を整理して考える力を育てる問題です。
          </p>

          <p className="leading-8 mt-3 text-green-600 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.nakamawake.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>分類する力・整理して考える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-green-600"
          accentButton="bg-green-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            仲間分けは日常生活の中でも実践しやすいテーマです。おもちゃの片付けや食材の分類など、生活と結びつけて楽しんでみましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の分類基準を比べて、最も適切なものを選ぶ力</li>
            <li>算数の「集合」（グループ分け）の考え方の土台</li>
            <li>「なぜその分け方にしたか」を筋道立てて説明する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>冷蔵庫の中身を「野菜」「飲み物」などに分けて整理してもらう</li>
            <li>同じものでも、違う基準（色・大きさ・用途）で分け直せることを一緒に試す</li>
            <li>分け方に迷ったときは「どんな基準で分けたか」を話し合う</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            1つのものが複数のグループに属しうる場合（例：トマトは野菜でもあり赤いものでもある）、どちらの基準を優先すべきか迷うことがあります。「今回は何を基準に分けているのか」を先に確認する習慣が、算数の集合の考え方にもつながっていきます。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
