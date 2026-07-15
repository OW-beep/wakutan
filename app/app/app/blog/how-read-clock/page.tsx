import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "時計の読み方を楽しく覚えるコツ｜4〜6歳向け",
  description:
    "時計の読み方を遊びながら身につける方法を紹介。4〜6歳の子ども向けに楽しく学べるコツを解説します。",
  alternates: {
    canonical: "/blog/how-read-clock",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "時計の読み方を楽しく覚えるコツ" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          時計の読み方を楽しく覚えるコツ
        </h1>

        <p className="leading-8 mb-6">
          小学校入学前になると、時計が読めるようになることが
          一つの目標になります。
          でも、最初から「○時○分」を覚える必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          まずは「○時」だけ覚えよう
        </h2>

        <p className="leading-8">
          長い針は気にせず、
          短い針だけを見て
          「3時」「5時」などを言えるようにしましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日の生活と結び付ける
        </h2>

        <p className="leading-8">
          「7時は朝ごはん」
          「8時は幼稚園」
          「9時は寝る準備」
          など、生活の中で時計を見る習慣をつけると覚えやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          おもちゃの時計を使う
        </h2>

        <p className="leading-8">
          実際に針を動かしながら学ぶと、
          「長い針」「短い針」の違いも自然に理解できます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ドリルで確認しよう
        </h2>

        <p className="leading-8">
          遊びながら覚えた内容は、
          ドリルで少しだけ復習すると定着しやすくなります。
        </p>

        <div className="bg-indigo-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            無料ドリルはこちら
          </h2>

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