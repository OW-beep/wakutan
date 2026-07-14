import QuestionList from "../../components/QuestionList";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けひらがなドリル",
  description: "4歳向け無料ひらがな練習",
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.hiragana,
    20
  );

  return (
    <main className="min-h-screen bg-pink-50">

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔤 4歳向けひらがな
          </h1>

          <p className="leading-8">
            ひらがなの読み・形の認識・言葉の理解を育てる問題です。
          </p>

          <p className="leading-8 mt-3 text-pink-600 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <QuestionList
          questions={questions}
          accentText="text-pink-600"
          accentButton="bg-pink-500"
        />

      </div>

    </main>
  );
}