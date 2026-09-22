import Link from "next/link";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import { searchRakutenItems } from "@/lib/rakuten";
import RakutenProducts from "@/app/components/RakutenProducts";

export const metadata = {
  title: "「自分の時間が全然ない」と感じたときに大切な3つの視点｜わくたん",
  description:
    "子育て中、自分の時間が全然取れないと感じることはありませんか。無理に時間を作ろうとする前に知っておきたい、3つの考え方を紹介します。",
  alternates: {
    canonical: "/blog/self-time-childcare",
  },
};

export default async function Page() {
  const products = await searchRakutenItems("知育ドリル 幼児", 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <ArticleSchema
        title="「自分の時間が全然ない」と感じたときに大切な3つの視点｜わくたん"
        description="子育て中、自分の時間が全然取れないと感じることはありませんか。無理に時間を作ろうとする前に知っておきたい、3つの考え方を紹介します。"
        slug="self-time-childcare"
        datePublished="2026-09-18"
        dateModified="2026-09-18"
      />

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌷</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            「自分の時間が全然ない」と感じたときに大切な3つの視点
          </h1>

          <p className="text-lg text-gray-700">
            頑張りすぎているサインかもしれません
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          気づいたら朝から晩まで子どものことばかりで、「自分の時間」がまったくない——
          子育て中、そんな風に感じることはありませんか。
        </p>

        <p className="text-lg leading-8 mb-6">
          自分の時間がないこと自体は、多くの家庭で起きていることです。
          ただ、その状態がずっと続くと、気づかないうちに心の余裕がすり減っていきます。
          ここでは、無理に「まとまった時間」を作ろうとする前に知っておきたい、3つの考え方を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 5分でも「自分だけの時間」を確保する
        </h2>

        <p className="leading-8 mb-4">
          「自分の時間」と聞くと、1時間や半日といったまとまった時間を想像しがちです。
          でも、実際にはそんな時間を毎日作るのは難しい家庭がほとんどだと思います。
        </p>

        <p className="leading-8 mb-4">
          大切なのは長さより「自分だけのための時間かどうか」です。
          コーヒーを座って飲む5分、好きな音楽を聴きながら家事をする数分。
          それだけでも、心の状態は変わってきます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 「自分を大事にする」ことも子育ての一部
        </h2>

        <p className="leading-8 mb-4">
          自分の時間を持つことに、罪悪感を感じてしまう方もいると思います。
          「子どものために」を優先しすぎて、自分のことを後回しにし続けてしまう。
        </p>

        <p className="leading-8 mb-4">
          でも、保護者の心の余裕は、そのまま子どもへの関わり方に影響します。
          自分を大事にすることは、わがままではなく、子育てを続けるために必要なことの一つです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「自分の時間＝手を抜くこと」ではありません。長く続けるための、必要な休息です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 誰かに頼れる時は、遠慮なく頼る
        </h2>

        <p className="leading-8 mb-4">
          パートナー、祖父母、一時保育など、頼れる相手がいるなら、遠慮せず頼ることも大切です。
          「自分でなんとかしなきゃ」と抱え込みすぎると、余裕はどんどんなくなっていきます。
        </p>

        <p className="leading-8 mb-4">
          頼ることは、子育てを投げ出すことではありません。
          むしろ、無理なく続けていくための工夫の一つです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          子どもが少しだけ一人で取り組める時間をつくる
        </h2>

        <p className="leading-8 mb-4">
          まとまった自分の時間が取れない日でも、子どもが少しの間だけ一人で取り組めることがあると、
          その数分が保護者にとっての小さな息抜きになることがあります。
        </p>

        <p className="leading-8 mb-4">
          わくたんのドリルも、1問だけ・5分だけで区切って取り組める作りにしているので、
          「この時間だけ子どもにお願いしてみる」という使い方もできます。
          <Link href="/blog/busy-parent-5min" className="text-orange-600 font-bold hover:underline">忙しいママ・パパ向け 1日5分ルーティン</Link>
          もあわせてご覧ください。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          よくある質問
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-bold">Q. 自分の時間を作ろうとしても、結局子どものことを考えてしまいます。</p>
            <p className="leading-7 text-gray-700">A. それも自然なことです。無理に頭を切り替えようとせず、まずは「座って飲み物を飲む」くらいの小さな時間から始めてみると、少しずつ変わっていくことがあります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 頼れる人が近くにいません。</p>
            <p className="leading-7 text-gray-700">A. 一時保育やファミリーサポートなど、自治体のサービスを頼る選択肢もあります。「誰かに頼る＝家族以外でもいい」と考えると、選択肢が広がります。</p>
          </div>
          <div>
            <p className="font-bold">Q. 罪悪感がなくなりません。</p>
            <p className="leading-7 text-gray-700">A. 罪悪感を感じること自体、それだけ子どものことを大切に思っている証拠でもあります。無理に消そうとせず、「それでも少しだけ自分の時間を取る」を意識してみてください。</p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-2xl my-8">
          <p className="font-bold mb-2">
            🏠 わくたん運営者のわが家での工夫
          </p>
          <p className="leading-7">
            わが家も0歳・2歳・5歳のきょうだいがいて、正直「自分の時間」はほとんどありません。
            それでも、上の子がドリルに取り組んでいる数分だけは、下の子の授乳をしながらでも少し肩の力を抜けることに気づきました。
            大きな時間でなくていい。「この数分だけは自分のペースでいられる」と思える瞬間を、意識して見つけるようにしています。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🧭 今日の要点
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>長さより「自分だけの時間かどうか」を大事にする</li>
            <li>自分を大事にすることも、子育ての一部と考える</li>
            <li>頼れる時は、遠慮なく頼る</li>
            <li>子どもが少し一人で取り組める時間も、息抜きのきっかけになる</li>
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
            少しだけ自分の時間がほしい時、1問だけでもお子さんに取り組んでもらってみませんか？
          </p>

          <Link
            href="/print"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            印刷して使う
          </Link>

        </div>

        <RakutenProducts items={products} />
        <RelatedArticles currentSlug="self-time-childcare" />

      </article>

    </main>
  );
}
