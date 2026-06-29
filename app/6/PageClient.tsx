"use client";

import { useMemo, useState } from "react";
import { generate6Questions } from "../data/generate6";
import { getDailyQuestions } from "../data/getDailyQuestions";

export default function PageClient() {
  const [showAnswer, setShowAnswer] = useState(false);

  const data = useMemo(() => generate6Questions(), []);

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
    <>
      <div className="max-w-5xl mx-auto px-6 pb-10">

        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-purple-200 to-indigo-200 rounded-3xl p-8 shadow-lg mb-8">

          <div className="text-6xl mb-4">
            🎓
          </div>

          <h1 className="text-4xl font-extrabold text-indigo-800 mb-3">
            6さいドリル
          </h1>

          <p className="text-lg text-indigo-700">
            きょうの10もんにちょうせん！
          </p>

        </div>

        {/* 問題 */}
        <div className="grid gap-5">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow p-6"
            >

              <div className="text-lg font-bold mb-2 text-indigo-600">
                {q.genre}
              </div>

              <div className="text-xl leading-8">
                {index + 1}. {q.question}
              </div>

              {showAnswer && (

                <div className="mt-4 text-indigo-700 font-bold text-lg">
                  こたえ：{q.answer}
                </div>

              )}

            </div>

          ))}

        </div>

        {/* ボタン */}
        <div className="mt-8">

          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full bg-indigo-500 text-white p-4 rounded-2xl font-bold text-lg"
          >
            {showAnswer
              ? "こたえをかくす"
              : "こたえを見る"}
          </button>

        </div>

      </div>
    </>
  );
}