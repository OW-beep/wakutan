import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { CoinDisc } from "@/app/components/FigureQuestion";

export const metadata = {
  title: "おつりの計算の教え方｜10円玉で考える方法を図で解説（5・6歳）",
  description:
    "「50円で30円のものを買うと、おつりは？」を、10円玉の数で考える方法を図で解説。10円からのおつり、20円からのおつりの考え方も紹介します。",
  alternates: { canonical: "/otsuri" },
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="bg-white rounded-2xl border-2 border-rose-200 p-4">
      <p className="font-bold text-lg mb-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-white text-sm mr-2">{n}</span>
        {title}
      </p>
      {children}
    </li>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-rose-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <Breadcrumb items={[{ name: "おつりの けいさん", href: "/5/otsuri" }, { name: "やりかた（解説）" }]} />

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-rose-700 mb-3">🛍️ おつりの けいさんの やりかた</h1>
          <p className="leading-8">
            おつりは、<span className="font-bold">もっている おかね － ねだん</span>で もとめます。10円玉の かずで 考えると、かんたんです。
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/5/otsuri" className="px-5 py-3 rounded-xl bg-rose-500 text-white font-bold hover:opacity-90">
              ✏️ 5歳向けの れんしゅうへ
            </Link>
            <Link href="/6/otsuri" className="px-5 py-3 rounded-xl bg-pink-600 text-white font-bold hover:opacity-90">
              ✏️ 6歳向けの れんしゅうへ
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 bg-yellow-100 border-l-8 border-rose-400 p-3 rounded-r-xl">
          50円で 30円の ものを かうと？
        </h2>
        <ol className="space-y-4 mb-6">
          <Step n={1} title="もっている おかねを 10円玉で あらわす">
            <p className="mb-2 leading-7">50円は 10円玉が 5こ。</p>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <CoinDisc key={i} v={10} />
              ))}
            </div>
          </Step>
          <Step n={2} title="ねだんの ぶんだけ つかう">
            <p className="mb-2 leading-7">30円は 10円玉が 3こ。うすい コインが つかった ぶんです。</p>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ opacity: i < 3 ? 0.25 : 1 }}>
                  <CoinDisc v={10} />
                </span>
              ))}
            </div>
          </Step>
          <Step n={3} title="のこりが おつり">
            <p className="leading-8 font-bold">10円玉 5こ － 3こ ＝ 2こ → 20円</p>
            <p className="text-sm text-gray-600">10円玉が 2こ のこったから、おつりは 20円だよ。</p>
          </Step>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-rose-400 p-3 rounded-r-xl">
          10円で 7円の ものを かうと？（6歳）
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p>10を「7と 3」に わけます。7円ぶんを つかうと、のこりは 3円。</p>
          <p className="font-bold mt-2">10－7＝3 → おつりは 3円</p>
          <p className="mt-2 text-sm text-gray-600">
            10の わけかた（1と9、2と8…）が すぐ 言えると、ラクになります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-rose-400 p-3 rounded-r-xl">
          20円で 13円の ものを かうと？（6歳）
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p>13円を「10円と 3円」に わけて、じゅんばんに つかいます。</p>
          <p className="font-bold mt-2">20－10＝10、 10－3＝7 → おつりは 7円</p>
          <p className="mt-2">
            <Link href="/kurisagari" className="text-blue-600 underline font-bold">🔻 10からひく（くりさがり）の やりかたも 見てみよう</Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-rose-400 p-3 rounded-r-xl">
          👨‍👩‍👧 保護者の方へ
        </h2>
        <div className="space-y-4 leading-8 mb-6">
          <div className="bg-white rounded-2xl p-5">
            <ul className="list-disc ml-6 space-y-1">
              <li>
                小学1年の「100までのかずのけいさん」の指導案（広島県三原市の公開資料）の単元構成には、「(何十)±(何十)」「(何十何)±(何)」が示されています。また、10の束や10円玉などを用いて、10を単位とした考え方に気づかせる、という記述があります。このドリルの「10円玉の数で考える」問題は、その考え方に沿っています。
              </li>
              <li>10円で1〜9円のもの、20円で11〜19円のものは、10の分け方やくりさがりの考え方（10から先にひく）を使います。くりさがりのある計算は、「くりさがりひきざん」のページで練習できます。</li>
              <li>本物の10円玉を並べて、使う分を取りのぞいて見せると、理解しやすくなります。（これは一般的な関わり方の例です。）</li>
              <li>これは、お金を題材にした計算の練習で、金銭教育（お金の価値や使い方を学ぶこと）の教材ではありません。また、この問題の効果を調べた研究はありません。</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-5 text-sm text-gray-700">
            <p className="font-bold mb-1">参考資料</p>
            <ul className="list-disc ml-6 space-y-1 break-all">
              <li>
                三原市 公開資料「第1学年算数科学習指導案（100までのかずのけいさん）」：
                <a className="text-blue-600 underline" href="https://www.city.mihara.hiroshima.jp/uploaded/life/60909_189108_misc.pdf" target="_blank" rel="noopener noreferrer">
                  https://www.city.mihara.hiroshima.jp/uploaded/life/60909_189108_misc.pdf
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/5/otsuri" className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop mr-2">
            5歳向けの れんしゅう
          </Link>
          <Link href="/6/otsuri" className="inline-block bg-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            6歳向けの れんしゅう
          </Link>
        </div>
      </div>
    </main>
  );
}
