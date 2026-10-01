/**
 * AdSenseの広告ユニットID（スロット）を一元管理する。
 *
 * 【使い方】
 * 1. AdSenseの審査に通ったら、管理画面で「広告ユニットを作成」→
 *    形式は「記事内広告（In-article）」がおすすめ（読みやすさを崩しにくいため）。
 * 2. 発行された広告ユニットIDを、下の IN_ARTICLE_AD_SLOT にそのまま貼り付ける。
 * 3. これだけで、全61記事に設置済みの <AdUnit> が一斉に有効になる
 *    （記事ごとに書き換える必要はない）。
 *
 * 審査中・未設定の間は "REPLACE_WITH_AD_UNIT_ID" のままでOK。
 * AdUnitコンポーネント自体は表示されるが、広告が配信されないだけで
 * サイトが壊れることはない（空のiframeとして高さ0で折りたたまれる）。
 */
export const IN_ARTICLE_AD_SLOT = "REPLACE_WITH_AD_UNIT_ID";
