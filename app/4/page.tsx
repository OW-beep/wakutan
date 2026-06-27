import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "4歳向け無料知育ドリル",
  description:
    "4歳向け無料知育ドリル。算数・論理・パターン認識・ひらがな・仲間分けなど毎日10問。無料・印刷OK。",
  alternates: {
    canonical: "/4",
  },
};

export default function Page() {
  return <PageClient />;
}