import Link from "next/link";

export const metadata = {
  title: "5歳の学び方",
  description:
    "5歳児におすすめの学び方を解説。考える力や集中力を育てながら楽しく学習するコツを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50">

      <article className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-sky-200 to-indigo-200 rounded-3xl p-8 shadow-lg mb-10">

          <div className="text-6xl mb-4">
            🚀
          </div>

          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            5歳の学び方
          </h1>

          <p className="text-lg leading-8">
            5歳は「できること」が大きく増える時期です。
            文字や数字への興味が強くなり、
            ルールを理解しながら遊べるようになります。
          </p>

        </div>

        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-6 mb-8">
          <p className="font-bold text-indigo-700 mb-2">
            📋 この記事でわかること
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>5歳の発達段階に合った学び方の考え方</li>
            <li>考える力・ルール理解を伸ばす関わり方</li>
            <li>小学校入学に向けて意識したいポイント</li>
          </ul>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            🌱 5歳は学びが広がる時期
          </h2>

          <p className="leading-8 mb-4">
            5歳になると集中力が少しずつ伸び、
            自分で考える力も発達してきます。
          </p>

          <p className="leading-8 mb-4">
            「なぜそうなるの？」
            「どうしたらうまくいく？」
            と考える機会が増えるため、
            論理的思考の土台づくりに最適な時期です。
          </p>

          <p className="leading-8">
            この時期は知識を増やすことより、
            考える経験を積み重ねることが重要です。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            🧠 考える力を伸ばそう
          </h2>

          <p className="leading-8 mb-4">
            小学校に向けて必要になるのは、
            答えを知っていることではありません。
          </p>

          <p className="leading-8 mb-4">
            問題を見て、
            自分で考え、
            試してみる力が大切です。
          </p>

          <p className="leading-8">
            パズルや仲間分け問題、
            規則性問題などは、
            楽しみながら思考力を鍛えることができます。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            🔢 数字への理解を深める
          </h2>

          <p className="leading-8 mb-4">
            5歳頃になると、
            数を数えるだけでなく、
            数の大小や順番も理解できるようになります。
          </p>

          <p className="leading-8 mb-4">
            お買い物ごっこや、
            サイコロ遊びなどを通して、
            数の感覚を自然に身につけましょう。
          </p>

          <p className="leading-8">
            算数は机の上だけで学ぶものではありません。
            日常生活の中にたくさん学びの機会があります。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            ✏️ 文字への興味を大切に
          </h2>

          <p className="leading-8 mb-4">
            5歳になると、
            ひらがなや簡単な言葉に興味を持つ子が増えます。
          </p>

          <p className="leading-8 mb-4">
            ただし無理に書かせる必要はありません。
            まずは絵本を読んだり、
            自分の名前を書いたりすることから始めましょう。
          </p>

          <p className="leading-8">
            「読めた！」
            「書けた！」
            という成功体験が、
            学習への自信につながります。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            ⏰ 学習時間の目安
          </h2>

          <p className="leading-8 mb-4">
            5歳児の集中力は少しずつ伸びていますが、
            まだ長時間の勉強は必要ありません。
          </p>

          <p className="leading-8 mb-4">
            1回10〜15分程度を目安に、
            毎日少しずつ続けることが大切です。
          </p>

          <p className="leading-8">
            学習時間の長さよりも、
            継続できる習慣を作ることを優先しましょう。
          </p>

        </section>

        <section className="bg-gradient-to-r from-sky-100 to-indigo-100 rounded-3xl p-8 shadow-lg mb-8">

          <h2 className="text-3xl font-bold mb-6 text-indigo-700">
            💡 保護者が意識したいポイント
          </h2>

          <ul className="space-y-4 leading-8">

            <li>
              ✅ 結果より考える過程を褒める
            </li>

            <li>
              ✅ 間違いを責めない
            </li>

            <li>
              ✅ 毎日少しだけ続ける
            </li>

            <li>
              ✅ 遊び感覚で学べる環境を作る
            </li>

            <li>
              ✅ 子どもの興味を尊重する
            </li>

          </ul>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6 text-indigo-600">
            🌈 まとめ
          </h2>

          <p className="leading-8 mb-4">
            5歳は小学校入学前の大切な準備期間です。
            しかし先取り学習を急ぐ必要はありません。
          </p>

          <p className="leading-8 mb-4">
            数字や文字を覚えること以上に、
            「考えることが楽しい」
            「挑戦してみたい」
            という気持ちを育てることが重要です。
          </p>

          <p className="leading-8">
            日々の遊びやドリルを通して、
            子どもの可能性を少しずつ広げていきましょう。
          </p>

        </section>

        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
          <p>最終更新日：2026年7月</p>
          <p className="mt-1">
            本記事はわくたん運営者が、日々の問題作成を通じて感じたことをもとにまとめています。
          </p>
        </div>

        <div className="bg-indigo-100 rounded-3xl p-8 text-center">

          <h2 className="text-2xl font-bold mb-4">
            🚀 今日の5さいドリルはこちら
          </h2>

          <Link
            href="/5"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            5さいドリルに挑戦する →
          </Link>

        </div>

      </article>

    </main>
  );
}