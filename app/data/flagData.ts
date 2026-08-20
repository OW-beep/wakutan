/**
 * こっき（国旗）ジャンルで使う国データ。
 *
 * 国旗のSVGは自作せず、オープンソースの flag-icons（MITライセンス、
 * ISO 3166-1 alpha-2コードで正確な国旗を提供）をそのまま使用する。
 * これにより、色や模様を手作業で再現することによる誤りを防いでいる。
 *
 * 対象国は、子どもが将来ニュースや地図で目にする機会が多い先進国・主要国を中心に選定。
 * 「どこの国か覚える」という暗記だけでなく、色の数を数える・模様の特徴で
 * 仲間分けする問題（地頭系）にも使うため、模様の分類（pattern）もあわせて持たせている。
 */

export type FlagPattern =
  | "verticalStripe" // たて3色ストライプ
  | "horizontalStripe" // よこじまストライプ（2〜3色）
  | "circle" // まる（中央に円）
  | "centeredCross" // 中央にまっすぐな十字（スイスのみ）
  | "nordicCross" // 左に寄った十字（北欧諸国）
  | "complex"; // ストライプ等の単純な模様に分類できないもの（星条旗・ユニオンジャックなど）

export type FlagData = {
  /** ISO 3166-1 alpha-2 コード（flag-iconsのクラス名に使う。小文字） */
  code: string;
  nameJa: string;
  colorCount: number;
  pattern: FlagPattern;
};

export const FLAGS: FlagData[] = [
  // 主要先進国（G7 + α）
  { code: "jp", nameJa: "にほん", colorCount: 2, pattern: "circle" },
  { code: "us", nameJa: "アメリカ", colorCount: 3, pattern: "complex" },
  { code: "gb", nameJa: "イギリス", colorCount: 3, pattern: "complex" },
  { code: "ca", nameJa: "カナダ", colorCount: 2, pattern: "complex" },
  { code: "de", nameJa: "ドイツ", colorCount: 3, pattern: "horizontalStripe" },
  { code: "fr", nameJa: "フランス", colorCount: 3, pattern: "verticalStripe" },
  { code: "it", nameJa: "イタリア", colorCount: 3, pattern: "verticalStripe" },
  { code: "au", nameJa: "オーストラリア", colorCount: 3, pattern: "complex" },
  { code: "kr", nameJa: "かんこく", colorCount: 4, pattern: "complex" },
  { code: "es", nameJa: "スペイン", colorCount: 2, pattern: "horizontalStripe" },
  { code: "ch", nameJa: "スイス", colorCount: 2, pattern: "centeredCross" },
  { code: "nl", nameJa: "オランダ", colorCount: 3, pattern: "horizontalStripe" },

  // パターン学習用に残す、単純な模様の国（地頭系の分類問題に使う）
  { code: "bd", nameJa: "バングラデシュ", colorCount: 2, pattern: "circle" },
  { code: "ng", nameJa: "ナイジェリア", colorCount: 2, pattern: "verticalStripe" },
  { code: "pl", nameJa: "ポーランド", colorCount: 2, pattern: "horizontalStripe" },
  { code: "at", nameJa: "オーストリア", colorCount: 2, pattern: "horizontalStripe" },
  { code: "id", nameJa: "インドネシア", colorCount: 2, pattern: "horizontalStripe" },
  { code: "se", nameJa: "スウェーデン", colorCount: 2, pattern: "nordicCross" },
  { code: "dk", nameJa: "デンマーク", colorCount: 2, pattern: "nordicCross" },
  { code: "fi", nameJa: "フィンランド", colorCount: 2, pattern: "nordicCross" },
];

export function getFlag(code: string): FlagData | undefined {
  return FLAGS.find((f) => f.code === code);
}
