import Link from "next/link";

export const metadata = {
  title: "幼児の朝の準備をスムーズにする工夫｜わくたん",
  description:
    "幼児期の朝の身支度をスムーズにする工夫を紹介。保育園・幼稚園の準備で慌ただしくなりがちな朝を、少しでも穏やかに過ごすためのヒントをまとめました。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🌅</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            幼児の朝の準備をスムーズにする工夫
          </h1>

          <p className="text-lg text-gray-700">
            バタバタの朝を少しでも穏やかに
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「早くして！」が口ぐせになってしまうほど、幼児期の朝の準備は慌ただしくなりがちです。
        </p>

        <p className="text-lg leading-8 mb-6">
          ここでは、朝の身支度を少しでもスムーズにするための工夫を紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          見える化で「次にやること」を分かりやすく
        </h2>

        <p className="leading-8 mb-4">
          着替え・歯みがき・持ち物準備など、朝やることをイラストや写真で貼り出しておくと、子ども自身が見て次の行動を選びやすくなります。
        </p>

        <p className="leading-8 mb-4">
          「早く」と急かすより、「次は何だっけ？」と表を指差す方が、自分で動く力にもつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          前の晩にできることは前の晩に
        </h2>

        <p className="leading-8 mb-4">
          翌日の服を選んでおく、持ち物をバッグに入れておくなど、朝の作業を減らすことで、時間にも気持ちにも余裕が生まれます。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            子ども自身に前の晩の服を選ばせると、朝の「着たくない」を減らせることがあります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          時間より「順番」で伝える
        </h2>

        <p className="leading-8 mb-4">
          幼児期は時計の時間感覚がまだ育っていないことが多く、「あと5分」より「着替えたら朝ごはんね」のように、順番で伝える方が伝わりやすいことがあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          うまくいかない朝があってもいい
        </h2>

        <p className="leading-8 mb-4">
          工夫をしても、うまくいかない朝はあります。「今日はこういう日だった」と割り切ることも、保護者自身の気持ちを守るためには大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>やることの「見える化」で、子どもが自分で次の行動を選びやすくなる</li>
            <li>前の晩にできる準備は済ませておくと、朝の負担が減る</li>
            <li>「あと何分」より「次は何をする」という伝え方が伝わりやすいことがある</li>
            <li>うまくいかない朝があっても、それも自然なこと</li>
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
            朝の準備が落ち着いたら、今日のドリルにも挑戦してみませんか？
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
