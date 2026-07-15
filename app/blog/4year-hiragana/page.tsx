import Link from "next/link";

export const metadata = {
  title: "4歳ではじめてのひらがな｜どこから始める？｜わくたん",
  description:
    "4歳ではじめてひらがなに触れる際の進め方を解説。何から始めればよいか、興味を持たない場合の対処法もあわせて紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔤</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            4歳ではじめてのひらがな｜どこから始める？
          </h1>

          <p className="text-lg text-gray-700">
            「読む」から始める、無理のないスタート
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          4歳は、多くの子どもがひらがなに初めて興味を持ち始める時期です。「何から始めればいいの？」という疑問にお答えします。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          まずは自分の名前から
        </h2>

        <p className="leading-8 mb-4">
          自分の名前は、子どもにとって最も身近で興味を持ちやすい文字です。名前のひらがなから読む練習を始めるのがおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            📊 データで見る4歳のひらがな習得
          </p>
          <p>
            文部科学省の「幼児教育、幼小接続に関する現状について」という資料では、年少〜年中にかけてひらがなを読める子どもの割合が大きく伸びることが示されています。
            これは、4〜5歳ごろに「音韻認識」（言葉が音の組み合わせでできていることに気づく力）が発達してくることが背景にあるとされています。
            4歳の時点で読めなくても、この力が育つ途中の段階と捉えて問題ありません。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「読む」を先に、「書く」は後で
        </h2>

        <p className="leading-8 mb-4">
          4歳の段階では、書くことより読むことを優先しましょう。読めるようになってから書く練習に進む方が、無理なくステップアップできます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            絵本の中で知っている文字を見つけるだけでも、立派な「読む練習」になります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1日に覚える文字数は少なくてOK
        </h2>

        <p className="leading-8 mb-4">
          一度にたくさんの文字を覚えさせようとせず、1日1〜2文字のペースでも十分です。
        </p>

        <p className="leading-8 mb-4">
          「昨日覚えた文字、覚えてるかな？」と振り返る時間も、記憶の定着に役立ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          興味を持たない場合の対処
        </h2>

        <p className="leading-8 mb-4">
          4歳の時点でひらがなに全く興味を示さない子も珍しくありません。無理に教材を与えるより、まずは絵本の読み聞かせを増やすところから始めてみましょう。
        </p>

        <p className="leading-8 mb-4">
          好きな遊びやキャラクターと結びつけると、興味のきっかけが生まれやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          書く練習に進むタイミング
        </h2>

        <p className="leading-8 mb-4">
          「自分の名前が読めるようになった」「他の文字にも興味を持ち始めた」というサインが見えたら、なぞり書きから少しずつ書く練習に進めてみましょう。
        </p>

        <p className="leading-8 mb-4">
          焦って進める必要はなく、読む力が十分に育ってからで構いません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          興味の芽を大切に
        </h2>

        <p className="leading-8 mb-4">
          4歳の時点でひらがなに全く興味を示さなくても、心配しすぎる必要はありません。興味が出てきたタイミングを逃さず取り組むことが大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>4歳のひらがな学習は自分の名前から始めるのがおすすめ</li>
            <li>「読む」を先に、「書く」は後回しでよい</li>
            <li>興味を持たない時期は無理せず、絵本などから間口を広げる</li>
            <li>読む力が育ってから、なぞり書き→書く練習へ進む</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            今日のひらがなドリルで、身近な言葉に触れてみませんか？
          </p>

          <Link
            href="/4/hiragana"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            4歳向けひらがなドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
