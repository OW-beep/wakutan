import Link from "next/link";

export const metadata = {
  title: "間違い探しの効果｜観察力・集中力・考える力が育つ｜わくたん",
  description:
    "間違い探しは観察力や集中力、考える力を育てる知育遊びです。4〜6歳向けに間違い探しの効果や、年齢別の難易度調整の仕方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔍</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            間違い探しの効果｜観察力・集中力・考える力が育つ
          </h1>

          <p className="text-lg text-gray-700">
            「あ、ちがう！」の瞬間が学びになる
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          2つの絵を見比べて違いを探す「間違い探し」。シンプルな遊びですが、実はさまざまな力を育てる効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          観察力が育つ
        </h2>

        <p className="leading-8 mb-4">
          細部までじっくり見比べる経験は、物事を注意深く観察する力を育てます。この力は理科的な学びの土台にもなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          集中力が育つ
        </h2>

        <p className="leading-8 mb-4">
          違いを見つけるまで絵を見続ける作業には、集中力が必要です。楽しみながら取り組むことで、無理なく集中する時間が伸びていきます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            全部見つからなくても大丈夫。見つけられた分をしっかり認めてあげましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比較する力が育つ
        </h2>

        <p className="leading-8 mb-4">
          「ここは同じ、ここは違う」と比べながら考える経験は、算数の「等しい・等しくない」を理解する土台にもつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢別の難易度調整
        </h2>

        <p className="leading-8 mb-4">
          4歳ごろは違いが3〜5か所の大きくてわかりやすい間違い探しから、5歳ごろは違いが5〜7か所、6歳ごろは細かい違いが含まれるものへと、少しずつレベルを上げていくのがおすすめです。
        </p>

        <p className="leading-8 mb-4">
          難しすぎると途中で飽きてしまうため、「ちょっと頑張れば見つかる」くらいの難易度を選びましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          親子で一緒に取り組む楽しさ
        </h2>

        <p className="leading-8 mb-4">
          「私はこっちを探すね」というように役割を分けたり、見つけた違いについて「本当だ、ここが違うね」と一緒に確認したりすることで、親子のコミュニケーションの時間にもなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          達成感が自信になる
        </h2>

        <p className="leading-8 mb-4">
          違いを見つけたときの「あ、ちがう！」という発見の喜びは、子どもにとって大きな達成感になります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>間違い探しは観察力・集中力・比較する力を育てる遊び</li>
            <li>年齢に合わせて違いの数や細かさを調整する</li>
            <li>全部見つからなくても、見つけた分をしっかり認める</li>
            <li>親子で一緒に取り組むとコミュニケーションの時間にもなる</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年3月　/　最終更新日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            比べる力を活かして、今日のなかまわけ問題にも挑戦してみませんか？
          </p>

          <Link
            href="/4/nakamawake"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            なかまわけドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
