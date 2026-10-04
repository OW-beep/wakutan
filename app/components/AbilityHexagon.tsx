"use client";

import { useEffect, useRef, useState } from "react";
import { STAT_ORDER, STAT_LABEL, STAT_COLOR, useAbilityStats } from "@/lib/abilities";

// viewBoxの座標系。いちばん長いラベル「しゅうちゅう力」(7文字、fontSize16で
// 約120px)が左右にはみ出さないよう、グラフ本体(MAX_R)に対して十分な余白を取る。
const SIZE = 480;
const CENTER = SIZE / 2;
const MAX_R = 80;
const LABEL_R = MAX_R + 34;

function pointFor(index: number, value: number): [number, number] {
  const angle = (Math.PI / 3) * index - Math.PI / 2; // 12時方向から時計回り60度ずつ
  const r = (value / 100) * MAX_R;
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)];
}

/** ラベルの位置と、文字がはみ出さないようにするためのtext-anchorを返す */
function labelFor(index: number): { x: number; y: number; anchor: "start" | "middle" | "end" } {
  const angle = (Math.PI / 3) * index - Math.PI / 2;
  const x = CENTER + LABEL_R * Math.cos(angle);
  const y = CENTER + LABEL_R * Math.sin(angle);

  // 真上・真下（cosがほぼ0）は中央そろえ、右半分は左そろえ、左半分は右そろえにして
  // テキストが外側ではなく中心方向に伸びるようにし、viewBox外へのはみ出しを防ぐ
  const cos = Math.cos(angle);
  let anchor: "start" | "middle" | "end" = "middle";
  if (cos > 0.3) anchor = "start";
  else if (cos < -0.3) anchor = "end";

  return { x, y, anchor };
}

const GRID_LEVELS = [0.25, 0.5, 0.75, 1];

export default function AbilityHexagon() {
  const stats = useAbilityStats();
  const total = STAT_ORDER.reduce((sum, k) => sum + stats[k], 0);
  const prevTotal = useRef(total);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (total > prevTotal.current) {
      setPop(true);
      const t = setTimeout(() => setPop(false), 500);
      prevTotal.current = total;
      return () => clearTimeout(t);
    }
    prevTotal.current = total;
  }, [total]);

  const points = STAT_ORDER.map((k, i) => pointFor(i, stats[k]));
  const polygonPoints = points.map((p) => p.join(",")).join(" ");

  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[300px] h-auto">
        {/* 背景のグリッド（6角形を薄く重ねる） */}
        {GRID_LEVELS.map((level) => (
          <polygon
            key={level}
            points={STAT_ORDER.map((_, i) => pointFor(i, level * 100).join(",")).join(" ")}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={1}
          />
        ))}

        {/* 軸線 */}
        {STAT_ORDER.map((_, i) => {
          const [x, y] = pointFor(i, 100);
          return <line key={i} x1={CENTER} y1={CENTER} x2={x} y2={y} stroke="#e5e7eb" strokeWidth={1} />;
        })}

        {/* 実際のステータス */}
        <polygon
          points={polygonPoints}
          fill="#fb923c"
          fillOpacity={0.35}
          stroke="#f97316"
          strokeWidth={2}
          style={{
            transition: "transform 0.5s cubic-bezier(.34,1.56,.64,1)",
            transform: pop ? "scale(1.08)" : "scale(1)",
            transformOrigin: `${CENTER}px ${CENTER}px`,
          }}
        />

        {/* 各頂点の点 */}
        {STAT_ORDER.map((k, i) => {
          const [x, y] = points[i];
          return (
            <circle
              key={k}
              cx={x}
              cy={y}
              r={4}
              fill={STAT_COLOR[k]}
              style={{
                transition: "transform 0.5s cubic-bezier(.34,1.56,.64,1)",
                transform: pop ? "scale(1.4)" : "scale(1)",
                transformOrigin: `${x}px ${y}px`,
              }}
            />
          );
        })}

        {/* ラベル */}
        {STAT_ORDER.map((k, i) => {
          const { x, y, anchor } = labelFor(i);
          return (
            <text
              key={k}
              x={x}
              y={y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize={16}
              fontWeight={700}
              fill={STAT_COLOR[k]}
            >
              {STAT_LABEL[k]}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
