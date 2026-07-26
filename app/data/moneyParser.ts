export type MoneyChip = { value: number; count: number };

/**
 * もんだい文から「◯円」の金額と、その枚数（まい／こ／つ／本／さつ／羽など）を
 * ざっくり読み取って、イラスト表示用のデータに変換する。
 *
 * 例:
 *  "10円玉が 2まいと 5円玉が 1まい" -> [{value:10,count:2},{value:5,count:1}]
 *  "60円の あめと 30円の ガムを かいます" -> [{value:60,count:1},{value:30,count:1}]
 */
export function parseMoney(question: string): MoneyChip[] {
  const amountRe = /(\d+)円(?:玉|さつ)?/g;
  const countRe = /(\d+)\s*(?:まい|こ|つ|ほん|本|さつ|わ)/;

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
    const cm = countRe.exec(windowText);
    const count = cm ? Math.min(parseInt(cm[1], 10), 12) : 1;
    chips.push({ value: cur.value, count });
  }
  return chips;
}
