import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, ArrowRight, Loader2 } from "lucide-react";

const RECAPTCHA_SITE_KEY = "6LeznqQsAAAAACFTkHNuJYxlNDBC3f_w_mEnHH5u";

const formSchema = z.object({
  name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  company: z.string().optional(),
  contact: z.string().min(3, "Telefon veya e-posta adresi giriniz"),
  service: z.string().min(1, "Lütfen bir hizmet seçiniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type FormData = z.infer<typeof formSchema>;

function SuccessCheckmark() {
  return (
    <div className="flex items-center justify-center">
      <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="#38aae1" strokeWidth="4"
          strokeDasharray="289" strokeDashoffset="289" strokeLinecap="round"
          style={{ animation: "draw-circle 0.6s ease forwards" }} />
        <circle cx="50" cy="50" r="42" fill="#38aae1" opacity="0"
          style={{ animation: "fade-in-circle 0.3s ease 0.5s forwards" }} />
        <polyline points="28,52 42,66 72,36" stroke="white" strokeWidth="5"
          strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="60" strokeDashoffset="60"
          style={{ animation: "draw-check 0.4s ease 0.6s forwards" }} />
        <style>{`
          @keyframes draw-circle { to { stroke-dashoffset: 0; } }
          @keyframes fade-in-circle { to { opacity: 1; } }
          @keyframes draw-check { to { stroke-dashoffset: 0; } }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </svg>
    </div>
  );
}

interface ContactFormProps {
  defaultService?: string;
  readFromUrl?: boolean;
}

export function ContactForm({ defaultService, readFromUrl = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedService = watch("service");

  useEffect(() => {
    if (defaultService) setValue("service", defaultService);
    if (readFromUrl) {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) setValue("service", serviceParam);
    }
  }, [defaultService, readFromUrl]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    let recaptchaToken = "";
    try {
      recaptchaToken = await recaptchaRef.current!.executeAsync() || "";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10" style={{ animation: "fadeInUp 0.5s ease" }}>
        <SuccessCheckmark />
        <h3 className="text-2xl font-heading font-black text-slate-900 mt-6 mb-3 uppercase tracking-tight">
          Talebiniz İletildi!
        </h3>
        <p className="text-slate-500 text-base max-w-md mb-2 leading-relaxed">
          Uzman ekibimiz en geç <span className="text-primary font-bold">2 saat içinde</span> sizinle iletişime geçecektir.
        </p>
        <p className="text-slate-400 text-sm mb-8">E-posta girdiyseniz onay maili de gönderildi.</p>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Button variant="outline" onClick={() => setStatus("idle")} className="uppercase font-bold tracking-wide">
            Yeni Talep Oluştur
          </Button>
          <a href="tel:+902163120612">
            <Button className="uppercase font-bold tracking-wide bg-primary hover:bg-blue-600 w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" /> Şimdi Ara
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        size="invisible"
        badge="bottomright"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Ad Soyad *</label>
          <Input
            {...register("name")}
            className={`bg-slate-50 border-slate-200 h-14 text-base ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`}
            placeholder="İsim Soyisim"
            data-testid="input-name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Firma</label>
          <Input
            {...register("company")}
            className="bg-slate-50 border-slate-200 h-14 text-base"
            placeholder="Firma Unvanı"
            data-testid="input-company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">İletişim *</label>
          <Input
            {...register("contact")}
            className={`bg-slate-50 border-slate-200 h-14 text-base ${errors.contact ? "border-red-400 focus-visible:ring-red-400" : ""}`}
            placeholder="Telefon veya E-posta"
            data-testid="input-contact"
          />
          {errors.contact && <p className="text-red-500 text-xs">{errors.contact.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Hizmet *</label>
          <Select
            value={selectedService}
            onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
          >
            <SelectTrigger className={`bg-slate-50 border-slate-200 h-14 text-base ${errors.service ? "border-red-400" : ""}`} data-testid="select-service">
              <SelectValue placeholder="Hizmet Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gemi-proje-lashing">Gemi &amp; Proje Lashing</SelectItem>
              <SelectItem value="konteyner-lashing">Konteyner Lashing</SelectItem>
              <SelectItem value="proje-kargo-lashing">Proje Kargo</SelectItem>
              <SelectItem value="tekne-yat-lashing">Tekne &amp; Yat Lashing</SelectItem>
              <SelectItem value="flat-rack-lashing">Flat Rack Lashing</SelectItem>
              <SelectItem value="shrink-wrap">Shrink Wrap</SelectItem>
              <SelectItem value="brandalama">Brandalama</SelectItem>
              <SelectItem value="sandiklama">Sandıklama</SelectItem>
              <SelectItem value="unlashing-tahliye">Unlashing &amp; Tahliye</SelectItem>
              <SelectItem value="other">Diğer</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Detaylar *</label>
        <Textarea
          {...register("message")}
          placeholder="Yük hakkında kısa bilgi (tonaj, boyut, yükleme limanı vs.)"
          className={`min-h-[140px] bg-slate-50 border-slate-200 resize-none text-base p-4 ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}`}
          data-testid="textarea-message"
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full h-14 text-lg uppercase font-bold tracking-wide bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:scale-[1.01] transition-all disabled:opacity-70 disabled:scale-100"
        data-testid="button-submit"
      >
        {status === "loading" ? (
          <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Gönderiliyor...</>
        ) : (
          <>Teklifi Gönder <ArrowRight className="ml-2 h-5 w-5" /></>
        )}
      </Button>

      <p className="text-center text-xs text-slate-400">
        Bu form Google reCAPTCHA ile korunmaktadır.
      </p>
    </form>
  );
}
