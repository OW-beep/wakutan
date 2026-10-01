import PrintBuilderClient from "./PrintBuilderClient";

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrintPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <PrintBuilderClient />
    </main>
  );
}
