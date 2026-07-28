/**
 * 1日ぶんの問題をきまった数だけえらぶ。
 *
 * もんだいの元データは「20問ぶんのベースを何周も繰り返してかさ増し」した配列に
 * なっていることが多いので、そのまま固定の間隔（jump）でインデックスを拾うと
 * 同じ問題文が1ページの中に何度も出てきてしまう（例: 6歳おかね問題で
 * 「120円のパンを4つ…」が1ページに4回出る、など）。
 *
 * そこで、まず問題の中身（オブジェクト全体）で重複を取りのぞき、そのユニークな配列を
 * 「日付をシードにした乱数」でシャッフルしてから先頭 count 件を返す。
 * 同じ日なら常に同じ並びになり、日が変われば並びが変わる。
 *
 * 重複判定はオブジェクト全体のJSONで行う（問題文だけで判定しない）。
 * 「つみき」問題のように、問題文は同じでもイラストのデータ（cubes など）が
 * 違えば別問題として扱いたいケースがあるため。
 *
 * 選ばれた問題に difficulty（1〜の数字、大きいほどむずかしい）がついている場合は、
 * 「どの問題が選ばれるか」は日替わりでシャッフルしたまま、「並び順」だけ
 * かんたん→むずかしい の順に並べ替える。difficulty が無いジャンルには影響しない。
 */
function getDifficulty(item: unknown): number | undefined {
  if (item && typeof item === "object" && "difficulty" in item) {
    const d = (item as { difficulty?: unknown }).difficulty;
    return typeof d === "number" ? d : undefined;
  }
  return undefined;
}

export function getDailyQuestions<T>(
  items: T[],
  count = 20,
  offset = 0
): T[] {
  const seed =
    Math.floor(Date.now() / (1000 * 60 * 60 * 24)) + offset;

  // 内容が同じ問題は1つにまとめる
  const seen = new Set<string>();
  const unique: T[] = [];
  for (const item of items) {
    const key = JSON.stringify(item);

    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  }

  const pool = unique.length > 0 ? unique : items;

  // シード付きの簡易な乱数（同じ seed なら毎回同じ結果になる）
  let state = seed;
  const nextRandom = () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };

  // Fisher–Yatesシャッフル
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  let selected: T[];
  if (shuffled.length >= count) {
    selected = shuffled.slice(0, count);
  } else {
    // ユニークな問題数が足りないときだけ、シャッフル済みの並びを繰り返して埋める
    selected = [];
    for (let i = 0; i < count; i++) {
      selected.push(shuffled[i % shuffled.length]);
    }
  }

  // difficulty がついている問題だけ、かんたん→むずかしい の順に並べ替える
  // (Array.prototype.sort は安定ソートなので、同じ difficulty 同士のシャッフル順は保たれる)
  const hasDifficulty = selected.some(item => getDifficulty(item) !== undefined);
  if (hasDifficulty) {
    selected = [...selected].sort(
      (a, b) => (getDifficulty(a) ?? 0) - (getDifficulty(b) ?? 0)
    );
  }

  return selected;
}
