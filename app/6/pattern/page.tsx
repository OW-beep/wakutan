import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けパターン問題｜わくたん",
  description:
    "6歳向け規則性ドリル。次にくる形や数を考える問題を毎日更新。",
  alternates: {
    canonical: "/6/pattern",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.pattern,
    30
  );

  return (
    <main className="min-h-screen bg-purple-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "パターン問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-purple-700">
            🔷 6歳向けパターン問題
          </h1>

          <p className="leading-8">
            規則性を見つけて次を予測する問題です。算数の規則性理解や思考力の基礎を育てます。
          </p>

          <p className="leading-8 mt-3 text-purple-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.pattern.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>規則性を見つける力・観察力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
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
            パターン問題に慣れてきたら、「自分でも問題を作ってみる」のもおすすめです。理解がより深まります。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>図形が回転・反転しながら変化していく規則性を見抜く力</li>
            <li>複数のきまりが組み合わさったパターンを整理して考える力</li>
            <li>自分で規則を作り、他の人に説明する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>子どもに簡単なパターン問題を作ってもらい、大人が答える役をやってみる</li>
            <li>折り紙や積み木で、自分だけのオリジナルパターンを作ってもらう</li>
            <li>正解した理由を「どこに注目したの？」と言葉で説明してもらう</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            図形が回転したり形が変わったりするパターンは、頭の中でイメージする力が必要で、大人が思う以上に難しく感じることがあります。実際に紙を回転させて見せるなど、目で見て確かめられる形でサポートしてあげると理解が進みます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            規則性を見抜く力をさらに伸ばしたい場合は、
            <Link href="/6/onajikatachi" className="text-purple-700 font-bold hover:underline">おなじかたち問題</Link>
            もおすすめです。
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
