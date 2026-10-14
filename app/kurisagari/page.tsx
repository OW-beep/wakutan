import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { LooseDots, TenFrame } from "@/app/components/TenFrame";

export const metadata = {
  title: "くりさがりのあるひき算の教え方｜10からひく方法を図で解説（5・6歳）",
  description:
    "13－8のような繰り下がりのあるひき算を、「10からひいて、のこりをたす」方法（減加法）で考える手順を図で解説。小学1年の指導案の流れも、出典つきで紹介します。",
  alternates: { canonical: "/kurisagari" },
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="bg-white rounded-2xl border-2 border-sky-200 p-4">
      <p className="font-bold text-lg mb-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-white text-sm mr-2">{n}</span>
        {title}
      </p>
      {children}
    </li>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <Breadcrumb items={[{ name: "くりさがりひきざん", href: "/5/kurisagari" }, { name: "やりかた（解説）" }]} />

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-3">🔻 くりさがりのある ひきざんの やりかた</h1>
          <p className="leading-8">
            「13－8」のように、一の位の 3から 8が ひけない ひき算は、<span className="font-bold">13を 10と 3に わけて、10から ひく</span>と かんたんに なります。おはじきや ブロックを つかって、いっしょに やってみましょう。
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/5/kurisagari" className="px-5 py-3 rounded-xl bg-sky-500 text-white font-bold hover:opacity-90">
              ✏️ 5歳向けの れんしゅうへ
            </Link>
            <Link href="/6/kurisagari" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:opacity-90">
              ✏️ 6歳向けの れんしゅうへ
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 bg-yellow-100 border-l-8 border-sky-400 p-3 rounded-r-xl">
          まずは 13－8 を やってみよう
        </h2>

        <ol className="space-y-4 mb-6">
          <Step n={1} title="ひかれる 数を「10と いくつ」に わける">
            <p className="mb-2 leading-7">13は「10と 3」だね。10の わくと、ばらの 3つで あらわそう。</p>
            <div className="flex flex-wrap items-center gap-4">
              <TenFrame filled={10} />
              <span className="text-2xl font-bold">＋</span>
              <LooseDots n={3} />
            </div>
          </Step>
          <Step n={2} title="10から ひく 数を とる">
            <p className="mb-2 leading-7">
              ばらの 3からは 8が ひけないから、<span className="font-bold text-red-600">10の わくから 8こ</span> とろう。10－8＝2。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <TenFrame filled={2} ghost={8} />
              <span className="text-2xl font-bold">＋</span>
              <LooseDots n={3} />
            </div>
            <p className="mt-2 text-sm text-gray-600">てんせんの まるが、とった 8こ。わくに 2こ のこったね。</p>
          </Step>
          <Step n={3} title="のこりと、ばらを あわせる">
            <div className="flex flex-wrap items-center gap-4">
              <TenFrame filled={2} />
              <span className="text-2xl font-bold">＋</span>
              <LooseDots n={3} />
            </div>
            <p className="mt-2 leading-7 font-bold">10－8＝2、 2＋3＝5</p>
          </Step>
          <Step n={4} title="こたえは 5！">
            <p className="leading-7">
              「10から ひく → のこりを たす」の 2だんかいで できます。ひく数が 9なら、10－9＝1。かんたんだね。
            </p>
          </Step>
        </ol>

        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p className="font-bold mb-1">しきで かくと</p>
          <p>13－8 → 13を「10と 3」に わける → 10－8＝2 → 2＋3＝5</p>
          <p className="text-sm text-gray-600 mt-2">
            ドリルでは、ひかれる数の下に「10と のこり」を かく わくが 出ます。うすい すうじは なぞって、わくを うめよう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-sky-400 p-3 rounded-r-xl">
          はじめる まえに：くりあがりたしざん
        </h2>
        <div className="bg-white rounded-2xl p-5 mb-6 leading-8">
          <p>
            学校では、くりあがりのある たし算を ならって から、くりさがりの ある ひき算を ならいます。「10と いくつ」の 見方が たし算で できてから 取り組むと、スムーズです。
          </p>
          <p className="mt-2">
            <Link href="/kuriagari" className="text-blue-600 underline font-bold">
              ➕ くりあがりたしざんの やりかたは こちら
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-sky-400 p-3 rounded-r-xl">
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
            <span className="font-bold">わくなし：</span>わくなしで、あたまの なかで 10から ひく。
          </li>
          <li>5歳は「ひく数が 9か 8」、6歳は「ひく数が 2〜9」の 問題です。</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-sky-400 p-3 rounded-r-xl">
          👨‍👩‍👧 保護者の方へ
        </h2>
        <div className="space-y-4 leading-8 mb-6">
          <div className="bg-white rounded-2xl p-5">
            <p className="font-bold mb-1">学校での進め方（小学1年「ひきざん」の指導案より）</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>11〜18から1けたの数をひく、繰り下がりのある減法を学びます。「10といくつ」という数の見方にもとづいて計算します。</li>
              <li>前に、くりあがりのあるたし算（1けた＋1けた）を学んでいます。繰り下がりのある計算は、このときが初めてです。</li>
              <li>計算の仕方には、数え引き、減加法、減減法、補加法などがあります。岡山県の公開指導案では、「減加法は、10のまとまりから一度に減数をひけて簡単」という理由で、減加法を取り上げていました。</li>
              <li>東京書籍の教科書では、減加法と減々法が取り上げられていて、どちらを主にするかは、数の大きさに応じて柔軟に対応すると書かれている指導案もあります。</li>
              <li>授業では、はじめに数図ブロックなどの具体物を操作し、そのあと頭の中で操作する（念頭操作）流れで進める例があります。</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              これらは、教育委員会や学校が公開している指導案や、学校の研究のふり返りによる記述で、研究論文ではありません。学校や教科書によって、進め方や呼び方は異なります。このドリルは、減加法の形で作っています。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 text-sm text-gray-700">
            <p className="font-bold mb-1">参考資料</p>
            <ul className="list-disc ml-6 space-y-1 break-all">
              <li>
                岩手県教育委員会 公開資料「第1学年算数科学習指導案（ひきざん）」：
                <a className="text-blue-600 underline" href="https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023109.pdf" target="_blank" rel="noopener noreferrer">
                  https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023109.pdf
                </a>
              </li>
              <li>
                同（12－3の減加法の例）：
                <a className="text-blue-600 underline" href="https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023108.pdf" target="_blank" rel="noopener noreferrer">
                  https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r05/essa2023108.pdf
                </a>
              </li>
              <li>
                同（令和4年度、減加法と減々法の扱い）：
                <a className="text-blue-600 underline" href="https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r04/essa2022114.pdf" target="_blank" rel="noopener noreferrer">
                  https://www1.iwate-ed.jp/05sien/db/db2/sid_data/es/sansu/r04/essa2022114.pdf
                </a>
              </li>
              <li>
                岡山県 公開資料「小学校第1学年 算数科学習指導案（ひきざん）」：
                <a className="text-blue-600 underline" href="https://www.pref.okayama.jp/uploaded/life/330380_1526128_misc.pdf" target="_blank" rel="noopener noreferrer">
                  https://www.pref.okayama.jp/uploaded/life/330380_1526128_misc.pdf
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 mt-8 mb-6 leading-8">
          <p>
            つぎは
            <Link href="/okane-keisan" className="text-blue-600 underline font-bold mx-1">
              💴 おかねの けいさん
            </Link>
            で、10円玉を まとめて かぞえよう。
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/5/kurisagari" className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop mr-2">
            5歳向けの れんしゅう
          </Link>
          <Link href="/6/kurisagari" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            6歳向けの れんしゅう
          </Link>
        </div>
      </div>
    </main>
  );
}
