import Link from "next/link";

export const metadata = {
  title: "子どもが勉強を嫌がるときは？無理なく続ける5つのコツ｜わくたん",
  description:
    "子どもが勉強を嫌がる理由と、無理なく学習を続けるための5つのコツを解説。動機づけの考え方もふまえて紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">😊</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            子どもが勉強を嫌がるときは？無理なく続ける5つのコツ
          </h1>

          <p className="text-lg text-gray-700">
            「嫌い」の裏にある理由を見つけてあげよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「さっきまで元気だったのに、ドリルを出したとたん嫌がる」——多くの家庭で見られる光景です。無理に続けさせる前に、まず理由を考えてみましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① 難易度が合っていないのかも
        </h2>

        <p className="leading-8 mb-4">
          難しすぎる問題は「できない」という経験の積み重ねになり、嫌悪感につながります。少し簡単なレベルに戻してみるのも一つの方法です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② タイミングが合っていないのかも
        </h2>

        <p className="leading-8 mb-4">
          眠い時間、お腹が空いている時間、外遊びの直後など、集中しにくいタイミングだと嫌がりやすくなります。機嫌の良い時間帯を見つけてみましょう。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「今日はやりたくない」と言われたら、無理強いせずその日は休むのも大切な選択です。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ 「やらされている」感覚があるのかも
        </h2>

        <p className="leading-8 mb-4">
          心理学でいう「外発的動機づけ」（ごほうびや命令で行動させること）に偏りすぎると、自分から取り組む意欲が育ちにくくなるといわれています。
        </p>

        <p className="leading-8 mb-4">
          「どっちからやる？」のように、小さな選択肢を与えるだけでも、「やらされている」感覚が和らぐことがあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ④ 成功体験が不足しているのかも
        </h2>

        <p className="leading-8 mb-4">
          「できた」という経験が少ないと、取り組む前から苦手意識を持ってしまうことがあります。簡単な問題から始めて、成功体験を積み重ねましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑤ 完璧を求めすぎているのかも
        </h2>

        <p className="leading-8 mb-4">
          保護者の方が無意識のうちに完璧を求めてしまうと、子どもはそのプレッシャーを敏感に感じ取ります。「間違えても大丈夫」という空気づくりが大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>勉強を嫌がる背景には、難易度・タイミング・動機づけなど様々な理由がある</li>
            <li>「やらされている」感覚を減らすには、小さな選択肢を与えるのも効果的</li>
            <li>簡単な問題からの成功体験の積み重ねが、苦手意識を減らす</li>
            <li>「間違えても大丈夫」という空気づくりがプレッシャーを和らげる</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年3月　/　最終更新日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            無理のないペースで、今日のドリルから少しずつ試してみませんか？
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
