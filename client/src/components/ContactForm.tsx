import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, ArrowRight, Loader2, CheckCircle2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RECAPTCHA_SITE_KEY = "6LeznqQsAAAAACFTkHNuJYxlNDBC3f_w_mEnHH5u";

const SERVICES = [
  { value: "gemi-proje-lashing",   label: "Gemi & Proje Lashing" },
  { value: "konteyner-lashing",    label: "Konteyner Lashing" },
  { value: "proje-kargo-lashing",  label: "Proje Kargo" },
  { value: "tekne-yat-lashing",    label: "Tekne & Yat" },
  { value: "flat-rack-lashing",    label: "Flat Rack" },
  { value: "shrink-wrap",          label: "Shrink Wrap" },
  { value: "brandalama",           label: "Brandalama" },
  { value: "sandiklama",           label: "Sandıklama" },
  { value: "unlashing-tahliye",    label: "Unlashing & Tahliye" },
  { value: "other",                label: "Diğer" },
];

const formSchema = z.object({
  name:    z.string().min(2, "En az 2 karakter giriniz"),
  company: z.string().optional(),
  contact: z.string().min(3, "Telefon veya e-posta giriniz"),
  service: z.string().min(1, "Lütfen bir hizmet seçiniz"),
  message: z.string().min(10, "En az 10 karakter giriniz"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  preselectedService?: string;
  theme?: "light" | "dark";
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center py-10 px-4"
    >
      {/* Animated circle + check */}
      <div className="relative mb-8">
        <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50" cy="50" r="46"
            stroke="#38aae1" strokeWidth="3"
            strokeDasharray="289" strokeDashoffset="289"
            strokeLinecap="round"
            style={{ animation: "draw-circle 0.65s ease forwards" }}
          />
          <circle
            cx="50" cy="50" r="42"
            fill="#38aae1" opacity="0"
            style={{ animation: "fade-fill 0.3s ease 0.55s forwards" }}
          />
          <polyline
            points="28,52 42,66 72,36"
            stroke="white" strokeWidth="5"
            strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="60" strokeDashoffset="60"
            style={{ animation: "draw-check 0.4s ease 0.65s forwards" }}
          />
        </svg>
        <style>{`
          @keyframes draw-circle { to { stroke-dashoffset: 0; } }
          @keyframes fade-fill   { to { opacity: 1; } }
          @keyframes draw-check  { to { stroke-dashoffset: 0; } }
        `}</style>
      </div>

      <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-slate-900 mb-3">
        Talebiniz İletildi!
      </h3>
      <p className="text-slate-500 max-w-sm leading-relaxed mb-2">
        Uzman ekibimiz en geç{" "}
        <span className="font-bold text-primary">2 saat içinde</span> sizinle iletişime geçecektir.
      </p>
      <p className="text-slate-400 text-sm mb-8">
        E-posta girdiyseniz onay maili gönderildi.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <Button
          variant="outline"
          onClick={onReset}
          className="flex-1 uppercase font-bold tracking-wide border-slate-200 hover:border-primary hover:text-primary"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Yeni Talep
        </Button>
        <a href="tel:+902163120612" className="flex-1">
          <Button className="w-full uppercase font-bold tracking-wide bg-primary hover:bg-blue-600">
            <Phone className="mr-2 h-4 w-4" /> Şimdi Ara
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

export function ContactForm({ preselectedService, theme = "light" }: ContactFormProps) {
  const [status, setStatus]     = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const recaptchaRef            = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const selectedService = watch("service");

  useEffect(() => {
    if (preselectedService) setValue("service", preselectedService);
    else {
      const params = new URLSearchParams(window.location.search);
      const sp = params.get("service");
      if (sp) setValue("service", sp);
    }
  }, [preselectedService]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    let recaptchaToken = "";
    try {
      recaptchaToken = (await recaptchaRef.current!.executeAsync()) || "";
      recaptchaRef.current!.reset();
    } catch {
      setStatus("error");
      setErrorMsg("reCAPTCHA doğrulaması başarısız. Lütfen sayfayı yenileyip tekrar deneyin.");
      return;
    }
    if (!recaptchaToken) {
      setStatus("error");
      setErrorMsg("reCAPTCHA doğrulaması tamamlanamadı.");
      return;
    }
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...data, recaptchaToken }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Bir hata oluştu");
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  const inputBase =
    "h-13 bg-transparent border-0 border-b-2 border-slate-200 rounded-none px-0 text-base font-medium placeholder:text-slate-300 focus-visible:ring-0 focus-visible:border-primary transition-colors duration-300";
  const inputErr = "border-red-400 focus-visible:border-red-400";
  const labelBase = "block text-[10px] font-black tracking-[0.2em] uppercase mb-2 text-slate-400";

  if (status === "success") {
    return <SuccessState onReset={() => setStatus("idle")} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7"
      data-testid="contact-form"
      noValidate
    >
      {/* Invisible reCAPTCHA */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        size="invisible"
        badge="bottomright"
      />

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelBase}>Ad Soyad <span className="text-primary">*</span></label>
          <Input
            {...register("name")}
            placeholder="İsim Soyisim"
            className={`${inputBase} ${errors.name ? inputErr : ""}`}
            data-testid="input-name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelBase}>Firma</label>
          <Input
            {...register("company")}
            placeholder="Firma Unvanı"
            className={inputBase}
            data-testid="input-company"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <label className={labelBase}>Telefon / E-posta <span className="text-primary">*</span></label>
        <Input
          {...register("contact")}
          placeholder="+90 5__ ___ __ __ veya ornek@firma.com"
          className={`${inputBase} ${errors.contact ? inputErr : ""}`}
          data-testid="input-contact"
        />
        {errors.contact && <p className="text-red-500 text-xs mt-1.5">{errors.contact.message}</p>}
      </div>

      {/* Service pills — no dropdown, no portal issues */}
      <div>
        <label className={labelBase}>
          Hizmet <span className="text-primary">*</span>
          {errors.service && (
            <span className="ml-2 text-red-400 font-medium normal-case tracking-normal">
              — {errors.service.message}
            </span>
          )}
        </label>
        <div className="flex flex-wrap gap-2 pt-1">
          {SERVICES.map((s) => {
            const active = selectedService === s.value;
            return (
              <button
                key={s.value}
                type="button"
                data-testid={`service-${s.value}`}
                onClick={() => setValue("service", s.value, { shouldValidate: true })}
                className={`
                  px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-200
                  ${active
                    ? "bg-primary border-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary"}
                `}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelBase}>Mesaj <span className="text-primary">*</span></label>
        <Textarea
          {...register("message")}
          placeholder="Yük hakkında kısa bilgi — tonaj, boyut, yükleme limanı..."
          className={`min-h-[110px] bg-transparent border-0 border-b-2 border-slate-200 rounded-none px-0 resize-none text-base font-medium placeholder:text-slate-300 focus-visible:ring-0 focus-visible:border-primary transition-colors duration-300 ${errors.message ? "border-red-400 focus-visible:border-red-400" : ""}`}
          data-testid="textarea-message"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium"
        >
          {errorMsg}
        </motion.div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        data-testid="button-submit"
        className="w-full h-14 text-base uppercase font-black tracking-widest bg-slate-900 hover:bg-primary shadow-xl shadow-slate-900/10 hover:shadow-primary/20 hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:scale-100 rounded-xl"
      >
        {status === "loading" ? (
          <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Gönderiliyor...</>
        ) : (
          <>Teklifi Gönder <ArrowRight className="ml-2 h-5 w-5" /></>
        )}
      </Button>

      <p className="text-center text-[11px] text-slate-300 tracking-wide">
        Bu form Google reCAPTCHA ile korunmaktadır.
      </p>
    </form>
  );
}
