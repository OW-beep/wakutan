import Link from "next/link";

export const metadata = {
  title: "4歳なのに集中できない…1日5分から始める集中力の育て方｜わくたん",
  description:
    "4歳の子がすぐに飽きてしまう、集中が続かないと悩む保護者向けに、1日5分から始められる集中力の育て方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🎯</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            4歳なのに集中できない…1日5分から始める集中力の育て方
          </h1>

          <p className="text-lg text-gray-700">
            焦らなくて大丈夫。小さな成功体験の積み重ねから
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「うちの子、すぐ飽きちゃって全然集中できない…」多くの保護者の方が一度は感じる悩みです。
        </p>

        <p className="text-lg leading-8 mb-6">
          実は4歳ごろは、集中できる時間がまだ5〜10分程度なのが自然な発達段階です。焦る必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          そもそも4歳の集中力はどれくらい？
        </h2>

        <p className="leading-8 mb-4">
          個人差はありますが、4歳児が一つのことに集中できる時間は5〜10分程度が目安といわれています。
        </p>

        <p className="leading-8 mb-4">
          大人と同じように長時間座って取り組むことを期待すると、お互いにつらくなってしまいます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1日5分から始めてみる
        </h2>

        <p className="leading-8 mb-4">
          いきなり長い時間を目指すのではなく、「5分だけ」と決めて取り組んでみましょう。
        </p>

        <p className="leading-8 mb-4">
          わくたんのドリルも1問から始められる分量にしているので、「今日は3問だけ」のように区切って取り組むのもおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「終わった」という達成感を積み重ねることが、次への意欲につながります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          環境を整える
        </h2>

        <p className="leading-8 mb-4">
          テレビの音やおもちゃが目に入る場所では集中しづらくなります。取り組む時だけ、机の上をシンプルにしてみましょう。
        </p>

        <p className="leading-8 mb-4">
          「ここに座ったら集中タイム」という習慣ができると、切り替えがスムーズになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          できたことを具体的にほめる
        </h2>

        <p className="leading-8 mb-4">
          「すごいね」だけでなく、「最後まで座って考えられたね」など、できたことを具体的に伝えましょう。
        </p>

        <p className="leading-8 mb-4">
          結果よりも過程をほめることで、次も挑戦してみようという気持ちが育ちます。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>4歳の集中力は5〜10分が目安。長時間を求めすぎない</li>
            <li>「1日5分」からのスモールスタートが効果的</li>
            <li>集中しやすい環境づくりも大切</li>
            <li>結果より過程を具体的にほめる</li>
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
            まずは今日の1〜2問から、5分だけ挑戦してみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            4歳向けドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
