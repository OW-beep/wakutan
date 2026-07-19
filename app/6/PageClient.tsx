"use client";

import { useMemo, useState } from "react";
import { generate6Questions } from "../data/generate6";
import { getDailyQuestions } from "../data/getDailyQuestions";
import ClockFace from "../components/ClockFace";

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
  const kurabekko = getDailyQuestions(data.kurabekko, 1, seed + 500);
  const nakamahazure = getDailyQuestions(data.nakamahazure, 1, seed + 600);
  const moji = getDailyQuestions(data.moji, 1, seed + 700);
  const tokei = getDailyQuestions(data.tokei, 1, seed + 800);

  const questions = [
    ...sansu,
    ...ronri,
    ...pattern,
    ...hiragana,
    ...nakamawake,
    ...kurabekko,
    ...nakamahazure,
    ...moji,
    ...tokei,
  ];

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

              {q.clock && (
                <div className="flex justify-center mb-2">
                  <ClockFace hour={q.clock.hour} minute={q.clock.minute} />
                </div>
              )}

              <div className="text-xl leading-8">
                {index + 1}. {q.question}
              </div>

              {showAnswer && (

                <div className="mt-4">
                  <div className="text-indigo-700 font-bold text-lg">
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

        {/* ボタン */}
        <div className="mt-8 print-hide">

          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full bg-indigo-500 text-white p-4 rounded-2xl font-bold text-lg"
          >
            {showAnswer
              ? "こたえをかくす"
              : "こたえを見る"}
          </button>

          <button
            onClick={() => window.print()}
            className="w-full mt-4 bg-green-500 text-white p-4 rounded-2xl font-bold text-lg"
          >
            🖨 印刷する
          </button>

        </div>

        {/* 保護者向け */}
        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            👨‍👩‍👧 保護者の方へ
          </h2>

          <p className="leading-8">
            6歳は小学校入学に向けて、考える力や学習習慣を身につける大切な時期です。
            数や文字だけでなく、論理的に考える力や集中して取り組む力も少しずつ育てていきましょう。
            毎日5〜10分程度の学習を続けることで、自信を持って入学を迎える準備につながります。
          </p>

        </div>

      </div>
    </>
  );
}