import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "編集方針",
  description:
    "わくたんの記事・問題の作り方、体験談や研究の扱い方、広告・商品紹介との向き合い方、誤りの訂正方針についてご案内します。",
  alternates: {
    canonical: "/editorial-policy",
  },
};

const sectionClass = "bg-white rounded-3xl shadow p-8 mt-8";
const h2Class = "text-2xl font-bold mb-4";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <article className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow mb-8">
          <h1 className="text-4xl font-extrabold text-orange-700 mb-4">
            📝 編集方針
          </h1>
          <p className="text-lg text-gray-700">
            わくたんの記事とドリルを、どんな考え方で作っているかをまとめています。
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-8">
          <p className="leading-8 mb-4">
            わくたんは、
            <Link
              href="/about#operator"
              className="text-orange-700 underline underline-offset-4"
            >
              運営者
            </Link>
            が個人で運営している、4〜6歳向けの無料知育ドリルサイトです。保護者の方が安心して読めるよう、記事づくりで守っていることを、ここに書いておきます。
          </p>
        </div>

        <section className={sectionClass}>
          <h2 className={h2Class}>🖊️ 記事の作り方</h2>
          <ul className="space-y-3 leading-8">
            <li>
              ・
              <span className="font-bold">運営者自身の言葉で書きます。</span>
              記事は、運営者が一般に公開されている情報と、自身の家庭学習の経験をもとに、独自にまとめています。他のサイトの文章を、そのまま転載することはしません。
            </li>
            <li>
              ・
              <span className="font-bold">体験談は、実際にあったことだけを書きます。</span>
              「わが家では」と書く場面は、運営者の家庭で実際にあった出来事や、そのとき考えたことに限っています。覚えていないことを、それらしく補って書くことはしません。
            </li>
            <li>
              ・
              <span className="font-bold">言い切れないことは、言い切りません。</span>
              子どもの発達には個人差があります。「この時期までにこれができるべき」という書き方は避け、「目安」「ひとつの考え方」として紹介します。
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={h2Class}>📚 研究や公的な資料を紹介するとき</h2>
          <p className="leading-8 mb-4">
            カテゴリ「研究から学ぶ」の記事など、研究や公的な資料に触れる記事では、次のことを心がけています。
          </p>
          <ul className="space-y-3 leading-8">
            <li>・研究から「言えること」と「まだ言えないこと」を分けて書きます。</li>
            <li>・参考にした資料は、記事の末尾に「参考文献」としてまとめます。</li>
            <li>
              ・幼児教育の考え方は、文部科学省が示している「幼児期の終わりまでに育ってほしい姿」などの公的な資料を、考え方の参考にしています。
            </li>
          </ul>
          <p className="leading-8 mt-4 text-sm text-gray-600">
            ※ 記事は、特定の研究機関や専門家による監修を受けたものではありません。医学的・専門的な助言に代わるものでもありません。お子さんの発達や学習で気になることがあるときは、自治体の窓口や専門機関にもご相談ください。
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={h2Class}>🧩 ドリルの問題の作り方</h2>
          <ul className="space-y-3 leading-8">
            <li>
              ・年齢ごとの発達段階に合わせて、難易度と出題のねらいを分けています。
            </li>
            <li>
              ・1回のプリントで終わる分量にして、「今日はこれだけやればOK」と思える形にしています。
            </li>
            <li>
              ・同じ形式の問題でも、題材（くだもの・どうぶつ・のりものなど）を変えて、飽きにくくしています。
            </li>
            <li>
              ・正解・不正解だけでなく、「どうしてそうなるのかな？」を、保護者の方と一緒に考えられる問題を意識しています。
            </li>
          </ul>
          <p className="leading-8 mt-4">
            くわしくは
            <Link
              href="/about"
              className="text-orange-700 underline underline-offset-4"
            >
              わくたんについて
            </Link>
            のページもご覧ください。
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={h2Class}>💌 読者の声の扱い</h2>
          <p className="leading-8">
            保護者の方からいただいた感想は、個人が特定されない形に整えて掲載しています。ご意見や改善のご要望も、わくたんの改善の参考にしています。
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={h2Class}>🛒 広告・商品紹介について</h2>
          <p className="leading-8 mb-4">
            わくたんは、広告収入などで運営しています。記事の中には、広告（Google AdSense）や、楽天市場の商品リンクが含まれることがあります。商品リンクには「PR」と表示しています。
          </p>
          <p className="leading-8">
            広告や商品リンクがあることで、記事の内容や書き方を変えることはしません。くわしくは
            <Link
              href="/privacy-policy"
              className="text-orange-700 underline underline-offset-4"
            >
              プライバシーポリシー
            </Link>
            をご覧ください。
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={h2Class}>🔄 更新と、誤りの訂正</h2>
          <ul className="space-y-3 leading-8">
            <li>
              ・各記事の冒頭に、最終更新日を表示しています。内容を大きく見直したときは、更新日を改めます。
            </li>
            <li>
              ・誤字脱字、わかりにくい表現、内容の誤りに気づいたときは、確認のうえ、できるだけ早く直します。
            </li>
            <li>
              ・お気づきの点は、
              <Link
                href="/contact"
                className="text-orange-700 underline underline-offset-4"
              >
                お問い合わせ
              </Link>
              からお知らせください。
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
