import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向け仲間分け問題｜わくたん",
  description:
    "5歳向け無料仲間分けドリル。分類する力を育てる問題を毎日更新。",
  alternates: {
    canonical: "/5/nakamawake",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.nakamawake,
    20
  );

  return (
    <main className="min-h-screen bg-green-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "仲間分け問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            📦 5歳向け仲間分け問題
          </h1>

          <p className="leading-8">
            同じグループのものを見つけたり、仲間ごとに分類したりする力を育てる問題です。
          </p>

          <p className="leading-8 mt-3 text-green-600 font-bold">
            500問以上収録・毎日更新・無料で印刷OK
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
            仲間分けの問題は、身の回りのもので実践するとより理解が深まります。お買い物や片付けの際に「これは何の仲間かな？」と聞いてみるのもおすすめです。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
