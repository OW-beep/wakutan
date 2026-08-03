/**
 * くらべっこ（数量・大きさの比較）問題を機械的に生成するヘルパー。
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

const ITEMS: { label: string; counter: string }[] = [
  { label: "🍎りんご", counter: "こ" },
  { label: "🍊みかん", counter: "こ" },
  { label: "🎈ふうせん", counter: "こ" },
  { label: "🍭あめ", counter: "こ" },
  { label: "🍩ドーナツ", counter: "こ" },
  { label: "📚ほん", counter: "さつ" },
  { label: "🍫チョコ", counter: "こ" },
  { label: "🎂ケーキ", counter: "こ" },
  { label: "🍓いちご", counter: "こ" },
  { label: "🎁プレゼント", counter: "こ" },
  { label: "✏️えんぴつ", counter: "ほん" },
  { label: "🐟さかな", counter: "ひき" },
  { label: "🌸はな", counter: "ほん" },
  { label: "🎨えのぐ", counter: "いろ" },
  { label: "🚗くるま", counter: "だい" },
];

/**
 * 「🍎りんご 3こ と 🍎りんご 7こ、どちらが おおい？」のような、
 * 同じ品物どうしの数くらべ問題を生成する（たしざん・ひきざん不要）。
 */
export function generateQuantityCompareQuestions(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const item = ITEMS[Math.floor(rand() * ITEMS.length)];
    let a = 1 + Math.floor(rand() * 9);
    let b = 1 + Math.floor(rand() * 9);
    if (a === b) b = a === 9 ? a - 1 : a + 1;

    const askMore = rand() > 0.5;
    const bigger = a > b ? a : b;
    const smaller = a > b ? b : a;
    const answer = askMore ? `${bigger}${item.counter}` : `${smaller}${item.counter}`;

    qs.push({
      question: `${item.label} ${a}${item.counter} と ${item.label} ${b}${item.counter}、どちらが ${askMore ? "おおい" : "すくない"}？`,
      answer,
      explanation: `${smaller}${item.counter}より ${bigger}${item.counter}の ほうが おおいよ。`,
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
    if (item2.label === item1.label) item2 = ITEMS[(ITEMS.indexOf(item1) + 1) % ITEMS.length];

    let a = 3 + Math.floor(rand() * 15);
    let b = 3 + Math.floor(rand() * 15);
    if (a === b) b = a + 2;
    const diff = Math.abs(a - b);

    qs.push({
      question: `${item1.label}が ${a}${item1.counter}、${item2.label}が ${b}${item2.counter}。いくつ ちがう？`,
      answer: `${diff}${item1.counter}`,
      explanation: `${Math.max(a, b)}-${Math.min(a, b)}=${diff}${item1.counter}だよ。`,
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
      question: `${item.label} ${n}${item.counter} と ${item.label} ${n}${item.counter}、どちらが おおい？`,
      answer: "おなじ",
      explanation: `どちらも ${n}${item.counter}で おなじ かずだよ。`,
    });
  }
  return qs;
}
