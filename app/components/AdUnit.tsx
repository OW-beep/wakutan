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
