import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        🎂 年齢別学習
      </h1>

      <div className="space-y-4">

        <Link href="/blog/how-4year-learn">
          🧸 4歳の学び方
        </Link>

        <br />

        <Link href="/blog/how-5year-learn">
          🚀 5歳の学び方
        </Link>

        <br />

        <Link href="/blog/how-6year-learn">
          🎓 6歳の学び方
        </Link>

      </div>

    </main>
  );
}