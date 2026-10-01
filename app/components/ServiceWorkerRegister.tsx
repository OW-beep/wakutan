"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // 対応していないブラウザや失敗時も、通常のオンライン動作に影響しないので握りつぶす
      });
    }
  }, []);

  return null;
}
