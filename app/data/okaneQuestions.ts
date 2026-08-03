/**
 * おかね問題を、金額の組み合わせから機械的に生成するためのヘルパー。
 * parseMoney がそのまま解釈できる言い回し（「◯円玉が ◯まい」「◯円の ◯◯」など）を使う。
 */

export type OkaneQuestion = {
  question: string;
  answer: string;
  explanation: string;
};

const REAL_COINS = [1, 5, 10, 50, 100, 500];

const ITEMS: { name: string; priceRange: [number, number] }[] = [
  { name: "あめ", priceRange: [10, 90] },
  { name: "ガム", priceRange: [10, 80] },
  { name: "おかし", priceRange: [50, 150] },
  { name: "ジュース", priceRange: [80, 180] },
  { name: "パン", priceRange: [80, 200] },
  { name: "えんぴつ", priceRange: [50, 120] },
  { name: "ノート", priceRange: [80, 150] },
  { name: "シール", priceRange: [30, 100] },
  { name: "おりがみ", priceRange: [50, 120] },
  { name: "みかん", priceRange: [30, 90] },
];

// シンプルな決定的疑似乱数（Math.randomは使わない。日替わり選出の仕組みと噛み合わないため）
function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

// キリのいい値段にそろえる（10円単位）
function roundPrice(v: number): number {
  return Math.max(10, Math.round(v / 10) * 10);
}

/**
 * 「◯円玉が◯まい」「◯円玉が◯まいと◯円玉が◯まい」のようなコイン合計問題を生成する。
 * たしざんのみ（ひきざんは含まない）なので、4・5・6歳どのページでも使える。
 */
export function generateCoinSumQuestions(seed: number, count: number): OkaneQuestion[] {
  const rand = seededRandom(seed);
  const qs: OkaneQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const useTwo = rand() > 0.4;
    const coin1 = REAL_COINS[Math.floor(rand() * REAL_COINS.length)];
    const count1 = 1 + Math.floor(rand() * 8);

    if (!useTwo) {
      const total = coin1 * count1;
      qs.push({
        question: `${coin1}円玉が ${count1}まい。あわせて いくら？`,
        answer: `${total}円`,
        explanation: `${coin1}円が ${count1}まいで ${total}円だよ。`,
      });
    } else {
      let coin2 = REAL_COINS[Math.floor(rand() * REAL_COINS.length)];
      if (coin2 === coin1) coin2 = REAL_COINS[(REAL_COINS.indexOf(coin1) + 1) % REAL_COINS.length];
      const count2 = 1 + Math.floor(rand() * 8);
      const total = coin1 * count1 + coin2 * count2;
      qs.push({
        question: `${coin1}円玉が ${count1}まいと ${coin2}円玉が ${count2}まい。あわせて いくら？`,
        answer: `${total}円`,
        explanation: `${coin1}円が${count1}まいと ${coin2}円が${count2}まいで ${total}円だよ。`,
      });
    }
  }

  return qs;
}

/**
 * 「◯円の◯◯と◯円の◯◯を かいます。あわせて いくら？」のような、
 * 品物2つのたしざん問題を生成する（たしざんのみ）。
 */
export function generateItemSumQuestions(seed: number, count: number): OkaneQuestion[] {
  const rand = seededRandom(seed);
  const qs: OkaneQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const item1 = ITEMS[Math.floor(rand() * ITEMS.length)];
    let item2 = ITEMS[Math.floor(rand() * ITEMS.length)];
    if (item2.name === item1.name) item2 = ITEMS[(ITEMS.indexOf(item1) + 1) % ITEMS.length];

    const price1 = roundPrice(item1.priceRange[0] + rand() * (item1.priceRange[1] - item1.priceRange[0]));
    const price2 = roundPrice(item2.priceRange[0] + rand() * (item2.priceRange[1] - item2.priceRange[0]));
    const total = price1 + price2;

    qs.push({
      question: `${price1}円の ${item1.name}と ${price2}円の ${item2.name}を かいます。あわせて いくら？`,
      answer: `${total}円`,
      explanation: `${price1}円と ${price2}円で ${total}円だよ。`,
    });
  }

  return qs;
}

/**
 * 「◯円の◯◯を かいます。◯円玉を だすと、おつりは いくら？」のような、
 * おつり（ひきざん）の問題を生成する。6歳のように、ひきざんをすでに学んでいる
 * 年齢のページでのみ使う。
 */
export function generateChangeQuestions(seed: number, count: number): OkaneQuestion[] {
  const rand = seededRandom(seed);
  const qs: OkaneQuestion[] = [];
  const paidOptions = [100, 500, 1000];

  for (let i = 0; i < count; i++) {
    const item = ITEMS[Math.floor(rand() * ITEMS.length)];
    const price = roundPrice(item.priceRange[0] + rand() * (item.priceRange[1] - item.priceRange[0]));
    const candidates = paidOptions.filter(p => p > price);
    const paid = candidates.length > 0 ? candidates[Math.floor(rand() * candidates.length)] : price + 100;
    const change = paid - price;

    const paidLabel = paid >= 1000 ? `${paid}円さつ` : `${paid}円玉`;
    qs.push({
      question: `${price}円の ${item.name}を かいます。${paidLabel}を だすと、おつりは いくら？`,
      answer: `${change}円`,
      explanation: `${paid}-${price}=${change}円です。`,
    });
  }

  return qs;
}
