import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事一覧 | わくたん",
  description:
    "4歳〜6歳向け家庭学習・知育・小学校準備に役立つ記事一覧です。",

  alternates: {
    canonical: "/articles",
  },
};

const ageArticles = [
  {
    href: "/blog/how-4year-learn",
    emoji: "🧸",
    title: "4歳の学び方",
    desc: "4歳の好奇心を伸ばす家庭学習",
  },
  {
    href: "/blog/concentration-4year",
    emoji: "🎯",
    title: "4歳なのに集中できない…",
    desc: "1日5分から始める集中力の育て方",
  },
  {
    href: "/blog/how-5year-learn",
    emoji: "🚀",
    title: "5歳の学び方",
    desc: "5歳におすすめの家庭学習方法",
  },
  {
    href: "/blog/hiragana-worry-5year",
    emoji: "🔤",
    title: "5歳でひらがなが読めない…",
    desc: "親の不安解消法",
  },
  {
    href: "/blog/how-6year-learn",
    emoji: "🎓",
    title: "6歳の学び方",
    desc: "小学校入学前に育てたい力",
  },
  {
    href: "/blog/sansu-weak-6year",
    emoji: "🔢",
    title: "6歳で算数が苦手でも大丈夫！",
    desc: "小学校でつまずかない土台の作り方",
  },
  {
    href: "/blog/skills-by-age",
    emoji: "🌱",
    title: "4歳・5歳・6歳の発達段階別 「今」伸ばしたい力",
    desc: "年齢に合わせた関わり方のヒント",
  },
];

const learningArticles = [
  {
    href: "/blog/study-habit",
    emoji: "🌱",
    title: "家庭学習を続けるコツ",
    desc: "毎日続けるための工夫",
  },
  {
    href: "/blog/5min-study",
    emoji: "⏰",
    title: "毎日5分学習の効果",
    desc: "短時間学習を続けるメリット",
  },
  {
    href: "/blog/print-learning",
    emoji: "📚",
    title: "プリント学習のメリット",
    desc: "紙で学ぶことの良さ",
  },
  {
    href: "/blog/why-drill",
    emoji: "🧠",
    title: "なぜドリル学習が効果的？",
    desc: "幼児期におすすめの理由",
  },
  {
    href: "/blog/drill-vs-print",
    emoji: "📝",
    title: "市販ドリル vs 無料プリント どっちがいい？",
    desc: "特徴を知って上手に使い分ける",
  },
  {
    href: "/blog/tablet-vs-paper",
    emoji: "📱",
    title: "タブレット学習と紙のドリル、どう使い分ける？",
    desc: "それぞれの良さを知って使い分けよう",
  },
  {
    href: "/blog/almost-can-do",
    emoji: "🎯",
    title: "「あと少しでできそう」を見極めるコツ",
    desc: "ちょうどいい難易度の選び方",
  },
];

const japaneseArticles = [
  {
    href: "/blog/when-start-hiragana",
    emoji: "🔤",
    title: "ひらがなは何歳から？",
    desc: "始めるタイミングを解説",
  },
  {
    href: "/blog/when-start-numbers",
    emoji: "🔢",
    title: "数字は何歳から覚える？",
    desc: "数字学習の進め方",
  },
];

const playArticles = [
  {
    href: "/blog/educational-play",
    emoji: "🧩",
    title: "幼児におすすめの知育遊び10選",
    desc: "遊びながら楽しく学ぼう",
  },
  {
    href: "/blog/toys-vs-drills",
    emoji: "⚖️",
    title: "知育玩具とドリルどっち？",
    desc: "それぞれのメリットを比較",
  },
  {
    href: "/blog/maze-benefits",
    emoji: "🌀",
    title: "迷路遊びで育つ5つの力",
    desc: "考える力・集中力アップ",
  },
  {
    href: "/blog/puzzle-benefits",
    emoji: "🧠",
    title: "パズル遊びで育つ力",
    desc: "論理的思考を育てよう",
  },
];

const parentArticles = [
  {
    href: "/blog/school-preparation",
    emoji: "🎒",
    title: "小学校入学前に身につけたい力",
    desc: "入学準備で本当に大切なこと",
  },
  {
    href: "/blog/school-checklist",
    emoji: "🎒",
    title: "小学校入学準備チェックリスト",
    desc: "学用品だけじゃない本当に大切な準備",
  },
  {
    href: "/blog/improve-concentration",
    emoji: "🎯",
    title: "幼児の集中力を伸ばす方法",
    desc: "家庭でできるトレーニング",
  },
  {
    href: "/blog/child-hates-study",
    emoji: "😊",
    title: "子どもが勉強を嫌がるときは？",
    desc: "無理なく続けるコツ",
  },
  {
    href: "/blog/kakekoe-collection",
    emoji: "💬",
    title: "勉強嫌いにならないための声かけ集",
    desc: "「頑張れ」だけじゃない伝え方",
  },
  {
    href: "/blog/reward-for-study",
    emoji: "🏅",
    title: "幼児にごほうびは必要？",
    desc: "やる気を育てる褒め方",
  },
  {
    href: "/blog/busy-parent-5min",
    emoji: "⏰",
    title: "忙しいママ・パパ向け 1日5分ルーティン",
    desc: "無理なく続けるコツ",
  },
  {
    href: "/blog/study-mistakes",
    emoji: "🙅",
    title: "幼児の家庭学習でやってはいけないこと5つ",
    desc: "よくある失敗パターンから学ぼう",
  },
  {
    href: "/blog/morning-routine",
    emoji: "🌅",
    title: "幼児の朝の準備をスムーズにする工夫",
    desc: "バタバタの朝を少しでも穏やかに",
  },
  {
    href: "/blog/age-gap-siblings",
    emoji: "👨‍👩‍👧‍👦",
    title: "きょうだいで学年差がある場合の家庭学習",
    desc: "それぞれのペースを大切に両立する",
  },
];

const seasonalArticles = [
  {
    href: "/blog/summer-study-schedule",
    emoji: "🌻",
    title: "夏休みの家庭学習スケジュール例",
    desc: "1週間の無料ドリル活用プラン",
  },
  {
    href: "/blog/rainy-day-play",
    emoji: "☔",
    title: "雨の日・室内遊びで育つ10のアイデア",
    desc: "おうちの中でも学びはたくさん",
  },
  {
    href: "/blog/outing-learning-games",
    emoji: "🛒",
    title: "お出かけ先で自然に学べる声かけ＆ゲーム",
    desc: "スーパーや公園が学びの場に",
  },
];

function ArticleSection({
  title,
  articles,
}: {
  title: string;
  articles: {
    href: string;
    emoji: string;
    title: string;
    desc: string;
  }[];
}) {
  return (
    <>
      <h2 className="text-3xl font-bold mt-12 mb-6">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {articles.map((article) => (

          <Link
            key={article.href}
            href={article.href}
            className="bg-white rounded-3xl shadow p-6 hover:shadow-xl transition"
          >

            <div className="text-5xl mb-3">
              {article.emoji}
            </div>

            <h3 className="text-2xl font-bold mb-2">
              {article.title}
            </h3>

            <p className="text-gray-600">
              {article.desc}
            </p>

          </Link>

        ))}

      </div>
    </>
  );
}

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl p-10 shadow-lg mb-10">

          <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
            📖 記事一覧
          </h1>

          <p className="text-lg leading-8">
            家庭学習・知育・小学校入学準備に役立つ記事を、
            カテゴリごとにまとめています。
          </p>

        </div>

        <ArticleSection
          title="🧸 年齢別の学び方"
          articles={ageArticles}
        />

        <ArticleSection
          title="📚 家庭学習"
          articles={learningArticles}
        />

        <ArticleSection
          title="🔤 ひらがな・数字"
          articles={japaneseArticles}
        />

        <ArticleSection
          title="🧩 知育・遊び"
          articles={playArticles}
        />

        <ArticleSection
          title="🌻 季節・お出かけ"
          articles={seasonalArticles}
        />

        <ArticleSection
          title="👨‍👩‍👧 保護者向け"
          articles={parentArticles}
        />
        <div className="mt-16 bg-white rounded-3xl shadow p-8">

          <h2 className="text-3xl font-bold mb-4">
            🌈 わくたんについて
          </h2>

          <p className="leading-8">
            わくたん（わくわくたんけんたい）は、
            4歳〜6歳向けの無料知育ドリルサイトです。
          </p>

          <p className="leading-8 mt-4">
            算数・論理・ひらがな・パターン認識など、
            幼児期に育てたい力を楽しく学べる問題を毎日公開しています。
          </p>

          <p className="leading-8 mt-4">
            ドリルだけでなく、家庭学習・知育・小学校入学準備に役立つ記事も掲載し、
            保護者の皆さまの子育てを応援しています。
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <Link
            href="/category/age"
            className="bg-orange-100 rounded-3xl p-8 hover:bg-orange-200 transition"
          >
            <div className="text-5xl mb-4">
              🎂
            </div>

            <h2 className="text-2xl font-bold mb-2">
              年齢別の記事を見る
            </h2>

            <p className="text-gray-700">
              4歳・5歳・6歳それぞれに合った学び方を紹介しています。
            </p>

          </Link>

          <Link
            href="/category/parent"
            className="bg-blue-100 rounded-3xl p-8 hover:bg-blue-200 transition"
          >
            <div className="text-5xl mb-4">
              👨‍👩‍👧
            </div>

            <h2 className="text-2xl font-bold mb-2">
              保護者向けの記事を見る
            </h2>

            <p className="text-gray-700">
              家庭学習・知育・入学準備など役立つ情報をまとめています。
            </p>

          </Link>

        </div>

      </section>

    </main>
  );
}