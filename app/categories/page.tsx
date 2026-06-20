import Link from "next/link";

export const metadata = {
  title: "カテゴリ一覧",
  description:
    "年齢別学習や家庭学習に関する記事カテゴリ一覧です。",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-10">
          📚 カテゴリ一覧
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/category/age"
            className="bg-white rounded-3xl shadow p-8 hover:shadow-xl"
          >
            <div className="text-5xl mb-4">🎂</div>

            <h2 className="text-2xl font-bold mb-2">
              年齢別学習
            </h2>

            <p>
              4歳・5歳・6歳の学び方
            </p>

          </Link>

          <Link
            href="/category/parent"
            className="bg-white rounded-3xl shadow p-8 hover:shadow-xl"
          >
            <div className="text-5xl mb-4">👨‍👩‍👧</div>

            <h2 className="text-2xl font-bold mb-2">
              保護者向け
            </h2>

            <p>
              家庭学習や入学準備
            </p>

          </Link>

        </div>

      </section>

    </main>
  );
}