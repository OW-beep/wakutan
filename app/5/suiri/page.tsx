import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate5Questions } from "../../data/generate5";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "5歳向けすいり問題（地頭系）｜わくたん",
  description:
    "5歳向け無料すいりドリル。原因と結果を考える問題・3つを比べて順番を導く問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/5/suiri",
  },
};

export default function Page() {
  const data = generate5Questions();

  const questions = getDailyQuestions(
    data.suiri,
    20
  );

  return (
    <main className="min-h-screen bg-indigo-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "5歳ドリル", href: "/5" },
            { name: "すいり問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-indigo-600">
            🔍 5歳向けすいり問題
          </h1>

          <p className="leading-8">
            「なぜそうなった？」を考える原因と結果の問題に加えて、
            3つのものを比べて順番を導く、地頭を鍛えるすいり問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-indigo-700 font-bold">
            毎日20問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.suiri.length}問のストックから、日替わりで20問を選んでいます）</p>

        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>原因と結果を考える力・複数の手がかりから答えを導く力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>5〜10分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-indigo-600"
          accentButton="bg-indigo-500"
        />


        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            5歳になると、「AさんはBさんより背が高い、BさんはCさんより背が高い、いちばん背が高いのは？」のように、複数の手がかりを頭の中で組み立てて答えを導く問題にも挑戦できるようになってきます。すぐに答えが出なくても、指で名前を書き出しながら一緒に整理してみてください。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>2つの手がかりを頭の中で組み合わせて答えを導く力</li>
            <li>「なぜそうなったのか」を自分の言葉で説明する力</li>
            <li>間違えた理由を振り返り、考え方を修正する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>難しい問題は、実際に名前を紙に書いて並べ替えながら考える</li>
            <li>「どうしてそう思ったの？」と理由をたずねる</li>
            <li>間違えたときは、どこで考え違いをしたかを一緒に確認する</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            「Aより背が高い」「Bより背が高い」という2つの手がかりを、頭の中だけで組み合わせるのは5歳にはまだ難しいことがあります。焦らず、絵や図に描き起こして一緒に確認するとつまずきにくくなります。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            もっとやさしい問題から始めたいときは
            <Link href="/4/suiri" className="text-indigo-600 font-bold hover:underline">4歳向けすいり問題</Link>
            、慣れてきたら
            <Link href="/6/suiri" className="text-indigo-600 font-bold hover:underline">6歳向けすいり問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/5"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 5歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
