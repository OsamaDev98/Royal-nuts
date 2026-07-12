"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/app/actions/contact";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const contactSchema = z.object({
    name:    z.string().min(3,  { message: t("validation_name") }),
    email:   z.string().email(  { message: t("validation_email") }),
    phone:   z.string().min(8,  { message: t("validation_phone") }),
    message: z.string().min(10, { message: t("validation_message") }),
  });
  type FormData = z.infer<typeof contactSchema>;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await submitContactForm(data);
      if (response.success) { setSubmitStatus("success"); reset(); }
      else setSubmitStatus("error");
    } catch { setSubmitStatus("error"); }
    finally { setIsSubmitting(false); }
  };

  const inputBase = `
    w-full px-4 py-3 rounded-xl text-sm font-medium text-[#F0EDE8]
    placeholder-[#F0EDE8]/30 outline-none transition-all duration-200
  `;
  const inputStyle = (hasError: boolean) => ({
    background: "rgba(255,255,255,0.07)",
    border: hasError
      ? "1px solid rgba(239,68,68,0.6)"
      : "1px solid rgba(201,168,76,0.22)",
  });

  return (
    <div className="w-full">
      {submitStatus === "success" && (
        <div className="mb-6 p-4 rounded-xl flex items-center gap-3"
          style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.30)" }}>
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-emerald-400 text-sm font-semibold">{t("success")}</p>
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl flex items-center gap-3"
          style={{ background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.30)" }}>
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <p className="text-rose-400 text-sm font-semibold">{t("error")}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold text-[#F0EDE8]/50 uppercase tracking-wider mb-2">
            {t("name")}
          </label>
          <input id="cf-name" type="text" placeholder={t("name")} {...register("name")}
            className={inputBase} style={inputStyle(!!errors.name)} />
          {errors.name && <p className="mt-1.5 text-xs text-rose-400 font-semibold">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-email" className="block text-xs font-bold text-[#F0EDE8]/50 uppercase tracking-wider mb-2">
              {t("email")}
            </label>
            <input id="cf-email" type="email" placeholder="example@email.com" {...register("email")}
              className={inputBase} style={inputStyle(!!errors.email)} />
            {errors.email && <p className="mt-1.5 text-xs text-rose-400 font-semibold">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="cf-phone" className="block text-xs font-bold text-[#F0EDE8]/50 uppercase tracking-wider mb-2">
              {t("phone")}
            </label>
            <input id="cf-phone" type="text" placeholder="+20 100 000 0000" {...register("phone")}
              className={inputBase} style={inputStyle(!!errors.phone)} />
            {errors.phone && <p className="mt-1.5 text-xs text-rose-400 font-semibold">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className="block text-xs font-bold text-[#F0EDE8]/50 uppercase tracking-wider mb-2">
            {t("message")}
          </label>
          <textarea id="cf-message" rows={5} placeholder={t("message")} {...register("message")}
            className={inputBase + " resize-none"} style={inputStyle(!!errors.message)} />
          {errors.message && <p className="mt-1.5 text-xs text-rose-400 font-semibold">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-50 cursor-pointer hover:opacity-90 hover:scale-[1.01]"
          style={{ background: "linear-gradient(135deg,#C9A84C,#8B6820)", color: "#1C2820" }}
        >
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" /><span>{t("sending")}</span></>
          ) : (
            <><span>{t("send")}</span><Send className="w-4 h-4" /></>
          )}
        </button>
      </form>
    </div>
  );
}
