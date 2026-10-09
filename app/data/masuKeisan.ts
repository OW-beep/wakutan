/**
 * ますけいさん（たし算のます計算）のシートを作る。
 *   よこ（うえ）の数 ＋ たて（ひだり）の数 を、まじわるますに書く。
 * N ますのときは、よこ・たてとも 1〜N の数を ならべかえて つかう
 * （3ますなら 1〜3、4ますなら 1〜4、…、10ますなら 1〜10）。
 * いちばん大きい 10×10 ますでも、たし算の答えは 20 まで。
 * 年齢が上がるほど、ますの数（3〜10）がふえる。
 */
export type MasuSheet = { size: number; top: number[]; left: number[] };

export type MasuLevel = {
  sizes: number[];
  perSize: number;
};

export const MASU_LEVELS: Record<4 | 5 | 6, MasuLevel> = {
  4: { sizes: [3, 4], perSize: 12 },
  5: { sizes: [5, 6, 7], perSize: 12 },
  6: { sizes: [8, 9, 10], perSize: 12 },
};

function makeRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickDistinct(r: () => number, max: number, n: number): number[] {
  const all = Array.from({ length: max }, (_, i) => i + 1);
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, n);
}

export function generateMasu(age: 4 | 5 | 6): MasuSheet[] {
  const lv = MASU_LEVELS[age];
  const r = makeRng(20000 + age);
  const out: MasuSheet[] = [];
  for (const size of lv.sizes) {
    const seen = new Set<string>();
    let guard = 0;
    while (seen.size < lv.perSize && guard++ < 500) {
      // 1〜size を ならべかえる（たしざんの答えは、さいだい size×2）
      const top = pickDistinct(r, size, size);
      const left = pickDistinct(r, size, size);
      const key = top.join(",") + "/" + left.join(",");
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ size, top, left });
    }
  }
  return out;
}

/** 日がわりで はじめのシートを かえるための数（その日のはじまりから数えた日数） */
export function getDayIndex(): number {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}
