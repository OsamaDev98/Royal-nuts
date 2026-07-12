import { getDbProducts } from "@/lib/products-data";
import LandingPageClient from "./LandingPageClient";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://royalnuts.com";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const products = await getDbProducts();
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  /* ── JSON-LD Structured Data ──────────────────────────────── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Royal Nuts Factory",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logo.png` },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+20-100-000-0000",
          contactType: "customer service",
          areaServed: ["EG", "SA", "AE", "EU"],
          availableLanguage: ["Arabic", "English"],
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: locale === "ar" ? "مصنع رويال" : "Royal Nuts Factory",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: [locale === "ar" ? "ar" : "en"],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        name: "Royal Nuts Factory",
        url: BASE_URL,
        telephone: "+20-100-000-0000",
        email: "info@royalnuts.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "EG",
          addressLocality: "Egypt",
        },
        geo: { "@type": "GeoCoordinates" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPageClient locale={locale} featuredProducts={featuredProducts} />
    </>
  );
}
