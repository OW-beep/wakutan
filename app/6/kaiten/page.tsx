import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(6, "kaiten");

export default function Page() {
  return <GenrePage age={6} genreKey="kaiten" />;
}
