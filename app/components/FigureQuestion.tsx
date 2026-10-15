import type { Cell, Figure, Shape } from "../data/figureTypes";
import { CIRCLED, borrowParts, carryParts, changeKind, coinsTotal, priceParts, turnText } from "../data/figureTypes";
import { SolidStack, TopView, SideView } from "./Solids";
import Link from "next/link";

/**
 * かいてん・せんたいしょう・うえ/よこからみる・けいようし の「図」を描く。
 * どれも印刷してそのまま書きこめるように、枠線は黒、書きこみ欄は空のマスにしている。
 */

const INK = "#1f2937";

function ShapeMark({ s, x, y, u, color = INK }: { s: Shape; x: number; y: number; u: number; color?: string }) {
  const cx = x + u / 2;
  const cy = y + u / 2;
  const r = u * 0.3;
  const p = { stroke: color, strokeWidth: 2.2, fill: "none", strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  switch (s) {
    case "o":
      return <circle cx={cx} cy={cy} r={r} {...p} />;
    case "dot":
      return <circle cx={cx} cy={cy} r={r * 0.9} fill={color} />;
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
  tone?: "normal" | "answer" | "faint";
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
        cells.map((c, i) => (
          <ShapeMark key={i} s={c.s} x={c.c * u} y={c.r * u} u={u} color={tone === "faint" ? "#cbd5e1" : INK} />
        ))}
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

/**
 * trace=true のとき、かきこみ式の図（かがみうつし）に「れいだい」として
 * こたえをうすく ひいておく。うえから なぞって れんしゅうできる。
 */

// ---------- くりあがりたしざん ----------

function CarryBox({ value, faint, wide = false }: { value?: number | string; faint?: boolean; wide?: boolean }) {
  return (
    <span
      className={`wt-box ${wide ? "wt-box-wide" : ""} inline-flex items-center justify-center border-2 border-gray-600 rounded-lg bg-white text-2xl font-bold h-11 ${wide ? "w-14" : "w-11"}`}
      style={{ color: faint ? "#cbd5e1" : INK }}
    >
      {value ?? ""}
    </span>
  );
}

function CarryCard({ figure }: { figure: Extract<Figure, { kind: "carry" }> }) {
  const { a, b, level, help } = figure;
  const { big, x, y, smallIsLeft } = carryParts(a, b);
  const sum = a + b;
  const faint = level === 1;
  const frame = level !== 3;

  // 小さいほうの数の下に、ふたつにわけるわくを出す
  const branch = (
    <div className="flex flex-col items-center mt-1">
      <svg width="64" height="18" viewBox="0 0 64 18" aria-hidden="true">
        <path d="M32 0 L14 17 M32 0 L50 17" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <div className="flex gap-2">
        <CarryBox value={faint ? x : undefined} faint={faint} />
        <CarryBox value={faint ? y : undefined} faint={faint} />
      </div>
    </div>
  );

  return (
    <div className="wt-write wt-carry mb-3 rounded-2xl border-2 border-gray-300 bg-white p-3">
      <div className="wt-carry-row flex items-start justify-center gap-2">
        <div className="flex flex-col items-center">
          <span className="inline-flex h-11 w-11 items-center justify-center text-3xl font-bold">{a}</span>
          {frame && smallIsLeft && branch}
        </div>
        <span className="h-11 inline-flex items-center text-3xl font-bold">＋</span>
        <div className="flex flex-col items-center">
          <span className="inline-flex h-11 w-11 items-center justify-center text-3xl font-bold">{b}</span>
          {frame && !smallIsLeft && branch}
        </div>
        <span className="h-11 inline-flex items-center text-3xl font-bold">＝</span>
        <CarryBox wide />
      </div>

      {frame && (
        <div className="wt-carry-steps mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xl font-bold">
          <span className="inline-flex items-center gap-1">
            {big}＋
            <CarryBox value={faint ? x : undefined} faint={faint} />＝
            <span className="inline-flex h-11 w-12 items-center justify-center" style={{ color: faint ? "#cbd5e1" : INK }}>
              {faint ? 10 : "10"}
            </span>
          </span>
          <span className="inline-flex items-center gap-1">
            10＋
            <CarryBox value={faint ? y : undefined} faint={faint} />＝
            <CarryBox value={faint ? sum : undefined} faint={faint} wide />
          </span>
        </div>
      )}

      <p className="print-hide mt-2 text-center text-xs">
        <Link href={help} className="text-blue-600 underline hover:text-blue-800">
          💡 「10を つくる」やりかたを みる
        </Link>
      </p>
    </div>
  );
}

// ---------- くりさがりひきざん ----------

function BorrowCard({ figure }: { figure: Extract<Figure, { kind: "borrow" }> }) {
  const { a, b, level, help } = figure;
  const { t, x, ans } = borrowParts(a, b);
  const faint = level === 1;
  const frame = level !== 3;

  const branch = (
    <div className="flex flex-col items-center mt-1">
      <svg width="64" height="18" viewBox="0 0 64 18" aria-hidden="true">
        <path d="M32 0 L14 17 M32 0 L50 17" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <div className="flex gap-2">
        <CarryBox value={faint ? 10 : undefined} faint={faint} wide />
        <CarryBox value={faint ? t : undefined} faint={faint} />
      </div>
    </div>
  );

  return (
    <div className="wt-write wt-carry mb-3 rounded-2xl border-2 border-gray-300 bg-white p-3">
      <div className="wt-carry-row flex items-start justify-center gap-2">
        <div className="flex flex-col items-center">
          <span className="inline-flex h-11 w-14 items-center justify-center text-3xl font-bold">{a}</span>
          {frame && branch}
        </div>
        <span className="h-11 inline-flex items-center text-3xl font-bold">－</span>
        <span className="inline-flex h-11 w-11 items-center justify-center text-3xl font-bold">{b}</span>
        <span className="h-11 inline-flex items-center text-3xl font-bold">＝</span>
        <CarryBox wide />
      </div>

      {frame && (
        <div className="wt-carry-steps mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xl font-bold">
          <span className="inline-flex items-center gap-1">
            10－{b}＝
            <CarryBox value={faint ? x : undefined} faint={faint} />
          </span>
          <span className="inline-flex items-center gap-1">
            <CarryBox value={faint ? x : undefined} faint={faint} />＋
            <CarryBox value={faint ? t : undefined} faint={faint} />＝
            <CarryBox value={faint ? ans : undefined} faint={faint} wide />
          </span>
        </div>
      )}

      <p className="print-hide mt-2 text-center text-xs">
        <Link href={help} className="text-blue-600 underline hover:text-blue-800">
          💡 「10から ひく」やりかたを みる
        </Link>
      </p>
    </div>
  );
}

// ---------- おかねの けいさん ----------

const COIN_STYLE: Record<number, { fill: string; stroke: string; text: string }> = {
  1: { fill: "#e5e7eb", stroke: "#6b7280", text: "#374151" },
  5: { fill: "#fde68a", stroke: "#a16207", text: "#713f12" },
  10: { fill: "#c9854a", stroke: "#7c3f14", text: "#ffffff" },
};

/** ふつうの 丸い コインの ずに、なん円かを かいたもの（実物の デザインでは ありません） */
export function CoinDisc({ v }: { v: 1 | 5 | 10 }) {
  const st = COIN_STYLE[v];
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" aria-label={`${v}円玉`}>
      <circle cx="19" cy="19" r="17" fill={st.fill} stroke={st.stroke} strokeWidth="2" />
      <text x="19" y="25" textAnchor="middle" fontSize="16" fontWeight="700" fill={st.text}>
        {v}
      </text>
    </svg>
  );
}

function CoinsCard({ figure }: { figure: Extract<Figure, { kind: "coins" }> }) {
  const { coins, level, help } = figure;
  const faint = level === 1;
  const frame = level !== 3;
  return (
    <div className="wt-write wt-carry wt-money-card mb-3 rounded-2xl border-2 border-gray-300 bg-white p-3">
      <div className="space-y-1">
        {coins.map((c) => (
          <div key={c.v} className="flex items-center gap-2">
            <span className="w-14 shrink-0 text-sm font-bold text-gray-600">{c.v}円玉</span>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: c.n }).map((_, i) => (
                <CoinDisc key={i} v={c.v} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {frame && (
        <div className="wt-carry-steps mt-3 space-y-2 text-lg font-bold">
          {coins.map((c) => (
            <div key={c.v} className="flex flex-wrap items-center justify-center gap-1">
              {c.v}円 ×
              <CarryBox value={faint ? c.n : undefined} faint={faint} />
              こ ＝
              <CarryBox value={faint ? c.v * c.n : undefined} faint={faint} wide />
              円
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center justify-center gap-2 text-xl font-bold">
        ぜんぶで
        <CarryBox wide />
        円
      </div>

      <p className="print-hide mt-2 text-center text-xs">
        <Link href={help} className="text-blue-600 underline hover:text-blue-800">
          💡 「まとめて かぞえる」やりかたを みる
        </Link>
      </p>
    </div>
  );
}

function PriceTag({ yen }: { yen: number }) {
  return (
    <span className="inline-flex items-center justify-center rounded-lg border-2 border-gray-700 bg-yellow-50 px-3 h-11 text-2xl font-bold">
      {yen}円
    </span>
  );
}

function PriceCard({ figure }: { figure: Extract<Figure, { kind: "price" }> }) {
  const { a, b, level, help } = figure;
  const p = priceParts(a, b);
  const faint = level === 1;
  const frame = level !== 3;
  return (
    <div className="wt-write wt-carry wt-money-card mb-3 rounded-2xl border-2 border-gray-300 bg-white p-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <PriceTag yen={a} />
        <span className="text-3xl font-bold">＋</span>
        <PriceTag yen={b} />
        <span className="text-3xl font-bold">＝</span>
        <CarryBox wide />
        <span className="text-xl font-bold">円</span>
      </div>

      {frame && (
        <div className="wt-carry-steps mt-3 space-y-2 text-lg font-bold">
          <div className="flex flex-wrap items-center justify-center gap-1">
            <span className="text-sm text-gray-600 mr-1">一のくらい</span>
            {p.o1}＋{p.o2}＝
            <CarryBox value={faint ? p.onesSum : undefined} faint={faint} />
            {p.carry === 1 && <span className="text-sm text-gray-600 ml-1">（10が 1こ → 十のくらいへ）</span>}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            <span className="text-sm text-gray-600 mr-1">十のくらい</span>
            {p.t1}＋{p.t2}＋
            <CarryBox value={faint ? p.carry : undefined} faint={faint} />＝
            <CarryBox value={faint ? p.tens : undefined} faint={faint} />
          </div>
        </div>
      )}

      <p className="print-hide mt-2 text-center text-xs">
        <Link href={help} className="text-blue-600 underline hover:text-blue-800">
          💡 「十のくらい・一のくらい」やりかたを みる
        </Link>
      </p>
    </div>
  );
}

// ---------- おつり ----------

function ChangeCard({ figure }: { figure: Extract<Figure, { kind: "change" }> }) {
  const { pay, price, level, help } = figure;
  const ans = pay - price;
  const kind = changeKind(pay, price);
  const faint = level === 1;
  const frame = level !== 3;

  return (
    <div className="wt-write wt-carry wt-money-card mb-3 rounded-2xl border-2 border-gray-300 bg-white p-3">
      <div className="flex flex-wrap items-center justify-center gap-2 text-lg font-bold">
        <span>もっている</span>
        <PriceTag yen={pay} />
        <span>ねだん</span>
        <PriceTag yen={price} />
      </div>
      <div className="mt-2 flex items-center justify-center gap-2 text-xl font-bold">
        おつり
        <CarryBox wide />
        円
      </div>

      {frame && kind === "tens" && (
        <div className="wt-carry-steps mt-3 space-y-2 text-lg font-bold">
          <div className="flex flex-wrap items-center justify-center gap-1">
            10円玉
            <CarryBox value={faint ? pay / 10 : undefined} faint={faint} />
            こ －
            <CarryBox value={faint ? price / 10 : undefined} faint={faint} />
            こ ＝
            <CarryBox value={faint ? ans / 10 : undefined} faint={faint} />
            こ
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            10円玉
            <CarryBox value={faint ? ans / 10 : undefined} faint={faint} />
            こ ＝
            <CarryBox value={faint ? ans : undefined} faint={faint} wide />
            円
          </div>
        </div>
      )}

      {frame && kind === "ten" && (
        <div className="wt-carry-steps mt-3 text-lg font-bold">
          <div className="flex flex-col items-center">
            <span className="text-2xl">10</span>
            <svg width="64" height="18" viewBox="0 0 64 18" aria-hidden="true">
              <path d="M32 0 L14 17 M32 0 L50 17" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
            <div className="flex gap-2">
              <CarryBox value={faint ? price : undefined} faint={faint} />
              <CarryBox value={faint ? ans : undefined} faint={faint} />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
            10－{price}＝
            <CarryBox value={faint ? ans : undefined} faint={faint} />
          </div>
        </div>
      )}

      {frame && kind === "twenty" && (
        <div className="wt-carry-steps mt-3 space-y-2 text-lg font-bold">
          <div className="flex flex-wrap items-center justify-center gap-1">
            20－10＝
            <CarryBox value={faint ? 10 : undefined} faint={faint} wide />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            10－{price - 10}＝
            <CarryBox value={faint ? ans : undefined} faint={faint} />
          </div>
        </div>
      )}

      <p className="print-hide mt-2 text-center text-xs">
        <Link href={help} className="text-blue-600 underline hover:text-blue-800">
          💡 「おつり」のやりかたを みる
        </Link>
      </p>
    </div>
  );
}

export default function FigureQuestion({ figure, trace = false }: { figure: Figure; trace?: boolean }) {
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
          <ShapeGrid
            size={figure.size}
            cells={trace ? figure.result : []}
            u={figure.size >= 4 ? 40 : 46}
            tone={trace ? "faint" : "normal"}
            blank={!trace}
          />
          {trace && (
            <span className="ml-3 text-sm font-bold text-purple-700 leading-5">
              れいだい
              <br />
              うすい ずを
              <br />
              なぞろう
            </span>
          )}
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

    case "carry":
      return <CarryCard figure={figure} />;

    case "borrow":
      return <BorrowCard figure={figure} />;

    case "coins":
      return <CoinsCard figure={figure} />;

    case "change":
      return <ChangeCard figure={figure} />;

    case "price":
      return <PriceCard figure={figure} />;

    case "trace":
      return (
        <div className="wt-write mb-3">
          {figure.bank && figure.bank.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3 wt-bank">
              <span className="text-sm font-bold text-green-700">ことばの えらびしゃ：</span>
              {figure.bank.map((w) => (
                <span
                  key={w}
                  className="rounded-full border-2 border-green-300 bg-green-50 px-3 py-1 text-lg font-bold"
                >
                  {w}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            {figure.items.map((it, i) => (
              <div
                key={i}
                className="wt-trace-card rounded-2xl border-2 border-gray-300 bg-white px-4 py-3 text-center min-w-[200px] max-w-[320px]"
              >
                <div className="text-5xl leading-tight tracking-wide">{it.emojis.join("")}</div>
                {it.scene && <p className="wt-scene text-sm leading-6 text-gray-700 mt-1">{it.scene}</p>}
                <TraceWord word={it.word} />
              </div>
            ))}
          </div>
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
  if (figure.kind === "carry") {
    const { big, small, x, y } = carryParts(figure.a, figure.b);
    return (
      <p className="mt-2 text-sm font-bold text-green-700">
        {small}を {x}と {y}に わける → {big}＋{x}＝10、10＋{y}＝{figure.a + figure.b}
      </p>
    );
  }
  if (figure.kind === "change") {
    const ans = figure.pay - figure.price;
    const k = changeKind(figure.pay, figure.price);
    return (
      <p className="mt-2 text-sm font-bold text-green-700">
        {k === "tens"
          ? `10円玉 ${figure.pay / 10}こ－${figure.price / 10}こ＝${ans / 10}こ → ${ans}円`
          : k === "ten"
          ? `10は ${figure.price}と ${ans} → ${ans}円`
          : `20－10＝10、10－${figure.price - 10}＝${ans} → ${ans}円`}
      </p>
    );
  }
  if (figure.kind === "coins") {
    return (
      <p className="mt-2 text-sm font-bold text-green-700">
        {figure.coins.map((c) => `${c.v}円玉 ${c.n}こ＝${c.v * c.n}円`).join("、")} → あわせて {coinsTotal(figure.coins)}円
      </p>
    );
  }
  if (figure.kind === "price") {
    const p = priceParts(figure.a, figure.b);
    return (
      <p className="mt-2 text-sm font-bold text-green-700">
        一のくらい {p.o1}＋{p.o2}＝{p.onesSum}
        {p.carry ? "（くりあがり）" : ""}、十のくらい {p.t1}＋{p.t2}
        {p.carry ? "＋1" : ""}＝{p.tens} → {p.total}円
      </p>
    );
  }
  if (figure.kind === "borrow") {
    const { t, x, ans } = borrowParts(figure.a, figure.b);
    return (
      <p className="mt-2 text-sm font-bold text-green-700">
        {figure.a}を 10と {t}に わける → 10－{figure.b}＝{x}、{x}＋{t}＝{ans}
      </p>
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
