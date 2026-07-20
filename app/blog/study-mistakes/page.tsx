import Link from "next/link";

export const metadata = {
  title: "幼児の家庭学習でやってはいけないこと5つ｜わくたん",
  description:
    "幼児期の家庭学習でありがちな失敗パターンを5つ紹介し、それぞれの改善のヒントをまとめました。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🙅</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            幼児の家庭学習でやってはいけないこと5つ
          </h1>

          <p className="text-lg text-gray-700">
            よくある失敗パターンから学ぼう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          良かれと思ってやっていることが、実は子どもの学習意欲を下げてしまっている——そんなケースは少なくありません。
        </p>

        <p className="text-lg leading-8 mb-6">
          ここでは、幼児期の家庭学習でありがちな失敗パターンを5つ紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 長時間やらせすぎる
        </h2>

        <p className="leading-8 mb-4">
          「せっかくだから」とつい長く取り組ませてしまいがちですが、幼児期の集中力は5〜15分程度が目安です。
        </p>

        <p className="leading-8 mb-4">
          長時間の学習は、かえって「勉強はつらいもの」という印象につながることがあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② 間違いを強く指摘しすぎる
        </h2>

        <p className="leading-8 mb-4">
          間違えるたびに厳しく指摘すると、「間違えるのが怖い」という気持ちが育ってしまいます。
        </p>

        <p className="leading-8 mb-4">
          「どこまで考えたか」を一緒に振り返る姿勢を大切にしましょう。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ヒント
          </p>
          <p>
            間違いは「悪いこと」ではなく「考えた証拠」として捉えてみましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 他の子と比べる
        </h2>

        <p className="leading-8 mb-4">
          「○○ちゃんはもうできるのに」という比較は、自信を失わせる大きな原因になります。
        </p>

        <p className="leading-8 mb-4">
          比べるなら、その子自身の「前」との比較にしましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ④ ごほうびに頼りすぎる
        </h2>

        <p className="leading-8 mb-4">
          ごほうび自体は悪いものではありませんが、「ごほうびがないとやらない」状態になってしまうと、本来の学ぶ楽しさが育ちにくくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑤ 保護者がイライラしながら付き合う
        </h2>

        <p className="leading-8 mb-4">
          忙しい中で付き合うと、つい表情や口調にイライラが出てしまうことがあります。子どもはその空気を敏感に感じ取ります。
        </p>

        <p className="leading-8 mb-4">
          難しい日は無理せず、「今日はお休み」にする勇気も大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>長時間やらせすぎず、5〜15分程度を目安にする</li>
            <li>間違いを責めず、考えた過程を一緒に振り返る</li>
            <li>他の子ではなく、その子自身の成長と比べる</li>
            <li>ごほうびに頼りすぎず、無理な日は休む勇気も大切</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            無理のないペースで、今日のドリルから始めてみませんか？
          </p>

          <Link
            href="/category/parent"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            保護者向け記事をもっと見る
          </Link>

        </div>

      </article>

    </main>
  );
}
