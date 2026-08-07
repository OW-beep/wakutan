import Link from "next/link";

export const metadata = {
  title: "お小遣い、いつから始める？｜わくたん",
  description:
    "子どものお小遣いを始めるタイミングについて解説。幼児期にできる準備段階と、始める際のポイントを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">👛</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            お小遣い、いつから始める？
          </h1>

          <p className="text-lg text-gray-700">
            幼児期はまだ「もらう」より「使われるのを見る」時期
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「お小遣いはいつから渡せばいいの？」という疑問は、多くの保護者が一度は感じるものです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          お小遣いは小学校からが一般的
        </h2>

        <p className="leading-8 mb-4">
          多くの家庭では、お小遣いを始めるのは小学校入学以降が一般的です。数の理解や、お金を計画的に使うという概念が育ってくる時期に合わせるとスムーズです。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          幼児期は「準備段階」
        </h2>

        <p className="leading-8 mb-4">
          幼児期はお小遣いを渡す時期ではなくても、「欲しいものが全部は買えない」「順番を待つ」といった経験を積むことが、将来の金銭感覚の土台になります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            お店で「今日は1つだけ選ぼうね」と伝える経験も、立派なお金の学びです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          お手伝いとの結びつけ方は家庭次第
        </h2>

        <p className="leading-8 mb-4">
          お手伝いの対価としてお小遣いを渡す家庭もあれば、月額制にする家庭もあります。どちらが正解ということはなく、家庭の考え方に合った方法を選んで問題ありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          始める前に話しておきたいこと
        </h2>

        <p className="leading-8 mb-4">
          お小遣いを始める際は、「何に使ってもいいお金」なのか「貯めることも考えるお金」なのか、簡単なルールを話しておくと、子どもも使い方を考えやすくなります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          代表的な3つの渡し方
        </h2>

        <p className="leading-8 mb-4">
          お小遣いの渡し方には、大きく分けて3つの方式があります。<span className="font-bold">定額制</span>は「毎月〇円」と決めて渡す方法で、計画的に使う練習になります。<span className="font-bold">報酬制</span>はお手伝いの対価として渡す方法で、労働と対価の関係を学べます。<span className="font-bold">都度制</span>は必要なときに必要な分だけ渡す方法で、幼児期から小学校低学年にかけての移行期に向いています。どれか1つに決めなくても、成長に合わせて組み合わせを変えていく家庭も多くあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          幼児期にできる金銭感覚の準備
        </h2>

        <p className="leading-8 mb-4">
          お小遣いを渡す前の幼児期にも、金銭感覚の土台を育てる方法はたくさんあります。買い物のときに「これは何円かな？」と一緒に値札を見る、レジでの支払いを見せる、硬貨を実際に触らせて種類を覚えるといった経験が、後のお小遣い管理にもつながっていきます。
          <Link href="/4/okane" className="text-orange-600 font-bold hover:underline">わくたんのおかね問題</Link>
          で、硬貨の種類や金額の感覚に親しんでおくのもおすすめです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            ❓ よくある質問
          </p>
          <p className="mb-2">
            <span className="font-bold">Q. 年長さんから始めても早すぎる？</span><br />
            A. 早すぎることはありません。少額（100円程度）から、貯金箱に入れる練習として始める家庭も多くあります。大切なのは金額の大小ではなく、「自分で管理する」経験そのものです。
          </p>
          <p>
            <span className="font-bold">Q. 使い道に口を出すべき？</span><br />
            A. 危険なものや不適切なもの以外は、多少の失敗も含めて本人に選ばせるのがおすすめです。「思っていたのと違った」という経験も、大切な学びになります。
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🍀 今日学んだこと
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>お小遣いを始めるのは小学校入学以降が一般的</li>
            <li>幼児期は「欲しいものが全部は買えない」経験を積む準備期間</li>
            <li>お手伝いとの結びつけ方は家庭の考え方次第でよい</li>
            <li>始める前に簡単なルールを話しておくと使い方を考えやすい</li>
          </ul>

        </div>

        <div className="text-xs text-gray-400 mt-4 text-right">
          公開日：2026年7月
        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🎁 今日のおすすめ
          </h3>

          <p className="mb-3">
            お買い物のたし算感覚を、今日のおかね問題で試してみませんか？
          </p>

          <Link
            href="/5/okane"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            おかね問題を見る
          </Link>

        </div>

      </article>

    </main>
  );
}
