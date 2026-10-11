import KurisagariPage, { kurisagariMetadata } from "@/app/components/KurisagariPage";

export const metadata = kurisagariMetadata(6);

export default function Page() {
  return <KurisagariPage age={6} />;
}
