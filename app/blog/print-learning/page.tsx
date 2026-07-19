import Link from "next/link";

export const metadata = {
  title: "プリント学習のメリット｜わくたん",
  description:
    "幼児向けプリント学習のメリットを解説。集中力・思考力・学習習慣を育てる家庭学習のコツも紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        {/* ヒーロー */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">
            📚
          </div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            プリント学習のメリット
          </h1>

          <p className="text-lg text-gray-700">
            幼児期の学びに紙教材がおすすめな理由
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          最近はタブレット学習や動画教材が増えています。
          しかし、幼児期の学びにおいてはプリント学習にも大きな価値があります。
          紙と鉛筆を使って問題に取り組む経験は、
          集中力や考える力を育てる土台になります。
        </p>

        <p className="text-lg leading-8 mb-6">
          「どんな勉強をさせればいいの？」
          「まだ遊びの方が大事では？」
          と悩む保護者の方も少なくありません。
          本記事では、プリント学習がなぜ幼児期におすすめなのか、
          家庭でどのように取り入れればよいのかを詳しく解説します。
        </p>

        {/* 見出し */}
        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          手を動かして学べる
        </h2>

        <p className="leading-8 mb-4">
          幼児期の学びでは、見るだけではなく実際に体を動かして学ぶことが重要です。
          プリント学習では鉛筆を持ち、自分で考えながら答えを書きます。
        </p>

        <p className="leading-8 mb-4">
          手を動かすことで脳への刺激が増え、
          記憶の定着にもつながります。
          また、自分で答えを書いたという達成感は、
          学習への自信を育てます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>

          <p>
            幼児期は「覚える」よりも
            「自分で考えてやってみる」が大切です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          集中力が身につく
        </h2>

        <p className="leading-8 mb-4">
          幼児の集中力は長くありません。
          年齢にもよりますが数分から十数分程度です。
        </p>

        <p className="leading-8 mb-4">
          プリント学習は短時間で取り組めるため、
          集中力を鍛える練習になります。
          「今日は3問だけ」
          「あと1問だけ」
          といった小さな積み重ねが学習習慣につながります。
        </p>

        <p className="leading-8 mb-4">
          特に毎日同じ時間に取り組むことで、
          自然と机に向かう習慣が身につきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          間違いから学べる
        </h2>

        <p className="leading-8 mb-4">
          プリント学習では間違いが紙に残ります。
          これは大きなメリットです。
        </p>

        <p className="leading-8 mb-4">
          「どうしてそう思ったの？」
          「どこで迷ったかな？」
          と親子で話しながら振り返ることができます。
        </p>

        <p className="leading-8 mb-4">
          正解することだけではなく、
          考えた過程を大切にすることで思考力が育ちます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 保護者向けアドバイス
          </p>

          <p>
            間違えたときは答えを教えるより、
            「どう考えたの？」と聞いてみましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          小学校入学準備になる
        </h2>

        <p className="leading-8 mb-4">
          小学校では問題を読んで答えを書く学習が中心になります。
        </p>

        <p className="leading-8 mb-4">
          プリント学習に慣れておくことで、
          入学後もスムーズに学習へ取り組めます。
        </p>

        <p className="leading-8 mb-4">
          特に4歳から6歳の時期は、
          数字や文字への興味が大きく伸びる時期です。
          遊び感覚で学べるプリントは、
          将来の学習の土台作りに役立ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わくたんがおすすめする学習方法
        </h2>

        <p className="leading-8 mb-4">
          わくたんでは、
          「たくさん解く」よりも
          「毎日続ける」ことを大切にしています。
        </p>

        <p className="leading-8 mb-4">
          算数・論理・パターン問題を通じて、
          子どもたちが考える楽しさを感じられるよう設計しています。
        </p>

        <p className="leading-8 mb-4">
          1日3問でも、
          続ければ大きな成長につながります。
        </p>

        {/* まとめ */}
        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>手を動かして学べる</li>
            <li>集中力が身につく</li>
            <li>間違いから学べる</li>
            <li>小学校入学準備になる</li>
            <li>毎日少しずつ続けることが大切</li>
          </ul>

        </div>

        {/* CTA */}
        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            わくわくたんけんたい「わくたん」で、
            今日の3問にチャレンジ！
          </p>

          <Link
            href="/5"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            5さいドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}