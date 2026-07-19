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

        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>言葉の理解・読み書きへの興味</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-pink-600"
          accentButton="bg-pink-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            ひらがなへの興味は、子どもによって芽生えるタイミングが大きく異なります。読めなくても焦らず、絵本や身の回りの文字に触れる機会を増やしてあげましょう。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            文字の読み書きは、音と文字を結びつける「音韻認識」という力の発達と関わりが深いとされています。読めない・書けない時期があっても、それは発達の途中段階であることがほとんどです。
          </p>

        </div>

      </div>

    </main>
  );
}