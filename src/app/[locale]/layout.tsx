import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
import { Cairo, Poppins } from "next/font/google";
import "../globals.css";
import LenisScroll from "@/components/LenisScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: false, // only preload when en locale
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://royal-nuts.net";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "مصنع رويال | فول سوداني وسمسم وزبدة فول وطحينة طبيعية"
    : "Royal Nuts Factory | Peanuts, Sesame, Natural Peanut Butter & Tahini";

  const description = isAr
    ? "مصنع رويال — رواد في فرز الفول السوداني والسمسم وتصنيع زبدة الفول والطحينة الطبيعية 100%. فرز إلكتروني، تعبئة وتصدير بجودة عالمية."
    : "Royal Nuts Factory — pioneers in electronic sorting of peanuts & sesame and producing 100% natural peanut butter and tahini. Premium quality, global export.";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: isAr ? "%s | مصنع رويال" : "%s | Royal Nuts Factory",
    },
    description,
    keywords: isAr
      ? [
          "فول سوداني",
          "سمسم",
          "زبدة فول سوداني",
          "طحينة",
          "مصنع رويال",
          "منتجات طبيعية",
          "تصدير",
          "فرز إلكتروني",
        ]
      : [
          "peanuts",
          "sesame",
          "peanut butter",
          "tahini",
          "Royal Nuts",
          "natural products",
          "export",
          "electronic sorting",
        ],
    authors: [{ name: "Royal Nuts Factory" }],
    creator: "Royal Nuts Factory",
    publisher: "Royal Nuts Factory",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    other: {
      "theme-color": "#1C2820",
      "color-scheme": "dark",
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_EG",
      url: `${BASE_URL}/${locale === "ar" ? "" : "en"}`,
      siteName: isAr ? "مصنع رويال" : "Royal Nuts Factory",
      title,
      description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: isAr
            ? "مصنع رويال للفول السوداني والسمسم"
            : "Royal Nuts Factory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale === "ar" ? "" : "en"}`,
      languages: {
        ar: BASE_URL,
        en: `${BASE_URL}/en`,
      },
    },
  };
}

interface Params {
  locale: string;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const bodyFont = locale === "ar" ? cairo.className : poppins.className;

  return (
    <html
      lang={locale}
      dir={dir}
      className={`h-full ${cairo.variable} ${poppins.variable}`}
    >
      <body
        className={`${bodyFont} min-h-full flex flex-col antialiased`}
        style={{ background: "#1C2820", color: "#F0EDE8" }}
      >
        <NextIntlClientProvider messages={messages}>
          <LenisScroll />
          <Header locale={locale} />
          <main className="flex-grow">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
