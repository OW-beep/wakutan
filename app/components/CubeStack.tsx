type Props = {
  heights: number[][];
};

const W = 26; // 立方体の半分の横はば
const H = 13; // 上の面（ひし形）のたて半分
const DZ = 32; // 立方体1こぶんの たての高さ

const TOP_FILL = "#fde68a";
const LEFT_FILL = "#f59e0b";
const RIGHT_FILL = "#d97706";
const STROKE = "#92400e";

function CubeUnit({ x, y }: { x: number; y: number }) {
  const top = `${x},${y} ${x + W},${y - H} ${x},${y - 2 * H} ${x - W},${y - H}`;
  const left = `${x},${y} ${x - W},${y - H} ${x - W},${y - H + DZ} ${x},${y + DZ}`;
  const right = `${x},${y} ${x},${y + DZ} ${x + W},${y - H + DZ} ${x + W},${y - H}`;

  return (
    <g>
      <polygon points={left} fill={LEFT_FILL} stroke={STROKE} strokeWidth={1.5} />
      <polygon points={right} fill={RIGHT_FILL} stroke={STROKE} strokeWidth={1.5} />
      <polygon points={top} fill={TOP_FILL} stroke={STROKE} strokeWidth={1.5} />
    </g>
  );
}

/**
 * 高さマップ（heights[row][col]）から、立方体をつみあげたイラストを
 * ななめ上から見たイメージ（等角投影）で描く。
 *
 * このサイトの「つみき」問題では、かくれて見えない立方体が出てこないように
 * 高さ・れつ数をおさえているので、見えているままの数を数えれば答えになる。
 */
export default function CubeStack({ heights }: Props) {
  const cubes: { x: number; y: number; row: number; col: number; layer: number }[] = [];

  heights.forEach((rowArr, row) => {
    rowArr.forEach((h, col) => {
      for (let layer = 0; layer < h; layer++) {
        const x = (col - row) * W;
        const y = (col + row) * H - layer * DZ;
        cubes.push({ x, y, row, col, layer });
      }
    });
  });

  if (cubes.length === 0) return null;

  // 奥（row+colが小さい）から手前へ、下の段から上の段へ の順でぬりつぶす
  cubes.sort((a, b) => (a.row + a.col - (b.row + b.col)) || (a.layer - b.layer));

  const minX = Math.min(...cubes.map(c => c.x - W)) - 6;
  const maxX = Math.max(...cubes.map(c => c.x + W)) + 6;
  const minY = Math.min(...cubes.map(c => c.y - 2 * H)) - 6;
  const maxY = Math.max(...cubes.map(c => c.y + DZ)) + 6;

  const vbWidth = maxX - minX;
  const vbHeight = maxY - minY;
  const displayWidth = Math.min(220, vbWidth * 2.2);
  const displayHeight = displayWidth * (vbHeight / vbWidth);

  return (
    <svg
      width={displayWidth}
      height={displayHeight}
      viewBox={`${minX} ${minY} ${vbWidth} ${vbHeight}`}
      role="img"
      aria-label="つみきのイラスト"
    >
      {cubes.map((c, i) => (
        <g key={i}>
          <CubeUnit x={c.x} y={c.y} />
        </g>
      ))}
    </svg>
  );
}
