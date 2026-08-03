/**
 * とけい（時計）問題を、時刻の組み合わせから機械的に生成するためのヘルパー。
 * 時刻の計算（○分後・○時間後）をまちがえると答えがズレてしまうので、
 * ここで一か所にまとめて、まちがいのない形で計算する。
 */

export type ClockQuestion = {
  question: string;
  answer: string;
  explanation: string;
  hour: number; // 表示する時計の時（1〜12）
  minute: number; // 表示する時計の分（0〜59）
};

// 時刻を「3じ」「9じはん」「5じ45分」のように表示用の文字列にする
function formatTime(hour: number, minute: number): string {
  if (minute === 0) return `${hour}じ`;
  if (minute === 30) return `${hour}じはん`;
  return `${hour}じ${minute}分`;
}

// 「なんじなんぷん」の答え用（「はん」を使わず、常に分で言う）
function formatTimeStrict(hour: number, minute: number): string {
  if (minute === 0) return `${hour}じ`;
  return `${hour}じ${minute}分`;
}

// hour(1-12) + minute に deltaMinutes を足して、12時間表記のまま繰り上げる
function addMinutes(hour: number, minute: number, deltaMinutes: number): { hour: number; minute: number } {
  let totalMin = minute + deltaMinutes;
  let addHours = Math.floor(totalMin / 60);
  let newMinute = ((totalMin % 60) + 60) % 60;
  let newHour = hour + addHours;
  newHour = ((newHour - 1) % 12 + 12) % 12 + 1; // 1〜12の範囲に収める
  return { hour: newHour, minute: newMinute };
}

export function generateClockQuestions(): ClockQuestion[] {
  const qs: ClockQuestion[] = [];

  // A: ちょうどの時刻を読む（1じ〜12じ）
  for (let h = 1; h <= 12; h++) {
    qs.push({
      question: "とけいを よもう。なんじ？",
      answer: `${h}じ`,
      explanation: `みじかいはりが ${h}、ながいはりが 12なので、${h}じです。`,
      hour: h,
      minute: 0,
    });
  }

  // B: 「はん」（30分）の時刻を読む
  for (let h = 1; h <= 12; h++) {
    qs.push({
      question: "とけいを よもう。なんじ？",
      answer: `${h}じはん`,
      explanation: `ながいはりが 6の ときは「はん」（30分）です。`,
      hour: h,
      minute: 30,
    });
  }

  // C: なんじなんぷん（5分きざみ、0・30以外）を読む
  const otherMinutes = [5, 10, 15, 20, 25, 35, 40, 45, 50, 55];
  for (let h = 1; h <= 12; h++) {
    for (const m of otherMinutes) {
      qs.push({
        question: "とけいを よもう。なんじなんぷん？",
        answer: formatTimeStrict(h, m),
        explanation: `みじかいはりは ${h}と${h === 12 ? 1 : h + 1}の あいだ、ながいはりは ${m}分の ところを さしています。`,
        hour: h,
        minute: m,
      });
    }
  }

  // D: 長い針が指す「なんぷん」だけを読む（時は目安として1〜12を回す）
  const allMinutes5 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  for (let h = 1; h <= 12; h++) {
    for (const m of allMinutes5) {
      qs.push({
        question: "とけいの ながいはりは、なんぷんの ところ？",
        answer: m === 0 ? "0ふん（ちょうど）" : `${m}ふん`,
        explanation: m === 0 ? "ながいはりが 12を さしているときは、ちょうどの時間です。" : `ながいはりが ${m / 5}めもりぶん すすんでいるので、${m}分です。`,
        hour: h,
        minute: m,
      });
    }
  }

  // E: 「〇分たつと、なんじ（なんぷん）？」
  const startTimes: [number, number][] = [];
  for (let h = 1; h <= 12; h++) {
    for (const m of [0, 10, 20, 30, 40, 50]) {
      startTimes.push([h, m]);
    }
  }
  const deltas = [5, 10, 15, 20, 30, 40, 45];
  for (const [h, m] of startTimes) {
    for (const delta of deltas) {
      const end = addMinutes(h, m, delta);
      qs.push({
        question: `この とけいから ${delta}分たつと、なんじなんぷん？`,
        answer: formatTime(end.hour, end.minute),
        explanation: `${formatTimeStrict(h, m)}から ${delta}分あとは ${formatTimeStrict(end.hour, end.minute)}です。`,
        hour: h,
        minute: m,
      });
    }
  }

  // F: 「〇時間たつと、なんじ？」
  const hourDeltas = [1, 2, 3, 4];
  for (let h = 1; h <= 12; h++) {
    for (const delta of hourDeltas) {
      const end = addMinutes(h, 0, delta * 60);
      qs.push({
        question: `この とけいから ${delta}じかんたつと、なんじ？`,
        answer: `${end.hour}じ`,
        explanation: `${h}じから ${delta}じかんあとは ${end.hour}じです。`,
        hour: h,
        minute: 0,
      });
    }
  }

  return qs;
}
