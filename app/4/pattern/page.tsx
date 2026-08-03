import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けパターン問題｜わくたん",
  description:
    "4歳向け規則性ドリル。繰り返しのパターンを考える問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/pattern",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.pattern,
    30
  );

  return (
    <main className="min-h-screen bg-purple-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "パターン問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-purple-700">
            🔷 4歳向けパターン問題
          </h1>

          <p className="leading-8">
            規則性を見つけたり、
            次にくる形や文字を考えたりする問題です。
            パターン認識は論理的思考の土台になります。
          </p>

          <p className="leading-8 mt-3 text-purple-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.pattern.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>規則性を見つける力・観察力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-purple-700"
          accentButton="bg-purple-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            繰り返しのパターンを見つける問題は、規則性に気づく力を育てます。「次はどうなるかな？」と一緒に予想しながら取り組むと、より楽しく学べます。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>色や形、大きさのちがいを見分ける観察力</li>
            <li>「あか・あお・あか・あお」のような、目で見てわかる繰り返しに気づく力</li>
            <li>並んでいるものをよく見て、次を予想する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>おはじきやブロックを色違いで交互に並べて、続きを予想してもらう</li>
            <li>洋服や食器の柄の中にある繰り返しの模様を一緒に探す</li>
            <li>お散歩中に、街路樹やタイルの並び方に注目してみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            色や形が2種類以上混ざると、どこが繰り返しの区切りか分からなくなることがあります。指で1つずつ指しながら「あか、あお、あか、あお」と声に出して確認すると、繰り返しのまとまりが見えやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            パターンを見つける力がついてきたら、
            <Link href="/5/pattern" className="text-purple-700 font-bold hover:underline">5歳向けパターン問題</Link>
            に挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}