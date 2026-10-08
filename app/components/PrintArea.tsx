"use client";

import { useState, type ReactNode } from "react";
import { usePrintWithAnswers } from "./printWithAnswers";

/**
 * ジャンルページの「印刷ボタン」と「1まいに入れる問題の密度」切りかえ。
 * 子（PrintHeader + QuestionList）を包んで使う。
 * 2列にすると、同じ問題数でも用紙の枚数がおよそ半分になる（印刷時だけ有効）。
 */
export default function PrintArea({
  children,
  defaultCols = 1,
}: {
  children: ReactNode;
  /** 最初にえらばれている印刷レイアウト（図が大きい問題は2列から始めて用紙をへらす） */
  defaultCols?: 1 | 2;
}) {
  const [cols, setCols] = useState<1 | 2>(defaultCols);
  const { printAnswers, printWithAnswers } = usePrintWithAnswers();

  return (
    <div data-print-cols={cols} data-print-answers={printAnswers ? "1" : "0"}>
      <div className="print-hide bg-white rounded-2xl shadow p-4 mb-4 flex flex-wrap items-center gap-3">
        <button
          onClick={() => window.print()}
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold wt-btn-pop"
        >
          🖨 このページを印刷する
        </button>

        <button
          onClick={printWithAnswers}
          className="px-5 py-3 rounded-xl border-2 border-green-500 text-green-700 font-bold hover:bg-green-50"
        >
          ✅ こたえつきで 印刷（おうちの人用）
        </button>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold">印刷のレイアウト：</span>
          {([1, 2] as const).map((n) => (
            <button
              key={n}
              onClick={() => setCols(n)}
              aria-pressed={cols === n}
              className={`px-3 py-2 rounded-full border-2 font-semibold ${
                cols === n
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              {n === 1 ? "ゆったり（1列）" : "ぎゅっと（2列・用紙が少なくてすむ）"}
            </button>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
