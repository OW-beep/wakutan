import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6 flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center bg-white rounded-3xl shadow p-10">
        <p className="text-6xl mb-4">🔍</p>
        <h1 className="text-2xl font-bold mb-3">
          ページが見つかりませんでした
        </h1>
        <p className="leading-7 text-gray-600 mb-8">
          お探しのページは移動または削除された可能性があります。
          下のリンクから、わくたんのトップページや記事カテゴリをご覧ください。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
          >
            トップページへ
          </Link>
          <Link
            href="/categories"
            className="inline-block bg-white border border-orange-300 text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition"
          >
            記事カテゴリ一覧へ
          </Link>
        </div>
      </div>
    </main>
  );
}
