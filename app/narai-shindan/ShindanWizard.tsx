"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PURPOSES,
  PARENT_HOPES,
  INTERESTS,
  PERSONALITIES,
  BUDGET_OPTIONS,
  FREQUENCY_OPTIONS,
  ACCESS_OPTIONS,
  BURDEN_OPTIONS,
  NARAI_CATEGORIES,
  emptyAnswers,
  computeResults,
  analyzeGap,
  typeLabel,
  type ShindanAnswers,
  type InterestId,
  type PersonalityId,
  type CategoryResult,
} from "@/app/data/naraiShindan";

type Phase = "intro" | 1 | 2 | 3 | 4 | 5 | 6 | "result";

const INTEREST_GROUP_ORDER = ["身体", "表現", "知的活動", "興味対象", "社会性"];

function toggle<T>(arr: T[], id: T, max?: number): T[] {
  if (arr.includes(id)) return arr.filter((x) => x !== id);
  if (max && arr.length >= max) return arr;
  return [...arr, id];
}

export default function ShindanWizard() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<ShindanAnswers>(emptyAnswers);
  const [showReportTeaser, setShowReportTeaser] = useState(false);

  const results = useMemo(() => {
    if (phase !== "result") return [];
    return computeResults(answers);
  }, [phase, answers]);

  const gap = useMemo(() => {
    if (phase !== "result") return null;
    return analyzeGap(answers);
  }, [phase, answers]);

  const steps: Phase[] = [1, 2, 3, 4, 5, 6];
  const stepIndex = typeof phase === "number" ? steps.indexOf(phase) : -1;

  function goNext() {
    if (phase === "intro") return setPhase(1);
    if (typeof phase === "number" && phase < 6) return setPhase((phase + 1) as Phase);
    if (phase === 6) return setPhase("result");
  }

  function goBack() {
    if (typeof phase === "number" && phase > 1) return setPhase((phase - 1) as Phase);
    if (phase === 1) return setPhase("intro");
    if (phase === "result") return setPhase(6);
  }

  function restart() {
    setAnswers(emptyAnswers);
    setShowReportTeaser(false);
    setPhase("intro");
  }

  // ---- 各STEPの「次へ」を押せるかどうか ----
  const canProceed = (() => {
    switch (phase) {
      case 1:
        return answers.purposes.length > 0;
      case 2:
        return !!answers.primaryPurpose;
      case 3:
        return true; // 任意項目
      case 4:
        return answers.interests.length > 0;
      case 5:
        return answers.personalities.length > 0;
      case 6:
        return !!answers.budget && !!answers.frequency && !!answers.access && !!answers.burden;
      default:
        return true;
    }
  })();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {phase !== "intro" && phase !== "result" && (
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-orange-600 mb-2">
            <span>STEP {stepIndex + 1} / 6</span>
            <span>{Math.round(((stepIndex + 1) / 6) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
            <div
              className="h-2 bg-orange-400 rounded-full transition-all"
              style={{ width: `${((stepIndex + 1) / 6) * 100}%` }}
            />
          </div>
        </div>
      )}

      {phase === "intro" && (
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🧭</div>
          <h2 className="text-2xl font-bold mb-4">診断をはじめましょう</h2>
          <p className="text-gray-700 leading-7 mb-2">
            全部で6つの質問に答えるだけ。所要時間は3分ほどです。
          </p>
          <p className="text-gray-500 text-sm mb-8">
            回答はこの画面の中だけで使われ、送信・保存はされません。
          </p>
          <button
            onClick={goNext}
            className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition wt-btn-pop"
          >
            診断をスタートする →
          </button>
        </div>
      )}

      {phase === 1 && (
        <StepCard title="習い事を通して、どんなことを身につけてほしい？" note="いくつ選んでもOKです（最大4つ）">
          <div className="grid sm:grid-cols-2 gap-3">
            {PURPOSES.map((p) => (
              <ChoiceButton
                key={p.id}
                selected={answers.purposes.includes(p.id)}
                onClick={() =>
                  setAnswers((a) => ({
                    ...a,
                    purposes: toggle(a.purposes, p.id, 4),
                  }))
                }
              >
                {p.label}
              </ChoiceButton>
            ))}
          </div>
        </StepCard>
      )}

      {phase === 2 && (
        <StepCard title="この中で、一番大切なのは？" note="1つ選んでください">
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {answers.purposes.map((id) => {
              const p = PURPOSES.find((x) => x.id === id)!;
              return (
                <ChoiceButton
                  key={p.id}
                  selected={answers.primaryPurpose === p.id}
                  onClick={() =>
                    setAnswers((a) => ({
                      ...a,
                      primaryPurpose: p.id,
                      secondaryPurpose: a.secondaryPurpose === p.id ? null : a.secondaryPurpose,
                    }))
                  }
                >
                  {p.label}
                </ChoiceButton>
              );
            })}
          </div>

          {answers.primaryPurpose && (
            <>
              <h3 className="font-bold text-lg mb-3">次に大切なのは？（任意）</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {answers.purposes
                  .filter((id) => id !== answers.primaryPurpose)
                  .map((id) => {
                    const p = PURPOSES.find((x) => x.id === id)!;
                    return (
                      <ChoiceButton
                        key={p.id}
                        selected={answers.secondaryPurpose === p.id}
                        onClick={() =>
                          setAnswers((a) => ({
                            ...a,
                            secondaryPurpose: a.secondaryPurpose === p.id ? null : p.id,
                          }))
                        }
                      >
                        {p.label}
                      </ChoiceButton>
                    );
                  })}
              </div>
            </>
          )}
        </StepCard>
      )}

      {phase === 3 && (
        <StepCard title="保護者として、特に期待していることは？" note="いくつでも選べます（任意）">
          <div className="grid sm:grid-cols-2 gap-3">
            {PARENT_HOPES.map((hope) => (
              <ChoiceButton
                key={hope}
                selected={answers.parentHopes.includes(hope)}
                onClick={() =>
                  setAnswers((a) => ({
                    ...a,
                    parentHopes: toggle(a.parentHopes, hope),
                  }))
                }
              >
                {hope}
              </ChoiceButton>
            ))}
          </div>
        </StepCard>
      )}

      {phase === 4 && (
        <StepCard title="お子さんが好きなのはどんなこと？" note="いくつでも選べます">
          <div className="space-y-6">
            {INTEREST_GROUP_ORDER.map((group) => (
              <div key={group}>
                <p className="text-sm font-bold text-orange-600 mb-2">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.filter((i) => i.group === group).map((i) => (
                    <ChoiceChip
                      key={i.id}
                      selected={answers.interests.includes(i.id as InterestId)}
                      onClick={() =>
                        setAnswers((a) => ({
                          ...a,
                          interests: toggle(a.interests, i.id as InterestId),
                        }))
                      }
                    >
                      {i.label}
                    </ChoiceChip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </StepCard>
      )}

      {phase === 5 && (
        <StepCard title="お子さんに近いものを選んでください" note="いくつでも選べます">
          <div className="flex flex-wrap gap-2">
            {PERSONALITIES.map((p) => (
              <ChoiceChip
                key={p.id}
                selected={answers.personalities.includes(p.id as PersonalityId)}
                onClick={() =>
                  setAnswers((a) => ({
                    ...a,
                    personalities: toggle(a.personalities, p.id as PersonalityId),
                  }))
                }
              >
                {p.label}
              </ChoiceChip>
            ))}
          </div>
        </StepCard>
      )}

      {phase === 6 && (
        <StepCard title="ご家庭の条件を教えてください">
          <div className="space-y-8">
            <div>
              <p className="font-bold mb-3">月額予算</p>
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map((b) => (
                  <ChoiceChip
                    key={b.id}
                    selected={answers.budget === b.id}
                    onClick={() => setAnswers((a) => ({ ...a, budget: b.id }))}
                  >
                    {b.label}
                  </ChoiceChip>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold mb-3">通う頻度</p>
              <div className="flex flex-wrap gap-2">
                {FREQUENCY_OPTIONS.map((f) => (
                  <ChoiceChip
                    key={f.id}
                    selected={answers.frequency === f.id}
                    onClick={() => setAnswers((a) => ({ ...a, frequency: f.id }))}
                  >
                    {f.label}
                  </ChoiceChip>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold mb-3">通学・送迎</p>
              <div className="flex flex-wrap gap-2">
                {ACCESS_OPTIONS.map((a2) => (
                  <ChoiceChip
                    key={a2.id}
                    selected={answers.access === a2.id}
                    onClick={() => setAnswers((a) => ({ ...a, access: a2.id }))}
                  >
                    {a2.label}
                  </ChoiceChip>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold mb-3">保護者の送迎・付き添いの負担</p>
              <div className="flex flex-wrap gap-2">
                {BURDEN_OPTIONS.map((u) => (
                  <ChoiceChip
                    key={u.id}
                    selected={answers.burden === u.id}
                    onClick={() => setAnswers((a) => ({ ...a, burden: u.id }))}
                  >
                    {u.label}
                  </ChoiceChip>
                ))}
              </div>
            </div>
          </div>
        </StepCard>
      )}

      {phase !== "intro" && phase !== "result" && (
        <div className="flex justify-between mt-8">
          <button
            onClick={goBack}
            className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:text-gray-700 transition"
          >
            ← もどる
          </button>

          <button
            onClick={goNext}
            disabled={!canProceed}
            className={`px-8 py-3 rounded-xl font-bold transition wt-btn-pop ${
              canProceed
                ? "bg-orange-500 text-white hover:opacity-90"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {phase === 6 ? "診断する →" : "次へ →"}
          </button>
        </div>
      )}

      {phase === "result" && results.length > 0 && (
        <ResultView
          answers={answers}
          results={results}
          gap={gap}
          showReportTeaser={showReportTeaser}
          onOpenReportTeaser={() => setShowReportTeaser(true)}
          onRestart={restart}
          onBack={goBack}
        />
      )}
    </div>
  );
}

function StepCard({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {note && <p className="text-sm text-gray-500 mb-6">{note}</p>}
      {!note && <div className="mb-6" />}
      {children}
    </div>
  );
}

function ChoiceButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left px-4 py-3 rounded-2xl border-2 font-semibold transition ${
        selected
          ? "border-orange-400 bg-orange-50 text-orange-700"
          : "border-gray-200 bg-white text-gray-700 hover:border-orange-200"
      }`}
    >
      {selected ? "✅ " : ""}
      {children}
    </button>
  );
}

function ChoiceChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition ${
        selected
          ? "border-orange-400 bg-orange-400 text-white"
          : "border-gray-200 bg-white text-gray-600 hover:border-orange-200"
      }`}
    >
      {children}
    </button>
  );
}

const MEDAL = ["🥇", "🥈", "🥉"];

function ResultView({
  answers,
  results,
  gap,
  showReportTeaser,
  onOpenReportTeaser,
  onRestart,
  onBack,
}: {
  answers: ShindanAnswers;
  results: CategoryResult[];
  gap: ReturnType<typeof analyzeGap> | null;
  showReportTeaser: boolean;
  onOpenReportTeaser: () => void;
  onRestart: () => void;
  onBack: () => void;
}) {
  const top3 = results.slice(0, 3);
  const first = top3[0];

  const primaryLabel = PURPOSES.find((p) => p.id === answers.primaryPurpose)?.label;
  const secondaryLabel = PURPOSES.find((p) => p.id === answers.secondaryPurpose)?.label;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl shadow-lg p-8 text-center">
        <p className="text-sm font-bold text-orange-600 mb-2">診断結果</p>
        <h2 className="text-3xl font-extrabold text-orange-700 mb-4">
          {typeLabel(answers, first)}
        </h2>

        <div className="flex justify-center gap-6 text-sm">
          {primaryLabel && (
            <p>
              🥇 {primaryLabel}
            </p>
          )}
          {secondaryLabel && (
            <p>
              🥈 {secondaryLabel}
            </p>
          )}
        </div>
      </div>

      {gap?.hasGap && (
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-2xl p-6">
          <p className="font-bold mb-2">💡 こんな組み合わせも考えられます</p>
          <p className="leading-7 text-gray-700">
            保護者の目的と、お子さんが好きなことの傾向が、少し違う方向を向いているようです。
            目的だけに絞らず、お子さんが楽しみながら取り組める方法も比べてみると、
            続けやすい選択肢が見つかりやすくなります。
          </p>
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold mb-4">🏆 おすすめTOP3</h3>

        <div className="space-y-4">
          {top3.map((r, i) => (
            <div key={r.category.key} className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{MEDAL[i]}</span>
                <span className="text-3xl">{r.category.emoji}</span>
                <div className="flex-1">
                  <p className="font-bold text-xl">{r.category.name}</p>
                  <p className="text-sm text-gray-500">相性スコア {r.score}点</p>
                </div>
              </div>

              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {r.reasons.map((reason, idx) => (
                  <li key={idx}>・{reason}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {first && (
        <div className="bg-white rounded-3xl shadow p-8">
          <h3 className="text-2xl font-bold mb-4">
            ★ まずは{first.category.name}の体験から
          </h3>
          <p className="leading-7 text-gray-700 mb-6">{first.reasons[0]}</p>

          <h4 className="font-bold text-lg mb-3">🌱 将来へのつながり（簡易版）</h4>
          <div className="space-y-3 text-sm">
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="font-bold text-orange-700 mb-1">今：4〜6歳</p>
              <p className="text-gray-700">{first.category.lifeStage.now}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="font-bold text-yellow-700 mb-1">小学生になったら</p>
              <p className="text-gray-700">{first.category.lifeStage.elementary}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-bold text-blue-700 mb-1">中学生になったら</p>
              <p className="text-gray-700">{first.category.lifeStage.junior}</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※これは将来の成果を保証するものではなく、経験が活かせる可能性のある場面の一例です。
          </p>
        </div>
      )}

      {/* 有料詳細レポート導線 */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-dashed border-orange-200">
        <h3 className="text-2xl font-bold mb-3">📄 わが子の習い事選び 詳細レポート</h3>
        <p className="text-gray-700 leading-7 mb-4">
          おすすめTOP5・親子の希望のギャップ分析・研究から見る根拠・
          小学生〜中学生までのつながりなど、より詳しい内容を1つのレポートにまとめています。
        </p>

        {!showReportTeaser ? (
          <button
            onClick={onOpenReportTeaser}
            className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            詳細レポートを見る（¥980）→
          </button>
        ) : (
          <div className="bg-orange-50 rounded-2xl p-6">
            <p className="font-bold mb-2">🚧 詳細レポートは現在準備中です</p>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              「わが子の習い事選び 詳細レポート」（¥980）は近日公開予定です。
              公開時にお知らせが欲しい方は、お問い合わせフォームよりご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition text-sm"
            >
              公開時のお知らせを希望する
            </Link>
          </div>
        )}
      </div>

      <div className="text-center space-x-4">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:text-gray-700 transition"
        >
          ← 回答を修正する
        </button>
        <button
          onClick={onRestart}
          className="px-6 py-3 rounded-xl font-bold text-orange-600 hover:text-orange-700 transition"
        >
          もう一度診断する
        </button>
      </div>

      <p className="text-xs text-gray-400 text-center">
        対象習い事は {NARAI_CATEGORIES.length} カテゴリの中から診断しています。
      </p>
    </div>
  );
}
