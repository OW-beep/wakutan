/**
 * 印刷したときだけ出る「こたえ」を書く欄。
 * 図の中に書く場所がある問題（図つきの新ジャンル・おなじかたち・パターン）には出さない。
 */
type Needs = { genre: string; figure?: unknown; dotFigure?: unknown };

export function needsAnswerLine(q: Needs): boolean {
  if (q.figure) return false; // かいてん・かがみうつし等は、図の中にますや□がある
  if (q.dotFigure) return false; // おなじかたちは、点つなぎのますに書く
  if (q.genre.includes("パターン")) return false; // 並びの□（空きマス）に書く
  return true;
}

export default function AnswerLine() {
  return (
    <div className="hidden print:flex items-center gap-2 mt-3 text-sm wt-answer-line">
      <span className="font-bold">こたえ</span>
      <span className="inline-block h-9 w-40 border-2 border-gray-500 rounded-lg" />
    </div>
  );
}
