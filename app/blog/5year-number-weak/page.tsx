import Link from "next/link";

export const metadata = {
  title: "5歳で数が苦手なとき、家庭でできること｜わくたん",
  description:
    "5歳の子どもが数を苦手にしているときの対処法を解説。数の意味の理解を育てる家庭での関わり方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            5歳で数が苦手なとき、家庭でできること
          </h1>

          <p className="text-lg text-gray-700">
            焦らず、数の「感覚」から育てよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「数字は読めるのに、たし算になると急に嫌がる」——5歳の時期によく見られる悩みです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「読める」と「わかる」は別の力
        </h2>

        <p className="leading-8 mb-4">
          数字を読む・唱えることと、数の量的な意味を理解することは、別々に発達する力です。5歳で数字を読めても、「3個」のイメージが結びついていないことは珍しくありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          具体物で数える経験を増やす
        </h2>

        <p className="leading-8 mb-4">
          おはじきやブロックなど、実際に手で数えられるものを使うと、数字と量の対応が理解しやすくなります。紙の上の数字だけで考えさせるのは、まだ難しい時期です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「3」という数字を見たら、指を3本立てる練習も効果的です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          たし算は「合わせる」動作から
        </h2>

        <p className="leading-8 mb-4">
          「2個と3個を合わせるといくつ？」を、実際に物を合体させる動作と一緒に確認すると、たし算の意味がつかみやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          苦手意識がついてしまっている場合
        </h2>

        <p className="leading-8 mb-4">
          すでに「数字は嫌い」という気持ちが育ってしまっている場合は、ドリルより先に、数を使った遊び（すごろく、かるたなど）から距離を縮めていくのがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比べず、今のその子のペースで
        </h2>

        <p className="leading-8 mb-4">
          5歳で数が苦手でも、多くの場合は発達のペースの違いです。周りと比べず、日々の生活の中で数に触れる機会を増やしていきましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          つまずきの原因を見分けるチェックポイント
        </h2>

        <p className="leading-8 mb-4">
          「数える」のどの部分でつまずいているかを観察すると、対応がしやすくなります。①「いち、に、さん」と順番に唱えられるか、②唱えながら物を1つずつ指させるか（数唱と対象がずれる子は多くいます）、③「ぜんぶでいくつ？」と聞かれて最後に数えた数を答えられるか、の3段階を意識して見てみましょう。①はできるが②でずれる場合は、ゆっくり指させながら数える練習を、③でつまずく場合は「数える」と「量を表す」がまだ結びついていない段階なので、具体物を使った練習がより効果的です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          おすすめの数遊び3選
        </h2>

        <p className="leading-8 mb-4">
          <span className="font-bold">すごろく</span>はサイコロの目の数だけコマを動かすので、数と移動量が自然に結びつきます。<span className="font-bold">トランプの神経衰弱</span>は数字を覚えながら遊べ、数字への抵抗感を減らすのに役立ちます。<span className="font-bold">おやつの取り分けごっこ</span>は「3人で6個のクッキーを分けると、1人何個？」のような、割り算の考え方の芽生えにもつながる遊びです。どれもドリルのような堅さがないので、苦手意識のある子でも取り組みやすいのが特徴です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            ❓ よくある質問
          </p>
          <p>
            <span className="font-bold">Q. どのくらいで効果が出ますか？</span><br />
            A. 個人差が大きく、数週間で変化が見える子もいれば、数ヶ月かかる子もいます。焦らず、まずは「数に対する抵抗感を減らす」ことを目標に、毎日少しずつ触れる機会を作ることを優先しましょう。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🔑 おさえておきたいこと
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>数字を読めることと、数の量的な意味がわかることは別の力</li>
            <li>具体物を使って数える経験が、数の理解の土台になる</li>
            <li>たし算は「合わせる」動作と一緒に確認すると理解しやすい</li>
            <li>苦手意識がある場合は、ドリルより先に数を使った遊びから</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🎨 一緒にやってみよう
          </h3>

          <p className="mb-3">
            数の感覚を育てる算数ドリルにも挑戦してみませんか？
          </p>

          <Link
            href="/5/sansu"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            5歳向け算数ドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
