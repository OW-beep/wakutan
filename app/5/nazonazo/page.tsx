import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けなぞなぞ問題｜わくたん",
  description:
    "5歳向け無料なぞなぞドリル。2〜3つのヒントを組み合わせて答えを考える問題を毎日更新。",
  alternates: {
    canonical: "/5/nazonazo",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.nazonazo,
    20
  );

  return (
    <main className="min-h-screen bg-fuchsia-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "なぞなぞ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-fuchsia-700">
            🧩 5歳向けなぞなぞ問題
          </h1>

          <p className="leading-8">
            2〜3つのヒントを組み合わせて、こたえを考えるなぞなぞです。複数の情報を整理して考える力を育てます。
          </p>

          <p className="leading-8 mt-3 text-fuchsia-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-fuchsia-50 border border-fuchsia-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>推理する力・情報を整理する力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-fuchsia-700"
          accentButton="bg-fuchsia-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            ヒントが2つ以上になると、一度に覚えるのが難しいこともあります。「さいしょのヒントは覚えてるかな？」と振り返りながら進めるのもおすすめです。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数のヒントを頭の中に保ちながら考える記憶力</li>
            <li>ヒントどうしを組み合わせて、1つの答えを絞りこむ推論力</li>
            <li>間違えても、別の可能性を考え直す柔軟さ</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>ヒントを1つずつ紙に書き出して、目で見て整理できるようにする</li>
            <li>「さいしょのヒントは何だったっけ？」と振り返る質問をはさむ</li>
            <li>親子で交互になぞなぞを出し合い、ヒントの出し方も工夫してみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            ヒントが2つ以上あると、後半のヒントに気を取られて最初のヒントを忘れてしまうことがあります。すべてのヒントを一度に処理しようとせず、1つずつ「これはどんな意味かな？」と確認しながら進めると、混乱しにくくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            推理する力がついてきたら、
            <Link href="/6/nazonazo" className="text-fuchsia-700 font-bold hover:underline">6歳向けなぞなぞ問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
