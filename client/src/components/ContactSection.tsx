import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="container px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Left: Info */}
            <div className="lg:col-span-2 p-10 md:p-16 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
               {/* Pattern bg */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full border-2 border-white"></div>
                 <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-2 border-white"></div>
               </div>

               <div className="relative z-10">
                 <h3 className="text-3xl font-heading font-black uppercase mb-6 leading-tight">
                   Projenizi<br/>Başlatalım
                 </h3>
                 <p className="text-blue-100 mb-12 text-lg">
                   Uzman ekibimiz yükünüzü incelesin, size en uygun güvenli taşıma planını oluştursun.
                 </p>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="bg-white/20 p-3 rounded-full">
                       <Phone className="h-5 w-5" />
                     </div>
                     <div>
                       <p className="text-xs text-blue-200 uppercase font-bold tracking-wider">Bizi Arayın</p>
                       <p className="text-lg font-bold">+90 216 312 06 12</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-4">
                     <div className="bg-white/20 p-3 rounded-full">
                       <Mail className="h-5 w-5" />
                     </div>
                     <div>
                       <p className="text-xs text-blue-200 uppercase font-bold tracking-wider">E-Posta Gönderin</p>
                       <p className="text-lg font-bold">info@capitallashing.com</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="mt-12 relative z-10">
                 <p className="text-sm text-blue-100 opacity-80">
                   © Capital Lashing 7/24 Operasyon Merkezi
                 </p>
               </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 p-10 md:p-16 bg-white">
              <div className="max-w-lg">
                <h3 className="text-2xl font-heading font-bold text-slate-900 uppercase mb-8">Hızlı Teklif Formu</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Ad Soyad</label>
                      <Input className="bg-slate-50 border-slate-200 h-12" placeholder="İsim Soyisim" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Firma</label>
                      <Input className="bg-slate-50 border-slate-200 h-12" placeholder="Firma Unvanı" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">İletişim</label>
                      <Input className="bg-slate-50 border-slate-200 h-12" placeholder="Telefon veya E-posta" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Hizmet</label>
                      <Select>
                        <SelectTrigger className="bg-slate-50 border-slate-200 h-12">
                          <SelectValue placeholder="Seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="container">Konteyner Lashing</SelectItem>
                          <SelectItem value="project">Proje Kargo</SelectItem>
                          <SelectItem value="shrink">Shrink Wrap</SelectItem>
                          <SelectItem value="other">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Detaylar</label>
                    <Textarea 
                      placeholder="Yük hakkında kısa bilgi..." 
                      className="min-h-[100px] bg-slate-50 border-slate-200 resize-none"
                    />
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg uppercase font-bold tracking-wide bg-slate-900 hover:bg-slate-800">
                    Teklifi Gönder <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
