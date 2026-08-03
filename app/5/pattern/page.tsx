import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けパターン問題｜わくたん",
  description:
    "5歳向け規則性ドリル。次にくる形や数を考える問題を毎日更新。",
  alternates: {
    canonical: "/5/pattern",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.pattern,
    30
  );

  return (
    <main className="min-h-screen bg-purple-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "パターン問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-purple-700">
            🔷 5歳向けパターン問題
          </h1>

          <p className="leading-8">
            規則性を見つけたり、次にくる形や数を予測したりする問題です。パターン認識は算数的思考の土台になります。
          </p>

          <p className="leading-8 mt-3 text-purple-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.pattern.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>規則性を見つける力・観察力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-purple-700"
          accentButton="bg-purple-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            パターン問題は「発見する楽しさ」がポイントです。答えを教える前に、「次はどうなるかな？」と一緒に考える時間を作ってあげましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>3つ以上の要素からなる、少し複雑な繰り返しに気づく力</li>
            <li>形や大きさが少しずつ変化していく規則性を見つける力</li>
            <li>見つけたきまりを使って、次に来るものを予測する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>積み木を「大・中・小、大・中・小」のように並べて続きを考えてもらう</li>
            <li>折り紙を使って、色の並び方のパターンを一緒に作ってみる</li>
            <li>正解を急がず、「どこが繰り返しになってるかな？」とヒントを出す</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            繰り返しの単位が3つ以上になると、どこからどこまでが1つのまとまりか見失いやすくなります。声に出しながら指で区切ってグループ分けすると、繰り返しの単位が視覚的にわかりやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            規則性を見つける力がついてきたら、
            <Link href="/6/pattern" className="text-purple-700 font-bold hover:underline">6歳向けパターン問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
