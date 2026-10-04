"use client";

import { useEffect, useRef, useState } from "react";
import { STAT_ORDER, STAT_LABEL, STAT_COLOR, useAbilityStats } from "@/lib/abilities";

const SIZE = 220;
const CENTER = SIZE / 2;
const MAX_R = 85;

function pointFor(index: number, value: number): [number, number] {
  const angle = (Math.PI / 3) * index - Math.PI / 2; // 12時方向から時計回り60度ずつ
  const r = (value / 100) * MAX_R;
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)];
}

function labelPointFor(index: number): [number, number] {
  const angle = (Math.PI / 3) * index - Math.PI / 2;
  const r = MAX_R + 22;
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)];
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
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
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
          const [x, y] = labelPointFor(i);
          return (
            <text
              key={k}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={11}
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
