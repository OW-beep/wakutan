import Link from "next/link";

export const metadata = {
  title: "6歳で算数が苦手でも大丈夫！小学校でつまずかない土台の作り方｜わくたん",
  description:
    "6歳で算数が苦手な子でも安心できる、小学校の算数につまずかないための土台づくりのポイントを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            6歳で算数が苦手でも大丈夫！小学校でつまずかない土台の作り方
          </h1>

          <p className="text-lg text-gray-700">
            計算の正確さより「数の感覚」を育てよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「たし算がなかなか覚えられない」「数字を見るのを嫌がる」——6歳の保護者からよく聞く悩みです。
        </p>

        <p className="text-lg leading-8 mb-6">
          小学校入学が近づくと不安になりますが、今の時点で計算が完璧である必要はありません。大切なのは土台となる「数の感覚」です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          計算より先に「数の感覚」を育てる
        </h2>

        <p className="leading-8 mb-4">
          数字を暗記させるより先に、「3個と2個で合わせていくつ」のように、実際にものを数える経験を増やしましょう。
        </p>

        <p className="leading-8 mb-4">
          お菓子やブロックなど、身近なものを使うと、数の増減を体感的に理解しやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          指を使って数えてもOK
        </h2>

        <p className="leading-8 mb-4">
          「指を使うのはダメ」と思われがちですが、6歳の段階では指を使って数えることは自然なステップです。
        </p>

        <p className="leading-8 mb-4">
          まずは自分の力で答えにたどり着く経験を大切にしましょう。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            計算の速さよりも、「自分で考えて答えを出した」経験の積み重ねが自信につながります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          間違いを責めない
        </h2>

        <p className="leading-8 mb-4">
          間違えた時に「なんで間違えたの？」と責めてしまうと、算数への苦手意識が強くなってしまいます。
        </p>

        <p className="leading-8 mb-4">
          「どこまで考えたか」を一緒に確認し、できたところをまずほめてあげましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          毎日少しずつの積み重ねが力になる
        </h2>

        <p className="leading-8 mb-4">
          算数は積み重ねの教科です。一気に理解させようとせず、毎日少しずつ数に触れる時間を作りましょう。
        </p>

        <p className="leading-8 mb-4">
          わくたんの6歳向け算数ドリルも、基礎的な内容から少しずつ取り組める構成にしています。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>6歳で計算が完璧である必要はない</li>
            <li>まずは「数の感覚」を体感的に育てる</li>
            <li>指を使って数えるのは自然なステップ</li>
            <li>間違いを責めず、考えた過程をほめる</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年6月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            基礎から少しずつ取り組める、わくたんの算数ドリルを試してみませんか？
          </p>

          <Link
            href="/6/sansu"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            6歳向け算数ドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
