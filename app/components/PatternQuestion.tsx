/**
 * パターン（くりかえし）問題を、絵・文字を大きなマスにならべて表示する。
 * 「🍎 🍇 🍎 🍇 □ つぎはどれかな？」のような文字列を
 *   ・ならび（□まで）→ 大きなマス
 *   ・のこりの文章   → 問いかけ
 * に分けて表示する。パターン以外の問題はそのままテキストで返す。
 * 印刷でもマスの枠線が出るので、そのまま紙に答えを書き込める。
 */
const PICTO = /\p{Extended_Pictographic}/u;

export function isPatternGenre(genre: string): boolean {
  return genre.includes("パターン");
}

function split(question: string): { seq: string[]; rest: string } | null {
  const m = question.match(/^(.*?□)\s*(.*)$/);
  if (!m) return null;
  const seq = m[1].trim().split(/\s+/);
  if (seq.length < 3) return null;
  return { seq, rest: m[2].trim() };
}

/** 読み上げ用テキスト。絵文字は読み上げ環境で不安定なので、問いかけだけを読む。 */
export function speakTextFor(genre: string, question: string): string {
  if (!isPatternGenre(genre)) return question;
  const parts = split(question);
  if (!parts) return question;
  if (PICTO.test(parts.seq.join(""))) {
    return parts.rest.replace(/^→\s*/, "") || "つぎは どれかな？";
  }
  return question;
}

type Props = { genre: string; question: string; prefix?: string };

export default function PatternQuestion({ genre, question, prefix = "" }: Props) {
  const parts = isPatternGenre(genre) ? split(question) : null;

  if (!parts) {
    return (
      <span className="flex-1">
        {prefix}
        {question}
      </span>
    );
  }

  return (
    <div className="flex-1">
      <div
        className="flex flex-wrap items-center gap-2 mb-3 wt-tiles"
        role="img"
        aria-label={question}
      >
        {parts.seq.map((item, i) => {
          const isBlank = item === "□";
          const isEmoji = PICTO.test(item);
          return (
            <span
              key={i}
              className={
                "inline-flex items-center justify-center rounded-2xl border-2 min-w-14 h-14 px-2 leading-none " +
                (isBlank
                  ? "border-dashed border-purple-400 bg-purple-50 w-16 h-16"
                  : "border-gray-300 bg-white ") +
                (isEmoji ? " text-4xl" : " text-xl font-bold")
              }
            >
              {isBlank ? "" : item}
            </span>
          );
        })}
      </div>
      <div>
        {prefix}
        {parts.rest || "つぎはどれかな？"}
      </div>
    </div>
  );
}
