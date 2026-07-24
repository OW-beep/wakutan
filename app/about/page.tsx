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

        {/* 参考にした考え方 */}
        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">📚 参考にした考え方</h2>

          <p className="leading-8 mb-4">
            問題や記事を作成するにあたり、文部科学省が示す
            「幼児期の終わりまでに育ってほしい姿」（幼稚園教育要領などで示されている、
            健康な心と体・自立心・数量や図形への関心・感覚など10の視点）を、
            考え方の参考にしています。
          </p>

          <p className="leading-8">
            専門家による監修を受けているものではなく、
            あくまで運営者が一般に公開されている情報を参考に取り入れている段階です。
            より正確な情報については、文部科学省や自治体などの公式情報もあわせてご確認ください。
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
            運営者はこれまで、塾業界で約5年間講師として勤務し、集団指導・個別指導の両方で、
            小学生から高校生まで幅広い学年の指導に携わってきました。
            その後、教育委員会にて約7年間、学校現場を回る業務に従事し、
            教育現場の実態や課題に触れてきました。
            さらに、教育コンサルタントとして約3年間、文部科学省関連の事業や大学、
            地方自治体の教育改革に関わるプロジェクトに携わっています。
          </p>

          <p className="mb-4">
            現在は、これまでの経験と知見をもとに、幼児期からの「考える力」を育てることの
            大切さを感じ、本サイトの運営を行っています。
          </p>

          <p className="mb-4">
            また、運営者自身も3人の子どもを育てている保護者であり、
            日々の子育てや家庭学習の中で感じた悩みや工夫も、本サイトのコンテンツに反映しています。
            専門的な立場からの知見だけでなく、実際の子育ての現場での経験も踏まえながら、
            保護者の方にとって「無理なく続けられる学び」を提供することを目指しています。
          </p>

          <p className="mb-4 text-sm text-gray-500">
            ※本サイトの内容は一般的な教育知見と実務経験に基づいて作成しており、
            特定の研究機関による監修を受けたものではありません。
          </p>

          <p className="mb-4">
            教育系コンテンツの作成および公開を目的として運営されています。
          </p>

          <p className="mb-4">
            本サイトは広告収益により運営されています。
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