type MoneyChip = {
  value: number;
  count: number;
};

type Props = {
  items: MoneyChip[];
  size?: number;
};

// じっさいにある硬貨・お札のいろ
const COIN_STYLE: Record<number, { fill: string; ring: string; hole?: boolean }> = {
  1: { fill: "#f2f4f6", ring: "#b9c1c9" },
  5: { fill: "#e3b23c", ring: "#9c6f16", hole: true },
  10: { fill: "#cd8a4e", ring: "#8a551f" },
  50: { fill: "#d8dbdf", ring: "#8f969d", hole: true },
  100: { fill: "#dadde1", ring: "#8f969d" },
  500: { fill: "#cdaa4f", ring: "#8a6a1c" },
};

const BILL_STYLE: Record<number, { fill: string; band: string }> = {
  1000: { fill: "#aecbe8", band: "#3f6fa8" },
  5000: { fill: "#dcbcda", band: "#9c5a97" },
  10000: { fill: "#e0cd98", band: "#8a6d2e" },
};

function Coin({ value, size = 56 }: { value: number; size?: number }) {
  const style = COIN_STYLE[value];
  const isReal = Boolean(style);
  const c = style ?? { fill: "#f6e0ad", ring: "#c9973d", hole: false };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`${value}円`}
    >
      <circle cx={50} cy={50} r={44} fill={c.fill} stroke={c.ring} strokeWidth={4} />
      {c.hole && (
        <circle cx={50} cy={50} r={13} fill="white" stroke={c.ring} strokeWidth={3} />
      )}
      {!isReal && (
        <text
          x={50}
          y={30}
          textAnchor="middle"
          fontSize={16}
          fontWeight={700}
          fill={c.ring}
        >
          ¥
        </text>
      )}
      <text
        x={50}
        y={c.hole ? 76 : isReal ? 58 : 66}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={c.hole ? 16 : 20}
        fontWeight={700}
        fill={c.ring}
      >
        {value}
      </text>
    </svg>
  );
}

function Bill({ value, size = 76 }: { value: number; size?: number }) {
  const style = BILL_STYLE[value] ?? { fill: "#e6ddc9", band: "#8a7a55" };
  const width = size;
  const height = size * 0.5;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 70"
      role="img"
      aria-label={`${value}円さつ`}
    >
      <rect
        x={2}
        y={2}
        width={136}
        height={66}
        rx={8}
        fill={style.fill}
        stroke={style.band}
        strokeWidth={3}
      />
      <circle cx={34} cy={35} r={17} fill="white" stroke={style.band} strokeWidth={3} />
      <text
        x={34}
        y={41}
        textAnchor="middle"
        fontSize={13}
        fontWeight={700}
        fill={style.band}
      >
        ¥
      </text>
      <text
        x={92}
        y={42}
        textAnchor="middle"
        fontSize={20}
        fontWeight={700}
        fill={style.band}
      >
        {value}
      </text>
    </svg>
  );
}

export default function MoneyIllustration({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mb-3">
      {items.map((item, i) => {
        const isBill = item.value >= 1000;
        return Array.from({ length: item.count }).map((_, j) => (
          <div key={`${i}-${j}`}>
            {isBill ? <Bill value={item.value} /> : <Coin value={item.value} />}
          </div>
        ));
      })}
    </div>
  );
}
