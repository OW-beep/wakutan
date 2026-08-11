import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "6歳向けすいり問題（地頭系）｜わくたん",
  description:
    "6歳向け無料すいりドリル。4人を比べて2番目を導くなど、一歩進んだ推理問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/6/suiri",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.suiri,
    20
  );

  return (
    <main className="min-h-screen bg-indigo-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "すいり問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-indigo-600">
            🔍 6歳向けすいり問題
          </h1>

          <p className="leading-8">
            3つ・4つのものを比べて順番を導く、
            一歩進んだ地頭系のすいり問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-indigo-700 font-bold">
            毎日20問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.suiri.length}問のストックから、日替わりで20問を選んでいます）</p>

        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>複数の手がかりを整理して答えを導く力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-indigo-600"
          accentButton="bg-indigo-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            6歳向けは、4人を比べて「2番目に背が高いのはだれ？」のように、手がかりの数が増えて一段階むずかしくなります。全部を一度に頭の中で処理するのは大人でも大変なので、紙に名前を書き出して線でつなぐなど、「見える化」しながら考える経験を大切にしてください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の手がかりを整理し、順序立てて答えを導く力</li>
            <li>頭の中だけでなく、書き出して考える習慣</li>
            <li>「1番目ではなく2番目を聞かれている」と条件を正確に読み取る力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>紙に名前を書き出して、条件を1つずつ線でつないでもらう</li>
            <li>「聞かれているのは何番目か」を指差しで確認してから答え合わせをする</li>
            <li>間違えたときは、どの条件を読み飛ばしたかを一緒に振り返る</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            手がかりが3つ以上になると、「いちばん」ではなく「2番目」を聞かれていることを見落としがちです。答え合わせのときは、まず「何を聞かれているか」を声に出して確認する習慣をつけると、読み間違いが減っていきます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            もう少しやさしい問題から始めたいときは
            <Link href="/5/suiri" className="text-indigo-600 font-bold hover:underline">5歳向けすいり問題</Link>
            にも挑戦してみましょう。
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
