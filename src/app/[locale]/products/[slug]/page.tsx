import { notFound } from "next/navigation";
import { getDbProductBySlug } from "@/lib/products-data";
import { setRequestLocale } from "next-intl/server";
import ProductDetailsClient from "./ProductDetailsClient";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = await getDbProductBySlug(slug);
  if (!product) notFound();

  const isAr = locale === "ar";
  const name = isAr ? product.nameAr : product.nameEn;

  return (
    <div style={{ background: "#1C2820", minHeight: "100vh" }}>
      {/* Cinematic header strip */}
      <div className="pt-32 pb-10 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom,#162018,#1C2820)",
          borderBottom: "1px solid rgba(201,168,76,0.10)",
        }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse 40% 80% at 50% 0%, rgba(31,94,59,0.18), transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#F0EDE8]/30 font-semibold flex-wrap">
            <span>{isAr ? "الرئيسية" : "Home"}</span>
            <span>/</span>
            <span>{isAr ? "المنتجات" : "Products"}</span>
            <span>/</span>
            <span className="text-[#C9A84C]">{name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-16">
        <ProductDetailsClient locale={locale} product={product} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { staticProducts } = await import("@/lib/products-data");
  const locales = ["ar", "en"];
  
  return locales.flatMap((locale) =>
    staticProducts.map((product) => ({
      locale,
      slug: product.slug,
    }))
  );
}
