import KuriagariPage, { kuriagariMetadata } from "@/app/components/KuriagariPage";

export const metadata = kuriagariMetadata(6);

export default function Page() {
  return <KuriagariPage age={6} />;
}
