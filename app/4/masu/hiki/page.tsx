import MasuPage, { masuMetadata } from "@/app/components/MasuPage";

export const metadata = masuMetadata(4, "sub");

export default function Page() {
  return <MasuPage age={4} op="sub" />;
}
