"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();
  const isAr = locale === "ar";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.stages"), href: "/#stages" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.whyUs"), href: "/#why-us" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const categories = [
    { label: t("products_page.filter_peanut"), href: "/products?cat=peanut" },
    { label: t("products_page.filter_butter"), href: "/products?cat=butter" },
    { label: t("products_page.filter_tahini"), href: "/products?cat=tahini" },
    { label: t("products_page.filter_other"), href: "/products?cat=other" },
  ];

  return (
    <footer
      style={{
        background: "#162018",
        borderTop: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      {/* CTA Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#1F5E3B,#0F3020)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 40% 60% at 80% 50%, rgba(201,168,76,0.08), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              {isAr ? "تواصل معنا" : "Get in touch"}
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {isAr ? "هل أنت مهتم بمنتجاتنا؟" : "Interested in our products?"}
            </h3>
            <p className="text-white/50 mt-2 text-sm">
              {isAr
                ? "تواصل معنا الآن وسنرد في أقل من 24 ساعة."
                : "Contact us now and we'll reply within 24 hours."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/201065863552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#1C2820] transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#C9A84C,#E8C875)" }}
            >
              <MessageCircle className="w-4 h-4" />
              {t("common.whatsapp")}
            </a>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.22)" }}
            >
              {t("nav.contact")}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
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
              <div>
                <span className="block text-[#F0EDE8] font-black text-lg leading-tight">
                  {isAr ? "مصنع رويال" : "Royal Nuts"}
                </span>
                <span className="text-[10px] text-[#C9A84C] font-semibold tracking-widest uppercase">
                  {isAr ? "للفول السوداني" : "Peanuts"}
                </span>
              </div>
            </Link>
            <p className="text-[#F0EDE8]/40 text-sm leading-relaxed">
              {t("common.description")}
            </p>
            <div className="flex items-center gap-2">
              {[
                {
                  href: "https://wa.me/201065863552",
                  icon: MessageCircle,
                  title: t("common.whatsapp"),
                },
                {
                  href: "tel:+201065863552",
                  icon: Phone,
                  title: t("common.call"),
                },
                {
                  href: "mailto:info@royal-nuts.net",
                  icon: Mail,
                  title: t("common.email"),
                },
              ].map(({ href, icon: Icon, title }) => (
                <a
                  key={href}
                  href={href}
                  title={title}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#F0EDE8]/40 transition-all duration-300 hover:text-[#C9A84C] hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C9A84C] text-sm font-black mb-6 uppercase tracking-[0.15em]">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F0EDE8]/40 hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/60 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[#C9A84C] text-sm font-black mb-6 uppercase tracking-[0.15em]">
              {isAr ? "الأقسام" : "Categories"}
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="text-sm text-[#F0EDE8]/40 hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/60 transition-all duration-300" />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9A84C] text-sm font-black mb-6 uppercase tracking-[0.15em]">
              {t("nav.contact")}
            </h3>
            <ul className="space-y-4">
              {[
                {
                  Icon: MapPin,
                  value: t("contact.location"),
                  href: "https://goo.gl/maps/sGYpCSWKGuYC7VD28?g_st=aw",
                },
                {
                  Icon: Phone,
                  value: "+20 106 586 3552",
                  href: "tel:+201065863552",
                },
                {
                  Icon: Mail,
                  value: "info@royal-nuts.net",
                  href: "mailto:info@royal-nuts.net",
                },
              ].map(({ Icon, value, href }) => (
                <li key={href}>
                  <a href={href} className="flex items-start gap-3 group">
                    <Icon className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#F0EDE8]/40 group-hover:text-[#F0EDE8]/70 transition-colors leading-relaxed">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#F0EDE8]/25 text-xs">
            © {currentYear}{" "}
            {isAr
              ? "مصنع رويال للفول السوداني. جميع الحقوق محفوظة."
              : "Royal Peanut Factory. All Rights Reserved."}
          </p>
          <p className="text-[#F0EDE8]/25 text-xs">
            <a
              href="mailto:osamadev921@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A84C]"
            >
              {isAr
                ? "صُنع بفخر واحترافية بواسطة Osama dev 💚"
                : "Crafted with pride and passion by Osama dev 💚"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
