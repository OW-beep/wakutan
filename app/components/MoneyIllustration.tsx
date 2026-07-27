import { ITEM_EMOJI } from "../data/moneyParser";

type MoneyChip = {
  value: number;
  count: number;
  role?: "price" | "paid";
  item?: string;
};

type Props = {
  items: MoneyChip[];
  size?: number;
};

// じっさいにある硬貨・お札のいろ（実在する金種のみ）
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

const REAL_COIN_VALUES = new Set(Object.keys(COIN_STYLE).map(Number));
const REAL_BILL_VALUES = new Set(Object.keys(BILL_STYLE).map(Number));
const DEFAULT_ITEM_EMOJI = "🎁";

function Coin({ value, size = 52 }: { value: number; size?: number }) {
  const c = COIN_STYLE[value];

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={`${value}円玉`}>
      <circle cx={50} cy={50} r={44} fill={c.fill} stroke={c.ring} strokeWidth={4} />
      {c.hole && (
        <circle cx={50} cy={50} r={13} fill="white" stroke={c.ring} strokeWidth={3} />
      )}
      <text
        x={50}
        y={c.hole ? 76 : 58}
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

function Bill({ value, size = 70 }: { value: number; size?: number }) {
  const style = BILL_STYLE[value];
  const width = size;
  const height = size * 0.5;

  return (
    <svg width={width} height={height} viewBox="0 0 140 70" role="img" aria-label={`${value}円さつ`}>
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
      <text x={34} y={41} textAnchor="middle" fontSize={13} fontWeight={700} fill={style.band}>
        ¥
      </text>
      <text x={92} y={42} textAnchor="middle" fontSize={20} fontWeight={700} fill={style.band}>
        {value}
      </text>
    </svg>
  );
}

// 実在する硬貨・お札ならその形、そうでなければ安全なフォールバック表示にする
// （役割の判定に関わらず、金額の表示はすべてここを通す）
function MoneyShape({ value }: { value: number }) {
  if (REAL_COIN_VALUES.has(value)) return <Coin value={value} />;
  if (REAL_BILL_VALUES.has(value)) return <Bill value={value} />;
  return <GenericAmount value={value} count={1} />;
}

// 「はらう お金」は、コイン／お札の上に手のイラストと矢印を added して、
// 「これを だす」という動きが伝わるようにする。
function PaidMoney({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-2xl" role="img" aria-label="てで だす">
        ✋
      </span>
      <span className="text-xl text-gray-400">→</span>
      <div className="flex flex-wrap justify-center gap-1">
        {Array.from({ length: count }).map((_, j) => (
          <div key={j}>
            <MoneyShape value={value} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 品物の「ねだん」は、コインの形にせず、品物そのものの絵文字＋名前＋ねだんで表示する。
// コインの形にしてしまうと「250円玉」のような実在しない硬貨に見えてしまうため。
function PriceItem({ value, count, item }: { value: number; count: number; item?: string }) {
  const emoji = (item && ITEM_EMOJI[item]) || DEFAULT_ITEM_EMOJI;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-1 text-4xl leading-none">
        {Array.from({ length: count }).map((_, j) => (
          <span key={j} role="img" aria-label={item ?? "しなもの"}>
            {emoji}
          </span>
        ))}
      </div>
      {item && <span className="text-xs text-gray-500 mt-1">{item}</span>}
      <span className="text-sm font-bold text-gray-700">{value}円</span>
    </div>
  );
}

// 役割がはっきりしない金額（実在する硬貨・お札でもない場合）のための、
// くずれない安全な表示。丸/四角どちらの形にも寄せず、ニュートラルな見た目にする。
function GenericAmount({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {Array.from({ length: count }).map((_, j) => (
        <span
          key={j}
          className="inline-flex items-center justify-center px-2 py-1 rounded-lg bg-gray-100 border border-gray-300 text-sm font-bold text-gray-600"
        >
          {value}円
        </span>
      ))}
    </div>
  );
}

const ROLE_LABEL = {
  price: "ねだん",
  paid: "だす おかね",
} as const;

export default function MoneyIllustration({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center items-end gap-3 mb-3">
      {items.map((item, i) => {
        if (item.role === "price") {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200"
            >
              <span className="text-xs font-bold text-gray-500">{ROLE_LABEL.price}</span>
              <PriceItem value={item.value} count={item.count} item={item.item} />
            </div>
          );
        }

        if (item.role === "paid") {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200"
            >
              <span className="text-xs font-bold text-gray-500">{ROLE_LABEL.paid}</span>
              <PaidMoney value={item.value} count={item.count} />
            </div>
          );
        }

        // 役割がはっきりしない（単純な合計・比較など）ときは、
        // 実在する硬貨・お札ならそのまま、そうでなければ安全なフォールバック表示にする
        return (
          <div key={i} className="flex flex-wrap justify-center gap-1">
            {Array.from({ length: item.count }).map((_, j) => (
              <div key={j}>
                <MoneyShape value={item.value} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
