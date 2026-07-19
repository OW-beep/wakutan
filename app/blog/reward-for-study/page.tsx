import Link from "next/link";

export const metadata = {
  title: "幼児にごほうびは必要？やる気を育てる上手な褒め方｜わくたん",
  description:
    "幼児学習でのごほうびの使い方を、心理学の考え方もふまえて解説。やる気を長く育てる褒め方のコツを紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🏅</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            幼児にごほうびは必要？やる気を育てる上手な褒め方
          </h1>

          <p className="text-lg text-gray-700">
            「ごほうびがないとやらない」を防ぐには
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          「ドリルを頑張ったらシールをあげる」「できたらお菓子」——ごほうびを使うこと自体は悪いことではありませんが、使い方によっては逆効果になることもあります。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ごほうび（外発的動機づけ）の効果と注意点
        </h2>

        <p className="leading-8 mb-4">
          心理学では、ごほうびによってやる気を引き出すことを「外発的動機づけ」と呼びます。すぐに効果が出やすい一方で、ごほうびがないと行動しなくなってしまうリスクも指摘されています。
        </p>

        <p className="leading-8 mb-4">
          心理学者エドワード・デシの実験では、もともと興味を持って取り組んでいた活動に報酬を与えると、報酬がなくなった後の取り組み意欲がかえって下がる現象が確認されており、「アンダーマイニング効果」と呼ばれています。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          内側から育つやる気（内発的動機づけ）
        </h2>

        <p className="leading-8 mb-4">
          一方、「できた」「わかった」という達成感そのものから生まれるやる気は「内発的動機づけ」と呼ばれ、長く続きやすいとされています。
        </p>

        <p className="leading-8 mb-4">
          自分で選ぶ・自分の力でできたと感じる・認められる、という3つの要素が、内発的動機づけを支えると考えられています。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            結果ではなく「頑張った過程」を具体的に褒めることが、内側からのやる気につながります。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ごほうびを使うなら「頻度」に注意
        </h2>

        <p className="leading-8 mb-4">
          ごほうびを絶対に使ってはいけないわけではありません。毎回ではなく、特別な達成のときだけにするなど、頻度を抑えることでリスクを減らせます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          言葉のごほうびを活用する
        </h2>

        <p className="leading-8 mb-4">
          「最後まで頑張ったね」「よく考えたね」という具体的な言葉がけも、立派なごほうびです。物より言葉の方が、内側からのやる気を育てやすいとされています。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>ごほうび（外発的動機づけ）は即効性がある一方、頼りすぎると逆効果になることがある</li>
            <li>デシの実験では、報酬がやる気を下げる「アンダーマイニング効果」が確認されている</li>
            <li>「できた」という達成感から生まれる内発的動機づけの方が長続きしやすい</li>
            <li>結果より過程を具体的に褒める言葉がけを大切にする</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            褒め方を意識しながら、今日のドリルにも一緒に取り組んでみませんか？
          </p>

          <Link
            href="/category/parent"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            保護者向け記事をもっと見る
          </Link>

        </div>

      </article>

    </main>
  );
}
