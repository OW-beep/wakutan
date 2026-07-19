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

          <p className="leading-8 mt-3 text-sm text-gray-600">
            文章を読んで理解する力は、语彙力だけでなく、状況をイメージする想像力とも関わっています。文章を読み聞かせながら、「ここで何が起きているかな?」と一緒に確認してあげると、理解が深まりやすくなります。
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
