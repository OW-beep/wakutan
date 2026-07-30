import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けもじの読み解き問題｜わくたん",
  description:
    "6歳向け無料文章読解ドリル。2段階の推論が必要な文章題を毎日更新。",
  alternates: {
    canonical: "/6/moji",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.moji,
    20
  );

  return (
    <main className="min-h-screen bg-indigo-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "もじの読み解き問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-indigo-700">
            📖 6歳向けもじの読み解き問題
          </h1>

          <p className="leading-8">
            短い文章を読んで、2段階の計算や推論が必要な問題です。小学校の文章題につながる読解力を育てます。
          </p>

          <p className="leading-8 mt-3 text-indigo-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>読解力・2段階の論理的思考</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
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
            2段階の計算は難しく感じることがあります。「まず何をする？」「次は？」と順番に整理してあげましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>文章から必要な数字と、たし算・ひきざんのどちらを使うかを読み取る力</li>
            <li>「もらう→たべる」のような、2つの出来事を順番どおりに計算する力</li>
            <li>文章題を最後まで読んでから答えを考える、落ち着いた読み方</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>問題文を声に出して読み、出てくる数字に丸をつけながら整理する</li>
            <li>「最初はいくつ？」「増えた？減った？」と、出来事の順番を一緒に確認する</li>
            <li>途中式（5+3=8、8-2=6など）を紙に書き出す習慣をつける</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            2段階の文章題では、1回目の計算結果を使わずに、問題文の数字をそのまま2回目の計算に使ってしまう間違いがよく見られます。「今、何こになった？」と一度立ち止まって確認する習慣をつけると、こうした間違いを防ぎやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            文章題に慣れてきたら、
            <Link href="/6/sansu" className="text-indigo-700 font-bold hover:underline">6歳向け算数ドリル</Link>
            で計算そのもののスピードや正確さも鍛えていきましょう。
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
