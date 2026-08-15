import { Phone, Mail } from "lucide-react";
import { BUSINESS } from "@shared/business";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

// The form (react-hook-form + zod + radix select ≈ 200 KB of JS) is only
// loaded when the section scrolls near the viewport. SSR and the first
// client render both show the same placeholder, so hydration matches.
const ContactForm = lazy(() =>
  import("@/components/ContactForm").then((m) => ({ default: m.ContactForm })),
);

function LazyContactForm() {
  const holderRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = holderRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={holderRef} className="min-h-[730px] md:min-h-[520px]">
      {load && (
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      )}
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="container px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left: Info */}
            <div className="lg:col-span-2 p-10 md:p-16 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full border-2 border-white"></div>
                <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-2 border-white"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-black uppercase mb-6 leading-tight">
                  Projenizi<br />Başlatalım
                </h3>
                <p className="text-white mb-12 text-lg">
                  Uzman ekibimiz yükünüzü incelesin, size en uygun güvenli taşıma planını oluştursun.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white uppercase font-bold tracking-wider">Bizi Arayın</p>
                      <a href={`tel:${BUSINESS.phone.e164}`} className="text-lg font-bold hover:underline">{BUSINESS.phone.display}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white uppercase font-bold tracking-wider">E-Posta Gönderin</p>
                      <a href={`mailto:${BUSINESS.email}`} className="text-lg font-bold hover:underline">{BUSINESS.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <p className="text-sm text-white">
                  © Capital Lashing 7/24 Operasyon Merkezi
                </p>
              </div>
            </div>

            {/* Right: Full form */}
            <div className="lg:col-span-3 p-10 md:p-16 bg-white">
              <div className="max-w-lg">
                <h3 className="text-2xl font-heading font-bold text-slate-900 uppercase mb-8">Hızlı Teklif Formu</h3>
                <LazyContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
