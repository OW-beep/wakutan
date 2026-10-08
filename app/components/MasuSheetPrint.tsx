import PrintHeader from "./PrintHeader";
import type { MasuSheet } from "../data/masuKeisan";

/**
 * 印刷だけに使う、入力欄のない ますけいさん（オリジナルプリント用）。
 * 1シート＝1ページ。「こたえつき」で印刷するときだけ、ますの中にこたえが出る。
 */
export default function MasuSheetPrint({ sheet }: { sheet: MasuSheet }) {
  const n = sheet.size;
  const head = n <= 5 ? "text-2xl" : n <= 7 ? "text-xl" : "text-lg";
  return (
    <section className="wt-page-break mt-8 print:mt-0">
      <PrintHeader total={n * n} showTime />
      <p className="hidden print:block text-xs mb-2 text-gray-600">
        やりかた：よこの すう ＋ たての すう の こたえを、まじわる ますに かこう。
      </p>
      <p className="wt-print-answer-title text-sm font-bold text-green-700 mb-1">こたえ（おうちの人用）</p>
      <table className="w-full table-fixed border-collapse text-center">
        <tbody>
          <tr>
            <th className={`border-2 border-gray-700 bg-teal-100 h-11 print:h-14 ${head}`}>＋</th>
            {sheet.top.map((t, c) => (
              <th key={c} className={`border-2 border-gray-700 bg-teal-50 h-11 print:h-14 font-bold ${head}`}>
                {t}
              </th>
            ))}
          </tr>
          {sheet.left.map((l, r) => (
            <tr key={r}>
              <th className={`border-2 border-gray-700 bg-teal-50 h-11 print:h-14 font-bold ${head}`}>{l}</th>
              {sheet.top.map((t, c) => (
                <td key={c} className="border-2 border-gray-700 h-11 print:h-14 relative">
                  <span className="wt-print-cell-answer">{t + l}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
