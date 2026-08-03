import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けおかね問題｜わくたん",
  description:
    "5歳向け無料おかねドリル。お買い物のたし算・おつりの計算問題を毎日更新。",
  alternates: {
    canonical: "/5/okane",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.okane,
    30
  );

  return (
    <main className="min-h-screen bg-lime-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "おかね問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-lime-700">
            💰 5歳向けおかね問題
          </h1>

          <p className="leading-8">
            お買い物を想定した、たし算やおつりの問題です。生活に結びついた実践的な数の力を育てます。
          </p>

          <p className="leading-8 mt-3 text-lime-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.okane.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>たし算・ひき算の応用力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
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
            お買い物ごっこと組み合わせると、より実感を持って取り組めます。実際のお菓子の値段を見ながら計算してみるのもおすすめです。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の硬貨をあわせて、合計金額を計算する力</li>
            <li>「1こ〇円のものを2こ買うといくら？」という、かけ算につながる考え方</li>
            <li>お金という具体物を通して、たし算・ひきざんを実感する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>実際のお菓子のパッケージに書かれた値段を見て、合計を計算してみる</li>
            <li>おもちゃのお金で、お店屋さんごっこをして支払いの練習をする</li>
            <li>お小遣いを渡すときに、硬貨の組み合わせを一緒に確認する</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「100円玉は10円玉の10倍」のような、硬貨どうしの関係を理解するのはこの時期にはまだ難しいことがあります。無理に暗記させようとせず、実際に10円玉を10枚並べて100円玉と見比べるなど、目で見て確かめる経験を重視してあげてください。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            合計金額の計算に慣れてきたら、
            <Link href="/6/okane" className="text-lime-700 font-bold hover:underline">6歳向けおかね問題</Link>
            では、おつりの計算にも挑戦します。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-lime-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
