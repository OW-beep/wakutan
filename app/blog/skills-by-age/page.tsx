import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "4歳・5歳・6歳の発達段階別 「今」伸ばしたい力｜わくたん",
  description:
    "4歳・5歳・6歳それぞれの発達段階で伸ばしたい力の違いをまとめ、年齢に合わせた家庭学習のヒントを紹介します。",
  alternates: {
    canonical: "/blog/skills-by-age",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="4歳・5歳・6歳の発達段階別 「今」伸ばしたい力｜わくたん"
        description="4歳・5歳・6歳それぞれの発達段階で伸ばしたい力の違いをまとめ、年齢に合わせた家庭学習のヒントを紹介します。"
        slug="skills-by-age"
        datePublished="2026-07-01"
        dateModified="2026-08-10"
      />


      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌱</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            4歳・5歳・6歳の発達段階別 「今」伸ばしたい力
          </h1>

          <p className="text-lg text-gray-700">
            年齢に合わせた関わり方のヒント
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          幼児期は1年ごとに大きく成長する時期です。年齢によって伸ばしやすい力も変わってくるため、今のお子さんに合った関わり方を知ることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          4歳ごろ：好奇心と数への興味
        </h2>

        <p className="leading-8 mb-4">
          「なぜ？」「どうして？」という好奇心が育つ時期です。数を数える経験や、身の回りのものへの興味を大切に伸ばしてあげましょう。
        </p>

        <p className="leading-8 mb-4">
          完璧にできることよりも、興味を持って取り組む姿勢を育てることを優先しましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          5歳ごろ：考える力とルール理解
        </h2>

        <p className="leading-8 mb-4">
          きまりを理解し、順序立てて考える力が伸びてくる時期です。パターンや論理の問題を通じて、思考力の土台を育てましょう。
        </p>

        <p className="leading-8 mb-4">
          友達との関わりの中でルールを守る経験も、この時期の大切な学びです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            4歳・5歳・6歳、どの年齢でも大切なのは「無理に先取りしないこと」です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          6歳ごろ：学習習慣と自信
        </h2>

        <p className="leading-8 mb-4">
          小学校入学が近づき、机に向かう習慣や、最後までやりきる経験が大切になる時期です。
        </p>

        <p className="leading-8 mb-4">
          「できた」という成功体験を積み重ね、学ぶことへの自信を育ててあげましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦らず、その子のペースを大切に
        </h2>

        <p className="leading-8 mb-4">
          発達のスピードには個人差があります。年齢はあくまで目安として捉え、その子自身の興味や得意なことを大切にしてあげましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢ごとの具体的な目安
        </h2>

        <p className="leading-8 mb-4">
          <span className="font-bold">4歳ごろ</span>は、1〜10までの数を順番に唱えられる、身の回りのものを2〜3個のグループに分けられる、といったあたりが1つの目安です。<span className="font-bold">5歳ごろ</span>は、10までのたし算に触れ始める、しりとりや簡単な言葉遊びを楽しめる、3つのものを比べて順番をつけられる、といった力が育ってきます。<span className="font-bold">6歳ごろ</span>になると、繰り上がりのある計算に挑戦できる、ひらがな・カタカナを読んで簡単な文章の意味を理解できる、時計の「〇時」「〇時半」を読めるようになる、といった小学校入学に向けた力が伸びてきます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            📚 年齢ごとの学び方をもっと詳しく
          </p>
          <p>
            それぞれの年齢での関わり方をより詳しく知りたい方は、
            <Link href="/blog/how-4year-learn" className="text-orange-600 font-bold hover:underline">4歳の学び方</Link>
            ・
            <Link href="/blog/how-5year-learn" className="text-orange-600 font-bold hover:underline">5歳の学び方</Link>
            ・
            <Link href="/blog/how-6year-learn" className="text-orange-600 font-bold hover:underline">6歳の学び方</Link>
            もあわせてご覧ください。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          最近「ここ成長したな」と感じた瞬間
        </h2>

        <p className="leading-8 mb-4">
          3人いると、同じ家庭で育っていても、成長の仕方が全然違うことを実感します。5歳の上の子は、最近特に「自分の考えを説明する力」が伸びてきたと感じます。以前は「分からない」で終わっていた問題でも、今は「こう思ったから」と理由を話してくれることがあります。「こっちだと思った。だって○○だから」と説明できるようになってきました。
        </p>

        <p className="leading-8 mb-4">
          2歳の子は、「自分でやりたい」という気持ちがかなり強くなりました。着替えや片付けなど、「自分でやる」と言って親の手を断ることもあります。時間がかかるので、つい手伝いたくなりますが、これも成長の一つだと思って、できるだけ待つようにしています。0歳の子は、まだ「学習」という段階ではありませんが、最近は周りの2人をよく目で追ったり、声を出して反応したりするようになりました。上の2人が遊んでいるところに興味を示すことも増えています。
        </p>

        <p className="leading-8 mb-4">
          3人を見ていると、「伸ばしたい力」を年齢で決めすぎない方がいいとも感じます。5歳なら考える力、2歳なら自分でやってみる力、0歳なら見る・聞く・触れるといった経験。その時期に自然に出てきている力を大切にしたいと思っています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 「自分の考えを説明する力」はどう育てればいい？</p>
            <p className="leading-7 text-gray-700">A. 「どうしてそう思ったの？」と理由を聞く習慣が効果的です。正解・不正解に関わらず、自分の考えを言葉にする経験を積み重ねることで、少しずつ育っていきます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 「自分でやりたい」と言う子に、つい手を出してしまいます。</p>
            <p className="leading-7 text-gray-700">A. 時間がかかっても、できるだけ待ってあげるのがおすすめです。急いでいるときは「今日は手伝うね、明日は自分でやってみようか」と伝えると、気持ちの折り合いがつけやすくなります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 下の子が上の子の真似ばかりします。問題ない？</p>
            <p className="leading-7 text-gray-700">A. 全く問題ありません。きょうだいの様子を見て真似することも、その子にとって大切な学びの一つです。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            「できることを増やす」より、「その年齢で今伸びている力を大事にする」ことを意識するようになりました。5歳なら考える力、2歳なら自分でやってみる力、0歳なら見る・聞く・触れるといった経験。その時期に自然に出てきている力に注目すると、無理に何かをやらせようとする気持ちが自然と減っていきました。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>4歳は好奇心と数への興味を大切に育てる時期</li>
            <li>5歳は考える力とルール理解が伸びる時期</li>
            <li>6歳は学習習慣と自信を育てる時期</li>
            <li>年齢はあくまで目安。その子のペースを大切に</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月　/　最終更新日：2026年8月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            お子さんの年齢に合わせた、今日のドリルを試してみませんか？
          </p>

          <Link
            href="/articles"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            年齢別の記事をもっと見る
          </Link>

        </div>

        <RelatedArticles currentSlug="skills-by-age" />

      </article>

    </main>
  );
}
