import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import ArticleByline from "@/app/components/ArticleByline";
import ArticleToc from "@/app/components/ArticleToc";
import ArticleSummary from "@/app/components/ArticleSummary";
import ArticleNextSteps from "@/app/components/ArticleNextSteps";
import FavoriteButton from "@/app/components/FavoriteButton";
import AdUnit from "@/app/components/AdUnit";
import { IN_ARTICLE_AD_SLOT } from "@/app/data/adSlots";
import { searchRakutenItems } from "@/lib/rakuten";
import RakutenProducts from "@/app/components/RakutenProducts";

export const metadata = {
  title: "自己肯定感を育てる声かけ",
  description:
    "幼児期の自己肯定感を育てる声かけの工夫を紹介。結果だけでなく過程に注目した伝え方のポイントを解説します。",
  alternates: {
    canonical: "/blog/self-esteem-words",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("自己肯定感 絵本 幼児", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="自己肯定感を育てる声かけ｜わくたん"
        description="幼児期の自己肯定感を育てる声かけの工夫を紹介。結果だけでなく過程に注目した伝え方のポイントを解説します。"
        slug="self-esteem-words"
        datePublished="2026-07-14"
        dateModified="2026-07-29"
      />


      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌼</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            自己肯定感を育てる声かけ
          </h1>

          <p className="text-lg text-gray-700">
            「すごいね」だけじゃない、伝え方のバリエーション
          </p>

        </div>

    <ArticleByline dateModified="2026-07-29" />

    <ArticleSummary
      worry="自己肯定感を育てたいけれど、どんな声かけをすればいいか分かりません。"
      answer="結果だけでなく、そこまでの過程を言葉にして認めましょう。「自分で考えられたね」「最後までやってみたね」など、具体的な言葉が届きやすくなります。反対に、「なんでできないの？」や、他の子との比較は避けるのがおすすめです。"
      steps={["「自分で考えられたね」「最後までやってみたね」「昨日より上手になったね」と、過程を認める", "難しい問題に挑戦したときや、間違えたあとにもう一度考えたときにも声をかける", "「なんでできないの？」「これくらい簡単でしょう」「お友達はできるのに」は言わない", "詰まったときは、正解を教える前に「ここまで自分で進めたね」と伝える"]}
    />

    <ArticleToc
      items={[{"id": "section-1", "text": "結果だけでなく過程に注目する"}, {"id": "section-2", "text": "「できたこと」を具体的に伝える"}, {"id": "section-3", "text": "性格によって響く言葉は違う"}, {"id": "section-4", "text": "失敗したときの声かけも大切"}, {"id": "section-5", "text": "比べる相手は「昨日のその子」"}, {"id": "section-6", "text": "場面別の声かけ例"}, {"id": "section-7", "text": "わが家でよく使う決まり文句"}, {"id": "section-8", "text": "正解したとき以外にも、声をかける"}, {"id": "section-9", "text": "言わないようにしている言葉"}, {"id": "section-10", "text": "声かけで、様子が変わった場面"}, {"id": "section-11", "text": "よくある疑問"}]}
    />

        <p className="text-lg leading-8 mb-6">
          自己肯定感という言葉をよく耳にするようになりましたが、「具体的にどう声をかければいいの？」と悩む保護者の方も多いのではないでしょうか。
        </p>

        <h2 id="section-1" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          結果だけでなく過程に注目する
        </h2>

        <p className="leading-8 mb-4">
          「上手にできたね」だけでなく、「最後まで頑張ったね」「工夫して考えたね」のように、過程に注目した声かけは、結果が出なかったときにも使えるという利点があります。
        </p>

        <h2 id="section-2" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「できたこと」を具体的に伝える
        </h2>

        <p className="leading-8 mb-4">
          「すごいね」という言葉は便利ですが、繰り返し使ううちに軽く聞こえてしまうこともあります。「一人で靴を履けたね」のように、具体的な行動を言葉にすると伝わりやすくなります。
        </p>

        <h2 id="section-3" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          性格によって響く言葉は違う
        </h2>

        <p className="leading-8 mb-4">
          慎重なタイプの子には「じっくり考えられたね」という過程への言葉が響きやすく、のびのびしたタイプの子には「よくチャレンジしたね」という挑戦そのものを認める言葉が響きやすい傾向があります。同じ場面でも、その子の性格に合わせて言葉を選び分けることが大切です。
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-6">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            わが家の3人の子どもも、性格がそれぞれ違います。上の子は細かい作業が好きな慎重派、2番目の子は天真爛漫なタイプ、いちばん下の子はその中間といった感じです。同じ「よくできたね」でも、慎重派の子には結果より過程を、のびのびした子には挑戦そのものを認める言葉の方が響いている実感があります。きょうだいでも同じ声かけが正解とは限らないと感じています。
          </p>
        </div>

        <h2 id="section-4" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          失敗したときの声かけも大切
        </h2>

        <p className="leading-8 mb-4">
          うまくいかなかったときに「大丈夫、また挑戦できるよ」と伝えることは、結果に関わらず自分の存在を認められているという安心感につながります。
        </p>

        <h2 id="section-5" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比べる相手は「昨日のその子」
        </h2>

        <p className="leading-8 mb-4">
          他の子と比べるのではなく、「前よりできるようになったね」とその子自身の成長に注目することが、自己肯定感を育てる声かけの基本です。
        </p>

        <h2 id="section-6" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          場面別の声かけ例
        </h2>

        <div className="bg-white border rounded-2xl p-5 mb-4">
          <p className="font-bold mb-2">🛒 スーパーでお菓子を1つだけ選べたとき</p>
          <p className="text-red-600">NG例：「ちゃんと選べて当たり前でしょ」</p>
          <p className="text-green-700 mt-1">OK例：「1つだけって、自分でちゃんと決められたね」</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 mb-6">
          <p className="font-bold mb-2">✏️ ドリルで間違えてしまったとき</p>
          <p className="text-red-600">NG例：「なんで間違えたの、もっとよく見て」</p>
          <p className="text-green-700 mt-1">OK例：「ここまで自分で考えられたね。ここだけ一緒に見てみようか」</p>
        </div>

        <h2 id="section-7" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わが家でよく使う決まり文句
        </h2>

        <p className="leading-8 mb-4">
          一番よく使うのは「どうやって考えたの？」です。正解したときも、間違えたときも使えます。正解しても、たまたま当たっただけなのか、ちゃんと考えて答えたのか分からないことがあります。「どうやって考えたの？」と聞くと、「こっちが3個で、こっちは2個だから」など、自分の考えを説明してくれることがあります。
        </p>

        <p className="leading-8 mb-4">
          もう一つは「前よりできるようになったね」です。「すごい」「頭いいね」だけだと、結果を褒めることになります。でも「前はここで止まってたけど、今日は自分でできたね」と伝えると、本人も成長を実感しやすいようです。「上手にできたね」より、「自分で考えてたね」という言葉を意識するようになりました。
        </p>

        <h2 id="section-8" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          正解したとき以外にも、声をかける
        </h2>

        <p className="leading-8 mb-4">
          わが家でよく使うのは、「自分で考えられたね」「最後までやってみたね」「昨日より上手になったね」という言葉です。正解したときだけでなく、難しい問題に挑戦したときや、間違えたあとにもう一度考えたときにも、声をかけるようにしています。
        </p>

        <p className="leading-8 mb-4">
          結果だけでなく、そこまでの過程も見ていることが伝わるとよいなと思っています。
        </p>

<h2 id="section-9" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          言わないようにしている言葉
        </h2>

        <p className="leading-8 mb-4">
          「なんでできないの？」「これくらい簡単でしょう」といった言葉は、できるだけ言わないようにしています。親からすると簡単に見える問題でも、子どもにとっては、初めて考えることかもしれません。
        </p>

        <p className="leading-8 mb-4">
          また、「お友達はできるのに」といった比較も避けています。ほかの子と比べることで、本人が自信をなくしてしまうのは避けたいからです。
        </p>

<h2 id="section-10" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          声かけで、様子が変わった場面
        </h2>

        <p className="leading-8 mb-4">
          迷路で行き止まりになったとき、以前はすぐに「できない」と言ってしまうことがありました。そのときに、正解を教えるのではなく、「ここまで自分で進めたね。別の道も探してみようか」と声をかけてみました。すると、少し考えてから、自分で別の道を探し始めました。
        </p>

        <p className="leading-8 mb-4">
          もちろん、いつも前向きに取り組めるわけではありません。それでも、間違えたことを責められないと分かると、もう一度挑戦しやすくなるのかなと感じています。
        </p>

<h2 id="section-11" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある疑問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 人見知りの子には、どう声をかければいい？</p>
            <p className="leading-7 text-gray-700">A. 人前で急に褒められると、かえって照れて萎縮してしまう子もいます。そのようなタイプの子には、みんなの前ではなく、後で2人きりのときに「さっきのあれ、よかったね」と伝える方が素直に届くことがあります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 「すごいね」を言いすぎるのは良くない？</p>
            <p className="leading-7 text-gray-700">A. 絶対にダメというわけではありませんが、頻繁に使いすぎると軽く聞こえてしまうことがあります。「どうやって考えたの？」のように過程を尋ねる言葉と組み合わせると、より効果的です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 褒めても反応が薄い子には、どうすればいい？</p>
            <p className="leading-7 text-gray-700">A. 言葉での反応が薄くても、内心では嬉しく感じていることも多いです。人前で大げさに褒めるより、2人きりのときに落ち着いて伝える方が伝わりやすいタイプの子もいます。</p>
          </div>
          <div>
            <p className="font-bold">Q. きょうだいの前で1人だけ褒めると、他の子がすねてしまいます。</p>
            <p className="leading-7 text-gray-700">A. その場合は、それぞれの得意なことを別のタイミングで褒めるのがおすすめです。全員を同じ場面で同時に褒めようとせず、日々のさまざまな場面に分散させると角が立ちにくくなります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 難しい問題で、すぐに「できない」と言ってしまいます。</p>
            <p className="leading-7 text-gray-700">A. 正解を教える前に、「ここまで自分で進めたね。別の道も探してみようか」のように、できたところを伝えてから、次の一歩を一緒に考えてみてください。わが家では、迷路でこの声かけをしてから、少し考えて自分で別の道を探すようになりました。</p>
          </div>
          <div>
            <p className="font-bold">Q. つい「なんでできないの？」と言ってしまいます。</p>
            <p className="leading-7 text-gray-700">A. わが家でも、できるだけ言わないようにしている言葉です。親には簡単に見える問題でも、子どもにとっては初めて考えることかもしれない、と考えるようにしています。</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🪴 育てたい力
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>結果だけでなく、頑張った過程に注目した声かけを意識する</li>
            <li>「すごいね」だけでなく、具体的な行動を言葉にして伝える</li>
            <li>失敗したときこそ、安心感につながる声かけを心がける</li>
            <li>比べる相手は他の子ではなく、その子自身の「前」</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月14日　/　最終更新日：2026年7月29日
        </div>

                <ArticleNextSteps
          drills={[{"href": "/5", "label": "5歳向けドリルを見る", "desc": "「自分で考えられたね」と声をかけながら、一緒に1問だけ。"}, {"href": "/4", "label": "4歳向けドリルを見る", "desc": "ジャンル別に、1回のプリントで終わる分量の問題を毎日更新しています。"}, {"href": "/print", "label": "印刷して使う", "desc": "1枚だけ印刷して、一緒に取り組めます。"}]}
          articles={[{"slug": "reward-for-study", "desc": "ごほうびに頼りすぎないための、声かけの考え方。"}, {"slug": "kakekoe-collection", "desc": "勉強嫌いにならないための、声かけ集。"}, {"slug": "kodomo-hikaku-tebanasu", "desc": "比べてしまうときの、3つの視点。"}, {"slug": "child-hates-study", "desc": "勉強を嫌がるときの、量と問題の選び方。"}]}
        />

        <RakutenProducts items={products} title="親子で読みたい絵本" />
        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/self-esteem-words" title="自己肯定感を育てる声かけ" />
        <RelatedArticles currentSlug="self-esteem-words" />

      </article>

    </main>
  );
}
