import { getDbProducts } from "@/lib/products-data";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ProductsCatalogClient from "./ProductsCatalogClient";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ cat?: string }>;
}

export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { cat } = await searchParams;
  const initialCategory = cat || "all";
  const products = await getDbProducts();
  const t = await getTranslations("products_page");
  const isAr = locale === "ar";

  return (
    <div style={{ background: "#1C2820", minHeight: "100vh" }}>
      {/* Page Header */}
      <div className="relative pt-40 pb-24 text-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom,#162018,#1C2820)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(31,94,59,0.20), transparent)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8" style={{ background: "rgba(201,168,76,0.40)" }} />
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">
              {isAr ? "منتجات أصلية طبيعية" : "Original Natural Products"}
            </span>
            <span className="h-px w-8" style={{ background: "rgba(201,168,76,0.40)" }} />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-[#F0EDE8] leading-tight">
            {t("title")}
          </h1>
          <p className="text-[#F0EDE8]/50 text-base max-w-md mx-auto font-medium">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ProductsCatalogClient locale={locale} products={products} initialCategory={initialCategory} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}
