import Link from "next/link";

export const metadata = {
  title: "買い物ごっこで育つ力｜わくたん",
  description:
    "子どもに人気の買い物ごっこで育つ力を解説。数の感覚やコミュニケーション力を楽しく育てる遊び方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🛒</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            買い物ごっこで育つ力
          </h1>

          <p className="text-lg text-gray-700">
            レジ遊びは算数とコミュニケーションの練習になる
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          おもちゃのレジやお財布を使った買い物ごっこは、多くの子どもが大好きな遊びです。実はこの遊び、数やコミュニケーションの力を育てる効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数の感覚が育つ
        </h2>

        <p className="leading-8 mb-4">
          「これは100円です」「あわせて300円になります」というやりとりの中で、自然と数を扱う経験が増えます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          コミュニケーション力が育つ
        </h2>

        <p className="leading-8 mb-4">
          「いらっしゃいませ」「ありがとうございました」という言葉のやりとりは、社会的な会話のパターンを学ぶ良い機会になります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            店員役・お客さん役を交代すると、両方の立場での会話を経験できます。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          役割を演じることで想像力も育つ
        </h2>

        <p className="leading-8 mb-4">
          「お店屋さんだったら、どう言うかな？」と想像しながら演じる経験は、ごっこ遊び全般に共通する想像力の発達にもつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          家庭でできる工夫
        </h2>

        <p className="leading-8 mb-4">
          本物の商品パッケージを空き箱で用意したり、手作りのお金を使ったりすると、より本格的な買い物ごっこが楽しめます。わくたんのおかね問題と組み合わせるのもおすすめです。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>買い物ごっこは数の感覚を自然に育てる遊び</li>
            <li>「いらっしゃいませ」などの言葉のやりとりでコミュニケーション力も育つ</li>
            <li>店員役・お客さん役を交代すると学びの幅が広がる</li>
            <li>手作りのお金や空き箱を使うと、より本格的に楽しめる</li>
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
            買い物ごっこで親しんだ数の感覚を、今日のおかね問題でも試してみませんか？
          </p>

          <Link
            href="/4/okane"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            おかね問題を見る
          </Link>

        </div>

      </article>

    </main>
  );
}
