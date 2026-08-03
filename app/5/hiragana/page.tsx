import QuestionList from "../../components/QuestionList";
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
    30
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

          <h1 className="text-4xl font-bold mb-4 text-pink-600">
            🔤 5歳向けひらがな
          </h1>

          <p className="leading-8">
            ひらがなの読み・言葉の意味の理解を深める問題です。日常の言葉と結びつけながら学べます。
          </p>

          <p className="leading-8 mt-3 text-pink-600 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.hiragana.length}問のストックから、日替わりで30問を選んでいます）</p>

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
            5歳はひらがなの読み書きが伸びる時期です。焦らず、絵本や生活の中の文字にも一緒に注目してみましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>清音（あ・い・う・え・お、など）の読み書き</li>
            <li>自分の名前や、身近な単語を読んだり書いたりする力</li>
            <li>文字を音に変換して読む「デコーディング」の基礎</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>お手紙ごっこで、短い言葉を書いて渡し合う</li>
            <li>絵日記を書いて、今日あったことをひらがなで表現してみる</li>
            <li>単語カードを作って、読む練習をゲームのように楽しむ</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「わたしは」の「は」を「わ」と発音するなど、助詞の読み方でつまずく子は多くいます。また、「きゃ」「しゅ」のような拗音や、「がっこう」の「っ」のような促音は、音と文字の対応が複雑なため理解に時間がかかりやすいところです。焦らず、声に出しながら繰り返し練習することが大切です。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            読み書きに慣れてきたら、
            <Link href="/6/hiragana" className="text-pink-600 font-bold hover:underline">6歳向けひらがなドリル</Link>
            や
            <Link href="/5/moji" className="text-pink-600 font-bold hover:underline">もじの読み解き問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
