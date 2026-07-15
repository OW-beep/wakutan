import Link from "next/link";

export const metadata = {
  title: "パズル遊びの効果｜考える力・集中力・空間認識力が育つ｜わくたん",
  description:
    "パズル遊びが育てる力を解説。考える力・集中力・空間認識力を伸ばすパズルの選び方や取り入れ方も紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🧩</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            パズル遊びの効果｜考える力・集中力・空間認識力が育つ
          </h1>

          <p className="text-lg text-gray-700">
            ピースを合わせる経験が思考力の土台になる
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          多くの子どもが夢中になるパズル遊び。ピースを合わせるだけのシンプルな遊びに見えて、実は複数の力を同時に育てる効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          空間認識力が育つ
        </h2>

        <p className="leading-8 mb-4">
          ピースの形や向きを見て、正しい位置を判断する作業は、頭の中でものを回転させたり組み合わせたりする空間認識力を育てます。
        </p>

        <p className="leading-8 mb-4">
          この力は、図形やグラフを扱う算数の学習にもつながる大切な感覚です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          試行錯誤する力が育つ
        </h2>

        <p className="leading-8 mb-4">
          「合わない、じゃあ次はこれかな」と繰り返し試す経験は、失敗しても諦めずに別の方法を試す粘り強さを育てます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            難しすぎるピース数は途中で投げ出す原因に。年齢に合ったピース数を選びましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          集中力が育つ
        </h2>

        <p className="leading-8 mb-4">
          完成に向けて集中して取り組む時間は、年齢が上がるにつれて少しずつ伸びていきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢に合わせたピース数の目安
        </h2>

        <p className="leading-8 mb-4">
          多くの知育玩具メーカーが、2〜3歳向けには数ピース〜10ピース程度、4〜5歳向けには20〜50ピース程度、6歳ごろには100ピース前後を目安として商品を展開しています。
        </p>

        <p className="leading-8 mb-4">
          「ちょっと頑張ればできる」くらいの難易度が、達成感を得やすく継続のモチベーションにもつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          完成の達成感を大切に
        </h2>

        <p className="leading-8 mb-4">
          完成したパズルは、しばらく飾っておくのもおすすめです。「これ、頑張って完成させたね」と振り返ることで、自信の積み重ねにつながります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>パズルは空間認識力・試行錯誤する力・集中力を育てる</li>
            <li>年齢に合ったピース数を選ぶことが継続のポイント</li>
            <li>難しすぎず、簡単すぎない「ちょっと頑張ればできる」難易度がおすすめ</li>
            <li>完成の達成感を大切に、自信につなげる</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            パズルで育った考える力を、今日のパターン問題でも試してみませんか？
          </p>

          <Link
            href="/5/pattern"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            パターンドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
