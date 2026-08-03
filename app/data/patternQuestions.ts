/**
 * パターン（見た目の くりかえし）問題を機械的に生成するヘルパー。
 * 「○ △ ○ △ □」のような、記号・数字・ことばの交互パターンを作る。
 */

export type SimpleQuestion = {
  question: string;
  answer: string;
  explanation: string;
};

const SYMBOL_PAIRS: [string, string, string][] = [
  ["○", "△", "○と △"],
  ["★", "♥", "★と ♥"],
  ["●", "▲", "●と ▲"],
  ["■", "□", "■と □"],
  ["◆", "◇", "◆と ◇"],
  ["♪", "♭", "♪と ♭"],
  ["☀", "☁", "☀と ☁"],
  ["♠", "♣", "♠と ♣"],
  ["◯", "✕", "◯と ✕"],
  ["▼", "▽", "▼と ▽"],
  ["♦", "♧", "♦と ♧"],
  ["☆", "♡", "☆と ♡"],
];

const WORD_PAIRS: [string, string][] = [
  ["あ", "い"], ["う", "え"], ["お", "か"], ["き", "く"], ["け", "こ"],
  ["さ", "し"], ["す", "せ"], ["そ", "た"], ["ち", "つ"], ["て", "と"],
  ["な", "に"], ["ぬ", "ね"], ["の", "は"], ["ひ", "ふ"], ["へ", "ほ"],
  ["ま", "み"], ["む", "め"], ["も", "や"], ["ゆ", "よ"], ["ら", "り"],
  ["る", "れ"], ["ろ", "わ"],
  ["い", "う"], ["え", "お"], ["か", "き"], ["く", "け"], ["こ", "さ"],
  ["し", "す"], ["せ", "そ"], ["た", "ち"], ["つ", "て"], ["と", "な"],
  ["あか", "あお"], ["きいろ", "みどり"], ["おお", "ちい"],
  ["いぬ", "ねこ"], ["さかな", "とり"], ["うえ", "した"], ["みぎ", "ひだり"],
  ["すき", "きらい"], ["おおい", "すくない"], ["は", "な"],
  ["さんかく", "まる"], ["ちょう", "はな"], ["き", "みず"], ["やま", "うみ"],
  ["あさ", "よる"], ["はれ", "あめ"], ["なつ", "ふゆ"], ["はる", "あき"],
  ["おとこ", "おんな"], ["ちち", "はは"], ["あに", "いもうと"],
  ["でんしゃ", "バス"], ["すし", "ラーメン"], ["ぞう", "うさぎ"],
  ["つよい", "よわい"], ["あつい", "つめたい"], ["ながい", "みじかい"],
];

const NUMBER_PAIRS: [number, number][] = [
  [1, 2], [1, 3], [2, 4], [3, 5], [6, 7], [2, 3], [4, 5], [1, 4], [2, 5], [3, 6],
  [4, 6], [5, 7], [1, 5], [2, 6], [3, 7], [1, 6], [1, 7], [2, 7], [4, 7], [5, 6],
  [7, 8], [8, 9], [1, 9], [3, 9], [2, 9],
];

// シンプルな決定的疑似乱数
function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

// 「A B A B □」の2つ交互パターン
export function generateAlternatingPatternQuestions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];

  for (const [a, b, label] of SYMBOL_PAIRS) {
    qs.push({ question: `${a} ${b} ${a} ${b} □`, answer: a, explanation: `${label}が こうごに ならんでいるよ。` });
    qs.push({ question: `${b} ${a} ${b} ${a} □`, answer: b, explanation: `${label}が こうごに ならんでいるよ。` });
  }

  for (const [a, b] of WORD_PAIRS) {
    qs.push({ question: `${a} ${b} ${a} ${b} □`, answer: a, explanation: `「${a}」と「${b}」が こうごに ならんでいるよ。` });
    qs.push({ question: `${b} ${a} ${b} ${a} □`, answer: b, explanation: `「${a}」と「${b}」が こうごに ならんでいるよ。` });
  }

  for (const [a, b] of NUMBER_PAIRS) {
    qs.push({ question: `${a} ${b} ${a} ${b} □`, answer: `${a}`, explanation: `${a}と ${b}が こうごに ならんでいるよ。` });
    qs.push({ question: `${b} ${a} ${b} ${a} □`, answer: `${b}`, explanation: `${a}と ${b}が こうごに ならんでいるよ。` });
  }

  return qs;
}

// 「A B C A B □」のような3つくりかえしパターン
const TRIPLE_SETS: [string, string, string][] = [
  ["○", "△", "□"],
  ["あ", "い", "う"],
  ["あか", "あお", "きいろ"],
  ["1", "2", "3"],
  ["★", "♥", "♪"],
  ["まる", "さんかく", "しかく"],
  ["いぬ", "ねこ", "とり"],
  ["りんご", "ばなな", "みかん"],
  ["え", "お", "か"],
  ["4", "5", "6"],
];

export function generateTriplePatternQuestions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const [a, b, c] of TRIPLE_SETS) {
    qs.push({
      question: `${a} ${b} ${c} ${a} ${b} □`,
      answer: c,
      explanation: `${a}・${b}・${c}の じゅんばんが くりかえしているよ。`,
    });
    qs.push({
      question: `${b} ${c} ${a} ${b} ${c} □`,
      answer: a,
      explanation: `${a}・${b}・${c}の じゅんばんが くりかえしているよ。`,
    });
  }
  return qs;
}

// 数字が4つ見えてから□にはいる、すこしむずかしいバージョン（6歳向け）
export function generateNumberSequenceQuestions4(
  starts: number[],
  steps: number[]
): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const start of starts) {
    for (const step of steps) {
      const a = start, b = start + step, c = start + step * 2, d = start + step * 3;
      const answer = start + step * 4;
      if (b < 0 || c < 0 || d < 0 || answer < 0) continue;
      const explanation = step >= 0 ? `${step}ずつ ふえています。` : `${-step}ずつ へっています。`;
      qs.push({ question: `${a} ${b} ${c} ${d} □`, answer: `${answer}`, explanation });
    }
  }
  return qs;
}

// 交互パターンが5つ見えてから□にはいる、すこしむずかしいバージョン（6歳向け）
export function generateAlternatingPattern5Questions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const [a, b, label] of SYMBOL_PAIRS) {
    qs.push({ question: `${a} ${b} ${a} ${b} ${a} □`, answer: b, explanation: `${label}が こうごに ならんでいます。` });
  }
  for (const [a, b] of WORD_PAIRS) {
    qs.push({ question: `${a} ${b} ${a} ${b} ${a} □`, answer: b, explanation: `「${a}」と「${b}」が こうごに ならんでいます。` });
  }
  return qs;
}
const QUAD_SETS: [string, string, string, string][] = [
  ["○", "△", "□", "◇"],
  ["あ", "い", "う", "え"],
  ["1", "2", "3", "4"],
  ["あか", "あお", "きいろ", "みどり"],
  ["はる", "なつ", "あき", "ふゆ"],
  ["いぬ", "ねこ", "とり", "うさぎ"],
  ["げつ", "か", "すい", "もく"],
  ["★", "♥", "♪", "☆"],
];

export function generateQuadPatternQuestions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const [a, b, c, d] of QUAD_SETS) {
    qs.push({
      question: `${a} ${b} ${c} ${d} ${a} ${b} □`,
      answer: c,
      explanation: `${a}・${b}・${c}・${d}の じゅんばんが くりかえしているよ。`,
    });
    qs.push({
      question: `${b} ${c} ${d} ${a} ${b} ${c} □`,
      answer: d,
      explanation: `${a}・${b}・${c}・${d}の じゅんばんが くりかえしているよ。`,
    });
  }
  return qs;
}
