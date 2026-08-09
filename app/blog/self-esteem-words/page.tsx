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

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          性格によって響く言葉は違う
        </h2>

        <p className="leading-8 mb-4">
          慎重なタイプの子には「じっくり考えられたね」という過程への言葉が響きやすく、のびのびしたタイプの子には「よくチャレンジしたね」という挑戦そのものを認める言葉が響きやすい傾向があります。同じ場面でも、その子の性格に合わせて言葉を選び分けることが大切です。
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-6">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            わが家の3人の子どもも、性格がそれぞれ違います。長女は細かい作業が好きな慎重派、次女は天真爛漫なタイプ、三女はその中間といった感じです。同じ「よくできたね」でも、慎重派の子には結果より過程を、のびのびした子には挑戦そのものを認める言葉の方が響いている実感があります。きょうだいでも同じ声かけが正解とは限らないと感じています。
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            ❓ よくある質問
          </p>
          <p>
            <span className="font-bold">Q. 人見知りの子には、どう声をかければいい？</span><br />
            A. 人前で急に褒められると、かえって照れて萎縮してしまう子もいます。そのようなタイプの子には、みんなの前ではなく、後で2人きりのときに「さっきのあれ、よかったね」と伝える方が素直に届くことがあります。
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

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          場面別の声かけ例
        </h2>

        <div className="bg-white border rounded-2xl p-5 mb-4">
          <p className="font-bold mb-2">🛒 スーパーでお菓子を1つだけ選べたとき</p>
          <p className="text-red-600">NG例：「ちゃんと選べて当たり前でしょ」</p>
          <p className="text-green-700 mt-1">OK例：「1つだけって、自分でちゃんと決められたね」</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 mb-6">
          <p className="font-bold mb-2">✏️ ドリルで間違えてしまったとき</p>
          <p className="text-red-600">NG例：「なんで間違えたの、もっとよく見て」</p>
          <p className="text-green-700 mt-1">OK例：「ここまで自分で考えられたね。ここだけ一緒に見てみようか」</p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🪴 育てたい力
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
            🧭 次にやってみること
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
