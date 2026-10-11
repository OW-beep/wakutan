import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import GenreAbilityBox from "./GenreAbilityBox";
import KuriagariDrill from "./KuriagariDrill";
import { generateKuriagari } from "../data/figureQuestions";
import { getDayIndex } from "../data/masuKeisan";

type Age = 5 | 6;

export function kuriagariMetadata(age: Age) {
  const range = age === 5 ? "大きいほうの数が9か8" : "大きいほうの数が6〜9";
  return {
    title: `${age}歳向けくりあがりのあるたし算ドリル｜10を作って計算（無料・印刷OK）`,
    description: `${age}歳向けの無料の繰り上がりのあるたし算ドリル（${range}）。10を作る分解の枠つきで、うすい補助をなぞりながら練習できます。解説ページつき、答えつきで印刷できます。`,
    alternates: { canonical: `/${age}/kuriagari` },
  };
}

export default function KuriagariPage({ age }: { age: Age }) {
  const questions = generateKuriagari(age);
  const startSeed = getDayIndex();

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="print-hide">
          <Breadcrumb items={[{ name: `${age}歳ドリル`, href: `/${age}` }, { name: "くりあがりたしざん" }]} />
        </div>

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6 print-hide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-amber-700">🔟 {age}歳向けくりあがりたしざん</h1>
          <p className="leading-8">
            「9＋4」のように、答えが10をこえるたし算を、<span className="font-bold">10を つくって</span>計算する練習です。大きいほうの数を10にするために、小さいほうの数をふたつに分けます。
          </p>
          <p className="leading-7 mt-3 text-sm bg-amber-50 rounded-xl p-3">
            <span className="font-bold">📘 {age}歳のレベル：</span>
            {age === 5
              ? "大きいほうの数が 9 か 8 のたし算（9＋4、8＋5 など）です。"
              : "大きいほうの数が 9・8・7・6 の、1けたどうしのたし算（和は 11〜18）です。"}
            「うすい ほじょ」「わくだけ」「わくなし」の3だんかいで、少しずつ助けを減らします。
          </p>
          <p className="leading-7 mt-3 text-sm">
            <Link href="/kuriagari" className="text-blue-600 underline font-bold">
              💡 まず「やりかた」を見る（図つきの解説ページ）
            </Link>
          </p>
          <p className="leading-7 mt-2 text-xs text-gray-500">
            ※ 繰り上がりのあるたし算は、小学校1年生の内容です。{age === 5 ? "5歳は、10の分け方が分かってから、ゆっくり進めてください。" : "10の分け方（10は 9と1、8と2…）が分かってから取り組むのがおすすめです。"}
          </p>
        </div>

        <GenreAbilityBox genreKey="kuriagari" />

        <KuriagariDrill questions={questions} startSeed={startSeed} />

        <div className="mt-8 bg-white rounded-3xl shadow p-6 sm:p-8 print-hide">
          <h2 className="text-2xl font-bold mb-3">👨‍👩‍👧 保護者の方へ</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>
              むずかしそうなときは、
              <Link href="/kuriagari" className="text-blue-600 underline">解説ページ</Link>
              のように、おはじきやブロックで、実際に10のかたまりを作って見せてあげてください。
            </li>
            <li>指を使って考えても大丈夫です。「10にするには、あといくつ？」と聞いて、10を作る考え方に移していきましょう。</li>
            <li>画面で「こたえあわせ」をすると、答えの数だけが採点されます。途中の枠（分けた数）は、印刷または画面を見ながら、おうちの方が確認してあげてください。</li>
            <li>この問題の効果を調べた研究はありません。学校の「たしざん」の進め方（10のまとまりに着目する）に沿った練習として作っています。</li>
          </ul>
        </div>

        <div className="mt-8 text-center print-hide">
          <Link href={`/${age}`} className="inline-block bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            ← {age}歳向けドリル一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
