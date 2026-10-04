"use client";

import { useEffect, useRef } from "react";
import { STAGES, CORRECT_PER_STAGE, getStageIndex, useTotalCorrect } from "@/lib/abilities";

export default function ProgressPath() {
  const totalCorrect = useTotalCorrect();
  const stageIndex = getStageIndex(totalCorrect);
  const current = STAGES[stageIndex];
  const nextNeeded = (stageIndex + 1) * CORRECT_PER_STAGE - totalCorrect;
  const isGoal = stageIndex === STAGES.length - 1;

  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [stageIndex]);

  return (
    <div className="print-hide">
      <p className="text-sm text-gray-500 mb-2">
        🗺️ 今は <span className="font-bold text-orange-600">{current.emoji} {current.name}</span>
        {!isGoal && <>　次のマスまであと{nextNeeded}問</>}
        {isGoal && <>　たんけんマップ　せいは！</>}
      </p>

      <div ref={scrollRef} className="overflow-x-auto pb-2">
        <div className="flex items-center gap-1 min-w-max px-1">
          {STAGES.map((s, i) => {
            const reached = i <= stageIndex;
            const isCurrent = i === stageIndex;
            return (
              <div key={s.name} className="flex items-center">
                <div
                  ref={isCurrent ? activeRef : undefined}
                  className={`flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 shrink-0 transition ${
                    reached
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 bg-gray-50 opacity-50"
                  } ${isCurrent ? "ring-4 ring-orange-200 scale-110" : ""}`}
                  title={s.name}
                >
                  <span className="text-lg">{s.emoji}</span>
                </div>
                {i < STAGES.length - 1 && (
                  <div className={`w-5 h-0.5 shrink-0 ${reached ? "bg-orange-300" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
