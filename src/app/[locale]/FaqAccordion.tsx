"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAccordion() {
  const t = useTranslations("faq");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { qKey: "q1", aKey: "a1" },
    { qKey: "q2", aKey: "a2" },
    { qKey: "q3", aKey: "a3" },
    { qKey: "q4", aKey: "a4" },
    { qKey: "q5", aKey: "a5" },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "#26342C",
              border: isOpen
                ? "1px solid rgba(201,168,76,0.40)"
                : "1px solid rgba(201,168,76,0.18)",
              boxShadow: isOpen ? "0 0 24px rgba(201,168,76,0.06)" : "none",
            }}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 cursor-pointer text-start"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-black text-xs transition-all duration-300"
                  style={{
                    background: isOpen
                      ? "linear-gradient(135deg,#C9A84C,#8B6820)"
                      : "rgba(201,168,76,0.12)",
                    color: isOpen ? "#1C2820" : "#C9A84C",
                  }}
                >
                  {idx + 1}
                </span>
                <span className="font-bold text-[#F0EDE8] text-sm sm:text-base select-none">
                  {t(faq.qKey)}
                </span>
              </div>
              <ChevronDown
                className="w-5 h-5 text-[#C9A84C] transition-transform duration-300 shrink-0"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    className="px-6 pb-6 text-sm text-[#F0EDE8]/60 leading-relaxed pt-1"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
                  >
                    <div className="pt-3">{t(faq.aKey)}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
