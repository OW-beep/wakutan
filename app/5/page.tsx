import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "5歳向け無料知育ドリル",
  description:
    "5歳向け無料知育ドリル。算数・論理・パターン認識・ひらがな・仲間分けなど毎日10問。無料・印刷OK。",
  alternates: {
    canonical: "/5",
  },
};

export default function Page() {
  return <PageClient />;
}