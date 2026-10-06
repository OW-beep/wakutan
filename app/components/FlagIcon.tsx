import { FLAGS } from "../data/flagData";

type Props = {
  /** ISO 3166-1 alpha-2 コード（例: "jp", "us"） */
  flagKey: string;
  size?: number;
};

/**
 * 国旗を表示するアイコン。
 * オープンソースの flag-icons（MITライセンス）が提供する正確なSVG国旗を使用する。
 * 自作のイラストではないため、色や模様の描き間違いが起きない。
 */
export default function FlagIcon({ flagKey, size = 100 }: Props) {
  const flag = FLAGS.find((f) => f.code === flagKey);
  if (!flag) return null;

  const h = Math.round((size * 2) / 3);

  return (
    <span
      className={`fi fi-${flag.code}`}
      role="img"
      aria-label={`${flag.nameJa}の こっき`}
      style={{
        width: size,
        height: h,
        display: "inline-block",
        backgroundSize: "cover",
        borderRadius: 4,
        border: "2px solid #94a3b8",
      }}
    />
  );
}
