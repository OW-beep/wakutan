import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "はさみの練習はいつから？4〜6歳向けの始め方",
  description:
    "4〜6歳向けに、はさみの練習を始めるタイミングや安全な進め方を紹介。遊びながら手先の器用さを育てるコツを解説します。",
  alternates: {
    canonical: "/blog/scissors-practice",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "はさみの練習はいつから？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          はさみの練習はいつから？4〜6歳向けの始め方
        </h1>

        <p className="leading-8 mb-6">
          はさみを使うことは、手先の器用さや集中力を育てる大切な遊びです。
          小学校での工作にもつながるため、幼児期から少しずつ経験しておくと安心です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          最初は一回切りから
        </h2>

        <p className="leading-8">
          細長い紙を用意し、
          「1回だけチョキン」と切る練習がおすすめです。
          成功体験を積むことで、自信につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          慣れたら直線を切ってみよう
        </h2>

        <p className="leading-8">
          線に沿って切る練習をすると、
          目と手を協調させる力が育ちます。
          焦らずゆっくり進めましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          曲線や丸にも挑戦
        </h2>

        <p className="leading-8">
          直線が上手になったら、
          曲線や円を切る遊びにも挑戦してみましょう。
          少し難しい課題が集中力アップにつながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          安全第一で練習する
        </h2>

        <p className="leading-8">
          幼児用の先が丸いはさみを使い、
          必ず保護者が見守りながら練習しましょう。
          正しい持ち方も少しずつ教えることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつ続けよう
        </h2>

        <p className="leading-8">
          長時間練習する必要はありません。
          5〜10分程度を目安に続けることで、
          自然と手先が器用になっていきます。
        </p>

        <div className="bg-green-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料ドリル
          </h2>

          <p className="mb-4">
            手先を使う問題や考える問題を毎日10問ずつ楽しめます。
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