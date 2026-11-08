import Link from "next/link";
import { blogMeta } from "@/app/data/blogMeta";

type Drill = { href: string; label: string; desc: string };
type Next = { slug: string; desc: string };

type Props = {
  drills: Drill[];
  articles: Next[];
};

/**
 * 記事の最後に置く「つづき」。
 * 読み終えた保護者が、次にやること（ドリル）と、次に読むこと（関連する悩みの記事）を
 * 迷わず選べるようにする。ドリルは日替わりで更新されるので、また来てもらう理由にもなる。
 */
export default function ArticleNextSteps({ drills, articles }: Props) {
  const [primary, ...others] = drills;
  const titleOf = (slug: string) =>
    blogMeta.find((a) => a.slug === slug)?.title ?? slug;

  return (
    <section
      aria-label="この記事のつづき"
      className="print-hide mt-10 rounded-3xl bg-orange-100 p-6 sm:p-8"
    >
      <h3 className="mb-2 text-xl font-bold">🚶 つづけてやってみよう</h3>
      <p className="mb-5 leading-7 text-gray-700">
        読んだあとは、短くてもいいので、まず1回やってみるのがおすすめです。ドリルは毎日の問題が入れ替わるので、また覗いてみてください。
      </p>

      {primary && (
        <div className="mb-4">
          <Link
            href={primary.href}
            className="wt-btn-pop inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:opacity-90"
          >
            {primary.label}
          </Link>
          <p className="mt-2 text-sm leading-6 text-gray-700">{primary.desc}</p>
        </div>
      )}

      {others.length > 0 && (
        <ul className="mb-6 grid gap-3 sm:grid-cols-2">
          {others.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="block rounded-2xl bg-white p-4 transition hover:shadow-md"
              >
                <span className="font-bold text-orange-700">{d.label}</span>
                <span className="mt-1 block text-sm leading-6 text-gray-600">
                  {d.desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {articles.length > 0 && (
        <>
          <h4 className="mb-3 font-bold">📖 こんなお悩みの記事も、あわせてどうぞ</h4>
          <ul className="space-y-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="font-semibold text-orange-700 underline underline-offset-4 hover:text-orange-800"
                >
                  {titleOf(a.slug)}
                </Link>
                <span className="mt-0.5 block text-sm leading-6 text-gray-600">
                  {a.desc}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-6 text-sm leading-6 text-gray-600">
        あとで見返したいページは、
        <Link href="/favorites" className="underline underline-offset-4">
          ⭐ お気に入り
        </Link>
        に入れておくと便利です。苦手だった問題は
        <Link href="/review" className="underline underline-offset-4">
          📌 ふくしゅうリスト
        </Link>
        で、あとから復習できます。
      </p>
    </section>
  );
}
