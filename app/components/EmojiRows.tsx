type Row = {
  emoji: string;
  count: number;
  /** 「こ」「さつ」「ほん」など数える単位 */
  counter?: string;
  /** 行の右側に添える小さなラベル（省略可。例：「ふうせん」） */
  label?: string;
};

type Props = {
  rows: Row[];
};

/**
 * くらべっこ（1桁の数の比較）問題で、絵文字を個数分ならべて2〜3行で表示するイラスト。
 * 行をそろえて表示することで、数字が読めなくても「どちらが多いか」を目と手で
 * 数えて比べられるようにする（各行は左そろえ、絵文字の大きさ・間隔は共通）。
 */
export default function EmojiRows({ rows }: Props) {
  return (
    <div
      className="mb-3 bg-slate-50 rounded-2xl p-4 space-y-2"
      role="img"
      aria-label={rows.map((r) => `${r.label ?? r.emoji} ${r.count}${r.counter ?? "こ"}`).join("、")}
    >
      {rows.map((row, i) => (
        <div key={i} className="flex items-center gap-2 flex-wrap">
          <div className="flex gap-1 flex-wrap leading-none">
            {Array.from({ length: row.count }).map((_, j) => (
              <span key={j} className="text-3xl">
                {row.emoji}
              </span>
            ))}
          </div>
          <span className="text-sm font-bold text-gray-500 whitespace-nowrap">
            {row.label ? `${row.label} ` : ""}
            {row.count}{row.counter ?? "こ"}
          </span>
        </div>
      ))}
    </div>
  );
}
