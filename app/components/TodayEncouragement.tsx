"use client";

import { getTodayEncouragement } from "@/app/data/encouragementMessages";
import { useClientOnlyValue } from "@/lib/useClientOnlyValue";

export default function TodayEncouragement() {
  const message = useClientOnlyValue(getTodayEncouragement, null);

  if (!message) return null;

  return (
    <div className="print-hide bg-orange-50 border border-orange-100 rounded-2xl px-5 py-4 mb-6 text-center">
      <p className="text-xs font-bold text-orange-400 mb-1">💌 今日のひとこと</p>
      <p className="text-orange-700 font-bold">{message}</p>
    </div>
  );
}
