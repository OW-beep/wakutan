import Link from "next/link";

export const metadata = {
  title: "子どものお金の教育は何歳から？｜わくたん",
  description:
    "子どものお金の教育を始める年齢の目安を、公的な資料もふまえて解説。幼児期に家庭でできる金銭教育のはじめ方を紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">💰</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            子どものお金の教育は何歳から？
          </h1>

          <p className="text-lg text-gray-700">
            まずは「見せる」ことから始めよう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「お金の話は早すぎる？」と感じる保護者の方も多いかもしれませんが、金銭教育は幼児期から少しずつ始められるといわれています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          幼児期は「見せる」ことから
        </h2>

        <p className="leading-8 mb-4">
          金融広報中央委員会（知るぽると）の資料では、幼児期の金銭教育は、まず保護者がお金を支払う場面を子どもに見せることから始めるとよいとされています。
        </p>

        <p className="leading-8 mb-4">
          キャッシュレス決済が広まった今、お金を支払う様子が子どもから見えにくくなっています。買い物のときに「これを買うよ」「お金を払うね」と声に出すだけでも、お金と物の交換という基本的な仕組みが伝わりやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          硬貨に触れる経験も大切
        </h2>

        <p className="leading-8 mb-4">
          1円・5円・10円など、硬貨の種類や大きさに触れる経験も、数の感覚と結びつく良い学びになります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            実際の硬貨を並べて数える遊びは、算数の力とお金の感覚を同時に育てられます。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          本格的な金銭管理は小学生から
        </h2>

        <p className="leading-8 mb-4">
          多くの金融教育の専門家は、お小遣い帳をつけるような本格的な金銭管理は、小学校低学年ごろからで十分としています。幼児期に無理に先取りする必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          お金の話をタブーにしない
        </h2>

        <p className="leading-8 mb-4">
          「子どもにお金の話をするのは早い」と避けてしまうと、かえってお金の価値を実感する機会を減らしてしまうことがあります。日常の会話の中で自然に触れていくことが大切です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>幼児期の金銭教育は、まず「支払う場面を見せる」ことから</li>
            <li>硬貨に触れる経験は、数の感覚とお金の理解を同時に育てる</li>
            <li>本格的な金銭管理は小学生になってからで十分</li>
            <li>お金の話を避けすぎず、日常の中で自然に触れていく</li>
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
            硬貨を数える感覚を、今日のおかね問題でも試してみませんか？
          </p>

          <Link
            href="/4/okane"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            おかね問題を見る
          </Link>

        </div>

      </article>

    </main>
  );
}
