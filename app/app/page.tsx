import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4歳〜6歳向け無料知育ドリル",
  description:
    "4歳〜6歳向け無料知育ドリル。毎日10問・印刷OK。算数・論理・ひらがな・パターン認識を楽しく学べます。",

  alternates: {
    canonical: "/",
  },
};

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

          <p className="text-2xl font-bold leading-relaxed mb-4">
            4〜6歳の「考える力」を育てる<br />
            無料知育ドリル
          </p>

          <p className="text-lg leading-8">
            算数・論理・パターン認識・ひらがなを、
            毎日10問、印刷して楽しく学べます。
          </p>

          <p className="text-lg leading-8 mt-2">
            家庭学習を無理なく続けられるよう、
            年齢別・カテゴリ別に500問以上のオリジナル問題を無料で公開しています。
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

      {/* ドリルのイメージ */}
      <section className="max-w-6xl mx-auto px-6 mb-14">

        <h2 className="text-3xl font-bold mb-6">
          🖼️ ドリルのイメージ
        </h2>

        <p className="text-gray-600 mb-6">
          実際の問題や、印刷したときのイメージはこんな感じです。
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src="/samples/sample-sansu.png"
              alt="さんすうドリルの問題見本"
              className="w-full h-auto"
            />
            <p className="p-4 text-sm text-gray-600">
              🔢 さんすうもんだいの見本
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src="/samples/sample-pattern.png"
              alt="パターン・ろんりドリルの問題見本"
              className="w-full h-auto"
            />
            <p className="p-4 text-sm text-gray-600">
              🔷 パターン・ろんりもんだいの見本
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src="/samples/sample-print.png"
              alt="印刷したときのレイアウト見本"
              className="w-full h-auto"
            />
            <p className="p-4 text-sm text-gray-600">
              🖨️ 印刷したときのレイアウト見本
            </p>
          </div>

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
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            🧸 4歳の学び方
          </Link>

          <Link
            href="/blog/how-5year-learn"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            🚀 5歳の学び方
          </Link>

          <Link
            href="/blog/how-6year-learn"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            🎓 6歳の学び方
          </Link>

          <Link
            href="/blog/school-preparation"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            🎒 小学校入学前に身につけたい力
          </Link>

          <Link
            href="/blog/print-learning"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            📚 プリント学習のメリット
          </Link>

          <Link
            href="/blog/why-drill"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            🧠 なぜドリル学習が効果的？
          </Link>

          <Link
            href="/blog/5min-study"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
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
            href="/blog/school-checklist"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            <div className="text-sm text-orange-600 font-bold mb-2">
              NEW
            </div>

            <h3 className="text-xl font-bold mb-2">
              🎒 小学校入学準備チェックリスト
            </h3>

            <p className="text-gray-600 text-sm">
              学用品だけじゃない本当に大切な準備
            </p>

          </Link>

          <Link
            href="/blog/sansu-weak-6year"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            <div className="text-sm text-orange-600 font-bold mb-2">
              NEW
            </div>

            <h3 className="text-xl font-bold mb-2">
              🔢 6歳で算数が苦手でも大丈夫！
            </h3>

            <p className="text-gray-600 text-sm">
              小学校でつまずかない土台の作り方
            </p>

          </Link>

          <Link
            href="/blog/hiragana-worry-5year"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">
              🔤 5歳でひらがなが読めない…
            </h3>

            <p className="text-gray-600 text-sm">
              親の不安解消法
            </p>

          </Link>

          <Link
            href="/blog/concentration-4year"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">
              🎯 4歳なのに集中できない…
            </h3>

            <p className="text-gray-600 text-sm">
              1日5分から始める集中力の育て方
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

      {/* 人気のドリルカテゴリ */}
      <section className="max-w-6xl mx-auto px-6 mb-14">

        <h2 className="text-3xl font-bold mb-6">
          📚 人気のドリルカテゴリ
        </h2>

        <p className="text-gray-600 mb-6">
          算数・論理・パターン認識・ひらがな・仲間分けなど、
          学びたい内容や年齢に合わせてドリルを選べます。
        </p>

        {[
          {
            age: "4",
            label: "4歳向け",
            emoji: "🧸",
            categories: [
              { href: "/4/sansu", emoji: "🔢", title: "算数ドリル", desc: "数を数える・足し算の基礎を学ぼう" },
              { href: "/4/ronri", emoji: "🧠", title: "論理問題", desc: "考える力を楽しく育てよう" },
              { href: "/4/pattern", emoji: "🔷", title: "パターン問題", desc: "規則性を見つける力を育てよう" },
              { href: "/4/hiragana", emoji: "🔤", title: "ひらがな", desc: "文字への興味を育てよう" },
              { href: "/4/nakamawake", emoji: "📦", title: "仲間分け問題", desc: "分類する力を育てよう" },
            ],
          },
          {
            age: "5",
            label: "5歳向け",
            emoji: "🚀",
            categories: [
              { href: "/5/sansu", emoji: "🔢", title: "算数ドリル", desc: "たし算の基礎・数の感覚を伸ばそう" },
              { href: "/5/ronri", emoji: "🧠", title: "論理問題", desc: "きまりを見つけて考えよう" },
              { href: "/5/pattern", emoji: "🔷", title: "パターン問題", desc: "規則性を見つける力を育てよう" },
              { href: "/5/hiragana", emoji: "🔤", title: "ひらがな", desc: "言葉の理解を深めよう" },
              { href: "/5/nakamawake", emoji: "📦", title: "仲間分け問題", desc: "分類する力を育てよう" },
            ],
          },
          {
            age: "6",
            label: "6歳向け",
            emoji: "🎓",
            categories: [
              { href: "/6/sansu", emoji: "🔢", title: "算数ドリル", desc: "たし算・ひきざんの基礎を学ぼう" },
              { href: "/6/ronri", emoji: "🧠", title: "論理問題", desc: "筋道立てて考える力を育てよう" },
              { href: "/6/pattern", emoji: "🔷", title: "パターン問題", desc: "規則性を見つける力を育てよう" },
              { href: "/6/hiragana", emoji: "🔤", title: "ひらがな", desc: "読み書きの力を育てよう" },
              { href: "/6/nakamawake", emoji: "📦", title: "仲間分け問題", desc: "分類する力を育てよう" },
            ],
          },
        ].map((group) => (

          <div key={group.age} className="mb-10">

            <h3 className="text-xl font-bold mb-4">
              {group.emoji} {group.label}カテゴリ
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              {group.categories.map((c) => (

                <Link
                  key={c.href}
                  href={c.href}
                  className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-2">{c.emoji}</div>

                  <h4 className="font-bold text-xl mb-2">
                    {group.label}{c.title}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {c.desc}
                  </p>

                </Link>

              ))}

            </div>

          </div>

        ))}

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
            href="/blog/study-habit"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
          >
            🌱 家庭学習を続けるコツ
          </Link>

          <Link
            href="/blog/drill-vs-print"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
          >
            📝 市販ドリル vs 無料プリント どっちがいい？
          </Link>

          <Link
            href="/blog/busy-parent-5min"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
          >
            ⏰ 忙しいママ・パパ向け 1日5分ルーティン
          </Link>

          <Link
            href="/blog/outing-learning-games"
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg"
          >
            🛒 お出かけ先で自然に学べる声かけ＆ゲーム
          </Link>

        </div>

      </section>

      {/* わくたんとは？ */}
      <section className="max-w-4xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl shadow p-8">

          <h2 className="text-3xl font-bold mb-4">
            🌈 わくたんとは？
          </h2>

          <p className="leading-8">
            わくたん（わくわくたんけんたい）は、
            4歳から6歳向けの無料知育ドリルサイトです。
          </p>

          <p className="leading-8 mt-4">
            市販の幼児向けドリルは、1冊が終わるたびに買い足す必要があり、
            費用や置き場所が家庭の負担になることがあります。
            また、同じ問題の繰り返しでは子どもが飽きてしまい、
            「今日は何をやろうか」と毎回悩んでしまう保護者の方も多いのではないでしょうか。
          </p>

          <p className="leading-8 mt-4">
            わくたんは、こうした負担をできるだけ減らし、
            「今日はこれをやればいい」と迷わず取り組める無料の学習の場を目指して作りました。
          </p>

          <p className="leading-8 mt-4">
            問題は、年齢ごとの発達段階に合わせて作成しています。
            4歳は数や身の回りのものへの好奇心、5歳はきまりを理解して考える力、
            6歳は小学校入学を意識した学習習慣というように、
            年齢に応じて難易度や出題の狙いを変えています。
            また、同じ形式の問題でもくだもの・どうぶつ・のりものなど
            複数の題材を用意し、できるだけ多くの表現パターンで出題するようにしています。
          </p>

          <p className="leading-8 mt-4">
            算数・論理・パターン認識・ひらがな・なかまわけといった問題を通して、
            正解・不正解だけでなく「なぜそうなるか」を親子で一緒に考えられることを大切にしています。
            数の感覚、論理的思考、学習習慣など、
            小学校の学びにつながる土台の力を、遊び感覚で育てていくことを目指しています。
          </p>

          <p className="leading-8 mt-4">
            すべて無料で利用でき、ご家庭で印刷して学習プリントとしても活用いただけます。
            毎日少しずつ、無理のないペースで取り組んでいただければと思います。
          </p>

          <p className="leading-8 mt-4">
            運営は個人で行っており、特定の研究機関や専門家による監修は受けていません。
            日々の問題作成や記事の執筆を通じて感じたことをもとに、
            少しずつ内容を見直し・追加しながら運営しています。
            誤りやわかりにくい点に気づかれた場合は、お問い合わせよりご連絡いただけますと幸いです。
          </p>

        </div>

      </section>

      {/* 保護者の方へ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow p-8">

          <h2 className="text-3xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            幼児期は「たくさん勉強すること」よりも、
            「考えることを楽しむ習慣」を育てることが大切だと考えています。
          </p>

          <p className="leading-8 mt-4">
            わくたんでは、1日10問程度、5〜10分ほどで取り組める問題を通して、
            数の感覚・論理的思考・集中力などを少しずつ身につけられるよう構成しています。
          </p>

          <p className="leading-8 mt-4">
            ご家庭で印刷して一緒に取り組んだり、
            お子さまの興味やペースに合わせて、
            無理のない範囲でご活用いただければうれしいです。
          </p>

        </div>

      </section>

      {/* 身につく力 */}
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
                仲間分けや論理問題を通して考える力を育てます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <h3 className="font-bold text-xl mb-2">
                🔷 パターン認識
              </h3>

              <p>
                規則性を見つける力を遊びながら伸ばします。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <h3 className="font-bold text-xl mb-2">
                ✏️ 学習習慣
              </h3>

              <p>
                毎日少しずつ続けることで学習習慣が身につきます。
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
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

              <p className="text-gray-700 mt-2">
                はい。すべて無料でご利用いただけます。
              </p>
            </div>

            <div>
              <h3 className="bg-gray-50 rounded-xl p-4">
                Q. 印刷できますか？
              </h3>

              <p className="text-gray-700 mt-2">
                ご家庭で印刷して学習プリントとしてご利用いただけます。
              </p>
            </div>

            <div>
              <h3 className="bg-gray-50 rounded-xl p-4">
                Q. 対象年齢は何歳ですか？
              </h3>

              <p className="text-gray-700 mt-2">
                主に4歳・5歳・6歳のお子さま向けです。
              </p>
            </div>

            <div>
              <h3 className="bg-gray-50 rounded-xl p-4">
                Q. 毎日取り組む必要がありますか？
              </h3>

              <p className="text-gray-700 mt-2">
                毎日でなくても大丈夫です。短時間でも継続することを大切にしています。
              </p>
            </div>

            <div>
              <h3 className="bg-gray-50 rounded-xl p-4">
                Q. 小学校入学準備にも使えますか？
              </h3>

              <p className="text-gray-700 mt-2">
                はい。考える力や学習習慣づくりに役立つ内容になっています。
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


