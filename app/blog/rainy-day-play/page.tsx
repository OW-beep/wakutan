import Link from "next/link";

export const metadata = {
  title: "雨の日・室内遊びで考える力を伸ばす10のアイデア｜わくたん",
  description:
    "雨の日や室内で過ごす時間が増える日におすすめの、考える力を伸ばす室内遊びのアイデアを10個紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">☔</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            雨の日・室内遊びで考える力を伸ばす10のアイデア
          </h1>

          <p className="text-lg text-gray-700">
            おうちの中でも学びはたくさん
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          雨の日が続くと、「外で遊べなくて子どもが退屈そう…」と感じることもあるのではないでしょうか。
        </p>

        <p className="text-lg leading-8 mb-6">
          実は室内遊びにも、考える力や集中力を育てるチャンスがたくさんあります。ここでは手軽にできる10個のアイデアを紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 積み木・ブロック遊び
        </h2>

        <p className="leading-8 mb-4">
          形や高さを考えながら組み立てる遊びは、空間認識力を育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② お絵かき・ぬりえ
        </h2>

        <p className="leading-8 mb-4">
          自由に表現する遊びは、発想力や手先の器用さを育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ かくれんぼ（おうちバージョン）
        </h2>

        <p className="leading-8 mb-4">
          隠れる場所を考えたり、探す順番を工夫したりする中で、思考力が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ④ しりとり・なぞなぞ
        </h2>

        <p className="leading-8 mb-4">
          言葉を思い出したり、答えを推理したりする遊びです。移動時間にもおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑤ 折り紙
        </h2>

        <p className="leading-8 mb-4">
          手順通りに折る経験が、順序立てて考える力につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑥ パズル
        </h2>

        <p className="leading-8 mb-4">
          全体像をイメージしながらピースを組み合わせる、論理的思考の練習になります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑦ ままごと・ごっこ遊び
        </h2>

        <p className="leading-8 mb-4">
          役になりきって会話する中で、想像力や言葉の力が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑧ 新聞紙遊び
        </h2>

        <p className="leading-8 mb-4">
          ちぎる・丸める・投げるなど、手先を使いながら体も動かせる遊びです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑨ 間違い探し・迷路
        </h2>

        <p className="leading-8 mb-4">
          観察力や集中力を育てる遊びです。わくたんのドリルにも取り入れています。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「今日は雨だから室内ドリルの日」と決めるのもおすすめです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑩ 絵本の読み聞かせ
        </h2>

        <p className="leading-8 mb-4">
          言葉や想像力を育てる、雨の日の定番の過ごし方です。ゆったりとした時間も大切にしましょう。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>室内遊びにも考える力を育てるチャンスがたくさんある</li>
            <li>積み木・パズル・折り紙は思考力や手先の器用さを育てる</li>
            <li>しりとりやなぞなぞは移動時間にも手軽にできる</li>
            <li>「雨の日はドリルの日」と決めるのもおすすめ</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            室内遊びの合間に、今日のドリルにもチャレンジしてみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            今日のドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
