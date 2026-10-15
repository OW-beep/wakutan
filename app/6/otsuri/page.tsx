import OtsuriPage, { otsuriMetadata } from "@/app/components/OtsuriPage";

export const metadata = otsuriMetadata(6);

export default function Page() {
  return <OtsuriPage age={6} />;
}
