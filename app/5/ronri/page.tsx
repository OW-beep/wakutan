import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向け論理問題｜わくたん",
  description:
    "5歳向け無料論理ドリル。規則性やルールを考える問題を毎日更新。",
  alternates: {
    canonical: "/5/ronri",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.ronri,
    20
  );

  return (
    <main className="min-h-screen bg-blue-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "論理問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🧠 5歳向け論理問題
          </h1>

          <p className="leading-8">
            順序やきまりを考える・仲間はずれを見つけるなど、考える力を育てる論理問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-blue-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <QuestionList
          questions={questions}
          accentText="text-blue-700"
          accentButton="bg-blue-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            5歳は「きまり」を理解する力が伸びる時期です。すぐに答えが出なくても、一緒に順番を声に出して確認するなど、考えるプロセスを楽しんでみましょう。
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
