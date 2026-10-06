import type { Cell, Figure, Shape } from "../data/figureTypes";
import { CIRCLED, turnText } from "../data/figureTypes";
import { SolidStack, TopView, SideView } from "./Solids";

/**
 * かいてん・せんたいしょう・うえ/よこからみる・けいようし の「図」を描く。
 * どれも印刷してそのまま書きこめるように、枠線は黒、書きこみ欄は空のマスにしている。
 */

const INK = "#1f2937";

function ShapeMark({ s, x, y, u }: { s: Shape; x: number; y: number; u: number }) {
  const cx = x + u / 2;
  const cy = y + u / 2;
  const r = u * 0.3;
  const p = { stroke: INK, strokeWidth: 2.2, fill: "none", strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  switch (s) {
    case "o":
      return <circle cx={cx} cy={cy} r={r} {...p} />;
    case "dot":
      return <circle cx={cx} cy={cy} r={r * 0.9} fill={INK} />;
    case "sq":
      return <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} {...p} />;
    case "x":
      return (
        <path d={`M ${cx - r} ${cy - r} L ${cx + r} ${cy + r} M ${cx + r} ${cy - r} L ${cx - r} ${cy + r}`} {...p} />
      );
    case "tu":
      return <polygon points={`${cx},${cy - r} ${cx + r},${cy + r * 0.85} ${cx - r},${cy + r * 0.85}`} {...p} />;
    case "td":
      return <polygon points={`${cx},${cy + r} ${cx + r},${cy - r * 0.85} ${cx - r},${cy - r * 0.85}`} {...p} />;
    case "tl":
      return <polygon points={`${cx - r},${cy} ${cx + r * 0.85},${cy - r} ${cx + r * 0.85},${cy + r}`} {...p} />;
    case "tr":
      return <polygon points={`${cx + r},${cy} ${cx - r * 0.85},${cy - r} ${cx - r * 0.85},${cy + r}`} {...p} />;
    case "sl":
      return <path d={`M ${x + u * 0.12} ${y + u * 0.12} L ${x + u * 0.88} ${y + u * 0.88}`} {...p} />;
    case "bs":
      return <path d={`M ${x + u * 0.88} ${y + u * 0.12} L ${x + u * 0.12} ${y + u * 0.88}`} {...p} />;
  }
}

export function ShapeGrid({
  size,
  cells,
  u = 44,
  blank = false,
  tone = "normal",
}: {
  size: number;
  cells: Cell[];
  u?: number;
  blank?: boolean;
  tone?: "normal" | "answer";
}) {
  const W = size * u;
  const stroke = tone === "answer" ? "#16a34a" : INK;
  return (
    <svg
      width={W + 4}
      height={W + 4}
      viewBox={`-2 -2 ${W + 4} ${W + 4}`}
      role="img"
      aria-label={blank ? "かきこむ ばしょ" : "ますの ず"}
      className="shrink-0"
    >
      <rect x={0} y={0} width={W} height={W} fill="#fff" stroke={stroke} strokeWidth={2} />
      {Array.from({ length: size - 1 }).map((_, i) => (
        <g key={i}>
          <line x1={(i + 1) * u} y1={0} x2={(i + 1) * u} y2={W} stroke={stroke} strokeWidth={1.2} />
          <line x1={0} y1={(i + 1) * u} x2={W} y2={(i + 1) * u} stroke={stroke} strokeWidth={1.2} />
        </g>
      ))}
      {!blank &&
        cells.map((c, i) => <ShapeMark key={i} s={c.s} x={c.c * u} y={c.r * u} u={u} />)}
    </svg>
  );
}

function ArrowLabel({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 text-sm font-bold text-purple-700">
      <div className="text-3xl leading-none">↷</div>
      <div>{text}</div>
    </div>
  );
}

// ---------- なぞりがき（けいようし） ----------

function TraceWord({ word }: { word: string }) {
  const chars = Array.from(word);
  return (
    <div className="flex justify-center gap-1.5 mt-2" aria-label={`ことばを かく ばしょ（${word.length}もじ）`}>
      {chars.map((ch, i) => {
        const guide = i === 0 || i === chars.length - 1;
        return (
          <span
            key={i}
            className="wt-trace-box inline-flex items-center justify-center w-14 h-14 border-2 border-gray-400 rounded-lg bg-white text-4xl leading-none"
            style={{
              color: guide ? "#cbd5e1" : "transparent",
              fontFamily: '"UD Digi Kyokasho NK-R","Hiragino Maru Gothic ProN","Yu Gothic",sans-serif',
              backgroundImage: guide
                ? undefined
                : "linear-gradient(to right, transparent 49%, #e5e7eb 50%, transparent 51%), linear-gradient(to bottom, transparent 49%, #e5e7eb 50%, transparent 51%)",
            }}
          >
            {guide ? ch : "　"}
          </span>
        );
      })}
    </div>
  );
}

function ChoiceLabel({ i }: { i: number }) {
  return <div className="text-center text-xl font-bold mb-1">{CIRCLED[i]}</div>;
}

function AnswerBox() {
  return (
    <div className="flex items-center gap-2 mt-3 text-sm">
      <span className="font-bold">こたえ</span>
      <span className="inline-block w-14 h-10 border-2 border-gray-500 rounded-lg bg-white" />
      <span className="text-gray-500">（ばんごうを かこう）</span>
    </div>
  );
}

export default function FigureQuestion({ figure }: { figure: Figure }) {
  switch (figure.kind) {
    case "rotate-choice":
      return (
        <div className="wt-fig mb-3">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <ShapeGrid size={figure.size} cells={figure.cells} u={46} />
            <ArrowLabel text={turnText(figure.deg)} />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 p-3 border-2 border-gray-300 rounded-2xl">
            {figure.choices.map((ch, i) => (
              <div key={i}>
                <ChoiceLabel i={i} />
                <ShapeGrid size={figure.size} cells={ch} u={38} />
              </div>
            ))}
          </div>
          <AnswerBox />
        </div>
      );

    case "rotate-draw":
      return (
        <div className="wt-write mb-3 flex flex-wrap items-center gap-2 justify-center">
          <ShapeGrid size={figure.size} cells={figure.cells} u={46} />
          <ArrowLabel text={turnText(figure.deg)} />
          <ShapeGrid size={figure.size} cells={[]} u={46} blank />
        </div>
      );

    case "symmetry":
      return (
        <div className="wt-write mb-3 flex items-center justify-center gap-0">
          <ShapeGrid size={figure.size} cells={figure.cells} u={figure.size >= 4 ? 40 : 46} />
          <svg width={20} height={figure.size * (figure.size >= 4 ? 40 : 46)} aria-hidden="true">
            <line x1={10} y1={0} x2={10} y2="100%" stroke="#7c3aed" strokeWidth={2.5} strokeDasharray="6 5" />
          </svg>
          <ShapeGrid size={figure.size} cells={[]} u={figure.size >= 4 ? 40 : 46} blank />
        </div>
      );

    case "solid-view":
      return (
        <div className="wt-fig mb-3">
          <div className="flex justify-center">
            <SolidStack layers={figure.layers} />
          </div>
          <div className="text-center text-sm font-bold text-purple-700 mt-1">
            ↓ {figure.view === "top" ? "うえ" : "よこ"}から みると？
          </div>
          <div className="flex flex-wrap justify-center items-end gap-5 mt-3 p-3 border-2 border-gray-300 rounded-2xl">
            {figure.choices.map((ch, i) => (
              <div key={i}>
                <ChoiceLabel i={i} />
                {figure.view === "top" ? <TopView layers={ch} size={96} /> : <SideView layers={ch} size={96} />}
              </div>
            ))}
          </div>
          <AnswerBox />
        </div>
      );

    case "trace":
      return (
        <div className="wt-write mb-3 flex flex-wrap justify-center gap-4">
          {figure.items.map((it, i) => (
            <div
              key={i}
              className="wt-trace-card rounded-2xl border-2 border-gray-300 bg-white px-4 py-3 text-center min-w-[200px]"
            >
              <div className="text-5xl leading-tight tracking-wide">{it.emojis.join("")}</div>
              <TraceWord word={it.word} />
            </div>
          ))}
        </div>
      );
  }
}

/** 「こたえをみる」を押したあとに出す、こたえの図（かきこみ問題だけ） */
export function FigureAnswer({ figure }: { figure: Figure }) {
  if (figure.kind === "rotate-draw") {
    return (
      <div className="mt-2">
        <ShapeGrid size={figure.size} cells={figure.result} u={40} tone="answer" />
      </div>
    );
  }
  if (figure.kind === "symmetry") {
    return (
      <div className="mt-2">
        <ShapeGrid size={figure.size} cells={figure.result} u={40} tone="answer" />
      </div>
    );
  }
  return null;
}
