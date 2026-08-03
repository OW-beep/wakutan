import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "5歳向け算数ドリル｜わくたん",
  description:
    "5歳向け無料算数ドリル。たし算の基礎や数の理解を毎日30問。無料で印刷OK。",
  alternates: {
    canonical: "/5/sansu",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.sansu,
    30
  );

  return (
    <main className="min-h-screen bg-yellow-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "算数ドリル" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-yellow-700">
            🔢 5歳向け算数ドリル
          </h1>

          <p className="leading-8">
            数を数える・比べる・たし算の基礎など、
            5歳向けの算数問題を毎日更新しています。
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
            5歳は数の概念がぐっと広がる時期です。
            指を使って数えたり、身の回りのものを数えたりしながら、
            楽しく取り組んでみましょう。
            たし算はまだ完璧にできなくても大丈夫。
            「考えようとする姿勢」を大切にほめてあげてください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>20くらいまでの数を、実感をともなって数えられる力</li>
            <li>「あわせていくつ？」というたし算の考え方</li>
            <li>「のこりはいくつ？」というひきざんの考え方（このサイトでは5歳から登場します）</li>
            <li>頭の中だけでなく、指や絵を使いながら答えを確かめる習慣</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>おやつを「3こ食べたら、のこりは何こ？」とひきざんの形で聞いてみる</li>
            <li>すごろくやボードゲームで、コマを進めながら数の感覚を養う</li>
            <li>買い物ごっこで「2つと3つでいくつ？」と声に出して確認する</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            たし算はできてもひきざんになると急に手が止まる子は多くいます。「ひく」という操作が頭の中でイメージしにくいためです。おはじきなどを実際に取り除きながら「のこりはいくつ？」と一緒に数えると、感覚がつかみやすくなります。間違えたときも、答えを教える前に「どうやって考えたか」を聞いてあげると、次に自分で気づく力につながります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            数と計算に慣れてきたら、
            <Link href="/6/sansu" className="text-yellow-700 font-bold hover:underline">6歳向け算数ドリル</Link>
            では30までの数のたし算・ひきざんに挑戦します。
          </p>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
