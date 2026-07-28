type Point = [number, number];

type DotFigure = {
  gridSize: number;
  lines: [Point, Point][];
};

type Props = {
  figure: DotFigure;
};

const CELL = 32; // てんとてんの間かく
const PAD = 16;
const DOT_R = 3.5;

function DotGrid({
  gridSize,
  lines,
}: {
  gridSize: number;
  lines?: [Point, Point][];
}) {
  const size = gridSize * CELL + PAD * 2;
  const dots: Point[] = [];
  for (let r = 0; r <= gridSize; r++) {
    for (let c = 0; c <= gridSize; c++) {
      dots.push([r, c]);
    }
  }

  const toXY = ([r, c]: Point) => [PAD + c * CELL, PAD + r * CELL];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="てんのグリッド">
      {lines?.map(([a, b], i) => {
        const [x1, y1] = toXY(a);
        const [x2, y2] = toXY(b);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#2563eb"
            strokeWidth={3}
            strokeLinecap="round"
          />
        );
      })}
      {dots.map(([r, c], i) => {
        const [x, y] = toXY([r, c]);
        return <circle key={i} cx={x} cy={y} r={DOT_R} fill="#94a3b8" />;
      })}
    </svg>
  );
}

/**
 * 見本の図形（点を線でむすんだ形）と、同じ大きさの空のグリッドを横にならべて表示する。
 * 子どもは、右がわの空のグリッドに、左の見本と同じ形を（紙の上で）かきうつす。
 */
export default function DotFigureCopy({ figure }: Props) {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap mb-3">
      <div className="flex flex-col items-center gap-1">
        <DotGrid gridSize={figure.gridSize} lines={figure.lines} />
        <span className="text-xs text-gray-500">てほん</span>
      </div>
      <span className="text-2xl text-gray-400">→</span>
      <div className="flex flex-col items-center gap-1">
        <DotGrid gridSize={figure.gridSize} />
        <span className="text-xs text-gray-500">ここに かいてね</span>
      </div>
    </div>
  );
}
