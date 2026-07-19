"use client";

import { useState } from "react";
import ClockFace from "./ClockFace";

type Question = {
  genre: string;
  question: string;
  answer: string;
  explanation: string;
  clock?: { hour: number; minute: number };
};

type Props = {
  questions: Question[];
  accentText: string;
  accentButton: string;
};

export default function QuestionList({
  questions,
  accentText,
  accentButton,
}: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <style jsx global>{`
        @media print {
          button {
            display: none;
          }

          .print-hide {
            display: none;
          }
        }
      `}</style>

      <div className="space-y-4">

        {questions.map((q, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow"
          >

            <div className={`font-bold mb-2 ${accentText}`}>
              問題 {index + 1}
            </div>

            {q.clock && (
              <div className="flex justify-center mb-3">
                <ClockFace hour={q.clock.hour} minute={q.clock.minute} />
              </div>
            )}

            <div className="text-lg mb-2">
              {q.question}
            </div>

            {showAnswer && (
              <div className="mt-3 pt-3 border-t border-dashed">
                <div className="text-green-700 font-bold">
                  こたえ：{q.answer}
                </div>
                <div className="text-gray-600 text-sm mt-1">
                  🔍 かいせつ：{q.explanation}
                </div>
              </div>
            )}

          </div>

        ))}

      </div>

      <div className="mt-6 print-hide">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className={`w-full text-white p-4 rounded-2xl font-bold text-lg transition wt-btn-pop ${accentButton}`}
        >
          {showAnswer ? "こたえをかくす" : "こたえ・かいせつを見る"}
        </button>
      </div>
    </>
  );
}
