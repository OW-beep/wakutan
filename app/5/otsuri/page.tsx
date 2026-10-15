import OtsuriPage, { otsuriMetadata } from "@/app/components/OtsuriPage";

export const metadata = otsuriMetadata(5);

export default function Page() {
  return <OtsuriPage age={5} />;
}
