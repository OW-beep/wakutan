import Link from "next/link";

export const metadata = {
  title: "忙しいママ・パパ向け 1日5分ルーティン｜わくたん",
  description:
    "仕事や家事で忙しい保護者向けに、無理なく続けられる1日5分の家庭学習ルーティンの作り方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">⏰</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            忙しいママ・パパ向け 1日5分ルーティン
          </h1>

          <p className="text-lg text-gray-700">
            毎日じゃなくていい。無理なく続けるコツ
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「家庭学習が大事なのはわかっていても、毎日は難しい」——共働きや家事で忙しい保護者の方には、切実な悩みだと思います。
        </p>

        <p className="text-lg leading-8 mb-6">
          実は、毎日長時間取り組むよりも、短時間でも続けやすいルーティンを作る方が、学習習慣は定着しやすいといわれています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          「毎日」より「決まったタイミング」
        </h2>

        <p className="leading-8 mb-4">
          「毎日必ず」と決めるとプレッシャーになりがちです。それよりも「朝ごはんの後」「お風呂の前」など、生活の中の決まったタイミングに組み込む方が続けやすくなります。
        </p>

        <p className="leading-8 mb-4">
          週に3〜4回でも、続けられていればしっかり効果があります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          5分でできる範囲に区切る
        </h2>

        <p className="leading-8 mb-4">
          わくたんのドリルも、10問すべてでなく「今日は3問だけ」のように区切って取り組んで問題ありません。
        </p>

        <p className="leading-8 mb-4">
          短時間でも「終わった」という達成感を積み重ねることが継続のコツです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            完璧を目指さず、「今日もできた」の積み重ねを大切にしましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          印刷しておいて隙間時間に
        </h2>

        <p className="leading-8 mb-4">
          🖨印刷機能を使って、週末にまとめて数枚印刷しておくと、平日の隙間時間にすぐ取り組めます。
        </p>

        <p className="leading-8 mb-4">
          外出先や待ち時間にも活用できるので、忙しいご家庭にもおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          できなかった日があってもOK
        </h2>

        <p className="leading-8 mb-4">
          忙しい日は無理に取り組まなくても大丈夫です。「今日はお休み」と割り切ることも、長く続けるためには大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>「毎日必ず」より生活の中の決まったタイミングに組み込む</li>
            <li>5分・3問など、できる範囲に区切って取り組む</li>
            <li>印刷しておくと隙間時間に活用しやすい</li>
            <li>できない日があっても大丈夫。無理なく続けることが大切</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年6月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            週末にまとめて印刷して、平日は隙間時間にサッと取り組んでみませんか？
          </p>

          <Link
            href="/print"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            印刷して使う
          </Link>

        </div>

      </article>

    </main>
  );
}
