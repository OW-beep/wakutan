import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import { searchRakutenItems } from "@/lib/rakuten";
import RakutenProducts from "@/app/components/RakutenProducts";

export const metadata = {
  title: "年長さんの家庭学習、何をすればいい？1年間の進め方｜わくたん",
  description:
    "年長さんの家庭学習は、何を・どれくらい進めればいいか迷う方も多いはずです。小学校入学までの1年間を見通した、無理のない家庭学習の進め方を紹介します。",
  alternates: {
    canonical: "/blog/nencho-katei-gakushu",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("知育ドリル 年長", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="年長さんの家庭学習、何をすればいい？1年間の進め方｜わくたん"
        description="年長さんの家庭学習は、何を・どれくらい進めればいいか迷う方も多いはずです。小学校入学までの1年間を見通した、無理のない家庭学習の進め方を紹介します。"
        slug="nencho-katei-gakushu"
        datePublished="2026-09-26"
        dateModified="2026-09-26"
      />

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🎒</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            年長さんの家庭学習、何をすればいい？
          </h1>

          <p className="text-lg text-gray-700">
            小学校入学までの1年間、あせらず進める工夫
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          年長になると、まわりから「小学校入学までにどれくらい勉強させておくべき？」という声を聞く機会が増え、
          何をどれくらい進めればいいのか迷う方も多いと思います。
        </p>

        <p className="text-lg leading-8 mb-6">
          結論から言うと、年長の1年間で目指したいのは「先取り学習」よりも「学ぶ土台づくり」です。
          ここでは、時期ごとの目安と、無理のない進め方を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年長の家庭学習で目指したい3つのこと
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-orange-50 rounded-2xl p-5">
            <p className="font-bold mb-1">① 机に向かう習慣</p>
            <p className="text-gray-700 leading-7">
              内容の難しさより、「短時間でも毎日机に向かう」という習慣づけを優先します。
              1日5分・1問からで十分です。
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-5">
            <p className="font-bold mb-1">② ひらがな・数字の土台</p>
            <p className="text-gray-700 leading-7">
              「完璧に書ける」より、「読める・興味を持てる」ことを優先します。
              書く練習は運筆（線をなぞる・点を結ぶ）から無理なく進めます。
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-5">
            <p className="font-bold mb-1">③ 話を聞く・考える力</p>
            <p className="text-gray-700 leading-7">
              指示を最後まで聞く、自分で考えてから答える。学力そのものより、
              小学校の授業についていくための土台になる力です。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          1年間の進め方の目安
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0 w-24">4〜6月</span>
            <p className="text-gray-700 leading-7">
              生活リズムの中に「机に向かう時間」を少しずつ組み込む時期。量より習慣づくりを優先します。
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0 w-24">7〜9月</span>
            <p className="text-gray-700 leading-7">
              夏休みを挟み、生活リズムが崩れやすい時期。休んでも「また1問から」で焦らず再開します。
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0 w-24">10〜12月</span>
            <p className="text-gray-700 leading-7">
              就学時健診など、小学校を意識する行事が増える時期。持ち物の管理など生活面の準備も少しずつ。
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0 w-24">1〜3月</span>
            <p className="text-gray-700 leading-7">
              入学直前期。学習内容を増やすより、早寝早起きなど生活リズムを小学校仕様に近づけていきます。
            </p>
          </div>
        </div>

        <p className="leading-8 mb-4">
          時期ごとの持ち物・生活面の準備をもっと詳しく知りたい方は、
          <Link href="/blog/6year-prep-timeline" className="text-orange-600 font-bold hover:underline">小学校入学準備、いつ何をすればいい？月ごとの目安</Link>
          もあわせてご覧ください。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. まわりの子はもう足し算をしていますが、うちはまだひらがなも怪しいです。焦った方がいいですか？</p>
            <p className="leading-7 text-gray-700">A. 進み方には個人差が大きく、年長の時点でのできる・できないは、小学校入学後の学力にそのまま直結するものではありません。今の興味に合わせて、無理なく進めれば大丈夫です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 毎日は続きません。それでも大丈夫ですか？</p>
            <p className="leading-7 text-gray-700">A. 大丈夫です。毎日続けることより、休んだ日を「取り戻そう」とせず、また1問から再開できることの方が、長い目で見ると大切です。</p>
          </div>
          <div>
            <p className="font-bold">Q. 通信教材や幼児教室に通わせた方がいいですか？</p>
            <p className="leading-7 text-gray-700">A. 必須ではありません。家庭でのちょっとした工夫でも、机に向かう習慣や考える力は十分育てられます。お子さんやご家庭に合う方法を選べば大丈夫です。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            わが家の5歳（年長）の子も、最初は机に向かうこと自体を嫌がっていました。
            「今日は1問だけ」と決めてからは、拍子抜けするくらいすんなり座ってくれるようになりました。
            内容の難しさより、「今日もできた」を積み重ねることの方が、この1年間はずっと大事なのだと感じています。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>年長の1年間は「先取り」より「学ぶ土台づくり」を優先する</li>
            <li>机に向かう習慣・ひらがなや数字への興味・話を聞く力の3つを意識する</li>
            <li>できない日があっても、また1問から再開すればいい</li>
            <li>通信教材や幼児教室は必須ではなく、家庭の工夫でも十分育てられる</li>
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
            まずは1問だけ、年長向けのドリルを試してみませんか？
          </p>

          <Link
            href="/6"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            6歳（年長）のドリルを見る
          </Link>

        </div>

        <RakutenProducts items={products} />
        <RelatedArticles currentSlug="nencho-katei-gakushu" />

      </article>

    </main>
  );
}
