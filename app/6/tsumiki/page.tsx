import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けつみき問題（空間認知）｜わくたん",
  description:
    "6歳向け無料つみき（積み木）問題。ならんだタワーの立方体をかぞえる空間認知ドリルを毎日更新。小学校入学準備にも。無料で印刷OK。",
  alternates: {
    canonical: "/6/tsumiki",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.tsumiki,
    30
  );

  return (
    <main className="min-h-screen bg-cyan-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "つみき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-cyan-700">
            🧊 6歳向けつみき問題
          </h1>

          <p className="leading-8">
            ならんだ つみきの タワーを 見て、ぜんぶで なんこ あるか かぞえる もんだいです。タワーの数が 4つに ふえて、これまでより 見わたす力が 必要になります。
          </p>

          <p className="leading-8 mt-3 text-cyan-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.tsumiki.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>空間認知・かず</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-cyan-700"
          accentButton="bg-cyan-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            立体を頭の中でイメージして数える力は、小学校の図形の学習の土台になります。1つずつ数えて答えを出すだけでなく、慣れてきたら「一番高いタワーはどれ？」のように聞いてみるのもおすすめです。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>タワーが4つに増えても、正確に見わたして数える力</li>
            <li>高さの違うタワーを見比べて、大小関係を把握する力</li>
            <li>数えた結果を暗算で素早く合計する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>実際の積み木で同じ形を再現し、正解と見比べて確認する</li>
            <li>「全部でいくつ？」だけでなく「一番高いのと一番低いの、差はいくつ？」も聞いてみる</li>
            <li>数え終わったら、指を使わずに暗算で合計するチャレンジをしてみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            タワーの数が多くなると、1つ数え忘れたり二重に数えたりするミスが増えます。見る順番を「左から右へ」など自分の中で決めておく習慣をつけると、ミスが減っていきます。このサイトのつみき問題は、かくれて見えない積み木が出てこないタイプなので、見えているものを正確に数える練習として取り組めます。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
