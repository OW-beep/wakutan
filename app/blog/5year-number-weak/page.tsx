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
  title: "5歳で数が苦手なとき、家庭でできること",
  description:
    "5歳の子どもが数を苦手にしているときの対処法を解説。数の意味の理解を育てる家庭での関わり方を紹介します。",
  alternates: {
    canonical: "/blog/5year-number-weak",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("おはじき 算数 幼児", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="5歳で数が苦手なとき、家庭でできること｜わくたん"
        description="5歳の子どもが数を苦手にしているときの対処法を解説。数の意味の理解を育てる家庭での関わり方を紹介します。"
        slug="5year-number-weak"
        datePublished="2026-07-06"
        dateModified="2026-11-01"
      />


      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            5歳で数が苦手なとき、家庭でできること
          </h1>

          <p className="text-lg text-gray-700">
            焦らず、数の「感覚」から育てよう
          </p>

        </div>

    <ArticleByline dateModified="2026-11-01" />

    <ArticleSummary
      worry="5歳の子が、数字は読めるのに、数の「多い・少ない」が分からず止まってしまいます。"
      answer="数字を言えることと、量が分かることは別の力です。積み木やおやつなど実物を並べて、「どちらが多い？」「一緒に数えてみよう」と確かめると、つながりやすくなります。"
      steps={["積み木などを3個と5個に分けて並べ、「どちらがたくさんあるかな？」と聞く", "すぐ答えられなくても、「こっちのほうが多そうだね。一緒に数えてみよう」と声をかける", "間違いを指摘するより、どうやって考えれば分かるかを一緒に確認する"]}
    />

    <ArticleToc
      items={[{"id": "section-1", "text": "「読める」と「わかる」は別の力"}, {"id": "section-2", "text": "具体物で数える経験を増やす"}, {"id": "section-3", "text": "たし算は「合わせる」動作から"}, {"id": "section-4", "text": "苦手意識がついてしまっている場合"}, {"id": "section-5", "text": "比べず、今のその子のペースで"}, {"id": "section-6", "text": "つまずきの原因を見分けるチェックポイント"}, {"id": "section-7", "text": "おすすめの数遊び3選"}, {"id": "section-8", "text": "「どちらが多い？」で止まるときの進め方"}, {"id": "section-9", "text": "聞き方が変わると迷うときは"}, {"id": "section-10", "text": "よくある質問"}]}
    />

        <p className="text-lg leading-8 mb-6">
          「数字は読めるのに、たし算になると急に嫌がる」——5歳の時期によく見られる悩みです。
        </p>

        <h2 id="section-1" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「読める」と「わかる」は別の力
        </h2>

        <p className="leading-8 mb-4">
          数字を読む・唱えることと、数の量的な意味を理解することは、別々に発達する力です。5歳で数字を読めても、「3個」のイメージが結びついていないことは珍しくありません。
        </p>

        <h2 id="section-2" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          具体物で数える経験を増やす
        </h2>

        <p className="leading-8 mb-4">
          おはじきやブロックなど、実際に手で数えられるものを使うと、数字と量の対応が理解しやすくなります。紙の上の数字だけで考えさせるのは、まだ難しい時期です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「3」という数字を見たら、指を3本立てる練習も効果的です。
          </p>
        </div>

        <h2 id="section-3" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          たし算は「合わせる」動作から
        </h2>

        <p className="leading-8 mb-4">
          「2個と3個を合わせるといくつ？」を、実際に物を合体させる動作と一緒に確認すると、たし算の意味がつかみやすくなります。
        </p>

        <h2 id="section-4" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          苦手意識がついてしまっている場合
        </h2>

        <p className="leading-8 mb-4">
          すでに「数字は嫌い」という気持ちが育ってしまっている場合は、ドリルより先に、数を使った遊び（すごろく、かるたなど）から距離を縮めていくのがおすすめです。
        </p>

        <h2 id="section-5" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          比べず、今のその子のペースで
        </h2>

        <p className="leading-8 mb-4">
          5歳で数が苦手でも、多くの場合は発達のペースの違いです。周りと比べず、日々の生活の中で数に触れる機会を増やしていきましょう。
        </p>

        <h2 id="section-6" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          つまずきの原因を見分けるチェックポイント
        </h2>

        <p className="leading-8 mb-4">
          「数える」のどの部分でつまずいているかを観察すると、対応がしやすくなります。①「いち、に、さん」と順番に唱えられるか、②唱えながら物を1つずつ指させるか（数唱と対象がずれる子は多くいます）、③「ぜんぶでいくつ？」と聞かれて最後に数えた数を答えられるか、の3段階を意識して見てみましょう。①はできるが②でずれる場合は、ゆっくり指させながら数える練習を、③でつまずく場合は「数える」と「量を表す」がまだ結びついていない段階なので、具体物を使った練習がより効果的です。
        </p>

        <h2 id="section-7" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          おすすめの数遊び3選
        </h2>

        <p className="leading-8 mb-4">
          <span className="font-bold">すごろく</span>はサイコロの目の数だけコマを動かすので、数と移動量が自然に結びつきます。<span className="font-bold">トランプの神経衰弱</span>は数字を覚えながら遊べ、数字への抵抗感を減らすのに役立ちます。<span className="font-bold">おやつの取り分けごっこ</span>は「3人で6個のクッキーを分けると、1人何個？」のような、割り算の考え方の芽生えにもつながる遊びです。どれもドリルのような堅さがないので、苦手意識のある子でも取り組みやすいのが特徴です。
        </p>

        <h2 id="section-8" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「どちらが多い？」で止まるときの進め方
        </h2>

        <p className="leading-8 mb-4">
          数字を順番に言えても、「3個と5個ではどちらが多い？」と聞かれて、すぐに答えられないことがあります。数字を暗記していることと、実際の量を理解していることは別だからです。ドリルの前に、実物を使って次の順番で確かめてみてください。
        </p>

        <ol className="list-decimal ml-6 space-y-2 leading-8 mb-4">
            <li>積み木などを3個と5個に分けて並べる</li>
            <li>「どちらがたくさんあるかな？」と聞く。すぐに答えられなくてもOK</li>
            <li>「こっちのほうが多そうだね。一緒に数えてみよう」と声をかけ、並べたものを一緒に数える</li>
            <li>間違いを指摘するより、どうやって考えれば分かるかを一緒に確認する</li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            ✏️ 実物で慣れてきたら
          </p>
          <p>
            <Link href="/5/kurabekko" className="text-orange-600 font-bold hover:underline">5歳向けくらべっこ</Link>で、数の比べ方を練習してみましょう。もっとやさしい問題に戻りたいときは、<Link href="/4/kurabekko" className="text-orange-600 font-bold hover:underline">4歳向けくらべっこ</Link>もあります。
          </p>
        </div>

<h2 id="section-9" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          聞き方が変わると迷うときは
        </h2>

        <p className="leading-8 mb-4">
          「どちらが多い？」を「どちらが少ない？」に変えたり、「あと何個？」と聞いたりすると、急に分からなくなることがあります。まだ全部を理解できているわけではない、と考えて、問題の形を変えながら、遊びや生活の中で数に触れる場面を増やしていくのがおすすめです。
        </p>

<h2 id="section-10" className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. どのくらいで効果が出ますか？</p>
            <p className="leading-7 text-gray-700">A. 個人差が大きく、数週間で変化が見える子もいれば、数ヶ月かかる子もいます。焦らず、まずは「数に対する抵抗感を減らす」ことを目標に、毎日少しずつ触れる機会を作ることを優先しましょう。</p>
          </div>
          <div>
            <p className="font-bold">Q. 数字は言えるのに、「多い・少ない」が分かりません。</p>
            <p className="leading-7 text-gray-700">A. 数字を暗記していることと、量を理解していることは別の力です。ドリルの前に、積み木やお菓子などを並べて、実際に見比べる経験を増やしてみてください。</p>
          </div>
          <div>
            <p className="font-bold">Q. 問題の聞き方が変わると、答えられなくなります。</p>
            <p className="leading-7 text-gray-700">A. よくあることです。「多い」を「少ない」に言いかえたり、「あと何個？」と聞いたりして、聞き方を変えながら、遊びの中で少しずつ慣れていくのがおすすめです。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            上の子（5歳）がつまずいたのは、「数えること」から「考えること」に変わるタイミングでした。数字を1から10まで順番に言うことはできても、「3個と5個ではどちらが多い？」と聞くとすぐに答えられないことがあり、数字を暗記していることと、実際の量を理解していることは違うのだと感じました。
          </p>
          <p className="leading-7 mt-3">
            最初はドリルで何とかしようとしてうまくいかず、日常の中に戻すことにしました。「どっちが大きい数字？」と何度も質問するのではなく、積み木を3個と5個に分けて並べ、「どちらがたくさんあるかな？」と一緒に見るようにしました。すぐに答えられなくても、「こっちのほうが多そうだね。一緒に数えてみよう」と声をかけ、間違いを指摘するより、どうやって考えれば分かるかを一緒に確認しています。おやつを分けるときに「同じになるように分けるにはどうする？」と聞いたり、「あと1個足すとどうなる？」といったやり取りを増やしたりもしています。
          </p>
          <p className="leading-7 mt-3">
            今は、日常生活の中で10くらいまでの数を扱うことにはだいぶ慣れてきて、おもちゃの数を数えたり、少ない・多いを比べたりすることも、以前よりスムーズになりました。一方で、問題の聞き方が少し変わると迷うこともあり、まだすべてを理解できているわけではありません。ドリルと日常を行き来するようにしたことで、少しずつ理解がつながってきています。「できない問題を繰り返す」よりも「使う場面を増やす」方が、わが家では効果的でした。
          </p>
        </div>

<div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🔑 おさえておきたいこと
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>数字を読めることと、数の量的な意味がわかることは別の力</li>
            <li>具体物を使って数える経験が、数の理解の土台になる</li>
            <li>たし算は「合わせる」動作と一緒に確認すると理解しやすい</li>
            <li>苦手意識がある場合は、ドリルより先に数を使った遊びから</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月6日　/　最終更新日：2026年11月1日
        </div>

                <ArticleNextSteps
          drills={[{"href": "/5/kurabekko", "label": "5歳向けくらべっこを見る", "desc": "3つの比較や数の差を考える問題。「どちらが多い？」の練習に。"}, {"href": "/5/sansu", "label": "5歳向け算数ドリル", "desc": "たし算の基礎や数の理解を、毎日30問。"}, {"href": "/4/kurabekko", "label": "4歳向けくらべっこ", "desc": "もっとやさしい問題に戻りたいときに。大小・多い少ないを比べます。"}]}
          articles={[{"slug": "4year-number", "desc": "数が合わない時期は4歳でもよくあります。3個から始める数え方。"}, {"slug": "when-start-numbers", "desc": "数字をいつから教えるか、迷っているときに。"}, {"slug": "number-play", "desc": "ドリル以外で、遊びながら数に親しむ方法。"}, {"slug": "sansu-weak-6year", "desc": "6歳になっても算数が苦手なときの考え方。"}]}
        />

        <RakutenProducts items={products} title="具体物で数える練習に使えるグッズ" />
        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/5year-number-weak" title="5歳で数が苦手なとき、家庭でできること" />
        <RelatedArticles currentSlug="5year-number-weak" />

      </article>

    </main>
  );
}
