import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "赤ちゃん返りが心配になったら知ってほしい3つ｜わくたん",
  description:
    "下の子が生まれてから、上の子の赤ちゃん返りが気になる方へ。よくあることだと知っておきたい理由と、無理なく関わるための3つのポイントを、運営者の実体験とともに紹介します。",
  alternates: {
    canonical: "/blog/akachan-gaeri",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="赤ちゃん返りが心配になったら知ってほしい3つ｜わくたん"
        description="下の子が生まれてから、上の子の赤ちゃん返りが気になる方へ。よくあることだと知っておきたい理由と、無理なく関わるための3つのポイントを、運営者の実体験とともに紹介します。"
        slug="akachan-gaeri"
        datePublished="2026-09-22"
        dateModified="2026-09-22"
      />

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🍼</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            赤ちゃん返りが心配になったら知ってほしい3つ
          </h1>

          <p className="text-lg text-gray-700">
            「急に甘えん坊に戻った」は、よくあることです
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          下の子が生まれてから、それまで一人でできていたことを急に「やって」と言うようになったり、
          わがままが増えたように感じたり――いわゆる「赤ちゃん返り」に戸惑う保護者は多いと思います。
        </p>

        <p className="text-lg leading-8 mb-6">
          「上の子なのに」「もうすぐ小学生なのに」と焦る必要はありません。
          ここでは、赤ちゃん返りとの付き合い方について、3つのポイントを紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 赤ちゃん返りはよくあること
        </h2>

        <p className="leading-8 mb-4">
          下の子が生まれてから、それまで一人でできていた着替えなどのちょっとした身の回りのことを、
          「できない」「やって」と言ってくることが増えるお子さんは少なくありません。
        </p>

        <p className="leading-8 mb-4">
          最初は「それくらい自分でできるでしょ」と思ってしまうこともあると思います。
          でも、下の子のお世話をしている様子を見ていると、「自分も構ってほしい」という気持ちが
          隠れていることがあります。
        </p>

        <p className="leading-8 mb-4">
          そんなときは、できる・できないの問題として考えるのではなく、
          「今日はやってほしいんだな」と受け止めてみる。全部を親がやる必要はありませんが、
          着替えを少し手伝ったり、「今日は特別ね」と膝に座らせたりするだけでも、
          しばらく甘えた後にまた自分でやり始めることがよくあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 「上の子」を甘えさせる時間も作る
        </h2>

        <p className="leading-8 mb-4">
          「上の子だけの特別な時間を毎日30分作る」というのは、正直なかなか難しいものです。
          下にきょうだいがいると、予定どおりにいかない日の方が多いと思います。
        </p>

        <p className="leading-8 mb-4">
          そこで、長い時間を確保するというより、短くても上の子だけを見る時間を意識してつくるのがおすすめです。
          下の子が昼寝している間の10分だけ一緒に絵本を読む、下の子のお世話が落ち着いたタイミングで
          「今ちょっと一緒に遊ぼうか」と5〜10分だけ付き合う、寝る前に布団の中でその日にあったことを聞く。
        </p>

        <p className="leading-8 mb-4">
          特別なことをしなくても、「今はあなたと話しているよ」という時間があるだけで違うようです。
          毎日必ずできなくても大丈夫です。できなかった日は、別の日に少し長めに話す、くらいの感覚で十分です。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            長さより「今はあなただけを見ているよ」が伝わる時間かどうかが大切です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 無理にお兄ちゃん・お姉ちゃん扱いしない
        </h2>

        <p className="leading-8 mb-4">
          下の子が泣いているときに上の子が遊んでいると、「お兄ちゃん・お姉ちゃんなんだから、ちょっと待ってね」
          と言いそうになることはありませんか。下の子のおもちゃを上の子が使っていると、
          「小さい子に貸してあげて」と言いたくなることもあると思います。
        </p>

        <p className="leading-8 mb-4">
          「もう5歳なんだから、下の子に譲るくらいできるよね」と考えてしまいがちですが、
          5歳だからといって、いつでも我慢できるわけではありません。
        </p>

        <p className="leading-8 mb-4">
          そこで、「お兄ちゃん・お姉ちゃんだから」ではなく、
          「今は下の子も使いたいみたい。どうする？」と、できるだけ状況をそのまま伝えるようにする。
          譲ってくれたときは「ありがとう、助かった」と伝えつつ、「お兄ちゃん・お姉ちゃんだから我慢して」
          という理由にはしない。上の子にも「甘えたいときは甘えていい」という余地を残しておくことが、
          結果的に下の子への優しさにもつながっていくように思います。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦らなくて大丈夫

        </h2>

        <p className="leading-8 mb-4">
          赤ちゃん返りは、上の子が下の子を嫌っているサインではなく、
          「自分も見てほしい」という自然な気持ちの表れであることがほとんどです。
          いずれ落ち着いていくものなので、「今だけのこと」と思って付き合ってみてください。
          自分の時間がなかなか取れずしんどいと感じる時期でもあるので、
          <Link href="/blog/self-time-childcare" className="text-orange-600 font-bold hover:underline">「自分の時間が全然ない」と感じたときに大切な3つの視点</Link>
          もあわせてご覧ください。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 赤ちゃん返りはいつ頃まで続きますか？</p>
            <p className="leading-7 text-gray-700">A. 個人差が大きく、数週間で落ち着くこともあれば、数ヶ月続くこともあります。下の子の成長とともに、少しずつ落ち着いていくケースが多いです。</p>
          </div>
          <div>
            <p className="font-bold">Q. 甘えさせすぎると、わがままになりませんか？</p>
            <p className="leading-7 text-gray-700">A. 赤ちゃん返りの時期に甘えさせることと、しつけは分けて考えて大丈夫です。この時期の「やって」は、不安の表れであることが多いので、まずは受け止めてあげることを優先しても問題ありません。</p>
          </div>
          <div>
            <p className="font-bold">Q. 上の子に強く当たってしまうことがあります。</p>
            <p className="leading-7 text-gray-700">A. 誰にでもあることです。強く言ってしまった後は、「さっきは強く言いすぎたね」と一言伝えるだけでも十分です。完璧を目指さなくて大丈夫です。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            わが家も、5歳の上の子と2歳・0歳のきょうだいがいます。「お兄ちゃんなんだから」は、
            正直今でも言いそうになります。ただ、「今は下の子も使いたいみたい。どうする？」と
            状況を伝える形に変えてから、上の子が自分で考えて譲ってくれることが増えたように感じます。
            我慢させることより、選ばせることの方が、結果的にうまくいくことが多いのかもしれません。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>赤ちゃん返りは、上の子が「自分も見てほしい」と伝えているサイン</li>
            <li>長さより「今はあなただけを見ているよ」が伝わる時間を意識する</li>
            <li>「お兄ちゃん・お姉ちゃんだから」ではなく、状況をそのまま伝える</li>
            <li>いずれ落ち着いていくものなので、焦らず付き合えば大丈夫</li>
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
            上の子だけの時間として、1問だけ一緒に取り組んでみませんか？
          </p>

          <Link
            href="/print"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            印刷して使う
          </Link>

        </div>

        <RelatedArticles currentSlug="akachan-gaeri" />

      </article>

    </main>
  );
}
