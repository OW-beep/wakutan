import Link from "next/link";

export const metadata = {
  title: "家庭学習を続けるコツ｜わくたん",
  description:
    "幼児の家庭学習が続かないと悩む保護者向け。無理なく習慣化する方法や、勉強嫌いを防ぐコツを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">
            🌱
          </div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            家庭学習を続けるコツ
          </h1>

          <p className="text-lg text-gray-700">
            「続かない」を「当たり前」に変える方法
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          「最初はやる気だったのに続かなかった」
          「数日で飽きてしまった」
          「勉強しようと言うと嫌がる」
          そんな悩みを持つ保護者の方は少なくありません。
        </p>

        <p className="text-lg leading-8 mb-6">
          実は家庭学習で最も難しいのは、
          問題を解くことではなく、
          続けることです。
        </p>

        <p className="text-lg leading-8 mb-6">
          そして続かない原因の多くは、
          子どもの能力ではなく、
          やり方にあります。
        </p>

        <p className="text-lg leading-8 mb-6">
          本記事では、幼児の家庭学習を無理なく続けるためのコツを紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          毎日少しだけにする
        </h2>

        <p className="leading-8 mb-4">
          家庭学習が続かない最大の原因は、
          最初から頑張りすぎることです。
        </p>

        <p className="leading-8 mb-4">
          「今日は30分やろう」
          「10ページやろう」
          と決めると、
          子どもも保護者も疲れてしまいます。
        </p>

        <p className="leading-8 mb-4">
          おすすめは、
          1日3問、
          1日5分など、
          とても小さな目標にすることです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>

          <p>
            頑張る量ではなく、
            続ける回数を増やしましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          時間を固定する
        </h2>

        <p className="leading-8 mb-4">
          人は決まった時間に同じ行動をすると、
          習慣になりやすいと言われています。
        </p>

        <p className="leading-8 mb-4">
          例えば、
          朝ごはんの後、
          お風呂の前、
          寝る前など、
          毎日同じタイミングに学習時間を設定します。
        </p>

        <p className="leading-8 mb-4">
          「やるかどうか」を考えなくなると、
          続きやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          正解より挑戦をほめる
        </h2>

        <p className="leading-8 mb-4">
          子どもは結果よりも、
          保護者の反応を見ています。
        </p>

        <p className="leading-8 mb-4">
          間違えたときに
          「違うよ」
          と言われ続けると、
          挑戦すること自体が嫌になります。
        </p>

        <p className="leading-8 mb-4">
          「よく考えたね」
          「最後までできたね」
          と過程をほめることで、
          学習への前向きな気持ちが育ちます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            👏 おすすめの声かけ
          </p>

          <ul className="list-disc ml-6">
            <li>最後までできたね</li>
            <li>自分で考えたね</li>
            <li>昨日より早かったね</li>
            <li>頑張って取り組めたね</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          完璧を目指さない
        </h2>

        <p className="leading-8 mb-4">
          毎日続けるといっても、
          365日欠かさずやる必要はありません。
        </p>

        <p className="leading-8 mb-4">
          体調が悪い日や、
          お出かけの日もあります。
        </p>

        <p className="leading-8 mb-4">
          大切なのは、
          休んだことではなく、
          また再開することです。
        </p>

        <p className="leading-8 mb-4">
          「昨日できなかったからもういいや」
          ではなく、
          「今日はやろう」
          と考えることが習慣化のコツです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          子どもが選べるようにする
        </h2>

        <p className="leading-8 mb-4">
          人は自分で選んだことに対して、
          やる気が出やすくなります。
        </p>

        <p className="leading-8 mb-4">
          「算数からやる？」
          「論理問題からやる？」
          と選択肢を与えてみましょう。
        </p>

        <p className="leading-8 mb-4">
          強制される勉強ではなく、
          自分で選ぶ学習になります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          家庭学習は競争ではない
        </h2>

        <p className="leading-8 mb-4">
          他の子と比べる必要はありません。
        </p>

        <p className="leading-8 mb-4">
          幼児期の学習で大切なのは、
          今どれだけできるかではなく、
          学ぶことを好きになることです。
        </p>

        <p className="leading-8 mb-4">
          学習習慣が身につけば、
          小学校以降の学びにも良い影響があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          わくたんがおすすめする学習法
        </h2>

        <p className="leading-8 mb-4">
          わくたんでは、
          算数・論理・パターン問題を通じて、
          毎日少しだけ考える習慣を応援しています。
        </p>

        <p className="leading-8 mb-4">
          1日3問でも十分です。
          大切なのは続けることです。
        </p>

        <p className="leading-8 mb-4">
          「今日はできた！」
          を積み重ねることで、
          学ぶことが自然な習慣になります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌟 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>毎日少しだけ取り組む</li>
            <li>学習時間を固定する</li>
            <li>正解より挑戦をほめる</li>
            <li>完璧を目指さない</li>
            <li>子ども自身に選ばせる</li>
            <li>学ぶことを好きになることが最優先</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            わくわくたんけんたい「わくたん」で、
            今日の3問にチャレンジ！
          </p>

          <Link
            href="/5"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            5さいドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}