type Question = {
  genre: string;
  question: string;
  answer: string;
};

export function generate5Questions() {

  const sansu: Question[] = [];
  const ronri: Question[] = [];
  const pattern: Question[] = [];
  const hiragana: Question[] = [];
  const nakamawake: Question[] = [];

  // ====================
  // さんすう（1桁〜2桁入り口）
  // ====================
  for (let a = 1; a <= 20; a++) {
    for (let b = 1; b <= 20; b++) {
      sansu.push({
        genre: "さんすう",
        question: `${a} + ${b} = ?`,
        answer: `${a + b}`,
      });
    }
  }

  // ====================
  // しこうパズル（ルール理解）
  // ====================
  const ronliBase = [
    ["【ならび】1 → 3 → 5 → 7 → □", "9"],
    ["【きまり】あか → あお → あか → あお → □", "あか"],
    ["【じゅんばん】あさ → ひる → よる → □", "あさ"],
  ];

  for (let i = 0; i < 80; i++) {
    ronliBase.forEach(t => {
      ronri.push({
        genre: "ろんり",
        question: `${t[0]} つぎはどれかな？`,
        answer: t[1],
      });
    });
  }

  // ====================
  // パターン
  // ====================
  const patternBase = [
    ["1 2 1 2 1 □", "2"],
    ["あ い あ い □", "あ"],
    ["○ △ ○ △ □", "○"],
  ];

  for (let i = 0; i < 100; i++) {
    patternBase.forEach(t => {
      pattern.push({
        genre: "パターン",
        question: `${t[0]} → つぎはどれかな？`,
        answer: t[1],
      });
    });
  }

  // ====================
  // ひらがな（なかま理解）
  // ====================
  const words = [
    { w: "りんご", a: "くだもの" },
    { w: "いぬ", a: "どうぶつ" },
    { w: "でんしゃ", a: "のりもの" },
    { w: "えんぴつ", a: "がっこう" },
    { w: "くつ", a: "つかうもの" },
  ];

  for (let i = 0; i < 60; i++) {
    words.forEach(w => {
      hiragana.push({
        genre: "ことば",
        question: `【なかま】「${w.w}」はどんななかまかな？`,
        answer: w.a,
      });
    });
  }

  // ====================
  // なかまわけ
  // ====================
  const groups = [
    { c: "どうぶつ", items: ["いぬ", "ねこ", "ぞう", "でんしゃ"], a: "いぬ ねこ ぞう" },
    { c: "のりもの", items: ["ばす", "でんしゃ", "くるま", "りんご"], a: "ばす でんしゃ くるま" },
    { c: "たべもの", items: ["ぱん", "ごはん", "おにぎり", "くるま"], a: "ぱん ごはん おにぎり" },
  ];

  for (let i = 0; i < 100; i++) {
    groups.forEach(g => {
      nakamawake.push({
        genre: "なかまわけ",
        question: `【${g.c}】${g.items.join("・")}の中でなかまはどれかな？`,
        answer: g.a,
      });
    });
  }

  return { sansu, ronri, pattern, hiragana, nakamawake };
}