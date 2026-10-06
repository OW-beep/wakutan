import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(4, "mikata");

export default function Page() {
  return <GenrePage age={4} genreKey="mikata" />;
}
