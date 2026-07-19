import Link from "next/link";

export const metadata = {
  title: "数字遊びで算数が好きになる｜わくたん",
  description:
    "4〜6歳向けの数字遊びを紹介。お買い物ごっこやサイコロ遊びなど、日常の中で自然に数の感覚を育てる方法を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔢</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            数字遊びで算数が好きになる
          </h1>

          <p className="text-lg text-gray-700">
            机に向かう前に、まず数と仲良くなろう
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          算数が得意になるかどうかは、実は「机に向かう前」の経験が大きく影響します。
        </p>

        <p className="text-lg leading-8 mb-6">
          4〜6歳の時期は、ドリルよりもまず遊びの中で数に触れる経験を増やすことが、数への苦手意識を防ぐ近道になります。
        </p>

        <p className="text-lg leading-8 mb-6">
          この記事では、特別な教材がなくても今日から始められる数字遊びを、年齢の目安とあわせて紹介します。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ① お買い物ごっこ
        </h2>

        <p className="leading-8 mb-4">
          「りんごを3つください」「ぜんぶで5こになったね」というように、数える経験が自然に増えるのがお買い物ごっこの魅力です。
        </p>

        <p className="leading-8 mb-4">
          実際のお買い物のときに「あと何個で10個かな？」と聞いてみるのもおすすめです。おもちゃのレジがなくても、お財布代わりの箱とカードで十分に遊べます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ② サイコロ遊び
        </h2>

        <p className="leading-8 mb-4">
          サイコロの目を見て「あと2つで6になるね」と声をかけるだけでも、数の合成・分解の感覚が育ちます。
        </p>

        <p className="leading-8 mb-4">
          すごろくと組み合わせると、進んだり戻ったりする体験を通して、より数の増減を実感しやすくなります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            正解を急がせず、指で数えながら考える時間を大切にしてあげましょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ③ かぞえ歌・手遊び
        </h2>

        <p className="leading-8 mb-4">
          「いっぽんばしこちょこちょ」のような数え歌も、リズムに合わせて数の順番を覚える良い機会になります。
        </p>

        <p className="leading-8 mb-4">
          声に出しながら数える経験は、数字を読む力にもつながります。手遊びは移動中や待ち時間にも取り入れやすいのがメリットです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ④ 数字探しゲーム
        </h2>

        <p className="leading-8 mb-4">
          エレベーターのボタン、カレンダー、時計など、身の回りには数字があふれています。
        </p>

        <p className="leading-8 mb-4">
          「1から10までの数字、見つけられるかな？」と声をかけるだけで、外出先でも手軽に数字遊びができます。数字を見つけるたびに指差しして読む習慣は、数字を認識する力の土台になります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑤ 年齢による取り入れ方の違い
        </h2>

        <p className="leading-8 mb-4">
          4歳ごろはまず「1〜10」を声に出して数える経験を、5歳ごろは「あわせていくつ」という合成の感覚を、6歳ごろは簡単な「ひきざん」の感覚も遊びに取り入れてみましょう。
        </p>

        <p className="leading-8 mb-4">
          年齢に合わせて難易度を調整することで、無理なく自信を積み重ねていくことができます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ⑥ 遊びとドリルを組み合わせる
        </h2>

        <p className="leading-8 mb-4">
          遊びで感覚的に理解したことを、ドリルで少し形式的に確認すると、学んだ内容が定着しやすくなります。
        </p>

        <p className="leading-8 mb-4">
          「さっきサイコロでやったのと同じだね」と結びつけてあげると、子どもも学びのつながりを感じやすくなります。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>算数の得意・苦手は、机に向かう前の経験が大きく影響する</li>
            <li>お買い物ごっこ・サイコロ・数字探しで、数える経験を自然に増やす</li>
            <li>年齢に合わせて数の範囲や難易度を調整する</li>
            <li>遊びで得た感覚をドリルで確認すると定着しやすい</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            遊びの延長として、今日の算数ドリルにも挑戦してみませんか？
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
