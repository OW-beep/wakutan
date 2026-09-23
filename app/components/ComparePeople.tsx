type Props = {
  /** 登場する名前（順不同でOK。表示順は答えのヒントにならないよう名前の並び＝問題文の並びのまま渡す） */
  names: string[];
};

const COLORS = ["#f97316", "#3b82f6", "#22c55e", "#a855f7"];

type Kind = "boy" | "girl" | "animal" | "colorword" | "fruit";

/**
 * suiriQuestions.ts の NAMES_SETS / FOUR_NAME_SETS に登場する名前の分類。
 * ここにない名前は種別不明として扱い、性別を決めつけずに表示する（安全側フォールバック）。
 */
const NAME_KIND: Record<string, Kind> = {
  // 男の子
  たろう: "boy", じろう: "boy", けんじ: "boy",
  だいき: "boy", しょう: "boy", りく: "boy",
  けんた: "boy", ゆうた: "boy", そうた: "boy",
  ひろし: "boy", さとし: "boy", まなぶ: "boy", けん: "boy",
  あきら: "boy", だいち: "boy", はると: "boy", そら: "boy",
  // 女の子
  ゆき: "girl", はな: "girl", みお: "girl",
  さき: "girl", あい: "girl", のあ: "girl",
  まい: "girl", れい: "girl", こと: "girl",
  さくら: "girl", もも: "girl", すみれ: "girl", らん: "girl",
  ひなた: "girl", ゆずき: "girl", あかり: "girl", みう: "girl",
  // どうぶつ
  ぞう: "animal", うま: "animal", うさぎ: "animal",
  きりん: "animal", ねこ: "animal", ねずみ: "animal",
  くま: "animal", たぬき: "animal", きつね: "animal",
  ぱんだ: "animal", こあら: "animal", いぬ: "animal", とり: "animal",
  くじら: "animal", いるか: "animal", さかな: "animal", えび: "animal",
  // いろ
  あか: "colorword", あお: "colorword", きいろ: "colorword",
  みどり: "colorword", むらさき: "colorword",
  // くだもの
  みかん: "fruit", りんご: "fruit", ぶどう: "fruit",
  いちご: "fruit", めろん: "fruit", ばなな: "fruit",
};

const ANIMAL_EMOJI: Record<string, string> = {
  ぞう: "🐘", うま: "🐴", うさぎ: "🐰",
  きりん: "🦒", ねこ: "🐱", ねずみ: "🐭",
  くま: "🐻", たぬき: "🦝", きつね: "🦊",
  ぱんだ: "🐼", こあら: "🐨", いぬ: "🐶", とり: "🐦",
  くじら: "🐳", いるか: "🐬", さかな: "🐟", えび: "🦐",
};

const FRUIT_EMOJI: Record<string, string> = {
  みかん: "🍊", りんご: "🍎", ぶどう: "🍇",
  いちご: "🍓", めろん: "🍈", ばなな: "🍌",
};

const COLOR_SWATCH: Record<string, string> = {
  あか: "#ef4444", あお: "#3b82f6", きいろ: "#eab308",
  みどり: "#22c55e", むらさき: "#a855f7",
};

function suffixFor(kind: Kind | undefined): string {
  if (kind === "boy") return "くん";
  if (kind === "girl") return "ちゃん";
  return "";
}

/**
 * すいり（3〜4人／3〜4つを比べる）問題の登場人物・登場物を並べて表示するイラスト。
 * 「だれ・なにが登場するか」を絵で見せるだけで、背の高さ・順番など答えにつながる
 * 情報は一切描かない（全員・全部同じ大きさ・同じ形で描く）。
 *
 * 名前の種別（男の子／女の子／どうぶつ／いろ／くだもの）に応じて見た目を出し分ける：
 * - 男の子・女の子：丸顔のアイコン＋名前に「くん／ちゃん」を付けて表示
 * - どうぶつ：その動物の絵文字（人型のアイコンにはしない）
 * - いろ：その色の丸（顔は描かない）
 * - くだもの：その果物の絵文字
 */
export default function ComparePeople({ names }: Props) {
  return (
    <div
      className="flex justify-center items-end gap-4 mb-3 flex-wrap"
      role="img"
      aria-label={`とうじょうする ${names.join("・")}`}
    >
      {names.map((name, i) => {
        const kind = NAME_KIND[name];
        const color = COLORS[i % COLORS.length];
        const label = name + suffixFor(kind);

        return (
          <div key={name} className="flex flex-col items-center">
            {kind === "animal" ? (
              <div className="w-14 h-14 flex items-center justify-center text-4xl">
                {ANIMAL_EMOJI[name] ?? "🐾"}
              </div>
            ) : kind === "fruit" ? (
              <div className="w-14 h-14 flex items-center justify-center text-4xl">
                {FRUIT_EMOJI[name] ?? "🍀"}
              </div>
            ) : kind === "colorword" ? (
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="24" fill={COLOR_SWATCH[name] ?? color} />
              </svg>
            ) : (
              <svg width="56" height="72" viewBox="0 0 56 72">
                <circle cx="28" cy="20" r="16" fill={color} />
                <circle cx="22" cy="18" r="2.2" fill="#fff" />
                <circle cx="34" cy="18" r="2.2" fill="#fff" />
                <path d="M21 25 q7 6 14 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="12" y="38" width="32" height="30" rx="10" fill={color} opacity="0.75" />
              </svg>
            )}
            <div className="mt-1 text-sm font-bold text-gray-700">{label}</div>
          </div>
        );
      })}
    </div>
  );
}
