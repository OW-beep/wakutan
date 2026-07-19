type Props = {
  hour: number;
  minute: number;
  size?: number;
};

export default function ClockFace({ hour, minute, size = 160 }: Props) {
  const cx = 100;
  const cy = 100;
  const r = 90;

  // 時針：1時間で30度、さらに分の分だけ少しすすむ
  const hourAngle = ((hour % 12) + minute / 60) * 30;
  // 分針：1分で6度
  const minuteAngle = minute * 6;

  const hourHandLength = 50;
  const minuteHandLength = 75;

  const toXY = (angleDeg: number, length: number) => {
    const angleRad = (Math.PI / 180) * (angleDeg - 90);
    return {
      x: cx + length * Math.cos(angleRad),
      y: cy + length * Math.sin(angleRad),
    };
  };

  const hourTip = toXY(hourAngle, hourHandLength);
  const minuteTip = toXY(minuteAngle, minuteHandLength);

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = i * 30;
    const outer = toXY(angle, r - 6);
    const inner = toXY(angle, r - (i % 3 === 0 ? 16 : 12));
    return { outer, inner, isMajor: i % 3 === 0 };
  });

  const numbers = Array.from({ length: 12 }, (_, i) => {
    const n = i === 0 ? 12 : i;
    const pos = toXY(i * 30, r - 26);
    return { n, pos };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={`${hour}じ${minute === 0 ? "" : `${minute}ふん`}を さしている とけい`}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="#ffffff"
        stroke="#d97706"
        strokeWidth={4}
      />

      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.inner.x}
          y1={t.inner.y}
          x2={t.outer.x}
          y2={t.outer.y}
          stroke="#b45309"
          strokeWidth={t.isMajor ? 3 : 1.5}
          strokeLinecap="round"
        />
      ))}

      {numbers.map((num) => (
        <text
          key={num.n}
          x={num.pos.x}
          y={num.pos.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={18}
          fontWeight={700}
          fill="#78350f"
        >
          {num.n}
        </text>
      ))}

      {/* 時針 */}
      <line
        x1={cx}
        y1={cy}
        x2={hourTip.x}
        y2={hourTip.y}
        stroke="#78350f"
        strokeWidth={6}
        strokeLinecap="round"
      />

      {/* 分針 */}
      <line
        x1={cx}
        y1={cy}
        x2={minuteTip.x}
        y2={minuteTip.y}
        stroke="#d97706"
        strokeWidth={4}
        strokeLinecap="round"
      />

      <circle cx={cx} cy={cy} r={6} fill="#78350f" />
    </svg>
  );
}
