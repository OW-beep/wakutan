export function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-md mb-8">
      <div className="text-5xl mb-3">📚</div>

      <h1 className="text-4xl font-extrabold text-orange-700 mb-3">
        {title}
      </h1>

      <p className="text-lg text-gray-700">
        {subtitle}
      </p>
    </div>
  );
}

export function Heading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-bold mt-10 mb-4 bg-yellow-100 border-l-8 border-orange-400 p-3 rounded-r-xl">
      {children}
    </h2>
  );
}

export function Point({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl my-6">
      {children}
    </div>
  );
}

export function Summary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-50 p-6 rounded-2xl border mt-10">
      {children}
    </div>
  );
}