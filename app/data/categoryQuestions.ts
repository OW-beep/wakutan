/**
 * なかまわけ・なかまはずれ問題を、カテゴリのアイテムプールから機械的に生成するヘルパー。
 * 同じデータ（カテゴリ＋なかまのアイテム＋なかまではないアイテム）を、
 * 「なかまを選ぶ」「なかまはずれを選ぶ」の両方の問題形式で使い回せる。
 */

export type CategoryGroup = {
  name: string;
  items: string[]; // このカテゴリの なかま（6つ以上あるとバリエーションが増える）
  odd: string[]; // このカテゴリの なかまではない アイテム（4つ以上）
};

export const CATEGORY_GROUPS: CategoryGroup[] = [
  { name: "どうぶつ", items: ["いぬ", "ねこ", "ぞう", "きりん", "うま", "うさぎ", "くま", "とら"], odd: ["でんしゃ", "ばす", "つくえ", "いす", "ほん"] },
  { name: "のりもの", items: ["ばす", "でんしゃ", "くるま", "ひこうき", "ふね", "じてんしゃ", "たくしー"], odd: ["りんご", "いぬ", "つくえ", "ほん", "はな"] },
  { name: "くだもの", items: ["りんご", "ばなな", "みかん", "ぶどう", "いちご", "もも", "なし"], odd: ["いす", "つくえ", "いぬ", "くるま", "ぼうし"] },
  { name: "がっこうのもの", items: ["えんぴつ", "ノート", "けしごむ", "ふでばこ", "じょうぎ", "らんどせる"], odd: ["ぞう", "りんご", "くるま", "ねこ", "はな"] },
  { name: "いろ", items: ["あか", "あお", "きいろ", "みどり", "むらさき", "ちゃいろ", "ぴんく"], odd: ["ばす", "いぬ", "つくえ", "ほん", "はな"] },
  { name: "きるもの", items: ["ぼうし", "くつした", "てぶくろ", "ふく", "くつ", "まふらー"], odd: ["つくえ", "いぬ", "りんご", "でんしゃ", "はな"] },
  { name: "てんき", items: ["あめ", "ゆき", "はれ", "くもり", "かみなり", "たいふう"], odd: ["いぬ", "つくえ", "ほん", "くるま", "ぼうし"] },
  { name: "かぐ", items: ["いす", "つくえ", "べっど", "たな", "ソファ", "とだな"], odd: ["ねこ", "りんご", "でんしゃ", "はな", "くつ"] },
  { name: "むし", items: ["ちょうちょ", "ありんこ", "せみ", "とんぼ", "てんとうむし", "かぶとむし"], odd: ["でんしゃ", "いす", "りんご", "くるま", "ほん"] },
  { name: "やさい", items: ["にんじん", "とまと", "きゅうり", "なす", "たまねぎ", "じゃがいも"], odd: ["いぬ", "つくえ", "くるま", "ぼうし", "ほん"] },
  { name: "きせつ", items: ["はる", "なつ", "あき", "ふゆ"], odd: ["ばす", "いす", "りんご", "ねこ", "つくえ"] },
  { name: "そらのもの", items: ["たいよう", "つき", "ほし", "くも", "にじ"], odd: ["つくえ", "いぬ", "ほん", "くるま", "はな"] },
  { name: "からだ", items: ["て", "あし", "め", "みみ", "はな", "くち"], odd: ["いす", "つくえ", "でんしゃ", "ほん", "くるま"] },
  { name: "がっき", items: ["たいこ", "ぴあの", "らっぱ", "ばいおりん", "ふえ", "ぎたー"], odd: ["いぬ", "ねこ", "つくえ", "くるま", "りんご"] },
  { name: "おうちのもの", items: ["まど", "どあ", "かぎ", "かべ", "やね"], odd: ["ぞう", "りんご", "ねこ", "はな", "くるま"] },
  { name: "みずのいきもの", items: ["さかな", "たこ", "かに", "いか", "くらげ", "えび"], odd: ["とり", "いぬ", "ねこ", "うさぎ", "とんぼ"] },
  { name: "とりもの", items: ["すずめ", "からす", "はと", "つばめ", "ふくろう"], odd: ["ねこ", "いぬ", "うさぎ", "うま", "くま"] },
  { name: "あじ", items: ["あまい", "しょっぱい", "すっぱい", "にがい", "からい"], odd: ["つくえ", "いす", "くるま", "ほん", "ぼうし"] },
  { name: "はな", items: ["さくら", "ちゅーりっぷ", "ひまわり", "あさがお", "ばら", "たんぽぽ"], odd: ["ばす", "つくえ", "いぬ", "くるま", "ほん"] },
  { name: "たべもの", items: ["ぱん", "ごはん", "めん", "おにぎり", "かれー", "すーぷ"], odd: ["いす", "つくえ", "くるま", "ほん", "ぼうし"] },
  { name: "スポーツ", items: ["サッカー", "やきゅう", "すいえい", "バスケ", "テニス"], odd: ["りんご", "つくえ", "ねこ", "はな", "くるま"] },
  { name: "ようび", items: ["げつようび", "かようび", "すいようび", "もくようび", "きんようび"], odd: ["はる", "なつ", "あき", "ふゆ", "いぬ"] },
];

function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function pickN<T>(arr: T[], n: number, rand: () => number): T[] {
  const copy = [...arr];
  const result: T[] = [];
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(rand() * copy.length);
    result.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return result;
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export type SimpleQuestion = {
  question: string;
  answer: string;
  explanation: string;
};

/**
 * 「【どうぶつ】いぬ・ねこ・ぞう・でんしゃ どれがなかまかな？」のような、
 * 4つの中から3つのなかまを選ぶ問題を生成する。
 */
export function generateNakamawakeQuestions(seed: number, perGroup: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (const group of CATEGORY_GROUPS) {
    for (let i = 0; i < perGroup; i++) {
      const chosen3 = pickN(group.items, 3, rand);
      const oddOne = group.odd[Math.floor(rand() * group.odd.length)];
      const displayItems = shuffle([...chosen3, oddOne], rand);
      qs.push({
        question: `【${group.name}】${displayItems.join("・")} どれがなかまかな？`,
        answer: chosen3.join(" "),
        explanation: `${group.name}の なかまは 「${chosen3.join(" ")}」だよ。`,
      });
    }
  }

  return qs;
}

/**
 * 「いぬ・ねこ・うま・さかな」のような、4つの中から1つの仲間はずれを見つける問題を生成する。
 */
export function generateNakamahazureQuestions(seed: number, perGroup: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (const group of CATEGORY_GROUPS) {
    for (let i = 0; i < perGroup; i++) {
      const chosen3 = pickN(group.items, 3, rand);
      const oddOne = group.odd[Math.floor(rand() * group.odd.length)];
      const displayItems = shuffle([...chosen3, oddOne], rand);
      qs.push({
        question: displayItems.join("・"),
        answer: oddOne,
        explanation: `${chosen3.join("・")}は ${group.name}の なかま。${oddOne}だけ ちがうよ。`,
      });
    }
  }

  return qs;
}
