import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けおなじかたち問題（点図形の模写）｜わくたん",
  description:
    "5歳向け無料おなじかたち問題。点をせんでむすんだ図形を見て、同じ形をかきうつす模写ドリルを毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/5/onajikatachi",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.onajikatachi,
    30
  );

  return (
    <main className="min-h-screen bg-violet-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "おなじかたち問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-violet-700">
            ✏️ 5歳向けおなじかたち問題
          </h1>

          <p className="leading-8">
            てんを せんで むすんだ かたちを 見て、となりの グリッドに おなじ かたちを かきうつす もんだいです。9マス四方（4×4のてん）で、4歳のときより すこし ふくざつな かたちに なります。
          </p>

          <p className="leading-8 mt-3 text-violet-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.onajikatachi.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>空間認知・手先の動き</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-violet-700"
          accentButton="bg-violet-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            点図形の模写は、小学校受験の分野でもよく使われる、図形をよく見て正確に再現する力を育てる練習です。まちがえたときは「どの点とどの点がつながっていたかな？」と、見本をもう一度いっしょに確認してあげてください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数の線からなる図形全体を、バランスよく捉える力</li>
            <li>お手本と自分が書いたものを見比べて、違いに気づく力</li>
            <li>どこから書き始めるか、自分なりに順序を考える力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>書き始める前に「まず外側の形から書こうか」と方針を一緒に決める</li>
            <li>書き終わったら、お手本と並べて「同じ形になったかな？」と見比べる</li>
            <li>間違えた線は消しゴムで直すより、もう一度全体を書き直す練習も取り入れる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            9マス四方（4×4のてん）になると線の数も増え、どこから書き始めればよいか迷いやすくなります。はしっこ（角）から順番に書き進めると、途中で迷子になりにくくなります。一気に完成させようとせず、1本ずつ確実に書く習慣をつけましょう。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            模写に慣れてきたら、
            <Link href="/6/onajikatachi" className="text-violet-700 font-bold hover:underline">6歳向けおなじかたち問題</Link>
            で、さらに複雑な形にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-violet-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
