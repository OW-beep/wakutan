import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "わくたん",
    template: "%s｜わくたん",
  },
  description:
    "4歳〜6歳向け無料知育ドリル。毎日3問で楽しく学ぼう。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Script
  strategy="afterInteractive"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  data-ad-client="ca-pub-4630812027939211"
/>
      <body className="bg-yellow-50 text-gray-800 min-h-screen flex flex-col">

        {/* ヘッダー */}
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <Link href="/" className="text-2xl font-extrabold text-orange-600">
              🌈 わくたん
            </Link>

            <nav className="flex gap-4 text-sm font-semibold">
              <Link href="/4">4さい</Link>
              <Link href="/5">5さい</Link>
              <Link href="/6">6さい</Link>
              <Link href="/articles">記事一覧</Link>
            </nav>

          </div>
        </header>

        {/* メイン */}
        <main className="flex-1">
          {children}
        </main>

        {/* フッター */}
        <footer className="bg-white border-t mt-20">
          <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="text-xl font-bold mb-2">🌈 わくたん</h3>
                <p className="text-gray-600">わくわくたんけんたい</p>
                <p className="text-gray-600">4〜6歳向け無料知育ドリル</p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <Link href="/about">わくたんについて</Link>
                <Link href="/articles">記事一覧</Link>
                <Link href="/privacy-policy">プライバシーポリシー</Link>
                <Link href="/terms">利用規約</Link>
                <Link href="/contact">お問い合わせ</Link>
              </div>

            </div>

            <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
              © 2026 わくたん
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}