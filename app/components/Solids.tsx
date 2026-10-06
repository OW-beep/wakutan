import type { Layer } from "../data/figureTypes";

/**
 * 立体（円柱・立方体・球・円すい）を積み重ねた図と、
 * 「うえから見た図」「よこから見た図」を描くSVG部品。
 * 色は hex 指定。lighten/darken で面ごとの明暗をつける。
 */

export const SOLID_COLORS = [
  "#ef4444", // あか
  "#3b82f6", // あお
  "#facc15", // きいろ
  "#22c55e", // みどり
  "#fb923c", // オレンジ
  "#a855f7", // むらさき
];

function mix(hex: string, to: number, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.round(v + (to - v) * f)
  );
  return `rgb(${ch[0]},${ch[1]},${ch[2]})`;
}
const lighten = (hex: string, f = 0.35) => mix(hex, 255, f);
const darken = (hex: string, f = 0.22) => mix(hex, 0, f);

const STROKE = "#334155";
const UNIT = 26;

/** 層のよこはば（ピクセル） */
export function layerWidth(w: 1 | 2 | 3): number {
  return UNIT * w + 14; // 40 / 66 / 92
}
/** 層のたかさ（ピクセル）。3D図・よこから図で共通 */
export function layerHeight(l: Layer): number {
  const ww = layerWidth(l.w);
  switch (l.kind) {
    case "cyl":
      return 30;
    case "cube":
      return ww;
    case "sphere":
      return ww;
    case "cone":
      return 44;
  }
}

function totalHeight(layers: Layer[]): number {
  return layers.reduce((s, l) => s + layerHeight(l), 0);
}

// ---------- 立体（ななめ上から見た図） ----------

function Solid3D({ l, cx, y }: { l: Layer; cx: number; y: number }) {
  // y は この層の「ゆか」（下）の位置。上に向かって描く
  const ww = layerWidth(l.w);
  const h = layerHeight(l);
  const L = cx - ww / 2;
  const R = cx + ww / 2;
  const top = y - h;
  const ry = Math.max(5, ww * 0.16);

  if (l.kind === "cyl") {
    return (
      <g stroke={STROKE} strokeWidth={1.5}>
        <path
          d={`M ${L} ${top} L ${L} ${y} A ${ww / 2} ${ry} 0 0 0 ${R} ${y} L ${R} ${top} Z`}
          fill={l.color}
        />
        <ellipse cx={cx} cy={top} rx={ww / 2} ry={ry} fill={lighten(l.color)} />
      </g>
    );
  }
  if (l.kind === "cube") {
    const d = Math.round(ww * 0.2);
    return (
      <g stroke={STROKE} strokeWidth={1.5} strokeLinejoin="round">
        <rect x={L - d / 2} y={top} width={ww} height={h} fill={l.color} />
        <polygon
          points={`${L - d / 2},${top} ${R - d / 2},${top} ${R + d / 2},${top - d * 0.7} ${L + d / 2},${top - d * 0.7}`}
          fill={lighten(l.color)}
        />
        <polygon
          points={`${R - d / 2},${top} ${R + d / 2},${top - d * 0.7} ${R + d / 2},${y - d * 0.7} ${R - d / 2},${y}`}
          fill={darken(l.color)}
        />
      </g>
    );
  }
  if (l.kind === "sphere") {
    const r = ww / 2;
    return (
      <g stroke={STROKE} strokeWidth={1.5}>
        <circle cx={cx} cy={y - r} r={r} fill={l.color} />
        <ellipse
          cx={cx - r * 0.35}
          cy={y - r * 1.35}
          rx={r * 0.22}
          ry={r * 0.14}
          fill="#ffffff"
          opacity={0.7}
          stroke="none"
        />
      </g>
    );
  }
  // cone
  return (
    <g stroke={STROKE} strokeWidth={1.5} strokeLinejoin="round">
      <path
        d={`M ${L} ${y} A ${ww / 2} ${ry} 0 0 0 ${R} ${y} L ${cx} ${top} Z`}
        fill={l.color}
      />
    </g>
  );
}

/** 立体を下から上へ積んだ「ななめ上から見た図」 */
export function SolidStack({ layers }: { layers: Layer[] }) {
  const W = 150;
  const H = totalHeight(layers) + 36;
  const cx = W / 2;
  // 各層の「ゆか」の位置（下から順に積みあげる）
  const floors: number[] = [];
  layers.reduce((acc, l) => {
    floors.push(acc);
    return acc - layerHeight(l);
  }, H - 14);
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="つみかさねた りったいの ず"
    >
      <ellipse cx={cx} cy={H - 10} rx={layerWidth(layers[0].w) / 2 + 10} ry={6} fill="#e2e8f0" />
      {layers.map((l, i) => (
        <Solid3D key={i} l={l} cx={cx} y={floors[i]} />
      ))}
    </svg>
  );
}

// ---------- うえから見た図 ----------

export function TopView({ layers, size = 110 }: { layers: Layer[]; size?: number }) {
  const c = size / 2;
  const scale = size / 110;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="うえから みた ず">
      {layers.map((l, i) => {
        const ww = layerWidth(l.w) * scale;
        const isSq = l.kind === "cube";
        return (
          <g key={i} stroke={STROKE} strokeWidth={1.5}>
            {isSq ? (
              <rect x={c - ww / 2} y={c - ww / 2} width={ww} height={ww} fill={l.color} />
            ) : (
              <circle cx={c} cy={c} r={ww / 2} fill={l.color} />
            )}
            {l.kind === "cone" && <circle cx={c} cy={c} r={2.5} fill={STROKE} />}
          </g>
        );
      })}
    </svg>
  );
}

// ---------- よこから見た図 ----------

export function SideView({ layers, size = 110 }: { layers: Layer[]; size?: number }) {
  const total = totalHeight(layers);
  const W = 110;
  const H = Math.max(total + 16, 70);
  const scale = size / 110;
  const floors: number[] = [];
  layers.reduce((acc, l) => {
    floors.push(acc);
    return acc - layerHeight(l);
  }, H - 8);
  return (
    <svg
      width={W * scale}
      height={H * scale}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="よこから みた ず"
    >
      {layers.map((l, i) => {
        const ww = layerWidth(l.w);
        const h = layerHeight(l);
        const L = W / 2 - ww / 2;
        const y = floors[i];
        return (
          <g key={i} stroke={STROKE} strokeWidth={1.5} strokeLinejoin="round">
            {l.kind === "cyl" || l.kind === "cube" ? (
              <rect x={L} y={y - h} width={ww} height={h} fill={l.color} />
            ) : l.kind === "sphere" ? (
              <circle cx={W / 2} cy={y - h / 2} r={ww / 2} fill={l.color} />
            ) : (
              <polygon points={`${L},${y} ${L + ww},${y} ${W / 2},${y - h}`} fill={l.color} />
            )}
          </g>
        );
      })}
    </svg>
  );
}
