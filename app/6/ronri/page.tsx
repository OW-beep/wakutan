import QuestionList from "../../components/QuestionList";
import Link from "next/link";
import { generate6Questions } from "../../data/generate6";
import { getDailyQuestions } from "../../data/getDailyQuestions";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata = {
  title: "6歳向け論理問題｜わくたん",
  description:
    "6歳向け無料論理ドリル。規則性やルールを考える問題を毎日更新。",
  alternates: {
    canonical: "/6/ronri",
  },
};

export default function Page() {
  const data = generate6Questions();

  const questions = getDailyQuestions(
    data.ronri,
    30
  );

  return (
    <main className="min-h-screen bg-blue-50">

      <div className="max-w-4xl mx-auto p-6">

        <Breadcrumb
          items={[
            { name: "6歳ドリル", href: "/6" },
            { name: "論理問題" },
          ]}
        />

        <div className="bg-white rounded-3xl shadow p-8 mb-8">

          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            🧠 6歳向け論理問題
          </h1>

          <p className="leading-8">
            順序やきまりを理解し、筋道を立てて考える論理問題です。小学校の学習にもつながる考え方を身につけます。
          </p>

          <p className="leading-8 mt-3 text-blue-700 font-bold">
            毎日30問を自動で更新・無料で印刷OK
          </p>

          <p className="leading-6 mt-2 text-xs text-gray-500">（{data.ronri.length}問のストックから、日替わりで30問を選んでいます）</p>

        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <p><span className="font-bold">🌱 この問題について：</span>論理的思考・順序立てて考える力</p>
          <p><span className="font-bold">⏱ めやす時間：</span>10〜15分</p>
        </div>

        <QuestionList
          questions={questions}
          accentText="text-blue-700"
          accentButton="bg-blue-500"
        />

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            6歳は理由を説明する力も伸びてきます。「どうしてそう思ったの？」と聞いてあげることで、考える力がさらに育ちます。
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">この時期に育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>複数のきまりを見比べて、正しいものを選び出す力</li>
            <li>答えだけでなく、「なぜそうなるか」を言葉で説明する力</li>
            <li>間違えたときに、どこで考え方がずれたかを振り返る力</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>正解したときも「どうしてそう思ったの？」と理由を聞いてみる</li>
            <li>間違えたときは、どのきまりを見落としたか一緒に確認する</li>
            <li>身の回りのきまり（信号の色の順番など）を一緒に探してみる</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">
            なんとなく「こんな感じかな」で答えを選び、理由を聞かれると答えられないことがあります。これは筋道立てて考える力がまだ育っている途中だからで、自然なことです。答え合わせのときに理由を言葉にする練習を重ねることで、少しずつ身についていきます。
          </p>

          <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
            論理的に考える力をさらに伸ばしたい場合は、
            <Link href="/6/nazonazo" className="text-blue-700 font-bold hover:underline">なぞなぞ問題</Link>
            もおすすめです。
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
