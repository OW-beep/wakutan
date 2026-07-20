import Link from "next/link";

export const metadata = {
  title: "「あと少しでできそう」を見極めるコツ｜わくたん",
  description:
    "子どもにとって「ちょっと頑張ればできる」難易度を見極めるコツを紹介。発達心理学の考え方をふまえ、無理なく力を伸ばす問題の選び方を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🎯</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            「あと少しでできそう」を見極めるコツ
          </h1>

          <p className="text-lg text-gray-700">
            難しすぎず、簡単すぎない問題の選び方
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          簡単すぎる問題は退屈に、難しすぎる問題はやる気を失わせてしまいます。ちょうどいい難易度を見極めることは、実は家庭学習の大きなポイントです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「発達の最近接領域」という考え方
        </h2>

        <p className="leading-8 mb-4">
          心理学者ヴィゴツキーは、「一人ではまだ難しいが、少しのヒントがあればできること」に取り組むときに、もっとも学びが深まると考えました。
        </p>

        <p className="leading-8 mb-4">
          この「ちょっと頑張ればできる」範囲は、心理学で「発達の最近接領域」と呼ばれています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          見極めのサイン①：時間をかければ自力で解ける
        </h2>

        <p className="leading-8 mb-4">
          すぐには分からなくても、少し考えたり指を使ったりすれば自力にたどり着ける問題は、ちょうどいい難易度のサインです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「わからない」と言われたら、答えを教える前に「どこまで考えた？」と聞いてみましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          見極めのサイン②：ヒントで一気に理解が進む
        </h2>

        <p className="leading-8 mb-4">
          少しヒントを出しただけで「あ、わかった！」となる問題も、まさに「あと少し」の範囲にある問題です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          難しすぎるサイン・簡単すぎるサイン
        </h2>

        <p className="leading-8 mb-4">
          ヒントを出しても全く進まない場合は、少しレベルを下げてみましょう。逆に、説明もせずにすぐ正解してしまう場合は、レベルを上げるタイミングかもしれません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          正解不正解より「反応」を見る
        </h2>

        <p className="leading-8 mb-4">
          正解率だけでなく、「うーん」と考え込む時間があるか、集中して取り組めているかといった反応を見ることが、ちょうどいい難易度を見極めるヒントになります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>「あと少しでできる」範囲の問題が、もっとも学びが深まるとされる</li>
            <li>自力でたどり着けるか、ヒントで一気に理解が進むかがサインになる</li>
            <li>難しすぎればレベルを下げ、簡単すぎればレベルを上げる</li>
            <li>正解率だけでなく、取り組んでいるときの反応も見てあげよう</li>
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
            お子さんに合った難易度か、今日のドリルで確認してみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            今日のドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
