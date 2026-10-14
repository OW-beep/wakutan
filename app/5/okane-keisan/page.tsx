import OkaneKeisanPage, { okaneKeisanMetadata } from "@/app/components/OkaneKeisanPage";

export const metadata = okaneKeisanMetadata(5);

export default function Page() {
  return <OkaneKeisanPage age={5} />;
}
