import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向け論理問題｜わくたん",
  description:
    "5歳向け無料論理ドリル。規則性やルールを考える問題を毎日更新。",
  alternates: {
    canonical: "/5/ronri",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.ronri,
    30
  );

  return (
    <main className="min-h-screen bg-blue-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "論理問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            🧠 5歳向け論理問題
          </h1>

          <p className="leading-8">
            順序やきまりを考える・仲間はずれを見つけるなど、考える力を育てる論理問題を毎日更新しています。
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
          accentText="text-blue-700"
          accentButton="bg-blue-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            5歳は「きまり」を理解する力が伸びる時期です。すぐに答えが出なくても、一緒に順番を声に出して確認するなど、考えるプロセスを楽しんでみましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>数の並び（1→3→5→7のような）の中にあるきまりを見つける力</li>
            <li>複数の要素が交互に並ぶパターンを理解する力</li>
            <li>「次はどうなりそう？」と、きまりから未来を予想する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>階段を上りながら「2、4、6…」と数のきまりを声に出してみる</li>
            <li>洗濯物を色や種類で交互に並べて、続きを予想してもらう</li>
            <li>間違えても正解を先に言わず、「もう一回きまりを見てみよう」と促す</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            数の並びの問題では、「1つ増える」「2つ増える」のように増え方そのものに注目する必要があります。並んでいる数字を指でなぞりながら「いくつ増えてるかな？」と一緒に確認すると、規則性に気づきやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            規則性を見つける力がついてきたら、
            <Link href="/6/ronri" className="text-blue-700 font-bold hover:underline">6歳向けろんり問題</Link>
            で、理由を説明する練習にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
