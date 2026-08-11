/**
 * すいり（原因と結果を考える／3つ・4つを比べて順番を導く）問題を機械的に生成するヘルパー。
 *
 * これまでの「ろんり」は繰り返しのきまりから次を予想する問題（パターン認識）だったが、
 * こちらは「なぜそうなったかを考える」「複数の手がかりから答えを導く」という、
 * 一段階ちがう思考（推理・地頭系）を育てることを目的にしている。
 *
 * 表記について：
 * - 漢字は使わず、ひらがな・カタカナのみで問題文を作る（対象が4〜6歳のため）
 * - 「Aさん」のような記号的な名前ではなく、実際の名前を使う
 * - イラストは「答えにつながる情報（大小・順番など）」を絶対に描かない。
 *   場面や登場人物を見せるだけにとどめ、答えは問題文の手がかりだけで導けるようにする。
 */

export type SimpleQuestion = {
  question: string;
  answer: string;
  explanation: string;
  difficulty?: number;
  /** 原因と結果の問題用：場面イラストのキー（SuiriSceneコンポーネントに渡す） */
  suiriScene?: string;
  /** 比較の問題用：登場人物の名前（ComparePeopleコンポーネントに渡す。順番は答えのヒントにしない） */
  comparePeople?: string[];
};

function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

/**
 * 「原因と結果」を考える問題（4歳〜向け・やさしめ）。
 * ある出来事から、いちばんありえそうな原因を選ぶ。
 * scene はイラスト表示用のキー（SuiriScene.tsx の対応キーと一致させる）。
 */
const CAUSE_EFFECT_BASE: [string, string, string, string][] = [
  ["じめんが ぬれています。なにが あったと おもう？（あめがふった／はれていた）", "あめがふった", "じめんが ぬれるのは、みずが かかったからだよ。あめが ふると じめんが ぬれるね。", "rain"],
  ["こおりが とけて みずに なりました。なにが あったと おもう？（あたたかい ところに おいた／さむい ところに おいた）", "あたたかい ところに おいた", "こおりは あたたかい ところに おくと とけて みずに なるよ。", "iceMelt"],
  ["おともだちが ないています。なにが あったと おもう？（だいじな おもちゃが こわれた／おやつを たべた）", "だいじな おもちゃが こわれた", "だいじな ものが こわれると、かなしくて ないてしまうことが あるね。", "brokenToy"],
  ["おかあさんが にっこり わらっています。なにが あったと おもう？（おてつだいを してもらった／おこられた）", "おてつだいを してもらった", "おてつだいを してもらうと うれしくて、にっこり わらうね。", "helpedMom"],
  ["おそらが まっくらに なってきました。このあと どうなりそう？（あめが ふりそう／はなびが あがりそう）", "あめが ふりそう", "おそらが くらい くもに おおわれると、あめが ふることが おおいよ。", "darkClouds"],
  ["ゆきだるまを あたたかい へやに もってきました。どうなりそう？（とけてしまう／もっと おおきくなる）", "とけてしまう", "ゆきは あたたかい ところに おくと とけてしまうよ。", "snowmanIndoors"],
  ["コップが テーブルから おちました。どうなりそう？（われるかもしれない／おおきくなる）", "われるかもしれない", "かたい ものが たかい ところから おちると、われることが あるね。", "cupFalling"],
  ["おふろの おゆに てを いれたら あつかったです。てを どうする？（すぐに だす／もっと いれる）", "すぐに だす", "あついと かんじたら、けがを しないように てを だすのが あんぜんだよ。", "hotWater"],
  ["よる、へやの でんきを けしました。へやは どうなる？（くらくなる／あかるくなる）", "くらくなる", "でんきを けすと ひかりが なくなるので、へやは くらくなるよ。", "lightsOff"],
  ["はなに みずを あげませんでした。はなは どうなりそう？（しおれてしまう／もっと げんきになる）", "しおれてしまう", "はなは みずが ないと げんきが なくなって しおれてしまうよ。", "flowerNoWater"],
];

/**
 * 「3つを比べて順番を導く」問題（5〜6歳向け・少しむずかしめ）。
 * A>B, B>C のような手がかりから、いちばん大きい/小さいものを推理する。
 */
const TRANSITIVE_TEMPLATES: { compareWord: string }[] = [
  { compareWord: "せが たかい" },
  { compareWord: "おもい" },
  { compareWord: "はやい" },
  { compareWord: "ねだんが たかい" },
];

const NAMES_SETS: [string, string, string][] = [
  ["たろう", "じろう", "けんじ"],
  ["ゆき", "はな", "みお"],
  ["ぞう", "うま", "うさぎ"],
  ["きりん", "ねこ", "ねずみ"],
  ["あか", "あお", "きいろ"],
];

function buildCauseEffectQuestions(): SimpleQuestion[] {
  return CAUSE_EFFECT_BASE.map(([q, a, e, scene]) => ({
    question: q,
    answer: a,
    explanation: e,
    difficulty: 1,
    suiriScene: scene,
  }));
}

function buildTransitiveQuestions(): SimpleQuestion[] {
  const questions: SimpleQuestion[] = [];

  NAMES_SETS.forEach((names, setIdx) => {
    TRANSITIVE_TEMPLATES.forEach((tpl) => {
      const [a, b, c] = names;
      // a > b > c という前提で、最大／最小をそれぞれ問う2問を作る
      questions.push({
        question: `${a}は ${b}より ${tpl.compareWord}です。${b}は ${c}より ${tpl.compareWord}です。いちばん ${tpl.compareWord}のは だれ？`,
        answer: a,
        explanation: `${a} > ${b} > ${c} の じゅんばんなので、いちばん ${tpl.compareWord}のは ${a} だよ。`,
        difficulty: 2 + (setIdx % 2),
        comparePeople: [a, b, c],
      });
      questions.push({
        question: `${a}は ${b}より ${tpl.compareWord}です。${b}は ${c}より ${tpl.compareWord}です。いちばん ${tpl.compareWord}くないのは だれ？`,
        answer: c,
        explanation: `${a} > ${b} > ${c} の じゅんばんなので、いちばん ${tpl.compareWord}くないのは ${c} だよ。`,
        difficulty: 2 + (setIdx % 2),
        comparePeople: [a, b, c],
      });
    });
  });

  return questions;
}

/**
 * 4歳向け：原因と結果を考えるやさしい問題のみ。
 */
export function generateSuiriQuestions4(): SimpleQuestion[] {
  return buildCauseEffectQuestions();
}

/**
 * 5歳向け：原因と結果に加えて、3つを比べる推理問題も出す。
 */
export function generateSuiriQuestions5(): SimpleQuestion[] {
  return [...buildCauseEffectQuestions(), ...buildTransitiveQuestions()];
}

/**
 * 6歳向け：3つを比べる推理問題を中心に、4人を比べる少しむずかしい問題も混ぜる。
 */
export function generateSuiriQuestions6(): SimpleQuestion[] {
  const rand = seededRandom(20260810);
  const transitive = buildTransitiveQuestions();

  // 6歳向けは「4人を比べて、2番目に○○なのは？」のような一段深い設問も混ぜる
  const fourWayQuestions: SimpleQuestion[] = [];
  const FOUR_NAME_SETS: [string, string, string, string][] = [
    ["ひろし", "さとし", "まなぶ", "けん"],
    ["さくら", "もも", "すみれ", "らん"],
  ];
  FOUR_NAME_SETS.forEach((names) => {
    const [a, b, c, d] = names;
    fourWayQuestions.push({
      question: `${a}は ${b}より せがたかい。${b}は ${c}より せがたかい。${c}は ${d}より せがたかい。2ばんめに せがたかいのは だれ？`,
      answer: b,
      explanation: `${a} > ${b} > ${c} > ${d} の じゅんばんなので、2ばんめに せがたかいのは ${b} だよ。`,
      difficulty: 4,
      comparePeople: [a, b, c, d],
    });
  });

  const shuffled = [...transitive, ...fourWayQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
