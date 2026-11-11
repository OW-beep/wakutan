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
  title: "勉強嫌いにならないための声かけ集",
  description:
    "幼児期に勉強嫌いにならないための声かけのポイントと具体例を紹介。「頑張れ」以外の伝え方のヒントをまとめました。",
  alternates: {
    canonical: "/blog/kakekoe-collection",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("子育て 声かけ 本", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="勉強嫌いにならないための声かけ集｜わくたん"
        description="幼児期に勉強嫌いにならないための声かけのポイントと具体例を紹介。「頑張れ」以外の伝え方のヒントをまとめました。"
        slug="kakekoe-collection"
        datePublished="2026-06-27"
        dateModified="2026-10-16"
      />


      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">💬</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            勉強嫌いにならないための声かけ集
          </h1>

          <p className="text-lg text-gray-700">
            「頑張れ」だけじゃない、伝え方のヒント
          </p>

        </div>

    <ArticleByline dateModified="2026-10-16" />

    <ArticleSummary
      worry="勉強嫌いにならないために、どんな声かけをすればいいか知りたいです。"
      answer="答えを教える声かけより、本人が考え直せる声かけに変えましょう。「どこから来たんだっけ？」「ほかの道も見てみようか」と聞き、正解したときも、取り組んだ過程を言葉にして伝えるのがおすすめです。"
      steps={["答えを教えず、「どこから来たんだっけ？」「ほかの道も見てみようか」と聞く", "「すごいね」だけで終わらせず、「最後まで自分で考えたね」と過程を伝える", "「あと1問だけ頑張って」より、「1問だけやってみる？」と量を一緒に考える", "きょうだいを比べず、その子自身の取り組みを認める"]}
    />

    <ArticleToc
      items={[{"id": "section-1", "text": "結果よりも過程に注目する"}, {"id": "section-2", "text": "比較ではなく、その子自身の成長を伝える"}, {"id": "section-3", "text": "間違えた時こそ前向きな言葉を"}, {"id": "section-4", "text": "「やらせる」より「一緒にやる」姿勢を"}, {"id": "section-5", "text": "シーン別・声かけの言い換え例"}, {"id": "section-6", "text": "声かけを変えて、反応が変わった言葉"}, {"id": "section-7", "text": "使わなくなった言葉"}, {"id": "section-8", "text": "きょうだいがいるときの声かけ"}, {"id": "section-9", "text": "よくある質問"}]}
    />

        <p className="text-lg leading-8 mb-6">
          「頑張れ」「もっとできるでしょ」——励ますつもりの言葉が、時にプレッシャーになってしまうことがあります。
        </p>

        <p className="text-lg leading-8 mb-6">
          幼児期の声かけは、その後の学習への向き合い方に大きく影響します。ここでは、日常で使いやすい声かけの工夫を紹介します。
        </p>

        <h2 id="section-1" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          結果よりも過程に注目する
        </h2>

        <p className="leading-8 mb-4">
          「正解したね」よりも、「最後まで自分で考えたね」「よく見て気づいたね」など、取り組む過程に注目した声かけを意識してみましょう。
        </p>

        <p className="leading-8 mb-4">
          結果だけを評価されると、間違えることへの不安が大きくなってしまうことがあります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 例
          </p>
          <p>
            「合ってたね」ではなく「よく考えたね」と伝えてみましょう。
          </p>
        </div>

        <h2 id="section-2" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比較ではなく、その子自身の成長を伝える
        </h2>

        <p className="leading-8 mb-4">
          「お兄ちゃんはできたのに」のような比較は、自信を失わせる原因になりやすい言葉です。
        </p>

        <p className="leading-8 mb-4">
          「前より早くできるようになったね」など、その子自身の変化に目を向けた声かけを心がけましょう。
        </p>

        <h2 id="section-3" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          間違えた時こそ前向きな言葉を
        </h2>

        <p className="leading-8 mb-4">
          間違えた時に「なんで間違えたの」と聞くと、責められていると感じてしまうことがあります。
        </p>

        <p className="leading-8 mb-4">
          「どこで迷ったかな？一緒に見てみよう」と、間違いを一緒に振り返る姿勢を見せてあげましょう。
        </p>

        <h2 id="section-4" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「やらせる」より「一緒にやる」姿勢を
        </h2>

        <p className="leading-8 mb-4">
          「早くやりなさい」ではなく、「一緒にやってみよう」という誘い方をすると、取り組むハードルが下がります。
        </p>

        <p className="leading-8 mb-4">
          保護者の方が隣にいてくれるだけで、子どもは安心して挑戦できるものです。
        </p>

        <h2 id="section-5" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          シーン別・声かけの言い換え例
        </h2>

        <p className="leading-8 mb-4">
          実際の生活の場面で使いやすい、言い換えの例をいくつか紹介します。
        </p>

        <div className="bg-white border rounded-2xl p-5 mb-4">
          <p className="font-bold mb-2">🏠 ドリルになかなか取りかからないとき</p>
          <p className="text-red-600">NG例：「早くやって！何回言わせるの」</p>
          <p className="text-green-700 mt-1">OK例：「あと1問だけ、一緒にやろうか」</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 mb-4">
          <p className="font-bold mb-2">🛒 スーパーでお菓子を選んでいるとき</p>
          <p className="text-red-600">NG例：「早く決めて、他のお客さんの迷惑でしょ」</p>
          <p className="text-green-700 mt-1">OK例：「どっちにするか、2つから選んでみようか」</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 mb-4">
          <p className="font-bold mb-2">✏️ 問題を間違えたとき</p>
          <p className="text-red-600">NG例：「なんでこんな簡単なのが分からないの」</p>
          <p className="text-green-700 mt-1">OK例：「どこまで考えたか、一緒に見てみようか」</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 mb-6">
          <p className="font-bold mb-2">🍪 おやつの時間に「もっと食べたい」と言われたとき</p>
          <p className="text-red-600">NG例：「ダメって言ったらダメ！」</p>
          <p className="text-green-700 mt-1">OK例：「今日はここまで。明日もあるから楽しみにしようね」</p>
        </div>

        <h2 id="section-6" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          声かけを変えて、反応が変わった言葉
        </h2>

        <p className="leading-8 mb-4">
          迷路で行き止まりになったとき、以前は「違うよ、こっちじゃない？」と答えを教えてしまうことがありました。今は「どこから来たんだっけ？」「ほかの道も見てみようか」と、本人が考え直せるような声かけにしています。すると、すぐに答えを聞こうとするのではなく、自分で線を戻して別の道を探すことが増えました。
        </p>

        <p className="leading-8 mb-4">
          また、正解したときも「すごいね」だけで終わらせず、「最後まで自分で考えたね」「さっきのところ、よく見つけたね」と、取り組んだ過程を伝えるようにしています。
        </p>

<h2 id="section-7" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          使わなくなった言葉
        </h2>

        <p className="leading-8 mb-4">
          「あと1問だけ頑張って」「これくらい簡単でしょう」という言葉は、なるべく使わなくなりました。親としては少しでも進めてほしい気持ちがありましたが、子どもが疲れているときに言っても、あまりよい結果にはなりませんでした。返事が少なくなったり、鉛筆を置いてしまったりすることもありました。
        </p>

        <p className="leading-8 mb-4">
          今は「今日はここまでにしようか」「1問だけやってみる？」と、本人が取り組める量を一緒に考えています。特に「これくらい簡単でしょう」は、できないときに子どもを追い詰めてしまう可能性があるので、使わないように意識しています。
        </p>

<h2 id="section-8" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          きょうだいがいるときの声かけ
        </h2>

        <p className="leading-8 mb-4">
          下の子の前では、上の子だけを褒めすぎたり、下の子と比べたりしないようにしています。例えば、上の子がドリルを終えたときに「お姉ちゃんはできるね」と言うよりも、「最後まで考えられたね」と、その子自身の取り組みを認めるようにしています。
        </p>

        <p className="leading-8 mb-4">
          下の子が同じことをしたがった場合は、年齢に合わせて、紙に絵を描いたり、シールを貼ったりしてもらいます。上の子には「あなたはあなたのペースで大丈夫」と伝え、下の子にも無理に同じことをさせないようにしています。きょうだいでできることが違うのは自然なことなので、比べずに、それぞれの成長を見るようにしています。
        </p>

<h2 id="section-9" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 行き止まりで止まったとき、つい答えを教えてしまいます。</p>
            <p className="leading-7 text-gray-700">A. わが家でも、以前は「違うよ、こっちじゃない？」と教えてしまうことがありました。今は「どこから来たんだっけ？」「ほかの道も見てみようか」と聞くようにしたら、自分で線を戻して別の道を探すことが増えました。</p>
          </div>
          <div>
            <p className="font-bold">Q. 疲れているときに、「あと1問だけ」と言ってしまいます。</p>
            <p className="leading-7 text-gray-700">A. わが家でも使っていた言葉ですが、疲れているときは、あまりよい結果になりませんでした。今は「今日はここまでにしようか」「1問だけやってみる？」と、取り組める量を一緒に考えています。</p>
          </div>
          <div>
            <p className="font-bold">Q. きょうだいで、声かけに差が出てしまいます。</p>
            <p className="leading-7 text-gray-700">A. 上の子だけを褒めすぎたり、下の子と比べたりしないようにしています。「あなたはあなたのペースで大丈夫」と伝えて、それぞれの成長を見るようにしています。</p>
          </div>
        </div>

<div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家でよく使う声かけ
          </p>
          <p className="leading-7">
            よく使うのは「どう思う？」という言葉です。「これが答えだよ」と教えてしまうのではなく、「どう思う？」と聞くと、子どもが自分の考えを話してくれます。他には「どこまでは分かった？」もよく使います。難しい問題で全部分からなくなっているように見えても、実際には途中までは理解していることがあり、そう聞くと自分で整理し直せることがあります。あとは「間違ってても大丈夫」という言葉も意識しています。特に5歳くらいになると間違えることを嫌がるようになってくるので、「間違えた＝ダメ」ではなく「間違えたから分かったことがある」という雰囲気を作るようにしています。個人的には、「どうして？」を連発するより「どう思う？」の方が子どもが話しやすいと感じています。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>結果よりも「考えた過程」に注目して声をかける</li>
            <li>他の子との比較ではなく、その子自身の成長を伝える</li>
            <li>間違いを責めず、一緒に振り返る姿勢を見せる</li>
            <li>「やらせる」より「一緒にやる」誘い方を意識する</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年6月27日　/　最終更新日：2026年10月16日
        </div>

                <ArticleNextSteps
          drills={[{"href": "/5", "label": "5歳向けドリルを見る", "desc": "「最後まで自分で考えたね」と声をかけながら、1問だけ。"}, {"href": "/4", "label": "4歳向けドリルを見る", "desc": "ジャンル別に、1回のプリントで終わる分量の問題を毎日更新しています。"}, {"href": "/print", "label": "印刷して使う", "desc": "1枚だけ印刷して、一緒に取り組めます。"}]}
          articles={[{"slug": "self-esteem-words", "desc": "自己肯定感を育てる声かけと、言わないようにしている言葉。"}, {"slug": "reward-for-study", "desc": "ごほうびに頼りすぎないための、声かけの考え方。"}, {"slug": "child-hates-study", "desc": "勉強を嫌がるときの、量と問題の選び方。"}, {"slug": "kodomo-hikaku-tebanasu", "desc": "比べてしまうときの、3つの視点。"}]}
        />

        <RakutenProducts items={products} title="声かけのヒントになる本" />
        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/kakekoe-collection" title="勉強嫌いにならないための声かけ集" />
        <RelatedArticles currentSlug="kakekoe-collection" />

      </article>

    </main>
  );
}
