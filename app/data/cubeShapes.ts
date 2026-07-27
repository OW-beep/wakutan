/**
 * 「つみき」問題（立方体を組み合わせて数を数える、空間認知の問題）用のデータ型とヘルパー。
 *
 * CubeShape は「上から見た れつ×ぎょう」ごとの高さ（つみあげた 立方体の数）を表す。
 * 例: [[2,3]] は横に2れつ並んでいて、高さがそれぞれ2こ・3このタワー。
 *     [[1,2],[2,1]] は2ぎょう×2れつで、それぞれの高さが 1,2 / 2,1 のかたまり。
 *
 * 高さ0のマスは「そこにはつみきが無い」ことを表す（かけた形も作れる）。
 */
export type CubeShape = number[][];

export function totalCubes(shape: CubeShape): number {
  return shape.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0);
}

/**
 * 高さの内訳を、子どもにも分かる短い日本語で説明する文章を作る。
 * 例: "つみきは 2こ・3こ・1こ・2こで、あわせて 8こだよ。"
 */
export function describeCubes(shape: CubeShape): string {
  const cols = shape.flat().filter(h => h > 0);
  const total = totalCubes(shape);
  const parts = cols.map(h => `${h}こ`).join("・");
  return `つみきは ${parts}で、あわせて ${total}こだよ。`;
}
