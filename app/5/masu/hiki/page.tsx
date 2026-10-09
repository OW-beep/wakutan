import MasuPage, { masuMetadata } from "@/app/components/MasuPage";

export const metadata = masuMetadata(5, "sub");

export default function Page() {
  return <MasuPage age={5} op="sub" />;
}
