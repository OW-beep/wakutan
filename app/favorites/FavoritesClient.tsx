"use client";

import Link from "next/link";
import { useFavorites, removeFavorite } from "@/lib/favorites";

export default function FavoritesClient() {
  const items = useFavorites();

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold text-orange-700 mb-2">⭐ お気に入り</h1>
        <p className="text-sm text-gray-500 mb-8">
          この端末のブラウザに保存されています。他の端末には引き継がれません。
        </p>

        {items.length === 0 && (
          <div className="bg-white rounded-2xl shadow p-8 text-center text-gray-500">
            <p className="text-4xl mb-3">📭</p>
            <p>まだお気に入りがありません。</p>
            <p className="text-sm mt-2">
              気になった記事の「☆ お気に入りに追加」を押すと、ここに表示されます。
            </p>
            <Link
              href="/articles"
              className="inline-block mt-4 text-orange-600 font-bold hover:underline"
            >
              記事一覧を見る →
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.href}
                className="flex items-center justify-between bg-white rounded-2xl shadow p-4"
              >
                <Link href={item.href} className="font-bold text-gray-800 hover:underline flex-1">
                  {item.title}
                </Link>
                <button
                  onClick={() => removeFavorite(item.href)}
                  className="text-xs text-gray-400 hover:text-red-500 ml-4 shrink-0"
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
