import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  alternates: { canonical: "/privacy-policy" },
  description:
    "わくたんのプライバシーポリシー。広告の配信、Cookie、端末への保存データ、アフィリエイトリンク、お問い合わせの扱いについてご案内します。",
};

const h2Class = "text-2xl font-bold mt-10 mb-4";
const pClass = "leading-8";
const linkClass = "text-orange-700 underline underline-offset-4";

export default function Page() {
  return (
    <main className="min-h-screen bg-white p-6">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8">プライバシーポリシー</h1>

        <p className={pClass}>
          「わくたん」（以下、当サイト）は、訪問してくださる方のプライバシーを大切にしています。当サイトでの情報の扱いについて、以下のとおりお知らせします。
        </p>

        <h2 className={h2Class}>このサイトの対象について</h2>
        <p className={pClass}>
          当サイトは、4〜6歳のお子さんの家庭学習に使うドリルを、保護者の方に向けて公開しているサイトです。会員登録やログインの仕組みはなく、お子さんのお名前・年齢・写真などの個人情報を、入力していただく場面もありません。
        </p>

        <h2 className={h2Class}>広告について</h2>
        <p className={pClass}>
          当サイトは、第三者配信の広告サービス「Google AdSense」を利用しています。Googleなどの第三者配信事業者は、Cookieを使用して、ユーザーが当サイトや他のサイトに過去にアクセスした際の情報に基づいて、広告を配信します。
        </p>
        <p className={`${pClass} mt-4`}>
          Googleが広告Cookieを使用することにより、Googleやそのパートナーは、当サイトや他のサイトへのアクセス情報に基づいて、ユーザーに適した広告を表示できます。
        </p>
        <p className={`${pClass} mt-4`}>
          ユーザーは、
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            広告設定
          </a>
          で、パーソナライズ広告を無効にできます。また、
          <a
            href="https://www.aboutads.info/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            aboutads.info
          </a>
          にアクセスすると、第三者配信事業者がパーソナライズ広告の掲載に使用するCookieを、無効にできる場合があります。
        </p>
        <p className={`${pClass} mt-4`}>
          Googleによる広告でのデータの取り扱いについては、
          <a
            href="https://policies.google.com/technologies/ads?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Googleのポリシーと規約（広告）
          </a>
          をご覧ください。
        </p>
        <p className={`${pClass} mt-4`}>
          お子さんが直接さわるドリルの画面には、広告を表示しない方針で運営しています。広告は、保護者の方が読む記事ページなどに表示します。
        </p>

        <h2 className={h2Class}>アフィリエイトプログラムについて</h2>
        <p className={pClass}>
          当サイトは、楽天市場の商品を紹介するアフィリエイトプログラム（楽天アフィリエイト）に参加しています。記事内の商品リンクをクリックして商品を購入された場合、当サイトに紹介料が支払われることがあります。商品リンクには「PR」と表示しています。
        </p>
        <p className={`${pClass} mt-4`}>
          商品の価格や在庫は、楽天市場の検索結果をもとに表示しており、変動することがあります。ご購入の際は、必ず販売ページの最新の情報をご確認ください。
        </p>

        <h2 className={h2Class}>Cookieについて</h2>
        <p className={pClass}>
          Cookieは、ウェブサイトがお使いのブラウザに保存する小さなデータです。広告の配信などの目的で、Googleなどの第三者がCookieを使用することがあります。Cookieの受け入れは、ブラウザの設定で拒否できます。設定の方法は、お使いのブラウザのヘルプをご確認ください。ただし、Cookieを無効にすると、一部の機能が正しく動かなくなることがあります。
        </p>

        <h2 className={h2Class}>お使いの端末に保存される記録について</h2>
        <p className={pClass}>
          「お気に入り」「ふくしゅうリスト」「シール」や、ドリルへの取り組みの記録などは、お使いの端末のブラウザの中（ローカルストレージ）に保存されます。これらの記録は、当サイトのサーバーには送信されず、運営者が見ることはできません。ブラウザの閲覧データを削除すると、記録も消えます。
        </p>

        <h2 className={h2Class}>アクセス情報について</h2>
        <p className={pClass}>
          当サイトは、Vercel Inc. のサービスで公開しています。ページを表示する際に、IPアドレスやブラウザの種類などの情報が、サービスの運用に必要な範囲で、ホスティング事業者の仕組みによって記録されることがあります。運営者は、これらの情報を個人の特定には使用しません。
        </p>
        <p className={`${pClass} mt-4`}>
          今後、Googleアナリティクスなどのアクセス解析ツールを導入した場合は、この項目に使用するツールの名称と、収集される情報の内容を追記します。
        </p>

        <h2 className={h2Class}>お問い合わせについて</h2>
        <p className={pClass}>
          <Link href="/contact" className={linkClass}>
            お問い合わせ
          </Link>
          でいただいたメールアドレスなどの情報は、ご連絡への返信のためにのみ使用します。ご本人の同意がある場合や、法令に基づく場合を除いて、第三者に提供することはありません。
        </p>

        <h2 className={h2Class}>免責事項</h2>
        <p className={pClass}>
          当サイトの情報は、できるだけ正確なものを掲載するよう努めていますが、内容の正確性や完全性を保証するものではありません。当サイトの情報を利用したことで生じた損害について、運営者は責任を負いかねます。くわしくは
          <Link href="/terms" className={linkClass}>
            利用規約
          </Link>
          をご覧ください。
        </p>

        <h2 className={h2Class}>プライバシーポリシーの変更について</h2>
        <p className={pClass}>
          当サイトは、法令の変更やサービス内容の変更に合わせて、この方針を見直すことがあります。変更した場合は、このページに最新の内容を掲載します。
        </p>

        <p className="mt-10 text-sm text-gray-500">
          運営者：わくたん運営者（個人運営）
          <br />
          最終改定日：2026年11月8日
        </p>
      </article>
    </main>
  );
}
