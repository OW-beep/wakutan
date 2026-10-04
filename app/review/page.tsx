import type { Metadata } from "next";
import ReviewClient from "./ReviewClient";

export const metadata: Metadata = {
  title: "ふくしゅうリスト",
  description: "苦手だった問題をあとで復習できます。",
  robots: {
    index: false,
  },
};

export default function Page() {
  return <ReviewClient />;
}
