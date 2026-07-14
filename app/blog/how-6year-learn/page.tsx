import Link from "next/link";

export const metadata = {
  title: "6歳の学び方",
  description:
    "6歳児におすすめの学び方を解説。小学校入学前に育てたい力や家庭学習のコツを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-violet-50">

      <article className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-purple-200 to-violet-200 rounded-3xl p-8 shadow-lg mb-10">

          <div className="text-6xl mb-4">
            🎓
          </div>

          <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
            6歳の学び方
          </h1>

          <p className="text-lg leading-8">
            6歳は小学校入学を目前に控えた大切な時期です。
            文字や数字への理解が深まり、
            学習への興味も大きく成長します。
          </p>

          <p className="text-lg leading-8 mt-4">
            しかし焦って先取り学習を進めるより、
            学ぶ土台をしっかり育てることが大切です。
          </p>

        </div>

        <div className="bg-white border-2 border-dashed border-purple-200 rounded-2xl p-6 mb-8">
          <p className="font-bold text-purple-700 mb-2">
            📋 この記事でわかること
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>6歳の発達段階に合った学び方の考え方</li>
            <li>小学校入学前に育てておきたい土台の力</li>
            <li>焦らず学習習慣を身につけるための工夫</li>
          </ul>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            🌱 6歳は学習習慣を作る時期
          </h2>

          <p className="leading-8 mb-4">
            小学校に入ると毎日の授業や宿題が始まります。
          </p>

          <p className="leading-8 mb-4">
            そのため入学前から、
            「毎日少し学ぶ」
            習慣を身につけておくことが重要です。
          </p>

          <p className="leading-8">
            長時間勉強する必要はありません。
            10〜15分程度でも継続することに大きな意味があります。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            🧠 考える力を伸ばそう
          </h2>

          <p className="leading-8 mb-4">
            小学校では答えを覚えるだけでなく、
            自分で考える力が求められます。
          </p>

          <p className="leading-8 mb-4">
            なぜそうなるのか、
            他に方法はないのかを考える経験が大切です。
          </p>

          <p className="leading-8">
            論理パズルや規則性問題は、
            思考力を育てるのに最適です。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            🔢 数の理解を深める
          </h2>

          <p className="leading-8 mb-4">
            6歳になると、
            数を数えるだけでなく、
            足し算や引き算にも興味を持つ子が増えます。
          </p>

          <p className="leading-8 mb-4">
            ただ計算を暗記するのではなく、
            数量の感覚を身につけることが大切です。
          </p>

          <p className="leading-8">
            買い物やゲームなど、
            日常生活の中で数に触れる機会を作りましょう。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            ✏️ 文字を使う楽しさを知る
          </h2>

          <p className="leading-8 mb-4">
            6歳では読み書きの力も大きく伸びます。
          </p>

          <p className="leading-8 mb-4">
            ただ練習だけを繰り返すより、
            手紙を書いたり絵本を読んだりする中で、
            文字の楽しさを感じることが重要です。
          </p>

          <p className="leading-8">
            学ぶことが楽しいと感じられれば、
            小学校でも自然に成長していきます。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            👂 人の話を聞く力
          </h2>

          <p className="leading-8 mb-4">
            小学校では先生の説明を聞いて行動します。
          </p>

          <p className="leading-8 mb-4">
            最後まで話を聞き、
            内容を理解する力は学習全体の基礎になります。
          </p>

          <p className="leading-8">
            家庭でも会話の中で聞く姿勢を育てていきましょう。
          </p>

        </section>

        <section className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-3xl p-8 shadow-lg mb-8">

          <h2 className="text-3xl font-bold mb-6 text-purple-700">
            💡 保護者が意識したいポイント
          </h2>

          <ul className="space-y-4 leading-8">
            <li>✅ 結果より努力を褒める</li>
            <li>✅ 間違いを責めない</li>
            <li>✅ 毎日少しずつ続ける</li>
            <li>✅ 学ぶ楽しさを大切にする</li>
            <li>✅ 子どもの興味を尊重する</li>
          </ul>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            🌈 まとめ
          </h2>

          <p className="leading-8 mb-4">
            6歳は小学校入学前の大切な準備期間です。
          </p>

          <p className="leading-8 mb-4">
            文字や計算を覚えることだけでなく、
            考える力や学習習慣を育てることが重要です。
          </p>

          <p className="leading-8">
            毎日の小さな積み重ねが、
            小学校での大きな成長につながります。
          </p>

        </section>

        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
          <p>最終更新日：2026年7月</p>
          <p className="mt-1">
            本記事はわくたん運営者が、日々の問題作成を通じて感じたことをもとにまとめています。
          </p>
        </div>

        <div className="bg-purple-100 rounded-3xl p-8 text-center">

          <h2 className="text-2xl font-bold mb-4">
            🎓 今日の6さいドリルはこちら
          </h2>

          <Link
            href="/6"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90"
          >
            6さいドリルに挑戦する →
          </Link>

        </div>

      </article>

    </main>
  );
}