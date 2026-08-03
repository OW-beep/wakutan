import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けなかまはずれ問題｜わくたん",
  description:
    "6歳向け無料なかまはずれドリル。理由を考えながら仲間はずれを見つける問題を毎日更新。",
  alternates: {
    canonical: "/6/nakamahazure",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.nakamahazure,
    30
  );

  return (
    <main className="min-h-screen bg-rose-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "なかまはずれ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-rose-700">
            🔀 6歳向けなかまはずれ問題
          </h1>

          <p className="leading-8">
            4つのうち仲間ではない1つを見つけ、理由も考える問題です。抽象的な分類にも挑戦します。
          </p>

          <p className="leading-8 mt-3 text-rose-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.nakamahazure.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>論理的思考・抽象的な分類の力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-rose-700"
          accentButton="bg-indigo-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            正解だけでなく「なぜそう思ったのか」を説明してもらうと、より深い理解につながります。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の分類基準（見た目・用途・仲間など）を使い分ける力</li>
            <li>「なぜ仲間はずれなのか」を筋道立てて説明する力</li>
            <li>他の人の考え方を聞いて、自分の考えと比べる力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>正解した問題も「他にも理由はあるかな？」と別の視点を探してもらう</li>
            <li>家族でそれぞれ理由を発表し合い、考え方の違いを楽しむ</li>
            <li>間違えたときは、どの共通点を見落としていたか一緒に確認する</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            答えは合っていても、理由をうまく言葉にできないことがあります。これは「わかっている」ことと「説明できる」ことが別の力だからで、自然な発達の過程です。「まず何に気づいたの？」と、考えたプロセスを引き出す聞き方をしてあげましょう。
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
