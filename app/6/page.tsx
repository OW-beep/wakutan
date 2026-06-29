import type { Metadata } from "next";
import PageClient from "./PageClient";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "6歳向け無料知育ドリル",
  description:
    "6歳向け無料知育ドリル。算数・論理・ひらがな・仲間分けなど毎日10問。印刷OK。",
  alternates: {
    canonical: "/6",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">

      <div className="max-w-5xl mx-auto px-6 pt-8">

        <Breadcrumb
          items={[
            {
              name: "6歳ドリル",
              href: "/6",
            },
          ]}
        />

      </div>

      <PageClient />

    </main>
  );
}