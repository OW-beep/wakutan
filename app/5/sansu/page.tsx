import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向け算数ドリル｜わくたん",
  description:
    "5歳向け無料算数ドリル。たし算の基礎や数の理解を毎日10問。無料で印刷OK。",
  alternates: {
    canonical: "/5/sansu",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.sansu,
    20
  );

  return (
    <main className="min-h-screen bg-yellow-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "算数ドリル" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔢 5歳向け算数ドリル
          </h1>

          <p className="leading-8">
            数を数える・比べる・たし算の基礎など、
            5歳向けの算数問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-yellow-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="space-y-4">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow"
            >

              <div className="font-bold text-yellow-700 mb-2">
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
            5歳は数の概念がぐっと広がる時期です。
            指を使って数えたり、身の回りのものを数えたりしながら、
            楽しく取り組んでみましょう。
            たし算はまだ完璧にできなくても大丈夫。
            「考えようとする姿勢」を大切にほめてあげてください。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
