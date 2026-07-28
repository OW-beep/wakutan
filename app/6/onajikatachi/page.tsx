import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けおなじかたち問題（点図形の模写）｜わくたん",
  description:
    "6歳向け無料おなじかたち問題。点をせんでむすんだ図形を見て、同じ形をかきうつす模写ドリルを毎日更新。小学校入学準備にも。無料で印刷OK。",
  alternates: {
    canonical: "/6/onajikatachi",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.onajikatachi,
    10
  );

  return (
    <main className="min-h-screen bg-violet-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "おなじかたち問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-violet-700">
            ✏️ 6歳向けおなじかたち問題
          </h1>

          <p className="leading-8">
            てんを せんで むすんだ かたちを 見て、となりの グリッドに おなじ かたちを かきうつす もんだいです。16マス四方（5×5のてん）で、3つの年齢の中でいちばん複雑な形にちょうせんします。
          </p>

          <p className="leading-8 mt-3 text-violet-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>空間認知・手先の動き</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-violet-700"
          accentButton="bg-violet-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            線の数が多くなるほど、どこから書き始めるかを自分で考える力も必要になります。焦らず、1本ずつ「次はどの点とどの点をつなぐか」を確認しながら進める習慣が、正確に模写する力につながります。
          </p>

          <p className="leading-8 mt-3 text-sm text-gray-600">
            16マス四方（5×5のてん）を使っています。小学校入学後の図形問題にもつながる基礎練習です。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-violet-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
