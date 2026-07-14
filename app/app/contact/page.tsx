import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "わくたんへのお問い合わせはこちら。",

  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow mb-8">

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            📮 お問い合わせ
          </h1>

          <p className="text-lg text-gray-700">
            ご質問・ご意見はこちらから
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow p-8">

          <p className="leading-8 mb-6">
            わくたんをご利用いただきありがとうございます。
          </p>

          <p className="leading-8 mb-6">
            サイトに関するご意見、ご感想、
            誤字脱字のご報告などがありましたら、
            下記メールアドレスまでご連絡ください。
          </p>

          <div className="bg-yellow-50 border rounded-2xl p-6 my-8">

            <p className="font-bold mb-2">
              ✉️ メールアドレス
            </p>

            <p className="text-lg break-all">
              wakutan.info@gmail.com
            </p>

          </div>

          <p className="text-sm text-gray-600">
            ※迷惑メール対策のため、
            件名に「わくたん問い合わせ」と記載いただけると助かります。
          </p>

        </div>

      </article>

    </main>
  );
}