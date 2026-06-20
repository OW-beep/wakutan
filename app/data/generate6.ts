type Question = {
  genre: string;
  question: string;
  answer: string;
};

type RonriTemplate = [string, string];
type PatternTemplate = [string, string];

export function generate6Questions() {

  const sansu: Question[] = [];
  const ronri: Question[] = [];
  const pattern: Question[] = [];
  const hiragana: Question[] = [];
  const nakamawake: Question[] = [];

  // ====================
  // さんすう（3〜99 / 簡単寄り）
  // ====================

  for (let a = 1; a <= 30; a++) {
    for (let b = 1; b <= 30; b++) {

      sansu.push({
        genre: "🔢 さんすう",
        question: `${a} + ${b} = ?`,
        answer: `${a + b}`,
      });

      if (a > b) {
        sansu.push({
          genre: "🔢 さんすう",
          question: `${a} - ${b} = ?`,
          answer: `${a - b}`,
        });
      }
    }
  }

  // ====================
  // ろんり（明確化）
  // ====================

  const ronriTemplates: RonriTemplate[] = [
    ["AはBよりおおきい。BはCよりおおきい。いちばん小さいのは？", "C"],
    ["りんご・ばなな・みかん・くるま → ちがうのは？", "くるま"],
    ["あさ→ひる→よる→あさ→□", "ひる"],
    ["1→3→5→7→□", "9"],
    ["あか→あお→あか→あお→□", "あか"],
  ];

  for (let i = 0; i < 120; i++) {
    ronriTemplates.forEach(t => {
      ronri.push({
        genre: "🧠 ろんり",
        question: t[0],
        answer: t[1],
      });
    });
  }

  // ====================
  // パターン
  // ====================

  const patternTemplates: PatternTemplate[] = [
    ["2 4 6 8 □", "10"],
    ["1 3 5 7 □", "9"],
    ["A B A B A □", "B"],
    ["○ △ ○ △ ○ □", "△"],
    ["10 20 30 40 □", "50"],
  ];

  for (let i = 0; i < 120; i++) {
    patternTemplates.forEach(t => {
      pattern.push({
        genre: "🔷 パターン",
        question: `${t[0]} → □にはいるのは？`,
        answer: t[1],
      });
    });
  }

  // ====================
  // ひらがな（用途・意味固定）
  // ====================

  const words = [
    "りんご","みかん","ばなな","すいか",
    "いぬ","ねこ","ぞう",
    "でんしゃ","ばす","くるま",
    "えんぴつ","ノート","はさみ",
    "ぼうし","くつ","はぶらし"
  ];

  for (let i = 0; i < 80; i++) {
    words.forEach(w => {
      hiragana.push({
        genre: "🔤 ことば",
        question: `このことばはなに？「${w}」`,
        answer: w,
      });
    });
  }

  // ====================
  // なかまわけ（改善：明確化）
  // ====================

  const groups = [
    { q: "どうぶつをえらぼう：いぬ・ねこ・ぞう・でんしゃ", a: "いぬ ねこ ぞう" },
    { q: "のりものをえらぼう：ばす・でんしゃ・ひこうき・りんご", a: "ばす でんしゃ ひこうき" },
    { q: "たべものをえらぼう：ぱん・ごはん・おにぎり・くるま", a: "ぱん ごはん おにぎり" },
    { q: "がっこうのものをえらぼう：えんぴつ・ノート・けしごむ・ぞう", a: "えんぴつ ノート けしごむ" },
    { q: "いろをえらぼう：あか・あお・きいろ・ばす", a: "あか あお きいろ" },
  ];

  for (let i = 0; i < 120; i++) {
    groups.forEach(g => {
      nakamawake.push({
        genre: "📦 なかまわけ",
        question: g.q,
        answer: g.a,
      });
    });
  }

  return {
    sansu,
    ronri,
    pattern,
    hiragana,
    nakamawake,
  };
}