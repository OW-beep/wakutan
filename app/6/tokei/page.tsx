import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けとけいの問題｜わくたん",
  description:
    "6歳向け無料時計ドリル。なんじ・なんじはん・分の読み方を毎日更新。",
  alternates: {
    canonical: "/6/tokei",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.tokei,
    30
  );

  return (
    <main className="min-h-screen bg-amber-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "とけいの問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-amber-700">
            🕐 6歳向けとけいの問題
          </h1>

          <p className="leading-8">
            時計の読み方や、時間の経過を考える問題です。小学校入学前に身につけておきたい力の一つです。
          </p>

          <p className="leading-8 mt-3 text-amber-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.tokei.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>時計を読む力・時間の感覚</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-amber-700"
          accentButton="bg-indigo-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            おうちの時計を見ながら一緒に確認すると、より理解が深まります。デジタル時計と見比べるのもおすすめです。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>「〇時」「〇時30分」のような、区切りのよい時刻を読む力</li>
            <li>長い針・短い針がそれぞれ何を表しているかの理解</li>
            <li>「〇時から20分後」のような、時間の経過を考える力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>朝の支度のときに「今は何時？」と実際の時計を読んでもらう</li>
            <li>「あと何分でごはんだよ」のように、生活の中で時間を意識させる</li>
            <li>アナログ時計とデジタル時計を並べて、同じ時刻を見比べる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            時計の理解は、数字の読み方だけでなく「12進法」と「60進法」という2つの数え方が混ざる、幼児期にはやや複雑な学習内容です。特に「長い針が6のときは30分」のように、目盛りの数字と実際の分数が一致しない点でつまずきやすいので、おうちの時計を指しながら「ここが6だけど、30分だよ」と具体的に確認してあげましょう。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            時計に慣れてきたら、
            <Link href="/6/sansu" className="text-amber-700 font-bold hover:underline">算数ドリル</Link>
            で時間の計算にもつなげてみましょう。
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
