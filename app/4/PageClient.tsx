"use client";

import { useMemo, useState } from "react";
import { generate4Questions } from "../data/generate4";

export default function PageClient() {
  const [showAnswer, setShowAnswer] = useState(false);

  const data = useMemo(() => generate4Questions(), []);

  const seed = useMemo(() => {
    return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  }, []);

  const questions = [
    data.sansu[seed % data.sansu.length],
    data.sansu[(seed + 1) % data.sansu.length],

    data.ronri[seed % data.ronri.length],
    data.ronri[(seed + 1) % data.ronri.length],

    data.pattern[seed % data.pattern.length],
    data.pattern[(seed + 1) % data.pattern.length],

    data.hiragana[seed % data.hiragana.length],
    data.hiragana[(seed + 1) % data.hiragana.length],

    data.nakamawake[seed % data.nakamawake.length],
    data.nakamawake[(seed + 1) % data.nakamawake.length],

    data.kurabekko[seed % data.kurabekko.length],
    data.nakamahazure[seed % data.nakamahazure.length],
    data.nazonazo[seed % data.nazonazo.length],
    data.okane[seed % data.okane.length],
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
        <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-3xl p-8 shadow-lg mb-8">
          <div className="text-6xl mb-4">🧸</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            4さいドリル
          </h1>

          <p className="text-lg">
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
              <div className="text-lg font-bold mb-3">
                {q.genre}
              </div>

              <div className="text-xl leading-8">
                {q.question}
              </div>

              {showAnswer && (
                <div className="mt-4">
                  <div className="text-green-700 font-bold text-lg">
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
            className="w-full bg-blue-500 text-white p-4 rounded-2xl font-bold text-lg transition wt-btn-pop"
          >
            {showAnswer ? "こたえをかくす" : "こたえを見る"}
          </button>

          <button
            onClick={() => window.print()}
            className="w-full mt-4 bg-green-500 text-white p-4 rounded-2xl font-bold text-lg transition wt-btn-pop"
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
            4歳は「数」「文字」「考える力」の土台を作る大切な時期です。
            長時間勉強する必要はありません。
            毎日5〜10分でも継続することで、
            学習習慣や考える力が育っていきます。
          </p>
        </div>
      </div>
    </>
  );
}