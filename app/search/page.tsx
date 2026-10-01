import type { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "サイト内検索",
  description: "わくたんの記事をキーワードで検索できます。",
  alternates: {
    canonical: "/search",
  },
};

export default function Page() {
  return <SearchClient />;
}
