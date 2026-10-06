import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(6, "keiyoushi");

export default function Page() {
  return <GenrePage age={6} genreKey="keiyoushi" />;
}
