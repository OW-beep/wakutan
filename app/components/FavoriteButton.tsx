"use client";

import { useFavorites, toggleFavorite } from "@/lib/favorites";

type Props = {
  href: string;
  title: string;
};

export default function FavoriteButton({ href, title }: Props) {
  const favorites = useFavorites();
  const saved = favorites.some((f) => f.href === href);

  return (
    <button
      onClick={() => toggleFavorite({ href, title })}
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 text-sm font-bold transition print-hide ${
        saved
          ? "border-orange-400 bg-orange-50 text-orange-600"
          : "border-gray-200 bg-white text-gray-500 hover:border-orange-200"
      }`}
    >
      <span>{saved ? "⭐" : "☆"}</span>
      {saved ? "お気に入りに追加済み" : "お気に入りに追加"}
    </button>
  );
}
