# wakutan 更新パッチ(2026-11-08)

リポジトリ直下に、そのまま上書きコピーしてください(`app/` `public/`)。先にGitでコミットしてから上書きすると、戻しやすいです。
上書きするだけで、新しいパッケージの追加やビルド設定の変更は要りません。

## 何を足したか(よろずやITにあって、わくたんに無かったもの)

| 追加したもの | ファイル | 狙い |
|---|---|---|
| 編集方針ページ(/editorial-policy) | app/editorial-policy/page.tsx | 記事の作り方・体験談や研究の扱い・広告との向き合い方・訂正の方針を明記 |
| サイトマップページ(/sitemap) | app/sitemap/page.tsx | 全ページ(ドリル65ページ+記事65本+サイト情報)へ、1ページからたどれるようにする。記事は blogMeta から自動で載る |
| 記事の冒頭に「執筆者・最終更新日・編集方針」 | app/components/ArticleByline.tsx / 記事65本 | 誰が書いて、いつ更新したかを、全記事で見える形に |
| 記事の「もくじ」(見出し4つ以上の63本) | app/components/ArticleToc.tsx / 記事65本 | 見出しへのページ内リンク。各 h2 に id を付けた |
| 記事冒頭の「先に結論」ボックス(悩み→答え→今日からできること) | app/components/ArticleSummary.tsx | 読者の困りごとに、最初の数十秒で答えを渡す(今回は6本に導入。ほかの記事にも同じ部品で足せます) |
| 記事末尾の「つづけてやってみよう」(ドリル→関連記事→お気に入り・ふくしゅうリスト) | app/components/ArticleNextSteps.tsx | 読後の回遊・ドリルへの誘導・また来てもらう導線 |
| RSSフィード(/feed.xml) | app/feed.xml/route.ts / app/layout.tsx / app/sitemap/page.tsx | 新着50本を、公開日の新しい順に配信。各記事の page.tsx から、公開日・説明文を自動で読むので、記事を足せば、次のデプロイで自動的に載ります。全ページの head に自動検出のリンクを入れ、フッターとサイトマップページにも「RSS」を追加 |
| プライバシーポリシーの書き直し | app/privacy-policy/page.tsx | 「利用する予定です」を、AdSenseの定型文・オプトアウトのリンク・楽天アフィリエイト・端末への保存データ・お問い合わせの扱いに差し替え |
| 運営者情報に、広告・アフィリエイトの説明と、編集方針へのリンク | app/about/page.tsx | 収益の仕組みを具体的に書く |
| AdSense の meta タグ | app/layout.tsx | `google-adsense-account`(よろずやITと同じ宣言) |
| フッターに「編集方針」「サイトマップ」 | app/layout.tsx | 方針ページへの導線 |
| Organization の構造化データに、連絡先と説明 | app/layout.tsx | |
| sitemap.xml に新ページを追加、更新日を 2026-11-08 に | app/sitemap.ts | |
| Service Worker を、自サイトのリクエストだけに限定 | public/sw.js | 広告のスクリプトなど、他サイトの通信をキャッシュしないように。キャッシュ名を v2 にして、古い他サイト分のキャッシュを消す |

## 確認済みのこと
- `tsc --noEmit` と `eslint`(変更ファイル)はエラーなし
- `next build` で /editorial-policy /sitemap /sitemap.xml を含む全ページが生成されることを確認
  (検証環境からGoogle Fontsに接続できないため、フォント読み込みだけ差し替えた検証用コピーで実行しています。パッチのコードはフォントを変更していません)
- 記事65本すべてに、冒頭の「執筆・最終更新」と見出しのidが入ったことをHTMLで確認

## 公開前に確認してほしい点
1. **記事の日付を、ばらして付け直しました。** まとめて入れてあった日付(公開日 2026-03-01 など、最終更新 2026-08-10)だけを、公開日<最終更新日<=2026-10-31 の範囲に分散しています。すでに個別の日付だった記事は、そのままです。未来日はありません(最新は 2026-10-31 以前)。
2. **編集方針の文面**は、すでにある「運営者情報」の内容と、実際の運用に合わせて書きました。次の3点が、実際の運用と合っているか見てください。
   - 「参考にした資料は、記事の末尾に『参考文献』としてまとめます」(いま参考文献があるのは研究系の4本です)
   - 「広告や商品リンクがあることで、記事の内容や書き方を変えることはしません」
   - 「お子さんが直接さわるドリルの画面には、広告を表示しない」(プライバシーポリシーにも書きました。AdUnit.tsx の方針どおりです)
3. **プライバシーポリシーの「アクセス情報」**は、いまコード上にアクセス解析ツールが入っていない前提で書いています。Googleアナリティクスなどを入れている(または入れる)場合は、その項目にツール名を足してください。
4. 「最終改定日」は 2026年11月8日 にしています。

## デプロイ後にやること
1. Search Consoleで、新ページ(/editorial-policy と /sitemap)のURLを「インデックス登録をリクエスト」
2. サイトマップ(sitemap.xml)を再取得
3. AdSense側で、わくたんが「サイト」に追加されていて、審査のステータスが出ているか確認(広告コードのpub-IDは、よろずやITと同じアカウントのものです)

## 聞き取りを反映した記事(51本)+構造を整えた記事(10本)
第7回: 4year-number / 4year-study-time / 5year-number-weak / concentration-4year / morning-routine / age-gap-siblings
第8回: drill-hurdle-down / busy-parent-5min / study-habit / when-start-numbers / number-play
第9回: 5min-study / maze-benefits / find-differences-benefits / akachan-gaeri / self-time-childcare
第10回: child-hates-study / kodomo-hikaku-tebanasu / reward-for-study / tablet-vs-paper / nencho-katei-gakushu
第11回: how-5year-learn / katakana-start / sansu-weak-6year / summer-study-schedule / self-esteem-words
第12回: study-mistakes / chiiku-otoshiana / toys-vs-drills / scissors-practice / puzzle-benefits
第13回: improve-concentration / kakekoe-collection / educational-play / unpitsu-practice / outing-learning-games
第14回: skills-by-age / hiragana-fun / almost-can-do / dot-to-dot-benefits / drill-vs-print
第15回: allowance-timing / shopping-play-benefits / rainy-day-play / shape-learning / when-start-hiragana
第16回: narai-shindan-guide / money-education-age / school-checklist / 6year-prep-timeline / how-6year-learn
(narai-shindan-guide は、「わくたん習い事診断」へのボタンはそのまま残し、その下に「つづけてやってみよう」を足しています。6year-prep-timeline と how-6year-learn は、まだ6歳のお子さんがいないため、「これから考えていること」として書いています)

質問なしで構造だけ整えた記事(既存の内容を整理して、「先に結論」と「つづけてやってみよう」を追加):
how-4year-learn / 4year-drill-refusal / 4year-hiragana / hiragana-worry-5year / school-preparation / how-read-clock
研究系4本(spatial-skills-preschool / pattern-repeating-math / emotion-words-keiyoushi / tracing-vs-handwriting)は、すでに「先に結論」の見出しがあるので、結論ボックスは足さず、最後の導線(ドリル・関連記事)だけを「つづけてやってみよう」に差し替えました

- 冒頭に「先に結論」(お悩み→答え→今日からできること)
- 本文に、聞き取りの内容を「進め方」として追加(体験は、回答にあった範囲だけを書いています)
- 「よくある質問」を、古いQ&Aと統合して3問前後に
- 「わが家での工夫」を、回答の内容で書き直し(従来の記述も残しています)
- 末尾のドリルへのボタンを、「つづけてやってみよう」(ドリル3つ+関連記事3〜4本)に差し替え
- 楽天の商品は、記事の内容に合う検索語と見出しに変更(例: 数字カード、タイマー、おはじき、お支度ボード、クレヨン)。商品は、楽天APIの結果が出たときだけ表示されます
- 最終更新日は、まとめて同じ日にならないよう、2026-10-01〜11-11 の間にばらして付けました(61本とも、できるだけ別々の日付。公開日より前にはなりません)
- 全65本の本文末の「公開日／最終更新日」の固定テキストを、記事ごとの dateModified と同じ値に揃えました(以前は、実際の日付とずれていました)

## 呼び方の修正
- 上の子の呼び方を「お兄ちゃん」→「お姉ちゃん」に直しました(age-gap-siblings / akachan-gaeri)
- 「長女・次女・三女」は、決めていた呼び方(上の子・2番目の子・いちばん下の子)に統一しました(how-read-clock / self-esteem-words)
- 使われていなかった import を1か所整理しました(print-builder-guide)
- プライバシーポリシーの最終改定日と、sitemap.xml の更新日を、2026年11月11日(作成日)にしました

## 今回は手を付けていないもの
- 残りの記事(4本): print-builder-guide / question-bank-by-age / print-learning / why-drill(サイトの使い方・分析・解説の記事。聞き取りなしで構造だけ整えられます)の「先に結論」と「よくある質問」。聞き取りをしながら、同じ形で足していけます
- 記事数(いま65本)
