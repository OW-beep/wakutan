"use client";

import StickerBoard from "@/app/components/StickerBoard";
import SpeakButton from "@/app/components/SpeakButton";
import AbilityPanel from "@/app/components/AbilityPanel";
import PrintHeader from "@/app/components/PrintHeader";
import PatternQuestion, { speakTextFor } from "@/app/components/PatternQuestion";
import AnswerReveal from "@/app/components/AnswerReveal";
import FigureQuestion, { FigureAnswer } from "@/app/components/FigureQuestion";

import { useMemo } from "react";
import { generate4Questions } from "../data/generate4";
import { pickDailyPreview } from "../data/dailyPreview";
import MoneyIllustration from "../components/MoneyIllustration";
import CubeStack from "../components/CubeStack";
import DotFigureCopy from "../components/DotFigureCopy";

export default function PageClient() {
  const data = useMemo(() => generate4Questions(), []);

  // 「毎日10問」の表記どおり、その日ごとにジャンルをローテーションしながら
  // ちょうど10問だけをえらぶ（ジャンルが増えても表示件数は10問のまま）
  const questions = useMemo(
    () =>
      pickDailyPreview(
        {
          sansu: data.sansu,
          ronri: data.ronri,
          pattern: data.pattern,
          hiragana: data.hiragana,
          nakamawake: data.nakamawake,
          kurabekko: data.kurabekko,
          nakamahazure: data.nakamahazure,
          nazonazo: data.nazonazo,
          okane: data.okane,
          tsumiki: data.tsumiki,
          onajikatachi: data.onajikatachi,
          kaiten: data.kaiten,
          sentaisho: data.sentaisho,
          mikata: data.mikata,
          keiyoushi: data.keiyoushi,
        },
        10
      ),
    [data]
  );

  return (
    <>
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

        <PrintHeader total={questions.length} />

        <AbilityPanel />
        <StickerBoard />

        {/* 問題 */}
        <div className="grid gap-5">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow p-6 print-avoid-break"
            >
              <div className="text-lg font-bold mb-3">
                {q.genre}
              </div>

              {q.money && <MoneyIllustration items={q.money} />}

              {q.cubes && (
                <div className="flex justify-center mb-3">
                  <CubeStack heights={q.cubes} />
                </div>
              )}

              {q.dotFigure && <DotFigureCopy figure={q.dotFigure} />}

              {q.figure && <FigureQuestion figure={q.figure} />}

              <div className="text-xl leading-8 flex items-start gap-2">
                <PatternQuestion genre={q.genre} question={q.question} />
                <SpeakButton text={speakTextFor(q.genre, q.question)} />
              </div>

              <AnswerReveal
                genre={q.genre}
                question={q.question}
                answer={q.answer}
                explanation={q.explanation}
                accentButton="bg-orange-500 hover:bg-orange-600"
                extra={q.figure ? <FigureAnswer figure={q.figure} /> : undefined}
              />
            </div>
          ))}
        </div>

        {/* ボタン */}
        <div className="mt-8 print-hide">
          <button
            onClick={() => window.print()}
            className="w-full bg-green-500 text-white p-4 rounded-2xl font-bold text-lg transition wt-btn-pop"
          >
            🖨 印刷する
          </button>
        </div>

        {/* 保護者向け */}
        <div className="mt-10 bg-white rounded-3xl shadow p-8 print-hide">
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