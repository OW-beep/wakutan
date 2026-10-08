"use client";

import { useState } from "react";
import { flushSync } from "react-dom";

/**
 * 「こたえつきで いんさつ（おうちの人用）」。
 * flag が true のあいだだけ、問題のこたえ（.wt-print-answer）が印刷に出る。
 * 使うページは、ラッパーに data-print-answers={flag ? "1" : "0"} をつけること。
 */
export function usePrintWithAnswers() {
  const [printAnswers, setPrintAnswers] = useState(false);

  function printWithAnswers() {
    flushSync(() => setPrintAnswers(true));
    window.print();
    setPrintAnswers(false);
  }

  return { printAnswers, printWithAnswers };
}
