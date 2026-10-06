import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import GenreAbilityBox from "./GenreAbilityBox";
import PrintArea from "./PrintArea";
import PrintHeader from "./PrintHeader";
import QuestionList from "./QuestionList";
import { generate4Questions } from "../data/generate4";
import { generate5Questions } from "../data/generate5";
import { generate6Questions } from "../data/generate6";
import { getDailyQuestions } from "../data/getDailyQuestions";
import { FIGURE_GENRES, type FigureGenreKey, type GenreAge } from "../data/figureGenreContent";

const SLUG: Record<FigureGenreKey, string> = {
  kaiten: "kaiten",
  sentaisho: "sentaisho",
  mikata: "mikata",
  keiyoushi: "keiyoushi",
};

export function genreMetadata(age: GenreAge, key: FigureGenreKey) {
  const c = FIGURE_GENRES[key];
  return {
    title: c.title(age),
    description: c.description[age],
    alternates: { canonical: `/${age}/${SLUG[key]}` },
  };
}

function ageNext(age: GenreAge): { href: string; label: string } | null {
  if (age === 4) return { href: "/5", label: "5歳向けドリル" };
  if (age === 5) return { href: "/6", label: "6歳向けドリル" };
  return null;
}

export default function GenrePage({ age, genreKey }: { age: GenreAge; genreKey: FigureGenreKey }) {
  const c = FIGURE_GENRES[genreKey];
  const data = age === 4 ? generate4Questions() : age === 5 ? generate5Questions() : generate6Questions();
  const all = data[genreKey];
  const count = genreKey === "keiyoushi" ? 10 : 20;
  const questions = getDailyQuestions(all, count);
  const next = ageNext(age);

  return (
    <main className={`min-h-screen ${c.bg}`}>
      <div className="max-w-4xl mx-auto p-6">
        <div className="print-hide">
          <Breadcrumb
            items={[
              { name: `${age}歳ドリル`, href: `/${age}` },
              { name: c.breadcrumb },
            ]}
          />
        </div>

        <div className="bg-white rounded-3xl shadow p-8 mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${c.text}`}>
            {c.emoji} {age}歳向け{c.breadcrumb}
          </h1>

          <div className="print-hide">
            <p className="leading-8">{c.intro}</p>
            <p className="leading-7 mt-1 text-sm text-gray-500">📝 {c.formal}</p>
            <p className={`leading-8 mt-3 font-bold ${c.text}`}>
              毎日{count}問を自動で更新・無料で印刷OK（書きこみ式）
            </p>
            <p className="leading-6 mt-2 text-xs text-gray-500">
              （{all.length}問のストックから、日替わりで{count}問を選んでいます）
            </p>
          </div>
        </div>

        <div className={`${c.bg} border border-gray-200 rounded-2xl p-5 mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm print-hide`}>
          <p>
            <span className="font-bold">🌱 この問題について：</span>
            {c.power}
          </p>
          <p>
            <span className="font-bold">⏱ めやす時間：</span>
            {c.time}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 mb-8 text-sm leading-7 print-hide">
          <p>
            <span className="font-bold">📘 {age}歳のレベル：</span>
            {c.level[age]}
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-bold">🖨 印刷するとき：</span>
            {c.printNote}
          </p>
        </div>

        <GenreAbilityBox genreKey={genreKey} />

        <PrintArea defaultCols={genreKey === "mikata" && age >= 5 ? 2 : 1}>
          <PrintHeader total={questions.length} />
          <QuestionList questions={questions} accentText={c.text} accentButton={c.button} />
        </PrintArea>

        <div className="mt-10 bg-white rounded-3xl shadow p-8 print-hide">
          <h2 className="text-2xl font-bold mb-4">👨‍👩‍👧 保護者の方へ</h2>

          <h3 className="text-lg font-bold mt-2 mb-2">この問題で育つ力</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            {c.grow.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">おうちでできる工夫</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 leading-7">
            {c.home.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2">つまずきやすいポイント</h3>
          <p className="leading-7 text-gray-700">{c.stumble}</p>

          {next && (
            <p className="leading-7 mt-6 text-sm text-gray-500 border-t pt-4">
              できるようになってきたら、
              <Link href={`/${age + 1}/${SLUG[genreKey]}`} className={`${c.text} font-bold hover:underline`}>
                {age + 1}歳向けの{c.breadcrumb}
              </Link>
              にも挑戦してみましょう。（{next.label}）
            </p>
          )}
        </div>

        <div className="mt-8 text-center print-hide">
          <Link
            href={`/${age}`}
            className={`inline-block ${c.button} text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition wt-btn-pop`}
          >
            ← {age}歳向けドリル一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
