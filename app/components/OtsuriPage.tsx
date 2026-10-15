import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import GenreAbilityBox from "./GenreAbilityBox";
import KuriagariDrill from "./KuriagariDrill";
import { generateOtsuri } from "../data/figureQuestions";
import { getDayIndex } from "../data/masuKeisan";

type Age = 5 | 6;

export function otsuriMetadata(age: Age) {
  return {
    title: `${age}歳向けおつりの計算ドリル｜10円玉で考えるひき算（無料・印刷OK）`,
    description: `${age}歳向けの無料のおつりの計算ドリル。${age === 5 ? "10円玉の数で考える、何十円どうしの" : "10円玉の数で考えるおつりに、10円・20円からのおつりも加えた"}ひき算を、分解の枠つきで練習。うすい補助をなぞれて、解説ページつき、答えつきで印刷できます。`,
    alternates: { canonical: `/${age}/otsuri` },
  };
}

export default function OtsuriPage({ age }: { age: Age }) {
  const questions = generateOtsuri(age);
  const startSeed = getDayIndex();

  return (
    <main className="min-h-screen bg-rose-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="print-hide">
          <Breadcrumb items={[{ name: `${age}歳ドリル`, href: `/${age}` }, { name: "おつりの けいさん" }]} />
        </div>

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6 print-hide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-rose-700">🛍️ {age}歳向けおつりの けいさん</h1>
          <p className="leading-8">
            「50円で 30円の ものを かうと、おつりは？」を、<span className="font-bold">もっている おかね － ねだん</span>で 計算する練習です。10円玉の かずで 考えると、かんたんに なります。
          </p>
          <p className="leading-7 mt-3 text-sm bg-rose-50 rounded-xl p-3">
            <span className="font-bold">📘 {age}歳のレベル：</span>
            {age === 5
              ? "10円ごとの おつり（50円で 30円 → 20円 など。30円〜90円から）です。"
              : "10円ごとの おつり（30円〜100円から）に くわえて、10円で 1〜9円の もの（10－7）と、20円で 11〜19円の もの（20－13）が 入ります。"}
            「うすい ほじょ」「わくだけ」「わくなし」の3だんかいで、少しずつ助けを減らします。
          </p>
          <p className="leading-7 mt-3 text-sm">
            <Link href="/otsuri" className="text-blue-600 underline font-bold">
              💡 まず「やりかた」を見る（図つきの解説ページ）
            </Link>
          </p>
        </div>

        <GenreAbilityBox genreKey="otsuri" />

        <KuriagariDrill
          questions={questions}
          startSeed={startSeed}
          helpHref="/otsuri"
          helpLabel="💡 「おつり」のやりかたを みる（かいせつ）"
        />

        <div className="mt-8 bg-white rounded-3xl shadow p-6 sm:p-8 print-hide">
          <h2 className="text-2xl font-bold mb-3">👨‍👩‍👧 保護者の方へ</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>
              むずかしそうなときは、
              <Link href="/otsuri" className="text-blue-600 underline">解説ページ</Link>
              のように、本物の10円玉を並べて、使うぶんを取りのぞいて見せてあげてください。
            </li>
            <li>画面で「こたえあわせ」をすると、答えの数だけが採点されます。途中の枠は、おうちの方が確認してあげてください。</li>
            <li>これは、お金を題材にした計算の練習で、金銭教育（お金の価値や使い方を学ぶこと）の教材ではありません。この問題の効果を調べた研究もありません。</li>
          </ul>
        </div>

        <div className="mt-8 text-center print-hide">
          <Link href={`/${age}`} className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            ← {age}歳向けドリル一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
