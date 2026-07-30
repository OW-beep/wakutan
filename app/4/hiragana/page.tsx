import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けひらがな｜わくたん",
  description:
    "4歳向け無料ひらがな練習。絵を見て正しい言葉を選ぶ、読みの力を育てる問題です。無料で印刷OK。",
  alternates: {
    canonical: "/4/hiragana",
  },
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

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "ひらがな" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-pink-600">
            🔤 4歳向けひらがな
          </h1>

          <p className="leading-8">
            絵を見て、正しい言葉を選ぶ問題です。ひらがなを読む力を育てます。
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

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>言葉が「音のかたまり」でできていると気づく「音韻認識」の芽生え</li>
            <li>自分の名前など、身近な文字への関心</li>
            <li>文字の形と、その文字が表す音を少しずつ結びつける力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>しりとりで、言葉の最初と最後の「音」に注目する練習をする</li>
            <li>自分の名前の文字を指さしながら、一緒に読んでみる</li>
            <li>絵本の読み聞かせのとき、ときどき文字を指でなぞりながら読む</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「あ」と「お」、「ぬ」と「め」のように、形が似ている文字を混同するのはこの時期によくあることです。また、文字を左右反転させて書く「鏡文字」も、発達の途中でよく見られる自然な現象なので、厳しく直そうとせず、気長に見守ってあげてください。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            音への気づきが育ってきたら、
            <Link href="/5/hiragana" className="text-pink-600 font-bold hover:underline">5歳向けひらがなドリル</Link>
            で読み書きそのものに挑戦していきます。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}