import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * サーバーでは serverValue を返し、クライアントでは compute() の結果を返す。
 * 日付計算やブラウザAPIの対応確認など、「クライアントでしか正しく計算できないが、
 * 計算後は（そのレンダー中は）変化しない値」を読むための共通フック。
 * useEffect+setStateで同じことをすると React の set-state-in-effect ルールに
 * 引っかかるため、useSyncExternalStoreを使い、購読は何もしない（値が後から
 * 変わることはない前提）no-op subscribeにしている。
 *
 * compute()が返す値はプリミティブ（number/string/boolean）を想定している
 * （Object.isでの同一性判定だけで再レンダー判定が安定するため）。
 */
export function useClientOnlyValue<T>(compute: () => T, serverValue: T): T {
  return useSyncExternalStore(noopSubscribe, compute, () => serverValue);
}
