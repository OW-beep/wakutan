import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "習い事は何を基準に選ぶ？4〜6歳の習い事選びで大切にしたい考え方｜わくたん",
  description:
    "4〜6歳の習い事選びは「人気ランキング」より「何を大切にしたいか」から考えるのがおすすめです。目的・子どもの興味・家庭の条件の整理の仕方と、無料の習い事診断ツールを紹介します。",
  alternates: {
    canonical: "/blog/narai-shindan-guide",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <ArticleSchema
        title="習い事は何を基準に選ぶ？4〜6歳の習い事選びで大切にしたい考え方｜わくたん"
        description="4〜6歳の習い事選びは「人気ランキング」より「何を大切にしたいか」から考えるのがおすすめです。目的・子どもの興味・家庭の条件の整理の仕方と、無料の習い事診断ツールを紹介します。"
        slug="narai-shindan-guide"
        datePublished="2026-09-12"
        dateModified="2026-09-12"
      />

      <article className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-8 shadow-lg mb-10">
          <div className="text-6xl mb-4">🧭</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-4">
            習い事は何を基準に選ぶ？
          </h1>

          <p className="text-lg leading-8">
            「まわりが習っているから」「人気だから」で選ぶ前に、
            一度立ち止まって考えたいポイントを整理しました。
          </p>
        </div>

        <div className="bg-white border-2 border-dashed border-orange-200 rounded-2xl p-6 mb-8">
          <p className="font-bold text-orange-700 mb-2">📋 この記事でわかること</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>習い事選びで「ランキング」より大切な視点</li>
            <li>目的・子どもの興味・家庭の条件を整理する考え方</li>
            <li>無料の「わくたん習い事診断」の使い方</li>
          </ul>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            人気ランキングだけで選ぶと起こりがちなこと
          </h2>

          <p className="leading-8 mb-4">
            習い事を検討し始めると、つい「人気の習い事ランキング」のような情報を探したくなります。
            もちろん参考にはなりますが、ランキング上位の習い事が、
            そのままお子さんに合うとは限りません。
          </p>

          <p className="leading-8 mb-4">
            体を動かすのが好きなお子さんに、じっと座って取り組む習い事を選んでしまったり、
            逆に、じっくり集中して取り組みたいタイプのお子さんに、
            常に体を動かし続けるタイプの習い事を選んでしまったり。
            「人気だから」で選ぶと、こうしたミスマッチが起こりやすくなります。
          </p>

          <p className="leading-8">
            大切なのは、「何が人気か」ではなく、
            「うちの子に、今どんな経験をさせるとよさそうか」という視点だと考えています。
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            習い事選びを整理する4つの視点
          </h2>

          <div className="space-y-4">
            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">① 何を伸ばしたいのか（目的）</p>
              <p className="text-gray-700 leading-7">
                体力・考える力・表現力・協調性など、
                家庭として大切にしたいことをまず整理します。
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">② 子どもはどんなタイプか</p>
              <p className="text-gray-700 leading-7">
                好きな遊びや、集中の仕方・初めての場所への慣れやすさなど、
                お子さんの傾向を観察してみます。
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">③ 家庭の条件</p>
              <p className="text-gray-700 leading-7">
                予算・頻度・送迎の負担など、無理なく続けられる条件も、
                最初に整理しておくと選びやすくなります。
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">④ 今の経験が将来どう活きそうか</p>
              <p className="text-gray-700 leading-7">
                「今すぐ何かができるようになる」だけでなく、
                小学生・中学生になったときにどんな場面で活かせそうかという
                長い目線も、選ぶときの手がかりになります。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            親の希望と子どもの興味がズレることもある
          </h2>

          <p className="leading-8 mb-4">
            「英語を身につけてほしい」という親の希望と、
            「体を動かすのが好き」という子どもの興味のように、
            家庭の目的とお子さんの興味の方向性が異なることは珍しくありません。
          </p>

          <p className="leading-8">
            そのときに大切なのは、どちらか一方だけで決めてしまうのではなく、
            一度立ち止まって、両方を見比べてみることです。
            目的に近づく方法は一つではないので、
            お子さんが楽しみながら取り組める形を探す余地は、意外とたくさんあります。
          </p>
        </section>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">🏠 わくたん運営者のわが家での工夫</p>
          <p className="leading-7">
            わが家でも、習い事を検討する際に「これが人気らしいから」で候補を決めかけたことがありました。
            ただ、実際に子どもの様子を振り返ってみると、
            じっと座って説明を聞くタイプの活動よりも、体を動かしながら覚えるタイプの活動の方が、
            表情も反応も明らかに良いことに気づきました。
            人気かどうかより、目の前の子どもの反応を基準にするようになってから、
            習い事選びで「合わなかった」と感じることが減ったように思います。
          </p>
        </div>

        <div className="bg-yellow-100 rounded-3xl p-8 text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧭 わくたん習い事診断で整理してみる
          </h2>

          <p className="leading-7 mb-6">
            目的・子どもの興味・性格・家庭の条件を6つの質問で整理し、
            相性の良さそうな習い事TOP3と、その理由を無料で見ることができます。
          </p>

          <Link
            href="/narai-shindan"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            わくたん習い事診断をはじめる →
          </Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
          <p>公開日：2026年9月　/　最終更新日：2026年9月</p>
          <p className="mt-1">
            本記事は、わくたん運営者が家庭での習い事選びを検討する中で感じたことをもとにまとめています。
          </p>
        </div>

        <RelatedArticles currentSlug="narai-shindan-guide" />
      </article>
    </main>
  );
}
