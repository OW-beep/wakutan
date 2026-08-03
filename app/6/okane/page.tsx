import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けおかね問題｜わくたん",
  description:
    "6歳向け無料おかねドリル。おつりの計算や金額の比較問題を毎日更新。",
  alternates: {
    canonical: "/6/okane",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.okane,
    30
  );

  return (
    <main className="min-h-screen bg-lime-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "おかね問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-lime-700">
            💰 6歳向けおかね問題
          </h1>

          <p className="leading-8">
            おつりの計算や、複数の硬貨・お札を組み合わせた金額の問題です。小学校の算数にもつながる実践的な力を育てます。
          </p>

          <p className="leading-8 mt-3 text-lime-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.okane.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>ひき算の応用・実生活での計算力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-lime-700"
          accentButton="bg-lime-600"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            お金の学習は「生きた算数」です。実際にお買い物のときにおつりを一緒に確認してみると、ドリルで学んだ力を実感しやすくなります。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「支払った金額－ねだん＝おつり」という、ひき算の実践的な使い方</li>
            <li>複数の硬貨・お札を組み合わせて、合計金額を素早く計算する力</li>
            <li>日常生活の中で算数がどう使われているかを実感する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>実際のお買い物で「おつりはいくらになるかな？」と先に予想してもらう</li>
            <li>レシートを見ながら、合計金額の計算があっているか確認してみる</li>
            <li>お小遣い帳をつけて、もらったお金と使ったお金を記録する習慣をつける</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            おつりの計算は「支払った金額からねだんを引く」という、ひきざんの中でも一段階抽象的な考え方が必要です。「500円出して380円のものを買ったら、おつりはいくら？」のような問題でつまずく場合は、まず「500-380」の筆算・暗算そのものを別途練習してから、お金の文脈に戻すと理解しやすくなります。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-lime-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
