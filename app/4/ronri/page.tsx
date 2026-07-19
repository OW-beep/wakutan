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

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>論理的思考・順序立てて考える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-blue-600"
          accentButton="bg-blue-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            順番やきまりを考える問題は、論理的に考える力の土台になります。すぐに答えが浮かばなくても、一緒に声に出して確認しながら、考える過程を楽しんでみてください。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            規則性を見つける力は、心理学でいう「パターン認識」の一種で、算数だけでなく読み書きなど幅広い学習の土台になるとされています。すぐに答えが浮かばなくても、声に出して規則を確認する時間を大切にしてください。
          </p>

        </div>

      </div>

    </main>
  );
}