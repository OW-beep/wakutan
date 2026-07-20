import Link from "next/link";

export const metadata = {
  title: "夏休みの家庭学習スケジュール例｜わくたん",
  description:
    "幼児の夏休み中の家庭学習スケジュール例を紹介。1週間単位で無理なく続けられる無料ドリルの活用プランをまとめました。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌻</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            夏休みの家庭学習スケジュール例
          </h1>

          <p className="text-lg text-gray-700">
            1週間の無料ドリル活用プラン
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          夏休みは生活リズムが崩れやすく、「毎日何をすればいいかわからない」と悩む保護者の方も多い時期です。
        </p>

        <p className="text-lg leading-8 mb-6">
          ここでは、幼児期のお子さんが無理なく続けられる、1週間単位の家庭学習スケジュール例を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          夏休みの学習で大切にしたいこと
        </h2>

        <p className="leading-8 mb-4">
          夏休みは「たくさん詰め込む」よりも、生活リズムを保ちながら少しずつ続けることが大切です。
        </p>

        <p className="leading-8 mb-4">
          普段より時間があるからこそ、遊びと学びのバランスを意識してみましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1週間のスケジュール例
        </h2>

        <p className="leading-8 mb-4">
          月〜金曜日は、朝のうちに「今日のドリル」に取り組む時間を5〜10分作りましょう。午前中は頭がすっきりしていて集中しやすい時間帯です。
        </p>

        <p className="leading-8 mb-4">
          土日はドリルをお休みにして、外遊びや家族との時間を優先するなど、メリハリをつけるのもおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「毎日必ず」ではなく「平日だけ」など、無理のないルールを決めておくと続けやすくなります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          印刷してまとめて用意しておく
        </h2>

        <p className="leading-8 mb-4">
          外出や帰省で忙しい日が続く夏休みは、週末にまとめて印刷しておくと便利です。
        </p>

        <p className="leading-8 mb-4">
          🖨印刷機能を使って数日分をストックしておけば、旅行先やおじいちゃん・おばあちゃんの家でも取り組めます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          長期休みだからこそできることも
        </h2>

        <p className="leading-8 mb-4">
          普段忙しくて後回しになりがちな「じっくり考える問題」や「苦手なジャンル」に、時間のある夏休みに挑戦してみるのもおすすめです。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>夏休みは詰め込みすぎず、生活リズムを保ちながら続けることが大切</li>
            <li>平日の午前中に5〜10分など、無理のないルールを決める</li>
            <li>外出が多い時期は印刷してまとめてストックしておくと便利</li>
            <li>時間のある時こそ苦手なジャンルにじっくり取り組むチャンス</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            夏休み用に、今日のドリルを数日分まとめて印刷してみませんか？
          </p>

          <Link
            href="/print"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            印刷して使う
          </Link>

        </div>

      </article>

    </main>
  );
}
