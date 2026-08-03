import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けくらべっこ問題｜わくたん",
  description:
    "4歳向け無料くらべっこドリル。大小・多い少ないを比べる問題を毎日更新。",
  alternates: {
    canonical: "/4/kurabekko",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.kurabekko,
    30
  );

  return (
    <main className="min-h-screen bg-teal-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "くらべっこ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-teal-700">
            ⚖️ 4歳向けくらべっこ問題
          </h1>

          <p className="leading-8">
            大きい・小さい、多い・少ないなど、ものを比べて考える問題です。数の感覚の土台になります。
          </p>

          <p className="leading-8 mt-3 text-teal-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.kurabekko.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>比べる力・数の感覚</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-teal-700"
          accentButton="bg-teal-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            くらべっこは、日常のさまざまな場面でも取り入れやすいテーマです。「どっちが多いかな？」と生活の中でも聞いてみましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>2つのものを見比べて、多い・少ない、大きい・小さいを判断する力</li>
            <li>見た目の印象だけでなく、実際に並べて確かめる習慣</li>
            <li>「同じ数」という感覚の芽生え</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>おやつを配るときに「どっちが多いかな？」と聞いてから配る</li>
            <li>兄弟姉妹やぬいぐるみと背比べをして、大きさを比べる</li>
            <li>コップに入れた水の量を見比べて、どちらが多いか話し合う</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            同じ数のおはじきでも、広く並べると多く見え、狭く並べると少なく見えることがあります。これは「量の保存」という概念がまだ発達の途中にあるためで、自然なことです。実際に1つずつ数えて確かめる経験を重ねることで、少しずつ感覚が育っていきます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            比べる力がついてきたら、
            <Link href="/5/kurabekko" className="text-teal-700 font-bold hover:underline">5歳向けくらべっこ問題</Link>
            で、3つを比べる問題にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
