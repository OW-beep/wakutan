import Link from "next/link";

export const metadata = {
  title: "自己肯定感を育てる声かけ｜わくたん",
  description:
    "幼児期の自己肯定感を育てる声かけの工夫を紹介。結果だけでなく過程に注目した伝え方のポイントを解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌼</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            自己肯定感を育てる声かけ
          </h1>

          <p className="text-lg text-gray-700">
            「すごいね」だけじゃない、伝え方のバリエーション
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          自己肯定感という言葉をよく耳にするようになりましたが、「具体的にどう声をかければいいの？」と悩む保護者の方も多いのではないでしょうか。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          結果だけでなく過程に注目する
        </h2>

        <p className="leading-8 mb-4">
          「上手にできたね」だけでなく、「最後まで頑張ったね」「工夫して考えたね」のように、過程に注目した声かけは、結果が出なかったときにも使えるという利点があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「できたこと」を具体的に伝える
        </h2>

        <p className="leading-8 mb-4">
          「すごいね」という言葉は便利ですが、繰り返し使ううちに軽く聞こえてしまうこともあります。「一人で靴を履けたね」のように、具体的な行動を言葉にすると伝わりやすくなります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「〜してくれてありがとう」という感謝の言葉も、自己肯定感を育てる声かけの一つです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          失敗したときの声かけも大切
        </h2>

        <p className="leading-8 mb-4">
          うまくいかなかったときに「大丈夫、また挑戦できるよ」と伝えることは、結果に関わらず自分の存在を認められているという安心感につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比べる相手は「昨日のその子」
        </h2>

        <p className="leading-8 mb-4">
          他の子と比べるのではなく、「前よりできるようになったね」とその子自身の成長に注目することが、自己肯定感を育てる声かけの基本です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>結果だけでなく、頑張った過程に注目した声かけを意識する</li>
            <li>「すごいね」だけでなく、具体的な行動を言葉にして伝える</li>
            <li>失敗したときこそ、安心感につながる声かけを心がける</li>
            <li>比べる相手は他の子ではなく、その子自身の「前」</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            日々の関わりとあわせて、今日のドリルにも一緒に取り組んでみませんか？
          </p>

          <Link
            href="/category/parent"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            保護者向け記事をもっと見る
          </Link>

        </div>

      </article>

    </main>
  );
}
