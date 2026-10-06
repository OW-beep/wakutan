"use client";
import AnswerLine, { needsAnswerLine } from "@/app/components/AnswerLine";

import StickerBoard from "@/app/components/StickerBoard";
import EntranceCountdown from "@/app/components/EntranceCountdown";
import SpeakButton from "@/app/components/SpeakButton";
import AbilityPanel from "@/app/components/AbilityPanel";
import PrintHeader from "@/app/components/PrintHeader";
import PatternQuestion, { speakTextFor } from "@/app/components/PatternQuestion";
import AnswerReveal from "@/app/components/AnswerReveal";
import FigureQuestion, { FigureAnswer } from "@/app/components/FigureQuestion";

import { useMemo } from "react";
import { generate6Questions } from "../data/generate6";
import { pickDailyPreview } from "../data/dailyPreview";
import ClockFace from "../components/ClockFace";
import MoneyIllustration from "../components/MoneyIllustration";
import CubeStack from "../components/CubeStack";
import DotFigureCopy from "../components/DotFigureCopy";

export default function PageClient() {
  const data = useMemo(() => generate6Questions(), []);

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
          moji: data.moji,
          tokei: data.tokei,
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
        <div className="print-hide bg-gradient-to-r from-purple-200 to-indigo-200 rounded-3xl p-8 shadow-lg mb-8">

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

        <PrintHeader total={questions.length} />

        <EntranceCountdown />
        <AbilityPanel />
        <StickerBoard />

        {/* 問題 */}
        <div className="grid gap-5 wt-daily-a4">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow p-6 print-avoid-break"
            >

              <div className="text-lg font-bold mb-2 text-indigo-600">
                {q.genre}
              </div>

              {q.clock && (
                <div className="flex justify-center mb-2">
                  <ClockFace hour={q.clock.hour} minute={q.clock.minute} />
                </div>
              )}

              {q.money && (
                <div className="wt-money">
                  <MoneyIllustration items={q.money} />
                </div>
              )}

              {q.cubes && (
                <div className="flex justify-center mb-3 wt-cube">
                  <CubeStack heights={q.cubes} />
                </div>
              )}

              {q.dotFigure && (
                <div className="wt-dots">
                  <DotFigureCopy figure={q.dotFigure} />
                </div>
              )}

              {q.figure && <FigureQuestion figure={q.figure} />}

              <div className="text-xl leading-8 flex items-start gap-2">
                <PatternQuestion genre={q.genre} question={q.question} prefix={`${index + 1}. `} />
                <SpeakButton text={speakTextFor(q.genre, q.question)} />
              </div>

              {needsAnswerLine(q) && <AnswerLine />}

              <AnswerReveal
                genre={q.genre}
                question={q.question}
                answer={q.answer}
                explanation={q.explanation}
                accentButton="bg-indigo-500 hover:bg-indigo-600"
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
            6歳は小学校入学に向けて、考える力や学習習慣を身につける大切な時期です。
            数や文字だけでなく、論理的に考える力や集中して取り組む力も少しずつ育てていきましょう。
            毎日5〜10分程度の学習を続けることで、自信を持って入学を迎える準備につながります。
          </p>

        </div>

      </div>
    </>
  );
}