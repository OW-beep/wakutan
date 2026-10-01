"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { blogMeta } from "@/app/data/blogMeta";

const STATIC_PAGES = [
  { href: "/narai-shindan", title: "わくたん習い事診断", category: "診断ツール" },
  { href: "/articles", title: "記事一覧", category: "サイト内" },
  { href: "/about", title: "わくたんについて", category: "サイト内" },
  { href: "/4", title: "4さいドリル", category: "ドリル" },
  { href: "/5", title: "5さいドリル", category: "ドリル" },
  { href: "/6", title: "6さいドリル", category: "ドリル" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const articleHits = blogMeta
      .filter((a) => a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q))
      .map((a) => ({ href: `/blog/${a.slug}`, title: a.title, category: a.category }));

    const pageHits = STATIC_PAGES.filter(
      (p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );

    return [...pageHits, ...articleHits];
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold text-orange-700 mb-6">🔍 サイト内検索</h1>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="キーワードを入力（例：ひらがな、入学準備）"
          autoFocus
          className="w-full px-5 py-4 rounded-2xl border-2 border-orange-200 focus:border-orange-400 outline-none text-lg mb-8"
        />

        {query.trim() === "" && (
          <p className="text-gray-500 text-sm">
            記事タイトルやカテゴリ名でキーワード検索できます。
          </p>
        )}

        {query.trim() !== "" && results.length === 0 && (
          <p className="text-gray-500 text-sm">
            「{query}」に一致する記事は見つかりませんでした。別のキーワードでお試しください。
          </p>
        )}

        <ul className="space-y-3">
          {results.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="block bg-white rounded-2xl shadow p-4 hover:shadow-md transition"
              >
                <span className="text-xs font-bold text-orange-500">{r.category}</span>
                <p className="font-bold text-gray-800">{r.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
