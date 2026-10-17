import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import FavoriteButton from "@/app/components/FavoriteButton";
import AdUnit from "@/app/components/AdUnit";
import { IN_ARTICLE_AD_SLOT } from "@/app/data/adSlots";
import { searchRakutenItems } from "@/lib/rakuten";
import RakutenProducts from "@/app/components/RakutenProducts";

export const metadata = {
  title: "小学校入学前に身につけたい力",
  description:
    "小学校入学前の勉強・準備で身につけたい力を解説。文字や計算だけではない、本当に大切な力とは？",
  alternates: {
    canonical: "/blog/school-preparation",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("入学準備 学用品", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <ArticleSchema
        title="小学校入学前に身につけたい力｜わくたん"
        description="小学校入学前の勉強・準備で身につけたい力を解説。文字や計算だけではない、本当に大切な力とは？"
        slug="school-preparation"
        datePublished="2026-03-01"
        dateModified="2026-10-17"
      />


      <article className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl p-8 shadow-lg mb-10">

          <div className="text-6xl mb-4">
            🎒
          </div>

          <h1 className="text-4xl font-extrabold text-green-700 mb-4">
            小学校入学前に身につけたい力
          </h1>

          <p className="text-lg leading-8">
            「入学前にひらがなは全部読めた方がいい？」
            「足し算はできた方がいい？」
            と不安になる保護者の方は少なくありません。
          </p>

          <p className="text-lg leading-8 mt-4">
            しかし小学校入学前に本当に大切なのは、
            文字や計算の先取りだけではありません。
          </p>

        </div>

        <div className="bg-white border-2 border-dashed border-green-200 rounded-2xl p-6 mb-8">
          <p className="font-bold text-green-700 mb-2">
            📋 この記事でわかること
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>入学前に本当に大切な力は「先取り学習」だけではないこと</li>
            <li>話を聞く力・自分で考える力を育てる関わり方</li>
            <li>生活リズムや持ち物準備で気をつけたいポイント</li>
          </ul>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            🌱 学力よりも大切な土台
          </h2>

          <p className="leading-8 mb-4">
            小学校では毎日新しいことを学びます。
            そのため最初から知識を持っていることより、
            学ぶ準備ができていることが重要です。
          </p>

          <p className="leading-8 mb-4">
            例えば、
            人の話を聞く力、
            自分で考える力、
            分からないことを質問する力などです。
          </p>

          <p className="leading-8">
            これらはすべての学習の土台になります。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            👂 話を聞く力
          </h2>

          <p className="leading-8 mb-4">
            小学校では先生の説明を聞いて行動します。
          </p>

          <p className="leading-8 mb-4">
            そのため、
            最後まで話を聞く習慣を身につけることが大切です。
          </p>

          <p className="leading-8">
            家庭でも、
            「最後まで聞いてから答える」
            を意識するだけで大きな練習になります。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            🧠 自分で考える力
          </h2>

          <p className="leading-8 mb-4">
            これからの時代に最も重要なのが考える力です。
          </p>

          <p className="leading-8 mb-4">
            正解を覚えるだけでなく、
            「なぜそうなるの？」
            「他の方法はあるかな？」
            と考える経験が大切です。
          </p>

          <p className="leading-8">
            パズルや規則性問題は、
            考える力を育てる良い教材になります。
          </p>

        </section>
    
        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            ✏️ 文字や数字はどこまで必要？
          </h2>

          <p className="leading-8 mb-4">
            「ひらがなを全部読めないとダメ？」
            「100まで数えられないとダメ？」
            と心配になることがあります。
          </p>

          <p className="leading-8 mb-4">
            もちろん文字や数字に親しんでおくことは大切ですが、
            入学前に完璧である必要はありません。
          </p>

          <p className="leading-8">
            むしろ大切なのは、
            学ぶことへの興味を持ち続けることです。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            ⏰ 集中する力
          </h2>

          <p className="leading-8 mb-4">
            小学校では授業時間中、
            座って活動する時間が増えます。
          </p>

          <p className="leading-8 mb-4">
            しかし最初から長時間集中できる子は多くありません。
          </p>

          <p className="leading-8 mb-4">
            家庭では5〜15分程度の短い活動を繰り返し、
            少しずつ集中する習慣を作りましょう。
          </p>

          <p className="leading-8">
            ドリルや絵本、パズルなども良い練習になります。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            🙋 自分のことを伝える力
          </h2>

          <p className="leading-8 mb-4">
            学校生活では、
            困ったことや分からないことを
            自分で伝える場面があります。
          </p>

          <p className="leading-8 mb-4">
            「トイレに行きたい」
            「困っています」
            「分かりません」
            と言えることも大切な力です。
          </p>

          <p className="leading-8">
            日常会話の中で、
            自分の考えを話す機会を増やしていきましょう。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            💬 「困った」を言葉にする練習
          </h2>

          <p className="leading-8 mb-4">
            入学準備というと、ひらがなや数字などの学習面を考えがちですが、実は「困ったときに自分から伝えられること」も同じくらい大切な準備です。
          </p>

          <p className="leading-8 mb-4">
            家で何かできないことがあったときに、すぐ親が助けるのではなく、「どうしたの？」「何に困ってる？」「どうしてほしい？」と聞くようにしてみましょう。以前は「できない！」だけで終わっていたことでも、少しずつ「ここができない」「これが取れない」「もう一回やってほしい」と具体的に言えるようになっていきます。
          </p>

          <p className="leading-8">
            先生に「分からない」と伝える、トイレに行きたいと伝える、友達とのトラブルを説明する。困ったときに黙ってしまわずに言葉にできることは、勉強ができることとは別の、入学後にとても大切になる力です。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            ✅ 今すでにやっていること・まだやっていないこと
          </h2>

          <p className="leading-8 mb-4">
            今すでにやっていることとしては、次のようなものがあります。
          </p>

          <ul className="list-disc ml-6 space-y-2 leading-7 text-gray-700 mb-4">
            <li>朝の着替えや準備をできる範囲で自分でする</li>
            <li>自分の持ち物を少しずつ自分で管理する</li>
            <li>分からないときは「分からない」と言う</li>
            <li>困ったときに「どうしてほしいか」を伝える</li>
            <li>絵本や会話を通して、人の話を最後まで聞く</li>
          </ul>

          <p className="leading-8">
            一方で、まだやっていないのは、入学後を意識した先取り学習を大量にやることです。漢字や計算を先取りしてどんどん進めるより、今はひらがなや数字に親しみながら「分からないことがあっても考えてみる」「困ったら聞いてみる」という姿勢を大切にしています。毎日完璧に準備しようとするより、入学までに少しずつこの土台を作っていければ十分だと考えています。
          </p>

        </section>

        <section className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 shadow-lg mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-700">
            💡 家庭でできる入学準備
          </h2>

          <ul className="space-y-4 leading-8">

            <li>
              ✅ 毎日絵本を読む
            </li>

            <li>
              ✅ 数字を使った遊びをする
            </li>

            <li>
              ✅ パズルや規則性問題に挑戦する
            </li>

            <li>
              ✅ 自分で考える機会を増やす
            </li>

            <li>
              ✅ 朝の支度を自分で行う
            </li>

            <li>
              ✅ 人の話を最後まで聞く習慣を作る
            </li>

          </ul>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            ❓ よく聞かれること
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Q. 入学前に足し算はできた方がいい？
          </h3>

          <p className="leading-8 mb-6">
            必須ではありません。
            数に親しみ、
            数えることを楽しめれば十分です。
          </p>

          <h3 className="text-xl font-bold mb-2">
            Q. ひらがなは全部書ける必要がある？
          </h3>

          <p className="leading-8 mb-6">
            完璧である必要はありません。
            自分の名前を書けたり、
            興味を持って読めたりすることが大切です。
          </p>

          <h3 className="text-xl font-bold mb-2">
            Q. 一番大切な準備は？
          </h3>

          <p className="leading-8 mb-6">
            学ぶことを楽しむ気持ちと、
            自分で考える習慣です。
          </p>

          <h3 className="text-xl font-bold mb-2">
            Q. 「困った」をなかなか言葉にできません。どうすれば？
          </h3>

          <p className="leading-8">
            すぐに親が代わりに答えを出すのではなく、「どうしたの？」「何に困ってる？」と一歩待って聞いてみましょう。最初はうまく言葉にできなくても、繰り返すうちに少しずつ具体的に言えるようになっていきます。焦らず、日常の小さな場面から練習していくのがおすすめです。
          </p>

        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6 text-green-600">
            🌈 まとめ
          </h2>

          <p className="leading-8 mb-4">
            小学校入学前に本当に大切なのは、
            文字や計算を先取りすることだけではありません。
          </p>

          <p className="leading-8 mb-4">
            人の話を聞く力、
            自分で考える力、
            集中する力、
            そして学ぶことを楽しむ気持ちが大切です。
          </p>

          <p className="leading-8">
            焦らず一歩ずつ、
            子どもの成長に合わせて準備を進めていきましょう。
          </p>

        </section>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            「小学校に入るまでに何かを完璧にできるようにする」というより、「分からないことがあっても先生に聞ける」「座って話を聞ける」「自分で準備しようとする」といった力を大事にしたいと思っています。5歳の今からできることとして、朝の準備を少しずつ自分でやってもらったり、ドリルも「親が全部教える」のではなく「まず自分で考えてみる」という時間を作ったりしています。
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">

          <h2 className="text-3xl font-bold mb-2 text-green-600">
            🏠 わが家の入学準備：今、取り組んでいること
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            わくたん運営者（上の子は5歳、下に2歳と0歳の子がいます）が、入学前の今、日々の生活の中で取り組んでいることです。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ① 朝の準備を、少しずつ本人に任せている
          </h3>
          <p className="leading-8 mb-4">
            わが家では、朝の着替えや、自分が使うものの準備を少しずつ本人に任せています。以前は、親が先に服や持ち物を用意したほうが早いので、つい手を出してしまうこともありました。でも、毎日繰り返すことは、少しずつ自分でできるようになってほしいと思っています。
          </p>
          <p className="leading-8 mb-4">
            まずは着替えなど、普段からやっていることを自分で進めてもらい、必要に応じて声をかけています。最初から全部を任せるのではなく、できるところは本人に任せ、難しいところは手伝うようにしています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ② 準備が止まったときの声かけ
          </h3>
          <p className="leading-8 mb-4">
            自分でやってもらうと、途中で別のことに気を取られたり、準備が止まったりすることがあります。そんなときは、すぐに親が代わりにやるのではなく、こう声をかけています。
          </p>
          <div className="bg-orange-50 rounded-2xl p-5 mb-4 leading-8">
            <p>
              <span className="font-bold text-orange-700">親：</span>
              「次は何をするんだっけ？」
            </p>
          </div>
          <p className="leading-8 mb-4">
            本人が思い出して動けることもあれば、手伝いが必要なこともあります。朝は下の子たちの世話もあるので、毎回ゆっくり待てるわけではありません。それでも、時間に余裕があるときは、できるだけ自分で取り組む時間をつくっています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ③ 「困った」を言葉にしてもらうために
          </h3>
          <p className="leading-8 mb-4">
            子どもが何かに困っていそうなときは、すぐに答えを教えたり、代わりにやったりするのではなく、こう聞いています。
          </p>
          <div className="bg-orange-50 rounded-2xl p-5 mb-4 leading-8">
            <p>
              <span className="font-bold text-orange-700">親：</span>
              「どうしたの？」「何に困っているの？」
            </p>
          </div>
          <p className="leading-8 mb-4">
            大人から見ると簡単なことでも、子どもにとっては、どこが分からないのかを説明すること自体が難しい場合があります。そこで、まずは本人の話を聞き、何に困っているのかを一緒に整理するようにしています。困ったときに黙ってしまうのではなく、自分の状況を言葉で伝える経験も、小学校に向けた大切な準備だと感じています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ④ ドリルでは、まず自分で考えてもらう
          </h3>
          <p className="leading-8 mb-4">
            わくたんのドリルに取り組むときは、すぐに正解を教えるのではなく、まずは自分で考えてもらうことを大切にしています。分からない問題があるときには、こう声をかけています。
          </p>
          <div className="bg-orange-50 rounded-2xl p-5 mb-4 leading-8">
            <p>
              <span className="font-bold text-orange-700">親：</span>
              「どこまで分かった？」「もう一度、問題を見てみようか」
            </p>
          </div>
          <p className="leading-8 mb-4">
            それでも難しい場合は、ヒントを出したり、一緒に考えたりします。いつまでも一人で悩ませるのではなく、自分で考える時間をつくりながら、必要なところは手伝うという進め方です。正解したかどうかだけでなく、考えようとしたことも認めるようにしています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ⑤ 指示は、一つずつ伝える
          </h3>
          <p className="leading-8 mb-4">
            家庭で何かを説明するときは、できるだけ短く、分かりやすく伝えるようにしています。一度にいくつも指示を出すと、子どもが途中で分からなくなることもあります。そのため、まず一つ伝え、できたら次のことを伝えるようにしています。
          </p>
          <p className="leading-8 mb-4">
            もちろん、遊びに夢中になっているときなどは、すぐに話が伝わらないこともあります。そんなときは、こちらの話を聞けるタイミングを見ながら、必要なことを伝えています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ⑥ 入学準備は、毎日の生活の中で
          </h3>
          <p className="leading-8 mb-4">
            入学準備については、勉強だけでなく、生活面で自分でできることを増やすことも意識しています。毎日の着替えや朝の支度など、普段の生活の中でできることは本人に任せています。こうした習慣は、入学直前にまとめて練習するより、日々の生活の中で少しずつ身につけていくほうが取り組みやすいと感じています。
          </p>
          <p className="leading-8 mb-4">
            一度にいろいろなことを進めようとすると、親も子どもも負担が大きくなります。そのため、毎日の着替えや支度など、繰り返し取り組めることを優先しています。学用品については、学校の案内を確認してから準備し、必要なことを順番に進めるようにしています。学用品の購入と通学路の下見は、すでに済ませています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ⑦ 下の子がいる中での、入学準備
          </h3>
          <p className="leading-8 mb-4">
            下の子たちがいると、上の子だけに時間を使うのが難しい場面があります。上の子とドリルに取り組んでいても、下の子の世話が必要になって中断することがありますし、朝の準備も予定どおりに進まないことがあります。そのため、家庭学習は長時間まとめて取り組むのではなく、短い時間でもできる形にしています。わくたんのドリルも、少しずつ取り組める量を意識しています。
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3 text-green-700">
            ⑧ いちばん気になっていること
          </h3>
          <p className="leading-8 mb-4">
            勉強ができるかどうかだけでなく、学校で困ったときに、自分から先生に伝えられるかということが気になります。家庭では親に聞けば解決できることも、学校では自分で状況を説明しなければならない場面があります。そのため、日常生活の中でも、困ったことや分からないことを言葉にして伝える機会を大切にしています。何でも一人でできることを目指すのではなく、必要なときに人に助けを求められることも大切だと考えています。
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl mt-8">
            <p className="font-bold mb-2">
              💬 同じ悩みを持つ保護者の方へ
            </p>
            <p className="leading-8">
              入学が近づくと、勉強や生活習慣など、いろいろなことが気になります。わが家では、毎日の着替えや支度など、普段の生活の中でできることを少しずつ本人に任せています。特別な準備を一度に進めるだけでなく、日々の暮らしの中で自分でできることを増やしていくのも、入学準備の一つだと感じています。
            </p>
          </div>

        </section>

        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
          <p>公開日：2026年3月　/　最終更新日：2026年10月</p>
          <p className="mt-1">
            本記事はわくたん運営者が、家庭学習に関する一般的な考え方をもとにまとめています。
          </p>
        </div>

        <div className="bg-green-100 rounded-3xl p-8 text-center">

          <h2 className="text-2xl font-bold mb-4">
            🎯 考える力を育てるドリルはこちら
          </h2>

          <Link
            href="/6"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            6さいドリルに挑戦する →
          </Link>

        </div>

        <RakutenProducts items={products} />
        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/school-preparation" title="小学校入学前に身につけたい力" />
        <RelatedArticles currentSlug="school-preparation" />

      </article>

    </main>
  );
}
