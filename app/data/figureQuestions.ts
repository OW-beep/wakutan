/**
 * 「かいてん」「せんたいしょう」「うえ・よこから みる」「けいようし」の問題を作る。
 * どれも乱数のシードを固定して作るので、ビルドのたびに同じ問題セットになる
 * （日替わりの選び方は getDailyQuestions 側）。
 */
import {
  CIRCLED,
  cellsSignature,
  mirrorCells,
  rotateCells,
  turnText,
  type Cell,
  type Figure,
  type Layer,
  type Shape,
  type SolidKind,
} from "./figureTypes";
import { SOLID_COLORS, layerWidth } from "../components/Solids";
import { PAIR_DEFS, SINGLE_DEFS, WORDS, type WordDef } from "./keiyoushiData";

export type Age = 4 | 5 | 6;

export type FigureQ = {
  genre: string;
  question: string;
  answer: string;
  explanation: string;
  difficulty: number;
  figure: Figure;
};

export const GENRE_LABEL = {
  kaiten: "🔄 くるくるパズル",
  sentaisho: "🪞 かがみうつし",
  mikata: "🔭 どこからみる？",
  keiyoushi: "💬 ぴったりことば",
} as const;

// ---------- 道具 ----------

function makeRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
type Rng = () => number;
const pick = <T,>(r: Rng, a: T[]): T => a[Math.floor(r() * a.length)];
function shuffle<T>(r: Rng, a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function randomCells(r: Rng, size: number, n: number, pool: Shape[], mustHave?: Shape[]): Cell[] {
  const positions: [number, number][] = [];
  for (let i = 0; i < size; i++) for (let j = 0; j < size; j++) positions.push([i, j]);
  const chosen = shuffle(r, positions).slice(0, n);
  const cells = chosen.map(([row, col]) => ({ r: row, c: col, s: pick(r, pool) }));
  if (mustHave && mustHave.length && !cells.some((c) => mustHave.includes(c.s))) {
    cells[0].s = pick(r, mustHave);
  }
  return cells;
}

// ---------- かいてん ----------

const DIRECTIONAL: Shape[] = ["tu", "td", "tl", "tr"];

export function generateKaiten(age: Age): FigureQ[] {
  const r = makeRng(7000 + age);
  const out: FigureQ[] = [];
  const seen = new Set<string>();
  const cfg =
    age === 4
      ? { size: 2, n: 2, pool: ["o", "dot", "sq", "x"] as Shape[], degs: [180] as (90 | 180 | 270)[], must: undefined, choices: 3, target: 80, diff: 1 }
      : age === 5
      ? { size: 2, n: 3, pool: ["o", "dot", "x", "tu", "tr", "td", "tl"] as Shape[], degs: [90, 270] as (90 | 180 | 270)[], must: DIRECTIONAL, choices: 4, target: 120, diff: 2 }
      : { size: 3, n: 4, pool: ["o", "dot", "x", "sq", "tu", "tr", "td", "tl"] as Shape[], degs: [90, 180, 270] as (90 | 180 | 270)[], must: DIRECTIONAL, choices: 0, target: 200, diff: 3 };

  let guard = 0;
  while (out.length < cfg.target && guard++ < 20000) {
    const n = age === 6 ? (r() < 0.5 ? 3 : 4) : cfg.n;
    const cells = randomCells(r, cfg.size, n, cfg.pool, cfg.must);
    const deg = pick(r, cfg.degs);
    const result = rotateCells(cells, cfg.size, deg);
    const key = cellsSignature(cells) + "#" + deg;
    if (seen.has(key)) continue;
    if (cellsSignature(result) === cellsSignature(cells)) continue; // まわしても かわらない問題はつくらない
    seen.add(key);

    if (cfg.choices > 0) {
      const correctSig = cellsSignature(result);
      const candidates: Cell[][] = [
        cells,
        mirrorCells(result, cfg.size),
        rotateCells(cells, cfg.size, 90),
        rotateCells(cells, cfg.size, 180),
        rotateCells(cells, cfg.size, 270),
        mirrorCells(cells, cfg.size),
      ];
      const distract: Cell[][] = [];
      const sigs = new Set([correctSig]);
      for (const c of shuffle(r, candidates)) {
        const sg = cellsSignature(c);
        if (sigs.has(sg)) continue;
        sigs.add(sg);
        distract.push(c);
        if (distract.length === cfg.choices - 1) break;
      }
      if (distract.length < cfg.choices - 1) {
        seen.delete(key);
        continue;
      }
      const all = shuffle(r, [result, ...distract]);
      const correct = all.findIndex((c) => cellsSignature(c) === correctSig);
      out.push({
        genre: GENRE_LABEL.kaiten,
        question: `ひだりの ずを ${turnText(deg)}と、どれに なるかな？ こたえの ばんごうを □に かこう。`,
        answer: CIRCLED[correct],
        explanation: "かみを ほんとうに まわして みると わかりやすいよ。うえに あった ものが、どこに いくか みてみよう。",
        difficulty: cfg.diff,
        figure: { kind: "rotate-choice", size: cfg.size, cells, deg, choices: all, correct },
      });
    } else {
      out.push({
        genre: GENRE_LABEL.kaiten,
        question: `ひだりの ずを ${turnText(deg)}と、どうなるかな？ みぎの ますに かこう。`,
        answer: "みぎの ずの とおり",
        explanation: "ひとつずつ、どこに うつるか かんがえよう。さんかくの むきも いっしょに まわるよ。",
        difficulty: cfg.diff + (deg === 180 ? 0 : 1) * 0.1,
        figure: { kind: "rotate-draw", size: cfg.size, cells, deg, result },
      });
    }
  }
  return shuffle(r, out);
}

// ---------- せんたいしょう ----------

export function generateSentaisho(age: Age): FigureQ[] {
  const r = makeRng(8000 + age);
  const out: FigureQ[] = [];
  const seen = new Set<string>();
  const cfg =
    age === 4
      ? { size: 2, ns: [2, 3], pool: ["o", "dot", "sq", "x"] as Shape[], must: undefined, target: 100, diff: 1 }
      : age === 5
      ? { size: 3, ns: [3, 4], pool: ["o", "dot", "sq", "x", "tu", "tl", "tr"] as Shape[], must: ["tl", "tr"] as Shape[], target: 150, diff: 2 }
      : { size: 4, ns: [5, 6], pool: ["o", "dot", "sq", "x", "tu", "td", "tl", "tr", "sl", "bs"] as Shape[], must: ["tl", "tr", "sl", "bs"] as Shape[], target: 250, diff: 3 };

  let guard = 0;
  while (out.length < cfg.target && guard++ < 20000) {
    const cells = randomCells(r, cfg.size, pick(r, cfg.ns), cfg.pool, age === 4 ? undefined : cfg.must);
    const key = cellsSignature(cells);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({
      genre: GENRE_LABEL.sentaisho,
      question: "むらさきの てんせんを さかいに して、ひだりと おなじ かたちを みぎの ますに かこう。（かがみに うつした ように）",
      answer: "みぎの ずの とおり",
      explanation: "てんせんが かがみ。ひだりの いちは、みぎの おなじ たかさの はんたいがわに うつるよ。むきの ある かたちは、ひだりと みぎが ぎゃくむきに なるよ。",
      difficulty: cfg.diff,
      figure: { kind: "symmetry", size: cfg.size, cells, result: mirrorCells(cells, cfg.size) },
    });
  }
  return shuffle(r, out);
}

// ---------- うえ・よこから みる ----------

const KIND_NAME: Record<SolidKind, string> = {
  cyl: "つつ（えんちゅう）",
  cube: "さいころ（りっぽうたい）",
  sphere: "ボール（きゅう）",
  cone: "とんがりぼうし（えんすい）",
};

function validLayers(ls: Layer[]): boolean {
  for (let i = 0; i < ls.length; i++) {
    const l = ls[i];
    if (l.kind === "cube" && l.w > 2) return false;
    if ((l.kind === "sphere" || l.kind === "cone") && i !== ls.length - 1) return false;
    if (i > 0 && l.w > ls[i - 1].w) return false;
    if (i > 0 && l.color === ls[i - 1].color) return false;
    // さいころを つつの上に のせるとき、かどが つつから はみださないこと
    if (i > 0 && l.kind === "cube" && ls[i - 1].kind !== "cube" && layerWidth(l.w) * 1.42 > layerWidth(ls[i - 1].w)) return false;
  }
  return true;
}

const isCircleTop = (k: SolidKind) => k !== "cube";

/** うえから見て、ほかの層にかくれて見えない層をのぞいた「見た目の特徴」 */
function topSig(ls: Layer[]): string {
  const vis: string[] = [];
  for (let i = ls.length - 1; i >= 0; i--) {
    const a = ls[i];
    let hidden = false;
    for (let j = i + 1; j < ls.length; j++) {
      const b = ls[j];
      const sameClass = isCircleTop(a.kind) === isCircleTop(b.kind);
      if (sameClass && b.w >= a.w) hidden = true;
      if (!isCircleTop(a.kind) && isCircleTop(b.kind) && b.w > a.w + 1) hidden = true;
    }
    if (!hidden) vis.push(`${a.kind === "cone" ? "cone" : isCircleTop(a.kind) ? "c" : "s"}${a.w}${a.color}`);
  }
  return vis.join("/");
}
function sideSig(ls: Layer[]): string {
  return ls.map((l) => `${l.kind === "cyl" || l.kind === "cube" ? "rect" : l.kind}${l.w}${l.color}`).join("/");
}

function randomLayers(r: Rng, n: number, side: boolean): Layer[] {
  for (let t = 0; t < 200; t++) {
    const colors = shuffle(r, SOLID_COLORS);
    const ls: Layer[] = [];
    let w: 1 | 2 | 3 = pick(r, n === 1 ? [1, 2, 3] : n === 2 ? [2, 3] : [3, 3, 2]) as 1 | 2 | 3;
    for (let i = 0; i < n; i++) {
      const top = i === n - 1;
      const kinds: SolidKind[] = top ? ["cyl", "cube", "sphere", "cone"] : ["cyl", "cube"];
      const kind = pick(r, kinds);
      ls.push({ kind, color: colors[i], w });
      if (i < n - 1) w = Math.max(1, w - (r() < 0.8 ? 1 : 0)) as 1 | 2 | 3;
    }
    if (!validLayers(ls)) continue;
    // よこから見る問題では、つつとさいころが ならぶと 見分けにくいので、ひとつにそろえる
    if (side && ls.some((l) => l.kind === "cube") && ls.some((l) => l.kind === "cyl")) continue;
    return ls;
  }
  return [{ kind: "cyl", color: SOLID_COLORS[0], w: 2 }];
}

function mutate(r: Rng, ls: Layer[], side: boolean): Layer[] | null {
  const next = ls.map((l) => ({ ...l }));
  const op = pick(r, ["color", "color", "kind", "width", "swap"]);
  const i = Math.floor(r() * next.length);
  if (op === "color") {
    next[i].color = pick(r, SOLID_COLORS.filter((c) => c !== next[i].color));
  } else if (op === "kind") {
    const top = i === next.length - 1;
    const pool: SolidKind[] = side
      ? top
        ? ["sphere", "cone", next[i].kind === "cube" ? "cube" : "cyl"]
        : [next[i].kind]
      : top
      ? ["cyl", "cube", "cone", "sphere"]
      : ["cyl", "cube"];
    const k = pick(r, pool.filter((p) => p !== next[i].kind));
    if (!k) return null;
    next[i].kind = k;
  } else if (op === "width") {
    next[i].w = pick(r, ([1, 2, 3] as (1 | 2 | 3)[]).filter((w) => w !== next[i].w));
  } else if (next.length >= 2) {
    const a = next[0].color;
    next[0].color = next[next.length - 1].color;
    next[next.length - 1].color = a;
  } else return null;
  return validLayers(next) ? next : null;
}

export function generateMikata(age: Age): FigureQ[] {
  const r = makeRng(9000 + age);
  const out: FigureQ[] = [];
  const seen = new Set<string>();
  const cfg =
    age === 4
      ? { layers: [1, 1, 2], sideRate: 0, choices: 3, target: 90, diff: 1 }
      : age === 5
      ? { layers: [2, 2, 3], sideRate: 0.3, choices: 3, target: 140, diff: 2 }
      : { layers: [2, 3, 3], sideRate: 0.5, choices: 4, target: 200, diff: 3 };

  let guard = 0;
  while (out.length < cfg.target && guard++ < 30000) {
    const side = r() < cfg.sideRate;
    const layers = randomLayers(r, pick(r, cfg.layers), side);
    const sig = (side ? sideSig : topSig)(layers);
    const key = (side ? "S" : "T") + layers.map((l) => `${l.kind}${l.w}${l.color}`).join("/");
    if (seen.has(key)) continue;

    const sigs = new Set([sig]);
    const distract: Layer[][] = [];
    for (let t = 0; t < 60 && distract.length < cfg.choices - 1; t++) {
      const m = mutate(r, layers, side);
      if (!m) continue;
      const sg = (side ? sideSig : topSig)(m);
      if (sigs.has(sg)) continue;
      sigs.add(sg);
      distract.push(m);
    }
    if (distract.length < cfg.choices - 1) continue;
    seen.add(key);

    const all = shuffle(r, [layers, ...distract]);
    const correct = all.indexOf(layers);
    const topKind = layers[layers.length - 1].kind;
    const word = side
      ? topKind === "sphere"
        ? "まる"
        : topKind === "cone"
        ? "さんかく"
        : "しかく"
      : isCircleTop(topKind)
      ? "まる"
      : "しかく";
    out.push({
      genre: GENRE_LABEL.mikata,
      question: `${side ? "よこ" : "うえ"}から みると、どんな かたちに みえるかな？ こたえの ばんごうを □に かこう。`,
      answer: CIRCLED[correct],
      explanation: side
        ? `よこから みると、いちばん うえの ${KIND_NAME[topKind]}は「${word}」に みえるよ。したから じゅんに みてみよう。`
        : `うえから みると、いちばん うえの ${KIND_NAME[topKind]}は「${word}」に みえるよ。したに ある おおきな ものは、まわりに はみだして みえるよ。`,
      difficulty: cfg.diff + (side ? 0.5 : 0),
      figure: { kind: "solid-view", view: side ? "side" : "top", layers, choices: all, correct },
    });
  }
  return shuffle(r, out);
}

// ---------- けいようし（ぴったりことば） ----------

const TRACE_Q =
  "えと おはなしを みて、ぴったりの ことばを えらんで かこう。うすい もじは うえから なぞろう。";

export function generateKeiyoushi(age: Age): FigureQ[] {
  const r = makeRng(10000 + age);
  const lv = age === 4 ? [1] : age === 5 ? [1, 2] : [2, 3];
  const diff = age === 4 ? 1 : age === 5 ? 2 : 3;

  // そのとしで出す ことば（ぎゃくの候補にも この中から えらぶ）
  const levelOf: Record<string, number> = {};
  for (const [a, b, l] of PAIR_DEFS) {
    levelOf[a] = Math.min(levelOf[a] ?? 9, l);
    levelOf[b] = Math.min(levelOf[b] ?? 9, l);
  }
  for (const [w, l] of SINGLE_DEFS) levelOf[w] = Math.min(levelOf[w] ?? 9, l);
  const allowed = Object.values(WORDS).filter((w) => lv.includes(levelOf[w.w]));

  const pickDistractors = (answers: WordDef[], n: number): string[] => {
    if (n <= 0) return [];
    const names = new Set(answers.map((a) => a.w));
    const sameGroup = shuffle(r, allowed.filter((w) => !names.has(w.w) && w.g === answers[0].g));
    const others = shuffle(r, allowed.filter((w) => !names.has(w.w) && w.g !== answers[0].g));
    return [...sameGroup, ...others].slice(0, n).map((w) => w.w);
  };

  const mk = (items: WordDef[], extra: number, difficulty: number): FigureQ => {
    const bank = shuffle(r, [...items.map((i) => i.w), ...pickDistractors(items, extra)]);
    return {
      genre: GENRE_LABEL.keiyoushi,
      question: TRACE_Q,
      answer: items.map((i) => i.w).join("・"),
      explanation: items.map((i) => `${i.w}：${i.h}。`).join(" "),
      difficulty,
      figure: {
        kind: "trace",
        bank,
        items: items.map((i) => ({ emojis: i.e, word: i.w, scene: i.s })),
      },
    };
  };

  const out: FigureQ[] = [];
  // はんたいことばの2まい組：4歳はことばを えらぶだけ（きまった 2つ）、5・6歳は まぎらわしい ことばも ならべる
  for (const [a, b, l] of PAIR_DEFS) {
    if (!lv.includes(l)) continue;
    out.push(mk([WORDS[a], WORDS[b]], age === 4 ? 0 : 1, diff));
  }
  // ひとつだけの絵：えらびしゃ（4歳は2つ、5歳は3つ、6歳は4つ）
  const singles = SINGLE_DEFS.filter(([, l]) => lv.includes(l)).map(([w]) => WORDS[w]);
  for (const w of singles) out.push(mk([w], age === 4 ? 1 : age === 5 ? 2 : 3, diff - 0.2));
  // ことなる2つの組み合わせ（かさならない ことばだけ）
  for (let round = 0; round < 3; round++) {
    const sh = shuffle(r, singles);
    for (let i = 0; i + 1 < sh.length; i += 2) out.push(mk([sh[i], sh[i + 1]], age === 4 ? 0 : age === 5 ? 1 : 2, diff + 0.2));
  }

  const seen = new Set<string>();
  const uniq = out.filter((q) => {
    const key = q.answer.split("・").sort().join("|");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return shuffle(r, uniq);
}
