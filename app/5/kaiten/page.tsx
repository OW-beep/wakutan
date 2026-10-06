import GenrePage, { genreMetadata } from "@/app/components/GenrePage";

export const metadata = genreMetadata(5, "kaiten");

export default function Page() {
  return <GenrePage age={5} genreKey="kaiten" />;
}
