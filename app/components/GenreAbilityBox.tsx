import { GENRE_ABILITIES } from "@/app/data/genreAbilities";
import { STAT_LABEL, STAT_COLOR } from "@/lib/abilities";

export default function GenreAbilityBox({ genreKey }: { genreKey: string }) {
  const info = GENRE_ABILITIES[genreKey];
  if (!info) return null;

  const color = STAT_COLOR[info.stat];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-8 print-hide">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          主に育つ力：{STAT_LABEL[info.stat]}
        </span>
      </div>

      <p className="leading-7 mb-3">
        <span className="font-bold">🌱 この問題で育つ力：</span>
        {info.growth}
      </p>

      <p className="leading-7">
        <span className="font-bold">🚀 将来役立つこと：</span>
        {info.future}
      </p>

      <p className="text-xs text-gray-400 mt-3">
        ※取り組むと「のうりょくステータス」の{STAT_LABEL[info.stat]}が育ちます。
      </p>
    </div>
  );
}
