type Props = {
  /** 印刷される問題の数。10問なら「10てんまんてん」、それ以外は「◯もんちゅう」表記になる。 */
  total?: number;
  /** true のとき「かかった じかん」の記入欄も出す（ます計算など、時間をはかる問題用） */
  showTime?: boolean;
};

/**
 * 印刷したときだけ表示される、日付・なまえ・とくてんの記入欄。
 * 画面上では非表示（hidden）、印刷時のみ表示（print:flex）にすることで、
 * 普段の閲覧の邪魔にならないようにしている。
 * 1行にまとめて、問題を入れる場所をなるべく広く取る。
 */
export default function PrintHeader({ total = 10, showTime = false }: Props) {
  return (
    <div className="hidden print:flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-3 text-sm">
      <p>＿＿月＿＿日</p>
      <p>なまえ：＿＿＿＿＿＿＿＿＿＿＿＿</p>
      {showTime && <p>かかった じかん：＿＿ふん＿＿びょう</p>}
      <p className="border-2 border-gray-700 rounded-xl px-3 py-1 font-bold">
        {total === 10
          ? "10てんまんてんちゅう　＿＿＿てん（1もん1てん）"
          : `${total}もんちゅう　＿＿＿もん せいかい`}
      </p>
    </div>
  );
}
