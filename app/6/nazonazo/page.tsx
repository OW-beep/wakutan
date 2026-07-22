import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けなぞなぞ問題｜わくたん",
  description:
    "6歳向け無料なぞなぞドリル。3つ以上のヒントから推理して答えを導く問題を毎日更新。",
  alternates: {
    canonical: "/6/nazonazo",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.nazonazo,
    20
  );

  return (
    <main className="min-h-screen bg-fuchsia-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "なぞなぞ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-fuchsia-700">
            🧩 6歳向けなぞなぞ問題
          </h1>

          <p className="leading-8">
            3つ以上のヒントを組み合わせて答えを導く、少し高度ななぞなぞです。小学校の国語や理科にもつながる「特徴をとらえる力」を育てます。
          </p>

          <p className="leading-8 mt-3 text-fuchsia-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-fuchsia-50 border border-fuchsia-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>論理的推理・特徴をとらえる力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-fuchsia-700"
          accentButton="bg-fuchsia-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            複数のヒントを整理して1つの答えにたどり着く経験は、文章題や理科の学習にもつながります。正解よりも、どのヒントに注目したかを聞いてあげるのもおすすめです。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            なぞなぞは、複数の手がかりを頭の中で組み合わせて1つの答えにたどり着く「推論する力」を育てます。すぐに答えが浮かばなくても、ヒントを1つずつ確認しながら一緒に考えてみてください。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
