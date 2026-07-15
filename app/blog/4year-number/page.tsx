import Link from "next/link";

export const metadata = {
  title: "4歳で数字を覚えるコツ｜わくたん",
  description:
    "4歳児が数字を覚えるための具体的なコツを紹介。発達の段階をふまえた、無理のない数字学習の進め方を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            4歳で数字を覚えるコツ
          </h1>

          <p className="text-lg text-gray-700">
            唱える・数える・意味を理解する、3つの段階を意識しよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          4歳は数字への興味が育ち始める時期ですが、「言えるけど理解していない」という状態も多く見られます。この記事では、4歳児が無理なく数字に親しむコツを紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数字理解には段階がある
        </h2>

        <p className="leading-8 mb-4">
          数字の理解は、①数字を順番に唱える、②ものを実際に数える、③数の大小や増減がわかる、という3つの段階を経て育っていきます。
        </p>

        <p className="leading-8 mb-4">
          4歳の時点では①の段階の子が多く、②③はこれから少しずつ育っていく力です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          コツ①：生活の中で数える機会を増やす
        </h2>

        <p className="leading-8 mb-4">
          階段を上るとき、お菓子を配るとき、おもちゃを片付けるときなど、生活の中には数える機会がたくさんあります。
        </p>

        <p className="leading-8 mb-4">
          「一緒に数えてみよう」と声をかけるだけで、自然な練習になります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            正確に数えられなくても、数える行為そのものを楽しむことを優先しましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          コツ②：指を使って数える
        </h2>

        <p className="leading-8 mb-4">
          指を使って数える方法は、数の量的なイメージをつかむのに役立ちます。「3」という数字と「指3本」を結びつけることで、数字が具体的なイメージとして定着しやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          コツ③：数字カードや絵本を活用する
        </h2>

        <p className="leading-8 mb-4">
          数字と絵が一緒になった絵本やカードは、視覚的に数のイメージをつかむのに役立ちます。ものの数と数字を対応させる練習にもなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦らず「唱える」から始めよう
        </h2>

        <p className="leading-8 mb-4">
          4歳の段階では、まず数字を楽しく唱えられることを目標にし、正確に数えられるかどうかは気にしすぎなくて大丈夫です。この力は5歳、6歳にかけて自然に育っていきます。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>数字理解は「唱える→数える→意味がわかる」の順で育つ</li>
            <li>生活の中で数える機会を増やすのが自然な練習になる</li>
            <li>指を使って数えることで、数のイメージがつかみやすくなる</li>
            <li>4歳ではまず「唱える」ことを楽しめれば十分</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            数字への興味を活かして、今日の算数ドリルにも挑戦してみませんか？
          </p>

          <Link
            href="/4/sansu"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            4歳向け算数ドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
