import Link from "next/link";

export const metadata = {
  title: "きょうだいで学年差がある場合の家庭学習の進め方｜わくたん",
  description:
    "4歳と6歳など、きょうだいで年齢差がある場合の家庭学習の進め方を紹介。それぞれのペースを尊重しながら両立するための工夫をまとめました。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            きょうだいで学年差がある場合の家庭学習の進め方
          </h1>

          <p className="text-lg text-gray-700">
            上の子・下の子、それぞれのペースを大切に
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          きょうだいで年齢が離れていると、「同じ時間に、それぞれ違うことをさせるのが大変」と感じることも多いのではないでしょうか。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          同じ時間に、それぞれのレベルで
        </h2>

        <p className="leading-8 mb-4">
          無理に同じ内容に揃える必要はありません。「学習タイム」として時間だけを揃え、上の子は6歳向け、下の子は4歳向けのドリルに取り組む、というスタイルでも十分です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          上の子が下の子に教える経験も学びになる
        </h2>

        <p className="leading-8 mb-4">
          簡単な問題であれば、上の子に「教えてあげて」と頼むのもおすすめです。人に教える経験は、自分の理解をより深める効果があるといわれています。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「先生役」を任せると、上の子のやる気アップにもつながることがあります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          下の子は「見て学ぶ」だけでも十分
        </h2>

        <p className="leading-8 mb-4">
          下の子がまだ内容を理解できなくても、上の子が机に向かう姿を見ること自体が良い刺激になります。無理に同じ課題をさせる必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1対1の時間も意識的に作る
        </h2>

        <p className="leading-8 mb-4">
          きょうだいがいると、どうしても一人ひとりと向き合う時間が減りがちです。短時間でも「今日はあなたの番」という1対1の時間を意識的に作ると、それぞれの自己肯定感につながります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>同じ時間に、それぞれのレベルのドリルに取り組むスタイルでも十分</li>
            <li>上の子に「教えてあげて」と頼むと、教える側の理解も深まる</li>
            <li>下の子は上の子の様子を見るだけでも良い刺激になる</li>
            <li>短時間でも1対1の時間を意識的に作ることが大切</li>
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
            上の子・下の子、それぞれの年齢に合ったドリルを探してみませんか？
          </p>

          <Link
            href="/articles"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            年齢別の記事を見る
          </Link>

        </div>

      </article>

    </main>
  );
}
