"use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";
import { generate5Questions } from "../data/generate5";
import { getDailyQuestions } from "../data/getDailyQuestions";

export const metadata: Metadata = {
  title: "5歳向け無料知育ドリル",
  description:
    "5歳向け無料知育ドリル。算数・論理・ひらがな・仲間分けなど毎日10問。印刷OK。",
  alternates: {
    canonical: "/5",
  },
};

export default function FivePage() {

  const [showAnswer, setShowAnswer] = useState(false);

  // ★ここ重要：毎回生成しない
  const data = useMemo(() => generate5Questions(), []);

  // ★seedを固定（1日単位）
  const seed = useMemo(() => {
    return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  }, []);

  const sansu = getDailyQuestions(data.sansu, 2, seed + 0);
  const ronri = getDailyQuestions(data.ronri, 2, seed + 100);
  const pattern = getDailyQuestions(data.pattern, 2, seed + 200);
  const hiragana = getDailyQuestions(data.hiragana, 2, seed + 300);
  const nakamawake = getDailyQuestions(data.nakamawake, 2, seed + 400);

  const questions = [
    ...sansu,
    ...ronri,
    ...pattern,
    ...hiragana,
    ...nakamawake,
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="bg-gradient-to-r from-sky-200 to-blue-200 rounded-3xl p-8 shadow-lg mb-8">
          <div className="text-6xl mb-4">🚀</div>

          <h1 className="text-4xl font-extrabold text-blue-700 mb-3">
            5さいドリル
          </h1>

          <p className="text-lg">
            きょうの10もんにちょうせん！
          </p>
        </div>

        <div className="grid gap-5">

          {questions.map((q, index) => (
            <div key={index} className="bg-white rounded-3xl shadow p-6">

              <div className="text-lg font-bold mb-2 text-blue-600">
                {q.genre}
              </div>

              <div className="text-xl leading-8">
                {index + 1}. {q.question}
              </div>

              {showAnswer && (
                <div className="mt-4 text-green-700 font-bold text-lg">
                  こたえ：{q.answer}
                </div>
              )}

            </div>
          ))}

        </div>

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="mt-8 w-full bg-blue-500 text-white p-4 rounded-2xl font-bold text-lg"
        >
          {showAnswer ? "こたえをかくす" : "こたえを見る"}
        </button>

      </div>
    </main>
  );
}