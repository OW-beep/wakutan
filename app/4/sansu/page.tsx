import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向け算数ドリル",
  description: "4歳向け無料算数ドリル",
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.sansu,
    20
  );

  return (
    <main className="min-h-screen bg-yellow-50">

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔢 4歳向け算数ドリル
          </h1>

          <p className="leading-8">
            数を数える・数を比べる・簡単なたし算など、
            4歳向けの算数問題を毎日更新しています。
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

      </div>

    </main>
  );
}