/**
 * もじの読み解き（文章題）問題を機械的に生成するヘルパー。
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

const NAMES = [
  "たろう", "はなこ", "けん", "みき", "ゆうた", "さくら", "だいち", "みずき",
  "こうた", "ゆい", "そうた", "あおい", "りく", "のぞみ", "はると", "ひなた",
  "ゆうき", "まさき", "さき", "あきら",
];

const ITEMS_COUNTED = [
  { item: "りんご", counter: "こ" }, { item: "みかん", counter: "こ" },
  { item: "あめ", counter: "こ" }, { item: "ほん", counter: "さつ" },
  { item: "えんぴつ", counter: "ほん" }, { item: "おりがみ", counter: "まい" },
  { item: "シール", counter: "まい" }, { item: "はな", counter: "ほん" },
];

// 事実確認型（文の中に答えがそのまま書いてある）
const FACT_TEMPLATES: { attr: string; values: string[] }[] = [
  { attr: "いぬのなまえ", values: ["ぽち", "しろ", "こむぎ", "まる", "そら"] },
  { attr: "ぼうしのいろ", values: ["あかい", "あおい", "きいろい", "みどりの", "しろい"] },
  { attr: "すきなどうぶつ", values: ["ぞう", "きりん", "ぱんだ", "うさぎ", "ねこ"] },
  { attr: "すきないろ", values: ["みどり", "あお", "きいろ", "ピンク", "オレンジ"] },
  { attr: "おきるじかん", values: ["6じ", "7じ", "7じはん", "8じ"] },
];

/**
 * 「{name}さんの{attr}は{value}です。{name}さんの{attr}は？」のような、
 * 文の中に答えがそのまま書いてある読み取り問題。
 */
export function generateFactLookupQuestions(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const name = NAMES[Math.floor(rand() * NAMES.length)];
    const tpl = FACT_TEMPLATES[Math.floor(rand() * FACT_TEMPLATES.length)];
    const value = tpl.values[Math.floor(rand() * tpl.values.length)];
    const honorific = rand() > 0.5 ? "くん" : "さん";

    qs.push({
      question: `${name}${honorific}の ${tpl.attr}は ${value}です。${name}${honorific}の ${tpl.attr}は？`,
      answer: value,
      explanation: `ぶんのなかに「${tpl.attr}は ${value}」と かいてあるよ。`,
    });
  }

  return qs;
}

/**
 * 「{name}くんは{item}を{a}こ、{item2}を{b}こもっています。あわせてなんこ？」のような、
 * 1段階のたしざん・ひきざん文章題（5歳向け）。
 */
export function generateSimpleWordProblems(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const name = NAMES[Math.floor(rand() * NAMES.length)];
    const honorific = rand() > 0.5 ? "くん" : "さん";
    const isAdd = rand() > 0.4;
    const it = ITEMS_COUNTED[Math.floor(rand() * ITEMS_COUNTED.length)];

    if (isAdd) {
      const it2 = ITEMS_COUNTED[Math.floor(rand() * ITEMS_COUNTED.length)];
      const a = 1 + Math.floor(rand() * 8);
      const b = 1 + Math.floor(rand() * 8);
      const total = a + b;
      qs.push({
        question: `${name}${honorific}は ${it.item}を ${a}${it.counter}、${it2.item}を ${b}${it2.counter} もっています。あわせて なんこ？`,
        answer: `${total}こ`,
        explanation: `${a}こと ${b}こを あわせると ${total}こだよ。`,
      });
    } else {
      const start = 3 + Math.floor(rand() * 10);
      const used = 1 + Math.floor(rand() * (start - 1));
      const remain = start - used;
      qs.push({
        question: `${name}${honorific}は ${it.item}を ${start}${it.counter} もっていました。${used}${it.counter} つかいました。のこりは なん${it.counter}？`,
        answer: `${remain}${it.counter}`,
        explanation: `${start}-${used}=${remain}${it.counter} のこるよ。`,
      });
    }
  }

  return qs;
}

/**
 * 「{name}くんは{item}を{start}こもっていました。{event1}、{event2}。いま、なにこもっている？」のような、
 * 2段階のたしざん・ひきざんが必要な文章題（6歳向け）。
 */
export function generateTwoStepWordProblems(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const name = NAMES[Math.floor(rand() * NAMES.length)];
    const honorific = rand() > 0.5 ? "くん" : "さん";
    const it = ITEMS_COUNTED[Math.floor(rand() * ITEMS_COUNTED.length)];
    const start = 5 + Math.floor(rand() * 10);

    // 2つのできごと：それぞれ +N か -N（残高がマイナスにならないように調整）
    let current = start;
    const events: string[] = [];
    let ops = "";

    for (let step = 0; step < 2; step++) {
      const wantsAdd = current < 5 ? true : rand() > 0.5;
      if (wantsAdd) {
        const n = 1 + Math.floor(rand() * 6);
        current += n;
        events.push(`ともだちから ${n}${it.counter} もらいました`);
        ops += `+${n}`;
      } else {
        const n = 1 + Math.floor(rand() * Math.min(5, current - 1));
        current -= n;
        events.push(`${n}${it.counter} つかいました`);
        ops += `-${n}`;
      }
    }

    qs.push({
      question: `${name}${honorific}は ${it.item}を ${start}${it.counter} もっていました。${events[0]}、${events[1]}。いま、なん${it.counter} もっている？`,
      answer: `${current}${it.counter}`,
      explanation: `${start}${ops}=${current}${it.counter}です。2だんかいでけいさんします。`,
    });
  }

  return qs;
}
