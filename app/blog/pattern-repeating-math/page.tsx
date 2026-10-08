import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import FavoriteButton from "@/app/components/FavoriteButton";
import AdUnit from "@/app/components/AdUnit";
import { IN_ARTICLE_AD_SLOT } from "@/app/data/adSlots";

export const metadata = {
  title: "くりかえしパターンは算数の土台？数字がわからなくても取り組める理由【研究】",
  description:
    "「りんご・ぶどう・りんご…」のようなくりかえしパターンの理解は、幼児期の算数の力と関連するという研究（Rittle-Johnson ら 2019）を紹介。数字を使わずに取り組める理由と、わくたんがパターン問題を絵に変えた背景も説明します。",
  alternates: {
    canonical: "/blog/pattern-repeating-math",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="くりかえしパターンは算数の土台？数字がわからなくても取り組める理由【研究】"
        description="「りんご・ぶどう・りんご…」のようなくりかえしパターンの理解は、幼児期の算数の力と関連するという研究（Rittle-Johnson ら 2019）を紹介。数字を使わずに取り組める理由と、わくたんがパターン問題を絵に変えた背景も説明します。"
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
          「1・3・1・3・□」のような数字のくりかえしは、数の感覚がまだ育っていない子には難しく感じられます。一方、「りんご・ぶどう・りんご・ぶどう・□」のような絵のくりかえしなら、数字を知らなくても取り組めます。この記事では、パターン（くりかえし）を見つける力と算数の関係について、研究をもとに整理します。
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-6">
          <p className="font-bold mb-2">この記事の読み方</p>
          <p className="leading-7">
            研究の内容は、できるだけ出典を明記し、「わかったこと」と「言えないこと」を分けて書いています。子どもの発達には個人差があり、研究結果がそのまま目の前のお子さんに当てはまるとは限りません。気になるときは、園の先生や小児科・専門機関にも相談してください。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          先に結論：研究からわかっていること
        </h2>

        <ul className="list-disc ml-6 space-y-2 leading-8 mb-4">
            <li>幼児期のくりかえしパターンの力は、同じ時期の算数の力と、その7か月後の算数の力を、それぞれ独立に予測していました（73人の研究）。</li>
            <li>くりかえしパターンの課題は、数字の知識がなくても取り組めるため、幼い子にも向いています。</li>
            <li>「パターンを教えれば算数が伸びる」と言い切れるほどの証拠は、まだありません。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          パターン（くりかえし）ってなに？
        </h2>

        <p className="leading-8 mb-4">
          パターンには大きく2種類あります。
        </p>

        <ul className="list-disc ml-6 space-y-2 leading-8 mb-4">
            <li>くりかえしパターン：「🍎🍇🍎🍇…」のように、同じまとまりがくり返される並び。</li>
            <li>増えていくパターン：「2・4・6・8…」のように、決まった量ずつ増えたり減ったりする並び。</li>
        </ul>

        <p className="leading-8 mb-4">
          くりかえしパターンは「まとまり（単位）を見つける」力、増えていくパターンは「差や増え方（たし算・ひき算）」の力を使います。わくたんでは、4〜5歳には数字ではなく絵を使ったくりかえしを中心に、増えていく数の並び（2ずつ増える等）は6歳向けに残しています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          研究：パターンと空間スキルが、算数を予測する（Rittle-Johnson ら 2019）
        </h2>

        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 my-6">
          <p className="font-bold text-lg mb-1">📚 プレキンダーの子どもの、パターン・空間スキルと算数</p>
          <p className="text-sm text-gray-600 mb-3">出典：Rittle-Johnson, Zippert, Boice（2019）The roles of patterning and spatial skills in early mathematics development. Early Childhood Research Quarterly, 46, 166–178.</p>
          <p className="font-bold mb-1">わかったこと</p>
          <ul className="list-disc ml-6 space-y-1 leading-7 mb-3">
            <li>米国のプレキンダー（就学前）の73人を対象に、年度のはじめに、くりかえしパターン・空間スキル・一般的な認知能力・算数の知識を測りました。</li>
            <li>パターンと空間スキルは関連しており、どちらも、同じ時点の算数の知識と、7か月後の算数の知識を、それぞれ独自に予測していました。</li>
            <li>年度はじめの算数の知識を統計的に取りのぞいても、くりかえしパターンの力は後の算数の知識を予測しました。</li>
            <li>研究者は、くりかえしパターンの課題は数字の知識を必要としないため、幼児でも規則性を見いだせると説明しています。</li>
          </ul>
          <p className="font-bold mb-1">この研究の限界</p>
          <ul className="list-disc ml-6 space-y-1 leading-7">
            <li>73人と小さな規模の研究で、米国の就学前の子どもが対象です。</li>
            <li>「予測する」は「原因になる」という意味ではありません。もともと考える力が高い子が、どちらも得意だった可能性もあります。</li>
            <li>パターンを練習すれば算数が伸びるかは、この研究だけではわかりません。パターン訓練が算数を伸ばすかについては、関連する研究の結果も一貫していないと、研究チーム（ヴァンダービルト大学）の資料で述べられています。</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わくたんがパターン問題を「絵」にした理由
        </h2>

        <p className="leading-8 mb-4">
          これまでのパターン問題には、「1 3 1 3 □」のような数字のくりかえしが含まれていました。しかし、数字のくりかえしでは、「まとまりを見つける」前に「数字を読む」「数字の並びを覚える」負担がかかります。くりかえしパターンの課題そのものは数字の知識がなくてもできるという上記の研究の説明にそって、4〜5歳の問題は「🍎🍇🍎🍇□」のような絵に変えました。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">💡 ポイント</p>
          <p className="leading-7">数字のくりかえしが「悪い」わけではありません。ただ、数字に苦手意識がある子には、まず絵で「くり返しを見つける楽しさ」を味わってもらうほうが、取り組みやすいと考えています。これは研究が直接示した結論ではなく、わくたんの設計上の判断です。</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          おうちでできる、パターン遊び
        </h2>

        <ul className="list-disc ml-6 space-y-2 leading-8 mb-4">
            <li>ビーズ・積み木・ブロックで「赤・青・赤・青…」と並べて、続きを選んでもらう。</li>
            <li>おやつや食器の並べ方で、「次はどれが来るかな？」と聞く。</li>
            <li>音のパターン（手をたたく・足をならす）で「パン・パン・トン・パン・パン・トン…」と続きを予想する。</li>
            <li>子どもが作った並びを、大人が続けてみる。「どんなルール？」とたずねて、ことばにしてもらう。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 数字のパターンはやらなくていいですか？</p>
            <p className="leading-7 text-gray-700">A. 数字のパターンも、小学校の算数につながります。ただ、数字に抵抗がある時期には、絵や形で「規則を見つける経験」を先に積むほうが取り組みやすいことがあります。6歳向けには、2ずつ増えるなど数字の並びも用意しています。</p>
          </div>
          <div>
            <p className="font-bold">Q. 間違えたらどう声をかければいい？</p>
            <p className="leading-7 text-gray-700">A. 「どんなルールだと思った？」とたずねてみましょう。答えを教える前に、子どもが自分のルールを説明できると、考え方の確認になります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 毎日やったほうがいいですか？</p>
            <p className="leading-7 text-gray-700">A. 研究は頻度を示していません。短時間でもよいので、飽きずに続けられるペースを優先してください。</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          参考文献
        </h2>
        <ol className="list-decimal ml-6 space-y-3 text-sm leading-7 text-gray-700 mb-6">
            <li>
              Rittle-Johnson, B., Zippert, E. L., & Boice, K. L. (2019). The roles of patterning and spatial skills in early mathematics development. Early Childhood Research Quarterly, 46, 166–178. 
              <a href="https://vkc.vumc.org/news/3780" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">https://vkc.vumc.org/news/3780</a>
            </li>
            <li>
              Vanderbilt University, Peabody College. Children’s Learning Lab: IES project materials（パターンと空間スキルの研究プロジェクトの資料）. 
              <a href="https://peabody.vanderbilt.edu/academics/departments/psych/research-labs/childrens-learning-lab/ies-projects-materials" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">https://peabody.vanderbilt.edu/academics/departments/psych/research-labs/childrens-learning-lab/ies-projects-materials</a>
            </li>
            <li>
              U.S. Institute of Education Sciences. Exploring the roles of pattern and spatial skills in early mathematics development（研究プロジェクトの概要）. 
              <a href="https://ies.ed.gov/use-work/awards/exploring-roles-pattern-and-spatial-skills-early-mathematics-development" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">https://ies.ed.gov/use-work/awards/exploring-roles-pattern-and-spatial-skills-early-mathematics-development</a>
            </li>
        </ol>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">
          <h3 className="font-bold text-xl mb-3">🔍 振り返りポイント</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>くりかえしパターンの力は、同時期と7か月後の算数の力を予測していた（73人の研究）</li>
            <li>くりかえしパターンは数字の知識がなくてもできる</li>
            <li>「パターンを教えると算数が伸びる」とまでは言えない</li>
            <li>わくたんは、数字が苦手な子にも取り組みやすいよう、4〜5歳のパターンを絵に変えた</li>
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
