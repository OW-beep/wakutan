import Link from "next/link";

export const metadata = {
  title: "4歳児がドリルを嫌がるときの対処法｜わくたん",
  description:
    "4歳児がドリルを嫌がるときの理由と対処法を解説。この年齢ならではの発達的な背景と、無理なく取り組める工夫を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">😣</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            4歳児がドリルを嫌がるときの対処法
          </h1>

          <p className="text-lg text-gray-700">
            「イヤ」の裏にある、この時期ならではの理由
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「さっきまで楽しく遊んでいたのに、ドリルを出したとたん嫌がる」——4歳の時期によく見られる光景です。
        </p>

        <p className="text-lg leading-8 mb-6">
          この時期は、他の年齢とは少し違う理由で嫌がることが多いのが特徴です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          4歳ならではの理由①：集中できる時間がまだ短い
        </h2>

        <p className="leading-8 mb-4">
          4歳の集中力は5〜10分程度が目安です。10問すべてに取り組もうとすると、途中で集中が切れて嫌がる原因になります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          4歳ならではの理由②：「できない」経験への抵抗
        </h2>

        <p className="leading-8 mb-4">
          自我が育ってくる4歳は、「できないこと」自体に強い抵抗を感じやすい時期でもあります。難しい問題が続くと、それだけで拒否反応が出ることがあります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 対処法
          </p>
          <p>
            難しい問題が続いたら、あえて簡単な問題を1問挟んで「できた」を作ってあげましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          4歳ならではの理由③：気分の切り替えが苦手
        </h2>

        <p className="leading-8 mb-4">
          遊びから学習への切り替えに時間がかかるのも4歳の特徴です。「あと5分遊んだらドリルしようね」と予告しておくと、切り替えがスムーズになることがあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          無理に続けさせない選択も大切
        </h2>

        <p className="leading-8 mb-4">
          対処法を試しても嫌がる日は、無理に続けさせず「今日はお休み」にしましょう。4歳の時期に「ドリル=嫌なもの」という印象がついてしまう方が、長期的にはマイナスです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1問からのスモールスタート
        </h2>

        <p className="leading-8 mb-4">
          「10問全部」ではなく「今日は1問だけ」から始めるのもおすすめです。わくたんのドリルも、一部だけ取り組む使い方で問題ありません。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>4歳がドリルを嫌がる背景には、集中力・自我・切り替えの苦手さがある</li>
            <li>難しい問題が続いたら、簡単な問題を挟んで「できた」を作る</li>
            <li>遊びからの切り替えは、事前の予告があるとスムーズになりやすい</li>
            <li>嫌がる日は無理せず休み、1問からのスモールスタートでもよい</li>
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
            1問だけでも、今日のドリルに挑戦してみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            4歳向けドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
