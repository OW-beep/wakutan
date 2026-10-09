import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import GenreAbilityBox from "./GenreAbilityBox";
import MasuDrill from "./MasuDrill";
import { generateMasu, getDayIndex, MASU_LEVELS } from "../data/masuKeisan";

type Age = 4 | 5 | 6;

export function masuMetadata(age: Age) {
  const lv = MASU_LEVELS[age];
  const first = lv.sizes[0];
  const last = lv.sizes[lv.sizes.length - 1];
  return {
    title: `${age}歳向けたし算のます計算（${first}〜${last}ます）｜点数とタイムをはかろう（無料・印刷OK）`,
    description: `${age}歳向けの無料のたし算ます計算（${first}〜${last}ます）。ますの数と同じ、${first}ますなら1〜${first}、${last}ますなら1〜${last}の数を使い、答えは${last * 2}までです。画面でタイマーと点数をはかったり、印刷して書きこんだりできます。`,
    alternates: { canonical: `/${age}/masu` },
  };
}

const LEVEL_TEXT: Record<Age, string> = {
  4: "3ます・4ますの小さなますです。つかう数は、ますの数と同じ数までです（3ますなら 1〜3、4ますなら 1〜4）。答えは 8 までです。",
  5: "5ます〜7ますです。つかう数は、ますの数と同じ数までです（5ますなら 1〜5、7ますなら 1〜7）。答えは 14 までです。",
  6: "8ます〜10ますです。つかう数は、ますの数と同じ数までです（8ますなら 1〜8、10ますなら 1〜10）。いちばん大きい 10×10 ますでも、答えは 20 までです。",
};

export default function MasuPage({ age }: { age: Age }) {
  const sheets = generateMasu(age);
  const startSeed = getDayIndex();
  const lv = MASU_LEVELS[age];

  return (
    <main className="min-h-screen bg-teal-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="print-hide">
          <Breadcrumb items={[{ name: `${age}歳ドリル`, href: `/${age}` }, { name: "ますけいさん" }]} />
        </div>

        <div className="bg-white rounded-3xl shadow p-6 sm:p-8 mb-6 print-hide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-teal-700">🧮 {age}歳向けますけいさん</h1>
          <p className="leading-8">
            よこの数と、たての数を「たし算」して、まじわるますに答えを書く問題です。画面で「スタート」をおすとタイマーが動き、「おわり」で点数とタイムが出ます。印刷して、書きこんで使うこともできます。
          </p>
          <p className="leading-7 mt-2 text-sm text-gray-500">📝 算数の「たし算の習熟練習（ます計算）」の形式です。ますの数は {lv.sizes[0]}〜{lv.sizes[lv.sizes.length - 1]} から選べます。</p>
          <p className="leading-7 mt-3 text-sm bg-teal-50 rounded-xl p-3">
            <span className="font-bold">📘 {age}歳のレベル：</span>
            {LEVEL_TEXT[age]}
          </p>
        </div>

        <div className="print-hide bg-white rounded-3xl shadow p-5 sm:p-6 mb-6">
          <h2 className="text-xl font-bold mb-3">📖 つかいかた</h2>
          <div className="grid gap-4 sm:grid-cols-2 text-sm leading-7">
            <div className="bg-teal-50 rounded-2xl p-4">
              <p className="font-bold text-teal-800 mb-1">💻 画面でやる</p>
              <ol className="list-decimal list-inside space-y-0.5">
                <li>「ますの かず」を えらぶ</li>
                <li>「スタート」を おす（タイマーが うごく）</li>
                <li>よこの すう ＋ たての すう の こたえを いれる（Enter・やじるしキーで となりへ）</li>
                <li>「おわり！こたえあわせ」で 点数と タイムが でる</li>
                <li>ぜんぶ せいかいなら「じこベスト」に きろく</li>
              </ol>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4">
              <p className="font-bold text-orange-800 mb-1">🖨 印刷してやる</p>
              <ol className="list-decimal list-inside space-y-0.5">
                <li>「このシートを いんさつ」を おす（A4 1まい）</li>
                <li>とけいを みながら、えんぴつで かきこむ</li>
                <li>おわったら「かかった じかん」と「せいかいした かず」を うえの わくに かく</li>
                <li>おうちの人は「こたえつきで いんさつ」で こたえあわせ</li>
              </ol>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            1まいに まとめて ほかの問題と いっしょに 印刷したいときは、「オリジナルプリント作成」で「ますけいさん」を えらべます。
          </p>
        </div>

        <GenreAbilityBox genreKey="masu" />

        <MasuDrill age={age} sheets={sheets} startSeed={startSeed} />

        <div className="mt-8 bg-white rounded-3xl shadow p-6 sm:p-8 print-hide">
          <h2 className="text-2xl font-bold mb-3">👨‍👩‍👧 保護者の方へ</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            <li>タイムは「お子さん自身の前回との比較」に使うのがおすすめです。ほかの子との比較には使わないでください。</li>
            <li>まちがいが多いときは、ますの数を減らして（{lv.sizes[0]}ます）から、もう一度挑戦してみましょう。</li>
            <li>点数・タイムの記録（じこベスト）は、お使いの端末のブラウザだけに保存されます。サーバーには送られません。</li>
            <li>タイムの目安や、点数の基準は、研究や基準にもとづくものではありません。おうちのペースで使ってください。</li>
          </ul>
          {age < 6 && (
            <p className="mt-4 text-sm text-gray-500">
              できるようになってきたら、
              <Link href={`/${age + 1}/masu`} className="text-teal-700 font-bold hover:underline">
                {age + 1}歳向けのますけいさん
              </Link>
              にも挑戦してみましょう。
            </p>
          )}
        </div>

        <div className="mt-8 text-center print-hide">
          <Link href={`/${age}`} className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop">
            ← {age}歳向けドリル一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
