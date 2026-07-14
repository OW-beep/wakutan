import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "子どもが勉強を嫌がるときは？無理なく続ける5つのコツ",
  description:
    "幼児が勉強を嫌がる理由と、家庭で無理なく学習を続けるコツを紹介します。4〜6歳向けの家庭学習にも役立ちます。",
  alternates: {
    canonical: "/blog/child-hates-study",
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Breadcrumb
        items={[
          { name: "記事一覧", href: "/articles" },
          { name: "子どもが勉強を嫌がるときは？" },
        ]}
      />

      <article className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          子どもが勉強を嫌がるときは？無理なく続ける5つのコツ
        </h1>

        <p className="leading-8 mb-6">
          「机に向かってくれない」「ドリルを嫌がる」と悩む家庭は少なくありません。
          しかし、多くの場合は勉強そのものが嫌いなのではなく、
          やり方や環境を少し変えるだけで楽しく取り組めるようになります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ① まずは5分だけ
        </h2>

        <p className="leading-8">
          「全部やろう」ではなく、
          「5分だけやってみよう」と声をかけると始めやすくなります。
          短時間でも毎日続けることが大切です。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ② 簡単な問題から始める
        </h2>

        <p className="leading-8">
          最初から難しい問題だとやる気を失います。
          すぐ解ける問題で「できた！」を積み重ねましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ③ 結果より頑張りを褒める
        </h2>

        <p className="leading-8">
          「全部正解」よりも、
          「最後まで頑張ったね」
          「昨日より早くできたね」
          と努力を認めることで自信につながります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ④ 勉強を遊びに変える
        </h2>

        <p className="leading-8">
          数字探し、しりとり、迷路、パズルなど、
          遊びながら学べる内容なら自然と集中できます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          ⑤ 無理に続けさせない
        </h2>

        <p className="leading-8">
          泣いてしまうほど嫌がる日は休むことも大切です。
          「また明日やろうね」と前向きに終えることで、
          勉強への苦手意識を減らせます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          毎日少しずつが成功の秘訣
        </h2>

        <p className="leading-8">
          幼児期の家庭学習は長時間必要ありません。
          5〜10分を毎日続けるだけでも、
          学習習慣や考える力は少しずつ育っていきます。
        </p>

        <div className="bg-orange-100 rounded-xl p-6 mt-10">

          <h2 className="text-xl font-bold mb-4">
            わくたんの無料知育ドリル
          </h2>

          <p className="mb-4">
            わくたんでは、
            4〜6歳向けに毎日10問の無料知育ドリルを公開しています。
            印刷にも対応しているので、
            家庭学習の第一歩としてぜひご活用ください。
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