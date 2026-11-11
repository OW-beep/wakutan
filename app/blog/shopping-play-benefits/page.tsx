import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import ArticleByline from "@/app/components/ArticleByline";
import ArticleToc from "@/app/components/ArticleToc";
import ArticleNextSteps from "@/app/components/ArticleNextSteps";
import ArticleSummary from "@/app/components/ArticleSummary";
import FavoriteButton from "@/app/components/FavoriteButton";
import AdUnit from "@/app/components/AdUnit";
import { IN_ARTICLE_AD_SLOT } from "@/app/data/adSlots";
import { searchRakutenItems } from "@/lib/rakuten";
import RakutenProducts from "@/app/components/RakutenProducts";

export const metadata = {
  title: "買い物ごっこで育つ力",
  description:
    "子どもに人気の買い物ごっこで育つ力を解説。数の感覚やコミュニケーション力を楽しく育てる遊び方を紹介します。",
  alternates: {
    canonical: "/blog/shopping-play-benefits",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("ままごと レジ おもちゃ", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="買い物ごっこで育つ力｜わくたん"
        description="子どもに人気の買い物ごっこで育つ力を解説。数の感覚やコミュニケーション力を楽しく育てる遊び方を紹介します。"
        slug="shopping-play-benefits"
        datePublished="2026-08-02"
        dateModified="2026-10-10"
      />


      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🛒</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            買い物ごっこで育つ力
          </h1>

          <p className="text-lg text-gray-700">
            レジ遊びは算数とコミュニケーションの練習になる
          </p>

        </div>

    <ArticleByline dateModified="2026-10-10" />

    <ArticleSummary
      worry="買い物ごっこを、どう遊べば数やお金の学びになるのか知りたいです。"
      answer="特別な道具はいりません。家にあるおもちゃや空き箱で、「これをください」「はい、どうぞ」のやり取りを楽しむだけで十分です。最初から金額の計算はさせず、「りんごを3つください」と個数を数える遊びから始めましょう。"
      steps={["家にあるおもちゃの食べ物や空き箱を並べて、お店屋さんとお客さんに分かれる", "「りんごを3つください」と個数を頼んで、一緒に数える", "値札は紙に数字を書くだけ。細かい金額は、最初から決めない", "子どもが遊び方を変えても、そのまま付き合う"]}
    />

    <ArticleToc
      items={[{"id": "section-1", "text": "数の感覚が育つ"}, {"id": "section-2", "text": "コミュニケーション力が育つ"}, {"id": "section-3", "text": "役割を演じることで想像力も育つ"}, {"id": "section-4", "text": "年齢によって遊び方を変える"}, {"id": "section-5", "text": "はじめかたの具体例"}, {"id": "section-6", "text": "家庭でできる工夫"}, {"id": "section-7", "text": "わが家の買い物ごっこ"}, {"id": "section-8", "text": "遊びの中で感じた変化"}, {"id": "section-9", "text": "準備と遊び方の工夫"}, {"id": "section-10", "text": "よくある質問"}]}
    />

        <p className="text-lg leading-8 mb-6">
          おもちゃのレジやお財布を使った買い物ごっこは、多くの子どもが大好きな遊びです。実はこの遊び、数やコミュニケーションの力を育てる効果があります。
        </p>

        <h2 id="section-1" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数の感覚が育つ
        </h2>

        <p className="leading-8 mb-4">
          「これは100円です」「あわせて300円になります」というやりとりの中で、自然と数を扱う経験が増えます。
        </p>

        <h2 id="section-2" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          コミュニケーション力が育つ
        </h2>

        <p className="leading-8 mb-4">
          「いらっしゃいませ」「ありがとうございました」という言葉のやりとりは、社会的な会話のパターンを学ぶ良い機会になります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            店員役・お客さん役を交代すると、両方の立場での会話を経験できます。
          </p>
        </div>

        <h2 id="section-3" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          役割を演じることで想像力も育つ
        </h2>

        <p className="leading-8 mb-4">
          「お店屋さんだったら、どう言うかな？」と想像しながら演じる経験は、ごっこ遊び全般に共通する想像力の発達にもつながります。
        </p>

        <h2 id="section-4" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢によって遊び方を変える
        </h2>

        <p className="leading-8 mb-4">
          3〜4歳ごろは、まだ細かい金額のやりとりは難しい時期です。この年齢では「これください」「はい、どうぞ」というシンプルな受け渡しだけでも十分に楽しめます。数を意識させたい場合は「りんごを2つください」のように、個数を指定するところから始めるのがおすすめです。
        </p>

        <p className="leading-8 mb-4">
          5〜6歳になると、実際に硬貨を使ったやりとりに挑戦できるようになります。「100円のジュースを買うのに、10円玉を何枚出せばいい？」のように、少しずつ計算の要素を混ぜていくと、遊びながら自然に数の感覚が深まっていきます。
        </p>

        <h2 id="section-5" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          はじめかたの具体例
        </h2>

        <p className="leading-8 mb-4">
          特別な道具がなくても、身の回りのもので今すぐ始められます。空き箱やペットボトルのキャップを商品に見立てたり、折り紙を切っておもちゃのお金を手作りしたりするだけで、立派な「お店」が完成します。最初は親が店員役になって見本を見せ、次に子どもと役を交代してみましょう。両方の立場を経験することで、会話のパターンがより自然に身についていきます。
        </p>

        <h2 id="section-6" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          家庭でできる工夫
        </h2>

        <p className="leading-8 mb-4">
          本物の商品パッケージを空き箱で用意したり、手作りのお金を使ったりすると、より本格的な買い物ごっこが楽しめます。わくたんのおかね問題と組み合わせるのもおすすめです。
        </p>

        <h2 id="section-7" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わが家の買い物ごっこ
        </h2>

        <p className="leading-8 mb-4">
          家にあるおもちゃの食べ物や空き箱などを並べて、お店屋さんとお客さんに分かれて遊ぶことがあります。上の子がお店屋さんになったり、親がお客さんになったりして、商品を選んで渡すという簡単な遊びです。
        </p>

        <p className="leading-8 mb-4">
          商品に値札をつけることもありますが、最初から細かい金額を決めているわけではありません。「これをください」「はい、どうぞ」といったやり取りを楽しむことが中心です。下の子も近くにいるときは、おもちゃを並べたり、商品を渡したりするだけでも参加できます。
        </p>

<h2 id="section-8" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          遊びの中で感じた変化
        </h2>

        <p className="leading-8 mb-4">
          商品を渡すときに、数を数えるようになったことがあります。例えば、おもちゃの果物を3個並べて「りんごを3つください」と頼むと、一つずつ数えながら渡してくれることがありました。最初は一度に全部渡してしまうこともありましたが、「一つ、二つ、三つ」と一緒に数えると、少しずつ数と実物を対応させるようになりました。
        </p>

        <p className="leading-8 mb-4">
          また、値札を見て「こっちのほうが高いの？」と聞くこともあります。まだお金の計算ができるわけではありませんが、数字や数が買い物の場面でも使われていることに気づくきっかけになっていると思います。
        </p>

<h2 id="section-9" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          準備と遊び方の工夫
        </h2>

        <p className="leading-8 mb-4">
          特別な道具を買いそろえず、家にあるおもちゃや空き箱を使うようにしています。値札も紙に数字を書くだけですし、お金の代わりに紙切れやおもちゃのコインを使うこともあります。最初から値段の計算をさせると難しくなるので、まずは商品を選ぶ、数を数える、渡すという流れを楽しむようにしています。
        </p>

        <p className="leading-8 mb-4">
          また、親が遊び方を決めすぎないことも意識しています。子どもが急にお店屋さんから配達屋さんに変えてしまっても、そのまま遊びに付き合います。準備に時間をかけるより、思いついたときにすぐ始められるくらいの簡単さが、わが家には合っています。
        </p>

<h2 id="section-10" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. おつりの計算までさせるべき？</p>
            <p className="leading-7 text-gray-700">A. 無理に正確さを求める必要はありません。「だいたい」の感覚を楽しむ段階でも十分効果があります。正確なおつり計算は、わくたんの<Link href="/6/okane" className="text-orange-600 font-bold hover:underline">6歳向けおかね問題</Link>のような、ひきざんを学んだあとの練習で少しずつ身につけていけば大丈夫です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 兄弟で年齢差があるときは？</p>
            <p className="leading-7 text-gray-700">A. 年上の子に店員役、年下の子にお客さん役を任せると、それぞれのレベルに合った関わり方ができます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 最初から、金額の計算をさせた方がいいですか？</p>
            <p className="leading-7 text-gray-700">A. 最初から値段の計算をさせると難しくなるので、わが家では、まず商品を選ぶ、数を数える、渡す、という流れを楽しんでいます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 遊び方を、子どもが変えてしまいます。</p>
            <p className="leading-7 text-gray-700">A. わが家でも、子どもが急にお店屋さんから配達屋さんに変えることがあります。決めすぎず、そのまま遊びに付き合っています。</p>
          </div>
        </div>

<div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            スーパーでは「どっちが多い？」「何個入ってる？」といったやり取りをよくしています。上の子（5歳）は考えて説明するようになり、下の子（2歳）も「多い・少ない」を感覚で覚えてきました。特別な教材がなくても、買い物という日常の中で自然と学びになっているのを実感します。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🔍 振り返りポイント
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>買い物ごっこは数の感覚を自然に育てる遊び</li>
            <li>「いらっしゃいませ」などの言葉のやりとりでコミュニケーション力も育つ</li>
            <li>店員役・お客さん役を交代すると学びの幅が広がる</li>
            <li>手作りのお金や空き箱を使うと、より本格的に楽しめる</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年8月2日　/　最終更新日：2026年10月10日
        </div>

                <ArticleNextSteps
          drills={[{"href": "/4/okane", "label": "4歳向けおかね問題を見る", "desc": "買い物ごっこで親しんだ数の感覚を、今日のおかね問題でも。"}, {"href": "/5/okane", "label": "5歳向けおかね問題", "desc": "お買い物のたし算・おつりの問題。"}, {"href": "/6/okane", "label": "6歳向けおかね問題", "desc": "ひきざんを学んだあとの、おつりの練習に。"}]}
          articles={[{"slug": "allowance-timing", "desc": "お小遣いは、いつから？日常の買い物でできる準備。"}, {"slug": "money-education-age", "desc": "子どものお金の教育は、何歳から？"}, {"slug": "number-play", "desc": "準備いらずで、生活の中でできる数遊び。"}, {"slug": "outing-learning-games", "desc": "お出かけ先での学び。何でも学びにしすぎない関わり方。"}]}
        />

        <RakutenProducts items={products} title="お店屋さんごっこに使えるレジ・おもちゃ" />
        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/shopping-play-benefits" title="買い物ごっこで育つ力" />
        <RelatedArticles currentSlug="shopping-play-benefits" />

      </article>

    </main>
  );
}
