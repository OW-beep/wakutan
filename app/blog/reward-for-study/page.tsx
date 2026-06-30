import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "幼児にごほうびは必要？やる気を育てる上手な褒め方",
  description:
    "幼児の家庭学習でごほうびは必要？やる気を育てる褒め方や、ごほうびとの上手な付き合い方を紹介します。",
  alternates: {
    canonical: "/blog/reward-for-study",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "幼児にごほうびは必要？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          幼児にごほうびは必要？やる気を育てる上手な褒め方
        </h1>

        <p className="leading-8 mb-6">
          「ドリルをやったらお菓子をあげる」
          「シールを貼ると頑張る」
          といったごほうびを使っている家庭も多いでしょう。
          ごほうびは使い方次第で、子どものやる気を伸ばすことも、
          逆に勉強嫌いにつながることもあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ごほうびが悪いわけではない
        </h2>

        <p className="leading-8">
          幼児は目の前の楽しみで行動しやすい時期です。
          シールやスタンプなど小さな達成感は、
          学習を続けるきっかけになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          高価なごほうびは避けよう
        </h2>

        <p className="leading-8">
          毎回おもちゃやお菓子を約束すると、
          「ごほうびがないとやらない」
          という状態になりやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          一番効果があるのは言葉
        </h2>

        <p className="leading-8">
          「最後までできたね」
          「昨日より速かったね」
          「よく考えたね」
          など努力を具体的に褒めることで、
          子どもの自信が育ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ごほうびは少しずつ卒業する
        </h2>

        <p className="leading-8">
          学習習慣が身についてきたら、
          シールの回数を減らしたり、
          「できて嬉しい」という気持ちを大切にしていきましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日続けることが何より大切
        </h2>

        <p className="leading-8">
          幼児期は1回30分より、
          毎日5〜10分続けるほうが効果的です。
          無理なく楽しめる環境を作ることが、
          学ぶことを好きになる第一歩です。
        </p>

        <div className="bg-yellow-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料知育ドリル
          </h2>

          <p className="mb-4">
            わくたんでは、
            毎日10問の無料知育ドリルを公開しています。
            印刷もできるので、
            ご家庭での学習習慣づくりにぜひご活用ください。
          </p>

          <ul className="space-y-2">
            <li>
              <Link href="/4" className="text-blue-600 hover:underline">
                4歳向けドリル
              </Link>
            </li>

            <li>
              <Link href="/5" className="text-blue-600 hover:underline">
                5歳向けドリル
              </Link>
            </li>

            <li>
              <Link href="/6" className="text-blue-600 hover:underline">
                6歳向けドリル
              </Link>
            </li>
          </ul>

        </div>

      </article>

    </main>
  );
}