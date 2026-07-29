import { getDailyQuestions } from "./getDailyQuestions";

/**
 * トップ・年齢ページの「きょうの10もん」プレビュー用。
 *
 * ジャンル数がふえて「毎日10問」の表記どおりに10問だけ選べなくなってきたので、
 * その日ごとに「どのジャンルから出すか」を10個ぶんシード付きでシャッフルして選び、
 * 選ばれた各ジャンルから1問ずつピックアップする。
 *
 * これにより：
 * - 表示される問題数は常にちょうど10問（サイト表記と実際の表示を一致させる）
 * - 日によって出てくるジャンルの組み合わせも変わる（毎日同じ一部のジャンルだけが
 *   優先されることがなく、つみき・おなじかたちのような新しいジャンルも順番に登場する）
 */
export function pickDailyPreview<T>(
  genreMap: Record<string, T[]>,
  count = 10,
  offset = 0
): T[] {
  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) + offset;

  const genreNames = Object.keys(genreMap).filter(
    name => Array.isArray(genreMap[name]) && genreMap[name].length > 0
  );

  let state = seed;
  const nextRandom = () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };

  const shuffledGenres = [...genreNames];
  for (let i = shuffledGenres.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [shuffledGenres[i], shuffledGenres[j]] = [shuffledGenres[j], shuffledGenres[i]];
  }

  const chosenGenres = shuffledGenres.slice(0, count);

  return chosenGenres.map((genre, idx) => {
    const [item] = getDailyQuestions(genreMap[genre], 1, offset + idx * 137 + 7);
    return item;
  });
}
