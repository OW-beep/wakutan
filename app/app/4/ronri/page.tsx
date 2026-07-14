import QuestionList from "../../components/QuestionList";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向け論理問題",
  description: "4歳向け無料論理ドリル",
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.ronri,
    20
  );

  return (
    <main className="min-h-screen bg-blue-50">

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🧠 4歳向け論理問題
          </h1>

          <p className="leading-8">
            仲間はずれ・分類・比較など、
            考える力を育てる論理問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-blue-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <QuestionList
          questions={questions}
          accentText="text-blue-600"
          accentButton="bg-blue-500"
        />

      </div>

    </main>
  );
}