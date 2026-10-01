"use client";

import { useEffect } from "react";
import { recordToday, useStickerDates } from "@/lib/stickers";

const STICKERS = ["🌟", "🍭", "🎈", "🍀", "🌈", "🍓", "🐣", "🧸"];

export default function StickerBoard() {
  // 「今日来た」という記録（書き込み）はマウント時に一度だけ行う副作用なのでuseEffectでよい。
  // 表示用の値はuseStickerDates（useSyncExternalStore）でクライアントの実際の値に同期する。
  useEffect(() => {
    recordToday();
  }, []);

  const dates = useStickerDates();
  const count = dates.length;
  const shown = Math.min(count, 30);

  if (count === 0) return null;

  return (
    <div className="print-hide bg-white rounded-3xl shadow p-5 mb-6">
      <p className="font-bold text-orange-600 mb-2">
        🎉 がんばりシール {count}まい
      </p>
      <div className="flex flex-wrap gap-1 text-2xl leading-none">
        {Array.from({ length: shown }).map((_, i) => (
          <span key={i}>{STICKERS[i % STICKERS.length]}</span>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        来た日ぶんだけ増えていきます。お休みしても減りません。
      </p>
    </div>
  );
}
