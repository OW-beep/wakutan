import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import { searchRakutenItems } from "@/lib/rakuten";
import RakutenProducts from "@/app/components/RakutenProducts";

export const metadata = {
  title: "9割の親がやりがちな、知育の落とし穴3つ｜わくたん",
  description:
    "「できないと怒ってしまう」「みんな同じを求めてしまう」「結果ばかり見てしまう」。わかっていてもつい陥りがちな、知育・家庭学習の3つの落とし穴を、運営者の実体験とともに紹介します。",
  alternates: {
    canonical: "/blog/chiiku-otoshiana",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("知育ドリル 幼児", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="9割の親がやりがちな、知育の落とし穴3つ｜わくたん"
        description="「できないと怒ってしまう」「みんな同じを求めてしまう」「結果ばかり見てしまう」。わかっていてもつい陥りがちな、知育・家庭学習の3つの落とし穴を、運営者の実体験とともに紹介します。"
        slug="chiiku-otoshiana"
        datePublished="2026-09-21"
        dateModified="2026-09-21"
      />

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🕳️</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            9割の親がやりがちな、知育の落とし穴3つ
          </h1>

          <p className="text-lg text-gray-700">
            わかっているけど、つい。そんな3つのパターンです
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          子どもの知育・家庭学習に関わっていると、「頭では分かっているのに、つい」という場面がよくあります。
        </p>

        <p className="text-lg leading-8 mb-6">
          ここで紹介する3つは、特別なことではなく、多くの家庭で起きていることだと思います。
          「うちだけじゃないんだ」と思ってもらえたら、それだけで少し気持ちが軽くなるかもしれません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 「できないと」つい怒ってしまう
        </h2>

        <p className="leading-8 mb-4">
          一番ありがちなのは、同じ問題を何度かやっているのに、なかなかできないときです。
          例えば数を数える問題で、明らかに「1、2、3、4」と数えているのに、答えを書くところで間違えてしまう。
        </p>

        <p className="leading-8 mb-4">
          最初の頃は、「さっきもやったよね」「ちゃんと数えてみて」と、つい強い言い方になってしまうことがありました。
          でも、少し考えてみると、子どもは「分かっているのにわざと間違えている」わけではありません。
          数えることと、数字を書くことを同時にやるのが難しい、ということもあるのです。
        </p>

        <p className="leading-8 mb-4">
          それに気づいてからは、間違えたときにすぐ答えを教えるのではなく、
          「どこまで数えた？」「もう一回、一緒に指で触りながら数えてみようか」と、
          一つ前の段階に戻るようにしています。
          「できないことを直す」というより、「どこでつまずいているのかを見る」という意識に変わってきました。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 「みんな同じ」を求めてしまう
        </h2>

        <p className="leading-8 mb-4">
          同じくらいの年齢の子がひらがなを読んでいたり、数字をスラスラ書いていたりすると、
          「うちもそろそろできないといけないのかな」と思ってしまうことがあります。
        </p>

        <p className="leading-8 mb-4">
          実際は、子どもによって興味を持つものがかなり違います。
          数字にはすぐ興味を持つのに、ひらがなにはあまり興味を示さなかったり、
          逆にパズルや迷路には長時間集中したりすることもあります。
        </p>

        <p className="leading-8 mb-4">
          以前は「5歳ならこれくらいできるように」と年齢を基準に考えがちでしたが、
          今は「今、この子が何に興味を持っているか」を見るようにしています。
          ひらがなに乗り気でなければ、無理に問題を続けるのではなく、
          名前に入っている文字を見つけたり、絵本の中で知っている文字を探したりする。
          そのほうが、勉強として教えようとしたときよりも自然に入っていくことがあります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            きょうだいでも反応は全然違います。「同じ年齢なら同じ方法で」は、実はかなり無理があります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 「結果」ばかり見てしまう
        </h2>

        <p className="leading-8 mb-4">
          昨日は10問中8問できたのに、今日は5問しかできなかったとすると、
          「今日はあまりできなかったな」と思ってしまう。逆に10問全部できると、
          「すごい、全部できた！」と親の方が喜んでしまう。そんなことはありませんか。
        </p>

        <p className="leading-8 mb-4">
          ただ、それを続けていると、子ども自身も「何問できたか」を気にするようになってきます。
          そこで最近は、正解数だけでなく「どう考えたか」を見るようにしています。
          間違えていても「どうしてそう思ったの？」と聞いてみると、
          子どもなりにちゃんと理由を考えていたことに気づくことがあります。
          反対に、正解していても、たまたま当たっただけということもあります。
        </p>

        <p className="leading-8 mb-4">
          「10問中10問できた」ことより、「昨日より自分で考えていた」
          「分からないときに、すぐ『やって』と言わずにもう一回考えていた」
          といった部分をできるだけ見つけるようにする。
          毎日同じようにできるわけではないので、1日単位の結果を見るより、
          「少し前より、自分からやろうとすることが増えたかな」というくらいで見る方が、
          親自身も焦らなくなりました。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          3つに共通していること
        </h2>

        <p className="leading-8 mb-4">
          3つの落とし穴に共通しているのは、どれも「結果」や「他の子」「その日の1回」といった、
          目に見えやすいものに気を取られてしまう、という点です。
        </p>

        <p className="leading-8 mb-4">
          子どものペースや、考えている途中の過程は、意識しないとつい見過ごしてしまいます。
          完璧にできなくて当然です。ただ、「こういう落とし穴がある」と知っているだけでも、
          ふと我に返れる瞬間が増えるように思います。
          やる気を引き出す関わり方について、
          <Link href="/blog/how-4year-learn" className="text-orange-600 font-bold hover:underline">4歳の学び方・勉強のコツ</Link>
          でも詳しく紹介しています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. つい怒ってしまった後、どうフォローすればいいですか？</p>
            <p className="leading-7 text-gray-700">A. 「さっきは強く言いすぎたね、ごめんね」と一言伝えるだけで十分です。完璧に怒らずにいることよりも、その後どう関わり直すかの方が大切だと感じています。</p>
          </div>
          <div>
            <p className="font-bold">Q. 他の子と比べてしまう気持ちが消えません。</p>
            <p className="leading-7 text-gray-700">A. 比べてしまうこと自体は自然な感情です。無理に消そうとせず、「比べたな」と気づいた時点で、目の前のわが子に視点を戻す、くらいの意識で十分だと思います。</p>
          </div>
          <div>
            <p className="font-bold">Q. きょうだいで進み方が全然違います。大丈夫でしょうか？</p>
            <p className="leading-7 text-gray-700">A. よくあることです。同じ家庭で育っていても、興味を持つ分野や習得のペースは一人ひとり違います。それぞれのペースで見てあげるのが一番の近道です。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            3つとも、正直すべて心当たりがあります。特に③の「結果ばかり見てしまう」は、3人育てる中で今も油断すると出てきます。
            ただ、「そういうものだ」と分かった上で、その都度「あ、また結果だけ見ていたな」と気づき直すようにしてからは、
            以前より自分を責めすぎずに済むようになりました。落とし穴に落ちないことより、落ちたことに気づいて戻れることの方が、
            実際には大事なのかもしれません。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>できないときは「直す」より「どこでつまずいたか」を見る</li>
            <li>「みんな同じ」ではなく、今この子が何に興味を持っているかを見る</li>
            <li>結果より、考えた過程や小さな変化に目を向ける</li>
            <li>落とし穴に気づいた時点で、視点を戻せれば十分</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年9月　/　最終更新日：2026年9月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🍭 今日のごほうびドリル
          </h3>

          <p className="mb-3">
            結果より、取り組む過程を見てみませんか？今日は1問だけでも十分です。
          </p>

          <Link
            href="/print"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            印刷して使う
          </Link>

        </div>

        <RakutenProducts items={products} />
        <RelatedArticles currentSlug="chiiku-otoshiana" />

      </article>

    </main>
  );
}
