import Link from "next/link";

export const metadata = {
  title: "図形遊びの効果｜図形感覚・空間認識力を育てよう｜わくたん",
  description:
    "図形遊びは空間認識力や図形感覚、考える力を育てる知育遊びです。4〜6歳向けに図形遊びのメリットと、小学校の学習へのつながりを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔺</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            図形遊びの効果｜図形感覚・空間認識力を育てよう
          </h1>

          <p className="text-lg text-gray-700">
            ○△□に親しむことが算数につながる
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          丸・三角・四角など、身の回りにあふれる図形。図形遊びは、算数の学習につながる大切な感覚を育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          図形感覚が育つ
        </h2>

        <p className="leading-8 mb-4">
          積み木やパズルで図形に触れる経験を通して、形の特徴を感覚的に理解する力が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          空間認識力が育つ
        </h2>

        <p className="leading-8 mb-4">
          積み木を組み立てたり、パズルのピースを回転させて合わせたりする経験は、空間認識力を育てます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「これは三角、これは四角」と言葉にする習慣も、図形の理解を深めます。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          身の回りの図形を探すゲーム
        </h2>

        <p className="leading-8 mb-4">
          「まる、みつけた」「テレビは四角だね」のように、日常の中で図形を探すゲームは特別な道具なしで手軽に取り組めます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          積み木・折り紙での図形遊び
        </h2>

        <p className="leading-8 mb-4">
          積み木は「同じ形を重ねる」「違う形を組み合わせる」という体験を通して、図形の性質を自然に学べます。
        </p>

        <p className="leading-8 mb-4">
          折り紙も、四角を三角に折る、さらに小さな三角にするといった過程で、図形が変化する様子を体感できる良い教材です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          図形はドリルとも相性が良い
        </h2>

        <p className="leading-8 mb-4">
          パターン問題や仲間わけの問題には、図形の理解が役立つ場面が多くあります。遊びで育てた感覚をドリルで確認してみましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          小学校の図形学習へのつながり
        </h2>

        <p className="leading-8 mb-4">
          小学校の算数では、図形の性質を学んだり、面積や角度を考えたりする単元があります。
        </p>

        <p className="leading-8 mb-4">
          幼児期に図形に親しんでおくことは、こうした学習に対する苦手意識を減らすことにつながります。難しい用語を教える必要はなく、「触れて楽しむ」経験の積み重ねが大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>図形遊びは図形感覚・空間認識力を育てる</li>
            <li>積み木やパズル、折り紙は図形の理解に役立つ</li>
            <li>身の回りの図形探しは道具なしで手軽にできる</li>
            <li>幼児期の図形遊びは小学校の図形学習の土台になる</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            図形の感覚を活かして、今日のパターン問題にも挑戦してみませんか？
          </p>

          <Link
            href="/4/pattern"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            パターンドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
