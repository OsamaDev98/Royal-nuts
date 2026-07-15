"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Award,
  Globe2,
  Leaf,
  ShieldCheck,
  Zap,
  DollarSign,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  Star,
  Factory,
} from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import { Link } from "@/i18n/routing";
import { type ProductData } from "@/lib/products-data";

interface LandingPageClientProps {
  locale: string;
  featuredProducts: ProductData[];
}

/* ─── Palette constants ──────────────────────────────────────── */
const BG = "#1C2820"; // main bg
const BG_ALT = "#162018"; // alternate darker sections
const SURFACE = "#26342C"; // card / panel bg
const TEXT = "#F0EDE8"; // primary text
const GOLD = "#C9A84C";
const GREEN = "#1F5E3B";
const BORDER = "rgba(201,168,76,0.20)";

/* ─── FadeIn ─────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Section Label ──────────────────────────────────────────── */
function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? GREEN : GOLD;
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: color + "50" }} />
      <span
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color }}
      >
        {children}
      </span>
      <span className="h-px w-8" style={{ background: color + "50" }} />
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────── */
export default function LandingPageClient({
  locale,
  featuredProducts,
}: LandingPageClientProps) {
  const t = useTranslations();
  const isAr = locale === "ar";

  const whyUsItems = [
    {
      icon: Leaf,
      titleKey: "whyUs.item1_title",
      descKey: "whyUs.item1_desc",
      color: "#3D9962",
    },
    {
      icon: ShieldCheck,
      titleKey: "whyUs.item2_title",
      descKey: "whyUs.item2_desc",
      color: GOLD,
    },
    {
      icon: Zap,
      titleKey: "whyUs.item3_title",
      descKey: "whyUs.item3_desc",
      color: "#8B5A2B",
    },
    {
      icon: Award,
      titleKey: "whyUs.item4_title",
      descKey: "whyUs.item4_desc",
      color: "#3D9962",
    },
    {
      icon: DollarSign,
      titleKey: "whyUs.item5_title",
      descKey: "whyUs.item5_desc",
      color: GOLD,
    },
    {
      icon: Globe2,
      titleKey: "whyUs.item6_title",
      descKey: "whyUs.item6_desc",
      color: "#8B5A2B",
    },
  ];

  const testimonials = [
    {
      name: isAr ? "م. أحمد عبد الرحمن" : "Eng. Ahmed Abdelrahman",
      role: isAr ? "مدير مصنع" : "Director of Factory",
      text: isAr
        ? "نتعامل مع المصنع منذ 2 سنوات لتوريد الفول السوداني المجروش. دقة الفرز الإلكتروني ونظافة المنتج وفرت علينا الكثير من الوقت والتالف."
        : "We have dealt with the factory for 2 years for supplying crushed peanuts. The precision of electronic sorting saved us time and waste.",
      rating: 5,
    },
    {
      name: isAr ? "أ. السيد محمد" : "Mr. El-Sayed Mohamed",
      role: isAr ? "مدير استيراد" : "Import Manager",
      text: isAr
        ? "طحينة السمسم والسمسم الأبيض الذي نستورده من مصنع رويال يطابق المعايير العالمية تماماً. نوصي بشدة بالتعامل معهم."
        : "The sesame tahini and white sesame seeds we import from Royal Nuts fully match global standards. We highly recommend them.",
      rating: 5,
    },
    {
      name: isAr ? "عمر جلال" : "Omar Galal",
      role: isAr ? "موزع معتمد" : "Authorized Distributor",
      text: isAr
        ? "جودة الفول السوداني الطبيعي ممتازة، والطعم رائع. أسعار المصنع تنافسية جداً، ونتعامل معهم منذ سنوات."
        : "The quality of the natural peanuts is excellent, and the taste is great. The factory's prices are very competitive, and we have been dealing with them for years.",
      rating: 5,
    },
  ];

  const stats = [
    { value: 5, suffix: "+", label: isAr ? "سنة خبرة" : "Years Experience" },
    { value: 100, suffix: "+", label: isAr ? "طن سنوياً" : "Tons / Year" },
    { value: 15, suffix: "+", label: isAr ? "متخصص" : "Specialists" },
    { value: 3, suffix: "+", label: isAr ? "دولة تصدير" : "Export Countries" },
  ];

  return (
    <div className="overflow-hidden">
      {/* ════════════════════ 1. HERO ════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_background.png"
            alt="Royal Nuts Factory"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(0.28) saturate(0.85)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom,${BG}60,transparent,${BG})`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right,${BG}50,transparent,${BG}50)`,
            }}
          />
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div
            className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.05]"
            style={{
              border: `1px solid ${GOLD}`,
              boxShadow: `0 0 120px 40px ${GOLD}10`,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}40` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: GOLD }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: GOLD }}
              >
                {isAr ? "منتجات طبيعية ١٠٠٪" : "100% Natural Products"}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.4] tracking-tight"
              style={{
                backgroundImage: `linear-gradient(135deg,${TEXT} 40%,${GOLD} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("hero.title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium px-2"
              style={{ color: `${TEXT}88` }}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <Link
                href="/products"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{
                  background: `linear-gradient(135deg,${GOLD},#E8C875)`,
                  color: BG,
                  boxShadow: `0 8px 30px ${GOLD}30`,
                }}
              >
                {t("hero.btnDiscover")}
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`}
                />
              </Link>
              <a
                href="#about"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: TEXT,
                }}
              >
                {t("hero.btnAbout")}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span
            className="text-[12px] uppercase tracking-[0.2em] font-bold"
            style={{ color: `${TEXT}30` }}
          >
            {isAr ? "اسحب" : "Scroll"}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5" style={{ color: `${GOLD}50` }} />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ 2. ABOUT ════════════════════ */}
      <section
        id="about"
        className="py-24 md:py-32 scroll-mt-20"
        style={{ background: BG }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="space-y-6">
                <SectionLabel>{t("about.subtitle")}</SectionLabel>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight"
                  style={{ color: TEXT }}
                >
                  {t("about.title")}
                </h2>
                <div
                  className="h-px w-16"
                  style={{
                    background: `linear-gradient(90deg,${GOLD},transparent)`,
                  }}
                />
                <p
                  className="text-base leading-relaxed"
                  style={{ color: `${TEXT}60` }}
                >
                  {t("about.p1")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: `${TEXT}60` }}
                >
                  {t("about.p2")}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      icon: Factory,
                      label: t("about.equipment"),
                      sub: isAr
                        ? "ليزر ضوئي متكامل"
                        : "Full optical laser sorting",
                    },
                    {
                      icon: Globe2,
                      label: t("about.export"),
                      sub: isAr
                        ? "معايير دولية معتمدة"
                        : "Certified intl. standards",
                    },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="p-5 rounded-2xl"
                      style={{ background: SURFACE, border: BORDER }}
                    >
                      <Icon className="w-6 h-6 mb-3" style={{ color: GOLD }} />
                      <h4
                        className="font-bold text-sm mb-1"
                        style={{ color: TEXT }}
                      >
                        {label}
                      </h4>
                      <p className="text-xs" style={{ color: `${TEXT}40` }}>
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div
                  className="relative rounded-3xl overflow-hidden aspect-[4/3]"
                  style={{ border: `1px solid ${GOLD}28` }}
                >
                  <Image
                    src="/images/gallery_factory_ext.webp"
                    alt="Royal Nuts Factory"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2820]/60 via-transparent to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl"
                    style={{
                      background: "rgba(28,40,32,0.90)",
                      backdropFilter: "blur(16px)",
                      border: `1px solid ${GOLD}28`,
                    }}
                  >
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: GOLD }}
                    >
                      {isAr ? "التقنية والمعدات" : "Technology & Equipment"}
                    </p>
                    <p
                      className="text-sm font-semibold leading-snug"
                      style={{ color: TEXT }}
                    >
                      {isAr
                        ? "أحدث خطوط الإنتاج والفرز الإلكتروني"
                        : "Latest production & electronic sorting lines"}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════ 3. PRODUCTION STAGES ════════════════════ */}
      <section
        id="stages"
        className="py-24 md:py-32 relative scroll-mt-20"
        style={{ background: BG_ALT }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(31,94,59,0.14), transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <SectionLabel>{t("stages.subtitle")}</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mt-4"
                style={{ color: TEXT }}
              >
                {t("stages.title")}
              </h2>
            </div>
          </FadeIn>
          <Timeline />
        </div>
      </section>

      {/* ════════════════════ 4. FEATURED PRODUCTS ════════════════════ */}
      <section
        id="products"
        className="py-24 md:py-32 scroll-mt-20"
        style={{ background: BG }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-5">
              <div>
                <SectionLabel>{t("products_page.subtitle")}</SectionLabel>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black mt-4"
                  style={{ color: TEXT }}
                >
                  {t("nav.products")}
                </h2>
              </div>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shrink-0 self-start sm:self-auto hover:scale-105"
                style={{ border: `1px solid ${GOLD}40`, color: GOLD }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = GOLD;
                  (e.currentTarget as HTMLElement).style.color = BG;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = GOLD;
                }}
              >
                {isAr ? "عرض الكل" : "View All"}
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`}
                />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, idx) => (
              <FadeIn key={product.slug} delay={idx * 0.07}>
                <div
                  className="group rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: SURFACE, border: BORDER }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={isAr ? product.nameAr : product.nameEn}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t opacity-60"
                      style={{
                        background: `linear-gradient(to top,${SURFACE},transparent)`,
                      }}
                    />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                      style={{
                        background: `linear-gradient(135deg,${GOLD},#E8C875)`,
                        color: BG,
                      }}
                    >
                      {t(`products_page.filter_${product.category}`)}
                    </span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between gap-4">
                    <div>
                      <h3
                        className="font-bold text-base line-clamp-1 transition-colors group-hover:text-[#C9A84C]"
                        style={{ color: TEXT }}
                      >
                        {isAr ? product.nameAr : product.nameEn}
                      </h3>
                      <p
                        className="text-xs mt-2 line-clamp-2 leading-relaxed"
                        style={{ color: `${TEXT}40` }}
                      >
                        {isAr ? product.descAr : product.descEn}
                      </p>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="block w-full py-2.5 rounded-xl text-center font-bold text-xs transition-all duration-300 hover:scale-105"
                      style={{ border: `1px solid ${GOLD}30`, color: GOLD }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          GOLD;
                        (e.currentTarget as HTMLElement).style.color = BG;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                        (e.currentTarget as HTMLElement).style.color = GOLD;
                      }}
                    >
                      {isAr ? "التفاصيل والطلب" : "Details & Order"}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ 5. WHY US (cream section) ════════════════════ */}
      <section
        id="why-us"
        className="py-24 md:py-32 relative scroll-mt-20"
        style={{ background: BG_ALT }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.06), transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <SectionLabel>{t("whyUs.subtitle")}</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mt-4"
                style={{ color: TEXT }}
              >
                {t("whyUs.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUsItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.07}>
                  <div
                    className="group p-7 rounded-3xl transition-all duration-300 h-full hover:scale-[1.02]"
                    style={{ background: SURFACE, border: BORDER }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: item.color + "18" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <h3
                      className="text-lg font-black mb-2"
                      style={{ color: TEXT }}
                    >
                      {t(item.titleKey)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: `${TEXT}55` }}
                    >
                      {t(item.descKey)}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════ 6. STATS ════════════════════ */}
      <section
        className="py-24 md:py-28 relative overflow-hidden"
        style={{ background: GREEN }}
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: GOLD }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full opacity-05"
          style={{ background: GOLD }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                {t("numbers.title")}
              </h2>
              <p className="text-white/55 mt-4 text-sm max-w-xl mx-auto">
                {t("numbers.subtitle")}
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className="text-center p-6 md:p-8 rounded-3xl"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span
                      className="text-4xl sm:text-5xl md:text-6xl font-black"
                      style={{
                        backgroundImage: `linear-gradient(135deg,${GOLD},#E8C875)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      <AnimatedCounter value={stat.value} />
                    </span>
                    <span className="text-xl font-black text-[#E8C875]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm font-semibold">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ 7. TESTIMONIALS ════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <SectionLabel>{t("testimonials.subtitle")}</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mt-4"
                style={{ color: TEXT }}
              >
                {t("testimonials.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((test, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className="relative p-7 rounded-3xl flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
                  style={{ background: SURFACE, border: BORDER }}
                >
                  <span
                    className="absolute top-5 right-6 text-6xl font-black leading-none select-none"
                    style={{ color: `${GOLD}10` }}
                  >
                    &quot;
                  </span>
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{ fill: GOLD, color: GOLD }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed italic flex-grow"
                    style={{ color: `${TEXT}55` }}
                  >
                    &ldquo;{test.text}&rdquo;
                  </p>
                  <div
                    className="mt-6 pt-5 flex items-center gap-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                      style={{
                        background: `linear-gradient(135deg,${GOLD},#8B6820)`,
                        color: BG,
                      }}
                    >
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold" style={{ color: TEXT }}>
                        {test.name}
                      </h4>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: `${TEXT}35` }}
                      >
                        {test.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ 8. FAQ ════════════════════ */}
      <section
        id="faq"
        className="py-24 md:py-32 relative scroll-mt-20"
        style={{ background: BG_ALT }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14 md:mb-16">
              <SectionLabel>{t("faq.subtitle")}</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mt-4"
                style={{ color: TEXT }}
              >
                {t("faq.title")}
              </h2>
            </div>
          </FadeIn>
          <FaqAccordion />
        </div>
      </section>

      {/* ════════════════════ 9. CONTACT ════════════════════ */}
      <section
        id="contact"
        className="py-24 md:py-32 scroll-mt-20"
        style={{ background: BG }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <SectionLabel>{t("contact.subtitle")}</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black mt-4"
                style={{ color: TEXT }}
              >
                {t("nav.contact")}
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Info Panel */}
            <FadeIn>
              <div className="space-y-5">
                <div
                  className="p-7 rounded-3xl space-y-6"
                  style={{ background: SURFACE, border: BORDER }}
                >
                  <h3
                    className="text-base font-black pb-4"
                    style={{
                      color: TEXT,
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {t("contact.info")}
                  </h3>
                  {[
                    {
                      Icon: MapPin,
                      label: t("common.address"),
                      value: t("contact.location"),
                      href: "https://goo.gl/maps/sGYpCSWKGuYC7VD28?g_st=aw",
                    },
                    {
                      Icon: Phone,
                      label: t("common.call"),
                      value: "+20 106 586 3552",
                      href: "tel:+201065863552",
                    },
                    {
                      Icon: Mail,
                      label: t("common.email"),
                      value: "info@royal-nuts.net",
                      href: "mailto:info@royal-nuts.net",
                    },
                  ].map(({ Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${GOLD}14` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: GOLD }} />
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: `${TEXT}40` }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-sm mt-0.5 transition-colors group-hover:text-[#C9A84C]"
                          style={{ color: `${TEXT}70` }}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                  <div
                    className="grid grid-cols-2 gap-3 pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <a
                      href="https://wa.me/201065863552"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white hover:opacity-90 transition-all"
                      style={{ background: "#16A34A" }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t("common.whatsapp")}
                    </a>
                    <a
                      href="tel:+201065863552"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-all"
                      style={{
                        background: `linear-gradient(135deg,${GOLD},#E8C875)`,
                        color: BG,
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      {t("common.call")}
                    </a>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="relative rounded-3xl overflow-hidden h-44 flex flex-col items-center justify-center text-center p-6"
                  style={{ background: SURFACE, border: BORDER }}
                >
                  <MapPin
                    className="w-8 h-8 mb-2 animate-bounce"
                    style={{ color: GOLD }}
                  />
                  <p className="font-bold text-sm" style={{ color: TEXT }}>
                    {t("common.address")}
                  </p>
                  <p
                    className="text-xs mt-1 max-w-xs"
                    style={{ color: `${TEXT}40` }}
                  >
                    {t("contact.location")}
                  </p>
                  <a
                    href="https://goo.gl/maps/sGYpCSWKGuYC7VD28?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90"
                    style={{
                      background: `linear-gradient(135deg,${GOLD},#E8C875)`,
                      color: BG,
                    }}
                  >
                    {isAr ? "افتح في خرائط جوجل" : "Open in Google Maps"}
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.1}>
              <div
                className="p-7 sm:p-10 rounded-3xl"
                style={{ background: SURFACE, border: BORDER }}
              >
                <h3
                  className="text-base font-black mb-7"
                  style={{ color: TEXT }}
                >
                  {t("contact.form_title")}
                </h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
