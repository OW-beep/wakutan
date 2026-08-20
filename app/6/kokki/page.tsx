import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "6歳向けこっき（国旗）問題（地頭系）｜わくたん",
  description:
    "6歳向け無料こっき（国旗）ドリル。なかまはずれ探しに加えて、模様が似ている国旗を選ぶ問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/6/kokki",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.kokki,
    12
  );

  return (
    <main className="min-h-screen bg-sky-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "こっき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-sky-600">
            🚩 6歳向けこっき問題
          </h1>

          <p className="leading-8">
            なかまはずれ探しに加えて、
            1枚の国旗と同じ模様のパターンを3択から選ぶ、
            一歩進んだ観察問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-sky-700 font-bold">
            毎日12問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.kokki.length}問のストックから、日替わりで12問を選んでいます）</p>

        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>複数の選択肢を比較して判断する力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
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
            6歳向けは、1枚の国旗を見せて「同じ模様のものを3択から選ぶ」というマッチング問題が加わります。選択肢の中には模様の違う旗も混ざっているので、「たてじまかどうか」「よこじまかどうか」を一つずつ確認しながら選ぶ必要があります。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の選択肢を一つずつ比較して判断する力</li>
            <li>「見た目が似ている」と「模様が同じ」を区別する力</li>
            <li>選んだ理由を筋道立てて説明する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>選択肢を一つずつ指差ししながら「たてじま？よこじま？」と確認する</li>
            <li>間違えたときは、どの選択肢とどこを見比べたかを振り返る</li>
            <li>色は違っても模様が同じ旗があることに気づかせてあげる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            色の印象に引っ張られて、模様ではなく色が似ている旗を選んでしまうことがあります。「色じゃなくて、しまの向きを見てみようか」と声をかけ、模様という抽象的な特徴に注目する練習を重ねていくと、少しずつ選び間違いが減っていきます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            もう少しやさしい問題から始めたいときは
            <Link href="/5/kokki" className="text-sky-600 font-bold hover:underline">5歳向けこっき問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
