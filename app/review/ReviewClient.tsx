"use client";

import { useState } from "react";
import Link from "next/link";
import { useWeakQuestions, removeWeakQuestion } from "@/lib/weakQuestions";
import { recordAnswer } from "@/lib/abilities";

function RevealRow({ genre, question, answer, explanation }: { genre: string; question: string; answer: string; explanation: string }) {
  const [revealed, setRevealed] = useState(false);
  const [cleared, setCleared] = useState(false);

  if (cleared) return null;

  return (
    <li className="bg-white rounded-2xl shadow p-5">
      <p className="text-xs font-bold text-orange-400 mb-1">{genre}</p>
      <p className="text-lg mb-2">{question}</p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="text-sm font-bold text-orange-500 hover:underline"
        >
          こたえを見る
        </button>
      ) : (
        <>
          <div className="text-green-700 font-bold text-sm">こたえ：{answer}</div>
          <div className="text-gray-600 text-sm mt-1 mb-3">🔍 かいせつ：{explanation}</div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                recordAnswer(genre, true);
                removeWeakQuestion(genre, question);
                setCleared(true);
              }}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-sm transition"
            >
              ✅ できた！リストから外す
            </button>
            <button
              onClick={() => removeWeakQuestion(genre, question)}
              className="text-xs text-gray-400 hover:text-red-500 px-2"
            >
              削除
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default function ReviewClient() {
  const items = useWeakQuestions();

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold text-orange-700 mb-2">📌 ふくしゅうリスト</h1>
        <p className="text-sm text-gray-500 mb-8">
          「🤔むずかしかった」を選んだ問題が、ここに集まります。この端末のブラウザに保存されています。
        </p>

        {items.length === 0 && (
          <div className="bg-white rounded-2xl shadow p-8 text-center text-gray-500">
            <p className="text-4xl mb-3">🎉</p>
            <p>今はふくしゅうする問題がありません。</p>
            <Link href="/" className="inline-block mt-4 text-orange-600 font-bold hover:underline">
              ドリルに挑戦する →
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <ul className="space-y-3">
            {items.map((item) => (
              <RevealRow key={`${item.genre}-${item.question}`} {...item} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
