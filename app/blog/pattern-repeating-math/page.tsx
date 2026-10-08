import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import FavoriteButton from "@/app/components/FavoriteButton";
import AdUnit from "@/app/components/AdUnit";
import { IN_ARTICLE_AD_SLOT } from "@/app/data/adSlots";

export const metadata = {
  title: "くりかえしパターンは算数の土台？数字がわからなくても取り組める理由【研究】",
  description:
    "「りんご・ぶどう・りんご」のようなくりかえしパターンの力は、幼児期の算数の知識と関連するのか。Rittle-Johnson ら（2019）の研究を原文で確認して整理し、数字を使わずに取り組める理由と、わくたんがパターン問題を絵に変えた背景も説明します。",
  alternates: {
    canonical: "/blog/pattern-repeating-math",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="くりかえしパターンは算数の土台？数字がわからなくても取り組める理由【研究】"
        description="「りんご・ぶどう・りんご」のようなくりかえしパターンの力は、幼児期の算数の知識と関連するのか。Rittle-Johnson ら（2019）の研究を原文で確認して整理し、数字を使わずに取り組める理由と、わくたんがパターン問題を絵に変えた背景も説明します。"
        slug="pattern-repeating-math"
        datePublished="2026-10-08"
        dateModified="2026-10-08"
      />

      <article className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">
          <div className="text-5xl mb-3">🍎</div>
          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            くりかえしパターンは算数の土台？数字がわからなくても取り組める理由【研究】
          </h1>
          <p className="text-lg text-gray-700">
            「りんご・ぶどう・りんご・ぶどう…」の次は？ 幼児期のパターン理解と算数の研究を整理しました
          </p>
        </div>

        <p className="text-lg leading-8 mb-6">
          「1・3・1・3・□」のような数字のくりかえしは、数の感覚がまだ育っていない子には難しく感じられます。一方、「りんご・ぶどう・りんご・ぶどう・□」のような絵のくりかえしなら、数字を知らなくても取り組めます。この記事では、くりかえしパターンを見つける力と、算数の関係について、論文の内容を整理します。
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-6">
          <p className="font-bold mb-2">この記事の読み方</p>
          <p className="leading-7">
            この記事は、論文の原文や、文部科学省の資料で内容を確認できたことだけを書いています。「わかったこと」と「言えないこと（研究の限界）」を分け、わくたん自身の考え方や一般的な遊びの例は、研究の結果とは別にそのことがわかるように書きました。子どもの発達には個人差があり、研究結果がそのまま目の前のお子さんに当てはまるとは限りません。気になるときは、園の先生や専門機関にも相談してください。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          先に結論
        </h2>

        <ul className="list-disc ml-6 space-y-2 leading-8 mb-4">
            <li>米国の就学前の子ども73人を調べた研究では、くりかえしパターンの力は、同じ時期の算数の知識と、約7か月後の算数の知識を、空間スキルとは別に予測していました。</li>
            <li>最初の算数の知識を統計的に取りのぞいても、くりかえしパターンの力は、あとの算数の知識を予測しました。</li>
            <li>研究者は、くりかえしパターンの課題は、数字の知識がなくても取り組めると説明しています。</li>
            <li>一方で、この研究は「関連」を調べたもので、パターンを練習すれば算数が伸びるとまでは言えません。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          パターン（くりかえし）ってなに？
        </h2>

        <p className="leading-8 mb-4">
          Rittle-Johnson らの論文は、パターンの力を、図形や音の並びのような「予測できる並び」に気づいて使う力と説明しています。幼児には、まとまり（単位）がくりかえされる「くりかえしパターン」（例：丸・丸・四角・丸・丸・四角）が使われます。
        </p>

        <p className="leading-8 mb-4">
          同論文が紹介している先行研究によると、子どもは、まず「赤・青・赤・青」のような2つのくりかえし（AB）を理解し、そのあと、3つや4つのまとまり（ABB、AABB など）を理解するようになります。就学前の終わりには、多くの子が、パターンのぬけているところを見つけたり、続きを作ったりできるようになるそうです。
        </p>

        <p className="leading-8 mb-4">
          なお、同論文は、「ふえていくパターン（growing patterns）」については、この研究の対象外で、さらに研究が必要だとしています。「2・4・6・8…」のような数の並びは、わくたんでは6歳向けに用意しています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          研究：くりかえしパターンの力と、算数の知識
        </h2>

        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 my-6">
          <p className="font-bold text-lg mb-1">📚 Rittle-Johnson, Zippert, Boice（2019）</p>
          <p className="text-sm text-gray-600 mb-3">出典：The roles of patterning and spatial skills in early mathematics development. Early Childhood Research Quarterly, 46, 166–178. doi:10.1016/j.ecresq.2018.03.006</p>
          <p className="font-bold mb-1">わかったこと</p>
          <ul className="list-disc ml-6 space-y-1 leading-7 mb-3">
            <li>米国の6つの就学前施設に通う子ども（平均4歳7か月、4歳0か月〜5歳2か月）のうち、データがそろった73人を調べました。プレキンダー（就学前の最終年）の最初の時期と、約7か月後に、算数の知識を測りました。</li>
            <li>最初の時期に、くりかえしパターンの力、空間スキル、一般的な認知の力も測りました。</li>
            <li>くりかえしパターンの力と空間スキルは関連していて、どちらも、同じ時期の算数の知識と、7か月後の算数の知識を、それぞれ独自に予測していました。</li>
            <li>最初の算数の知識を統計的に取りのぞいても、くりかえしパターンの力は、7か月後の算数の知識を予測しました。空間スキルには、同じ結果は見られませんでした。</li>
            <li>有意な予測になったのは、先生が教室で使うような課題（「つぎにくるのはどれ？」「ぬけているのはどれ？」「続きを作る」「同じパターンを作る」。AB・ABB・ABC・AABBなど）で測ったパターンの得点でした。</li>
          </ul>
          <p className="font-bold mb-1">この研究の限界</p>
          <ul className="list-disc ml-6 space-y-1 leading-7">
            <li>73人と小さな規模で、米国の就学前の子どもが対象です。論文自身が、結果は「関連」であり、原因を示すものではないと述べています。</li>
            <li>研究者が作った課題（研究用のパターン課題）では、36%の子が1問も解けず、結果がうまく出なかったと述べています。</li>
            <li>著者らは、パターンや空間スキルの訓練が算数を伸ばすかを確かめるには、さらに実験研究が必要だと述べています。</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          パターンは算数で大事？議論もあります
        </h2>

        <p className="leading-8 mb-4">
          同論文によると、米国では、算数の基準でパターンの扱いが議論されています。2008年の National Mathematics Advisory Panel は、パターンは学校代数の主要な話題ではないと結論づけ、そのあと作られた Common Core State Standards にも、パターンは内容の基準として入りませんでした。
        </p>

        <p className="leading-8 mb-4">
          一方、同論文は、くりかえしパターンを幼児期に扱うことの意味を、数字の知識を必要とせずに「予測できる並び」に気づき、説明する機会になるためだと述べています。また、論文が紹介している先行研究（Kidd ら 2013、2014）では、算数が苦手な小学1年生に、パターンの指導を1年間行ったところ、算数の成績が、ほかの指導を受けた子より高かったとされています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わくたんがパターン問題を「絵」にした理由
        </h2>

        <p className="leading-8 mb-4">
          以前の4〜5歳のパターン問題には、「1 3 1 3 □」のような数字のくりかえしが含まれていました。しかし、数字のくりかえしでは、「まとまりを見つける」前に、「数字を読む」負担がかかります。Rittle-Johnson らの論文が、くりかえしパターンの課題は数字の知識がなくても取り組めると述べていることを踏まえ、4〜5歳の問題は「🍎🍇🍎🍇□」のような絵のくりかえしに変えました。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">💡 ポイント</p>
          <p className="leading-7">数字のくりかえしが「悪い」わけではありません。数字に苦手意識がある子に、まず絵で「くり返しを見つける」経験をしてもらおう、というわくたんの設計上の判断です。この形式の問題が算数の力を伸ばすことを示した研究はありません。</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          おうちで試せる、パターン遊び
        </h2>

        <p className="leading-8 mb-4">
          以下は一般的な遊びの例です。これらを行えば効果がある、という意味ではありません。
        </p>

        <ul className="list-disc ml-6 space-y-2 leading-8 mb-4">
            <li>ビーズ・積み木・ブロックで「赤・青・赤・青…」と並べて、続きを選んでもらう。</li>
            <li>並びの一部をぬいて、「ぬけているのはどれ？」とたずねる。</li>
            <li>お子さんが作った並びを、大人が続けてみる。「どんなルール？」とたずねて、ことばにしてもらう。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 数字のパターンはやらなくていいですか？</p>
            <p className="leading-7 text-gray-700">A. 数字の並びを扱うパターンは、この研究の対象外でした。数字がまだ苦手な時期には、絵でくりかえしを見つける経験をして、数字の並びは6歳向けの問題などでゆっくり取り組む、という進め方も考えられます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 間違えたらどう声をかければいい？</p>
            <p className="leading-7 text-gray-700">A. 「どんなルールだと思った？」とたずねてみましょう。答えを教える前に、お子さんが自分のルールをことばにできると、考え方の確認になります。（これは研究に基づく方法ではなく、一般的な声かけの例です。）</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          参考文献
        </h2>
        <ol className="list-decimal ml-6 space-y-3 text-sm leading-7 text-gray-700 mb-6">
            <li>
              Rittle-Johnson, B., Zippert, E. L., & Boice, K. L. (2019). The roles of patterning and spatial skills in early mathematics development. Early Childhood Research Quarterly, 46, 166–178. doi:10.1016/j.ecresq.2018.03.006 
              <a href="https://www.sciencedirect.com/science/article/pii/S0885200617301801" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">https://www.sciencedirect.com/science/article/pii/S0885200617301801</a>
            </li>
        </ol>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">
          <h3 className="font-bold text-xl mb-3">🔍 振り返りポイント</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>就学前の子ども73人の研究で、くりかえしパターンの力は、同時期と約7か月後の算数の知識を予測していた</li>
            <li>最初の算数の知識を考慮しても、くりかえしパターンの力は、あとの算数の知識を予測していた</li>
            <li>くりかえしパターンの課題は数字の知識がなくても取り組める（著者の説明）</li>
            <li>研究は「関連」を調べたもの。パターンを練習すれば算数が伸びる、とは言い切れない</li>
          </ul>
        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年10月　/　最終更新日：2026年10月
        </div>

        <div className="mt-8 bg-yellow-50 border rounded-2xl p-6">
          <h3 className="font-bold text-xl mb-3">🎵 今日のステップ</h3>
          <p className="mb-3">絵のくりかえしを見つけて、次にくるものを考える問題です。印刷もできます。</p>
          <Link
            href="/4/pattern"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            パターン問題をやってみる
          </Link>
        </div>

        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/pattern-repeating-math" title="くりかえしパターンは算数の土台？数字がわからなくても取り組める理由【研究】" />
        <RelatedArticles currentSlug="pattern-repeating-math" />
      </article>
    </main>
  );
}
