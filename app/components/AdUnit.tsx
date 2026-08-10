"use client";

import { useEffect, type CSSProperties } from "react";

type Props = {
  /** AdSenseの広告ユニットID（管理画面で広告ユニットを作成すると発行される） */
  slot: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * AdSense審査通過後、広告ユニットを作成したら slot にIDを渡すだけで使える
 * 汎用の広告ユニットコンポーネント。
 *
 *   <AdUnit slot="1234567890" />
 *
 * 【広告配置ポリシー（重要）】
 * このコンポーネントは app/blog/ 配下の記事ページ（保護者が読むコンテンツ）にのみ
 * 設置すること。
 *
 * app/4/ ・ app/5/ ・ app/6/ 配下のドリル操作画面（子どもが直接タップ・入力する画面）
 * には設置しない。理由：
 *   1) 子どもの意図しないクリックは Google の無効クリック判定のリスクになり、
 *      アカウント停止など事業継続上のリスクにつながる
 *   2) 広告主にとっても「購買意思のないタップ」はコンバージョンに繋がらず、
 *      広告価値が実質的に低い
 *   3) 本サイトは4〜6歳向けの子ども向けコンテンツを含むため、対象ページによっては
 *      Googleの「child-directed（子ども向け）」判定を受け、パーソナライズ広告が
 *      使えなくなる可能性がある。この制約は保護者向けの記事ページとは切り離して
 *      扱うのが望ましい。
 *
 * 記事ページ内でも、本文の読みやすさ・誤操作防止を優先し、見出しの直下や
 * 記事末尾など文脈の区切りに置き、ボタン（CTAリンク）の近くには置かないこと。
 */
export default function AdUnit({ slot, className, style }: Props) {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogleはグローバルに読み込まれるAdSenseのスクリプトが定義する
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSenseのスクリプト読み込み前など、失敗しても致命的ではないので握りつぶす
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`}
      style={style ?? { display: "block" }}
      data-ad-client="ca-pub-4630812027939211"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
