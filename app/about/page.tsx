export const metadata = {
  title: "わくたんについて",
  description: "わくわくたんけんたい『わくたん』の紹介ページ",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow mb-8">

          <h1 className="text-4xl font-extrabold text-orange-700 mb-4">
            🌈 わくたんについて
          </h1>

          <p className="text-lg">
            わくわくたんけんたい
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow p-8">

          <p className="leading-8 mb-6">
            わくたんは、
            4歳〜6歳向けの無料知育ドリルサイトです。
          </p>

          <p className="leading-8 mb-6">
            算数・論理・パターン認識を通して、
            子どもたちの「考える力」を育てることを目指しています。
          </p>

          <p className="leading-8 mb-6">
            毎日少しずつ学ぶことで、
            小学校につながる学習習慣を身につけられるよう設計しています。
          </p>

          <p className="leading-8">
            家庭で気軽に使える無料教材として、
            保護者のみなさまのお役に立てれば幸いです。
          </p>

        </div>

      </article>

    </main>
  );
}