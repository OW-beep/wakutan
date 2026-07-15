import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "間違い探しの効果｜観察力・集中力・考える力が育つ",
  description:
    "間違い探しは観察力や集中力、考える力を育てる知育遊びです。4〜6歳向けに間違い探しの効果や楽しみ方を紹介します。",
  alternates: {
    canonical: "/blog/find-differences-benefits",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "間違い探しの効果" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          間違い探しの効果｜観察力・集中力・考える力が育つ
        </h1>

        <p className="leading-8 mb-6">
          間違い探しは、2つの絵を見比べて違う部分を見つける遊びです。
          楽しみながら観察力や集中力、考える力を育てられるため、
          幼児期におすすめの知育遊びのひとつです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          観察力が育つ
        </h2>

        <p className="leading-8">
          細かな違いを探すことで、
          「よく見る力」が身につきます。
          学校生活でも役立つ観察力の土台になります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          集中力が身につく
        </h2>

        <p className="leading-8">
          違いを探すには集中して絵を見る必要があります。
          遊びながら自然と集中する習慣が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          考える力が伸びる
        </h2>

        <p className="leading-8">
          「どこが違うかな？」
          「他にもあるかな？」
          と考えながら探すことで、
          論理的に考える力も育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          達成感が自信につながる
        </h2>

        <p className="leading-8">
          全ての間違いを見つけられると、
          「できた！」という達成感を味わえます。
          小さな成功体験を積み重ねることで、
          学ぶことへの自信も育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつ楽しもう
        </h2>

        <p className="leading-8">
          1日5〜10分程度でも十分です。
          毎日続けることで、観察力や集中力が少しずつ身についていきます。
        </p>

        <div className="bg-blue-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            わくたんでは、
            算数・論理・ひらがな・パターン認識など、
            毎日10問の無料ドリルを公開しています。
          </p>

          <ul className="space-y-2">

            <li>
              <Link
                href="/4"
                className="text-blue-600 hover:underline"
              >
                4歳向け無料ドリル
              </Link>
            </li>

            <li>
              <Link
                href="/5"
                className="text-blue-600 hover:underline"
              >
                5歳向け無料ドリル
              </Link>
            </li>

            <li>
              <Link
                href="/6"
                className="text-blue-600 hover:underline"
              >
                6歳向け無料ドリル
              </Link>
            </li>

          </ul>

        </div>

      </article>

    </main>
  );
}