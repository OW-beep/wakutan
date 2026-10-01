import type { Metadata } from "next";
import FavoritesClient from "./FavoritesClient";

export const metadata: Metadata = {
  title: "お気に入り",
  description: "保存した記事の一覧です。",
  robots: {
    index: false,
  },
};

export default function Page() {
  return <FavoritesClient />;
}
