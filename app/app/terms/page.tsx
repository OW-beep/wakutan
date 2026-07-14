export const metadata = {
  title: "利用規約｜わくたん",
  description: "わくたんの利用規約",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white p-6">

      <article className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          利用規約
        </h1>

        <p className="mb-4 leading-7">
          本規約は「わくたん」（以下、本サイト）の利用条件を定めるものです。
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3">
          利用について
        </h2>

        <p className="mb-4 leading-7">
          本サイトは無料で利用できます。学習目的の範囲内でご利用ください。
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3">
          禁止事項
        </h2>

        <p className="mb-4 leading-7">
          以下の行為は禁止します。
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>不正アクセス</li>
          <li>コンテンツの無断転載</li>
          <li>システムへの過度な負荷</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-3">
          免責事項
        </h2>

        <p className="mb-4 leading-7">
          本サイトの利用によって生じた損害について、一切の責任を負いません。
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3">
          変更について
        </h2>

        <p className="leading-7">
          本規約は予告なく変更される場合があります。
        </p>

      </article>

    </main>
  );
}