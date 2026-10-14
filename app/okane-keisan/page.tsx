import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { CoinDisc } from "@/app/components/FigureQuestion";

export const metadata = {
  title: "おかねの計算の教え方｜10円玉をまとめて数える方法を図で解説（5・6歳）",
  description:
    "コインの合計やねだんのたし算を、10円玉・1円玉に分けて計算する手順を図で解説。「10を単位とする考え方」を小学1年の指導案の記述もふまえて紹介します。",
  alternates: { canonical: "/okane-keisan" },
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="bg-white rounded-2xl border-2 border-emerald-200 p-4">
      <p className="font-bold text-lg mb-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-sm mr-2">{n}</span>
        {title}
      </p>
      {children}
    </li>
  );
}

function Coins({ v, n }: { v: 1 | 5 | 10; n: number }) {
  return (
    <div className="flex flex-wrap gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <CoinDisc key={i} v={v} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <Breadcrumb items={[{ name: "おかねの けいさん", href: "/5/okane-keisan" }, { name: "やりかた（解説）" }]} />

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-3">💴 おかねの けいさんの やりかた</h1>
          <p className="leading-8">
            コインが たくさん あっても、<span className="font-bold">しゅるいごとに まとめて</span>かぞえると かんたんです。10円玉は 10円ずつ、1円玉は 1円ずつ。いっしょに やってみましょう。
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/5/okane-keisan" className="px-5 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:opacity-90">
              ✏️ 5歳向けの れんしゅうへ
            </Link>
            <Link href="/6/okane-keisan" className="px-5 py-3 rounded-xl bg-teal-600 text-white font-bold hover:opacity-90">
              ✏️ 6歳向けの れんしゅうへ
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 bg-yellow-100 border-l-8 border-emerald-400 p-3 rounded-r-xl">
          コインの ごうけい（10円玉 3こと 1円玉 4こ）
        </h2>
        <ol className="space-y-4 mb-6">
          <Step n={1} title="しゅるいごとに わける">
            <div className="space-y-1">
              <div className="flex items-center gap-2"><span className="w-14 text-sm font-bold">10円玉</span><Coins v={10} n={3} /></div>
              <div className="flex items-center gap-2"><span className="w-14 text-sm font-bold">1円玉</span><Coins v={1} n={4} /></div>
            </div>
          </Step>
          <Step n={2} title="しゅるいごとに なん円か かぞえる">
            <p className="leading-8 font-bold">10円玉が 3こ → 10、20、30 で 30円</p>
            <p className="leading-8 font-bold">1円玉が 4こ → 4円</p>
          </Step>
          <Step n={3} title="あわせる">
            <p className="leading-8 font-bold">30円 ＋ 4円 ＝ 34円</p>
            <p className="text-sm text-gray-600">10円玉は 10のまとまり、1円玉は ばら。「30と 4で 34」と 見えるよ。</p>
          </Step>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-emerald-400 p-3 rounded-r-xl">
          ねだんの たしざん（23円＋31円）
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p>ねだんを「十のくらい」と「一のくらい」に わけて たします。</p>
          <p className="font-bold mt-2">一のくらい：3＋1＝4　　十のくらい：2＋3＝5　→　54円</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-emerald-400 p-3 rounded-r-xl">
          くりあがりが あるとき（28円＋17円）
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p>一のくらいが 10を こえたら、10円玉 1こに かえて、十のくらいに たします。</p>
          <p className="font-bold mt-2">一のくらい：8＋7＝15（10が 1こ ＋ 5）</p>
          <p className="font-bold">十のくらい：2＋1＋1＝4（1は くりあがり）　→　45円</p>
          <p className="mt-2">
            <Link href="/kuriagari" className="text-blue-600 underline font-bold">➕ くりあがりたしざんの やりかたも 見てみよう</Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-emerald-400 p-3 rounded-r-xl">
          👨‍👩‍👧 保護者の方へ
        </h2>
        <div className="space-y-4 leading-8 mb-6">
          <div className="bg-white rounded-2xl p-5">
            <ul className="list-disc ml-6 space-y-1">
              <li>
                小学1年の「100までのかずのけいさん」の指導案（広島県三原市の公開資料）には、10の束や10円玉などを用いて、10を単位とした考え方に気づかせ、1位数の計算と関連づけて考えさせる、という記述があります。このドリルは、その考え方（10円玉＝10のまとまり）に沿って作っています。
              </li>
              <li>同じ指導案には、学習指導要領（小学校第1学年）の内容として、簡単な場合について2位数の加法・減法ができることを知る、とあります。</li>
              <li>本物のコインを使って、実際に10円玉をまとめて数える体験をすると、理解しやすくなります。（これは一般的な関わり方の例です。）</li>
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
          <Link href="/5/okane-keisan" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop mr-2">
            5歳向けの れんしゅう
          </Link>
          <Link href="/6/okane-keisan" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            6歳向けの れんしゅう
          </Link>
        </div>
      </div>
    </main>
  );
}
