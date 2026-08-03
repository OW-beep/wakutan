/**
 * ひらがな・ことば問題を機械的に生成するヘルパー。
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

function pickN<T>(arr: T[], n: number, rand: () => number, exclude?: T): T[] {
  const pool = exclude === undefined ? arr : arr.filter(x => x !== exclude);
  const copy = [...pool];
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

// たんご + えもじ + さいしょのひらがな
const WORD_BANK: { w: string; emoji: string }[] = [
  { w: "りんご", emoji: "🍎" }, { w: "ばなな", emoji: "🍌" }, { w: "みかん", emoji: "🍊" },
  { w: "ぶどう", emoji: "🍇" }, { w: "いちご", emoji: "🍓" }, { w: "もも", emoji: "🍑" },
  { w: "いぬ", emoji: "🐶" }, { w: "ねこ", emoji: "🐱" }, { w: "ぞう", emoji: "🐘" },
  { w: "きりん", emoji: "🦒" }, { w: "うさぎ", emoji: "🐰" }, { w: "くま", emoji: "🐻" },
  { w: "とら", emoji: "🐯" }, { w: "うま", emoji: "🐴" }, { w: "ぱんだ", emoji: "🐼" },
  { w: "でんしゃ", emoji: "🚃" }, { w: "ばす", emoji: "🚌" }, { w: "くるま", emoji: "🚗" },
  { w: "じてんしゃ", emoji: "🚲" }, { w: "ひこうき", emoji: "✈️" }, { w: "ふね", emoji: "⛴️" },
  { w: "えんぴつ", emoji: "✏️" }, { w: "ほん", emoji: "📖" }, { w: "ぼうし", emoji: "🧢" },
  { w: "くつ", emoji: "👟" }, { w: "かさ", emoji: "☂️" }, { w: "ゆき", emoji: "❄️" },
  { w: "いす", emoji: "🪑" }, { w: "ほし", emoji: "⭐" }, { w: "つき", emoji: "🌙" },
  { w: "たいよう", emoji: "☀️" }, { w: "はな", emoji: "🌸" }, { w: "き", emoji: "🌳" },
  { w: "やま", emoji: "⛰️" }, { w: "うみ", emoji: "🌊" }, { w: "さかな", emoji: "🐟" },
  { w: "とり", emoji: "🐦" }, { w: "ちょうちょ", emoji: "🦋" }, { w: "かめ", emoji: "🐢" },
  { w: "けーき", emoji: "🍰" }, { w: "ぱん", emoji: "🍞" }, { w: "おにぎり", emoji: "🍙" },
];

/**
 * 「🍎 は どれ かな？（りんご・ばなな・ねこ）」のような、絵に合う単語を選ぶ問題。
 */
export function generateWordChoiceQuestions(seed: number, perWord: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];
  const allWords = WORD_BANK.map(x => x.w);

  for (const item of WORD_BANK) {
    for (let i = 0; i < perWord; i++) {
      const distractors = pickN(allWords, 2, rand, item.w);
      const choices = shuffle([item.w, ...distractors], rand);
      qs.push({
        question: `${item.emoji} は どれ かな？（${choices.join("・")}）`,
        answer: item.w,
        explanation: `${item.emoji}は「${item.w}」だよ。`,
      });
    }
  }

  return qs;
}

/**
 * 「【はじめのおと】「か」からはじまることばはどれ？（かめ・とり・ねこ）」のような、
 * 指定された音からはじまる単語を選ぶ問題。
 */
export function generateFirstSoundQuestions(seed: number, perWord: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (const item of WORD_BANK) {
    const sound = item.w[0];
    const others = WORD_BANK.filter(x => x.w[0] !== sound).map(x => x.w);
    for (let i = 0; i < perWord; i++) {
      const distractors = pickN(others, 2, rand);
      const choices = shuffle([item.w, ...distractors], rand);
      qs.push({
        question: `【はじめのおと】「${sound}」から はじまる ことばは どれ？（${choices.join("・")}）`,
        answer: item.w,
        explanation: `「${item.w}」は「${sound}」から はじまるよ。`,
      });
    }
  }

  return qs;
}

// はんたいのいみの ことば ペア（6歳向け）
const ANTONYM_PAIRS: [string, string][] = [
  ["おおきな", "ちいさな"], ["はやく", "ゆっくり"], ["あかるい", "くらい"],
  ["あたらしい", "ふるい"], ["おもい", "かるい"], ["たかい", "ひくい"],
  ["ながい", "みじかい"], ["あつい", "さむい"], ["せまい", "ひろい"],
  ["つよい", "よわい"], ["ふとい", "ほそい"], ["やわらかい", "かたい"],
  ["ちかい", "とおい"], ["あさい", "ふかい"], ["おおい", "すくない"],
  ["はやい", "おそい"], ["きれい", "きたない"], ["うれしい", "かなしい"],
  ["すき", "きらい"], ["かつ", "まける"],
];

export function generateAntonymQuestions(): SimpleQuestion[] {
  const qs: SimpleQuestion[] = [];
  for (const [a, b] of ANTONYM_PAIRS) {
    qs.push({
      question: `「${a}」の はんたいの いみは？`,
      answer: b,
      explanation: `「${a}」の はんたいは「${b}」だよ。`,
    });
    qs.push({
      question: `「${b}」の はんたいの いみは？`,
      answer: a,
      explanation: `「${a}」の はんたいは「${b}」だよ。`,
    });
  }
  return qs;
}

// カタカナのことば
const KATAKANA_WORDS = [
  "バナナ", "テレビ", "アニメ", "ケーキ", "プリン", "バス", "スーパー",
  "リボン", "ビル", "アイスクリーム", "ラケット", "ボール", "ピアノ",
  "チョコレート", "クッキー", "ハンカチ", "タオル", "パン", "ジュース",
  "カメラ", "ノート", "ギター", "ドア", "テーブル", "ソファ", "ラジオ",
  "アイロン", "エプロン", "オムレツ", "カレンダー", "キャベツ", "クレヨン",
  "コップ", "サラダ", "シャツ", "スカート", "ゼリー", "タクシー", "チーズ",
  "トマト", "ドレッシング", "ナイフ", "ネックレス", "パズル", "バイオリン",
  "ハンバーグ", "フォーク", "ヘリコプター", "ホットケーキ", "マフラー",
  "ミルク", "メロン", "ヨーグルト", "ライオン", "レモン", "ロボット",
];

// 文の残りぶぶん（テンプレート）: {W}にカタカナ語を入れる
const SENTENCE_TEMPLATES = [
  "「{W}をたべました」のなかの カタカナのことばは？",
  "「{W}をかいました」のなかの カタカナのことばは？",
  "「{W}をみました」のなかの カタカナのことばは？",
  "「{W}をつかいました」のなかの カタカナのことばは？",
  "「{W}がすきです」のなかの カタカナのことばは？",
  "「{W}をもらいました」のなかの カタカナのことばは？",
  "「{W}をつくりました」のなかの カタカナのことばは？",
  "「{W}がほしいです」のなかの カタカナのことばは？",
];

export function generateKatakanaQuestions(seed: number, count: number): SimpleQuestion[] {
  const rand = seededRandom(seed);
  const qs: SimpleQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const word = KATAKANA_WORDS[Math.floor(rand() * KATAKANA_WORDS.length)];
    const tpl = SENTENCE_TEMPLATES[Math.floor(rand() * SENTENCE_TEMPLATES.length)];
    qs.push({
      question: tpl.replace("{W}", word),
      answer: word,
      explanation: `「${word}」は カタカナで かかれているよ。`,
    });
  }

  return qs;
}
