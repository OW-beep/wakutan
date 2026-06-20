import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        👨‍👩‍👧 保護者向け
      </h1>

      <div className="space-y-4">

        <Link href="/blog/school-preparation">
          🎒 小学校入学前に身につけたい力
        </Link>

        <br />

        <Link href="/blog/5min-study">
          ⏰ 毎日5分学習の効果
        </Link>

        <br />

        <Link href="/blog/study-habit">
          🌱 家庭学習を続けるコツ
        </Link>

        <br />

        <Link href="/blog/print-learning">
          📚 プリント学習のメリット
        </Link>

      </div>

    </main>
  );
}