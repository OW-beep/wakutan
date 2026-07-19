import Link from "next/link";

export const metadata = {
  title: "迷路遊びで育つ5つの力｜わくたん",
  description:
    "子どもに人気の迷路遊びで育つ5つの力を解説。楽しみながら思考力や集中力を伸ばす迷路遊びの魅力と選び方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌀</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            迷路遊びで育つ5つの力
          </h1>

          <p className="text-lg text-gray-700">
            ゴールまでの道を考える力は算数にもつながる
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          多くの子どもが夢中になる迷路遊び。実はただ楽しいだけでなく、さまざまな力を育てる効果があります。
        </p>

        <p className="text-lg leading-8 mb-6">
          この記事では、迷路遊びで育つ5つの力と、年齢に合わせた選び方を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 見通しを立てる力
        </h2>

        <p className="leading-8 mb-4">
          ゴールまでの道を目で追いながら考える経験は、「この先どうなるか」を予測する力につながります。
        </p>

        <p className="leading-8 mb-4">
          この力は、算数の文章題を解くときに「まず何をすればいいか」を考える力の土台にもなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 集中力
        </h2>

        <p className="leading-8 mb-4">
          スタートからゴールまで線をたどる作業には、集中して取り組む力が必要です。継続することで集中できる時間も少しずつ伸びていきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 運筆力
        </h2>

        <p className="leading-8 mb-4">
          鉛筆で線をなぞる動作そのものが、文字を書くための手のコントロール力（運筆力）の練習になります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            間違った道に進んでも、「あ、こっちは違ったね」と気づく経験も大切な学びです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ④ 試行錯誤する力
        </h2>

        <p className="leading-8 mb-4">
          行き止まりに気づいて別の道を探す経験は、失敗してもやり直せばいいという前向きな姿勢を育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑤ 達成感
        </h2>

        <p className="leading-8 mb-4">
          ゴールにたどり着いたときの「できた！」という達成感は、次の挑戦への意欲につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢に合わせた迷路の選び方
        </h2>

        <p className="leading-8 mb-4">
          4歳ごろは道幅が広くシンプルな迷路、5歳ごろは分かれ道が2〜3か所ある迷路、6歳ごろは行き止まりが複数ある複雑な迷路というように、少しずつ難易度を上げていくのがおすすめです。
        </p>

        <p className="leading-8 mb-4">
          難しすぎる迷路は途中で投げ出す原因になるため、「ちょっと頑張ればできる」くらいの難易度を選びましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          手作り迷路も効果的
        </h2>

        <p className="leading-8 mb-4">
          紙に自由に線を描いて簡単な迷路を作るのもおすすめです。子ども自身に迷路を作ってもらうと、「どうすれば難しくなるか」を考える経験にもなります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>迷路遊びは見通しを立てる力・集中力・運筆力を育てる</li>
            <li>行き止まりに気づく経験は試行錯誤する力につながる</li>
            <li>年齢に合わせて道幅や分かれ道の数を調整する</li>
            <li>手作り迷路で「作る側」の視点を経験するのもおすすめ</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            迷路と同じように、順番を考えるパターン問題にも挑戦してみませんか？
          </p>

          <Link
            href="/4/pattern"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            パターンドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
