import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "6歳向け無料知育ドリル",
  description:
    "6歳向け無料知育ドリル。算数・論理・ひらがな・仲間分けなど毎日10問。印刷OK。",
  alternates: {
    canonical: "/6",
  },
};

export default function Page() {
  return <PageClient />;
}