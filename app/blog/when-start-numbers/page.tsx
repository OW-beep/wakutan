import Link from "next/link";

export const metadata = {
  title: "数字は何歳から覚える？年齢別の教え方を解説｜わくたん",
  description:
    "数字はいつから教え始めるとよいのか、年齢ごとの目安と教え方のコツを、データも交えて解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            数字は何歳から覚える？年齢別の教え方を解説
          </h1>

          <p className="text-lg text-gray-700">
            無理に覚えさせるより、まず数に親しむことから
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「うちの子、まだ数字が言えない…」と焦る前に知っておきたいのが、数字の理解には「唱える」「数える」「意味がわかる」という段階があるということです。
        </p>

        <p className="text-lg leading-8 mb-6">
          多くの子は1〜10を順番に言えるようになるのが先で、「3個ちょうだい」のように実際に数える力はその後に育っていきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数字を唱えられる時期の目安
        </h2>

        <p className="leading-8 mb-4">
          3歳前後から「いち、に、さん…」と数字を順番に唱えられるようになる子が増えてきます。この段階では、意味を理解していなくても問題ありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数える力が育つ時期の目安
        </h2>

        <p className="leading-8 mb-4">
          「これは何個？」と聞かれて、指差しながら正確に数えられるようになるのは、4〜5歳ごろが一つの目安とされています。
        </p>

        <p className="leading-8 mb-4">
          数字を唱える力と、実際に数える力にはタイムラグがあるのが自然な発達の流れです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            唱えられるのに数えられない時期は、決して理解が遅いわけではありません。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数の意味を理解する時期の目安
        </h2>

        <p className="leading-8 mb-4">
          「3」という数字を見て「3個」をイメージできるようになるのは、5〜6歳ごろにかけて発達していく力です。この力が育つと、簡単なたし算・ひきざんの土台ができてきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          無理に覚えさせるより日常の中で触れる
        </h2>

        <p className="leading-8 mb-4">
          「今日は何日？」「あと何個食べる？」など、生活の中の自然な会話に数字を織り交ぜることが、机の上のドリルよりも先に取り組みやすい方法です。
        </p>

        <p className="leading-8 mb-4">
          興味を持ったタイミングで少しずつ取り入れることが、無理なく定着させるコツです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢はあくまで目安
        </h2>

        <p className="leading-8 mb-4">
          ここで紹介した年齢はあくまで一般的な目安です。個人差が大きいことが、多くの発達に関する解説で共通して指摘されています。焦らず、その子のペースを大切にしましょう。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>数字は「唱える」→「数える」→「意味を理解する」の順で発達する</li>
            <li>唱えられるのに数えられない時期があるのは自然なこと</li>
            <li>日常会話の中で数字に触れる機会を増やすのがおすすめ</li>
            <li>年齢はあくまで目安。個人差を前提に焦らず見守る</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            数の感覚を育てる算数ドリルにも挑戦してみませんか？
          </p>

          <Link
            href="/4/sansu"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            算数ドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
