import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けくらべっこ問題｜わくたん",
  description:
    "6歳向け無料くらべっこドリル。数の差や単位の違いを考える問題を毎日更新。",
  alternates: {
    canonical: "/6/kurabekko",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.kurabekko,
    30
  );

  return (
    <main className="min-h-screen bg-teal-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "くらべっこ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-teal-700">
            ⚖️ 6歳向けくらべっこ問題
          </h1>

          <p className="leading-8">
            数の差を求めたり、cmやkgなど単位が異なるものを比べたりする問題です。小学校の算数につながる力を育てます。
          </p>

          <p className="leading-8 mt-3 text-teal-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.kurabekko.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>比べる力・単位の理解</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-teal-700"
          accentButton="bg-indigo-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            単位の変換（1m=100cmなど）が出てくる問題もあります。難しい場合は一緒に確認しながら進めましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>cmやmといった単位を使って、長さや量を比べる力</li>
            <li>数字だけでなく、実際の大きさや量を実感する力</li>
            <li>異なる単位（cmとm）の関係を理解する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>定規やメジャーを使って、身の回りのものの長さを一緒に測ってみる</li>
            <li>「1m=100cm」を、実際にメジャーを伸ばしながら確認する</li>
            <li>料理のときに、計量カップで水の量を比べてみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「1m30cmと125cm、どちらが長い？」のように、単位が混ざった比較は多くの子がつまずくポイントです。すべて同じ単位（cmならcm）にそろえてから比べる、という手順を、実際にメジャーを使いながら体験的に理解させてあげましょう。
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
