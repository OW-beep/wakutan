import MasuPage, { masuMetadata } from "@/app/components/MasuPage";

export const metadata = masuMetadata(6, "sub");

export default function Page() {
  return <MasuPage age={6} op="sub" />;
}
