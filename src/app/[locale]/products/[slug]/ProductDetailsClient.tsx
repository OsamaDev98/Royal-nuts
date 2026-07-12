"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronLeft, ChevronRight, Check, ShoppingBag, Info, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import OrderModal from "@/components/OrderModal";
import { ProductData } from "@/lib/products-data";

interface ProductDetailsClientProps { locale: string; product: ProductData; }

export default function ProductDetailsClient({ locale, product }: ProductDetailsClientProps) {
  const t = useTranslations("products_page");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const isAr = locale === "ar";

  const name      = isAr ? product.nameAr      : product.nameEn;
  const desc      = isAr ? product.descAr      : product.descEn;
  const features  = isAr ? product.featuresAr  : product.featuresEn;
  const sizes     = isAr ? product.sizesAr     : product.sizesEn;
  const uses      = isAr ? product.usesAr      : product.usesEn;
  const nutrition = isAr ? product.nutritionAr : product.nutritionEn;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Back link */}
      <div className="mb-10">
        <Link href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#F0EDE8]/40 hover:text-[#C9A84C] transition-colors duration-300 group">
          {isAr
            ? <ChevronRight className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            : <ChevronLeft  className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          }
          <span>{isAr ? "العودة إلى المنتجات" : "Back to Products"}</span>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* Image column */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative aspect-square rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(201,168,76,0.22)" }}>
            <Image src={product.image} alt={name} fill priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2820]/60 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-[#1C2820]"
              style={{ background: "linear-gradient(135deg,#C9A84C,#E8C875)" }}>
              {t(`filter_${product.category}`)}
            </span>
            {/* Price ribbon */}
            <div className="absolute bottom-5 left-5 right-5 px-5 py-3 rounded-2xl"
              style={{ background: "rgba(28,40,32,0.92)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <p className="text-[#F0EDE8]/40 text-[10px] font-bold uppercase tracking-wider">
                {isAr ? "سعر خاص للطلبيات التجارية" : "Special bulk pricing"}
              </p>
              <p className="text-lg font-black mt-0.5"
                style={{ backgroundImage: "linear-gradient(135deg,#C9A84C,#E8C875)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {product.price}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info column */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-7 space-y-8">

          {/* Header */}
          <div className="space-y-4">
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">
              {t(`filter_${product.category}`)}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F0EDE8] leading-tight">{name}</h1>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
            <p className="text-[#F0EDE8]/55 text-base leading-relaxed">{desc}</p>
          </div>

          {/* Features */}
          <div className="p-6 rounded-2xl space-y-4"
            style={{ background: "#26342C", border: "1px solid rgba(201,168,76,0.20)" }}>
            <h3 className="text-sm font-black text-[#F0EDE8] flex items-center gap-2 pb-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              {t("features")}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F0EDE8]/55">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(61,153,98,0.18)" }}>
                    <Check className="w-3 h-3 text-[#3D9962]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sizes + Usages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-black text-[#F0EDE8] mb-3">{t("sizes")}</h4>
              <div className="flex flex-wrap gap-2">
                {sizes.map((sz) => (
                  <span key={sz} className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#C9A84C] transition-all hover:scale-105"
                    style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.25)" }}>
                    {sz}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black text-[#F0EDE8] mb-3">{t("usages")}</h4>
              <ul className="space-y-2">
                {uses.map((us, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#F0EDE8]/45 leading-relaxed">
                    <span className="text-[#C9A84C] mt-0.5">•</span>
                    <span>{us}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nutrition Table */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-[#F0EDE8] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C9A84C]" />
              {t("nutritional_facts")}
            </h3>
            <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,168,76,0.20)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                    <th className="px-5 py-3 text-start text-xs font-black text-[#C9A84C] uppercase tracking-wider">
                      {isAr ? "العنصر الغذائي" : "Nutrient"}
                    </th>
                    <th className="px-5 py-3 text-center text-xs font-black text-[#C9A84C] uppercase tracking-wider">
                      {isAr ? "الكمية" : "Amount"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(nutrition).map(([key, value], idx) => (
                    <tr key={key} style={{
                      background: idx % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>
                      <td className="px-5 py-3 text-[#F0EDE8]/60 font-semibold text-xs">{key}</td>
                      <td className="px-5 py-3 text-center text-[#F0EDE8]/40 font-medium text-xs">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2"
            style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-[#F0EDE8]/30 text-xs">
              {isAr ? "تواصل معنا للحصول على أسعار الجملة والشحن" : "Contact us for bulk & shipping pricing"}
            </p>
            <button onClick={() => setIsOrderModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-black text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ background: "linear-gradient(135deg,#C9A84C,#8B6820)", color: "#1C2820", boxShadow: "0 8px 30px rgba(201,168,76,0.20)" }}>
              <ShoppingBag className="w-4 h-4" />
              <span>{t("orderNow")}</span>
            </button>
          </div>
        </motion.div>
      </div>

      <OrderModal productSlug={product.slug} productName={name} sizes={sizes}
        isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </div>
  );
}
