import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向けつみき問題（空間認知）｜わくたん",
  description:
    "5歳向け無料つみき（積み木）問題。ならんだタワーの立方体をかぞえる空間認知ドリルを毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/5/tsumiki",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.tsumiki,
    20
  );

  return (
    <main className="min-h-screen bg-cyan-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "つみき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-cyan-700">
            🧊 5歳向けつみき問題
          </h1>

          <p className="leading-8">
            ならんだ つみきの タワーを 見て、ぜんぶで なんこ あるか かぞえる もんだいです。4歳のときより タワーの数が ふえて、少し かぞえごたえが あります。
          </p>

          <p className="leading-8 mt-3 text-cyan-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>空間認知・かず</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-cyan-700"
          accentButton="bg-cyan-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            ななめから見た絵を頭の中で立体としてイメージする力は、算数の図形問題にもつながっていきます。数えまちがえたときは、どのタワーを数え忘れたか一緒に確認してあげてください。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            1れつにならんだタワーだけを使っているので、かくれて見えないつみきは出てきません。見えている数を、指でひとつずつ確認しながら数える習慣を大切にしてください。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
