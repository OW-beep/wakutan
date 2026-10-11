/**
 * 「10のわく」（2だん×5れつ）に、おはじきをならべた図。
 *   filled：おはじきが入っているます（ひだりうえから じゅんに）
 *   ghost ：これから 入れる ますを、てんせんの まるで しめす
 */
export function TenFrame({
  filled,
  ghost = 0,
  color = "#f59e0b",
}: {
  filled: number;
  ghost?: number;
  color?: string;
}) {
  const u = 30;
  return (
    <svg width={u * 5 + 4} height={u * 2 + 4} viewBox={`-2 -2 ${u * 5 + 4} ${u * 2 + 4}`} role="img" aria-label={`10のわくに ${filled}こ`}>
      {Array.from({ length: 10 }).map((_, i) => {
        const r = Math.floor(i / 5);
        const c = i % 5;
        const x = c * u;
        const y = r * u;
        return (
          <g key={i}>
            <rect x={x} y={y} width={u} height={u} fill="#fff" stroke="#374151" strokeWidth={1.8} />
            {i < filled && <circle cx={x + u / 2} cy={y + u / 2} r={10} fill={color} stroke="#92400e" strokeWidth={1} />}
            {i >= filled && i < filled + ghost && (
              <circle cx={x + u / 2} cy={y + u / 2} r={10} fill="none" stroke="#9ca3af" strokeWidth={2} strokeDasharray="3 3" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

/** わくに入っていない、ばらの おはじき。highlight こ（ひだりから）を、わくへ うつす おはじきとして しるしをつける */
export function LooseDots({
  n,
  highlight = 0,
  color = "#3b82f6",
}: {
  n: number;
  highlight?: number;
  color?: string;
}) {
  const u = 30;
  return (
    <svg width={Math.max(n, 1) * u + 4} height={u + 4} viewBox={`-2 -2 ${Math.max(n, 1) * u + 4} ${u + 4}`} role="img" aria-label={`ばらの おはじき ${n}こ`}>
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <circle cx={i * u + u / 2} cy={u / 2} r={10} fill={color} stroke="#1e3a8a" strokeWidth={1} />
          {i < highlight && <circle cx={i * u + u / 2} cy={u / 2} r={13} fill="none" stroke="#ef4444" strokeWidth={2.5} />}
        </g>
      ))}
    </svg>
  );
}
