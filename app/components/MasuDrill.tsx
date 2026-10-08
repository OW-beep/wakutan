"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PrintHeader from "./PrintHeader";
import { usePrintWithAnswers } from "./printWithAnswers";
import type { MasuSheet } from "../data/masuKeisan";

type Phase = "ready" | "running" | "done";

function fmt(ms: number): string {
  const total = Math.floor(ms / 100) / 10;
  const m = Math.floor(total / 60);
  const s = total - m * 60;
  return `${String(m).padStart(2, "0")}:${s.toFixed(1).padStart(4, "0")}`;
}

function readBest(key: string): number | null {
  try {
    const v = window.localStorage.getItem(key);
    return v ? Number(v) : null;
  } catch {
    return null;
  }
}
function writeBest(key: string, ms: number) {
  try {
    window.localStorage.setItem(key, String(ms));
  } catch {
    /* 保存できなくても つづけられる */
  }
}

export default function MasuDrill({
  age,
  sheets,
  startSeed,
}: {
  age: 4 | 5 | 6;
  sheets: MasuSheet[];
  /** 日がわりで はじめのシートを かえるための数 */
  startSeed: number;
}) {
  const sizes = useMemo(() => Array.from(new Set(sheets.map((s) => s.size))), [sheets]);
  const [size, setSize] = useState(sizes[0]);
  const [offset, setOffset] = useState(0);
  const list = useMemo(() => sheets.filter((s) => s.size === size), [sheets, size]);
  const sheet = list[(startSeed + offset) % list.length];

  const [phase, setPhase] = useState<Phase>("ready");
  const [answers, setAnswers] = useState<string[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const [newBest, setNewBest] = useState(false);
  const { printAnswers, printWithAnswers } = usePrintWithAnswers();
  const startRef = useRef(0);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const n = sheet.size;
  const bestKey = `wakutan-masu-best-${age}-${n}`;

  useEffect(() => {
    if (phase !== "running") return;
    const id = window.setInterval(() => setElapsed(Date.now() - startRef.current), 100);
    return () => window.clearInterval(id);
  }, [phase]);

  function reset(nextSize = size, nextOffset = offset) {
    setPhase("ready");
    setElapsed(0);
    setAnswers([]);
    setNewBest(false);
    setSize(nextSize);
    setOffset(nextOffset);
    setBest(readBest(`wakutan-masu-best-${age}-${nextSize}`));
  }

  function start() {
    setAnswers(Array(n * n).fill(""));
    setNewBest(false);
    startRef.current = Date.now();
    setElapsed(0);
    setPhase("running");
    window.setTimeout(() => inputs.current[0]?.focus(), 0);
  }

  const correct = answers.filter((a, i) => {
    const r = Math.floor(i / n);
    const c = i % n;
    return a !== "" && Number(a) === sheet.top[c] + sheet.left[r];
  }).length;

  function finish() {
    const ms = Date.now() - startRef.current;
    setElapsed(ms);
    setPhase("done");
    const all = correct === n * n;
    const prev = readBest(bestKey);
    setBest(prev);
    if (all && (prev === null || ms < prev)) {
      writeBest(bestKey, ms);
      setNewBest(true);
      setBest(ms);
    }
  }

  function setAnswer(i: number, v: string) {
    const clean = v.replace(/[^0-9]/g, "").slice(0, 2);
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = clean;
      return next;
    });
  }

  function move(i: number, dr: number, dc: number) {
    const r = Math.floor(i / n) + dr;
    const c = (i % n) + dc;
    if (r < 0 || c < 0 || r >= n || c >= n) return;
    inputs.current[r * n + c]?.focus();
  }

  const fontCls = n <= 5 ? "text-2xl" : n <= 7 ? "text-xl" : "text-base";
  const headCls = n <= 5 ? "text-2xl" : n <= 7 ? "text-xl" : "text-lg";

  return (
    <div data-print-answers={printAnswers ? "1" : "0"}>
      <PrintHeader total={n * n} showTime />
      <p className="hidden print:block text-xs mb-2 text-gray-600">
        やりかた：よこの すう ＋ たての すう の こたえを、まじわる ますに かこう。はじめる まえに ときどき とけいを みて、おわった じかんも かこう。
      </p>
      <p className="wt-print-answer-title text-sm font-bold text-green-700 mb-1">こたえ（おうちの人用）</p>

      {/* ---- えらぶ・タイマー（印刷しない） ---- */}
      <div className="print-hide bg-white rounded-2xl shadow p-4 mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-bold text-sm">ますの かず：</span>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => reset(s, 0)}
              aria-pressed={s === size}
              className={`px-4 py-2 rounded-full border-2 font-bold ${
                s === size ? "border-teal-500 bg-teal-50 text-teal-700" : "border-gray-200 text-gray-500"
              }`}
            >
              {s}ます
            </button>
          ))}
          <button
            onClick={() => reset(size, offset + 1)}
            className="ml-auto px-4 py-2 rounded-full border-2 border-gray-300 font-semibold text-gray-600 hover:bg-gray-50"
          >
            🔁 あたらしい シート
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="text-4xl font-bold tabular-nums text-teal-700" aria-live="off">
            ⏱ {fmt(phase === "ready" ? 0 : elapsed)}
          </div>

          {phase === "ready" && (
            <button onClick={start} className="bg-teal-500 text-white px-6 py-3 rounded-xl font-bold wt-btn-pop">
              ▶ スタート
            </button>
          )}
          {phase === "running" && (
            <button onClick={finish} className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold wt-btn-pop">
              ■ おわり！こたえあわせ
            </button>
          )}
          {phase === "done" && (
            <button onClick={() => reset(size, offset)} className="bg-teal-500 text-white px-6 py-3 rounded-xl font-bold wt-btn-pop">
              もういちど（おなじ シート）
            </button>
          )}
          <button
            onClick={() => window.print()}
            className="px-4 py-3 rounded-xl border-2 border-gray-300 font-bold text-gray-700 hover:bg-gray-50"
          >
            🖨 このシートを いんさつ
          </button>
          <button
            onClick={printWithAnswers}
            className="px-4 py-3 rounded-xl border-2 border-green-500 text-green-700 font-bold hover:bg-green-50"
          >
            ✅ こたえつきで いんさつ
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          {phase === "ready" && "「スタート」をおして、よこの すう ＋ たての すう の こたえを いれよう。（いんさつして、とけいで はかっても OK）"}
          {phase === "running" && "ぜんぶ かけたら「おわり」をおそう。Enter・やじるしキーで となりの ますへ うつれるよ。"}
          {phase === "done" && "おつかれさま！タイムは じぶんの きろく。ほかの子と くらべなくて だいじょうぶ。"}
        </p>
        {best !== null && <p className="text-sm text-teal-700 font-bold mt-1">🏅 この ますの じこベスト（ぜんぶ せいかいのとき）：{fmt(best)}</p>}
      </div>

      {/* ---- けっか ---- */}
      {phase === "done" && (
        <div className="print-hide bg-teal-50 border-2 border-teal-300 rounded-2xl p-5 mb-4 text-center">
          <p className="text-3xl font-bold text-teal-700">
            {correct} / {n * n} てん
          </p>
          <p className="mt-1 text-lg">
            じかん <span className="font-bold">{fmt(elapsed)}</span>
            {correct > 0 && <span className="text-sm text-gray-600">（1ますあたり やく {(elapsed / 1000 / (n * n)).toFixed(1)} びょう）</span>}
          </p>
          {correct === n * n && <p className="mt-2 font-bold text-orange-600">🎉 ぜんぶ せいかい！</p>}
          {newBest && <p className="mt-1 font-bold text-orange-600">🏅 じこベスト こうしん！</p>}
          {correct < n * n && <p className="mt-2 text-sm text-gray-600">あかい ますは まちがい。みどりの すうじが せいかいだよ。</p>}
        </div>
      )}

      {/* ---- ます ---- */}
      <div className="bg-white rounded-2xl shadow p-3 sm:p-5 print:shadow-none print:p-0">
        <table className="w-full table-fixed border-collapse text-center" aria-label={`${n}ます計算`}>
          <tbody>
            <tr>
              <th className={`border-2 border-gray-700 bg-teal-100 h-11 print:h-14 ${headCls}`}>＋</th>
              {sheet.top.map((t, c) => (
                <th key={c} className={`border-2 border-gray-700 bg-teal-50 h-11 print:h-14 font-bold ${headCls}`}>
                  {t}
                </th>
              ))}
            </tr>
            {sheet.left.map((l, r) => (
              <tr key={r}>
                <th className={`border-2 border-gray-700 bg-teal-50 h-11 print:h-14 font-bold ${headCls}`}>{l}</th>
                {sheet.top.map((t, c) => {
                  const i = r * n + c;
                  const val = answers[i] ?? "";
                  const ans = t + l;
                  const checked = phase === "done";
                  const ok = checked && Number(val) === ans;
                  const bad = checked && !ok;
                  return (
                    <td
                      key={c}
                      className={`border-2 border-gray-700 p-0 relative h-11 print:h-14 ${ok ? "bg-green-100" : ""} ${bad ? "bg-red-100" : ""}`}
                    >
                      <input
                        ref={(el) => {
                          inputs.current[i] = el;
                        }}
                        value={val}
                        readOnly={phase !== "running"}
                        inputMode="numeric"
                        aria-label={`${l}たす${t}`}
                        onChange={(e) => setAnswer(i, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === "ArrowRight") {
                            e.preventDefault();
                            if (c === n - 1 && e.key === "Enter") move(i, 1, -(n - 1));
                            else move(i, 0, 1);
                          } else if (e.key === "ArrowLeft") move(i, 0, -1);
                          else if (e.key === "ArrowDown") move(i, 1, 0);
                          else if (e.key === "ArrowUp") move(i, -1, 0);
                        }}
                        className={`w-full h-full bg-transparent text-center outline-none focus:bg-yellow-50 ${fontCls}`}
                      />
                      <span className="wt-print-cell-answer">{ans}</span>
                      {bad && (
                        <span className="absolute right-0.5 bottom-0 text-xs font-bold text-green-700 print-hide">{ans}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
