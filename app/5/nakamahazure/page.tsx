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
    30
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

          <h1 className="text-4xl font-bold mb-4 text-rose-700">
            🔀 5歳向けなかまはずれ問題
          </h1>

          <p className="leading-8">
            4つのうち仲間ではない1つを見つける問題です。5歳向けは少しまぎらわしい選択肢を含みます。
          </p>

          <p className="leading-8 mt-3 text-rose-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.nakamahazure.length}問のストックから、日替わりで30問を選んでいます）</p>

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

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の選択肢を同時に見比べながら判断する力</li>
            <li>1つの基準にとらわれず、いろいろな共通点に気づく力</li>
            <li>選んだ理由を、自分の言葉で伝えようとする力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「季節」「曜日」など、目に見えない仲間分けにもチャレンジしてみる</li>
            <li>選択肢を1つずつ指さしながら「これは仲間、これは違う」と確認する</li>
            <li>正解した問題でも「どうしてわかったの？」と理由を聞いてみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            選択肢すべてを一度に比べようとして混乱することがあります。「まず1つ目と2つ目を比べる」「次に3つ目を確認する」というように、順番に1つずつ見ていく方法を教えてあげると、落ち着いて取り組めるようになります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            観察して考える力がついてきたら、
            <Link href="/6/nakamahazure" className="text-rose-700 font-bold hover:underline">6歳向けなかまはずれ問題</Link>
            に挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
