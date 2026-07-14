import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けひらがな｜わくたん",
  description:
    "5歳向け無料ひらがな練習。言葉の仲間分けを通して読み書きの力を育てます。",
  alternates: {
    canonical: "/5/hiragana",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.hiragana,
    20
  );

  return (
    <main className="min-h-screen bg-pink-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "ひらがな" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4">
            🔤 5歳向けひらがな
          </h1>

          <p className="leading-8">
            ひらがなの読み・言葉の意味の理解を深める問題です。日常の言葉と結びつけながら学べます。
          </p>

          <p className="leading-8 mt-3 text-pink-600 font-bold">
            500問以上収録・毎日更新・無料で印刷OK
          </p>

        </div>

        <div className="space-y-4">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow"
            >

              <div className="font-bold text-pink-600 mb-2">
                問題 {index + 1}
              </div>

              <div className="text-lg">
                {q.question}
              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            5歳はひらがなの読み書きが伸びる時期です。焦らず、絵本や生活の中の文字にも一緒に注目してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
