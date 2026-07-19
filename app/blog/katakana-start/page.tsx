import Link from "next/link";

export const metadata = {
  title: "カタカナはいつから教える？｜わくたん",
  description:
    "カタカナを教え始めるタイミングと、ひらがなとの学習の違いについて解説します。無理なく取り入れるためのステップも紹介します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">

      <article className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">

          <div className="text-5xl mb-3">🔡</div>

          <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
            カタカナはいつから教える？
          </h1>

          <p className="text-lg text-gray-700">
            ひらがなとの違いを意識した進め方
          </p>

        </div>
        <p className="text-lg leading-8 mb-6">
          ひらがなが読めるようになると、次に気になるのが「カタカナはいつから教えればいいの？」という疑問です。
        </p>

        <p className="text-lg leading-8 mb-6">
          カタカナはひらがなより先に教える必要はなく、ひらがなにある程度慣れてから触れ始めるのが自然な流れです。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            📊 ひらがな習得とのタイムラグ
          </p>
          <p>
            複数の教育系メディアの解説によると、ひらがなの読みが定着し始めるのは4〜5歳ごろが目安とされ、カタカナはそこからさらに遅れて定着していく傾向があるとされています。
            小学校の国語カリキュラムでも、1年生でひらがな、その後にカタカナという順序で学習が進みます。
            家庭でもこの順序を意識し、ひらがなの読みにある程度自信がついてからカタカナに触れ始めると、混乱が少なく進めやすいでしょう。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          カタカナを始めるタイミング
        </h2>

        <p className="leading-8 mb-4">
          多くの場合、ひらがなの読みにある程度慣れる5〜6歳ごろから、カタカナに触れ始めるとスムーズです。
        </p>

        <p className="leading-8 mb-4">
          小学校でも1年生でひらがな、その後にカタカナを学ぶ流れになっているため、家庭でも焦って先取りする必要はありません。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          身近なカタカナから始める
        </h2>

        <p className="leading-8 mb-4">
          「バナナ」「テレビ」「ケーキ」など、子どもにとって身近な言葉にはカタカナが多く使われています。
        </p>

        <p className="leading-8 mb-4">
          生活の中で目にする言葉から始めると、興味を持って取り組みやすくなります。
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
          <p className="font-bold mb-2">
            💡 ポイント
          </p>
          <p>
            「これもカタカナだよ」と、街中の看板やパッケージで見つけるゲーム感覚もおすすめです。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ひらがなとの形の違いに注意
        </h2>

        <p className="leading-8 mb-4">
          「シ」と「ツ」、「ソ」と「ン」など、似た形のカタカナは混同しやすいポイントです。
        </p>

        <p className="leading-8 mb-4">
          無理に一度に覚えさせず、間違えても「よくあることだよ」と伝えてあげましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          ひらがなと混同しやすい文字
        </h2>

        <p className="leading-8 mb-4">
          「へ」と「ヘ」、「り」と「リ」のように、ひらがなとカタカナで似た形の文字もあります。
        </p>

        <p className="leading-8 mb-4">
          混同しても大きな問題ではありませんが、「これはひらがな、こっちはカタカナだよ」と種類の違いを意識させる声かけが役立ちます。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          アルファベットとの違いに戸惑う場合も
        </h2>

        <p className="leading-8 mb-4">
          英語のアルファベットに触れる機会がある子は、カタカナと混同することもあります。焦らず「これは日本語の文字、これは英語の文字」と整理してあげましょう。
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
          焦らず段階的に
        </h2>

        <p className="leading-8 mb-4">
          カタカナは読めるようになるまでに時間がかかる子も多い文字です。ひらがなと同じように、読むことから少しずつ慣れていきましょう。
        </p>

        <div className="bg-green-50 p-6 rounded-2xl border mt-10">

          <h3 className="font-bold text-xl mb-3">
            🌱 この記事のまとめ
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>カタカナはひらがなにある程度慣れてから始めるのが自然</li>
            <li>身近な言葉（バナナ・テレビなど）から触れると興味を持ちやすい</li>
            <li>似た形の文字は混同しやすいので、間違えても責めない</li>
            <li>読むことから少しずつ慣れていく</li>
          </ul>

        </div>

        <div className="mt-10 bg-yellow-50 border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            🚀 今日のドリルに挑戦しよう
          </h3>

          <p className="mb-3">
            ひらがなに慣れてきたら、今日のドリルで言葉への理解も深めてみませんか？
          </p>

          <Link
            href="/5/hiragana"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop"
          >
            ひらがなドリルを見る
          </Link>

        </div>

      </article>

    </main>
  );
}
