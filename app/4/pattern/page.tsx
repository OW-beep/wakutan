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

      </div>

    </main>
  );
}