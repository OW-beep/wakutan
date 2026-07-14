import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向け仲間分け問題｜わくたん",
  description:
    "6歳向け無料仲間分けドリル。分類する力を育てる問題を毎日更新。",
  alternates: {
    canonical: "/6/nakamawake",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.nakamawake,
    20
  );

  return (
    <main className="min-h-screen bg-green-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "仲間分け問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            📦 6歳向け仲間分け問題
          </h1>

          <p className="leading-8">
            仲間分けや分類を通して、物事を整理して考える力を育てる問題です。
          </p>

          <p className="leading-8 mt-3 text-green-600 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="space-y-4">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow"
            >

              <div className="font-bold text-green-600 mb-2">
                問題 {index + 1}
              </div>

              <div className="text-lg">
                {q.question}
              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            仲間分けは日常生活の中でも実践しやすいテーマです。おもちゃの片付けや食材の分類など、生活と結びつけて楽しんでみましょう。
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
