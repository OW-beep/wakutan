// わくたん習い事診断 - データ定義 & スコアリングロジック
// 仕様書 v1.0 に基づく実装（MVP v0.1）

export type PurposeId =
  | "P01" | "P02" | "P03" | "P04" | "P05" | "P06"
  | "P07" | "P08" | "P09" | "P10" | "P11" | "P12";

export type InterestId =
  | "run" | "jump" | "ball" | "dance"
  | "sing" | "music" | "draw" | "craft"
  | "puzzle" | "maze" | "number" | "book"
  | "animal" | "vehicle" | "pcgame" | "roleplay"
  | "friends" | "alone";

export type PersonalityId =
  | "active" | "focused" | "curious" | "competitive1"
  | "mypace" | "competitive2" | "confident" | "shy"
  | "warmup" | "listener" | "free" | "social" | "solo";

export type Group = "運動" | "音楽" | "芸術" | "学習" | "STEM";

export type Purpose = { id: PurposeId; label: string };
export type Interest = { id: InterestId; label: string; group: string };
export type Personality = { id: PersonalityId; label: string };

export const PURPOSES: Purpose[] = [
  { id: "P01", label: "体力・運動能力を伸ばしたい" },
  { id: "P02", label: "考える力・学ぶ力を伸ばしたい" },
  { id: "P03", label: "好きなこと・得意なことを伸ばしたい" },
  { id: "P04", label: "音楽・表現力を伸ばしたい" },
  { id: "P05", label: "創造力・感性を伸ばしたい" },
  { id: "P06", label: "コミュニケーション力を育てたい" },
  { id: "P07", label: "協調性を身につけてほしい" },
  { id: "P08", label: "自信・積極性を身につけてほしい" },
  { id: "P09", label: "集中力を身につけたい" },
  { id: "P10", label: "小学校入学に向けて準備したい" },
  { id: "P11", label: "放課後の時間を有効活用したい" },
  { id: "P12", label: "子ども自身がやりたいと言っている" },
];

// 目的 → 主に関連する分野（ギャップ分析用。あくまで目安）
export const PURPOSE_GROUPS: Partial<Record<PurposeId, Group[]>> = {
  P01: ["運動"],
  P02: ["学習", "STEM"],
  P04: ["音楽"],
  P05: ["芸術"],
  P06: ["運動", "音楽"],
  P07: ["運動"],
  P08: ["運動", "音楽"],
  P09: ["学習", "芸術"],
  P10: ["学習"],
};

export const INTERESTS: Interest[] = [
  { id: "run", label: "走る", group: "身体" },
  { id: "jump", label: "ジャンプする", group: "身体" },
  { id: "ball", label: "ボール遊び", group: "身体" },
  { id: "dance", label: "踊る", group: "身体" },
  { id: "sing", label: "歌う", group: "表現" },
  { id: "music", label: "音楽を聴く", group: "表現" },
  { id: "draw", label: "絵を描く", group: "表現" },
  { id: "craft", label: "工作する", group: "表現" },
  { id: "puzzle", label: "パズル", group: "知的活動" },
  { id: "maze", label: "迷路", group: "知的活動" },
  { id: "number", label: "数字", group: "知的活動" },
  { id: "book", label: "本・物語", group: "知的活動" },
  { id: "animal", label: "生き物", group: "興味対象" },
  { id: "vehicle", label: "車・電車", group: "興味対象" },
  { id: "pcgame", label: "パソコン・ゲーム", group: "興味対象" },
  { id: "roleplay", label: "ごっこ遊び", group: "興味対象" },
  { id: "friends", label: "友達と遊ぶ", group: "社会性" },
  { id: "alone", label: "一人で遊ぶ", group: "社会性" },
];

// 興味 → 主に関連する分野（ギャップ分析用）
export const INTEREST_GROUPS: Partial<Record<InterestId, Group[]>> = {
  run: ["運動"], jump: ["運動"], ball: ["運動"], dance: ["運動", "音楽"],
  sing: ["音楽"], music: ["音楽"], draw: ["芸術"], craft: ["芸術"],
  puzzle: ["学習"], maze: ["学習"], number: ["学習"], book: ["学習"],
  pcgame: ["STEM"],
};

export const PERSONALITIES: Personality[] = [
  { id: "active", label: "体を動かすのが好き" },
  { id: "focused", label: "一つのことに集中する" },
  { id: "curious", label: "好奇心が強い" },
  { id: "competitive1", label: "負けず嫌い" },
  { id: "mypace", label: "マイペース" },
  { id: "competitive2", label: "競争するのが好き" },
  { id: "confident", label: "人前でも比較的平気" },
  { id: "shy", label: "初めての場所は苦手" },
  { id: "warmup", label: "慣れると積極的" },
  { id: "listener", label: "人の話を聞くのが得意" },
  { id: "free", label: "自由にやる方が好き" },
  { id: "social", label: "友達と一緒だと楽しめる" },
  { id: "solo", label: "一人でじっくり取り組むのが好き" },
];

export const PARENT_HOPES: string[] = [
  "将来役立つ力を身につけてほしい",
  "得意なことを見つけてほしい",
  "苦手なことを克服してほしい",
  "自信をつけてほしい",
  "集中力をつけてほしい",
  "体力をつけてほしい",
  "人との関わりを学んでほしい",
  "楽しく続けてほしい",
  "小学校生活に備えたい",
];

export const BUDGET_OPTIONS = [
  { id: "b1", label: "〜5,000円", level: 1 },
  { id: "b2", label: "5,000〜10,000円", level: 2 },
  { id: "b3", label: "10,000〜20,000円", level: 3 },
  { id: "b4", label: "20,000円以上", level: 4 },
  { id: "b5", label: "未定", level: 0 },
] as const;

export const FREQUENCY_OPTIONS = [
  { id: "f1", label: "週1回", level: 1 },
  { id: "f2", label: "週2回", level: 2 },
  { id: "f3", label: "週3回以上", level: 3 },
  { id: "f4", label: "未定", level: 0 },
] as const;

export const ACCESS_OPTIONS = [
  { id: "a1", label: "徒歩・自転車圏がいい" },
  { id: "a2", label: "30分以内" },
  { id: "a3", label: "多少遠くてもOK" },
  { id: "a4", label: "オンラインも検討" },
] as const;

export const BURDEN_OPTIONS = [
  { id: "u1", label: "できるだけ少なくしたい" },
  { id: "u2", label: "多少ならOK" },
  { id: "u3", label: "子どものためなら対応可能" },
] as const;

export type EvidenceLevel = "A" | "B" | "C" | "D";

export type NaraiCategory = {
  key: string;
  name: string;
  emoji: string;
  group: Group;
  purposeTags: PurposeId[];
  interestTags: InterestId[];
  personalityTags: PersonalityId[];
  budgetLevel: number; // 1-4 目安（未定=0扱いで常にマッチ）
  frequencyLevel: number; // 1-3 目安
  onlineAvailable: boolean;
  lifeStage: { now: string; elementary: string; junior: string };
  evidenceLevel: EvidenceLevel;
  evidenceText: string;
};

export const NARAI_CATEGORIES: NaraiCategory[] = [
  {
    key: "taiso", name: "体操", emoji: "🤸", group: "運動",
    purposeTags: ["P01", "P08", "P07", "P10"],
    interestTags: ["run", "jump", "ball"],
    personalityTags: ["active", "confident", "competitive1", "competitive2"],
    budgetLevel: 2, frequencyLevel: 2, onlineAvailable: false,
    lifeStage: {
      now: "身体を動かす楽しさや、基本的な身体操作、「できた」という経験を積み重ねます。",
      elementary: "体育の授業などで身体を動かし、ルールを理解しながら活動する力につながります。",
      junior: "部活動などで継続的に活動し、自分で練習を管理する経験につながる可能性があります。",
    },
    evidenceLevel: "B",
    evidenceText: "幼児期の運動発達に関する研究では、多様な身体動作の経験が基礎的な運動能力の土台になると報告されています。",
  },
  {
    key: "suiei", name: "水泳", emoji: "🏊", group: "運動",
    purposeTags: ["P01", "P08", "P09"],
    interestTags: ["run", "jump", "ball"],
    personalityTags: ["active", "mypace", "focused"],
    budgetLevel: 2, frequencyLevel: 2, onlineAvailable: false,
    lifeStage: {
      now: "水に慣れ、身体を思い通りに動かす感覚を養います。",
      elementary: "学校の水泳授業に自信を持って取り組みやすくなる可能性があります。",
      junior: "持久力を要する運動として、継続的な体力づくりの場になり得ます。",
    },
    evidenceLevel: "C",
    evidenceText: "全身運動としての水泳が体力・呼吸機能に関連するという報告がありますが、幼児期の効果検証は限定的です。",
  },
  {
    key: "soccer", name: "サッカー", emoji: "⚽", group: "運動",
    purposeTags: ["P01", "P06", "P07", "P08"],
    interestTags: ["run", "ball", "friends"],
    personalityTags: ["active", "competitive1", "competitive2", "social"],
    budgetLevel: 2, frequencyLevel: 2, onlineAvailable: false,
    lifeStage: {
      now: "友達と一緒にボールを追いかける中で、体力と初歩的なルール理解を育みます。",
      elementary: "チームでの役割分担や声かけなど、協調しながら活動する経験につながります。",
      junior: "部活動やクラブ活動で、目標を仲間と共有しながら継続的に取り組む力につながる可能性があります。",
    },
    evidenceLevel: "B",
    evidenceText: "集団球技への参加が社会的スキルの発達と関連するという研究報告がありますが、因果関係の確定には至っていません。",
  },
  {
    key: "dance", name: "ダンス", emoji: "💃", group: "運動",
    purposeTags: ["P01", "P04", "P08", "P05"],
    interestTags: ["dance", "music", "run"],
    personalityTags: ["active", "confident", "free", "social"],
    budgetLevel: 2, frequencyLevel: 2, onlineAvailable: false,
    lifeStage: {
      now: "音楽に合わせて身体を動かす楽しさと、リズム感を体験します。",
      elementary: "発表会などを通して、人前で表現する経験を積みやすくなります。",
      junior: "継続的な練習と発表を通じて、自己表現・自己管理の力につながる可能性があります。",
    },
    evidenceLevel: "C",
    evidenceText: "リズム運動と身体協調性の関連を示す研究がありますが、幼児を対象とした長期的な検証は限られています。",
  },
  {
    key: "budo", name: "武道（空手・柔道など）", emoji: "🥋", group: "運動",
    purposeTags: ["P01", "P08", "P09", "P07"],
    interestTags: ["run", "jump"],
    personalityTags: ["active", "focused", "listener", "competitive1"],
    budgetLevel: 2, frequencyLevel: 2, onlineAvailable: false,
    lifeStage: {
      now: "礼儀作法や指示を聞いて動く経験、基礎体力づくりにつながります。",
      elementary: "段階的な級・帯の取得などを通して、目標に向かって継続する経験を積みます。",
      junior: "自己規律や精神的な集中力を要する活動として継続しやすい傾向があります。",
    },
    evidenceLevel: "C",
    evidenceText: "武道系の習い事が自己統制感と関連するという報告がありますが、質の高い研究はまだ多くありません。",
  },
  {
    key: "piano", name: "ピアノ", emoji: "🎹", group: "音楽",
    purposeTags: ["P04", "P09", "P02", "P05"],
    interestTags: ["music", "sing", "number"],
    personalityTags: ["focused", "solo", "listener", "mypace"],
    budgetLevel: 3, frequencyLevel: 1, onlineAvailable: true,
    lifeStage: {
      now: "音を聞き分け、指を動かして音楽を表現する経験を積みます。",
      elementary: "練習を継続し、発表会に向けて取り組む中で、目標管理の経験につながります。",
      junior: "自己管理をしながら継続的に活動し、表現力を磨く場になり得ます。",
    },
    evidenceLevel: "A",
    evidenceText: "幼児期の音楽訓練について複数の研究を統合したメタ分析では、抑制制御・ワーキングメモリなどの実行機能について改善が報告されています。ただし、音楽を習えば必ずこれらの能力が向上することを意味するものではありません。",
  },
  {
    key: "rhythmic", name: "リトミック", emoji: "🎵", group: "音楽",
    purposeTags: ["P04", "P05", "P01"],
    interestTags: ["music", "sing", "dance"],
    personalityTags: ["active", "curious", "free"],
    budgetLevel: 1, frequencyLevel: 1, onlineAvailable: false,
    lifeStage: {
      now: "音楽に合わせて自由に身体を動かし、リズム感や表現する楽しさを体験します。",
      elementary: "音楽の授業などで、リズムを感じ取る力の土台として活かせる可能性があります。",
      junior: "音楽活動に限らず、表現することへの抵抗感の少なさにつながる可能性があります。",
    },
    evidenceLevel: "C",
    evidenceText: "リトミック等の音楽運動教育とリズム知覚の関連を示す研究がありますが、対象年齢や検証方法にばらつきがあります。",
  },
  {
    key: "music-other", name: "その他楽器（バイオリン・エレクトーン等）", emoji: "🎻", group: "音楽",
    purposeTags: ["P04", "P09", "P05"],
    interestTags: ["music", "sing"],
    personalityTags: ["focused", "solo", "listener"],
    budgetLevel: 3, frequencyLevel: 1, onlineAvailable: true,
    lifeStage: {
      now: "楽器を通して音を出す楽しさ、聞く力・手指の動かし方を育みます。",
      elementary: "継続的な練習習慣や発表の場を通して、根気強さにつながる経験を積みます。",
      junior: "音楽活動やアンサンブルを通して、仲間と表現を共有する力につながる可能性があります。",
    },
    evidenceLevel: "B",
    evidenceText: "楽器演奏の学習と聴覚処理・手指の巧緻性との関連を示す研究報告がありますが、効果の大きさには個人差が大きいとされています。",
  },
  {
    key: "art", name: "絵画", emoji: "🎨", group: "芸術",
    purposeTags: ["P05", "P03", "P09"],
    interestTags: ["draw", "craft", "animal"],
    personalityTags: ["solo", "curious", "free", "mypace"],
    budgetLevel: 1, frequencyLevel: 1, onlineAvailable: false,
    lifeStage: {
      now: "見たものや感じたことを絵で表現する経験を積みます。",
      elementary: "図画工作の授業などで、自分なりの表現を楽しみやすくなる可能性があります。",
      junior: "美術活動を通して、感性や独自の視点を磨く場になり得ます。",
    },
    evidenceLevel: "C",
    evidenceText: "造形活動と創造的思考の関連を示唆する研究がありますが、評価方法が研究ごとに異なり一般化には注意が必要です。",
  },
  {
    key: "craft", name: "工作・造形", emoji: "🛠️", group: "芸術",
    purposeTags: ["P05", "P02", "P03"],
    interestTags: ["craft", "puzzle", "vehicle"],
    personalityTags: ["curious", "focused", "free"],
    budgetLevel: 1, frequencyLevel: 1, onlineAvailable: false,
    lifeStage: {
      now: "手を動かして形を作る中で、試行錯誤する楽しさを体験します。",
      elementary: "図画工作や総合的な学習で、手を動かしながら考える力として活かせる可能性があります。",
      junior: "技術・家庭科など、実践的な学びへの抵抗感の少なさにつながる可能性があります。",
    },
    evidenceLevel: "C",
    evidenceText: "手指を使った造形活動と空間認識力の関連を指摘する研究がありますが、幼児期に限定した大規模研究は多くありません。",
  },
  {
    key: "eigo", name: "英語", emoji: "🇬🇧", group: "学習",
    purposeTags: ["P02", "P10", "P06"],
    interestTags: ["book", "pcgame", "roleplay"],
    personalityTags: ["curious", "listener", "confident", "social"],
    budgetLevel: 2, frequencyLevel: 1, onlineAvailable: true,
    lifeStage: {
      now: "英語の音やリズムに親しみ、外国語への抵抗感を減らす経験を積みます。",
      elementary: "外国語活動の授業に、耳慣れした状態で取り組みやすくなる可能性があります。",
      junior: "教科としての英語学習の基礎となる語彙・音への慣れにつながる可能性があります。",
    },
    evidenceLevel: "B",
    evidenceText: "幼児期の外国語への早期接触が音韻認識に関連するという研究報告がありますが、長期的な学力への効果は研究間で結論が分かれています。",
  },
  {
    key: "chiiku", name: "算数・知育教室", emoji: "🧮", group: "学習",
    purposeTags: ["P02", "P09", "P10"],
    interestTags: ["number", "puzzle", "maze"],
    personalityTags: ["focused", "curious", "solo"],
    budgetLevel: 2, frequencyLevel: 1, onlineAvailable: false,
    lifeStage: {
      now: "数や図形に触れながら、考えることそのものを楽しむ経験を積みます。",
      elementary: "算数の授業で扱う内容に、抵抗感なく取り組みやすくなる可能性があります。",
      junior: "論理的に筋道を立てて考える習慣として活かせる可能性があります。",
    },
    evidenceLevel: "B",
    evidenceText: "就学前の数概念への取り組みが、その後の算数学力と関連するという縦断研究の報告がありますが、家庭環境など他要因の影響も大きいとされています。",
  },
  {
    key: "yomikaki", name: "読み書き・国語教室", emoji: "📖", group: "学習",
    purposeTags: ["P02", "P10", "P09"],
    interestTags: ["book", "puzzle"],
    personalityTags: ["focused", "listener", "curious"],
    budgetLevel: 2, frequencyLevel: 1, onlineAvailable: false,
    lifeStage: {
      now: "文字や言葉に親しみ、読む・書くことへの興味を育みます。",
      elementary: "国語の授業や日々の学習で、読み書きの土台として活かせる可能性があります。",
      junior: "文章を読んで理解し、自分の考えをまとめる力につながる可能性があります。",
    },
    evidenceLevel: "B",
    evidenceText: "就学前の読み聞かせ・文字への接触量と、その後の読解力の関連を示す研究報告が複数あります。",
  },
  {
    key: "programming", name: "プログラミング", emoji: "💻", group: "STEM",
    purposeTags: ["P02", "P09", "P03"],
    interestTags: ["pcgame", "puzzle", "vehicle"],
    personalityTags: ["focused", "curious", "solo", "free"],
    budgetLevel: 3, frequencyLevel: 1, onlineAvailable: true,
    lifeStage: {
      now: "順序立てて考える楽しさや、試行錯誤しながら物事を進める経験を積みます。",
      elementary: "プログラミング教育の授業に、抵抗感なく取り組みやすくなる可能性があります。",
      junior: "技術科目や課題解決型の学習で、論理的に考える力として活かせる可能性があります。",
    },
    evidenceLevel: "C",
    evidenceText: "幼児・児童向けプログラミング教育と論理的思考力の関連を示す研究がありますが、対照群を伴う質の高い研究はまだ限られています。",
  },
  {
    key: "robot", name: "ロボット教室", emoji: "🤖", group: "STEM",
    purposeTags: ["P02", "P05", "P03"],
    interestTags: ["pcgame", "vehicle", "puzzle"],
    personalityTags: ["curious", "focused", "free"],
    budgetLevel: 3, frequencyLevel: 1, onlineAvailable: false,
    lifeStage: {
      now: "手を動かしてものを組み立て、動かす楽しさを体験します。",
      elementary: "理科や総合的な学習で、仕組みを考える興味として活かせる可能性があります。",
      junior: "課題を分解して考える力や、ものづくりへの関心の継続につながる可能性があります。",
    },
    evidenceLevel: "D",
    evidenceText: "ロボット教室と学力・思考力の関連については、現時点で研究による確認が十分ではありません。",
  },
];

// ------------------------------
// スコアリング
// ------------------------------

export type ShindanAnswers = {
  purposes: PurposeId[];
  primaryPurpose: PurposeId | null;
  secondaryPurpose: PurposeId | null;
  parentHopes: string[];
  interests: InterestId[];
  personalities: PersonalityId[];
  budget: (typeof BUDGET_OPTIONS)[number]["id"] | null;
  frequency: (typeof FREQUENCY_OPTIONS)[number]["id"] | null;
  access: (typeof ACCESS_OPTIONS)[number]["id"] | null;
  burden: (typeof BURDEN_OPTIONS)[number]["id"] | null;
};

export const emptyAnswers: ShindanAnswers = {
  purposes: [],
  primaryPurpose: null,
  secondaryPurpose: null,
  parentHopes: [],
  interests: [],
  personalities: [],
  budget: null,
  frequency: null,
  access: null,
  burden: null,
};

export type CategoryResult = {
  category: NaraiCategory;
  score: number;
  purposeScore: number;
  interestScore: number;
  personalityScore: number;
  householdScore: number;
  reasons: string[];
};

function purposeScore(cat: NaraiCategory, a: ShindanAnswers): number {
  const selected = a.purposes;
  if (selected.length === 0) return 50;
  const weightOf = (id: PurposeId) => {
    if (id === a.primaryPurpose) return 3;
    if (id === a.secondaryPurpose) return 2;
    return 1;
  };
  const totalWeight = selected.reduce((s, id) => s + weightOf(id), 0);
  const matchedWeight = selected
    .filter((id) => cat.purposeTags.includes(id))
    .reduce((s, id) => s + weightOf(id), 0);
  return totalWeight === 0 ? 50 : Math.round((matchedWeight / totalWeight) * 100);
}

function interestScore(cat: NaraiCategory, a: ShindanAnswers): number {
  if (a.interests.length === 0 || cat.interestTags.length === 0) return 50;
  const matched = a.interests.filter((id) => cat.interestTags.includes(id)).length;
  return Math.min(100, Math.round((matched / cat.interestTags.length) * 100));
}

function personalityScore(cat: NaraiCategory, a: ShindanAnswers): number {
  if (a.personalities.length === 0 || cat.personalityTags.length === 0) return 50;
  const matched = a.personalities.filter((id) => cat.personalityTags.includes(id)).length;
  return Math.min(100, Math.round((matched / cat.personalityTags.length) * 100));
}

function householdScore(cat: NaraiCategory, a: ShindanAnswers): number {
  let budgetScore = 80;
  const budgetOpt = BUDGET_OPTIONS.find((b) => b.id === a.budget);
  if (budgetOpt && budgetOpt.level > 0) {
    const distance = Math.abs(budgetOpt.level - cat.budgetLevel);
    budgetScore = Math.max(20, 100 - distance * 30);
  }

  let freqScore = 80;
  const freqOpt = FREQUENCY_OPTIONS.find((f) => f.id === a.frequency);
  if (freqOpt && freqOpt.level > 0) {
    const distance = Math.abs(freqOpt.level - cat.frequencyLevel);
    freqScore = Math.max(20, 100 - distance * 30);
  }

  let accessScore = 80;
  if (a.access === "a4" && cat.onlineAvailable) accessScore = 100;

  return Math.round(budgetScore * 0.4 + freqScore * 0.3 + accessScore * 0.3);
}

function buildReasons(cat: NaraiCategory, a: ShindanAnswers): string[] {
  const reasons: string[] = [];

  const primaryLabel = PURPOSES.find((p) => p.id === a.primaryPurpose)?.label;
  if (primaryLabel && cat.purposeTags.includes(a.primaryPurpose as PurposeId)) {
    reasons.push(`「${primaryLabel}」という目的との相性が高い結果です。`);
  }

  const matchedInterests = a.interests
    .filter((id) => cat.interestTags.includes(id))
    .map((id) => INTERESTS.find((i) => i.id === id)?.label)
    .filter(Boolean);
  if (matchedInterests.length > 0) {
    reasons.push(`お子さんが好きな「${matchedInterests.slice(0, 2).join("・")}」と関連があります。`);
  }

  const matchedPersonalities = a.personalities
    .filter((id) => cat.personalityTags.includes(id))
    .map((id) => PERSONALITIES.find((p) => p.id === id)?.label)
    .filter(Boolean);
  if (matchedPersonalities.length > 0) {
    reasons.push(`「${matchedPersonalities[0]}」という傾向とも合いやすいタイプです。`);
  }

  if (reasons.length === 0) {
    reasons.push("家庭の条件面で無理なく続けやすいバランスの選択肢です。");
  }

  return reasons;
}

export function computeResults(a: ShindanAnswers): CategoryResult[] {
  const results = NARAI_CATEGORIES.map((category) => {
    const pS = purposeScore(category, a);
    const iS = interestScore(category, a);
    const perS = personalityScore(category, a);
    const hS = householdScore(category, a);
    const score = Math.round(pS * 0.4 + iS * 0.25 + perS * 0.2 + hS * 0.15);

    return {
      category,
      score,
      purposeScore: pS,
      interestScore: iS,
      personalityScore: perS,
      householdScore: hS,
      reasons: buildReasons(category, a),
    };
  });

  return results.sort((x, y) => y.score - x.score);
}

// 「親の希望」と「子どもの興味」のギャップ分析
export function analyzeGap(a: ShindanAnswers): { hasGap: boolean; purposeGroups: Group[]; interestGroups: Group[] } {
  const purposeGroups = new Set<Group>();
  [a.primaryPurpose, a.secondaryPurpose].forEach((p) => {
    if (p && PURPOSE_GROUPS[p]) {
      PURPOSE_GROUPS[p]!.forEach((g) => purposeGroups.add(g));
    }
  });

  const interestGroupCount: Partial<Record<Group, number>> = {};
  a.interests.forEach((i) => {
    const groups = INTEREST_GROUPS[i];
    if (groups) groups.forEach((g) => (interestGroupCount[g] = (interestGroupCount[g] ?? 0) + 1));
  });

  const sortedInterestGroups = (Object.entries(interestGroupCount) as [Group, number][])
    .sort((x, y) => y[1] - x[1])
    .map(([g]) => g);

  const topInterestGroups = sortedInterestGroups.slice(0, 1);

  const hasGap =
    purposeGroups.size > 0 &&
    topInterestGroups.length > 0 &&
    !topInterestGroups.some((g) => purposeGroups.has(g));

  return { hasGap, purposeGroups: Array.from(purposeGroups), interestGroups: topInterestGroups };
}

// 総合タイプの簡易判定文
export function typeLabel(a: ShindanAnswers, top: CategoryResult): string {
  const group = top.category.group;
  const base: Record<Group, string> = {
    運動: "体を動かしながら「できた」を積み重ねたいタイプ",
    音楽: "表現することを楽しみながら伸ばしたいタイプ",
    芸術: "自分なりの感性・発想を大切にしたいタイプ",
    学習: "考える力をじっくり育てたいタイプ",
    STEM: "試行錯誤しながらものづくり・思考を楽しみたいタイプ",
  };
  return base[group];
}
