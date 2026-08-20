import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けこっき（国旗）問題（地頭系）｜わくたん",
  description:
    "4歳向け無料こっき（国旗）ドリル。色の数を数えて観察力を育てる問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/kokki",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.kokki,
    12
  );

  return (
    <main className="min-h-screen bg-sky-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "こっき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-sky-600">
            🚩 4歳向けこっき問題
          </h1>

          <p className="leading-8">
            世界の国旗を見て、色の数を数える問題です。
            国の名前を覚えるより、「よく見る」「数える」力を育てます。
          </p>

          <p className="leading-8 mt-3 text-sky-700 font-bold">
            毎日12問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.kokki.length}問のストックから、日替わりで12問を選んでいます）</p>

        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>観察力・色や数を正確に数える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-sky-600"
          accentButton="bg-sky-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            「こっき」ジャンルは、どこの国の旗かを覚えることが目的ではありません。色とりどりの国旗を題材に、「よく見て数える」「特徴に気づく」という観察力を育てることを目的にしています。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>色を正確に見分ける力</li>
            <li>数を正確に数える力</li>
            <li>いろいろな国の旗があることへの興味</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「何色使われてるかな？」と一緒に指差ししながら数える</li>
            <li>正解した後に「他にはどんな色の旗があるかな？」と広げてみる</li>
            <li>図鑑や地球儀と組み合わせて、国旗以外にも興味を広げる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            似た色が続くと数え間違えることがあります。「赤、赤、じゃなくて、赤は1回だけだね」というように、同じ色をまとめて数える感覚を一緒に確認してあげると、数え間違いが減っていきます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            こっき問題に慣れてきたら、
            <Link href="/5/kokki" className="text-sky-600 font-bold hover:underline">5歳向けこっき問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
