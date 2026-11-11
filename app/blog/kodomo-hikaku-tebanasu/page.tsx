import Link from "next/link";
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
  title: "「よそのお子さんと比べてしまう」を手放す3つの視点",
  description:
    "同年代の子と比べて「うちの子は遅いのかな」と感じたときに大切にしたい3つの視点を、運営者の実体験とともに紹介します。",
  alternates: {
    canonical: "/blog/kodomo-hikaku-tebanasu",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("知育ドリル 幼児", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="「よそのお子さんと比べてしまう」を手放す3つの視点｜わくたん"
        description="同年代の子と比べて「うちの子は遅いのかな」と感じたときに大切にしたい3つの視点を、運営者の実体験とともに紹介します。"
        slug="kodomo-hikaku-tebanasu"
        datePublished="2026-09-26"
        dateModified="2026-10-18"
      />

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌱</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            「よそのお子さんと比べてしまう」を手放す3つの視点
          </h1>

          <p className="text-lg text-gray-700">
            よそはよそ、うちはうち。今のペースで大丈夫です
          </p>

        </div>

    <ArticleByline dateModified="2026-10-18" />

    <ArticleSummary
      worry="よその子と比べてしまって、焦ったり不安になったりします。"
      answer="比べる気持ちは、消さなくて大丈夫です。気づいたら、少し前のわが子と比べて、できるようになったことを思い出してみましょう。成長に目を向けると、焦る気持ちが少し落ち着きます。"
      steps={["「少し前まで難しかったこと」を思い出す（迷路を自分で解ける、数を数えられる、など）", "自分で考えたこと・最後まで取り組んだことを認める", "親が先回りせず、子どものペースに合わせて一緒に取り組む"]}
    />

    <ArticleToc
      items={[{"id": "section-1", "text": "① 成長のスピードは一人ひとりちがう"}, {"id": "section-2", "text": "② 「先月のわが子」と比べてみる"}, {"id": "section-3", "text": "③ できたことを一緒に喜ぶ"}, {"id": "section-4", "text": "わが家で、比べてしまった場面"}, {"id": "section-5", "text": "気持ちを切り替えるために、していること"}, {"id": "section-6", "text": "比べないことで、変わったこと"}, {"id": "section-7", "text": "よくある質問"}]}
    />


        <p className="text-lg leading-8 mb-6">
          公園や児童館で同年代の子を見て、「うちの子はまだできないけど大丈夫かな」と感じることはありませんか。
        </p>

        <p className="text-lg leading-8 mb-6">
          比べてしまう気持ちは、それだけ子どものことを気にかけている証拠でもあります。
          ここでは、比べる気持ちと上手に付き合うための3つの視点を紹介します。
        </p>

        <h2 id="section-1" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 成長のスピードは一人ひとりちがう
        </h2>

        <p className="leading-8 mb-4">
          同じくらいの年齢の子がひらがなを読んでいたり、数字をスラスラ書いていたりすると、
          「うちの子はまだできないけど大丈夫かな」と思うことがあります。
          公園や児童館などで同年代の子と遊んでいても、できることの違いが目に入ることもあると思います。
        </p>

        <p className="leading-8 mb-4">
          ただ、よく見ていると、こちらの子ができていることを相手の子はまだやっていなかったり、
          その逆だったりします。ひらがなはまだあまり読めなくてもパズルはすごく集中してできる、
          数字を覚えるのは早いけれど身の回りのことはまだ手伝ってほしがる、など本当にばらばらです。
        </p>

        <p className="leading-8 mb-4">
          それに気づいてからは、「○歳ならこれができる」という基準だけで見るのではなく、
          「この子は今、何が伸びているんだろう」と考えるようにしています。
          もちろん心配になることはありますが、他の子を見て焦って、その日のうちに何かを無理に教え込む、
          ということはなるべくしないようにしています。
        </p>

        <h2 id="section-2" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 「先月のわが子」と比べてみる
        </h2>

        <p className="leading-8 mb-4">
          特別な記録を毎日つけているわけではなくても、「前はどうだったかな？」と意識するだけで見え方が変わります。
        </p>

        <p className="leading-8 mb-4">
          例えば、少し前まではドリルで分からない問題があるとすぐに「やって」と親に頼んでいたのが、
          最近はしばらく自分で考えてから聞いてくるようになった。正解できたかどうかだけを見ると、
          間違えることはまだあります。でも、「すぐ答えを聞く」から「自分で少し考えてみる」に変わったのは、
          立派な成長です。
        </p>

        <p className="leading-8 mb-4">
          ひらがなでも、先月は自分の名前に入っている文字くらいしか気にしていなかったのに、
          最近は絵本を読んでいて「あ、これ○○と同じ文字だ」と言うことがある。
          こういう変化は、テストの点数や正解数だけを見ているとなかなか気づけません。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「先月より何問できるようになった？」ではなく、「前は親がやっていたことを、今は自分でできるようになったかな」という見方をしてみましょう。
          </p>
        </div>

        <h2 id="section-3" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ できたことを一緒に喜ぶ
        </h2>

        <p className="leading-8 mb-4">
          パズルで少し難しいところを、自分で考えて完成させた。以前なら、途中で分からなくなると
          「やって」と持ってくることが多かったのに、そのときはしばらく一人で考えて、
          ピースを何度か動かしていた。最後に「あ、ここだ！」と自分で完成させたら、一緒に「できたね！」と喜ぶ。
        </p>

        <p className="leading-8 mb-4">
          完成したこと自体も嬉しいのですが、それ以上に「分からなくてもすぐに諦めなかったこと」が嬉しいものです。
          そんなときは、「最後まで自分で考えたね」「何回も動かしてたもんね」と、
          できた結果だけでなく、そこまでの過程も言葉にしてみてください。
        </p>

        <p className="leading-8 mb-4">
          「すごい！」だけで終わらせず、「どこができるようになったのか」を一緒に確認する。
          結果より過程に目を向ける関わり方は、
          <Link href="/blog/chiiku-otoshiana" className="text-orange-600 font-bold hover:underline">9割の親がやりがちな、知育の落とし穴3つ</Link>
          でも紹介しているので、あわせてご覧ください。
        </p>

        <h2 id="section-4" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わが家で、比べてしまった場面
        </h2>

        <p className="leading-8 mb-4">
          同じくらいの年齢の子が、ひらがなをすらすら読んだり、自分の名前を書いたりしている話を聞いたときです。そういう話を聞くと、うちの子はまだできないことがあるけれど大丈夫かな、と気になることがありました。
        </p>

        <p className="leading-8 mb-4">
          特に、小学校入学が近づくことを意識すると、周りの子がどのくらいできているのかが気になってしまうことがあります。
        </p>

<h2 id="section-5" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          気持ちを切り替えるために、していること
        </h2>

        <p className="leading-8 mb-4">
          以前と比べて、できるようになったことを思い出すようにしています。例えば、少し前までは難しかった迷路を自分で解けるようになったり、数字を使っておもちゃの数を数えられるようになったりしています。
        </p>

        <p className="leading-8 mb-4">
          他の子と比べると、どうしても足りない部分に目が向いてしまいますが、本人の成長に目を向けると、焦る気持ちが少し落ち着きます。
        </p>

<h2 id="section-6" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比べないことで、変わったこと
        </h2>

        <p className="leading-8 mb-4">
          以前よりも、できたことを素直に喜べるようになったと思います。前は、つい「もう少し頑張ればできるのに」と考えてしまうことがありましたが、今は、本人が自分で考えたり、最後まで取り組んだりしたことを認めるようにしています。
        </p>

        <p className="leading-8 mb-4">
          親が焦って先回りするより、子どものペースに合わせて一緒に取り組む方が、家庭学習の時間も穏やかになりました。
        </p>

<h2 id="section-7" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 比べてしまう気持ちが消えません。</p>
            <p className="leading-7 text-gray-700">A. 無理に消そうとしなくて大丈夫です。比べていることに気づいた時点で、「この子は今、何が伸びているかな」と目の前のわが子に視点を戻す、くらいの意識で十分です。</p>
          </div>
          <div>
            <p className="font-bold">Q. きょうだいでも進み方が全然違います。</p>
            <p className="leading-7 text-gray-700">A. よくあることです。同じ家庭で育っていても、興味を持つ分野や習得のペースは一人ひとり違います。それぞれのペースで見てあげるのが一番の近道です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 記録をつけた方がいいですか？</p>
            <p className="leading-7 text-gray-700">A. 必須ではありません。「前は親がやっていたことを、今は自分でできるようになった」というような変化に、その都度気づければ十分です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 入学が近づくと、周りの子ができていることが気になります。</p>
            <p className="leading-7 text-gray-700">A. わが家でも、小学校入学が近づくと、周りの子がどのくらいできているのか気になることがあります。そんなときは、少し前のわが子と比べて、できるようになったことを思い出すようにしています。</p>
          </div>
          <div>
            <p className="font-bold">Q. 焦って、つい先回りしてしまいます。</p>
            <p className="leading-7 text-gray-700">A. わが家でも、「もう少し頑張ればできるのに」と考えてしまうことがありました。今は、本人が自分で考えたことや最後まで取り組んだことを認めて、子どものペースに合わせるようにしています。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            わが家も3人育てていると、同じ月齢のよその子だけでなく、きょうだい同士でも進み方の違いが目につきます。
            それでも、「前は親がやっていたことを、今は自分でできるようになったかな」という見方に変えてからは、
            比べて焦る回数がかなり減りました。よそはよそ、うちはうち。今のペースで大丈夫です。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>成長のスピードは一人ひとり違う。「○歳ならこれ」ではなく「今、何が伸びているか」を見る</li>
            <li>よその子ではなく「先月のわが子」と比べる</li>
            <li>できた結果だけでなく、そこまでの過程を一緒に言葉にして喜ぶ</li>
            <li>比べる気持ちは消さなくていい。気づいた時点で視点を戻せば十分</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年9月26日　/　最終更新日：2026年10月18日
        </div>

                <ArticleNextSteps
          drills={[{"href": "/5", "label": "5歳向けドリルを見る", "desc": "「前よりできるようになった」を見つけやすい、ジャンル別のドリルです。"}, {"href": "/4", "label": "4歳向けドリルを見る", "desc": "ジャンル別に、1回のプリントで終わる分量の問題を毎日更新しています。"}, {"href": "/print", "label": "印刷して使う", "desc": "今日は1問だけ。「できた」を一緒に見つけに。"}]}
          articles={[{"slug": "self-esteem-words", "desc": "できたことを認める、声かけの具体例。"}, {"slug": "nencho-katei-gakushu", "desc": "年長さんの1年間の進め方。焦らず、土台づくりを。"}, {"slug": "6year-prep-timeline", "desc": "入学準備が気になるときに。月ごとの目安。"}]}
        />

        <RakutenProducts items={products} title="「前よりできた」を見つけやすいドリル" />
        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/kodomo-hikaku-tebanasu" title="「よそのお子さんと比べてしまう」を手放す3つの視点" />
        <RelatedArticles currentSlug="kodomo-hikaku-tebanasu" />

      </article>

    </main>
  );
}
