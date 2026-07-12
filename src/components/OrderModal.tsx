"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { submitOrder } from "@/app/actions/order";
import { X, ShoppingBag, Loader2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderModalProps {
  productSlug: string;
  productName: string;
  sizes: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ productSlug, productName, sizes, isOpen, onClose }: OrderModalProps) {
  const t = useTranslations("products_page");
  const tCommon = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const orderSchema = z.object({
    customerName: z.string().min(3, { message: tCommon("validation_name") }),
    phone:        z.string().min(8, { message: tCommon("validation_phone") }),
    quantity:     z.number().min(1, { message: "Must be at least 1" }),
    size:         z.string().min(1, { message: t("size_select") }),
  });
  type FormData = z.infer<typeof orderSchema>;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: { quantity: 1, size: sizes[0] || "" },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await submitOrder({ productSlug, productName, customerName: data.customerName, phone: data.phone, quantity: data.quantity, size: data.size });
      const msg = `السلام عليكم، أود طلب المنتج التالي من مصنع رويال:\n• المنتج: ${productName}\n• الحجم: ${data.size}\n• الكمية: ${data.quantity}\n• الاسم: ${data.customerName}\n• الهاتف: ${data.phone}`;
      window.open(`https://wa.me/201000000000?text=${encodeURIComponent(msg)}`, "_blank");
      reset();
      onClose();
    } catch (err) { console.error(err); }
    finally { setIsSubmitting(false); }
  };

  const inputBase = "w-full px-4 py-3 rounded-xl text-sm font-medium text-[#F0EDE8] placeholder-[#F0EDE8]/30 outline-none transition-all duration-200";
  const inputStyle = (hasError: boolean) => ({
    background: "rgba(255,255,255,0.07)",
    border: hasError ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(201,168,76,0.22)",
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
            style={{ background: "rgba(18,28,22,0.88)", backdropFilter: "blur(12px)" }}
          />
          <motion.div
            initial={{ scale: 0.93, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-md rounded-3xl overflow-hidden z-10"
            style={{ background: "#26342C", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            {/* Header */}
            <div className="px-6 py-5 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg,#1F5E3B,#0F3020)", borderBottom: "1px solid rgba(201,168,76,0.20)" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.18)" }}>
                  <ShoppingBag className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest">{t("orderNow")}</p>
                  <h3 className="text-[#F0EDE8] font-black text-sm leading-tight line-clamp-1">{productName}</h3>
                </div>
              </div>
              <button onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#F0EDE8]/50 hover:text-[#F0EDE8] transition-all cursor-pointer"
                style={{ background: "rgba(255,255,255,0.08)" }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-[#F0EDE8]/45 text-xs mb-6 leading-relaxed">{t("order_modal_subtitle")}</p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#F0EDE8]/45 uppercase tracking-wider mb-1.5">{tCommon("name")}</label>
                  <input type="text" placeholder={tCommon("name")} {...register("customerName")}
                    className={inputBase} style={inputStyle(!!errors.customerName)} />
                  {errors.customerName && <p className="mt-1 text-xs text-rose-400">{errors.customerName.message}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#F0EDE8]/45 uppercase tracking-wider mb-1.5">{tCommon("phone")}</label>
                  <input type="text" placeholder="+20 100 000 0000" {...register("phone")}
                    className={inputBase} style={inputStyle(!!errors.phone)} />
                  {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#F0EDE8]/45 uppercase tracking-wider mb-1.5">{t("size_select")}</label>
                    <select {...register("size")} className={inputBase + " cursor-pointer"} style={inputStyle(false)}>
                      {sizes.map((sz) => <option key={sz} value={sz} style={{ background: "#26342C" }}>{sz}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#F0EDE8]/45 uppercase tracking-wider mb-1.5">{t("qty")}</label>
                    <input type="number" min={1} {...register("quantity", { valueAsNumber: true })}
                      className={inputBase} style={inputStyle(!!errors.quantity)} />
                    {errors.quantity && <p className="mt-1 text-xs text-rose-400">{errors.quantity.message}</p>}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full mt-2 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-50 cursor-pointer hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#16A34A,#15803D)", color: "#fff" }}>
                  {isSubmitting
                    ? <><Loader2 className="w-4 h-4 animate-spin" /><span>{tCommon("sending")}</span></>
                    : <><MessageCircle className="w-4 h-4" /><span>{t("confirm_order")}</span></>
                  }
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
