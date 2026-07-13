"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Package } from "lucide-react";

interface Product {
  slug: string; category: string;
  nameAr: string; nameEn: string;
  descAr: string; descEn: string;
  image: string; price: string;
}

interface ProductsCatalogClientProps {
  locale: string; products: Product[]; initialCategory: string;
}

export default function ProductsCatalogClient({ locale, products, initialCategory }: ProductsCatalogClientProps) {
  const t = useTranslations("products_page");
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const isAr = locale === "ar";

  const categories = [
    { key: "all",        label: t("filter_all") },
    { key: "peanut",     label: t("filter_peanut") },
    { key: "butter",     label: t("filter_butter") },
    { key: "tahini",     label: t("filter_tahini") },
    { key: "sesame",     label: t("filter_sesame") },
    { key: "industrial", label: t("filter_industrial") },
  ];

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {categories.map((cat) => (
          <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer"
            style={
              activeCategory === cat.key
                ? { background: "linear-gradient(135deg,#C9A84C,#E8C875)", color: "#1C2820", boxShadow: "0 4px 20px rgba(201,168,76,0.25)" }
                : { background: "#26342C", color: "rgba(240,237,232,0.55)", border: "1px solid rgba(201,168,76,0.20)" }
            }>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, idx) => (
            <motion.div layout key={product.slug}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.35 }}>
              <div className="group rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{ background: "#26342C", border: "1px solid rgba(201,168,76,0.18)" }}>
                <div className="relative aspect-square overflow-hidden">
                  <Image src={product.image} alt={isAr ? product.nameAr : product.nameEn}
                    fill sizes="(max-width: 640px) 100vw,(max-width: 768px) 50vw,(max-width: 1024px) 33vw,25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={idx < 4} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26342C] via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[#1C2820]"
                    style={{ background: "linear-gradient(135deg,#C9A84C,#E8C875)" }}>
                    {t(`filter_${product.category}`)}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-[#F0EDE8] font-bold text-base line-clamp-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {isAr ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-[#F0EDE8]/40 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {isAr ? product.descAr : product.descEn}
                    </p>
                  </div>
                  <Link href={`/products/${product.slug}`}
                    className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-xs text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#1C2820]"
                    style={{ border: "1px solid rgba(201,168,76,0.30)" }}>
                    {isAr ? "التفاصيل والطلب" : "Details & Order"}
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-24 rounded-3xl mt-8"
          style={{ background: "#26342C", border: "1px dashed rgba(201,168,76,0.25)" }}>
          <Package className="w-12 h-12 text-[#C9A84C]/30 mx-auto mb-4" />
          <p className="text-[#F0EDE8]/40 font-semibold text-sm">
            {isAr ? "لا توجد منتجات متوفرة في هذا القسم." : "No products in this category."}
          </p>
        </div>
      )}
    </div>
  );
}
