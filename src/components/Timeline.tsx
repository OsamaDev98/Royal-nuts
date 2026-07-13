"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, Cpu, Sparkles, Search, Flame, Package, Truck } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────── */
const STEPS = [
  { titleKey: "stage1_title", descKey: "stage1_desc", Icon: Sprout,   color: "#3D9962" },
  { titleKey: "stage2_title", descKey: "stage2_desc", Icon: Cpu,      color: "#C9A84C" },
  { titleKey: "stage3_title", descKey: "stage3_desc", Icon: Sparkles, color: "#8B5A2B" },
  { titleKey: "stage4_title", descKey: "stage4_desc", Icon: Search,   color: "#3D9962" },
  { titleKey: "stage5_title", descKey: "stage5_desc", Icon: Flame,    color: "#C9A84C" },
  { titleKey: "stage6_title", descKey: "stage6_desc", Icon: Package,  color: "#8B5A2B" },
  { titleKey: "stage7_title", descKey: "stage7_desc", Icon: Truck,    color: "#3D9962" },
] as const;

/* ─── Shared Card Visual ──────────────────────────────────────── */
function Card({
  step,
  t,
  alignRight = false,
}: {
  step: (typeof STEPS)[number];
  t: ReturnType<typeof useTranslations>;
  alignRight?: boolean;
}) {
  const { Icon, color, titleKey, descKey } = step;
  return (
    <div
      className="p-5 sm:p-6 rounded-2xl group transition-all duration-300 hover:scale-[1.02] w-full"
      style={{
        background: "#2E3E36",
        border: "1px solid rgba(201,168,76,0.20)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.20)",
      }}
    >
      <div className={`flex items-center gap-3 mb-3 ${alignRight ? "flex-row-reverse" : ""}`}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: color + "28" }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h3 className="text-sm sm:text-base font-bold text-[#F0EDE8] leading-snug">
          {t(titleKey as any)}
        </h3>
      </div>
      <p
        className={`text-[#F0EDE8]/50 text-xs sm:text-sm leading-relaxed ${alignRight ? "text-end" : ""}`}
      >
        {t(descKey as any)}
      </p>
    </div>
  );
}

/* ─── MOBILE: single column, left-rail ───────────────────────── */
function MobileTimeline({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="relative px-2 md:hidden">
      {/* Rail */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: "18px", width: "1px", background: "rgba(201,168,76,0.15)" }}
      />

      <div className="flex flex-col">
        {STEPS.map((step, idx) => {
          const isLast = idx === STEPS.length - 1;
          return (
            <MobileItem key={idx} step={step} idx={idx} t={t} isLast={isLast} />
          );
        })}
      </div>
    </div>
  );
}

function MobileItem({
  step, idx, t, isLast,
}: {
  step: (typeof STEPS)[number];
  idx: number;
  t: ReturnType<typeof useTranslations>;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex items-start">
      {/* Circle + rail segment */}
      <div className="flex flex-col items-center shrink-0" style={{ width: "36px" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          className="w-9 h-9 rounded-full flex items-center justify-center font-black text-xs z-10 shrink-0"
          style={{
            background: "linear-gradient(135deg,#C9A84C,#8B6820)",
            color: "#1C2820",
            boxShadow: "0 0 0 3px #1C2820, 0 0 0 4px rgba(201,168,76,0.35)",
          }}
        >
          {idx + 1}
        </motion.div>
        {!isLast && (
          <div
            className="flex-1 w-px mt-1"
            style={{ background: "rgba(201,168,76,0.15)", minHeight: "16px" }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex-1 ms-4 ${isLast ? "" : "mb-5"}`}
      >
        <Card step={step} t={t} />
      </motion.div>
    </div>
  );
}

/* ─── DESKTOP: 3-column alternating grid ─────────────────────── */
function DesktopTimeline({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    /* 3 explicit columns: left | circle | right */
    <div
      className="hidden md:grid gap-y-5"
      style={{ gridTemplateColumns: "1fr 40px 1fr" }}
    >
      {STEPS.map((step, idx) => (
        /* Each step = exactly 3 grid cells rendered via Fragment */
        <DesktopRow key={idx} step={step} idx={idx} t={t} />
      ))}
    </div>
  );
}

function DesktopRow({
  step, idx, t,
}: {
  step: (typeof STEPS)[number];
  idx: number;
  t: ReturnType<typeof useTranslations>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = idx % 2 === 0;

  return (
    <>
      {/* LEFT cell */}
      <div className="flex justify-end items-center pe-8 py-2">
        {!isEven && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-xs"
          >
            <Card step={step} t={t} alignRight />
          </motion.div>
        )}
      </div>

      {/* CENTRE cell — circle */}
      <div ref={isEven ? ref : undefined} className="flex items-center justify-center py-2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 120, delay: 0.15 }}
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm z-10"
          style={{
            background: "linear-gradient(135deg,#C9A84C,#8B6820)",
            color: "#1C2820",
            boxShadow: "0 0 0 4px #1C2820, 0 0 0 5px rgba(201,168,76,0.30)",
          }}
        >
          {idx + 1}
        </motion.div>
      </div>

      {/* RIGHT cell */}
      <div className="flex justify-start items-center ps-8 py-2">
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-xs"
          >
            <Card step={step} t={t} />
          </motion.div>
        )}
      </div>
    </>
  );
}

/* ─── Main export ─────────────────────────────────────────────── */
export default function Timeline() {
  const t = useTranslations("stages");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto">
      {/* Desktop centre vertical track */}
      <div
        className="absolute top-0 bottom-0 hidden md:block pointer-events-none"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          background: "rgba(201,168,76,0.15)",
        }}
      />
      <motion.div
        style={{
          scaleY: pathLength,
          originY: 0,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom,#C9A84C,#1F5E3B)",
          pointerEvents: "none",
        }}
        className="hidden md:block"
      />

      {/* Separate mobile + desktop renders — no shared DOM */}
      <MobileTimeline t={t} />
      <DesktopTimeline t={t} />
    </div>
  );
}
