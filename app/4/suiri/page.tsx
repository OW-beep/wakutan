import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { generate4Questions } from "../../data/generate4";
import { getDailyQuestions } from "../../data/getDailyQuestions";

export const metadata = {
  title: "4歳向けすいり問題（地頭系）｜わくたん",
  description:
    "4歳向け無料すいりドリル。「なぜそうなった？」を考える、地頭を鍛える推理問題を毎日更新。無料で印刷OK。",
  alternates: {
    canonical: "/4/suiri",
  },
};

export default function Page() {
  const data = generate4Questions();

  const questions = getDailyQuestions(
    data.suiri,
    20
  );

  return (
    <main className="min-h-screen bg-indigo-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "4歳ドリル", href: "/4" },
            { name: "すいり問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-indigo-600">
            🔍 4歳向けすいり問題
          </h1>

          <p className="leading-8">
            「なぜ そうなったのかな？」を考える、
            地頭（じあたま）を鍛えるすいり問題を毎日更新しています。
          </p>

          <p className="leading-8 mt-3 text-indigo-700 font-bold">
            毎日20問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.suiri.length}問のストックから、日替わりで20問を選んでいます）</p>

        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>原因と結果を考える力・推理する力</p>
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
            「すいり」は、「きまりを見つける（ろんり）」とはちがい、「なぜそうなったのか」を考える問題です。答えそのものよりも、「じめんが濡れているのは、雨が降ったからかな？」と理由を声に出して考える過程が、地頭（考える力の土台）を育てます。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>身の回りの出来事から、「なぜ？」を考える習慣</li>
            <li>2つの選択肢から、よりありそうな方を選ぶ判断力</li>
            <li>「もし〜だったら、どうなる？」を予想する力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>日常の中で「これ、なんでこうなったと思う？」と聞いてみる</li>
            <li>間違えても正解を先に言わず、「どうしてそう思ったの？」と聞き返す</li>
            <li>正解した理由を、子ども自身の言葉で説明してもらう</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            4歳のうちは、2つの選択肢のうち「知っている方」や「言いやすい方」をなんとなく選んでしまうことがあります。正解・不正解にこだわらず、「じゃあ、こっちだったらどうなる？」と別の場合も一緒に考えてみると、理由を考える習慣がついてきます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            すいり問題に慣れてきたら、
            <Link href="/5/suiri" className="text-indigo-600 font-bold hover:underline">5歳向けすいり問題</Link>
            にも挑戦してみましょう。
          </p>

        </div>


        <div className="mt-8 text-center">
          <Link
            href="/4"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ← 4歳向けドリル一覧に戻る
          </Link>
        </div>

      </div>

    </main>
  );
}
