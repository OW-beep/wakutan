import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "図形遊びの効果｜図形感覚・空間認識力を育てよう",
  description:
    "図形遊びは空間認識力や図形感覚、考える力を育てる知育遊びです。4〜6歳向けに図形遊びのメリットを紹介します。",
  alternates: {
    canonical: "/blog/shape-learning",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "図形遊びの効果" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          図形遊びの効果｜図形感覚・空間認識力を育てよう
        </h1>

        <p className="leading-8 mb-6">
          図形遊びは、丸・三角・四角などの形に親しみながら、
          考える力や空間認識力を育てられる知育遊びです。
          幼児期から楽しく取り組むことで、小学校の算数にもつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          図形感覚が身につく
        </h2>

        <p className="leading-8">
          いろいろな形を見比べたり組み合わせたりすることで、
          図形の特徴を自然と理解できるようになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          空間認識力が育つ
        </h2>

        <p className="leading-8">
          「向きを変えるとどう見えるかな？」
          「どこに置けばぴったりかな？」
          と考えることで、
          空間をイメージする力が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          算数の土台になる
        </h2>

        <p className="leading-8">
          図形に親しんでおくことで、
          小学校で学ぶ図形や立体の学習にもスムーズにつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          考える力・試行錯誤する力が伸びる
        </h2>

        <p className="leading-8">
          図形を組み合わせる遊びでは、
          「どうすれば完成するかな？」と考えながら挑戦します。
          この経験が論理的思考を育てます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつ遊ぼう
        </h2>

        <p className="leading-8">
          1日5〜10分でも十分です。
          続けることで図形への興味が育ち、
          学ぶことがもっと楽しくなります。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            図形だけでなく、
            算数・論理・ひらがな・仲間分けなど、
            毎日10問の無料知育ドリルを公開しています。
          </p>

          <ul className="space-y-2">

            <li>
              <Link href="/4" className="text-blue-600 hover:underline">
                4歳向け無料ドリル
              </Link>
            </li>

            <li>
              <Link href="/5" className="text-blue-600 hover:underline">
                5歳向け無料ドリル
              </Link>
            </li>

            <li>
              <Link href="/6" className="text-blue-600 hover:underline">
                6歳向け無料ドリル
              </Link>
            </li>

          </ul>

        </div>

      </article>

    </main>
  );
}