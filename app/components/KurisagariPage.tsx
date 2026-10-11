import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import GenreAbilityBox from "./GenreAbilityBox";
import KuriagariDrill from "./KuriagariDrill";
import { generateKurisagari } from "../data/figureQuestions";
import { getDayIndex } from "../data/masuKeisan";

type Age = 5 | 6;

export function kurisagariMetadata(age: Age) {
  const range = age === 5 ? "ひく数が9か8" : "ひく数が2〜9";
  return {
    title: `${age}歳向けくりさがりのあるひき算ドリル｜10からひいて計算（無料・印刷OK）`,
    description: `${age}歳向けの無料の繰り下がりのあるひき算ドリル（11〜18から1けたをひく、${range}）。「10からひいて、のこりをたす」分解の枠つきで、うすい補助をなぞりながら練習できます。解説ページつき、答えつきで印刷できます。`,
    alternates: { canonical: `/${age}/kurisagari` },
  };
}

export default function KurisagariPage({ age }: { age: Age }) {
  const questions = generateKurisagari(age);
  const startSeed = getDayIndex();

  return (
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="print-hide">
          <Breadcrumb items={[{ name: `${age}歳ドリル`, href: `/${age}` }, { name: "くりさがりひきざん" }]} />
        </div>

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6 print-hide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-sky-700">🔻 {age}歳向けくりさがりひきざん</h1>
          <p className="leading-8">
            「13－8」のように、一の位だけではひけないひき算を、<span className="font-bold">10から ひいて</span>計算する練習です。ひかれる数を「10と、のこり」に分けて、10から先にひきます。
          </p>
          <p className="leading-7 mt-3 text-sm bg-sky-50 rounded-xl p-3">
            <span className="font-bold">📘 {age}歳のレベル：</span>
            {age === 5 ? "11〜18から、ひく数が 9 か 8 のひき算です（13－9、14－8 など）。" : "11〜18から、ひく数が 2〜9 の、くりさがりのあるひき算のすべて（36通り）です。"}
            「うすい ほじょ」「わくだけ」「わくなし」の3だんかいで、少しずつ助けを減らします。
          </p>
          <p className="leading-7 mt-3 text-sm">
            <Link href="/kurisagari" className="text-blue-600 underline font-bold">
              💡 まず「やりかた」を見る（図つきの解説ページ）
            </Link>
          </p>
          <p className="leading-7 mt-2 text-xs text-gray-500">
            ※ くりさがりのあるひき算は、小学校1年生の内容で、くりあがりのあるたし算のあとに学びます。
            <Link href={`/${age}/kuriagari`} className="text-blue-600 underline ml-1">くりあがりたしざんはこちら</Link>
          </p>
        </div>

        <GenreAbilityBox genreKey="kurisagari" />

        <KuriagariDrill
          questions={questions}
          startSeed={startSeed}
          helpHref="/kurisagari"
          helpLabel="💡 「10から ひく」やりかたを みる（かいせつ）"
        />

        <div className="mt-8 bg-white rounded-3xl shadow p-6 sm:p-8 print-hide">
          <h2 className="text-2xl font-bold mb-3">👨‍👩‍👧 保護者の方へ</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>
              むずかしそうなときは、
              <Link href="/kurisagari" className="text-blue-600 underline">解説ページ</Link>
              のように、おはじきやブロックで、10のかたまりをくずして見せてあげてください。
            </li>
            <li>この問題は、小学校でよく使われる「減加法（10から先にひいて、のこりをたす）」の形で作っています。学校や教科書によって、別の方法（減減法など）を主に使うこともあります。</li>
            <li>画面で「こたえあわせ」をすると、答えの数だけが採点されます。途中の枠は、おうちの方が確認してあげてください。</li>
            <li>この問題の効果を調べた研究はありません。学校の「ひきざん」の進め方に沿った練習として作っています。</li>
          </ul>
        </div>

        <div className="mt-8 text-center print-hide">
          <Link href={`/${age}`} className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            ← {age}歳向けドリル一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
