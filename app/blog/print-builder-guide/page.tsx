import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import AdUnit from "@/app/components/AdUnit";
import { IN_ARTICLE_AD_SLOT } from "@/app/data/adSlots";
import FavoriteButton from "@/app/components/FavoriteButton";

export const metadata = {
  title: "苦手なジャンルだけを復習できる、オリジナルプリントの作り方",
  description:
    "わくたんの「印刷ビルダー」を使うと、年齢とジャンルを選ぶだけで、苦手なところだけを集めたオリジナルのプリントを作れます。使い方をわかりやすく紹介します。",
  alternates: {
    canonical: "/blog/print-builder-guide",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="苦手なジャンルだけを復習できる、オリジナルプリントの作り方｜わくたん"
        description="わくたんの「印刷ビルダー」を使うと、年齢とジャンルを選ぶだけで、苦手なところだけを集めたオリジナルのプリントを作れます。使い方をわかりやすく紹介します。"
        slug="print-builder-guide"
        datePublished="2026-09-29"
        dateModified="2026-09-29"
      />

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🖨️</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            苦手なジャンルだけを復習できる、オリジナルプリントの作り方
          </h1>

          <p className="text-lg text-gray-700">
            年齢とジャンルを選ぶだけで、1枚にまとめて印刷できます
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          「うちの子、ひらがなはできるけど、なかまはずれが苦手かも」
          「さんすうだけ、もう少し練習させたい」——そんなときに便利な、
          わくたんの「印刷ビルダー」機能を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          印刷ビルダーでできること
        </h2>

        <p className="leading-8 mb-4">
          これまでのわくたんは、その日の10問をまとめて表示・印刷する形でした。
          印刷ビルダーを使うと、次のように自由に組み合わせて1枚のプリントを作れます。
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0">①</span>
            <p className="text-gray-700 leading-7">年齢（4歳・5歳・6歳）を選ぶ</p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0">②</span>
            <p className="text-gray-700 leading-7">
              練習したいジャンルを選ぶ（さんすう・ひらがな・なかまはずれなど、複数選択OK）
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-orange-600 shrink-0">③</span>
            <p className="text-gray-700 leading-7">ジャンルごとの問題数（3問・5問・10問）を選ぶ</p>
          </div>
        </div>

        <p className="leading-8 mb-4">
          これだけで、「なかまはずれを5問」「くらべっこを3問」のように、
          苦手なところだけを集めたオリジナルのプリントがその場で作れます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            毎日10問全部をやる必要はありません。今日は苦手なジャンルだけ3問、という使い方も気軽にできます。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          こんな使い方がおすすめです
        </h2>

        <p className="leading-8 mb-4">
          学校や園の様子を見て「最近これが苦手かも」と感じたジャンルを重点的に選んでみてください。
          逆に、得意なジャンルを選んで「できた」を増やす自信づけの1枚にするのもおすすめです。
        </p>

        <p className="leading-8 mb-4">
          きょうだいで年齢が違う場合は、年齢ごとに作り直せば、それぞれに合ったプリントを用意できます。
          プリント学習そのものについては、
          <Link href="/blog/print-learning" className="text-orange-600 font-bold hover:underline">プリント学習のメリットとは？家庭学習を続けるコツ</Link>
          もあわせてご覧ください。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 会員登録は必要ですか？</p>
            <p className="leading-7 text-gray-700">A. 不要です。ページを開いて選ぶだけで、その場でプリントを作成・印刷できます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 同じジャンルでも、毎回違う問題になりますか？</p>
            <p className="leading-7 text-gray-700">A. はい。作成するたびに、そのジャンルの中から問題が選ばれるので、繰り返し使っても新鮮に取り組めます。</p>
          </div>
          <div>
            <p className="font-bold">Q. 答えも印刷されますか？</p>
            <p className="leading-7 text-gray-700">A. 問題のみが印刷されます。答え合わせは、お子さんが解き終わった後に画面で確認してください。</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>印刷ビルダーなら、年齢とジャンルを選ぶだけでオリジナルプリントが作れる</li>
            <li>苦手なジャンルだけを重点的に練習することも、得意なジャンルで自信をつけることもできる</li>
            <li>会員登録不要、その場ですぐに作成・印刷できる</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年9月　/　最終更新日：2026年9月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6 text-center">

          <h3 className="font-bold text-xl mb-3">
            🖨️ さっそく印刷ビルダーを試してみる
          </h3>

          <p className="mb-3">
            年齢とジャンルを選んで、1枚のオリジナルプリントを作ってみましょう。
          </p>

          <Link
            href="/print"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            印刷ビルダーを開く
          </Link>

        </div>

        <AdUnit slot={IN_ARTICLE_AD_SLOT} className="my-8" />
        <FavoriteButton href="/blog/print-builder-guide" title="苦手なジャンルだけを復習できる、オリジナルプリントの作り方" />
        <RelatedArticles currentSlug="print-builder-guide" />

      </article>

    </main>
  );
}
