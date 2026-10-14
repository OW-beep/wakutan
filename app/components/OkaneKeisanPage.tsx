import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import GenreAbilityBox from "./GenreAbilityBox";
import KuriagariDrill from "./KuriagariDrill";
import { generateOkaneKeisan } from "../data/figureQuestions";
import { getDayIndex } from "../data/masuKeisan";

type Age = 5 | 6;

export function okaneKeisanMetadata(age: Age) {
  return {
    title: `${age}歳向けおかねの計算ドリル｜コインの合計・ねだんのたし算（無料・印刷OK）`,
    description: `${age}歳向けの無料のお金の計算ドリル。${age === 5 ? "10円玉と1円玉の合計と、くりあがりのない" : "10円玉・5円玉・1円玉の合計と、くりあがりのある"}ねだんのたし算を、分解の枠つきで練習。うすい補助をなぞれて、解説ページつき、答えつきで印刷できます。`,
    alternates: { canonical: `/${age}/okane-keisan` },
  };
}

export default function OkaneKeisanPage({ age }: { age: Age }) {
  const questions = generateOkaneKeisan(age);
  const startSeed = getDayIndex();

  return (
    <main className="min-h-screen bg-emerald-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="print-hide">
          <Breadcrumb items={[{ name: `${age}歳ドリル`, href: `/${age}` }, { name: "おかねの けいさん" }]} />
        </div>

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6 print-hide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-emerald-700">💴 {age}歳向けおかねの けいさん</h1>
          <p className="leading-8">
            コインの ごうけいと、ねだんの たし算を、<span className="font-bold">10円ずつ・1円ずつ</span>に わけて 計算する練習です。10円玉は 10のまとまり、1円玉は ばら、という見方で、位取りにも ふれられます。
          </p>
          <p className="leading-7 mt-3 text-sm bg-emerald-50 rounded-xl p-3">
            <span className="font-bold">📘 {age}歳のレベル：</span>
            {age === 5
              ? "10円玉と1円玉（ごうけい 59円まで）と、くりあがりのない ねだんの たし算（こたえ 99円まで）です。"
              : "10円玉・5円玉・1円玉（ごうけい 99円まで）と、くりあがりのある ねだんの たし算（こたえ 99円まで）です。"}
            「うすい ほじょ」「わくだけ」「わくなし」の3だんかいで、少しずつ助けを減らします。
          </p>
          <p className="leading-7 mt-3 text-sm">
            <Link href="/okane-keisan" className="text-blue-600 underline font-bold">
              💡 まず「やりかた」を見る（図つきの解説ページ）
            </Link>
          </p>
          <p className="leading-7 mt-2 text-xs text-gray-500">
            ※ コインは、わかりやすく 丸と数字で かいた ずです（実物のデザインではありません）。
          </p>
        </div>

        <GenreAbilityBox genreKey="okanekeisan" />

        <KuriagariDrill
          questions={questions}
          startSeed={startSeed}
          helpHref="/okane-keisan"
          helpLabel="💡 「まとめて かぞえる」やりかたを みる（かいせつ）"
        />

        <div className="mt-8 bg-white rounded-3xl shadow p-6 sm:p-8 print-hide">
          <h2 className="text-2xl font-bold mb-3">👨‍👩‍👧 保護者の方へ</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>
              むずかしそうなときは、
              <Link href="/okane-keisan" className="text-blue-600 underline">解説ページ</Link>
              のように、本物のコインで「10円玉を まとめる」ところから 見せてあげてください。
            </li>
            <li>画面で「こたえあわせ」をすると、答えの数だけが採点されます。途中の枠は、おうちの方が確認してあげてください。</li>
            <li>これは、お金を題材にした計算の練習で、金銭教育（お金の価値や使い方を学ぶこと）の教材ではありません。</li>
            <li>この問題の効果を調べた研究はありません。</li>
          </ul>
        </div>

        <div className="mt-8 text-center print-hide">
          <Link href={`/${age}`} className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            ← {age}歳向けドリル一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
