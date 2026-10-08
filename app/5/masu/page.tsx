import MasuPage, { masuMetadata } from "@/app/components/MasuPage";

export const metadata = masuMetadata(5);

export default function Page() {
  return <MasuPage age={5} />;
}
