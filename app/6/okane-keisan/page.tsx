import OkaneKeisanPage, { okaneKeisanMetadata } from "@/app/components/OkaneKeisanPage";

export const metadata = okaneKeisanMetadata(6);

export default function Page() {
  return <OkaneKeisanPage age={6} />;
}
