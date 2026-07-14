type Question = {
  genre: string;
  question: string;
  answer: string;
};

export function generate4Questions() {

  const sansu: Question[] = [];
  const ronri: Question[] = [];
  const pattern: Question[] = [];
  const hiragana: Question[] = [];
  const nakamawake: Question[] = [];

  // ====================
  // さんすう（かんたん）
  // ====================
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      sansu.push({
        genre: "さんすう",
        question: `おかしが ${a} こあって ${b} こふえたら？`,
        answer: `${a + b}`,
      });
    }
  }

  // ====================
  // しこうパズル（超やさしい）
  // ====================
  const ronriBase = [
    ["【ならび】1 → 2 → 3 → □", "4"],
    ["【きまり】あか → あお → あか → □", "あお"],
    ["【ならび】2 → 4 → 6 → □", "8"],
  ];

  for (let i = 0; i < 80; i++) {
    ronriBase.forEach(t => {
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
    ["○ △ ○ △ □", "○"],
    ["1 2 1 2 □", "1"],
    ["あ い あ い □", "あ"],
  ];

  for (let i = 0; i < 100; i++) {
    patternBase.forEach(t => {
      pattern.push({
        genre: "パターン",
        question: `${t[0]} つぎはどれかな？`,
        answer: t[1],
      });
    });
  }

  // ====================
  // ひらがな（なかま）
  // ====================
  const words = [
    { w: "りんご", a: "くだもの" },
    { w: "いぬ", a: "どうぶつ" },
    { w: "でんしゃ", a: "のりもの" },
    { w: "えんぴつ", a: "がっこう" },
  ];

  for (let i = 0; i < 60; i++) {
    words.forEach(w => {
      hiragana.push({
        genre: "ことば",
        question: `【なかま】「${w.w}」はどれかな？`,
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
  ];

  for (let i = 0; i < 100; i++) {
    groups.forEach(g => {
      nakamawake.push({
        genre: "なかまわけ",
        question: `【${g.c}】${g.items.join("・")} どれがなかまかな？`,
        answer: g.a,
      });
    });
  }

  return { sansu, ronri, pattern, hiragana, nakamawake };
}