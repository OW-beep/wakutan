import Link from "next/link";

export default function PrintPage() {
  return (
    <main className="min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-4">🖨 印刷ページ</h1>

      <p className="text-gray-600 mb-6">
        家庭学習用にそのまま印刷できます
      </p>

      <div className="space-y-3">

        <Link href="/4">
          <div className="p-4 border rounded-xl">🐣 4歳ドリルを印刷</div>
        </Link>

        <Link href="/5">
          <div className="p-4 border rounded-xl">🧠 5歳ドリルを印刷</div>
        </Link>

        <Link href="/6">
          <div className="p-4 border rounded-xl">🚀 6歳ドリルを印刷</div>
        </Link>

      </div>

      <div className="mt-10 text-sm text-gray-500">
        ※印刷時はボタンが自動で非表示になります
      </div>

    </main>
  );
}