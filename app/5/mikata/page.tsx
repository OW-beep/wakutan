import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(5, "mikata");

export default function Page() {
  return <GenrePage age={5} genreKey="mikata" />;
}
