import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けなぞなぞ問題｜わくたん",
  description:
    "4歳向け無料なぞなぞドリル。ヒントから答えを考える問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/nazonazo",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.nazonazo,
    30
  );

  return (
    <main className="min-h-screen bg-fuchsia-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "なぞなぞ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-fuchsia-700">
            🧩 4歳向けなぞなぞ問題
          </h1>

          <p className="leading-8">
            1〜2つのヒントから、こたえを考えるなぞなぞです。想像する力や、ヒントを結びつけて考える力を育てます。
          </p>

          <p className="leading-8 mt-3 text-fuchsia-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.nazonazo.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-fuchsia-50 border border-fuchsia-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>推理する力・想像力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-fuchsia-700"
          accentButton="bg-fuchsia-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            4歳のなぞなぞは、身近などうぶつや食べ物など、答えやすいテーマを中心にしています。正解できなくても「もう一つヒントを出すね」と、考える過程を一緒に楽しんでください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>言葉の意味やイメージを頭の中で思い浮かべる力</li>
            <li>ヒントから答えを予想する、簡単な推論の芽生え</li>
            <li>答えが合っていても間違っていても、考えること自体を楽しむ気持ち</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>お出かけ中や車の中など、すきま時間に口頭でなぞなぞを出し合う</li>
            <li>子どもが作ったオリジナルなぞなぞにも付き合ってあげる</li>
            <li>正解を急がせず、「どうしてそう思ったの？」と考えを聞いてみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            なぞなぞは、言葉の意味を知っていても、それを問題文の中から思い出すのに時間がかかることがあります。すぐに答えが出なくても、「もう一つヒントを出すね」と気長に付き合ってあげると、考える楽しさが育ちます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            考える力がついてきたら、
            <Link href="/5/nazonazo" className="text-fuchsia-700 font-bold hover:underline">5歳向けなぞなぞ問題</Link>
            で、ヒントが2つ以上ある少し難しい問題にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
