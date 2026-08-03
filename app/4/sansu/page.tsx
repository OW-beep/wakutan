import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向け算数ドリル｜わくたん",
  description:
    "4歳向け無料算数ドリル。算数・論理・パターン認識・ひらがな・仲間分けなど毎日30問。無料・印刷OK。",
  alternates: {
    canonical: "/4/sansu",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.sansu,
    30
  );

  return (
    <main className="min-h-screen bg-yellow-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "算数ドリル" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-yellow-700">
            🔢 4歳向け算数ドリル
          </h1>

          <p className="leading-8">
            数を数える・数を比べる・簡単なたし算など、
            4歳向けの算数問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-yellow-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.sansu.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>数の感覚・計算力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-yellow-700"
          accentButton="bg-orange-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            数を数える経験や、簡単なたし算に触れることは、算数の土台となる「数の感覚」を育てます。正解できるかどうかより、指を使って数えたり、絵を見て考えたりする過程を大切にしてあげてください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>ものと数字を1つずつ対応させて数える「一対一対応」</li>
            <li>「1、2、3…」と正しい順番で数を唱える力</li>
            <li>2つのグループを見て、どちらが多い・少ないかを判断する力</li>
            <li>「あわせていくつ？」という、たし算の考え方の芽生え</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>おやつを配るときに「1つ、2つ…」と声に出しながら数える</li>
            <li>階段の上り下りで、1段ごとに数を数えてみる</li>
            <li>おもちゃを2つのグループに分けて、「どっちが多いかな？」と聞いてみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            10より大きい数になると、指だけでは数えきれずに混乱することがあります。そんなときは、おはじきやブロックなど、実際に手で動かせるものを使って数えてみると理解しやすくなります。また、同じ数でも並べ方によって「多く見える／少なく見える」と感じるのは、この時期の発達として自然なことです。焦らず、実際に1つずつ数えて確かめる経験を積み重ねていきましょう。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            数える力が安定してきたら、
            <Link href="/5/sansu" className="text-yellow-700 font-bold hover:underline">5歳向け算数ドリル</Link>
            では、たし算に加えてひきざんの練習も始まります。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}