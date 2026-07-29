import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向け算数ドリル｜わくたん",
  description:
    "6歳向け無料算数ドリル。たし算・ひきざんの基礎を毎日10問。無料で印刷OK。",
  alternates: {
    canonical: "/6/sansu",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.sansu,
    20
  );

  return (
    <main className="min-h-screen bg-yellow-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "算数ドリル" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-yellow-700">
            🔢 6歳向け算数ドリル
          </h1>

          <p className="leading-8">
            たし算・ひきざんの基礎や、2桁の数への理解など、小学校入学を見据えた算数問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-yellow-700 font-bold">
            毎日10問を自動で更新・無料で印刷OK
          </p>

        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>数の感覚・計算力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
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
            6歳は算数の基礎固めの時期です。指や具体物を使って数える経験を大切にしながら、少しずつ暗算にも挑戦してみましょう。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>30くらいまでの数の、たし算・ひきざん</li>
            <li>くり上がり・くり下がりのある計算の考え方</li>
            <li>指や具体物にたよらず、頭の中で計算しようとする力（暗算の芽生え）</li>
            <li>文章題を読んで、たし算・ひきざんのどちらを使うか判断する力</li>
          </ul>

          <p className="leading-7 mt-4 text-gray-700">
            このページの問題は、10までの数から30までの数へと、やさしい順に並んで印刷されます。前半で指を動かして感覚をつかみ、後半でくり上がり・くり下がりのある少しむずかしい問題に挑戦する、という流れで取り組めます。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>買い物のときに「合計いくら？」を一緒に暗算してみる</li>
            <li>時計やカレンダーを使って「今日から10日後は何日？」と数えてみる</li>
            <li>くり上がりの計算は「10のまとまり」を意識できるよう、10個ずつのブロックで練習する</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            くり上がり・くり下がりのある計算（8+5や13-6など）は、多くの子がつまずくポイントです。「10のまとまりを作ってから考える」という考え方（8+5なら、まず8に2を足して10にし、残りの3を足す）を、ブロックや図を使って視覚的に見せてあげると理解が進みやすくなります。焦らず、同じタイプの問題を繰り返し練習することが定着への近道です。
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
