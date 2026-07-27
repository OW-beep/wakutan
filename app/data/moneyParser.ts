export type MoneyRole = "price" | "paid";

export type MoneyChip = {
  value: number;
  count: number;
  /**
   * role:
   *  - "price" : 品物の「ねだん」（〜円の〇〇、のように「円の」につながる金額）
   *  - "paid"  : じっさいに だす お金（〜円玉を だす、のように「を だす」につながる金額）
   *  - なし    : ただ数えるだけの金額（単純な合計など）。ラベルは付けない。
   */
  role?: MoneyRole;
};

/**
 * もんだい文から「◯円」の金額と、その枚数（まい／こ／つ／本／さつ／羽など）を
 * ざっくり読み取って、イラスト表示用のデータに変換する。
 *
 * 「ねだん」と「だす お金」がどちらも出てくる問題（おつりの問題など）は、
 * アイコンだけだと何を表しているのか分かりにくいため、直後の文脈
 * （「円の」→ねだん／「円玉を だす」→だすお金）から役割も判定する。
 *
 * 例:
 *  "10円玉が 2まいと 5円玉が 1まい" -> [{value:10,count:2},{value:5,count:1}]
 *  "200円の えほんを かいます。500円玉を だすと" ->
 *    [{value:200,count:1,role:"price"},{value:500,count:1,role:"paid"}]
 */
export function parseMoney(question: string): MoneyChip[] {
  const amountRe = /(\d+)円(?:玉|さつ)?/g;
  const countRe = /(\d+)\s*(?:まい|こ|つ|ほん|本|さつ|わ)/;
  const paidRe = /^(?:玉|さつ)?を\s*だ/;
  const priceRe = /^の/;

  const amounts: { value: number; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = amountRe.exec(question)) !== null) {
    amounts.push({
      value: parseInt(m[1], 10),
      start: m.index,
      end: m.index + m[0].length,
    });
  }
  if (amounts.length === 0) return [];

  const chips: MoneyChip[] = [];
  for (let i = 0; i < amounts.length; i++) {
    const cur = amounts[i];
    const windowEnd = i + 1 < amounts.length ? amounts[i + 1].start : question.length;
    const windowText = question.slice(cur.end, windowEnd);
    const trimmed = windowText.trimStart();

    const cm = countRe.exec(windowText);
    const count = cm ? Math.min(parseInt(cm[1], 10), 12) : 1;

    let role: MoneyRole | undefined;
    if (paidRe.test(trimmed)) {
      role = "paid";
    } else if (priceRe.test(trimmed)) {
      role = "price";
    }

    chips.push({ value: cur.value, count, role });
  }
  return chips;
}
