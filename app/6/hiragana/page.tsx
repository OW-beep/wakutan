import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向けひらがな｜わくたん",
  description:
    "6歳向け無料ひらがな練習。言葉の理解を深め読み書きの力を育てます。",
  alternates: {
    canonical: "/6/hiragana",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.hiragana,
    20
  );

  return (
    <main className="min-h-screen bg-pink-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "ひらがな" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-pink-600">
            🔤 6歳向けひらがな
          </h1>

          <p className="leading-8">
            ひらがなの読み書きや言葉の意味の理解を深める問題です。小学校の国語学習への橋渡しになります。
          </p>

          <p className="leading-8 mt-3 text-pink-600 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>言葉の理解・読み書きへの興味</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
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
            6歳は読み書きへの自信がつく時期です。間違いを指摘しすぎず、「読めたね」「書けたね」と成功体験を積み重ねましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>拗音・促音・長音を含む、より複雑な言葉の読み書き</li>
            <li>短い文章を、意味のまとまりを意識しながら読む力</li>
            <li>簡単な作文（日記や手紙）で自分の考えを書く力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>毎日短い日記をつけて、書く習慣を作る</li>
            <li>音読の練習に付き合い、つっかえずに読めた部分をほめる</li>
            <li>家族への手紙やメモを書いてもらい、実際に使う楽しさを味わう</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「わたしは学校へ行く」のように、助詞の「は」「を」「へ」の使い分けは、小学校入学後もつまずきやすいポイントです。また、句読点（「、」「。」）をどこに打つかも、最初はなかなか身につきません。読み聞かせのときに句読点で少し間を取って読んで見せると、感覚がつかみやすくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            読み書きが安定してきたら、
            <Link href="/6/moji" className="text-pink-600 font-bold hover:underline">もじの読み解き問題</Link>
            で文章を読んで答える力にも挑戦してみましょう。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/6"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 6歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
