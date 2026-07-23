import Link from "next/link";

export const metadata = {
  title: "小学校入学前に身につけたい力｜わくたん",
  description:
    "小学校入学前の勉強・準備で身につけたい力を解説。文字や計算だけではない、本当に大切な力とは？",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">

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
            ❓ よくある質問
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

          <p className="leading-8">
            学ぶことを楽しむ気持ちと、
            自分で考える習慣です。
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

        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-500">
          <p>公開日：2026年3月　/　最終更新日：2026年7月</p>
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

      </article>

    </main>
  );
}
