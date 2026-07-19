import Link from "next/link";
import Script from "next/script";

type Props = {
  items: {
    name: string;
    href?: string;
  }[];
};

export default function Breadcrumb({ items }: Props) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href
        ? `https://wakutan.vercel.app${item.href}`
        : undefined,
    })),
  };


  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <nav className="text-sm text-gray-500 mb-6">

        <Link
          href="/"
          className="hover:text-orange-600 transition-colors"
        >
          ホーム
        </Link>


        {items.map((item, index) => (

          <span key={index}>

            <span className="mx-2">
              ＞
            </span>


            {item.href ? (

              <Link
                href={item.href}
                className="hover:text-orange-600 transition-colors"
              >
                {item.name}
              </Link>

            ) : (

              <span>
                {item.name}
              </span>

            )}

          </span>

        ))}

      </nav>
    </>
  );
}