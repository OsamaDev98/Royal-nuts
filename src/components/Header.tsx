"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAr = locale === "ar";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { label: t("nav.home"), href: `/` },
    { label: t("nav.about"), href: `/#about` },
    { label: t("nav.stages"), href: `/#stages` },
    { label: t("nav.products"), href: `/products` },
    { label: t("nav.whyUs"), href: `/#why-us` },
    { label: t("nav.contact"), href: `/#contact` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2 backdrop-blur-xl shadow-2xl" : "py-4 bg-transparent"
      }`}
      style={
        isScrolled
          ? {
              background: "rgba(28,40,32,0.97)",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Royal Nuts"
                width={48}
                height={48}
                priority
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-black text-[#F0EDE8] text-lg tracking-tight pb-1"
                style={{ fontFamily: "var(--font-cairo)" }}
              >
                {isAr ? "مصنع رويال" : "Royal Nuts"}
              </span>
              <span className="text-[10px] text-[#C9A84C] font-semibold tracking-widest uppercase">
                {isAr ? "للفول السوداني" : "Peanuts"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-[#F0EDE8]/70 hover:text-[#F0EDE8] transition-colors duration-300 rounded-lg hover:bg-white/5 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-start" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#C9A84C",
              }}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? "EN" : "ع"}</span>
            </button>
            <Link
              href="/products"
              className="px-5 py-2 rounded-full font-bold text-sm text-[#1C2820] hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#C9A84C,#8B6820)" }}
            >
              {isAr ? "المنتجات" : "Products"}
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-xs font-bold cursor-pointer"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#C9A84C",
              }}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-[#F0EDE8]/70 hover:text-[#F0EDE8] hover:bg-white/5 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden backdrop-blur-xl overflow-hidden"
            style={{
              background: "rgba(28,40,32,0.98)",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-[#F0EDE8]/70 hover:text-[#F0EDE8] hover:bg-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div
                className="pt-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Link
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 rounded-xl text-[#1C2820] font-bold shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#C9A84C,#8B6820)",
                  }}
                >
                  {isAr ? "عرض المنتجات" : "View Products"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
