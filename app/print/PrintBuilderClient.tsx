"use client";

import { useMemo, useState } from "react";
import { generate4Questions } from "@/app/data/generate4";
import { generate5Questions } from "@/app/data/generate5";
import { generate6Questions } from "@/app/data/generate6";
import QuestionList from "@/app/components/QuestionList";
import PrintHeader from "@/app/components/PrintHeader";
import MasuSheetPrint from "@/app/components/MasuSheetPrint";
import { usePrintWithAnswers } from "@/app/components/printWithAnswers";
import { generateMasu, getDayIndex, MASU_LEVELS, type MasuOp, type MasuSheet } from "@/app/data/masuKeisan";

type Age = "4" | "5" | "6";

const GENRES: Record<Age, { key: string; emoji: string; label: string }[]> = {
  "4": [
    { key: "sansu", emoji: "🔢", label: "さんすう" },
    { key: "ronri", emoji: "🧠", label: "ろんり" },
    { key: "suiri", emoji: "🔍", label: "すいり" },
    { key: "kokki", emoji: "🚩", label: "こっき" },
    { key: "pattern", emoji: "🔷", label: "パターン" },
    { key: "hiragana", emoji: "🔤", label: "ひらがな" },
    { key: "nakamawake", emoji: "📦", label: "なかまわけ" },
    { key: "kurabekko", emoji: "⚖️", label: "くらべっこ" },
    { key: "nakamahazure", emoji: "🔀", label: "なかまはずれ" },
    { key: "nazonazo", emoji: "🧩", label: "なぞなぞ" },
    { key: "okane", emoji: "💰", label: "おかね" },
    { key: "tsumiki", emoji: "🧊", label: "つみき" },
    { key: "onajikatachi", emoji: "✏️", label: "おなじかたち" },
    { key: "kaiten", emoji: "🔄", label: "くるくるパズル" },
    { key: "sentaisho", emoji: "🪞", label: "かがみうつし" },
    { key: "mikata", emoji: "🔭", label: "どこからみる？" },
    { key: "keiyoushi", emoji: "💬", label: "ぴったりことば" },
    { key: "masu", emoji: "🧮", label: "ますけいさん（1シート＝1ページ）" },
  ],
  "5": [
    { key: "sansu", emoji: "🔢", label: "さんすう" },
    { key: "ronri", emoji: "🧠", label: "ろんり" },
    { key: "suiri", emoji: "🔍", label: "すいり" },
    { key: "kokki", emoji: "🚩", label: "こっき" },
    { key: "pattern", emoji: "🔷", label: "パターン" },
    { key: "hiragana", emoji: "🔤", label: "ひらがな" },
    { key: "nakamawake", emoji: "📦", label: "なかまわけ" },
    { key: "kurabekko", emoji: "⚖️", label: "くらべっこ" },
    { key: "nakamahazure", emoji: "🔀", label: "なかまはずれ" },
    { key: "moji", emoji: "📖", label: "もじのよみとき" },
    { key: "nazonazo", emoji: "🧩", label: "なぞなぞ" },
    { key: "okane", emoji: "💰", label: "おかね" },
    { key: "tsumiki", emoji: "🧊", label: "つみき" },
    { key: "onajikatachi", emoji: "✏️", label: "おなじかたち" },
    { key: "kaiten", emoji: "🔄", label: "くるくるパズル" },
    { key: "sentaisho", emoji: "🪞", label: "かがみうつし" },
    { key: "mikata", emoji: "🔭", label: "どこからみる？" },
    { key: "keiyoushi", emoji: "💬", label: "ぴったりことば" },
    { key: "masu", emoji: "🧮", label: "ますけいさん（1シート＝1ページ）" },
  ],
  "6": [
    { key: "sansu", emoji: "🔢", label: "さんすう" },
    { key: "ronri", emoji: "🧠", label: "ろんり" },
    { key: "suiri", emoji: "🔍", label: "すいり" },
    { key: "kokki", emoji: "🚩", label: "こっき" },
    { key: "pattern", emoji: "🔷", label: "パターン" },
    { key: "hiragana", emoji: "🔤", label: "ひらがな" },
    { key: "nakamawake", emoji: "📦", label: "なかまわけ" },
    { key: "kurabekko", emoji: "⚖️", label: "くらべっこ" },
    { key: "nakamahazure", emoji: "🔀", label: "なかまはずれ" },
    { key: "moji", emoji: "📖", label: "もじのよみとき" },
    { key: "tokei", emoji: "🕐", label: "とけい" },
    { key: "nazonazo", emoji: "🧩", label: "なぞなぞ" },
    { key: "okane", emoji: "💰", label: "おかね" },
    { key: "tsumiki", emoji: "🧊", label: "つみき" },
    { key: "onajikatachi", emoji: "✏️", label: "おなじかたち" },
    { key: "kaiten", emoji: "🔄", label: "くるくるパズル" },
    { key: "sentaisho", emoji: "🪞", label: "かがみうつし" },
    { key: "mikata", emoji: "🔭", label: "どこからみる？" },
    { key: "keiyoushi", emoji: "💬", label: "ぴったりことば" },
    { key: "masu", emoji: "🧮", label: "ますけいさん（1シート＝1ページ）" },
  ],
};

const AGE_LABEL: Record<Age, string> = { "4": "4さい", "5": "5さい", "6": "6さい" };
const AGE_ACCENT: Record<Age, string> = { "4": "text-pink-600", "5": "text-blue-600", "6": "text-purple-600" };
const AGE_BUTTON: Record<Age, string> = {
  "4": "bg-pink-500 hover:bg-pink-600",
  "5": "bg-blue-500 hover:bg-blue-600",
  "6": "bg-purple-500 hover:bg-purple-600",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QuestionsByGenre = Record<string, any[]>;

export default function PrintBuilderClient() {
  const [age, setAge] = useState<Age>("5");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [perGenre, setPerGenre] = useState(3);
  const [masuSize, setMasuSize] = useState<number | null>(null);
  const [masuSheetCount, setMasuSheetCount] = useState(1);
  const [masuOp, setMasuOp] = useState<MasuOp>("add");
  const [built, setBuilt] = useState<{
    age: Age;
    genres: string[];
    perGenre: number;
    masuSheets: MasuSheet[];
  } | null>(null);
  const { printAnswers, printWithAnswers } = usePrintWithAnswers();

  const allData: QuestionsByGenre = useMemo(() => {
    if (age === "4") return generate4Questions();
    if (age === "6") return generate6Questions();
    return generate5Questions();
  }, [age]);

  function toggleGenre(key: string) {
    setSelectedGenres((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  function handleBuild() {
    if (selectedGenres.length === 0) return;
    let masuSheets: MasuSheet[] = [];
    if (selectedGenres.includes("masu")) {
      const a = Number(age) as 4 | 5 | 6;
      const size = masuSize ?? MASU_LEVELS[a].sizes[0];
      const list = generateMasu(a, masuOp).filter((sh) => sh.size === size);
      const start = getDayIndex();
      masuSheets = Array.from({ length: masuSheetCount }, (_, i) => list[(start + i) % list.length]);
    }
    setBuilt({ age, genres: selectedGenres, perGenre, masuSheets });
  }

  const builtQuestions = useMemo(() => {
    if (!built) return [];
    const data = built.age === age ? allData : null;
    // ageが変わっていたら作り直しが必要なので、ここでは built 時点のageのデータを再取得する
    const source: QuestionsByGenre =
      data ??
      (built.age === "4" ? generate4Questions() : built.age === "6" ? generate6Questions() : generate5Questions());

    return built.genres.flatMap((key) => (source[key] ?? []).slice(0, built.perGenre));
  }, [built, age, allData]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">

      <div className="print-hide">
        <h1 className="text-3xl font-bold mb-2">🖨 印刷ビルダー</h1>
        <p className="text-gray-600 mb-8">
          年齢とジャンルを選んで、苦手なところだけのオリジナルプリントを作れます。
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mb-6">

          <p className="font-bold mb-3">① 年齢を選ぶ</p>
          <div className="flex gap-3 mb-6">
            {(["4", "5", "6"] as Age[]).map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAge(a);
                  setSelectedGenres([]);
                  setBuilt(null);
                }}
                className={`px-5 py-2 rounded-full border-2 font-bold ${
                  age === a
                    ? "border-orange-400 bg-orange-50 text-orange-600"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {AGE_LABEL[a]}
              </button>
            ))}
          </div>

          <p className="font-bold mb-3">② ジャンルを選ぶ（複数選択OK）</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {GENRES[age].map((g) => (
              <button
                key={g.key}
                onClick={() => toggleGenre(g.key)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-semibold ${
                  selectedGenres.includes(g.key)
                    ? "border-orange-400 bg-orange-400 text-white"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {g.emoji} {g.label}
              </button>
            ))}
          </div>

          <p className="font-bold mb-3">③ ジャンルごとの問題数</p>
          <div className="flex gap-2 mb-6">
            {[3, 5, 10].map((n) => (
              <button
                key={n}
                onClick={() => setPerGenre(n)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-bold ${
                  perGenre === n
                    ? "border-orange-400 bg-orange-50 text-orange-600"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {n}問
              </button>
            ))}
          </div>

          {selectedGenres.includes("masu") && (
            <div className="mb-6 rounded-2xl bg-teal-50 border border-teal-200 p-4">
              <p className="font-bold mb-2">🧮 ますけいさんの せってい</p>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm">けいさん：</span>
                {([["add", "➕ たし算"], ["sub", "➖ ひき算"]] as const).map(([k, label]) => (
                  <button
                    key={k}
                    onClick={() => setMasuOp(k)}
                    className={`px-3 py-1 rounded-full border-2 text-sm font-bold ${
                      masuOp === k ? "border-teal-500 bg-teal-100 text-teal-700" : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm">ますの かず：</span>
                {MASU_LEVELS[Number(age) as 4 | 5 | 6].sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setMasuSize(sz)}
                    className={`px-3 py-1 rounded-full border-2 text-sm font-bold ${
                      (masuSize ?? MASU_LEVELS[Number(age) as 4 | 5 | 6].sizes[0]) === sz
                        ? "border-teal-500 bg-teal-100 text-teal-700"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {sz}ます
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm">シートの まいすう：</span>
                {[1, 2, 3].map((k) => (
                  <button
                    key={k}
                    onClick={() => setMasuSheetCount(k)}
                    className={`px-3 py-1 rounded-full border-2 text-sm font-bold ${
                      masuSheetCount === k ? "border-teal-500 bg-teal-100 text-teal-700" : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {k}まい
                  </button>
                ))}
                <span className="text-xs text-gray-500">（ほかの問題のあとに、1シートずつ 新しいページで 印刷されます）</span>
              </div>
            </div>
          )}

          <button
            onClick={handleBuild}
            disabled={selectedGenres.length === 0}
            className={`px-8 py-3 rounded-xl font-bold text-white wt-btn-pop ${
              selectedGenres.length === 0 ? "bg-gray-300 cursor-not-allowed" : AGE_BUTTON[age]
            }`}
          >
            プリントを作る →
          </button>
        </div>
      </div>

      {built && (builtQuestions.length > 0 || built.masuSheets.length > 0) && (
        <div data-print-answers={printAnswers ? "1" : "0"}>
          <div className="print-hide flex justify-between items-center mb-4 gap-2 flex-wrap">
            <h2 className="text-xl font-bold">
              {AGE_LABEL[built.age]} ・ {built.genres.length}ジャンル ・ 全{builtQuestions.length}問
              {built.masuSheets.length > 0 && ` ＋ ますけいさん ${built.masuSheets.length}シート`}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold hover:opacity-90 transition"
              >
                🖨 印刷する
              </button>
              <button
                onClick={printWithAnswers}
                className="px-5 py-2 rounded-xl border-2 border-green-500 text-green-700 font-bold hover:bg-green-50"
              >
                ✅ こたえつきで 印刷
              </button>
            </div>
          </div>

          <h1 className={`text-2xl font-bold mb-4 ${builtQuestions.length === 0 ? "print-hide" : ""}`}>
            わくたん　オリジナルプリント（{AGE_LABEL[built.age]}）
          </h1>

          {builtQuestions.length > 0 && (
            <>
              <PrintHeader total={builtQuestions.length} />

              <QuestionList
                key={JSON.stringify([built.age, built.genres, built.perGenre])}
                questions={builtQuestions}
                accentText={AGE_ACCENT[built.age]}
                accentButton={AGE_BUTTON[built.age]}
              />
            </>
          )}

          {built.masuSheets.map((sh, i) => (
            <MasuSheetPrint key={i} sheet={sh} />
          ))}
        </div>
      )}

    </div>
  );
}
