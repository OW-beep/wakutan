import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";

export const metadata = {
  title: "「1問だけでもいい」家庭学習のハードルを下げたら続くようになった話｜わくたん運営者の体験談",
  description:
    "きょうだいがいる忙しい毎日の中で、家庭学習を無理なく続けるためにやめたこと・変えたことを、わくたん運営者自身の体験としてまとめました。",
  alternates: {
    canonical: "/blog/drill-hurdle-down",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <ArticleSchema
        title="「1問だけでもいい」家庭学習のハードルを下げたら続くようになった話｜わくたん運営者の体験談"
        description="きょうだいがいる忙しい毎日の中で、家庭学習を無理なく続けるためにやめたこと・変えたことを、わくたん運営者自身の体験としてまとめました。"
        slug="drill-hurdle-down"
        datePublished="2026-09-13"
        dateModified="2026-09-13"
      />

      <article className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-8 shadow-lg mb-10">
          <p className="text-xs font-bold text-orange-700 mb-2">📝 運営者の体験談</p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-700 mb-4">
            「1問だけでもいい」家庭学習のハードルを下げたら、続くようになった話
          </h1>

          <p className="text-lg leading-8">
            「ちゃんとやらせなきゃ」をやめたら、親も子も少し楽になりました。
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            「今日はちゃんと勉強させないと」が続かなかった
          </h2>

          <p className="leading-8 mb-4">
            以前は、「今日はちゃんと勉強させないと」と思って、
            ある程度まとまった量のドリルをやらせようとしていました。
          </p>

          <p className="leading-8">
            でも、わが家には5歳の子どもと、2歳・0歳のきょうだいがいます。
            毎日同じように時間を取ろうとしても、下の子の世話やその日の予定で、
            思うようにいかない日の方が多いくらいでした。
            「今日もできなかった」という感覚だけが積み重なっていくのを感じていました。
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            やめたこと・変えたこと
          </h2>

          <div className="space-y-5">
            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">① 「今日は5分だけ」「1問だけでもいい」と考える</p>
              <p className="text-gray-700 leading-7">
                まとまった量をやらせようとするのをやめて、
                「今日は5分だけ」「1問だけでもいい」と考えるようにしました。
                量を減らしたというより、「これくらいならできそう」と思えるラインまで、
                ハードルを下げた感覚です。
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">② 前もって1枚だけ机に置いておく</p>
              <p className="text-gray-700 leading-7">
                ドリルも、子どもがすぐ始められるように、
                前もって机の上に1枚だけ置いておくようにしています。
                「探す」「選ぶ」という手間がなくなるだけで、
                取りかかるまでのハードルがずいぶん下がりました。
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">③ 「勉強しなさい」ではなく「これやってみる？」と誘う</p>
              <p className="text-gray-700 leading-7">
                「勉強しなさい」と言うのではなく、「これやってみる？」と軽く誘って、
                本人がやりたいものを選べるようにすることもあります。
                これを続けていると、以前より「ドリル＝長くやらされるもの」という感じが、
                子どもの中で薄れてきたように感じます。
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-5">
              <p className="font-bold mb-1">④ 空いた日を「取り戻そう」としない</p>
              <p className="text-gray-700 leading-7">
                もちろん、毎日できるわけではありません。忙しくて何日か空くこともあります。
                でも、「何日休んだから取り戻さないと」とは考えず、また1問から始めればいい、
                と考えるようにしました。
                このやり方にしてから、親の側も「今日もできなかった」と焦らなくなりました。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">
            「続けやすさ」は量より、始めるハードルの低さ
          </h2>

          <p className="leading-8">
            家庭学習は、たくさんやることより、「これなら今日もできそう」と思えることの方が、
            結果的に続きやすいのだと思います。
            1日5分でも、1問でも、「やった」という日が積み重なっていく方が、
            親にとっても子どもにとっても無理がありません。
          </p>
        </section>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">🌱 わくたんの設計にもつながった経験</p>
          <p className="leading-7">
            この経験は、わくたんを作るときにもかなり影響しています。
            「30分しっかり勉強する教材」ではなく、忙しい日でも5分程度から取り組めるドリルにしているのは、
            まさにこの「ハードルを下げる」という考え方がもとになっています。
          </p>
        </div>

        <div className="bg-yellow-100 rounded-3xl p-8 text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧸 今日は1枚だけ、わくたんのドリルを試してみる
          </h2>

          <p className="leading-7 mb-6">
            印刷不要・登録不要で、その場ですぐに1問から取り組めます。
            「今日はこれだけ」でも、十分な一歩です。
          </p>

          <Link
            href="/"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            わくたんのドリルを見てみる →
          </Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
          <p>公開日：2026年9月　/　最終更新日：2026年9月</p>
          <p className="mt-1">
            本記事は、わくたん運営者自身の子育て・家庭学習の体験をもとにまとめています。
          </p>
        </div>

        <RelatedArticles currentSlug="drill-hurdle-down" />
      </article>
    </main>
  );
}
