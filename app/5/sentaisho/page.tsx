import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(5, "sentaisho");

export default function Page() {
  return <GenrePage age={5} genreKey="sentaisho" />;
}
