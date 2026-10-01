import { useSyncExternalStore } from "react";

export type FavoriteItem = {
  href: string;
  title: string;
};

const KEY = "wakutan:favorites";
const EMPTY: FavoriteItem[] = [];

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

function readAll(): FavoriteItem[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed;
  } catch {
    return EMPTY;
  }
}

// useSyncExternalStoreのgetSnapshotは、値が変わっていない間は同じ参照を
// 返す必要がある（そうしないと再レンダーが無限に走る）。書き込み時だけ
// キャッシュを更新し、読み取り自体はキャッシュを返すようにする。
let cache: FavoriteItem[] = readAll();

function writeAll(items: FavoriteItem[]) {
  cache = items;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // 容量オーバーやプライベートモードなどで失敗しても致命的ではないので握りつぶす
  }
  notify();
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): FavoriteItem[] {
  return cache;
}

function getServerSnapshot(): FavoriteItem[] {
  return EMPTY;
}

/** お気に入り一覧を読む（SSRとの不一致を起こさずクライアントの実際の値に同期する） */
export function useFavorites(): FavoriteItem[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function getFavorites(): FavoriteItem[] {
  return readAll();
}

export function isFavorite(href: string): boolean {
  return readAll().some((item) => item.href === href);
}

/** お気に入りの追加・解除をまとめて行う。戻り値は変更後に「お気に入りに入っているか」 */
export function toggleFavorite(item: FavoriteItem): boolean {
  const items = readAll();
  const exists = items.some((i) => i.href === item.href);

  if (exists) {
    writeAll(items.filter((i) => i.href !== item.href));
    return false;
  }

  writeAll([...items, item]);
  return true;
}

export function removeFavorite(href: string) {
  writeAll(readAll().filter((i) => i.href !== href));
}
