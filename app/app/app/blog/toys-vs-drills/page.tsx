import Link from "next/link";

export const metadata = {
  title: "知育玩具とドリルどっち？｜わくたん",
  description:
    "知育玩具とドリル、幼児期にはどちらが良いか悩む保護者向けに、それぞれのメリット・デメリットと使い分け方を解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">⚖️</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            知育玩具とドリルどっち？
          </h1>

          <p className="text-lg text-gray-700">
            それぞれのメリットを知って上手に使い分けよう
          </p>

        </div>

        <p className="text-lg leading-8 mb-6">
          「知育玩具とドリル、どちらを与えればいいの？」
          という悩みは多くの保護者の方が抱える疑問です。
        </p>

        <p className="text-lg leading-8 mb-6">
          結論からいうと、どちらか一方ではなく、
          年齢や目的に合わせて使い分けるのがおすすめです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          知育玩具のメリット
        </h2>

        <p className="leading-8 mb-4">
          知育玩具は、手を動かしながら形・色・仕組みを
          感覚的に理解できるのが大きな魅力です。
        </p>

        <p className="leading-8 mb-4">
          特に3〜5歳ごろは、文字や記号よりも
          「触って確かめる」学びの方が理解しやすい時期です。
          積み木やパズルなど、答えが一つに決まらない遊びは
          自由な発想力も育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ドリルのメリット
        </h2>

        <p className="leading-8 mb-4">
          一方でドリルは、「問題を読む」「考える」「答えを書く（言う）」
          という一連の流れを経験できます。
        </p>

        <p className="leading-8 mb-4">
          これは小学校の学習スタイルに近く、
          就学前に少しずつ慣れておくことで、
          入学後の学習にスムーズに移行しやすくなります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            知育玩具は「発想力」、ドリルは「考えを整理する力」
            を育てるのが得意な傾向があります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          年齢による使い分けの目安
        </h2>

        <p className="leading-8 mb-4">
          4歳ごろまでは知育玩具を中心に、
          遊びの中で数や形に触れる機会を増やすのがおすすめです。
        </p>

        <p className="leading-8 mb-4">
          5〜6歳になり、文字や数字への理解が進んできたら、
          短時間のドリルを少しずつ取り入れていくと、
          無理なく学習習慣につなげられます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          両方を組み合わせるのがおすすめ
        </h2>

        <p className="leading-8 mb-4">
          どちらか一方に絞る必要はありません。
          普段は知育玩具で自由に遊びつつ、
          「今日のチャレンジ」としてドリルに取り組むなど、
          組み合わせることで飽きずに続けやすくなります。
        </p>

        <p className="leading-8 mb-4">
          わくたんのドリルも、1回5〜10分程度で終わる分量にしているので、
          遊びの合間の「ちょっとした挑戦」として取り入れやすい設計です。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>知育玩具は発想力・感覚的な理解を育てる</li>
            <li>ドリルは考えを整理し、学校の学習スタイルに慣れる練習になる</li>
            <li>4歳頃までは玩具中心、5〜6歳から少しずつドリルを取り入れる</li>
            <li>両方を組み合わせることで飽きずに続けやすい</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            まずは5〜10分、わくたんの今日のドリルから始めてみませんか？
          </p>

          <Link
            href="/4"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            年齢別ドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
