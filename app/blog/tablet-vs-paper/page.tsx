import Link from "next/link";

export const metadata = {
  title: "タブレット学習と紙のドリル、どう使い分ける？｜わくたん",
  description:
    "幼児向けのタブレット学習アプリと紙のドリル、それぞれのメリットと使い分け方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">📱</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            タブレット学習と紙のドリル、どう使い分ける？
          </h1>

          <p className="text-lg text-gray-700">
            それぞれの良さを知って、バランスよく取り入れよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          知育アプリやタブレット教材が身近になり、「紙とどちらがいいの？」と迷う保護者の方も増えています。
        </p>

        <p className="text-lg leading-8 mb-6">
          結論としては、どちらか一方ではなく、目的に応じて使い分けるのがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          タブレット学習のメリット
        </h2>

        <p className="leading-8 mb-4">
          音声やアニメーションで直感的に理解しやすく、自動で丸つけをしてくれる手軽さも魅力です。子どもが自分でどんどん進められる点も便利です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          紙のドリルのメリット
        </h2>

        <p className="leading-8 mb-4">
          鉛筆を持って書く動作そのものが、運筆力や手先の発達を促します。また、画面を長時間見続けないという点も、幼児期には安心材料の一つです。
        </p>

        <p className="leading-8 mb-4">
          小学校の授業やテストは今も紙が中心のため、紙に書く経験に慣れておくことにも意味があります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            どちらが優れているというより、鍛えられる力が少し違うと捉えるとよいでしょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          画面時間とのバランスも意識したい
        </h2>

        <p className="leading-8 mb-4">
          小児科領域では、幼児期の長時間のスクリーンタイムについて注意を促す意見も多くあります。タブレット学習を取り入れる場合も、時間を決めて使うと安心です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          おすすめの組み合わせ方
        </h2>

        <p className="leading-8 mb-4">
          移動中や隙間時間はタブレット、じっくり取り組む時間は紙のドリル、というように場面で使い分けるのも一つの方法です。
        </p>

        <p className="leading-8 mb-4">
          わくたんのように無料で印刷できるドリルは、紙学習を気軽に取り入れたいご家庭にも活用しやすい選択肢です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>タブレット学習は直感的で自動採点も手軽なのが魅力</li>
            <li>紙のドリルは運筆力や手先の発達、画面時間への配慮の面でメリットがある</li>
            <li>幼児期のスクリーンタイムはバランスを意識するとよい</li>
            <li>場面によってタブレットと紙を使い分けるのがおすすめ</li>
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
            紙のドリルを試したいときは、今日のドリルを印刷して使ってみませんか？
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
