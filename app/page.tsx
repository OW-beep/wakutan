import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ヒーロー */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-10 shadow-lg">

          <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
            🌈 わくたん
          </h1>

          <p className="text-2xl mb-4">
            ～わくわくたんけんたい👷～
          </p>

          <p className="text-lg">
            4歳〜6歳向け無料知育ドリル
          </p>

          <p className="text-lg">
            毎日10問・印刷OK
          </p>

        </div>

      </section>

      {/* 今日のドリル */}
      <section className="max-w-6xl mx-auto px-6 mb-14">

        <h2 className="text-3xl font-bold mb-6">
          🎯 今日のドリル
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/4">

            <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl transition">

              <div className="text-5xl mb-3">
                🧸
              </div>

              <h3 className="text-2xl font-bold">
                4さい
              </h3>

              <p className="mt-2 text-gray-600">
  はじめての知育ドリル
</p>

<div className="mt-4 text-xs text-gray-500 space-y-1">
  <p>✅ 500問以上収録</p>
  <p>📅 毎日更新</p>
  <p>🖨️ 無料で印刷OK</p>
</div>

            </div>

          </Link>

          <Link href="/5">

            <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl transition">

              <div className="text-5xl mb-3">
                🚀
              </div>

              <h3 className="text-2xl font-bold">
                5さい
              </h3>

              <p className="mt-2 text-gray-600">
                考える力を伸ばそう
              </p>

<div className="mt-4 text-xs text-gray-500 space-y-1">
  <p>✅ 500問以上収録</p>
  <p>📅 毎日更新</p>
  <p>🖨️ 無料で印刷OK</p>
</div>
            </div>

          </Link>

          <Link href="/6">

            <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl transition">

              <div className="text-5xl mb-3">
                🎓
              </div>

              <h3 className="text-2xl font-bold">
                6さい
              </h3>

              <p className="mt-2 text-gray-600">
                小学校準備ドリル
              </p>

<div className="mt-4 text-xs text-gray-500 space-y-1">
  <p>✅ 500問以上収録</p>
  <p>📅 毎日更新</p>
  <p>🖨️ 無料で印刷OK</p>
</div>

            </div>

          </Link>

        </div>

      </section>

      {/* おすすめ記事 */}
      <section className="max-w-6xl mx-auto px-6 mb-14">

        <h2 className="text-3xl font-bold mb-6">
          🔥 おすすめ記事
        </h2>

<div className="grid gap-4">

  <Link
    href="/blog/how-4year-learn"
    className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
  >
    🧸 4歳の学び方
  </Link>

  <Link
    href="/blog/how-5year-learn"
    className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
  >
    🚀 5歳の学び方
  </Link>

  <Link
    href="/blog/school-preparation"
    className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
  >
    🎒 小学校入学前に身につけたい力
  </Link>

  <Link
    href="/blog/print-learning"
    className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
  >
    📚 プリント学習のメリット
  </Link>

  <Link
    href="/blog/why-drill"
    className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
  >
    🧠 なぜドリル学習が効果的？
  </Link>

  <Link
    href="/blog/5min-study"
    className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
  >
    ⏰ 毎日5分学習の効果
  </Link>

</div>

      </section>


{/* 新着記事 */}
<section className="max-w-6xl mx-auto px-6 mb-14">

  <h2 className="text-3xl font-bold mb-6">
    🆕 新着記事
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <Link
      href="/blog/how-6year-learn"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-sm text-orange-600 font-bold mb-2">
        NEW
      </div>

      <h3 className="text-xl font-bold mb-2">
        🎓 6歳の学び方
      </h3>

      <p className="text-gray-600 text-sm">
        小学校入学前に育てたい力を解説
      </p>

    </Link>

    <Link
      href="/blog/school-preparation"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-sm text-orange-600 font-bold mb-2">
        NEW
      </div>

      <h3 className="text-xl font-bold mb-2">
        🎒 小学校入学前に身につけたい力
      </h3>

      <p className="text-gray-600 text-sm">
        入学準備で本当に大切なこと
      </p>

    </Link>

    <Link
      href="/blog/how-5year-learn"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-2">
        🚀 5歳の学び方
      </h3>

      <p className="text-gray-600 text-sm">
        5歳におすすめの家庭学習方法
      </p>

    </Link>

    <Link
      href="/blog/how-4year-learn"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-2">
        🧸 4歳の学び方
      </h3>

      <p className="text-gray-600 text-sm">
        4歳の好奇心を伸ばす学び方
      </p>

    </Link>

  </div>

  <div className="text-center mt-8">

  <Link
    href="/articles"
    className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90"
  >
    記事一覧を見る →
  </Link>

</div>

</section>

{/* 4歳向けドリル一覧 */}
<section className="max-w-6xl mx-auto px-6 mb-14">

  <h2 className="text-3xl font-bold mb-6">
    📚 人気のドリルカテゴリ
  </h2>

  <p className="text-gray-600 mb-6">
    算数・論理・パターン認識・ひらがな・仲間分けなど、
    年齢や学びたい内容に合わせてドリルを選べます。
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

    <Link
      href="/4/sansu"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-4xl mb-2">
        🔢
      </div>

      <h3 className="font-bold text-xl mb-2">
        4歳向け算数ドリル
      </h3>

      <p className="text-gray-600 text-sm">
        数を数える・足し算の基礎を学ぼう
      </p>
    </Link>

    <Link
      href="/4/ronri"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-4xl mb-2">
        🧠
      </div>

      <h3 className="font-bold text-xl mb-2">
        4歳向け論理問題
      </h3>

      <p className="text-gray-600 text-sm">
        考える力を楽しく育てよう
      </p>
    </Link>

    <Link
      href="/4/pattern"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-4xl mb-2">
        🔷
      </div>

      <h3 className="font-bold text-xl mb-2">
        4歳向けパターン問題
      </h3>

      <p className="text-gray-600 text-sm">
        規則性を見つける力を育てよう
      </p>
    </Link>

    <Link
      href="/4/hiragana"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-4xl mb-2">
        🔤
      </div>

      <h3 className="font-bold text-xl mb-2">
        4歳向けひらがな
      </h3>

      <p className="text-gray-600 text-sm">
        文字への興味を育てよう
      </p>
    </Link>

    <Link
      href="/4/nakamawake"
      className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
    >
      <div className="text-4xl mb-2">
        📦
      </div>

      <h3 className="font-bold text-xl mb-2">
        4歳向け仲間分け問題
      </h3>

      <p className="text-gray-600 text-sm">
        分類する力を育てよう
      </p>
    </Link>

  </div>

</section>

      {/* 人気記事 */}
<section className="max-w-6xl mx-auto px-6 mb-14">

 <h2 className="text-3xl font-bold mb-2">
  ⭐ 人気記事
</h2>

<p className="text-gray-600 mb-6">
  多くの保護者に読まれている記事です
</p>

  <div className="grid md:grid-cols-2 gap-4">

  <Link
    href="/blog/school-preparation"
    className="bg-white rounded-2xl shadow p-5"
  >
    🎒 小学校入学前に身につけたい力
  </Link>

  <Link
    href="/blog/how-5year-learn"
    className="bg-white rounded-2xl shadow p-5"
  >
    🚀 5歳の学び方
  </Link>

  <Link
    href="/blog/study-habit"
    className="bg-white rounded-2xl shadow p-5"
  >
    🌱 家庭学習を続けるコツ
  </Link>

  <Link
    href="/blog/5min-study"
    className="bg-white rounded-2xl shadow p-5"
  >
    ⏰ 毎日5分学習の効果
  </Link>

</div>


      </section>
{/* わくたんとは？ */}
<section className="max-w-4xl mx-auto px-6 pb-20">

  <div className="bg-white rounded-3xl shadow p-8">

    <h2 className="text-3xl font-bold mb-4">
      🌈 わくたんとは？
    </h2>

    <p className="leading-8">
      わくたん（わくわくたんけんたい）は、
      4歳から6歳向けの無料知育ドリルサイトです。
    </p>

    <p className="leading-8 mt-4">
      算数・論理・パターン認識の問題を通して、
      子どもたちの「考える力」を育てることを目的としています。
    </p>

    <p className="leading-8 mt-4">
      毎日3問のドリルに取り組むことで、
      無理なく学習習慣を身につけることができます。
    </p>

    <p className="leading-8 mt-4">
      印刷にも対応しているため、
      ご家庭で気軽に学習プリントとして活用できます。
    </p>

  </div>

</section>
<section className="max-w-6xl mx-auto px-6 mb-14">

  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow p-8">

    <h2 className="text-3xl font-bold mb-6">
      🚀 わくたんで身につく力
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-bold text-xl mb-2">
          🔢 数の感覚
        </h3>

        <p>
          数を数える・比べる・順番を考える力を育てます。
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-bold text-xl mb-2">
          🧠 論理的思考
        </h3>

        <p>
          なかまはずれや仲間分け問題を通して考える力を伸ばします。
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-bold text-xl mb-2">
          🔷 パターン認識
        </h3>

        <p>
          規則性を見つける力を遊びながら育てます。
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <h3 className="font-bold text-xl mb-2">
          ✏️ 学習習慣
        </h3>

        <p>
          毎日少しずつ学ぶことで継続する力を育てます。
        </p>
      </div>

    </div>

  </div>

</section>

<section className="max-w-4xl mx-auto px-6 pb-20">

  <div className="bg-white rounded-3xl shadow p-8">

    <h2 className="text-3xl font-bold mb-6">
      ❓ よくある質問
    </h2>

    <div className="space-y-4">

      <div>
        <h3 className="bg-gray-50 rounded-xl p-4">
          Q. わくたんは無料ですか？
        </h3>

        <p className="text-gray-700">
          はい。すべて無料でご利用いただけます。
        </p>
      </div>

      <div>
        <h3 className="bg-gray-50 rounded-xl p-4">
          Q. 印刷できますか？
        </h3>

        <p className="text-gray-700">
          ご家庭での学習用として印刷して利用できます。
        </p>
      </div>

      <div>
        <h3 className="bg-gray-50 rounded-xl p-4">
          Q. 対象年齢は何歳ですか？
        </h3>

        <p className="text-gray-700">
          主に4歳〜6歳のお子さま向けに作られています。
        </p>
      </div>

      <div>
        <h3 className="bg-gray-50 rounded-xl p-4">
          Q. 毎日取り組む必要がありますか？
        </h3>

        <p className="text-gray-700">
          毎日でなくても大丈夫です。短時間でも継続することを大切にしています。
        </p>
      </div>

      <div>
        <h3 className="bg-gray-50 rounded-xl p-4">
          Q. 小学校入学準備にも使えますか？
        </h3>

        <p className="text-gray-700">
          はい。考える力や学習習慣づくりに役立つ内容を掲載しています。
        </p>
      </div>

    </div>

  </div>

</section>

    </main>
  );
}