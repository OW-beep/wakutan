import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

type Props = {
  title: string;
  description: string;
  category: string;
  children: React.ReactNode;
};

export default function BlogArticle({
  title,
  description,
  category,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-yellow-50">

      <div className="max-w-4xl mx-auto px-6 py-10">

        <Breadcrumb
          items={[
            {
              name: "記事一覧",
              href: "/articles",
            },
            {
              name: title,
            },
          ]}
        />

        <article className="bg-white rounded-3xl shadow-lg p-8">

          <div className="inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full mb-4">
            {category}
          </div>

          <h1 className="text-4xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-gray-600 mb-8">
            {description}
          </p>

          <div className="prose prose-lg max-w-none">
            {children}
          </div>

        </article>

        <div className="bg-orange-100 rounded-3xl p-8 mt-10">

          <h2 className="text-2xl font-bold mb-4">
            🌈 わくたんの無料ドリル
          </h2>

          <p className="mb-6">
            毎日10問の無料知育ドリルに挑戦してみましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            <Link
              href="/4"
              className="bg-white rounded-xl p-4 text-center font-bold hover:bg-orange-50"
            >
              4歳ドリル
            </Link>

            <Link
              href="/5"
              className="bg-white rounded-xl p-4 text-center font-bold hover:bg-orange-50"
            >
              5歳ドリル
            </Link>

            <Link
              href="/6"
              className="bg-white rounded-xl p-4 text-center font-bold hover:bg-orange-50"
            >
              6歳ドリル
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}