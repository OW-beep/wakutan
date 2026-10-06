"use client";

import { useState } from "react";
import { recordAnswer } from "@/lib/abilities";
import { addWeakQuestion, removeWeakQuestion } from "@/lib/weakQuestions";

type Props = {
  genre: string;
  question: string;
  answer: string;
  explanation: string;
  accentButton: string;
};

export default function AnswerReveal({ genre, question, answer, explanation, accentButton }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState<"correct" | "retry" | null>(null);

  function handleFeedback(correct: boolean) {
    recordAnswer(genre, correct);
    if (correct) {
      removeWeakQuestion(genre, question);
      setDone("correct");
    } else {
      addWeakQuestion({ genre, question, answer, explanation });
      setDone("retry");
    }
  }

  if (!revealed) {
    return (
      <div className="print-hide mt-3">
        <button
          onClick={() => setRevealed(true)}
          className={`text-white px-5 py-2 rounded-xl font-bold text-sm transition wt-btn-pop ${accentButton}`}
        >
          こたえ・かいせつを見る
        </button>
      </div>
    );
  }

  return (
    <div className="mt-3 pt-3 border-t border-dashed">
      <div className="text-green-700 font-bold">こたえ：{answer}</div>
      <div className="text-gray-600 text-sm mt-1">🔍 かいせつ：{explanation}</div>

      {done === null && (
        <div className="print-hide flex gap-2 mt-3">
          <button
            onClick={() => handleFeedback(true)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-sm transition"
          >
            ✅ できた
          </button>
          <button
            onClick={() => handleFeedback(false)}
            className="flex-1 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm transition"
          >
            🤔 むずかしかった
          </button>
        </div>
      )}

      {done === "correct" && (
        <p className="print-hide mt-3 text-sm font-bold text-green-600">
          🎉 のうりょくがアップしました！
        </p>
      )}
      {done === "retry" && (
        <p className="print-hide mt-3 text-sm font-bold text-orange-500">
          📌 ふくしゅうリストに追加しました。また後で挑戦してみよう！
        </p>
      )}
    </div>
  );
}
