/**
 * かいてん・せんたいしょう・うえ/よこから みる・けいようし 用の「図」のデータ型。
 * 問題データ（Question）の `figure` に入れ、QuestionList / 各年齢ページが
 * FigureQuestion コンポーネントで描画する。
 */

export type Shape =
  | "o" // ○
  | "dot" // ●
  | "sq" // □
  | "x" // ✕
  | "tu" // ▲（上向き）
  | "td" // ▽（下向き）
  | "tl" // ◁（左向き）
  | "tr" // ▷（右向き）
  | "sl" // ＼
  | "bs"; // ／

export type Cell = { r: number; c: number; s: Shape };

export type SolidKind = "cyl" | "cube" | "sphere" | "cone";
export type Layer = { kind: SolidKind; color: string; w: 1 | 2 | 3 };

export type TraceItem = { emojis: string[]; word: string; scene?: string };

export type Figure =
  | {
      kind: "rotate-choice";
      size: number;
      cells: Cell[];
      deg: 90 | 180 | 270;
      choices: Cell[][];
      correct: number; // 0始まり
    }
  | {
      kind: "rotate-draw";
      size: number;
      cells: Cell[];
      deg: 90 | 180 | 270;
      result: Cell[];
    }
  | { kind: "symmetry"; size: number; cells: Cell[]; result: Cell[] }
  | {
      kind: "solid-view";
      view: "top" | "side";
      layers: Layer[];
      choices: Layer[][];
      correct: number;
    }
  | { kind: "trace"; items: TraceItem[]; bank?: string[] };

// ---------- 図形の変換 ----------

const ROT_CW: Record<Shape, Shape> = {
  o: "o",
  dot: "dot",
  sq: "sq",
  x: "x",
  tu: "tr",
  tr: "td",
  td: "tl",
  tl: "tu",
  sl: "bs",
  bs: "sl",
};

/** 右まわり（時計まわり）に deg 度まわす */
export function rotateCells(cells: Cell[], size: number, deg: 90 | 180 | 270): Cell[] {
  const n = size;
  return cells.map(({ r, c, s }) => {
    let nr = r;
    let nc = c;
    let ns: Shape = s;
    const times = deg / 90;
    for (let i = 0; i < times; i++) {
      const tr = nc;
      const tc = n - 1 - nr;
      nr = tr;
      nc = tc;
      ns = ROT_CW[ns];
    }
    return { r: nr, c: nc, s: ns };
  });
}

const MIRROR: Record<Shape, Shape> = {
  o: "o",
  dot: "dot",
  sq: "sq",
  x: "x",
  tu: "tu",
  td: "td",
  tl: "tr",
  tr: "tl",
  sl: "bs",
  bs: "sl",
};

/** 左右反転（たての線を さかいに うつす） */
export function mirrorCells(cells: Cell[], size: number): Cell[] {
  return cells.map(({ r, c, s }) => ({ r, c: size - 1 - c, s: MIRROR[s] }));
}

export function cellsSignature(cells: Cell[]): string {
  return [...cells]
    .sort((a, b) => a.r - b.r || a.c - b.c)
    .map((c) => `${c.r},${c.c},${c.s}`)
    .join("|");
}

export const CIRCLED = ["①", "②", "③", "④"];

export function turnText(deg: 90 | 180 | 270): string {
  if (deg === 90) return "みぎに ひとつぶん まわす";
  if (deg === 180) return "さかさまに まわす";
  return "ひだりに ひとつぶん まわす";
}
