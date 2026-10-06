type Props = {
  /** 印刷される問題の数。10問なら「10てんまんてん」、それ以外は「◯もんちゅう」表記になる。 */
  total?: number;
};

/**
 * 印刷したときだけ表示される、日付・なまえ・とくてんの記入欄。
 * 画面上では非表示（hidden）、印刷時のみ表示（print:block）にすることで、
 * 普段の閲覧の邪魔にならないようにしている。
 * 問題の一番上（＝1ページ目の先頭）に置くことで、複数ページ印刷になっても
 * 1ページ目にだけ表示される。
 */
export default function PrintHeader({ total = 10 }: Props) {
  return (
    <div className="hidden print:block mb-4 text-sm">
      <div className="flex justify-end items-end gap-6">
        <p>＿＿＿＿月＿＿＿＿日</p>
        <p>なまえ：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿</p>
      </div>
      <div className="flex justify-end mt-3">
        <p className="border-2 border-gray-700 rounded-xl px-5 py-2 font-bold text-base">
          {total === 10
            ? "10てんまんてんちゅう　＿＿＿＿てん（1もん1てん）"
            : `${total}もんちゅう　＿＿＿＿もん せいかい`}
        </p>
      </div>
    </div>
  );
}
