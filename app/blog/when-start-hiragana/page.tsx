import Link from "next/link";

export const metadata = {
  title: "ひらがなは何歳から？無理なく始めるタイミングを解説｜わくたん",
  description:
    "ひらがなを教え始める年齢の目安を、公的な調査データもふまえて解説。無理なく始めるためのサインの見つけ方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔤</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            ひらがなは何歳から？無理なく始めるタイミングを解説
          </h1>

          <p className="text-lg text-gray-700">
            データで見る習得の目安と、始めどきのサイン
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「ひらがなはいつから教えればいいの？」という疑問に対して、ここではデータをもとにした目安と、始めどきのサインを紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          データで見るひらがな習得の目安
        </h2>

        <p className="leading-8 mb-4">
          文部科学省の「幼児教育、幼小接続に関する現状について」という資料では、年少（3〜4歳）から年中（4〜5歳）にかけてひらがなを読める子どもの割合が大きく伸び、年長（5〜6歳）ではほとんどの子が読めるようになる傾向が示されています。
        </p>

        <p className="leading-8 mb-4">
          一方で、書くことについては読むことよりも遅れて発達するというのが、多くの専門家に共通する見解です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          なぜ4〜5歳で伸びるのか
        </h2>

        <p className="leading-8 mb-4">
          背景にあるとされるのが「音韻認識」の発達です。「りんご」が「り・ん・ご」という音でできていると気づく力が、4〜5歳ごろに育ってくることが、ひらがな習得と関係していると考えられています。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            音韻認識は、しりとりや手遊び歌など、音を意識する遊びの中でも育まれると考えられています。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          始めどきのサイン
        </h2>

        <p className="leading-8 mb-4">
          「絵本の文字を指差す」「自分の名前の文字に反応する」「本を読むふりをする」といった様子が見られたら、興味が育ってきているサインです。
        </p>

        <p className="leading-8 mb-4">
          こうしたサインが出てから取り組み始めると、無理なくスムーズに進みやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          読めなくても焦らない理由
        </h2>

        <p className="leading-8 mb-4">
          小学校では1年生の国語の授業で、全員がひらがなを読めるように丁寧に指導するカリキュラムが組まれています。就学前に読めていなくても、入学後にしっかり追いつける仕組みがあることを知っておくと、気持ちが楽になります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>文部科学省の資料でも、4〜5歳にかけてひらがなの習得が大きく進むことが示されている</li>
            <li>背景には「音韻認識」という力の発達があるとされる</li>
            <li>文字を指差す・名前に反応するなどのサインが始めどきの目安</li>
            <li>就学前に読めなくても、小学校で丁寧に教わるため心配しすぎなくてよい</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年3月　/　最終更新日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            興味のサインが見えたら、今日のひらがなドリルにも挑戦してみませんか？
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
