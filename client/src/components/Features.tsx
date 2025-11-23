import { CheckCircle2, Clock, Globe2, Shield, Award, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "7/24 Operasyon",
    description: "Liman süreçlerinin durmadığını biliyoruz. Ekibimiz günün her saati operasyona hazır."
  },
  {
    icon: Shield,
    title: "Maksimum Güvenlik",
    description: "Uluslararası standartlarda (CTU Code, CSS Code) lashing uygulamaları ve sertifikalı ekipmanlar."
  },
  {
    icon: Globe2,
    title: "Global Standartlar",
    description: "Dünya genelinde kabul gören sigorta ve denetim standartlarına tam uyumluluk."
  },
  {
    icon: Award,
    title: "Uzman Kadro",
    description: "Yılların deneyimine sahip, sertifikalı lashing personeli ve mühendis denetimi."
  },
  {
    icon: CheckCircle2,
    title: "Eksiksiz Ekipman",
    description: "Her tonajda yük için uygun zincir, spanzet, air bag ve takoz stoklarımız mevcuttur."
  },
  {
    icon: BarChart3,
    title: "Raporlama",
    description: "Her operasyon sonrası fotoğraflı ve detaylı teknik raporlama hizmeti."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">
            Neden <span className="text-primary">Capital Lashing?</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Sadece yükünüzü sabitlemiyoruz; operasyonel risklerinizi minimize edip, ticaretinizin sürekliliğini güvence altına alıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="bg-primary/20 p-3 rounded-md w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 uppercase tracking-wide text-white">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
