import Link from "next/link";

export const metadata = {
  title: "点つなぎ遊びの効果｜集中力・数字・運筆力が育つ｜わくたん",
  description:
    "点つなぎ遊びは数字を覚えながら集中力や運筆力を育てられる知育遊びです。4〜6歳向けに効果や、数字が苦手な子への配慮も紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            点つなぎ遊びの効果｜集中力・数字・運筆力が育つ
          </h1>

          <p className="text-lg text-gray-700">
            点と点をつなぐだけで、こんなに力がつく
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          数字の順番に点をつないでいくと絵が現れる「点つなぎ」。シンプルながら、複数の力を同時に育てられる遊びです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数字の順番に親しめる
        </h2>

        <p className="leading-8 mb-4">
          1から順に点をたどることで、数字の並び方を自然に覚えることができます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          運筆力が育つ
        </h2>

        <p className="leading-8 mb-4">
          点から点へ線を引く動作は、鉛筆を思い通りに動かす練習になります。文字を書くための土台づくりにもつながります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            線がまっすぐでなくても大丈夫。最後まで線をつなげられたことをほめてあげましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          集中力・最後までやりきる力
        </h2>

        <p className="leading-8 mb-4">
          絵が完成するまで集中して取り組む経験は、達成感とともに「最後までやりきる」力を育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          数字が苦手な子への配慮
        </h2>

        <p className="leading-8 mb-4">
          数字を読むこと自体に苦手意識がある子には、点の数を少なくした簡単なものから始めましょう。
        </p>

        <p className="leading-8 mb-4">
          「1、2、3…」と一緒に声に出しながら進めると、数字と点のつながりを確認しながら取り組めます。無理に一人でやらせず、最初は隣で見守ってあげるのがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          完成した絵で会話が広がる
        </h2>

        <p className="leading-8 mb-4">
          「何の絵が出てくるかな？」とワクワクしながら取り組めるのも点つなぎの魅力です。完成した絵について話すことで、会話も広がります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          完成後の活用法
        </h2>

        <p className="leading-8 mb-4">
          完成した絵に色を塗ったり、壁に飾ったりすると、達成感がより形として残ります。
        </p>

        <p className="leading-8 mb-4">
          「これ、頑張って完成させたんだよね」と後から振り返ることで、自信の積み重ねにもつながります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>点つなぎは数字の順番に自然に親しめる遊び</li>
            <li>線を引く動作が運筆力・文字学習の土台になる</li>
            <li>数字が苦手な子は点の数が少ないものから、声に出しながら進める</li>
            <li>完成後に色を塗ったり飾ったりすると達成感が形に残る</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            数字への理解を活かして、今日の算数ドリルにも挑戦してみませんか？
          </p>

          <Link
            href="/4/sansu"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            算数ドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
