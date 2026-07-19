import QuestionList from "../../components/QuestionList";
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
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>分類する力・整理して考える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-green-600"
          accentButton="bg-green-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            仲間分けの問題は、物事を分類して整理する力を育てます。間違えた分類も、その子なりの理由があることが多いので、「どうしてそう思ったの？」と聞いてみるのもおすすめです。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            物事を分類する力は、心理学で「カテゴリー化」と呼ばれ、情報を整理して考えるための基礎的な認知能力の一つとされています。間違えた分類も、その子なりの理由があることが多いので、理由を聞いてみるのもおすすめです。
          </p>

        </div>

      </div>

    </main>
  );
}