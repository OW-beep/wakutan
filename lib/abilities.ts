import { useSyncExternalStore } from "react";

/**
 * 「のうりょくステータス」機能。
 * ユーザー登録なし・ブラウザのlocalStorageだけで、問題を解くほど6つの能力値が育っていく。
 */

export type StatKey = "kazu" | "kotoba" | "ronri" | "kuukan" | "kioku" | "shuuchuu";

export const STAT_ORDER: StatKey[] = ["kazu", "kotoba", "ronri", "kuukan", "kioku", "shuuchuu"];

export const STAT_LABEL: Record<StatKey, string> = {
  kazu: "かずの力",
  kotoba: "ことばの力",
  ronri: "ろんりの力",
  kuukan: "くうかんの力",
  kioku: "きおくの力",
  shuuchuu: "しゅうちゅう力",
};

export const STAT_COLOR: Record<StatKey, string> = {
  kazu: "#f97316",
  kotoba: "#22c55e",
  ronri: "#3b82f6",
  kuukan: "#a855f7",
  kioku: "#ec4899",
  shuuchuu: "#eab308",
};

/** ジャンルごとに、主にどの能力が育つか（しゅうちゅう力だけは全ジャンル共通で少しずつ育つ） */
export const GENRE_STAT: Record<string, Exclude<StatKey, "shuuchuu">> = {
  sansu: "kazu",
  kurabekko: "kazu",
  okane: "kazu",
  tokei: "kazu",
  hiragana: "kotoba",
  moji: "kotoba",
  ronri: "ronri",
  suiri: "ronri",
  nakamawake: "ronri",
  nakamahazure: "ronri",
  tsumiki: "kuukan",
  onajikatachi: "kuukan",
  pattern: "kuukan",
  kokki: "kioku",
  nazonazo: "kioku",
  kaiten: "kuukan",
  sentaisho: "kuukan",
  mikata: "kuukan",
  keiyoushi: "kotoba",
};

/**
 * 問題データの genre は「🧊 つみき」「パターン」のような表示用ラベルなので、
 * GENRE_STAT のキー（tsumiki など）とそのままでは一致せず、のうりょくが
 * 育たなかった。ラベル（先頭の絵文字をのぞいた文字）からも引けるようにする。
 */
const LABEL_STAT: Record<string, Exclude<StatKey, "shuuchuu">> = {
  さんすう: "kazu",
  くらべっこ: "kazu",
  おかね: "kazu",
  とけい: "kazu",
  ひらがな: "kotoba",
  ことば: "kotoba",
  もじのよみとき: "kotoba",
  ぴったりことば: "kotoba",
  ますけいさん: "kazu",
  ろんり: "ronri",
  すいり: "ronri",
  なかまわけ: "ronri",
  なかまはずれ: "ronri",
  つみき: "kuukan",
  おなじかたち: "kuukan",
  パターン: "kuukan",
  くるくるパズル: "kuukan",
  かがみうつし: "kuukan",
  "どこからみる？": "kuukan",
  こっき: "kioku",
  なぞなぞ: "kioku",
};

function statForGenre(genre: string): Exclude<StatKey, "shuuchuu"> | undefined {
  if (GENRE_STAT[genre]) return GENRE_STAT[genre];
  const label = genre.replace(/^[^\p{L}\p{N}]+/u, "").trim();
  return LABEL_STAT[label];
}

const STATS_KEY = "wakutan:ability-stats";
const TOTAL_CORRECT_KEY = "wakutan:total-correct";
const MAX_STAT = 100;
const GAIN_PRIMARY_CORRECT = 3;
const GAIN_PRIMARY_RETRY = 1;
const GAIN_FOCUS_CORRECT = 1;

type Stats = Record<StatKey, number>;

const EMPTY_STATS: Stats = { kazu: 0, kotoba: 0, ronri: 0, kuukan: 0, kioku: 0, shuuchuu: 0 };

type Listener = () => void;
const listeners = new Set<Listener>();
function notify() {
  listeners.forEach((l) => l());
}
function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readStats(): Stats {
  if (typeof window === "undefined") return EMPTY_STATS;
  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    if (!raw) return EMPTY_STATS;
    const parsed = JSON.parse(raw);
    return { ...EMPTY_STATS, ...parsed };
  } catch {
    return EMPTY_STATS;
  }
}

function readTotalCorrect(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(TOTAL_CORRECT_KEY);
    return raw ? Number(raw) || 0 : 0;
  } catch {
    return 0;
  }
}

let statsCache: Stats = readStats();
let totalCorrectCache: number = readTotalCorrect();

function writeStats(stats: Stats) {
  statsCache = stats;
  try {
    window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // 容量オーバーやプライベートモードなどで失敗しても致命的ではないので握りつぶす
  }
  notify();
}

function writeTotalCorrect(n: number) {
  totalCorrectCache = n;
  try {
    window.localStorage.setItem(TOTAL_CORRECT_KEY, String(n));
  } catch {
    // 失敗しても致命的ではないので握りつぶす
  }
  notify();
}

/** 問題に答えた結果を記録する。correct=trueなら該当ジャンルの能力値としゅうちゅう力が、falseでも少しだけ能力値が育つ */
export function recordAnswer(genre: string, correct: boolean) {
  const primary = statForGenre(genre);
  const stats = readStats();
  const next = { ...stats };

  if (primary) {
    const gain = correct ? GAIN_PRIMARY_CORRECT : GAIN_PRIMARY_RETRY;
    next[primary] = Math.min(MAX_STAT, next[primary] + gain);
  }
  if (correct) {
    next.shuuchuu = Math.min(MAX_STAT, next.shuuchuu + GAIN_FOCUS_CORRECT);
    writeTotalCorrect(readTotalCorrect() + 1);
  }

  writeStats(next);
}

function getStatsSnapshot(): Stats {
  return statsCache;
}
function getStatsServerSnapshot(): Stats {
  return EMPTY_STATS;
}

export function useAbilityStats(): Stats {
  return useSyncExternalStore(subscribe, getStatsSnapshot, getStatsServerSnapshot);
}

function getTotalCorrectSnapshot(): number {
  return totalCorrectCache;
}
function getTotalCorrectServerSnapshot(): number {
  return 0;
}

export function useTotalCorrect(): number {
  return useSyncExternalStore(subscribe, getTotalCorrectSnapshot, getTotalCorrectServerSnapshot);
}

/** すごろく風の「たんけんマップ」のステージ定義。正解5問ごとに1マス進む */
export const CORRECT_PER_STAGE = 5;

export const STAGES: { name: string; emoji: string }[] = [
  { name: "スタート", emoji: "🏠" },
  { name: "みち", emoji: "🌱" },
  { name: "もり", emoji: "🌳" },
  { name: "かわ", emoji: "🏞️" },
  { name: "はし", emoji: "🌉" },
  { name: "どうくつ", emoji: "🕳️" },
  { name: "やま", emoji: "⛰️" },
  { name: "たき", emoji: "💦" },
  { name: "さばく", emoji: "🏜️" },
  { name: "オアシス", emoji: "🌴" },
  { name: "うみ", emoji: "🌊" },
  { name: "とう", emoji: "🏝️" },
  { name: "しろ", emoji: "🏰" },
  { name: "そら", emoji: "☁️" },
  { name: "ほしぞら", emoji: "🌠" },
  { name: "ゴール", emoji: "🏆" },
];

export function getStageIndex(totalCorrect: number): number {
  return Math.min(STAGES.length - 1, Math.floor(totalCorrect / CORRECT_PER_STAGE));
}
