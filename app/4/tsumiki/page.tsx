import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けつみき問題（空間認知）｜わくたん",
  description:
    "4歳向け無料つみき（積み木）問題。ならんだタワーの立方体をかぞえる空間認知ドリルを毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/tsumiki",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.tsumiki,
    20
  );

  return (
    <main className="min-h-screen bg-cyan-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "つみき問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-cyan-700">
            🧊 4歳向けつみき問題
          </h1>

          <p className="leading-8">
            ならんだ つみきの タワーを 見て、ぜんぶで なんこ あるか かぞえる もんだいです。かくれて 見えない つみきは 出てこないので、見えたまま かぞえれば こたえが 出ます。
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
            4歳のうちは、ななめから見た絵を立体として理解すること自体がまだ発展途中です。むずかしそうにしていたら、実際の積み木やブロックを使って、絵と同じ形を一緒に作ってみるのもおすすめです。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            1れつにならんだタワーだけを使っているので、見えている数がそのまま答えになります。指でひとつずつ数える練習にもなります。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
