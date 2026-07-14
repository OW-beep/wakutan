import QuestionList from "../../components/QuestionList";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けパターン問題",
  description: "4歳向け規則性ドリル",
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.pattern,
    20
  );

  return (
    <main className="min-h-screen bg-purple-50">

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔷 4歳向けパターン問題
          </h1>

          <p className="leading-8">
            規則性を見つけたり、
            次にくる形や文字を考えたりする問題です。
            パターン認識は論理的思考の土台になります。
          </p>

          <p className="leading-8 mt-3 text-purple-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <QuestionList
          questions={questions}
          accentText="text-purple-700"
          accentButton="bg-purple-500"
        />

      </div>

    </main>
  );
}