import { useSyncExternalStore } from "react";

/**
 * 「がんばりシール」機能。
 *
 * あえて「連続◯日」のストリーク表示にはしていない。
 * 休んだ翌日に「連続記録が途切れました」と表示されると、
 * わくたんが大切にしている「休んでもまた1問から」という考え方と矛盾してしまうため。
 * 代わりに、取り組んだ日が増えるだけの「コレクション」方式にしている
 * （記録が減ったり途切れたりすることはない）。
 */

const KEY = "wakutan:sticker-dates";
const EMPTY: string[] = [];

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function readDates(): string[] {
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

let cache: string[] = readDates();

function writeDates(dates: string[]) {
  cache = dates;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(dates));
  } catch {
    // 容量オーバーやプライベートモードなどで失敗しても致命的ではないので握りつぶす
  }
  notify();
}

/** 今日の分を記録する。同じ日に何度呼んでも1日分としてカウントする */
export function recordToday(): void {
  const dates = readDates();
  const today = todayStr();
  if (!dates.includes(today)) {
    writeDates([...dates, today]);
  }
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): string[] {
  return cache;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

/** 記録した日付の一覧を読む（SSRとの不一致を起こさずクライアントの実際の値に同期する） */
export function useStickerDates(): string[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
