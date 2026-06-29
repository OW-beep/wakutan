import type { Metadata } from "next";
import PageClient from "./PageClient";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "4歳向け無料知育ドリル",
  description:
    "4歳向け無料知育ドリル。算数・論理・パターン認識・ひらがな・仲間分けなど毎日10問。無料・印刷OK。",
  alternates: {
    canonical: "/4",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Breadcrumb
          items={[
            {
              name: "4歳ドリル",
              href: "/4",
            },
          ]}
        />
      </div>

      <PageClient />
    </main>
  );
}