/**
 * くらべっこ（数量・大きさの比較）問題を機械的に生成するヘルパー。
 */

export type SimpleQuestion = {
  question: string;
  answer: string;
  explanation: string;
  /** 1桁の数どうしを比べる問題用：絵文字を個数分ならべて縦に比較できるようにする行データ */
  compareRows?: { emoji: string; count: number; counter?: string; label?: string }[];
};

function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

const ITEMS: { emoji: string; word: string; counter: string }[] = [
  { emoji: "🍎", word: "りんご", counter: "こ" },
  { emoji: "🍊", word: "みかん", counter: "こ" },
  { emoji: "🎈", word: "ふうせん", counter: "こ" },
  { emoji: "🍭", word: "あめ", counter: "こ" },
  { emoji: "🍩", word: "ドーナツ", counter: "こ" },
  { emoji: "📚", word: "ほん", counter: "さつ" },
  { emoji: "🍫", word: "チョコ", counter: "こ" },
  { emoji: "🎂", word: "ケーキ", counter: "こ" },
  { emoji: "🍓", word: "いちご", counter: "こ" },
  { emoji: "🎁", word: "プレゼント", counter: "こ" },
  { emoji: "✏️", word: "えんぴつ", counter: "ほん" },
  { emoji: "🐟", word: "さかな", counter: "ひき" },
  { emoji: "🌸", word: "はな", counter: "ほん" },
  { emoji: "🎨", word: "えのぐ", counter: "いろ" },
  { emoji: "🚗", word: "くるま", counter: "だい" },
];

/** 1桁（9こ以下）のときだけ、絵文字を並べて縦にくらべられる行データをつくる */
function rowsIfSingleDigit(
  item1: { emoji: string; word: string; counter: string },
  a: number,
  item2: { emoji: string; word: string; counter: string },
  b: number
): { emoji: string; count: number; counter?: string; label?: string }[] | undefined {
  if (a > 9 || b > 9) return undefined;
  return [
    { emoji: item1.emoji, count: a, counter: item1.counter, label: item1.word },
    { emoji: item2.emoji, count: b, counter: item2.counter, label: item2.word },
  ];
}

/**
 * 「🍎りんご 3こ と 🍎りんご 7こ、どちらが おおい？」のような、
 * 同じ品物どうしの数くらべ問題を生成する（たしざん・ひきざん不要）。
 */
export function generateQuantityCompareQuestions(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const item = ITEMS[Math.floor(rand() * ITEMS.length)];
    const a = 1 + Math.floor(rand() * 9);
    let b = 1 + Math.floor(rand() * 9);
    if (a === b) b = a === 9 ? a - 1 : a + 1;

    const askMore = rand() > 0.5;
    const bigger = a > b ? a : b;
    const smaller = a > b ? b : a;
    const answer = askMore ? `${bigger}${item.counter}` : `${smaller}${item.counter}`;

    qs.push({
      question: `${item.emoji}${item.word} ${a}${item.counter} と ${item.emoji}${item.word} ${b}${item.counter}、どちらが ${askMore ? "おおい" : "すくない"}？`,
      answer,
      explanation: `${smaller}${item.counter}より ${bigger}${item.counter}の ほうが おおいよ。`,
      compareRows: rowsIfSingleDigit(item, a, item, b),
    });
  }

  return qs;
}

/**
 * 「🎈ふうせんが 8こ、🎁プレゼントが 5こ。いくつ ちがう？」のような、
 * 差を求める問題を生成する（ひきざんの練習になる）。
 */
export function generateDifferenceQuestions(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const item1 = ITEMS[Math.floor(rand() * ITEMS.length)];
    let item2 = ITEMS[Math.floor(rand() * ITEMS.length)];
    if (item2.word === item1.word) item2 = ITEMS[(ITEMS.indexOf(item1) + 1) % ITEMS.length];

    const a = 3 + Math.floor(rand() * 15);
    let b = 3 + Math.floor(rand() * 15);
    if (a === b) b = a + 2;
    const diff = Math.abs(a - b);

    qs.push({
      question: `${item1.emoji}${item1.word}が ${a}${item1.counter}、${item2.emoji}${item2.word}が ${b}${item2.counter}。いくつ ちがう？`,
      answer: `${diff}${item1.counter}`,
      explanation: `${Math.max(a, b)}-${Math.min(a, b)}=${diff}${item1.counter}だよ。`,
      compareRows: rowsIfSingleDigit(item1, a, item2, b),
    });
  }

  return qs;
}
export function generateSameQuantityQuestions(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const item = ITEMS[Math.floor(rand() * ITEMS.length)];
    const n = 1 + Math.floor(rand() * 9);
    qs.push({
      question: `${item.emoji}${item.word} ${n}${item.counter} と ${item.emoji}${item.word} ${n}${item.counter}、どちらが おおい？`,
      answer: "おなじ",
      explanation: `どちらも ${n}${item.counter}で おなじ かずだよ。`,
      compareRows: rowsIfSingleDigit(item, n, item, n),
    });
  }
  return qs;
}
