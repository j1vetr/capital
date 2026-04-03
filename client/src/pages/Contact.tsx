import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/port_workers_checking_cargo_safety.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, ArrowRight, Globe2, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  company: z.string().optional(),
  contact: z.string().min(3, "Telefon veya e-posta adresi giriniz"),
  service: z.string().min(1, "Lütfen bir hizmet seçiniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedService = watch("service");

  useEffect(() => {
    document.title = "İletişim | Capital Lashing";
    window.scrollTo(0, 0);

    // Pre-select service from URL param
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      setValue("service", serviceParam);
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-32">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
              <span>Ana Sayfa</span>
              <span className="text-primary">•</span>
              <span className="text-primary font-bold">İletişim</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            İletişim
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            7/24 Operasyonel destek ve teklif talepleriniz için bize ulaşın.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        {/* Main Contact Content */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 -z-10" />

           <div className="container px-4 md:px-6">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               
               {/* Contact Cards - Left Column */}
               <div className="space-y-6">
                 <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-primary/30 transition-all duration-300 group">
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                     <Phone className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Telefon</h3>
                   <p className="text-slate-500 text-sm mb-4">7/24 Acil Destek Hattı</p>
                   <a href="tel:+902163120612" className="text-2xl font-bold text-primary hover:text-blue-700 transition-colors block">
                     +90 216 312 06 12
                   </a>
                 </div>

                 <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-primary/30 transition-all duration-300 group">
                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     <Mail className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">E-Posta</h3>
                   <p className="text-slate-500 text-sm mb-4">Teklif ve bilgi talepleri için</p>
                   <a href="mailto:info@capitallashing.com" className="text-xl font-bold text-slate-800 hover:text-primary transition-colors block">
                     info@capitallashing.com
                   </a>
                 </div>

                 <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                   <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                       <MapPin className="h-6 w-6" />
                     </div>
                     <h3 className="text-xl font-bold font-heading text-white mb-2">Merkez Ofis</h3>
                     <p className="text-slate-400 text-sm mb-6">
                       Abdurrahmangazi Mah. Ebubekir Cad. No:26
                       Sancaktepe / İstanbul
                     </p>
                     <a href="https://maps.google.com/?q=Abdurrahmangazi+Mah.+Ebubekir+Cad.+No:26+Sancaktepe+Istanbul" target="_blank" rel="noopener noreferrer">
                       <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white hover:text-white">
                         Haritada Göster <Globe2 className="ml-2 h-4 w-4" />
                       </Button>
                     </a>
                   </div>
                 </div>
               </div>

               {/* Form - Right Column (Spans 2) */}
               <div className="lg:col-span-2">
                 <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 h-full flex flex-col">
                   <div className="bg-gradient-to-r from-primary to-blue-600 p-8 md:p-10 text-white">
                     <h2 className="text-3xl font-heading font-black uppercase mb-2">Hemen Teklif Alın</h2>
                     <p className="text-blue-100 text-lg">
                       Projeniz için en uygun çözümü ve fiyat teklifini sunalım.
                     </p>
                   </div>
                   
                   <div className="p-8 md:p-10 flex-grow">

                     {/* Success State */}
                     {status === "success" ? (
                       <div className="h-full flex flex-col items-center justify-center text-center py-12">
                         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                           <CheckCircle2 className="h-10 w-10 text-green-600" />
                         </div>
                         <h3 className="text-2xl font-heading font-black text-slate-900 mb-3 uppercase">Talebiniz Alındı!</h3>
                         <p className="text-slate-500 text-lg max-w-md mb-8 leading-relaxed">
                           En kısa sürede uzman ekibimiz sizinle iletişime geçecektir. Acil durumlar için <span className="text-primary font-bold">+90 216 312 06 12</span> numarasını arayabilirsiniz.
                         </p>
                         <Button 
                           variant="outline" 
                           onClick={() => setStatus("idle")}
                           className="uppercase font-bold tracking-wide"
                         >
                           Yeni Talep Oluştur
                         </Button>
                       </div>
                     ) : (
                       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 h-full flex flex-col justify-center" data-testid="contact-form">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Ad Soyad *</label>
                              <Input 
                                {...register("name")}
                                className={`bg-slate-50 border-slate-200 h-14 text-lg ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`} 
                                placeholder="İsim Soyisim"
                                data-testid="input-name"
                              />
                              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Firma</label>
                              <Input 
                                {...register("company")}
                                className="bg-slate-50 border-slate-200 h-14 text-lg" 
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
                                className={`bg-slate-50 border-slate-200 h-14 text-lg ${errors.contact ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                                placeholder="Telefon veya E-posta"
                                data-testid="input-contact"
                              />
                              {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Hizmet *</label>
                              <Select 
                                value={selectedService} 
                                onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
                              >
                                <SelectTrigger className={`bg-slate-50 border-slate-200 h-14 text-lg ${errors.service ? "border-red-400" : ""}`} data-testid="select-service">
                                  <SelectValue placeholder="Hizmet Seçiniz" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="gemi-proje-lashing">Gemi & Proje Lashing</SelectItem>
                                  <SelectItem value="konteyner-lashing">Konteyner Lashing</SelectItem>
                                  <SelectItem value="proje-kargo-lashing">Proje Kargo</SelectItem>
                                  <SelectItem value="tekne-yat-lashing">Tekne & Yat Lashing</SelectItem>
                                  <SelectItem value="flat-rack-lashing">Flat Rack Lashing</SelectItem>
                                  <SelectItem value="shrink-wrap">Shrink Wrap</SelectItem>
                                  <SelectItem value="brandalama">Brandalama</SelectItem>
                                  <SelectItem value="sandiklama">Sandıklama</SelectItem>
                                  <SelectItem value="unlashing-tahliye">Unlashing & Tahliye</SelectItem>
                                  <SelectItem value="other">Diğer</SelectItem>
                                </SelectContent>
                              </Select>
                              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Detaylar *</label>
                            <Textarea 
                              {...register("message")}
                              placeholder="Yük hakkında kısa bilgi (tonaj, boyut, yükleme limanı vs.)" 
                              className={`min-h-[150px] bg-slate-50 border-slate-200 resize-none text-lg p-4 ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                              data-testid="textarea-message"
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                          </div>

                          {/* Error Message */}
                          {status === "error" && (
                            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm font-medium">
                              {errorMsg}
                            </div>
                          )}

                          <Button 
                            type="submit"
                            size="lg" 
                            disabled={status === "loading"}
                            className="w-full h-16 text-xl uppercase font-bold tracking-wide bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:scale-[1.01] transition-all disabled:opacity-70 disabled:scale-100"
                            data-testid="button-submit"
                          >
                            {status === "loading" ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Gönderiliyor...
                              </>
                            ) : (
                              <>
                                Teklifi Gönder <ArrowRight className="ml-2 h-6 w-6" />
                              </>
                            )}
                          </Button>
                        </form>
                     )}
                   </div>
                 </div>
               </div>

             </div>
           </div>
        </section>
        
        {/* Map - Full Width */}
        <section className="h-[400px] bg-slate-200 w-full relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6525632142813!2d29.22686667655336!3d40.98095457135714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad30e380104eb%3A0x930f037791312635!2sAbdurrahmangazi%2C%20Ebubekir%20Cd.%20No%3A26%2C%2034887%20Sancaktepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1708700000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Capital Lashing Ofis Konumu"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}
