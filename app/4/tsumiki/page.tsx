import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けつみき問題（空間認知）｜わくたん",
  description:
    "4歳向け無料つみき（積み木）問題。ならんだタワーの立方体をかぞえる空間認知ドリルを毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/tsumiki",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.tsumiki,
    30
  );

  return (
    <main className="min-h-screen bg-cyan-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "つみき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-cyan-700">
            🧊 4歳向けつみき問題
          </h1>

          <p className="leading-8">
            ならんだ つみきの タワーを 見て、ぜんぶで なんこ あるか かぞえる もんだいです。かくれて 見えない つみきは 出てこないので、見えたまま かぞえれば こたえが 出ます。
          </p>

          <p className="leading-8 mt-3 text-cyan-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.tsumiki.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>空間認知・かず</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5分</p>
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
            4歳のうちは、ななめから見た絵を立体として理解すること自体がまだ発展途中です。むずかしそうにしていたら、実際の積み木やブロックを使って、絵と同じ形を一緒に作ってみるのもおすすめです。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>平面の絵を見て、立体的な積み木の形をイメージする力</li>
            <li>1つずつ、数え忘れや重複なく数える力</li>
            <li>絵と実物（積み木）を結びつけて理解する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>実際の積み木やブロックで、絵と同じ高さのタワーを作ってみる</li>
            <li>数えるときは、数えたものに指で軽く触れながら進める</li>
            <li>1つのタワーを数え終えるごとに「ここまでで〇こ」と声に出す</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            平面の絵を見て「これは積み木が重なっている」と立体的に理解すること自体が、4歳児にはまだ難しい場合があります。絵だけで分かりにくいときは、無理に絵で理解させようとせず、実物の積み木を使って「絵の中のこれは、実際にはこう積んである」と対応させて見せてあげると理解が進みます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            数える力がついてきたら、
            <Link href="/5/tsumiki" className="text-cyan-700 font-bold hover:underline">5歳向けつみき問題</Link>
            に挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
