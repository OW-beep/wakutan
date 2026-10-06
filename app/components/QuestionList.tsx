"use client";

import ClockFace from "./ClockFace";
import MoneyIllustration from "./MoneyIllustration";
import CubeStack from "./CubeStack";
import DotFigureCopy from "./DotFigureCopy";
import SuiriScene from "./SuiriScene";
import ComparePeople from "./ComparePeople";
import FlagIcon from "./FlagIcon";
import EmojiRows from "./EmojiRows";
import SpeakButton from "./SpeakButton";
import AnswerReveal from "./AnswerReveal";

type Question = {
  genre: string;
  question: string;
  answer: string;
  explanation: string;
  clock?: { hour: number; minute: number };
  money?: { value: number; count: number }[];
  cubes?: number[][];
  dotFigure?: { gridSize: number; lines: [[number, number], [number, number]][] };
  suiriScene?: string;
  comparePeople?: string[];
  compareRows?: { emoji: string; count: number; counter?: string; label?: string }[];
  flagKey?: string;
  flagKeys?: string[];
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
  return (
    <>
      <div className="space-y-4">

        {questions.map((q, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow print-avoid-break"
          >

            <div className={`font-bold mb-2 ${accentText}`}>
              問題 {index + 1}
            </div>

            {q.clock && (
              <div className="flex justify-center mb-3">
                <ClockFace hour={q.clock.hour} minute={q.clock.minute} />
              </div>
            )}

            {q.money && <MoneyIllustration items={q.money} />}

            {q.cubes && (
              <div className="flex justify-center mb-3">
                <CubeStack heights={q.cubes} />
              </div>
            )}

            {q.dotFigure && <DotFigureCopy figure={q.dotFigure} />}

            {q.suiriScene && (
              <div className="flex justify-center mb-3">
                <SuiriScene scene={q.suiriScene} />
              </div>
            )}

            {q.comparePeople && <ComparePeople names={q.comparePeople} />}

            {q.compareRows && <EmojiRows rows={q.compareRows} />}

            {q.flagKey && !q.flagKeys && (
              <div className="flex justify-center mb-3">
                <FlagIcon flagKey={q.flagKey} />
              </div>
            )}

            {q.flagKey && q.flagKeys && (
              <div className="flex flex-col items-center gap-2 mb-3">
                <FlagIcon flagKey={q.flagKey} size={80} />
                <div className="text-xs text-gray-500">↓ こたえは どれかな？</div>
                <div className="flex justify-center gap-3 flex-wrap">
                  {q.flagKeys.map((k) => (
                    <FlagIcon key={k} flagKey={k} size={70} />
                  ))}
                </div>
              </div>
            )}

            {!q.flagKey && q.flagKeys && (
              <div className="flex justify-center gap-3 flex-wrap mb-3">
                {q.flagKeys.map((k) => (
                  <FlagIcon key={k} flagKey={k} size={80} />
                ))}
              </div>
            )}

            <div className="text-lg mb-2 flex items-start gap-2">
              <span className="flex-1">{q.question}</span>
              <SpeakButton text={q.question} />
            </div>

            <AnswerReveal
              genre={q.genre}
              question={q.question}
              answer={q.answer}
              explanation={q.explanation}
              accentButton={accentButton}
            />

          </div>

        ))}

      </div>
    </>
  );
}
