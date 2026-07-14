import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けパターン問題｜わくたん",
  description:
    "5歳向け規則性ドリル。次にくる形や数を考える問題を毎日更新。",
  alternates: {
    canonical: "/5/pattern",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.pattern,
    20
  );

  return (
    <main className="min-h-screen bg-purple-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "パターン問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔷 5歳向けパターン問題
          </h1>

          <p className="leading-8">
            規則性を見つけたり、次にくる形や数を予測したりする問題です。パターン認識は算数的思考の土台になります。
          </p>

          <p className="leading-8 mt-3 text-purple-700 font-bold">
            500問以上収録・毎日更新・無料で印刷OK
          </p>

        </div>

        <div className="space-y-4">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow"
            >

              <div className="font-bold text-purple-700 mb-2">
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
            パターン問題は「発見する楽しさ」がポイントです。答えを教える前に、「次はどうなるかな？」と一緒に考える時間を作ってあげましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
