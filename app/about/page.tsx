export const metadata = {
  title: "わくたんについて",
  description: "わくわくたんけんたい『わくたん』の紹介ページ",
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