"use client";

import { useClientOnlyValue } from "@/lib/useClientOnlyValue";

function daysUntilNextApril1(): number {
  const now = new Date();
  const year = now.getMonth() < 3 ? now.getFullYear() : now.getFullYear() + 1;
  const target = new Date(year, 3, 1); // 4月1日（月は0始まりなので3）
  const diffMs = target.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export default function EntranceCountdown() {
  const days = useClientOnlyValue(daysUntilNextApril1, null);

  if (days === null) return null;

  return (
    <div className="print-hide bg-white rounded-3xl shadow p-5 mb-6 text-center">
      <p className="text-sm text-gray-500 mb-1">🌸 小学校入学まで</p>
      <p className="text-3xl font-extrabold text-blue-600">あと{days}日</p>
    </div>
  );
}
