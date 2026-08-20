/**
 * こっき（国旗）問題を機械的に生成するヘルパー。
 *
 * 「どこの国か覚える」暗記だけでなく、色の数を数える・模様のパターンで
 * 仲間分けする・似た模様を見つけるという、観察力と分類する力（地頭系）を
 * 育てることも目的にしている。漢字は使わない。
 *
 * 国旗画像は自作せず、オープンソースの flag-icons（MITライセンス）が
 * 提供する正確なSVGをそのまま使用する（flagData.ts の code が
 * flag-icons のクラス名 = ISO 3166-1 alpha-2 コードと対応している）。
 */

import { FLAGS, FlagData, FlagPattern } from "./flagData";

export type FlagQuestion = {
  question: string;
  answer: string;
  explanation: string;
  difficulty?: number;
  /** メインで見せる国旗（1枚）。ISO 3166-1 alpha-2 コード */
  flagKey?: string;
  /** 複数の国旗を並べて見せる問題用（順不同、答えのヒントにはしない） */
  flagKeys?: string[];
};

const PATTERN_LABEL: Record<Exclude<FlagPattern, "complex">, string> = {
  verticalStripe: "たてじま",
  horizontalStripe: "よこじま",
  circle: "まるもよう",
  centeredCross: "まんなかのじゅうじもよう",
  nordicCross: "ひだりよりのじゅうじもよう",
};

// パターン分類の問題（なかまはずれ・にている旗さがし）では、
// 単純な模様に分類できる国旗のみを対象にする（"complex" は除外）。
const PATTERNABLE_FLAGS = FLAGS.filter(
  (f): f is FlagData & { pattern: Exclude<FlagPattern, "complex"> } => f.pattern !== "complex"
);

function seededRandom(seed: number): () => number {
  let state = (seed % 2147483647 + 2147483647) % 2147483647;
  if (state === 0) state = 1;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * 「なんしょくつかわれている？」色の数を数える問題（4歳〜向け・やさしい）。
 * 全ての国旗（先進国を含む）を対象にする。
 */
function buildColorCountQuestions(): FlagQuestion[] {
  return FLAGS.map((flag) => {
    const wrongOptions = [2, 3, 4].filter((n) => n !== flag.colorCount);
    return {
      question: `この こっきは、なんしょく つかわれている？（${flag.colorCount}しょく／${wrongOptions[0]}しょく）`,
      answer: `${flag.colorCount}しょく`,
      explanation: `${flag.nameJa}の こっきは ${flag.colorCount}しょくで できているよ。`,
      difficulty: 1,
      flagKey: flag.code,
    };
  });
}

/**
 * 「どこの くにの こっき？」有名な国旗を2択から選ぶ問題（4歳〜向け・やさしい）。
 * 主要先進国を中心に、見た目がはっきり違う国旗の組み合わせのみ出題する。
 * 選択肢は国旗の画像ではなく、国の名前を文中に埋め込む形にする
 * （画像の見た目で当てる問題ではなく、名前を選ぶ問題にするため）。
 */
function buildCountryNameQuestions(): FlagQuestion[] {
  const questions: FlagQuestion[] = [];
  const targets = FLAGS.slice(0, 12); // 先進国・主要国を優先

  targets.forEach((target) => {
    const others = FLAGS.filter((f) => f.code !== target.code);
    const rand = seededRandom(target.code.charCodeAt(0) * 97 + target.code.charCodeAt(1) * 13);
    const wrongOption = shuffle(others, rand)[0];
    if (!wrongOption) return;

    questions.push({
      question: `この こっきは、どこの くにの もの？（${target.nameJa}／${wrongOption.nameJa}）`,
      answer: target.nameJa,
      explanation: `これは ${target.nameJa}の こっきだよ。`,
      difficulty: 1,
      flagKey: target.code,
    });
  });

  return questions;
}

/**
 * 「なかまはずれ」もようのパターンで3つが仲間、1つだけ違うものを探す問題（5歳〜向け）。
 */
function buildOddOneOutQuestions(): FlagQuestion[] {
  const questions: FlagQuestion[] = [];
  const byPattern: Record<Exclude<FlagPattern, "complex">, FlagData[]> = {
    verticalStripe: [],
    horizontalStripe: [],
    circle: [],
    centeredCross: [],
    nordicCross: [],
  };
  PATTERNABLE_FLAGS.forEach((f) => byPattern[f.pattern].push(f));

  const patterns = Object.keys(byPattern) as (keyof typeof byPattern)[];

  patterns.forEach((samePattern) => {
    const sameGroup = byPattern[samePattern];
    if (sameGroup.length < 3) return;

    const otherPatterns = patterns.filter((p) => p !== samePattern && byPattern[p].length > 0);

    for (let i = 0; i < sameGroup.length; i++) {
      for (let j = i + 1; j < sameGroup.length; j++) {
        for (let k = j + 1; k < sameGroup.length; k++) {
          otherPatterns.forEach((oddPattern) => {
            byPattern[oddPattern].forEach((oddFlag) => {
              const three = [sameGroup[i], sameGroup[j], sameGroup[k]];
              questions.push({
                question: `4つの こっきの なかで、もようが ちがう なかまはずれは どれ？`,
                answer: oddFlag.nameJa,
                explanation: `${three.map((f) => f.nameJa).join("・")}は ${PATTERN_LABEL[samePattern]}。${oddFlag.nameJa}だけ ${PATTERN_LABEL[oddPattern]}だよ。`,
                difficulty: 2,
                flagKeys: [...three.map((f) => f.code), oddFlag.code],
              });
            });
          });
        }
      }
    }
  });

  return questions;
}

/**
 * 「にているこっきをさがす」目印となる1枚と同じもようのものを3択から選ぶ問題（6歳〜向け）。
 */
function buildMatchPatternQuestions(): FlagQuestion[] {
  const questions: FlagQuestion[] = [];
  const byPattern: Record<Exclude<FlagPattern, "complex">, FlagData[]> = {
    verticalStripe: [],
    horizontalStripe: [],
    circle: [],
    centeredCross: [],
    nordicCross: [],
  };
  PATTERNABLE_FLAGS.forEach((f) => byPattern[f.pattern].push(f));
  const patterns = Object.keys(byPattern) as (keyof typeof byPattern)[];

  patterns.forEach((pattern) => {
    const group = byPattern[pattern];
    if (group.length < 2) return;

    group.forEach((target) => {
      const sameOthers = group.filter((f) => f.code !== target.code);
      const otherFlags = PATTERNABLE_FLAGS.filter((f) => f.pattern !== pattern);

      sameOthers.forEach((correctMatch) => {
        const distractorSeed = seededRandom(
          target.code.length * 101 + correctMatch.code.length * 13 + otherFlags.length
        );
        const shuffledOthers = shuffle(otherFlags, distractorSeed);
        const distractors = shuffledOthers.slice(0, 2);
        if (distractors.length < 2) return;

        const options = shuffle([correctMatch, ...distractors], seededRandom(
          target.code.length * 31 + correctMatch.code.length * 7
        ));

        questions.push({
          question: `この こっきと おなじ もようの こっきは、どれ？`,
          answer: correctMatch.nameJa,
          explanation: `${target.nameJa}と ${correctMatch.nameJa}は どちらも ${PATTERN_LABEL[pattern]}だよ。`,
          difficulty: 3,
          flagKey: target.code,
          flagKeys: options.map((f) => f.code),
        });
      });
    });
  });

  return questions;
}

export function generateKokkiQuestions4(): FlagQuestion[] {
  const rand = seededRandom(20260821);
  return shuffle([...buildColorCountQuestions(), ...buildCountryNameQuestions()], rand);
}

export function generateKokkiQuestions5(): FlagQuestion[] {
  const rand = seededRandom(20260819);
  return shuffle(
    [...buildColorCountQuestions(), ...buildCountryNameQuestions(), ...buildOddOneOutQuestions()],
    rand
  );
}

export function generateKokkiQuestions6(): FlagQuestion[] {
  const rand = seededRandom(20260820);
  return shuffle(
    [...buildOddOneOutQuestions(), ...buildMatchPatternQuestions(), ...buildCountryNameQuestions()],
    rand
  );
}
