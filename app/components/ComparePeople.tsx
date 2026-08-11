type Props = {
  /** 登場する名前（順不同でOK。表示順は答えのヒントにならないよう名前の並び＝問題文の並びのまま渡す） */
  names: string[];
};

const COLORS = ["#f97316", "#3b82f6", "#22c55e", "#a855f7"];

/**
 * すいり（3〜4人を比べる）問題の登場人物を並べて表示するイラスト。
 * 「だれが登場するか」を絵で見せるだけで、背の高さ・順番など答えにつながる
 * 情報は一切描かない（全員同じ大きさ・同じ形で描く）。
 */
export default function ComparePeople({ names }: Props) {
  return (
    <div
      className="flex justify-center items-end gap-4 mb-3 flex-wrap"
      role="img"
      aria-label={`とうじょうする ${names.join("・")}`}
    >
      {names.map((name, i) => (
        <div key={name} className="flex flex-col items-center">
          <svg width="56" height="72" viewBox="0 0 56 72">
            <circle cx="28" cy="20" r="16" fill={COLORS[i % COLORS.length]} />
            <circle cx="22" cy="18" r="2.2" fill="#fff" />
            <circle cx="34" cy="18" r="2.2" fill="#fff" />
            <path d="M21 25 q7 6 14 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="12" y="38" width="32" height="30" rx="10" fill={COLORS[i % COLORS.length]} opacity="0.75" />
          </svg>
          <div className="mt-1 text-sm font-bold text-gray-700">{name}</div>
        </div>
      ))}
    </div>
  );
}
