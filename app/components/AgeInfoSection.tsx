import Link from "next/link";

type Faq = {
  q: string;
  a: string;
};

type RelatedArticle = {
  href: string;
  emoji: string;
  title: string;
};

type Props = {
  age: string;
  colorText: string;
  colorBorder: string;
  colorBg: string;
  intro: string;
  traits: string[];
  skills: { title: string; desc: string }[];
  tips: string[];
  howToUse: string[];
  faqs: Faq[];
  relatedArticles: RelatedArticle[];
};

export default function AgeInfoSection({
  age,
  colorText,
  colorBorder,
  colorBg,
  intro,
  traits,
  skills,
  tips,
  howToUse,
  faqs,
  relatedArticles,
}: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-10 space-y-8">

      {/* この年齢の特徴 */}
      <section className="bg-white rounded-3xl shadow p-8">
        <h2 className={`text-2xl font-bold mb-4 ${colorText}`}>
          🌱 {age}歳はどんな時期？
        </h2>

        <p className="leading-8 mb-4">
          {intro}
        </p>

        <ul className="space-y-2">
          {traits.map((t, i) => (
            <li key={i} className="leading-7 flex gap-2">
              <span>・</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 身につく力 */}
      <section className="bg-white rounded-3xl shadow p-8">
        <h2 className={`text-2xl font-bold mb-4 ${colorText}`}>
          🚀 この時期に育てたい力
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 ${colorBg} border ${colorBorder}`}
            >
              <h3 className="font-bold text-lg mb-2">
                {s.title}
              </h3>
              <p className="leading-7 text-gray-700">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 家庭学習のポイント */}
      <section className="bg-white rounded-3xl shadow p-8">
        <h2 className={`text-2xl font-bold mb-4 ${colorText}`}>
          🏠 家庭学習のポイント
        </h2>

        <ul className="space-y-3">
          {tips.map((t, i) => (
            <li key={i} className="leading-7 flex gap-2">
              <span>✅</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ドリルの使い方 */}
      <section className="bg-white rounded-3xl shadow p-8">
        <h2 className={`text-2xl font-bold mb-4 ${colorText}`}>
          📝 わくたんドリルの使い方
        </h2>

        <ol className="space-y-3">
          {howToUse.map((t, i) => (
            <li key={i} className="leading-7 flex gap-3">
              <span className={`font-bold ${colorText}`}>
                {i + 1}.
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-3xl shadow p-8">
        <h2 className={`text-2xl font-bold mb-4 ${colorText}`}>
          ❓ 保護者の方からよくある質問
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="bg-gray-50 rounded-xl p-4 font-bold">
                Q. {f.q}
              </h3>
              <p className="text-gray-700 mt-2 leading-7">
                A. {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連記事 */}
      <section className="bg-white rounded-3xl shadow p-8">
        <h2 className={`text-2xl font-bold mb-4 ${colorText}`}>
          📚 関連記事
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {relatedArticles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="bg-gray-50 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span className="mr-2">{a.emoji}</span>
              {a.title}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
