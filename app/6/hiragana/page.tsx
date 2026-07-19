import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けひらがな｜わくたん",
  description:
    "6歳向け無料ひらがな練習。言葉の理解を深め読み書きの力を育てます。",
  alternates: {
    canonical: "/6/hiragana",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.hiragana,
    20
  );

  return (
    <main className="min-h-screen bg-pink-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "ひらがな" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔤 6歳向けひらがな
          </h1>

          <p className="leading-8">
            ひらがなの読み書きや言葉の意味の理解を深める問題です。小学校の国語学習への橋渡しになります。
          </p>

          <p className="leading-8 mt-3 text-pink-600 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>言葉の理解・読み書きへの興味</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-pink-600"
          accentButton="bg-pink-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            6歳は読み書きへの自信がつく時期です。間違いを指摘しすぎず、「読めたね」「書けたね」と成功体験を積み重ねましょう。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            文字の読み書きは、音と文字を結びつける「音韻認識」という力の発達と関わりが深いとされています。読めない・書けない時期があっても、それは発達の途中段階であることがほとんどです。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
