import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向け論理問題｜わくたん",
  description:
    "4歳向け無料論理ドリル。順番やきまりを考える問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/ronri",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.ronri,
    30
  );

  return (
    <main className="min-h-screen bg-blue-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "論理問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            🧠 4歳向け論理問題
          </h1>

          <p className="leading-8">
            仲間はずれ・分類・比較など、
            考える力を育てる論理問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-blue-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.ronri.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>論理的思考・順序立てて考える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-blue-600"
          accentButton="bg-blue-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            順番やきまりを考える問題は、論理的に考える力の土台になります。すぐに答えが浮かばなくても、一緒に声に出して確認しながら、考える過程を楽しんでみてください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「あか・あお・あか・あお」のような、繰り返しのきまりに気づく力</li>
            <li>「あさ・ひる・よる」のような、順番を理解する力</li>
            <li>次に何が来るかを、声に出しながら予想する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>おもちゃやブロックを色ごとに繰り返し並べて、続きを予想してもらう</li>
            <li>1日の流れ（朝ごはん→着替え→出発など）を一緒に声に出して確認する</li>
            <li>絵本の中の繰り返しのフレーズを一緒に声に出して読む</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            きまりが2つ以上のパターンで組み合わさると、どこで区切ればいいか分からなくなることがあります。指で1つずつ区切りながら「あか、あお、あか、あお、つぎは？」と声に出すと、きまりが見えやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            きまりを見つける力がついてきたら、
            <Link href="/5/ronri" className="text-blue-600 font-bold hover:underline">5歳向けろんり問題</Link>
            に挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}