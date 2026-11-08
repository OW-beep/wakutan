type Props = {
  /** 読者の困りごと（例: 「4歳が数を数えても、物の数と合いません」） */
  worry: string;
  /** その困りごとへの、いちばん短い答え */
  answer: string;
  /** 今日からできること（2〜4個） */
  steps: string[];
};

/**
 * 記事の冒頭に置く「先に結論」。
 * 読者の困りごとに対して、最初の数十秒で答えを渡すための箱。
 * 詳しい理由や進め方は、このあとの本文で説明する。
 */
export default function ArticleSummary({ worry, answer, steps }: Props) {
  return (
    <aside
      aria-label="先に結論"
      className="mb-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-6"
    >
      <p className="mb-1 text-sm font-bold text-orange-700">✅ 先に結論</p>
      <p className="mb-3 text-sm text-gray-600">お悩み：{worry}</p>
      <p className="mb-4 text-lg font-bold leading-8 text-gray-800">{answer}</p>
      <p className="mb-2 text-sm font-bold text-orange-700">今日からできること</p>
      <ol className="list-decimal space-y-1.5 pl-6 leading-7 text-gray-700">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </aside>
  );
}
