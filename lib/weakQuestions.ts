import { useSyncExternalStore } from "react";

export type WeakQuestion = {
  genre: string;
  question: string;
  answer: string;
  explanation: string;
  addedAt: string;
};

const KEY = "wakutan:weak-questions";
const EMPTY: WeakQuestion[] = [];
const MAX_ITEMS = 200;

type Listener = () => void;
const listeners = new Set<Listener>();
function notify() {
  listeners.forEach((l) => l());
}
function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readAll(): WeakQuestion[] {
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

let cache: WeakQuestion[] = readAll();

function writeAll(items: WeakQuestion[]) {
  cache = items;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // 容量オーバーやプライベートモードなどで失敗しても致命的ではないので握りつぶす
  }
  notify();
}

/** 「むずかしかった」を記録する。同じ問題（ジャンル＋問題文）は上書きするだけで増えない */
export function addWeakQuestion(item: Omit<WeakQuestion, "addedAt">) {
  const items = readAll();
  const exists = items.some((i) => i.genre === item.genre && i.question === item.question);
  if (exists) return;

  const next = [...items, { ...item, addedAt: new Date().toISOString() }];
  // 増えすぎないよう、古いものから間引く
  writeAll(next.length > MAX_ITEMS ? next.slice(next.length - MAX_ITEMS) : next);
}

/** 復習して「できた」ら、苦手リストから外す */
export function removeWeakQuestion(genre: string, question: string) {
  writeAll(readAll().filter((i) => !(i.genre === genre && i.question === question)));
}

function getSnapshot(): WeakQuestion[] {
  return cache;
}
function getServerSnapshot(): WeakQuestion[] {
  return EMPTY;
}

export function useWeakQuestions(): WeakQuestion[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
