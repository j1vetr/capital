import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-heading font-bold mb-6 uppercase text-foreground">
              Projenizi <span className="text-primary">Konuşalım</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Yükünüzün cinsi, tonajı veya rotası ne olursa olsun; en uygun lashing ve paketleme çözümü için uzmanlarımızla iletişime geçin.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Telefon</h3>
                  <p className="text-muted-foreground">+90 216 312 06 12</p>
                  <p className="text-sm text-muted-foreground mt-1">7/24 Acil Destek Hattı</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">E-posta</h3>
                  <p className="text-muted-foreground">info@capitallashing.com</p>
                  <p className="text-muted-foreground">sales@capitallashing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Merkez Ofis</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Sancaktepe / İstanbul<br />
                    Tüm Türkiye limanlarında hizmet vermekteyiz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-sm text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Çalışma Saatleri</h3>
                  <p className="text-muted-foreground">Ofis: Pzt-Cum 08:30 - 18:00</p>
                  <p className="text-muted-foreground">Operasyon: 7/24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-muted/30 p-8 md:p-10 rounded-lg border border-border">
            <h3 className="text-2xl font-bold font-heading mb-6 uppercase">Hızlı Teklif Formu</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Adınız Soyadınız</label>
                  <Input placeholder="İsim Soyisim" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Firma Adı</label>
                  <Input placeholder="Firma Unvanı" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-posta</label>
                  <Input type="email" placeholder="ornek@sirket.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefon</label>
                  <Input type="tel" placeholder="0555 555 55 55" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Hizmet Türü</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Hizmet Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="container">Konteyner Lashing</SelectItem>
                    <SelectItem value="project">Proje Kargo Lashing</SelectItem>
                    <SelectItem value="shrink">Shrink Wrap Paketleme</SelectItem>
                    <SelectItem value="yacht">Yat & Tekne Taşıma</SelectItem>
                    <SelectItem value="other">Diğer / Özel Proje</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mesajınız / Yük Detayları</label>
                <Textarea 
                  placeholder="Yük cinsi, tonajı, çıkış limanı vb. detaylar..." 
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" className="w-full uppercase font-bold tracking-wide">
                Teklif İste
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
