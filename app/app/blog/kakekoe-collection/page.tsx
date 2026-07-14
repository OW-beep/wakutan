import Link from "next/link";

export const metadata = {
  title: "勉強嫌いにならないための声かけ集｜わくたん",
  description:
    "幼児期に勉強嫌いにならないための声かけのポイントと具体例を紹介。「頑張れ」以外の伝え方のヒントをまとめました。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">💬</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            勉強嫌いにならないための声かけ集
          </h1>

          <p className="text-lg text-gray-700">
            「頑張れ」だけじゃない、伝え方のヒント
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「頑張れ」「もっとできるでしょ」——励ますつもりの言葉が、時にプレッシャーになってしまうことがあります。
        </p>

        <p className="text-lg leading-8 mb-6">
          幼児期の声かけは、その後の学習への向き合い方に大きく影響します。ここでは、日常で使いやすい声かけの工夫を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          結果よりも過程に注目する
        </h2>

        <p className="leading-8 mb-4">
          「正解したね」よりも、「最後まで自分で考えたね」「よく見て気づいたね」など、取り組む過程に注目した声かけを意識してみましょう。
        </p>

        <p className="leading-8 mb-4">
          結果だけを評価されると、間違えることへの不安が大きくなってしまうことがあります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 例
          </p>
          <p>
            「合ってたね」ではなく「よく考えたね」と伝えてみましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比較ではなく、その子自身の成長を伝える
        </h2>

        <p className="leading-8 mb-4">
          「お兄ちゃんはできたのに」のような比較は、自信を失わせる原因になりやすい言葉です。
        </p>

        <p className="leading-8 mb-4">
          「前より早くできるようになったね」など、その子自身の変化に目を向けた声かけを心がけましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          間違えた時こそ前向きな言葉を
        </h2>

        <p className="leading-8 mb-4">
          間違えた時に「なんで間違えたの」と聞くと、責められていると感じてしまうことがあります。
        </p>

        <p className="leading-8 mb-4">
          「どこで迷ったかな？一緒に見てみよう」と、間違いを一緒に振り返る姿勢を見せてあげましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「やらせる」より「一緒にやる」姿勢を
        </h2>

        <p className="leading-8 mb-4">
          「早くやりなさい」ではなく、「一緒にやってみよう」という誘い方をすると、取り組むハードルが下がります。
        </p>

        <p className="leading-8 mb-4">
          保護者の方が隣にいてくれるだけで、子どもは安心して挑戦できるものです。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>結果よりも「考えた過程」に注目して声をかける</li>
            <li>他の子との比較ではなく、その子自身の成長を伝える</li>
            <li>間違いを責めず、一緒に振り返る姿勢を見せる</li>
            <li>「やらせる」より「一緒にやる」誘い方を意識する</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            声かけの工夫と合わせて、今日のドリルにも一緒に挑戦してみませんか？
          </p>

          <Link
            href="/category/parent"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            保護者向け記事をもっと見る
          </Link>

        </div>

      </article>

    </main>
  );
}
