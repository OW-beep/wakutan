import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "小学校入学準備チェックリスト・学用品一覧｜わくたん",
  description:
    "小学校入学前に確認しておきたい準備を、学用品一覧・生活習慣・学習面の3つの観点からチェックリスト形式で紹介します。",
  alternates: {
    canonical: "/blog/school-checklist",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="小学校入学準備チェックリスト・学用品一覧｜わくたん"
        description="小学校入学前に確認しておきたい準備を、学用品一覧・生活習慣・学習面の3つの観点からチェックリスト形式で紹介します。"
        slug="school-checklist"
        datePublished="2026-06-01"
        dateModified="2026-09-18"
      />


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
          ① 学用品・持ち物の準備【一覧】
        </h2>

        <p className="leading-8 mb-4">
          学校から指定された持ち物は早めに準備し、名前を書いておきましょう。一般的に準備することが多いものを一覧にまとめました（学校によって指定が異なるため、最終的には入学説明会の案内を確認してください）。
        </p>

        <p className="leading-8 mb-2 font-bold">🎒 学校生活の基本アイテム</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
          <li>ランドセル（または指定の通学バッグ）</li>
          <li>上履き・上履き入れ</li>
          <li>体操服・体操服袋</li>
          <li>給食袋（コップ・ナフキン・マスクなど）</li>
          <li>ハンカチ・ティッシュ</li>
          <li>防災頭巾・防災頭巾カバー（学校による）</li>
        </ul>

        <p className="leading-8 mb-2 font-bold">✏️ 文房具・学用品</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
          <li>筆箱・鉛筆（2B〜4B指定が多い）・消しゴム</li>
          <li>下敷き・赤鉛筆</li>
          <li>連絡帳・連絡袋</li>
          <li>お道具箱（はさみ・のり・クレヨンなど）</li>
          <li>算数セット</li>
        </ul>

        <p className="leading-8 mb-2 font-bold">👕 生活・身の回りのもの</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
          <li>通学用の服・雨具（傘・レインコート）</li>
          <li>名前シール・お名前スタンプ（持ち物すべてに記名が必要になります）</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            指定品・自由に選べるものは学校によって差が大きいので、この一覧は「だいたいの全体像をつかむため」の目安として使い、詳細は入学説明会の案内で確認するのが安心です。
          </p>
        </div>

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
          ④ 心の準備
        </h2>

        <p className="leading-8 mb-4">
          新しい環境への期待と不安は、大人が思う以上に子どもの中で入り混じっています。「小学校に行くのが楽しみ」という気持ちだけでなく、「うまくやれるかな」という不安も自然な感情です。
        </p>

        <p className="leading-8 mb-4">
          「分からないことがあったら先生に聞いていいんだよ」と伝えておくだけでも、子どもの安心感につながります。完璧を求めるより、「困ったときに助けを求めていい」と知っていることの方が、入学後の心の支えになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦らず、できることから
        </h2>

        <p className="leading-8 mb-4">
          すべてを完璧に準備する必要はありません。今のお子さんの様子を見ながら、できることから少しずつ取り組んでいきましょう。
          「いつ・何を準備すればいいか」を時期ごとに知りたい方は、
          <Link href="/blog/6year-prep-timeline" className="text-orange-600 font-bold hover:underline">月ごとの入学準備の目安</Link>
          もあわせてご覧ください。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          気になる疑問Q&A
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. ひらがなが完璧に読めなくても大丈夫？</p>
            <p className="leading-7 text-gray-700">A. 入学時点で完璧に読み書きできる必要はありません。学校でも一から丁寧に教えてもらえるので、興味を持って取り組める土台があれば十分です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 何ヶ月前から準備を始めればいい？</p>
            <p className="leading-7 text-gray-700">A. 生活リズムの調整は1〜2ヶ月前から、学びへの土台づくりは半年〜1年前からゆっくり取り組むのがおすすめです。直前に詰め込むより、日常の中に少しずつ取り入れる方が負担が少なくなります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 人見知りが強い子でも大丈夫？</p>
            <p className="leading-7 text-gray-700">A. 心配な気持ちは自然なことです。「分からないことは聞いていい」と伝えておくこと、そして家庭で「自分の気持ちを言葉にする」練習を積んでおくことが、少しずつ安心感につながります。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            やっておいてよかったと感じたのは「生活面の準備」でした。朝の支度を自分で進めること、時間を意識すること、話を最後まで聞くことなど、学習面よりも毎日の生活を自分で回せる力の方が安心感につながりました。逆に「先取り学習」はそこまで急がなくてもよかったと感じています。計算や漢字を早く進めるよりも、「考えることに慣れる」「最後までやり切る」ことの方が、その後に効いてきました。上の子を見ていても、「できる・できない」より「取り組む姿勢」の方が入学後に差が出ると感じています。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🍀 今日学んだこと
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>学用品は早めに準備し、名前つけも忘れずに</li>
            <li>登校時間に合わせた生活リズムづくりが大切</li>
            <li>文字・数より「話を聞く」「机に向かう」姿勢を育てる</li>
            <li>完璧を求めず、できることから少しずつ</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年6月　/　最終更新日：2026年9月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🎁 今日のおすすめ
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

        <RelatedArticles currentSlug="school-checklist" />

      </article>

    </main>
  );
}
