import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "4歳→6歳で問題はどう変わる？わくたん12,843問を分析してみた｜わくたん",
  description:
    "わくたんが実際に生成している問題データ（4〜6歳・全12,843問）を分析。学年が上がるとどのジャンルが増え、どの力が重視されるようになるのかを、運営者自身のデータで解説します。",
  alternates: {
    canonical: "/blog/question-bank-by-age",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <ArticleSchema
        title="4歳→6歳で問題はどう変わる？わくたん12,843問を分析してみた｜わくたん"
        description="わくたんが実際に生成している問題データ（4〜6歳・全12,843問）を分析。学年が上がるとどのジャンルが増え、どの力が重視されるようになるのかを、運営者自身のデータで解説します。"
        slug="question-bank-by-age"
        datePublished="2026-08-13"
        dateModified="2026-08-13"
      />

      <div className="max-w-3xl mx-auto">

        <article className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

          <div className="mb-8">
            <p className="text-sm text-indigo-600 font-bold mb-2">
              📊 わくたんのデータで見る
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              4歳→6歳で問題はどう変わる？わくたん12,843問を分析してみた
            </h1>
            <p className="text-lg text-gray-700">
              これはよそのサイトの受け売りではなく、わくたんが実際に生成している問題データそのものを集計した結果です。
            </p>
          </div>

          <p className="leading-8 mb-4">
            わくたんは「今日のドリル」を毎日自動で更新していますが、その裏側には年齢ごとに用意された問題のストックがあります。今回、運営者自身がそのデータを集計してみました。他のどこにも載っていない、わくたん独自の数字です。
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 my-8 text-center">
            <p className="text-sm text-gray-600 mb-1">4〜6歳・全ジャンル合計</p>
            <p className="text-4xl md:text-5xl font-bold text-indigo-700">12,843<span className="text-xl ml-1">問</span></p>
            <p className="text-sm text-gray-500 mt-2">4歳：3,235問／5歳：3,785問／6歳：5,823問（2026年8月時点）</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            学年が上がるほど問題数が増える理由
          </h2>

          <p className="leading-8 mb-4">
            単純に「同じ問題を年齢別に振り分けている」わけではありません。6歳になると、4歳・5歳にはないジャンルが加わったり、同じジャンルでも問題のパターンそのものが大きく増えたりします。その結果、6歳向けの問題ストックは4歳の1.8倍近くまで膨らんでいます。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            ジャンル別・年齢別の問題数
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2 border">ジャンル</th>
                  <th className="text-right p-2 border">4歳</th>
                  <th className="text-right p-2 border">5歳</th>
                  <th className="text-right p-2 border">6歳</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">さんすう</td><td className="text-right p-2 border">600</td><td className="text-right p-2 border">590</td><td className="text-right p-2 border">1,335</td></tr>
                <tr><td className="p-2 border">とけい</td><td className="text-right p-2 border">—</td><td className="text-right p-2 border">—</td><td className="text-right p-2 border">860</td></tr>
                <tr><td className="p-2 border">ろんり</td><td className="text-right p-2 border">230</td><td className="text-right p-2 border">280</td><td className="text-right p-2 border">745</td></tr>
                <tr><td className="p-2 border">なぞなぞ</td><td className="text-right p-2 border">370</td><td className="text-right p-2 border">440</td><td className="text-right p-2 border">510</td></tr>
                <tr><td className="p-2 border">ひらがな・もじ</td><td className="text-right p-2 border">356</td><td className="text-right p-2 border">596</td><td className="text-right p-2 border">502</td></tr>
                <tr><td className="p-2 border">つみき</td><td className="text-right p-2 border">207</td><td className="text-right p-2 border">291</td><td className="text-right p-2 border">252</td></tr>
                <tr><td className="p-2 border">パターン</td><td className="text-right p-2 border">232</td><td className="text-right p-2 border">248</td><td className="text-right p-2 border">277</td></tr>
                <tr><td className="p-2 border">おかね</td><td className="text-right p-2 border">260</td><td className="text-right p-2 border">260</td><td className="text-right p-2 border">266</td></tr>
                <tr><td className="p-2 border">くらべっこ</td><td className="text-right p-2 border">260</td><td className="text-right p-2 border">260</td><td className="text-right p-2 border">240</td></tr>
                <tr><td className="p-2 border">なかまわけ</td><td className="text-right p-2 border">240</td><td className="text-right p-2 border">240</td><td className="text-right p-2 border">240</td></tr>
                <tr><td className="p-2 border">なかまはずれ</td><td className="text-right p-2 border">240</td><td className="text-right p-2 border">240</td><td className="text-right p-2 border">240</td></tr>
                <tr><td className="p-2 border">おなじかたち</td><td className="text-right p-2 border">220</td><td className="text-right p-2 border">200</td><td className="text-right p-2 border">220</td></tr>
                <tr><td className="p-2 border">すいり</td><td className="text-right p-2 border">20</td><td className="text-right p-2 border">140</td><td className="text-right p-2 border">136</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mb-8">
            ※ひらがな・もじは、5〜6歳向けの「もじ（文章問題）」ジャンルを合算しています。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            とけいは、なぜ6歳から？
          </h2>

          <p className="leading-8 mb-4">
            表を見て一番分かりやすいのが「とけい」です。4歳・5歳向けには一問もなく、6歳になった瞬間に860問という、さんすうに次ぐボリュームで登場します。
          </p>

          <p className="leading-8 mb-4">
            これは「6歳・小学校入学が近づく時期に、時計を読む力が生活の中で急に必要になる」という考えに基づいた設計です。時間割に沿って行動する、休み時間の終わりを意識する、といった小学校生活を見据え、あえて他のジャンルより早いタイミングで問題数を厚くしています。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            さんすう・ろんりは6歳で急拡大する
          </h2>

          <p className="leading-8 mb-4">
            さんすうは4歳600問・5歳590問とほぼ横ばいですが、6歳になると1,335問と2倍以上に増えます。ろんりも230問→280問→745問と、6歳で一気に厚みが増しています。
          </p>

          <p className="leading-8 mb-4">
            これは、5歳までは「数える」「くらべる」といった基礎的な感覚を育てる問題が中心なのに対し、6歳では「くり上がり・くり下がり」や「複数の手がかりから答えを導く」といった、一段階抽象的な思考が必要な問題が増えるためです。同じ「さんすう」というジャンル名でも、中身の難易度構成はかなり違います。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
            <p className="font-bold mb-2">
              💡 保護者の方へ
            </p>
            <p>
              「うちの子はさんすうが得意だから6歳の問題も楽勝」と思っていたら、5歳と6歳では問題の質そのものが変わっている、というケースがあります。ジャンル名だけで難易度を判断せず、実際に一度取り組ませてみるのがおすすめです。
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            ほぼ横ばいのジャンルは「土台」
          </h2>

          <p className="leading-8 mb-4">
            なかまわけ・なかまはずれは、4〜6歳を通じて240問でほぼ一定です。おかね・くらべっこ・おなじかたちも大きくは変わりません。
          </p>

          <p className="leading-8 mb-4">
            これらは年齢が上がっても難易度を急激に変えるより、繰り返し取り組むことで定着させたい「土台」にあたるジャンルだと考えています。派手に問題数を増やすジャンルと、じっくり定着させるジャンルを意図的に分けているということでもあります。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            一番新しいジャンル「すいり」
          </h2>

          <p className="leading-8 mb-4">
            2026年8月に追加したばかりの「すいり」（原因と結果を考える・複数の手がかりから答えを導く問題）は、追加直後は4歳10問・5歳50問・6歳42問というごく小さな規模でしたが、その後の拡充で4歳20問・5歳140問・6歳136問まで増えました。
          </p>

          <p className="leading-8 mb-4">
            特に5歳・6歳向けは、登場人物を3人→4人に増やしたり、比べる観点（背の高さ・重さ・速さ・値段）を増やしたりすることで、同じ「推理する」という力を色々な角度から試せるようにしています。他のジャンルと同じくらいの厚みに育っていく過程を、この記事でそのまま記録していく予定です。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
            よく聞かれること
          </h2>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold">Q. 「今日のドリル」で毎日同じ問題が出ることはある？</p>
              <p className="leading-7 text-gray-700">A. これだけの問題ストックから日替わりで選んでいるため、同じ組み合わせが連続する可能性はかなり低くなっています。ジャンルごとの問題数が少ないうちは重複しやすいので、今後も継続的に問題を増やしていきます。</p>
            </div>
            <div>
              <p className="font-bold">Q. この数字は今後も増えますか？</p>
              <p className="leading-7 text-gray-700">A. はい。特に「すいり」のような新しいジャンルは今後も拡充していく予定です。増えるたびに、この記事の数字も更新します。</p>
            </div>
            <div>
              <p className="font-bold">Q. 学年ごとの問題数の違いは、どうやって決めていますか？</p>
              <p className="leading-7 text-gray-700">A. 年齢ごとに「今伸ばしたい力」を先に決め、その力に関わるジャンルを重点的に拡充する形で作っています。単純に全ジャンルを均等に増やしているわけではありません。</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
            公開日：2026年8月　/　最終更新日：2026年8月<br />
            本記事は、わくたんが実際に保持している問題データを運営者自身が集計したものです。集計方法や数値は今後の更新で変動する可能性があります。
          </div>

          <RelatedArticles currentSlug="question-bank-by-age" />

        </article>

        <div className="mt-8 text-center space-x-3">
          <Link
            href="/categories"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
          >
            ← 記事カテゴリ一覧に戻る
          </Link>
          <Link
            href="/"
            className="inline-block bg-white border border-indigo-300 text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition"
          >
            今日のドリルを見る
          </Link>
        </div>

      </div>

    </main>
  );
}
