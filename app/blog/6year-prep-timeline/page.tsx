import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "小学校入学準備、いつ何をすればいい？月ごとの目安｜わくたん",
  description:
    "小学校入学準備を月ごとに整理して解説。いつ・何をすればいいか迷う保護者向けに、無理のないタイムラインを紹介します。",
  alternates: {
    canonical: "/blog/6year-prep-timeline",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="小学校入学準備、いつ何をすればいい？月ごとの目安｜わくたん"
        description="小学校入学準備を月ごとに整理して解説。いつ・何をすればいいか迷う保護者向けに、無理のないタイムラインを紹介します。"
        slug="6year-prep-timeline"
        datePublished="2026-07-01"
        dateModified="2026-08-10"
      />


      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🗓️</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            小学校入学準備、いつ何をすればいい？月ごとの目安
          </h1>

          <p className="text-lg text-gray-700">
            直前で焦らないための、ゆるやかなタイムライン
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「入学準備、結局いつから何を始めればいいの？」という疑問に、月ごとの目安でお答えします。
        </p>

        <p className="text-lg leading-8 mb-6">
          ここで紹介するのはあくまで目安です。焦らず、できるところから進めていただければと思います。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          秋ごろ：情報収集と生活リズムの見直し
        </h2>

        <p className="leading-8 mb-4">
          就学時健診の案内が届く時期です。あわせて、起床・就寝時間を少しずつ小学校生活に近づけていくとよいでしょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          冬ごろ：学用品の準備を始める
        </h2>

        <p className="leading-8 mb-4">
          ランドセルや文房具など、学用品の準備を始める家庭が増える時期です。名前つけも、余裕を持って少しずつ進めておくと安心です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            持ち物は一気に揃えようとせず、リストを作って少しずつチェックしていくのがおすすめです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1〜2月ごろ：生活習慣の総仕上げ
        </h2>

        <p className="leading-8 mb-4">
          「自分で着替える」「時間を見て行動する」など、生活面の自立を意識する時期です。学用品の準備よりも、実はこちらの方が入学後の安心感につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          3月ごろ：学びへの土台づくり
        </h2>

        <p className="leading-8 mb-4">
          文字や数の完璧な習得よりも、「話を聞く」「机に向かう」という姿勢づくりを意識しましょう。わくたんのような短時間のドリルを習慣にしておくのも一つの方法です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          4月：入学
        </h2>

        <p className="leading-8 mb-4">
          入学後は、学校からの新しい情報も多く、保護者の方も慌ただしくなりがちです。事前の準備がしてあれば、この時期の負担を減らすことができます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          遅れていても焦らなくて大丈夫
        </h2>

        <p className="leading-8 mb-4">
          このタイムラインより準備が遅れていても、多くのことは直前からでも十分間に合います。完璧を目指さず、できることから進めましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          これから意識したいこと（生活面の自立）
        </h2>

        <p className="leading-8 mb-4">
          まだ6歳ではないので、実際に直近の入学準備をしているわけではありませんが、上の子が5歳になった今から考えていることはあります。特にこれから意識したいのは、生活面の自立です。
        </p>

        <ul className="list-disc ml-6 space-y-2 leading-7 text-gray-700 mb-4">
          <li>朝、自分で着替える</li>
          <li>自分の荷物を確認する</li>
          <li>脱いだものを片付ける</li>
          <li>困ったときに「困っています」と伝える</li>
          <li>トイレなど必要なことを先生に伝えられる</li>
        </ul>

        <p className="leading-8 mb-4">
          学習面では、ひらがな・数字を無理なく確認しながら、少しずつ「問題を読んで、自分で考える」経験を増やしたいと思っています。また、入学直前になって急に生活リズムを変えるのではなく、朝起きる時間や寝る時間を少しずつ整えていくことも意識したいです。「小学校に入るまでに全部できるようにする」というより、あと1年くらいかけて、できることを少しずつ増やしていくイメージです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よく聞かれること
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 生活面の自立、どこから手をつければいい？</p>
            <p className="leading-7 text-gray-700">A. 全部を一度に始める必要はありません。朝の着替えなど、毎日必ず発生する場面から一つずつ「自分でやってみる」時間を作るのがおすすめです。</p>
          </div>
          <div>
            <p className="font-bold">Q. 「困っています」と言えない子には、どう練習させればいい？</p>
            <p className="leading-7 text-gray-700">A. すぐに親が答えを出すのではなく、「どうしたの？」と一歩待って聞く場面を日常の中で増やすのが効果的です。焦らず繰り返すうちに、少しずつ言葉にできるようになっていきます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 生活リズムはいつ頃から整え始めるべき？</p>
            <p className="leading-7 text-gray-700">A. 入学の1〜2ヶ月前を目安に、起床・就寝時間を学校生活に合わせて整え始めると、直前の負担が少なくなります。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            5歳の今からできることとして、朝の準備を少しずつ自分でやってもらったり、ドリルも「親が全部教える」のではなく「まず自分で考えてみる」という時間を作ったりしています。入学前の最後の数ヶ月で焦って詰め込むより、1年前くらいから生活の中に少しずつ取り入れておく方が、子どもにとっても親にとっても負担が少ないと感じています。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            📌 覚えておきたいこと
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>秋は情報収集と生活リズムの見直しから</li>
            <li>冬に学用品の準備、1〜2月に生活習慣の総仕上げ</li>
            <li>3月は「学びへの土台づくり」を意識する</li>
            <li>タイムラインより遅れていても、直前からで十分間に合う</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月　/　最終更新日：2026年8月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🧩 今日のチャレンジ
          </h3>

          <p className="mb-3">
            学びの土台づくりに、今日のドリルを取り入れてみませんか？
          </p>

          <Link
            href="/6"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            6歳向けドリルを見る
          </Link>

        </div>

        <RelatedArticles currentSlug="6year-prep-timeline" />

      </article>

    </main>
  );
}
