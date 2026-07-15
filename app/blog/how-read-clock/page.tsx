import Link from "next/link";

export const metadata = {
  title: "時計の読み方はいつから教える？｜わくたん",
  description:
    "幼児期の時計の読み方の教え方を解説。何歳から始めるとよいか、つまずきやすいポイントとステップごとの練習方法を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🕐</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            時計の読み方はいつから教える？
          </h1>

          <p className="text-lg text-gray-700">
            「なんじ」がわかるまでのステップ
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「そろそろ時計を教えたいけど、何歳から始めればいいの？」という声はよく聞かれます。
        </p>

        <p className="text-lg leading-8 mb-6">
          時計の読み方は一気に教えようとするとつまずきやすいテーマです。段階を踏んで進めることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          何歳から始めるのが目安？
        </h2>

        <p className="leading-8 mb-4">
          数字を1〜12まで読めるようになる5歳ごろから、「なんじ」の読み方に触れ始めるとスムーズです。
        </p>

        <p className="leading-8 mb-4">
          「分」まで正確に読めるようになるのは、多くの場合小学校低学年ごろで、6歳の時点で完璧である必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ステップ①：生活の中で時計に触れる
        </h2>

        <p className="leading-8 mb-4">
          「今、長い針が12のところにあるね」など、まずは時計を意識する声かけから始めましょう。
        </p>

        <p className="leading-8 mb-4">
          「7時になったら起きようね」のように、生活のリズムと時計を結びつけるのも効果的です。壁掛け時計を子どもの目線の高さに置くのもおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ステップ②：「なんじ」から始める
        </h2>

        <p className="leading-8 mb-4">
          短い針だけに注目して「今は3時だね」と、まずは「ちょうどの時間」の読み方から始めます。
        </p>

        <p className="leading-8 mb-4">
          「なんじはん」（30分）が読めるようになったら、少しずつ細かい分の読み方に進みましょう。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            デジタル時計とアナログ時計、両方に触れておくと、将来どちらも困らずに読めるようになります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ステップ③：5分刻みへ
        </h2>

        <p className="leading-8 mb-4">
          「なんじはん」に慣れてきたら、「なんじ5ふん」「なんじ10ふん」というように、5分刻みで読む練習に進みます。
        </p>

        <p className="leading-8 mb-4">
          時計の文字盤に5・10・15…と小さく数字を書いたシールを貼ってあげると、長い針の位置と分の対応がわかりやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          つまずきやすいポイント
        </h2>

        <p className="leading-8 mb-4">
          長い針と短い針の役割が逆に感じられたり、「55分」のような細かい読み方で混乱したりするのはよくあることです。
        </p>

        <p className="leading-8 mb-4">
          間違えても焦らず、「もう一回一緒に見てみようか」と繰り返し確認する姿勢が大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          時計クイズを日常に取り入れる
        </h2>

        <p className="leading-8 mb-4">
          「今何時かな？」と1日に1回だけクイズを出すなど、無理のない範囲で習慣化すると、自然と読める時間が増えていきます。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>時計の読み方は5歳ごろから少しずつ触れ始めるのが目安</li>
            <li>生活の中で時計を意識する声かけから始める</li>
            <li>「なんじ」→「なんじはん」→「5分刻み」の順でステップを踏む</li>
            <li>つまずいても焦らず繰り返し確認する</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            時計の感覚とあわせて、今日のドリルで数への理解も深めてみませんか？
          </p>

          <Link
            href="/6"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            6歳向けドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
