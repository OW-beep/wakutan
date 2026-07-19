import Link from "next/link";

export const metadata = {
  title: "小学校入学準備チェックリスト｜わくたん",
  description:
    "小学校入学前に確認しておきたい準備を、学用品・生活習慣・学習面の3つの観点からチェックリスト形式で紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🎒</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            小学校入学準備チェックリスト
          </h1>

          <p className="text-lg text-gray-700">
            学用品だけじゃない、本当に大切な準備とは
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          小学校入学が近づくと、何を準備すればいいのか不安になる保護者の方も多いのではないでしょうか。
        </p>

        <p className="text-lg leading-8 mb-6">
          ランドセルや学用品の準備も大切ですが、実はそれ以上に「生活習慣」と「学びへの土台」の準備が入学後の安心につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 学用品・持ち物の準備
        </h2>

        <p className="leading-8 mb-4">
          ランドセル、筆記用具、上履きなど、学校から指定された持ち物は早めに準備し、名前を書いておきましょう。
        </p>

        <p className="leading-8 mb-4">
          また、自分の持ち物を自分で管理する練習として、お子さん自身にランドセルへの荷物の出し入れをさせてみるのもおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 生活リズムの準備
        </h2>

        <p className="leading-8 mb-4">
          小学校は登校時間が決まっています。入学の1〜2ヶ月前から、起床・就寝時間を学校生活に合わせて整えておくと安心です。
        </p>

        <p className="leading-8 mb-4">
          「自分で着替える」「時間を見て行動する」といった生活の自立も、少しずつ練習しておきましょう。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            生活リズムの準備は、学習面の準備と同じくらい重要です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 学びへの土台づくり
        </h2>

        <p className="leading-8 mb-4">
          文字や数の完璧な習得よりも、「話を聞く」「机に向かって座る」「自分で考えてみる」という姿勢を育てることが大切です。
        </p>

        <p className="leading-8 mb-4">
          わくたんのドリルのように、短時間で取り組める問題を通じて、机に向かう習慣を少しずつつけておくのも一つの方法です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦らず、できることから
        </h2>

        <p className="leading-8 mb-4">
          すべてを完璧に準備する必要はありません。今のお子さんの様子を見ながら、できることから少しずつ取り組んでいきましょう。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>学用品は早めに準備し、名前つけも忘れずに</li>
            <li>登校時間に合わせた生活リズムづくりが大切</li>
            <li>文字・数より「話を聞く」「机に向かう」姿勢を育てる</li>
            <li>完璧を求めず、できることから少しずつ</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            学びへの土台づくりに、わくたんの今日のドリルを取り入れてみませんか？
          </p>

          <Link
            href="/6"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            6歳向けドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
