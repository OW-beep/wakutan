import MasuPage, { masuMetadata } from "@/app/components/MasuPage";

export const metadata = masuMetadata(6);

export default function Page() {
  return <MasuPage age={6} />;
}
