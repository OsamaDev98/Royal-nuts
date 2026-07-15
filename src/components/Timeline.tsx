"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sprout, Cpu, Sparkles, Search, Flame, Package, Truck } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────── */
const STEPS = [
  {
    titleKey: "stage1_title",
    descKey: "stage1_desc",
    Icon: Sprout,
    color: "#3D9962",
    image: "/images/stage1_receipt.png",
  },
  {
    titleKey: "stage2_title",
    descKey: "stage2_desc",
    Icon: Cpu,
    color: "#C9A84C",
    image: "/images/stage2_sorting.png",
  },
  {
    titleKey: "stage3_title",
    descKey: "stage3_desc",
    Icon: Sparkles,
    color: "#8B5A2B",
    image: "/images/stage3_impurities.png",
  },
  {
    titleKey: "stage4_title",
    descKey: "stage4_desc",
    Icon: Search,
    color: "#3D9962",
    image: "/images/stage4_manual.png",
  },
  {
    titleKey: "stage5_title",
    descKey: "stage5_desc",
    Icon: Flame,
    color: "#C9A84C",
    image: "/images/stage5_roasting.png",
  },
  {
    titleKey: "stage6_title",
    descKey: "stage6_desc",
    Icon: Package,
    color: "#8B5A2B",
    image: "/images/stage6_packaging.png",
  },
  {
    titleKey: "stage7_title",
    descKey: "stage7_desc",
    Icon: Truck,
    color: "#3D9962",
    image: "/images/stage7_export.png",
  },
] as const;

export default function Timeline() {
  const t = useTranslations("stages");
  const locale = useLocale();
  const isAr = locale === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // DESKTOP: horizontal scroll pinning
    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      if (!track) return;

      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = trackWidth - viewportWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate track translation horizontally (LTR flow)
      tl.to(track, {
        x: -scrollDistance,
        ease: "none",
      }, 0);

      // Animate horizontal progress bar
      tl.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
      }, 0);
    });

    // MOBILE: simple vertical list with scroll-triggered fade-ins
    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray(".mobile-step-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    // Delayed refresh to ensure accurate layout width measurement after rendering completes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <div className="w-full">
      {/* ─── DESKTOP VIEW (Horizontal Scroll) ─── */}
      <div
        ref={containerRef}
        className="hidden md:flex relative w-full h-screen flex-col justify-center gap-16 overflow-hidden"
        dir="ltr" // Force LTR for layout and scroll math stability across locales
      >
        {/* Pinned Section Header inside Viewport */}
        <div className="text-center shrink-0 z-20">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">
            {t("subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 text-[#F0EDE8]">
            {t("title")}
          </h2>
        </div>

        {/* Horizontal track viewport wrapper */}
        <div className="w-full overflow-hidden shrink-0">
          <div
            ref={trackRef}
            className="flex flex-row items-start relative px-[25vw] gap-16 py-8"
            style={{ width: "max-content" }}
          >
            {/* Connecting Track Line (Fixed width to avoid circular rendering width recalculation issues) */}
            <div
              className="absolute top-[56px] bg-white/10 z-0 pointer-events-none"
              style={{
                left: "calc(25vw + 210px)",
                width: "2904px",
                height: "3px",
              }}
            />
            
            {/* Glowing Active Progress Line */}
            <div
              ref={progressBarRef}
              className="absolute top-[56px] bg-[#C9A84C] origin-left scale-x-0 z-0 pointer-events-none"
              style={{
                left: "calc(25vw + 210px)",
                width: "2904px",
                height: "3px",
                boxShadow: "0 0 10px #C9A84C",
              }}
            />

            {STEPS.map((step, idx) => {
              const { Icon, color, titleKey, descKey, image } = step;
              return (
                <div
                  key={idx}
                  className="w-[380px] sm:w-[420px] flex flex-col items-center shrink-0 relative z-10"
                >
                  {/* Step Circle Pin */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm mb-8 relative transition-transform duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg,#C9A84C,#8B6820)",
                      color: "#1C2820",
                      boxShadow: "0 0 0 6px #1C2820, 0 0 0 8px rgba(201,168,76,0.25)",
                    }}
                  >
                    {idx + 1}
                  </div>

                  {/* Slide Card Container */}
                  <div
                    className="w-full rounded-[2.5rem] overflow-hidden p-1 flex flex-col transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: "#26342C",
                      border: "1px solid rgba(201,168,76,0.18)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Stage Image */}
                    <div className="relative aspect-[16/10] w-full rounded-[2.2rem] overflow-hidden">
                      <Image
                        src={image}
                        alt={t(titleKey as any)}
                        fill
                        sizes="420px"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#26342C]/90 via-transparent to-transparent" />
                    </div>

                    {/* Card Content (aligned using locale direction) */}
                    <div
                      className={`p-6 sm:p-8 flex flex-col gap-3 ${isAr ? "text-right" : "text-left"}`}
                      dir={isAr ? "rtl" : "ltr"}
                    >
                      <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: color + "20" }}
                        >
                          <Icon className="w-5 h-5" style={{ color }} />
                        </div>
                        <h3 className="text-lg font-black text-[#F0EDE8] leading-snug">
                          {t(titleKey as any)}
                        </h3>
                      </div>
                      <p className="text-[#F0EDE8]/55 text-sm leading-relaxed">
                        {t(descKey as any)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── MOBILE VIEW ─── */}
      <div className="md:hidden flex flex-col gap-8 px-4">
        {STEPS.map((step, idx) => {
          const { Icon, color, titleKey, descKey, image } = step;
          return (
            <div
              key={idx}
              className="mobile-step-card flex flex-col rounded-3xl overflow-hidden"
              style={{
                background: "#26342C",
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              {/* Image with overlay */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image}
                  alt={t(titleKey as any)}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 3rem), 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26342C] via-transparent to-transparent" />
                <span
                  className="absolute top-4 left-4 w-7 h-7 rounded-full flex items-center justify-center font-black text-xs text-[#1C2820]"
                  style={{
                    background: "linear-gradient(135deg,#C9A84C,#E8C875)",
                    boxShadow: "0 2px 10px rgba(201,168,76,0.3)",
                  }}
                >
                  {idx + 1}
                </span>
              </div>

              {/* Card content details */}
              <div
                className={`p-6 flex flex-col gap-3 ${isAr ? "text-right" : "text-left"}`}
                dir={isAr ? "rtl" : "ltr"}
              >
                <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color + "20" }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <h3 className="text-base font-bold text-[#F0EDE8]">
                    {t(titleKey as any)}
                  </h3>
                </div>
                <p className="text-[#F0EDE8]/50 text-xs leading-relaxed">
                  {t(descKey as any)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
