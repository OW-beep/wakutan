export const metadata = {
  title: "プライバシーポリシー｜わくたん",
  description: "わくたんのプライバシーポリシー",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white p-6">

      <article className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-extrabold mb-8">
          プライバシーポリシー
        </h1>

        {/* 広告 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          広告について
        </h2>

        <p className="leading-8">
          当サイトではGoogle AdSenseを含む第三者配信の広告サービスを利用する予定です。
          ユーザーの興味に応じた広告を表示するためCookieを使用することがあります。
        </p>

        <p className="leading-8 mt-4">
          Googleなどの広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
        </p>

        {/* アクセス解析 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          アクセス解析について
        </h2>

        <p className="leading-8">
          当サイトではアクセス解析ツールを利用する場合があります。
          収集されるデータは匿名であり、個人を特定するものではありません。
        </p>

        {/* Cookie */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Cookieについて
        </h2>

        <p className="leading-8">
          Cookieを無効にすることで情報収集を拒否できます。
          設定方法はブラウザのヘルプをご確認ください。
        </p>

        {/* お問い合わせ */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          お問い合わせ
        </h2>

        <p className="leading-8">
          お問い合わせはお問い合わせページよりお願いいたします。
        </p>

      </article>

    </main>
  );
}