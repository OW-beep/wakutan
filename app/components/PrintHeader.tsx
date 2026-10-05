/**
 * 印刷したときだけ表示される、日付・なまえの記入欄。
 * 画面上では非表示（hidden）、印刷時のみ表示（print:block）にすることで、
 * 普段の閲覧の邪魔にならないようにしている。
 * 問題の一番上（＝1ページ目の先頭）に置くことで、複数ページ印刷になっても
 * 1ページ目にだけ表示される。
 */
export default function PrintHeader() {
  return (
    <div className="hidden print:flex justify-end items-end gap-6 mb-4 text-sm">
      <p>＿＿＿＿月＿＿＿＿日</p>
      <p>なまえ：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿</p>
    </div>
  );
}
