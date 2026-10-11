import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { LooseDots, TenFrame } from "@/app/components/TenFrame";

export const metadata = {
  title: "くりあがりのあるたし算の教え方｜10を作る方法を図で解説（5・6歳）",
  description:
    "9＋4のような繰り上がりのあるたし算を、10のまとまりを作って考える方法を図で解説。小学1年の指導案の流れと、指で数える習慣との向き合い方も、出典つきで紹介します。",
  alternates: { canonical: "/kuriagari" },
};

const PAIRS = [
  [1, 9],
  [2, 8],
  [3, 7],
  [4, 6],
  [5, 5],
];

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="bg-white rounded-2xl border-2 border-amber-200 p-4">
      <p className="font-bold text-lg mb-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white text-sm mr-2">{n}</span>
        {title}
      </p>
      {children}
    </li>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <Breadcrumb items={[{ name: "くりあがりたしざん", href: "/5/kuriagari" }, { name: "やりかた（解説）" }]} />

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-700 mb-3">🔟 くりあがりのある たしざんの やりかた</h1>
          <p className="leading-8">
            「9＋4」のように、答えが10をこえるたし算は、<span className="font-bold">10を つくる</span>と かんたんに なります。おはじきや ブロックを つかって、いっしょに やってみましょう。
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/5/kuriagari" className="px-5 py-3 rounded-xl bg-amber-500 text-white font-bold hover:opacity-90">
              ✏️ 5歳向けの れんしゅうへ
            </Link>
            <Link href="/6/kuriagari" className="px-5 py-3 rounded-xl bg-orange-500 text-white font-bold hover:opacity-90">
              ✏️ 6歳向けの れんしゅうへ
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          まずは 9＋4 を やってみよう
        </h2>

        <ol className="space-y-4 mb-6">
          <Step n={1} title="大きいほうの 数を、10の わくに いれる">
            <p className="mb-2 leading-7">9は あと 1で 10の わくが いっぱいに なるね。</p>
            <div className="flex flex-wrap items-center gap-4">
              <TenFrame filled={9} ghost={1} />
              <span className="text-2xl font-bold">＋</span>
              <LooseDots n={4} />
            </div>
          </Step>
          <Step n={2} title="小さいほうの 数を 2つに わける">
            <p className="mb-2 leading-7">
              4から <span className="font-bold text-red-600">1こ</span> もってきて、9を 10にしよう。4は「1と 3」に わかれたね。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <TenFrame filled={9} ghost={1} />
              <span className="text-2xl font-bold">←</span>
              <LooseDots n={4} highlight={1} />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              しきで かくと：9＋4 → 4を「1と 3」に わける
            </p>
          </Step>
          <Step n={3} title="10に なったら、のこりを たす">
            <div className="flex flex-wrap items-center gap-4">
              <TenFrame filled={10} />
              <span className="text-2xl font-bold">＋</span>
              <LooseDots n={3} />
            </div>
            <p className="mt-2 leading-7 font-bold">9＋1＝10、 10＋3＝13</p>
          </Step>
          <Step n={4} title="こたえは 13！">
            <p className="leading-7">
              むずかしそうな たし算も、「10を つくる → のこりを たす」の 2だんかいで できます。
            </p>
          </Step>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          3＋9 のように、小さい数が 先にあるときは？
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p>
            大きい数（9）を 10に するのは おなじです。小さい数が 左に あるときは、<span className="font-bold">左の 数（3）を「1と 2」に わけます</span>。3＋9 ＝ 9＋3 なので、たす じゅんばんを ひっくりかえしても かまいません。
          </p>
          <p className="mt-2 font-bold">3＋9 → 3を「1と 2」に わける → 9＋1＝10、 10＋2＝12</p>
          <p className="mt-2 text-sm text-gray-600">
            ドリルでは、小さい数の 下に「わける わく」が 出ます。大きい数を 10に するのが コツです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          はじめる まえに：10の わけかた
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6">
          <p className="leading-7 mb-3">
            「10を つくる」ために、10の わけかたが すぐ 分かると ラクになります。10は、こう わけられます。
          </p>
          <div className="flex flex-wrap gap-2">
            {PAIRS.map(([x, y]) => (
              <span key={x} className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-2 font-bold text-lg">
                {x} と {y}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3">（ぎゃくに 6と4、7と3、8と2、9と1 も おなじです）</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ドリルの すすめかた
        </h2>
        <ul className="list-disc ml-6 space-y-2 leading-8 mb-6">
          <li>
            <span className="font-bold">うすい ほじょ：</span>うすい すうじを なぞりながら、わくの かたちを おぼえる。
          </li>
          <li>
            <span className="font-bold">わくだけ：</span>わくの なかに、じぶんで すうじを かく。
          </li>
          <li>
            <span className="font-bold">わくなし：</span>わくなしで、あたまの なかで 10を つくって こたえる。
          </li>
          <li>5歳は「大きいほうが 9か 8」、6歳は「大きいほうが 9・8・7・6」の 問題です。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          👨‍👩‍👧 保護者の方へ
        </h2>
        <div className="space-y-4 leading-8 mb-6">
          <div className="bg-white rounded-2xl p-5">
            <p className="font-bold mb-1">学校での進め方（小学1年「たしざん」の指導案より）</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>前提として、10の合成・分解（10は9と1、8と2…）や、「10といくつ」という数の見方（10＋5、12＋3など）を学びます。</li>
              <li>9＋4のように、足す数を分けて10のまとまりを作る方法（加数分解）を、算数ブロックを動かして考え、言葉で説明します。</li>
              <li>足される数が大きいときも、10のまとまりを作ればよいことを理解します。足される数が8、7…と進みます。</li>
              <li>その後、足される数のほうを分けて10を作る方法（被加数分解）を学びます。</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              これらは、教育委員会や学校が公開している指導案による記述で、研究論文ではありません。学校や教科書によって、進め方や呼び方は異なります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5">
            <p className="font-bold mb-1">指を使って数える習慣について</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                指の役割を整理した総説論文（Soylu ら 2018）は、指を使う活動が、1対1対応や「全体と部分」といった基本の考えへの入口になること、世界中の子どもが指で数えたり簡単な計算をしたりすることを述べています。指をどのように使えば数の力につながるかには、まだ合意がないとも述べています。
              </li>
              <li>
                足し算の方法は、「ブロックや指で数えて求める」から、「知っている計算から考える（例：10を作る）」、「覚えていて思い出す」へと進むと整理されています（Baroody 2006。算数教材の文献レビューによる紹介）。
              </li>
              <li>
                数えて求める方法は、1けたの計算では使えますが、数が大きくなると使いにくくなります。10のまとまりを作る方法は、その助けになります（Dowker らの論文でも、数える方法は1けたの計算に主に使える一方、分解の方法は複数けたの計算で主に使えると整理されています）。
              </li>
              <li>
                基本の足し算を、1つの学年で全部覚えきることは現実的ではないとされています（Baroody 1985、Carpenter & Moser 1984。上のレビューによる紹介）。急がず、お子さんのペースで進めてください。
              </li>
            </ul>
            <p className="text-sm text-gray-700 mt-3">
              指を使うことを禁止するより、「10にするには、あといくつ？」と声をかけて、10を作る考え方に少しずつ移していくのがおすすめです。（これは、上の資料をふまえた一般的な関わり方の例で、効果を確かめた研究ではありません。）
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 text-sm text-gray-700">
            <p className="font-bold mb-1">参考資料</p>
            <ul className="list-disc ml-6 space-y-1 break-all">
              <li>
                岩手県教育委員会 公開資料「第1学年算数科学習指導案（たし算）」：
                <a className="text-blue-600 underline" href="https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023105.pdf" target="_blank" rel="noopener noreferrer">
                  https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023105.pdf
                </a>
              </li>
              <li>
                同「9＋4の計算（加数分解）」：
                <a className="text-blue-600 underline" href="https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023107.pdf" target="_blank" rel="noopener noreferrer">
                  https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023107.pdf
                </a>
              </li>
              <li>
                金蘭短期大学附属学校 指導案（足される数が大きくても10のまとまり）：
                <a className="text-blue-600 underline" href="https://www.kinran.ac.jp/institution/pdf/first_grade_math_2019.pdf" target="_blank" rel="noopener noreferrer">
                  https://www.kinran.ac.jp/institution/pdf/first_grade_math_2019.pdf
                </a>
              </li>
              <li>
                Soylu, F., Lester, F. K., & Newman, S. D. (2018). You can count on your fingers: The role of fingers in early mathematical development. Journal of Numerical Cognition, 4(1), 107–135.
                <a className="text-blue-600 underline ml-1" href="https://doi.org/10.5964/jnc.v4i1.85" target="_blank" rel="noopener noreferrer">
                  https://doi.org/10.5964/jnc.v4i1.85
                </a>
              </li>
              <li>
                Everyday Mathematics 4 文献レビュー（Addition and Subtraction Facts）：
                <a className="text-blue-600 underline" href="https://www.mheducation.com/unitas/school/explore/research/em-review-literature-for-facts-strand.pdf" target="_blank" rel="noopener noreferrer">
                  https://www.mheducation.com/unitas/school/explore/research/em-review-literature-for-facts-strand.pdf
                </a>
              </li>
              <li>
                Dowker, A. (2014). Young children’s use of derived fact strategies for addition and subtraction. Frontiers in Human Neuroscience.
                <a className="text-blue-600 underline ml-1" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3880841" target="_blank" rel="noopener noreferrer">
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC3880841
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/5/kuriagari" className="inline-block bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop mr-2">
            5歳向けの れんしゅう
          </Link>
          <Link href="/6/kuriagari" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            6歳向けの れんしゅう
          </Link>
        </div>
      </div>
    </main>
  );
}
