import Link from "next/link";

export const metadata = {
  title: "市販ドリル vs 無料プリント どっちがいい？｜わくたん",
  description:
    "市販の幼児向けドリルと無料の印刷プリント、それぞれのメリット・デメリットを比較し、上手な使い分け方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">📝</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            市販ドリル vs 無料プリント どっちがいい？
          </h1>

          <p className="text-lg text-gray-700">
            それぞれの特徴を知って上手に使い分けよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          書店に並ぶ市販のドリルと、わくたんのような無料の印刷プリント。どちらを選べばいいのか迷う保護者の方も多いのではないでしょうか。
        </p>

        <p className="text-lg leading-8 mb-6">
          それぞれに良さがあるので、目的に合わせて使い分けるのがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          市販ドリルのメリット
        </h2>

        <p className="leading-8 mb-4">
          段階的にレベルが上がる構成になっているものが多く、体系的に学習を進めやすいのが特徴です。
        </p>

        <p className="leading-8 mb-4">
          シールやキャラクターなど、子どものやる気を引き出す工夫がされているドリルも多くあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          無料プリントのメリット
        </h2>

        <p className="leading-8 mb-4">
          何度でも無料で印刷できるため、コストを気にせず気軽に試せるのが大きな魅力です。
        </p>

        <p className="leading-8 mb-4">
          「今日は算数だけ」「今日はひらがなだけ」のように、その日の気分や興味に合わせて自由に選べる点も便利です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            わくたんは日替わりで問題が更新されるので、同じ問題の繰り返しになりにくいのも特徴です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          こんな使い分けがおすすめ
        </h2>

        <p className="leading-8 mb-4">
          基礎から順番にしっかり進めたい場合は市販ドリル、気軽に毎日の習慣として取り入れたい場合は無料プリント、というように目的で使い分けるとよいでしょう。
        </p>

        <p className="leading-8 mb-4">
          「平日は無料プリントで軽く、週末は市販ドリルでじっくり」のような組み合わせもおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          一番大切なのは続けやすさ
        </h2>

        <p className="leading-8 mb-4">
          どちらを選んでも、無理なく続けられることが一番大切です。お子さんの反応を見ながら、合う方法を見つけてあげましょう。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>市販ドリルは体系的に段階を踏んで学べるのが強み</li>
            <li>無料プリントはコストを気にせず気軽に試せるのが強み</li>
            <li>目的や場面に応じて組み合わせて使うのがおすすめ</li>
            <li>一番大切なのは無理なく続けられること</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            まずは無料で、今日のドリルから気軽に試してみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            無料ドリルを試してみる
          </Link>

        </div>

      </article>

    </main>
  );
}
