"use client";

import { useState } from "react";
import AbilityHexagon from "./AbilityHexagon";
import ProgressPath from "./ProgressPath";
import Link from "next/link";

export default function AbilityPanel() {
  const [open, setOpen] = useState(true);

  return (
    <div className="print-hide bg-white rounded-3xl shadow p-5 mb-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between"
      >
        <p className="font-bold text-orange-600">📊 のうりょくステータス</p>
        <span className="text-gray-400 text-sm">{open ? "とじる ▲" : "ひらく ▼"}</span>
      </button>

      {open && (
        <div className="mt-4">
          <div className="flex justify-center mb-4">
            <AbilityHexagon />
          </div>

          <ProgressPath />

          <div className="mt-4 text-center">
            <Link href="/review" className="text-sm text-orange-500 font-bold hover:underline">
              📌 ふくしゅうリストを見る →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
