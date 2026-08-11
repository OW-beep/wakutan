type SceneKey =
  | "rain"
  | "iceMelt"
  | "brokenToy"
  | "helpedMom"
  | "darkClouds"
  | "snowmanIndoors"
  | "cupFalling"
  | "hotWater"
  | "lightsOff"
  | "flowerNoWater";

const KNOWN_SCENES: SceneKey[] = [
  "rain",
  "iceMelt",
  "brokenToy",
  "helpedMom",
  "darkClouds",
  "snowmanIndoors",
  "cupFalling",
  "hotWater",
  "lightsOff",
  "flowerNoWater",
];

function isSceneKey(value: string): value is SceneKey {
  return (KNOWN_SCENES as string[]).includes(value);
}

type Props = {
  /** データ側は string で渡ってくるため、ここで既知のシーンかどうかを判定する */
  scene: string;
  size?: number;
};

/**
 * すいり（原因と結果）問題の状況を表すシンプルなSVGイラスト。
 * 答えを見せてしまわないよう、あくまで「今どんな場面か」だけを描き、
 * 原因や結果そのものは描かない（例：雨のシーンは「ぬれた地面」だけ描き、雲は描かない）。
 */
export default function SuiriScene({ scene, size = 140 }: Props) {
  if (!isSceneKey(scene)) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      role="img"
      aria-label="もんだいの ばめんの イラスト"
    >
      <rect x="0" y="0" width="160" height="160" rx="20" fill="#eef2ff" />

      {scene === "rain" && (
        <>
          <rect x="10" y="120" width="140" height="20" rx="4" fill="#93c5fd" opacity="0.6" />
          <path d="M20 118 q6 -10 12 0" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M60 122 q6 -10 12 0" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M100 118 q6 -10 12 0" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M40 128 q6 -10 12 0" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      )}

      {scene === "iceMelt" && (
        <>
          <rect x="55" y="70" width="50" height="40" rx="6" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="3" />
          <path d="M60 112 q10 15 20 0 q10 15 20 0" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      )}

      {scene === "brokenToy" && (
        <>
          <circle cx="80" cy="70" r="28" fill="#fde68a" />
          <circle cx="70" cy="65" r="4" fill="#78350f" />
          <circle cx="90" cy="65" r="4" fill="#78350f" />
          <path d="M68 82 q12 -8 24 0" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M60 118 l10 -12 M74 118 l6 -14 M90 118 l-6 -14 M104 118 l-10 -12" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {scene === "helpedMom" && (
        <>
          <circle cx="80" cy="70" r="28" fill="#fbcfe8" />
          <path d="M66 62 q14 -14 28 0" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M70 78 q10 10 20 0" stroke="#9d174d" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="70" cy="66" r="3" fill="#78350f" />
          <circle cx="90" cy="66" r="3" fill="#78350f" />
          <path d="M110 40 l4 10 l10 2 l-8 8 l2 10 l-8 -6 l-8 6 l2 -10 l-8 -8 l10 -2 z" fill="#f472b6" />
        </>
      )}

      {scene === "darkClouds" && (
        <>
          <ellipse cx="55" cy="55" rx="28" ry="16" fill="#94a3b8" />
          <ellipse cx="90" cy="50" rx="24" ry="14" fill="#64748b" />
          <ellipse cx="110" cy="60" rx="20" ry="13" fill="#94a3b8" />
        </>
      )}

      {scene === "snowmanIndoors" && (
        <>
          <rect x="20" y="30" width="120" height="90" rx="10" fill="#fef3c7" opacity="0.6" />
          <circle cx="80" cy="105" r="24" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="80" cy="72" r="17" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="74" cy="68" r="2.5" fill="#334155" />
          <circle cx="86" cy="68" r="2.5" fill="#334155" />
          <path d="M80 72 l10 3 l-10 3 z" fill="#f97316" />
        </>
      )}

      {scene === "cupFalling" && (
        <>
          <rect x="20" y="80" width="90" height="8" rx="3" fill="#d6d3d1" />
          <path d="M108 60 q0 14 -14 14 h-14 q-14 0 -14 -14 v-4 h42 z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          <circle cx="118" cy="120" r="4" fill="#94a3b8" />
        </>
      )}

      {scene === "hotWater" && (
        <>
          <rect x="45" y="90" width="60" height="30" rx="8" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="3" />
          <path d="M55 85 q4 -12 0 -20 M75 85 q4 -12 0 -20 M95 85 q4 -12 0 -20" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        </>
      )}

      {scene === "lightsOff" && (
        <>
          <rect x="20" y="20" width="120" height="120" rx="14" fill="#334155" />
          <circle cx="80" cy="55" r="14" fill="#64748b" />
          <path d="M74 60 q6 8 12 0" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      )}

      {scene === "flowerNoWater" && (
        <>
          <path d="M80 130 q-4 -30 10 -46" stroke="#65a30d" strokeWidth="4" fill="none" strokeLinecap="round" />
          <ellipse cx="92" cy="86" rx="16" ry="10" fill="#fda4af" transform="rotate(30 92 86)" />
          <circle cx="92" cy="86" r="6" fill="#fbbf24" />
        </>
      )}
    </svg>
  );
}
