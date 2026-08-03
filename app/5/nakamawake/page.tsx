import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向け仲間分け問題｜わくたん",
  description:
    "5歳向け無料仲間分けドリル。分類する力を育てる問題を毎日更新。",
  alternates: {
    canonical: "/5/nakamawake",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.nakamawake,
    30
  );

  return (
    <main className="min-h-screen bg-green-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "仲間分け問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-green-600">
            📦 5歳向け仲間分け問題
          </h1>

          <p className="leading-8">
            同じグループのものを見つけたり、仲間ごとに分類したりする力を育てる問題です。
          </p>

          <p className="leading-8 mt-3 text-green-600 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.nakamawake.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>分類する力・整理して考える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-green-600"
          accentButton="bg-green-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            仲間分けの問題は、身の回りのもので実践するとより理解が深まります。お買い物や片付けの際に「これは何の仲間かな？」と聞いてみるのもおすすめです。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「水にうかぶもの」「空をとぶもの」のような、少し抽象的な基準での分類</li>
            <li>複数の候補の中から、共通する特徴を見つける力</li>
            <li>分類の理由を、簡単な言葉で説明する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>スーパーで買い物をしながら「これは何コーナーの仲間？」とクイズを出す</li>
            <li>おもちゃ箱の中身を、「動くもの」「音が出るもの」など基準を決めて分類する</li>
            <li>間違えたときは「どうしてそう思った？」と理由をまず聞いてみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「魚は水の中の生き物だけど、泳ぐから乗り物じゃない」のように、複数の特徴を持つものの分類は混乱しやすいポイントです。「今回はどの特徴に注目して分けるのか」を先に確認してから取り組むと、迷いにくくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            分類する力がついてきたら、
            <Link href="/6/nakamawake" className="text-green-600 font-bold hover:underline">6歳向けなかまわけ問題</Link>
            に挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
