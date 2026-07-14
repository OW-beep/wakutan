import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向け仲間分け問題",
  description: "4歳向け無料仲間分けドリル",
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.nakamawake,
    20
  );

  return (
    <main className="min-h-screen bg-green-50">

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            📦 4歳向け仲間分け問題
          </h1>

          <p className="leading-8">
            同じグループを見つけたり、仲間ごとに分類する力を育てる問題です。
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

      </div>

    </main>
  );
}