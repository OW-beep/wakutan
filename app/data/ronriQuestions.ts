/**
 * ろんり（きまり・じゅんばんを考える）問題を機械的に生成するヘルパー。
 */

export type SimpleQuestion = {
  question: string;
  answer: string;
  explanation: string;
};

function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

// 「1 → 3 → 5 → □」のような、決まった数ずつ増える（へる）数列問題
export function generateNumberSequenceQuestions(
  starts: number[],
  steps: number[]
): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const start of starts) {
    for (const step of steps) {
      const a = start;
      const b = start + step;
      const c = start + step * 2;
      const answer = start + step * 3;
      if (b < 0 || c < 0 || answer < 0) continue; // マイナスの数は出さない
      const explanation = step >= 0
        ? `${step}ずつ ふえているよ。`
        : `${-step}ずつ へっているよ。`;
      qs.push({
        question: `【ならび】${a} → ${b} → ${c} → □`,
        answer: `${answer}`,
        explanation,
      });
    }
  }
  return qs;
}

// 「2 → 4 → 8 → □」のような、2倍ずつ増える数列問題
export function generateDoublingQuestions(starts: number[]): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const start of starts) {
    if (start <= 0) continue;
    const a = start;
    const b = start * 2;
    const c = start * 4;
    const answer = start * 8;
    if (answer > 500) continue; // 大きくなりすぎる組み合わせは除く
    qs.push({
      question: `【ならび】${a} → ${b} → ${c} → □`,
      answer: `${answer}`,
      explanation: "まえの かずを 2ばいすると つぎの かずに なるよ。",
    });
  }
  return qs;
}

// 交互に繰り返す2つの言葉のペア（あか/あお、など）
const ALTERNATING_PAIRS: [string, string][] = [
  ["あか", "あお"],
  ["おおきい", "ちいさい"],
  ["たかい", "ひくい"],
  ["うえ", "した"],
  ["ながい", "みじかい"],
  ["おもい", "かるい"],
  ["あける", "しめる"],
  ["まる", "さんかく"],
  ["きいろ", "みどり"],
  ["はやい", "おそい"],
  ["あつい", "つめたい"],
  ["ひろい", "せまい"],
  ["ふとい", "ほそい"],
  ["あかるい", "くらい"],
  ["やわらかい", "かたい"],
  ["みぎ", "ひだり"],
  ["まえ", "うしろ"],
  ["あさ", "よる"],
  ["おとこ", "おんな"],
  ["おおい", "すくない"],
  ["ふかい", "あさい"],
  ["あたらしい", "ふるい"],
  ["ちかい", "とおい"],
  ["つよい", "よわい"],
  ["はれ", "あめ"],
  ["いぬ", "ねこ"],
  ["さくら", "うめ"],
  ["でんしゃ", "バス"],
  ["すし", "ラーメン"],
  ["なつ", "ふゆ"],
  ["おきる", "ねる"],
  ["わらう", "なく"],
  ["すすむ", "もどる"],
  ["のぼる", "おりる"],
  ["いれる", "だす"],
  ["つける", "けす"],
  ["あつまる", "ちらばる"],
  ["さく", "ちる"],
  ["はじまる", "おわる"],
  ["かつ", "まける"],
];

// 「A → B → A → □」のような、2つの言葉が交互にくる問題
export function generateAlternatingQuestions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const [a, b] of ALTERNATING_PAIRS) {
    qs.push({
      question: `【きまり】${a} → ${b} → ${a} → □`,
      answer: b,
      explanation: `${a}と${b}が こうごに ならんでいるよ。`,
    });
    qs.push({
      question: `【きまり】${b} → ${a} → ${b} → □`,
      answer: a,
      explanation: `${a}と${b}が こうごに ならんでいるよ。`,
    });
  }
  return qs;
}

// 3つの言葉がくりかえす問題（あか→あお→きいろ→あか→あお→□ のような）
const CYCLE3_SETS: [string, string, string][] = [
  ["あか", "あお", "きいろ"],
  ["まる", "さんかく", "しかく"],
  ["いぬ", "ねこ", "とり"],
  ["りんご", "ばなな", "みかん"],
  ["はる", "なつ", "あき"],
  ["あさ", "ひる", "よる"],
  ["ちいさい", "ちゅうくらい", "おおきい"],
  ["いち", "に", "さん"],
  ["うえ", "なか", "した"],
  ["みぎ", "まんなか", "ひだり"],
  ["パン", "ごはん", "めん"],
  ["でんしゃ", "くるま", "ひこうき"],
  ["あか", "きいろ", "みどり"],
  ["すな", "みず", "き"],
  ["はな", "は", "くき"],
];

export function generateCycle3Questions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const [a, b, c] of CYCLE3_SETS) {
    qs.push({
      question: `【じゅんばん】${a} → ${b} → ${c} → ${a} → □`,
      answer: b,
      explanation: `${a}・${b}・${c}の じゅんばんが くりかえすよ。`,
    });
    qs.push({
      question: `【じゅんばん】${b} → ${c} → ${a} → ${b} → □`,
      answer: c,
      explanation: `${a}・${b}・${c}の じゅんばんが くりかえすよ。`,
    });
  }
  return qs;
}
