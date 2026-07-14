import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "数字遊びで算数が好きになる｜4〜6歳向け",
  description:
    "4〜6歳向けの数字遊びを紹介。楽しみながら数の感覚を身につけられる遊びを解説します。",
  alternates: {
    canonical: "/blog/number-play",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "数字遊びで算数が好きになる" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          数字遊びで算数が好きになる
        </h1>

        <p className="leading-8 mb-6">
          4〜6歳の子どもは、机に向かって勉強するよりも、
          遊びの中で数に触れることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          おすすめ① お買い物ごっこ
        </h2>

        <p className="leading-8">
          「りんごを3つください」
          「全部で5こになったね」
          など、数える経験が自然に増えます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          おすすめ② サイコロ遊び
        </h2>

        <p className="leading-8">
          サイコロの目を見て、
          「あと2つで6になるね」
          と声をかけるだけでも数の感覚が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          おすすめ③ ドリルで復習
        </h2>

        <p className="leading-8">
          遊びで覚えたことをドリルで確認すると、
          学習内容が定着しやすくなります。
        </p>

        <div className="bg-yellow-100 rounded-xl p-6 mt-10">
          <p className="font-bold mb-2">
            無料ドリルはこちら
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><a href="/4" className="text-blue-600">4歳ドリル</a></li>
            <li><a href="/5" className="text-blue-600">5歳ドリル</a></li>
            <li><a href="/6" className="text-blue-600">6歳ドリル</a></li>
          </ul>
        </div>

      </article>

    </main>
  );
}