import Link from "next/link";

export const metadata = {
  title: "幼児の集中力を伸ばす方法｜家庭で今日からできるコツ｜わくたん",
  description:
    "幼児の集中力を伸ばす方法を、年齢別の目安データとあわせて解説。家庭で今日から取り入れられる具体的な工夫を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🎯</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            幼児の集中力を伸ばす方法｜家庭で今日からできるコツ
          </h1>

          <p className="text-lg text-gray-700">
            「年齢＋1分」を目安に、無理のない環境づくりを
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「うちの子、集中力がなくて心配」という声はよく聞かれますが、実は幼児の集中力には年齢なりの目安があり、多くの場合は心配しすぎる必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢別の集中力の目安
        </h2>

        <p className="leading-8 mb-4">
          教育・保育分野でよく紹介される目安として、「集中力が続く時間は年齢＋1分程度」という考え方があります。3歳なら3〜4分、4歳なら4〜5分、5歳なら5〜6分というのが一つの計算です。
        </p>

        <p className="leading-8 mb-4">
          この目安に照らすと、多くの子は年齢相応の集中力を持っていることになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          環境を整える
        </h2>

        <p className="leading-8 mb-4">
          テレビの音や周囲のおもちゃなど、視界に入る刺激が多いと集中しにくくなります。取り組む時間だけ、机の上をシンプルにするのがおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            散らかった部屋は視覚的な情報量が多く、脳の処理負荷が増えると考えられています。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          量を区切って取り組む
        </h2>

        <p className="leading-8 mb-4">
          「10問全部」ではなく「3問だけ」のように、量を区切って取り組むと、達成感を得やすく集中力も保ちやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          集中している時は見守る
        </h2>

        <p className="leading-8 mb-4">
          子どもが何かに集中しているときに、「すごいね」「どうやったの？」と話しかけたくなりますが、集中を途切れさせる原因になることもあります。一区切りつくまで見守るのも大切な関わり方です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          好きなことから始める
        </h2>

        <p className="leading-8 mb-4">
          興味のあることには、目安の時間より長く集中できることも珍しくありません。得意なジャンルや好きなテーマから取り組み始めるのも、集中力を引き出すコツです。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>集中力の目安は「年齢＋1分」程度といわれている</li>
            <li>机の上をシンプルにするなど、環境を整えることが効果的</li>
            <li>量を区切って取り組むと達成感を得やすい</li>
            <li>集中しているときは、声かけを控えて見守るのも大切</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            年齢に合った分量で、今日のドリルにチャレンジしてみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            今日のドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
