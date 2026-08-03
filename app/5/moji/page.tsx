import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けもじの読み解き問題｜わくたん",
  description:
    "5歳向け無料文章読解ドリル。短い文章を読んで答える問題を毎日更新。",
  alternates: {
    canonical: "/5/moji",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.moji,
    30
  );

  return (
    <main className="min-h-screen bg-indigo-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "もじの読み解き問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-indigo-700">
            📖 5歳向けもじの読み解き問題
          </h1>

          <p className="leading-8">
            短い文章を読んで、内容を理解しながら答える問題です。読む力と考える力を同時に育てます。
          </p>

          <p className="leading-8 mt-3 text-indigo-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.moji.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>読解力・文章から情報を読み取る力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-indigo-700"
          accentButton="bg-indigo-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            文章が読めなくても、読み聞かせながら一緒に考えれば大丈夫です。「文章のどこに書いてあるかな？」と一緒に探してみましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>短い文章を読んで、「だれが」「なにをした」を読み取る力</li>
            <li>文章から得た情報をもとに、質問に答える力</li>
            <li>場面をイメージしながら文章を理解する想像力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>絵本を読んだあとに「さっきの話、だれが出てきたっけ？」と聞いてみる</li>
            <li>文章の中の答えの部分を指でさし示す練習をする</li>
            <li>読み終わったら「どんな気持ちだったと思う？」と想像を広げる質問をする</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            文字は読めても、文章全体の意味を理解するのはまた別の力です。一文字ずつ読むことに必死で、内容が頭に入ってこないことはよくあります。急がず、1文ずつ「今、何がわかった？」と確認しながら読み進めると、理解が定着しやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            読み解く力がついてきたら、
            <Link href="/6/moji" className="text-indigo-700 font-bold hover:underline">6歳向けもじの読み解き問題</Link>
            で、もう少し長い文章にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
