import Link from "next/link";

export const metadata = {
  title: "5歳でひらがなが読めない・書けない…親の不安解消法｜わくたん",
  description:
    "5歳になってもひらがなが読めない・書けないことに不安を感じる保護者向けに、無理なく興味を引き出すステップを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔤</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            5歳でひらがなが読めない・書けない…親の不安解消法
          </h1>

          <p className="text-lg text-gray-700">
            無理強いせず、自然に興味を持たせるステップ
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          周りの子がひらがなを読めるようになってくると、「うちの子はまだ…」と不安になる方も多いのではないでしょうか。
        </p>

        <p className="text-lg leading-8 mb-6">
          しかし、ひらがなの習得スピードには個人差が大きく、5歳で読み書きが完璧である必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦る前に知っておきたいこと
        </h2>

        <p className="leading-8 mb-4">
          ひらがなの読み書きは、小学校入学後も授業の中で丁寧に学んでいきます。5歳の時点で完璧である必要はありません。
        </p>

        <p className="leading-8 mb-4">
          大切なのは「文字は楽しいもの」という気持ちを育てることです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          まずは「読む」から始める
        </h2>

        <p className="leading-8 mb-4">
          書くことより先に、読むことから始めるのが自然な流れです。絵本の読み聞かせで、指で文字をなぞりながら読んであげましょう。
        </p>

        <p className="leading-8 mb-4">
          自分の名前など、身近で興味を持ちやすい文字から始めるのもおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「読める」を先に育てると、「書きたい」という気持ちが自然と出てきやすくなります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          遊びの中でひらがなに触れる
        </h2>

        <p className="leading-8 mb-4">
          カルタやしりとりなど、遊びの中で文字に触れる機会を増やすと、プレッシャーなく取り組めます。
        </p>

        <p className="leading-8 mb-4">
          わくたんのひらがなドリルも、なかま分けの要素を取り入れ、遊び感覚で取り組める内容にしています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比べすぎないことが一番大切
        </h2>

        <p className="leading-8 mb-4">
          周りの子と比べてしまうのは自然なことですが、習得のペースは本当に一人ひとり違います。
        </p>

        <p className="leading-8 mb-4">
          「昨日より少しできるようになったね」と、その子自身の成長に目を向けてあげましょう。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>5歳でひらがなが完璧である必要はない</li>
            <li>「読む」から始めるのが自然なステップ</li>
            <li>遊びの中で自然に文字に触れる機会を増やす</li>
            <li>他の子と比べず、その子のペースを大切に</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            遊び感覚で取り組める、わくたんのひらがなドリルを試してみませんか？
          </p>

          <Link
            href="/5/hiragana"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            5歳向けひらがなドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
