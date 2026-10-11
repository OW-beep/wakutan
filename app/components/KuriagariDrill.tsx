"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PrintArea from "./PrintArea";
import PrintHeader from "./PrintHeader";
import QuestionList from "./QuestionList";

type Q = Parameters<typeof QuestionList>[0]["questions"][number];
type Mode = "steps" | 1 | 2 | 3;

const MODES: { key: Mode; label: string; note: string }[] = [
  { key: "steps", label: "だんかいべつ", note: "うすい ほじょ → わくだけ → わくなし の じゅんに 8もん" },
  { key: 1, label: "うすい ほじょ", note: "うすい すうじを なぞって、わくを うめる" },
  { key: 2, label: "わくだけ", note: "わくの なかに じぶんで すうじを かく" },
  { key: 3, label: "わくなし", note: "わくなしで じぶんで かんがえる" },
];

function level(q: Q): number {
  return q.figure && (q.figure.kind === "carry" || q.figure.kind === "borrow") ? q.figure.level : 0;
}

function pick<T>(list: T[], n: number, start: number): T[] {
  if (list.length === 0) return [];
  return Array.from({ length: n }, (_, i) => list[(start + i) % list.length]);
}

export default function KuriagariDrill({
  questions,
  startSeed,
  helpHref = "/kuriagari",
  helpLabel = "💡 「10を つくる」やりかたを みる（かいせつ）",
}: {
  questions: Q[];
  startSeed: number;
  helpHref?: string;
  helpLabel?: string;
}) {
  const [mode, setMode] = useState<Mode>("steps");
  const [offset, setOffset] = useState(0);

  const sheet = useMemo(() => {
    const by = [1, 2, 3].map((l) => questions.filter((q) => level(q) === l));
    const s = ((startSeed + offset) * 3) % Math.max(by[0].length, 1);
    if (mode === "steps") return [...pick(by[0], 3, s), ...pick(by[1], 3, s), ...pick(by[2], 2, s)];
    return pick(by[mode - 1], 8, s);
  }, [questions, mode, offset, startSeed]);

  const current = MODES.find((m) => m.key === mode)!;

  return (
    <div>
      <div className="print-hide bg-white rounded-2xl shadow p-4 mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-bold text-sm">れんしゅうの だんかい：</span>
          {MODES.map((m) => (
            <button
              key={String(m.key)}
              onClick={() => {
                setMode(m.key);
                setOffset(0);
              }}
              aria-pressed={m.key === mode}
              className={`px-4 py-2 rounded-full border-2 font-bold text-sm ${
                m.key === mode ? "border-amber-500 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-500"
              }`}
            >
              {m.label}
            </button>
          ))}
          <button
            onClick={() => setOffset((o) => o + 1)}
            className="ml-auto px-4 py-2 rounded-full border-2 border-gray-300 font-semibold text-gray-600 hover:bg-gray-50"
          >
            🔁 あたらしい もんだい
          </button>
        </div>
        <p className="text-sm text-gray-600">{current.note}</p>
        <p className="text-sm mt-2">
          <Link href={helpHref} className="text-blue-600 underline font-bold">
            {helpLabel}
          </Link>
        </p>
      </div>

      <PrintArea defaultCols={2}>
        <PrintHeader total={sheet.length} />
        <QuestionList
          key={`${String(mode)}-${offset}`}
          questions={sheet}
          accentText="text-amber-700"
          accentButton="bg-amber-500"
        />
      </PrintArea>
    </div>
  );
}
