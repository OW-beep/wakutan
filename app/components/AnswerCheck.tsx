"use client";

import { useState } from "react";
import type { Figure } from "../data/figureTypes";

/**
 * 画面で こたえを いれて、その場で ○× をつける。
 * 手で書く問題（かがみうつし・なぞり書き 等）や、絵文字・記号がこたえの問題は
 * 入力しにくいので、対象にしない（「こたえ・かいせつを見る」で確かめる）。
 */
type Checkable = { genre: string; answer: string; figure?: Figure; dotFigure?: unknown };

export function canCheck(q: Checkable): boolean {
  if (q.dotFigure) return false;
  if (q.figure && q.figure.kind !== "rotate-choice" && q.figure.kind !== "solid-view") return false;
  const a = q.answer.trim();
  if (!a || a.length > 16) return false;
  return /^[\p{L}\p{N}\p{M}ー・、。\s]+$/u.test(a);
}

function toHira(s: string): string {
  return s.replace(/[\u30a1-\u30f6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}
function norm(s: string): string {
  // 全角・半角、①→1、カタカナ→ひらがなをそろえて、空白と句読点をのぞく
  return toHira(s.normalize("NFKC").toLowerCase()).replace(/[\s、。，．,.・]/g, "");
}

export function checkAnswer(input: string, answer: string): boolean {
  const i = norm(input);
  const a = norm(answer);
  if (!i) return false;
  if (i === a) return true;
  // 「12こ」「3じ」のように、数のあとに たんい がつくこたえは、数だけでもOK
  const m = a.match(/^(\d+)/);
  if (m && /^\d+$/.test(i) && m[1] === i && a.length - m[1].length <= 2) return true;
  return false;
}

export default function AnswerCheck({
  answer,
  onResult,
}: {
  answer: string;
  onResult: (ok: boolean) => void;
}) {
  const [val, setVal] = useState("");
  const [res, setRes] = useState<null | boolean>(null);

  function check() {
    if (!val.trim()) return;
    const ok = checkAnswer(val, answer);
    setRes(ok);
    onResult(ok);
  }

  return (
    <div className="print-hide mt-2 mb-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-gray-600">✍️ こたえを いれてみよう</span>
        <input
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            setRes(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") check();
          }}
          className="border-2 border-gray-300 rounded-lg px-3 py-1 w-36 text-lg focus:border-blue-400 outline-none"
          aria-label="こたえを いれる"
        />
        <button
          onClick={check}
          className="px-4 py-1.5 rounded-lg bg-gray-700 text-white font-bold text-sm hover:bg-gray-800"
        >
          こたえあわせ
        </button>
        {res === true && <span className="font-bold text-green-600">⭕ せいかい！</span>}
        {res === false && (
          <span className="font-bold text-red-600">
            ✖ ざんねん… こたえ：<span className="text-gray-800">{answer}</span>
            <button
              onClick={() => {
                setRes(true);
                onResult(true);
              }}
              className="ml-2 text-xs font-normal text-gray-500 underline"
            >
              （かきかたが ちがうだけなら「せいかい」にする）
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * 手で書く問題・絵や記号がこたえの問題用の「じぶんで まるつけ」。
 * こたえを見て（「こたえ・かいせつを見る」）、できたかどうかを自分で えらぶ。
 */
export function SelfMark({ onResult }: { onResult: (ok: boolean) => void }) {
  const [mark, setMark] = useState<null | boolean>(null);

  function choose(ok: boolean) {
    setMark(ok);
    onResult(ok);
  }

  return (
    <div className="print-hide mt-2 mb-1 flex flex-wrap items-center gap-2">
      <span className="text-sm font-bold text-gray-600">✏️ かけたら、こたえを みて じぶんで まるつけ</span>
      <button
        onClick={() => choose(true)}
        aria-pressed={mark === true}
        className={`px-4 py-1.5 rounded-lg border-2 font-bold text-sm ${
          mark === true ? "border-green-500 bg-green-100 text-green-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"
        }`}
      >
        ⭕ できた
      </button>
      <button
        onClick={() => choose(false)}
        aria-pressed={mark === false}
        className={`px-4 py-1.5 rounded-lg border-2 font-bold text-sm ${
          mark === false ? "border-red-400 bg-red-100 text-red-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"
        }`}
      >
        ✖ もういちど
      </button>
    </div>
  );
}

export function useCheckResultsState() {
  const [results, setResults] = useState<Record<number, boolean>>({});
  return {
    results,
    report: (i: number, ok: boolean) => setResults((p) => ({ ...p, [i]: ok })),
  };
}

export function ScoreBar({
  results,
  total,
}: {
  results: Record<number, boolean>;
  total: number;
}) {
  const tried = Object.keys(results).length;
  const ok = Object.values(results).filter(Boolean).length;
  if (total === 0) return null;
  return (
    <div className="print-hide sticky top-2 z-10 mb-4 rounded-2xl border-2 border-teal-300 bg-teal-50/95 px-4 py-2 text-center shadow">
      <span className="font-bold text-teal-800">
        てんすう：{ok} / {total} てん
      </span>
      <span className="ml-3 text-sm text-gray-600">
        （まるつけ した もんだい：{tried} / {total}）
      </span>
    </div>
  );
}
