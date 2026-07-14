import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "わくたんについて",
  description:
    "4歳〜6歳向け無料知育ドリルサイト『わくたん』の紹介ページです。",

  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow mb-8">

          <h1 className="text-4xl font-extrabold text-orange-700 mb-4">
            🌈 わくたんについて
          </h1>

          <p className="text-lg text-gray-700">
            わくわくたんけんたい
          </p>

        </div>

        {/* メイン説明 */}
        <div className="bg-white rounded-3xl shadow p-8">

          <p className="leading-8 mb-6">
            わくたんは、4歳〜6歳向けの無料知育ドリルサイトです。
          </p>

          <p className="leading-8 mb-6">
            算数・論理・パターン認識・ことば・なかまわけなどを通して、
            子どもたちの「考える力」を育てることを目的としています。
          </p>

          <p className="leading-8 mb-6">
            毎日少しずつ学習できる構成にすることで、
            小学校につながる学習習慣の定着を目指しています。
          </p>

          <p className="leading-8">
            家庭学習の補助教材として、保護者の方にも安心してご利用いただけるよう設計しています。
          </p>

        </div>

        {/* サイトを作った想い */}
        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">💭 わくたんを作った理由</h2>

          <p className="leading-8 mb-4">
            市販の幼児向けドリルは、1冊が終わると新しいものを買い足す必要があり、
            家庭によっては費用や置き場所の負担になることがあります。
          </p>

          <p className="leading-8 mb-4">
            また、同じ問題を繰り返すだけでは子どもが飽きてしまい、
            「今日は何をやろうか」と保護者の方が毎回悩んでしまうという声もよく耳にします。
          </p>

          <p className="leading-8">
            わくたんは、こうした負担をできるだけ減らし、
            「今日はこれをやればいい」と迷わず取り組める無料の学習の場を作りたいという思いから始めました。
          </p>

        </div>

        {/* 問題づくりの方針 */}
        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">📐 問題づくりで大切にしていること</h2>

          <p className="leading-8 mb-4">
            わくたんの問題は、以下の考え方をもとに作成しています。
          </p>

          <ul className="space-y-3">
            <li className="leading-7">
              <span className="font-bold">・年齢ごとの発達段階に合わせる：</span>
              4歳は数の基礎と好奇心、5歳は考える力とルール理解、6歳は小学校入学を意識した内容というように、
              年齢ごとに難易度と出題の狙いを分けています。
            </li>
            <li className="leading-7 mt-3">
              <span className="font-bold">・1日で終わる分量にする：</span>
              長時間の学習を求めるのではなく、5〜10分程度で取り組める10問構成を基本にしています。
            </li>
            <li className="leading-7 mt-3">
              <span className="font-bold">・同じ問題文の単純な繰り返しを避ける：</span>
              同じ形式の問題でも、題材（くだもの・どうぶつ・のりものなど）を複数用意し、
              できるだけ多くの表現パターンで出題するようにしています。
            </li>
            <li className="leading-7 mt-3">
              <span className="font-bold">・答えだけでなく考え方を大切にする：</span>
              正解・不正解だけでなく、「なぜそうなるか」を保護者の方と一緒に考えられるような出題を意識しています。
            </li>
          </ul>

        </div>

        {/* 記事コンテンツの方針 */}
        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">📝 記事コンテンツについて</h2>

          <p className="leading-8 mb-4">
            わくたんの記事は、幼児教育に関する一般的な考え方や、
            家庭学習でよくある悩みをもとに、運営者が独自にまとめたものです。
          </p>

          <p className="leading-8">
            特定の研究機関・専門家による監修を受けたものではなく、
            医学的・専門的な助言に代わるものではありません。
            お子さんの発達や学習について気になることがある場合は、
            自治体の窓口や専門機関にもご相談ください。
          </p>

        </div>

        {/* 更新について */}
        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">🔄 サイトの更新について</h2>

          <p className="leading-8 mb-4">
            ドリルの問題は日替わりで表示が切り替わる仕組みになっています。
            記事コンテンツについても、内容の見直しや追加を継続的に行っています。
          </p>

          <p className="leading-8">
            誤字脱字や、わかりにくい表現に気づかれた場合は、
            お問い合わせフォームから遠慮なくご連絡ください。
          </p>

        </div>

        {/* 運営者情報（AdSense重要） */}
        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">運営者情報</h2>

          <p className="mb-4">
            本サイト「わくたん」は、個人で運営しています。
          </p>

          <p className="mb-4">
            教育系コンテンツの作成および公開を目的として運営されています。
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">連絡先</h2>

          <p className="mb-4">
            お問い合わせは以下のメールアドレスまでお願いします。
          </p>

          <p className="font-semibold">
            wakutan.info@gmail.com
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">免責事項</h2>

          <p className="leading-7">
            本サイトのコンテンツを利用したことによって発生したいかなる損害についても、
            一切の責任を負いません。
          </p>

        </div>

      </article>

    </main>
  );
}