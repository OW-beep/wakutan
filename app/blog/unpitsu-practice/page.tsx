import Link from "next/link";

export const metadata = {
  title: "運筆練習が文字上達の近道になる理由｜わくたん",
  description:
    "文字を書く前段階として重要な運筆練習について解説。線を引く練習がなぜ文字の上達につながるのか、家庭でできる練習法を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">✏️</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            運筆練習が文字上達の近道になる理由
          </h1>

          <p className="text-lg text-gray-700">
            上手に書く前に、線を引く力を育てよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「文字を書く練習をしているのに、なかなか上手にならない」という場合、実は文字そのものより「線を引く力」が不足していることがあります。
        </p>

        <p className="text-lg leading-8 mb-6">
          運筆（うんぴつ）練習とは、鉛筆やクレヨンで思い通りに線を引く練習のことです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            📊 微細運動の発達は体の中心から指先へ
          </p>
          <p>
            発達に関する各種資料では、指先を使う細かい動き（微細運動）は、体の中心に近い部分から末端に向かって発達していくとされています。
            そのため、いきなり細かい文字を書く前に、腕全体を大きく動かす運筆から始める方が、体の発達の流れに沿った自然なステップだといえます。
            文部科学省の「幼児期運動指針」でも、幼児期は多様な動きを遊びの中で経験することの大切さが示されています。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          なぜ運筆練習が大切なのか
        </h2>

        <p className="leading-8 mb-4">
          ひらがなや数字は、直線・曲線・とめ・はねなど、さまざまな線の組み合わせでできています。
        </p>

        <p className="leading-8 mb-4">
          線をコントロールする力が育っていないと、文字の形そのものよりも「思い通りに手を動かすこと」自体が難しく、文字学習への苦手意識につながりやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          家庭でできる運筆練習
        </h2>

        <p className="leading-8 mb-4">
          まっすぐな線、波線、ぐるぐる線など、単純な線をなぞる練習から始めましょう。
        </p>

        <p className="leading-8 mb-4">
          迷路やぬりえも、実は立派な運筆練習になります。楽しみながら手を動かす経験を増やすことが大切です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            きれいに書けなくても大丈夫。まずは「最後までなぞりきる」ことを目標にしましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢別の運筆のめやす
        </h2>

        <p className="leading-8 mb-4">
          3〜4歳ごろはまっすぐな線や大きな丸をなぞる練習から、5歳ごろは波線やジグザグ線、6歳ごろはひらがなに近い曲線やとめ・はねを意識した線の練習へと進めていくのが自然な流れです。
        </p>

        <p className="leading-8 mb-4">
          年齢というより、その子の手の発達に合わせて無理のない難易度を選ぶことが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          鉛筆の持ち方も少しずつ
        </h2>

        <p className="leading-8 mb-4">
          正しい持ち方を最初から完璧に求めると、書くこと自体が嫌になってしまうことがあります。
        </p>

        <p className="leading-8 mb-4">
          遊びの中で自然に正しい持ち方に近づけるよう、無理のない範囲で声かけをしていきましょう。三角軸の鉛筆やグリップを使うのも一つの方法です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          市販の運筆ドリルとの付き合い方
        </h2>

        <p className="leading-8 mb-4">
          市販の運筆ドリルは種類が豊富ですが、1冊をきっちり終わらせることにこだわりすぎず、興味を持ったページから取り組む形でも十分効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          運筆からひらがなへ
        </h2>

        <p className="leading-8 mb-4">
          線を引く力が育ってきたら、ひらがなの練習に進みましょう。運筆で慣れた「とめ・はね」の感覚が、文字を書くときにも活きてきます。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>運筆練習は文字を書く前の土台となる力</li>
            <li>直線・曲線をなぞる練習や迷路・ぬりえも立派な運筆練習</li>
            <li>手の発達に合わせて難易度を選ぶことが大切</li>
            <li>運筆で育った力はひらがな学習にもつながる</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            運筆に慣れてきたら、今日のひらがなドリルにも挑戦してみませんか？
          </p>

          <Link
            href="/4/hiragana"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ひらがなドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
