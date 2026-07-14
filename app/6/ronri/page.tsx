import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向け論理問題｜わくたん",
  description:
    "6歳向け無料論理ドリル。規則性やルールを考える問題を毎日更新。",
  alternates: {
    canonical: "/6/ronri",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.ronri,
    20
  );

  return (
    <main className="min-h-screen bg-blue-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "論理問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🧠 6歳向け論理問題
          </h1>

          <p className="leading-8">
            順序やきまりを理解し、筋道を立てて考える論理問題です。小学校の学習にもつながる考え方を身につけます。
          </p>

          <p className="leading-8 mt-3 text-blue-700 font-bold">
            500問以上収録・毎日更新・無料で印刷OK
          </p>

        </div>

        <div className="space-y-4">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow"
            >

              <div className="font-bold text-blue-700 mb-2">
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
            6歳は理由を説明する力も伸びてきます。「どうしてそう思ったの？」と聞いてあげることで、考える力がさらに育ちます。
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
