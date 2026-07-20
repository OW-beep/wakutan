import Link from "next/link";

export const metadata = {
  title: "お出かけ先で自然に学べる声かけ＆ゲーム｜わくたん",
  description:
    "スーパーや公園などのお出かけ先で、自然に数や言葉に親しめる声かけ・ゲームのアイデアを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🛒</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            お出かけ先で自然に学べる声かけ＆ゲーム
          </h1>

          <p className="text-lg text-gray-700">
            スーパーや公園が学びの場に変わる
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          特別な教材がなくても、日常のお出かけの中には学びのきっかけがたくさんあります。
        </p>

        <p className="text-lg leading-8 mb-6">
          ここでは、スーパーや公園でできる、遊び感覚の声かけやゲームを紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          スーパーでできること
        </h2>

        <p className="leading-8 mb-4">
          「りんごを3こ かごに入れてね」など、数を意識した声かけをしてみましょう。
        </p>

        <p className="leading-8 mb-4">
          「赤い野菜を探してみよう」のように、色や種類で分類するゲームもおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 例
          </p>
          <p>
            「これは何円かな？」と値札を一緒に見るのも、数への興味づけになります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          公園でできること
        </h2>

        <p className="leading-8 mb-4">
          「すべり台を3回すべったら次の遊具に行こう」など、数を使った約束事を取り入れてみましょう。
        </p>

        <p className="leading-8 mb-4">
          落ち葉や木の実を集めて「大きい順に並べてみよう」と遊ぶのも、比較する力を育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          移動中にできること
        </h2>

        <p className="leading-8 mb-4">
          信号や標識の色を一緒に確認したり、「赤い車を何台見つけられるかな」と数えたりするのもおすすめです。
        </p>

        <p className="leading-8 mb-4">
          しりとりやなぞなぞも、移動時間にぴったりの遊びです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          大切なのは「気づき」を大切にすること
        </h2>

        <p className="leading-8 mb-4">
          正解を教え込むのではなく、「あ、本当だね」「よく気づいたね」と、子どもの発見に共感してあげることが一番の学びにつながります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>スーパーでは数や色を意識した声かけがしやすい</li>
            <li>公園では数を使った約束事や比較する遊びがおすすめ</li>
            <li>移動中はしりとりやなぞなぞが手軽にできる</li>
            <li>子どもの気づきに共感することが一番の学びになる</li>
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
            お出かけの合間に、おうちでは今日のドリルにも挑戦してみませんか？
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
