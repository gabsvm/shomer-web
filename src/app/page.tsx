import { Segments } from "@/components/Segments";
import { Includes } from "@/components/Includes";
import { WhyShomer } from "@/components/WhyShomer";
import { SocialProof } from "@/components/SocialProof";
import { VideoSection } from "@/components/VideoSection";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Vision } from "@/components/Vision";
import { Totem } from "@/components/Totem";
import { Pricing } from "@/components/Pricing";
import { CPQConfigurator } from "@/components/CPQConfigurator";
import { PodcastSection } from "@/components/PodcastSection";
import { InfrastructureMap } from "@/components/InfrastructureMap";
import { MonitoringSandbox } from "@/components/MonitoringSandbox";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Vision />
      <Totem />
      <Segments />
      <InfrastructureMap />
      <MonitoringSandbox />
      <Pricing />
      <CPQConfigurator />
      <PodcastSection />
      <Includes />
      <WhyShomer />
      <SocialProof />
      <VideoSection />
      
      {/* Club Shomer section is simple enough to put here or we can extract it. I'll put it here. */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-brand-black">
        <div className="max-w-[900px] mx-auto border border-brand-blue rounded-lg p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-[linear-gradient(135deg,var(--color-brand-surface),rgba(0,191,255,0.05))] relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.1),transparent_70%)] pointer-events-none" />
          <div>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Próximamente</div>
            <h3 className="font-display text-4xl uppercase mb-3 tracking-wide">Club Shomer</h3>
            <p className="text-sm text-brand-gray-light leading-relaxed max-w-[400px]">
              Descuentos exclusivos, beneficios y bonificaciones para clientes y socios. Accedé antes que nadie a las novedades de Shomer Security.
            </p>
          </div>
          <a href="https://shomer-club-v2.vercel.app" target="_blank" className="whitespace-nowrap border border-white/30 text-brand-white px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:border-brand-blue hover:text-brand-blue transition-all">
            Conocer Club Shomer →
          </a>
        </div>
      </section>

      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5491179994444?text=Hola%20Shomer%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-200"
        aria-label="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}
