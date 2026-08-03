import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "4歳向けなかまはずれ問題｜わくたん",
  description:
    "4歳向け無料なかまはずれドリル。4つの中から仲間はずれを見つける問題を毎日更新。",
  alternates: {
    canonical: "/4/nakamahazure",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.nakamahazure,
    30
  );

  return (
    <main className="min-h-screen bg-rose-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "なかまはずれ問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-rose-700">
            🔀 4歳向けなかまはずれ問題
          </h1>

          <p className="leading-8">
            4つのものの中から、仲間ではない1つを見つける問題です。観察力・分類する力を育てます。
          </p>

          <p className="leading-8 mt-3 text-rose-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.nakamahazure.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>観察力・分類する力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-rose-700"
          accentButton="bg-rose-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            なかまわけと似ていますが、こちらは「ちがうもの」を見つける問題です。理由も一緒に確認してあげましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数のものを見比べて、仲間はずれの1つを見つける観察力</li>
            <li>「みんな動物だけど、これだけ鳥じゃない」のような共通点への気づき</li>
            <li>正解・不正解にかかわらず、理由を考えようとする姿勢</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>おもちゃを4つ並べて、「1つだけ違うのはどれ？」とクイズを出す</li>
            <li>間違えても正解を先に言わず、「どうしてそう思ったの？」と聞いてみる</li>
            <li>答え合わせのときに「みんなは何の仲間だったかな？」と振り返る</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            大人が想定した「正解」とは違う理由で選んでしまうことがよくあります（例：色が違うから選んだ、など）。それも観察している証拠なので、頭ごなしに否定せず、「そういう見方もあるね、他にはどんな共通点があるかな？」と別の視点も一緒に探してあげましょう。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            見つける力がついてきたら、
            <Link href="/5/nakamahazure" className="text-rose-700 font-bold hover:underline">5歳向けなかまはずれ問題</Link>
            に挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
