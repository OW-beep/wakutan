"use client";

import { useEffect, useState } from "react";
import { useClientOnlyValue } from "@/lib/useClientOnlyValue";

type Props = {
  text: string;
};

function checkSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export default function SpeakButton({ text }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const supported = useClientOnlyValue(checkSupported, false);

  useEffect(() => {
    // ページを離れる・問題が切り替わるときに読み上げを止める
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!supported) return null;

  function handleClick() {
    const synth = window.speechSynthesis;

    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }

    synth.cancel(); // 他の読み上げが残っていたら止めてから開始
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    synth.speak(utterance);
    setSpeaking(true);
  }

  return (
    <button
      onClick={handleClick}
      aria-label={speaking ? "読み上げを止める" : "問題を読み上げる"}
      className={`print-hide inline-flex items-center justify-center w-9 h-9 rounded-full border-2 shrink-0 transition ${
        speaking
          ? "border-orange-400 bg-orange-50 text-orange-600"
          : "border-gray-200 bg-white text-gray-400 hover:border-orange-200"
      }`}
    >
      {speaking ? "⏹" : "🔊"}
    </button>
  );
}
