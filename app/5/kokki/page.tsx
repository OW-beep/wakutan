import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "5歳向けこっき（国旗）問題（地頭系）｜わくたん",
  description:
    "5歳向け無料こっき（国旗）ドリル。色の数を数える問題に加えて、模様のパターンでなかまはずれを見つける問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/5/kokki",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.kokki,
    12
  );

  return (
    <main className="min-h-screen bg-sky-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "こっき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-sky-600">
            🚩 5歳向けこっき問題
          </h1>

          <p className="leading-8">
            色の数を数える問題に加えて、
            「たてじま・よこじま・まる・じゅうじ」など模様のパターンで
            なかまはずれを見つける問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-sky-700 font-bold">
            毎日12問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.kokki.length}問のストックから、日替わりで12問を選んでいます）</p>

        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>観察力・模様の特徴で分類する力</p>
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
            5歳向けは、色の数を数える問題に加えて「なかまはずれ探し」が加わります。4枚の国旗のうち3枚は同じ模様のパターン（たてじま・よこじま・まる・じゅうじ）で、1枚だけ違うものを見つける問題です。「なかまわけ」の考え方を、国旗という新しい題材で試す機会になります。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数のものを見比べて、共通点を見つける力</li>
            <li>「模様」という抽象的な特徴に注目する力</li>
            <li>理由を言葉で説明する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「どうしてこれが仲間はずれだと思う？」と理由を聞いてみる</li>
            <li>正解した後に「他にも同じ模様の旗があるかな？」と発展させる</li>
            <li>間違えても、まず「どこに注目したか」を聞いてから一緒に見直す</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            色の似ている旗同士を「同じ」と判断してしまい、模様のパターンではなく色だけで仲間はずれを探そうとすることがあります。「色じゃなくて、しま模様かどうかで見てみようか」と、注目するポイントを声に出して確認してあげると分かりやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            もっとやさしい問題から始めたいときは
            <Link href="/4/kokki" className="text-sky-600 font-bold hover:underline">4歳向けこっき問題</Link>
            、慣れてきたら
            <Link href="/6/kokki" className="text-sky-600 font-bold hover:underline">6歳向けこっき問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
