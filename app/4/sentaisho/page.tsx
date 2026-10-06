import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(4, "sentaisho");

export default function Page() {
  return <GenrePage age={4} genreKey="sentaisho" />;
}
