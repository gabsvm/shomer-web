"use client";

import { FadeUp } from "./FadeUp";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Gracias por tu consulta. Nos contactaremos a la brevedad.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-10 bg-brand-surface">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Contacto</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            Cotizá tu<br /><em className="text-brand-blue not-italic">servicio</em><br />ahora.
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed font-light mb-12">
            Un especialista te contacta para evaluar tu espacio y armar la solución ideal, sin compromiso.
          </p>

          <div className="flex flex-col gap-0">
            {[
              { icon: "📞", label: "Central de Monitoreo", value: "+54 11 2364-8511", sub: "Operativo 24/7" },
              { icon: "💼", label: "Área Comercial", value: "+54 11 7999-4444", sub: "info@shomer.com.ar" },
              { icon: "👥", label: "Trabajá con nosotros", value: "rrhh@shomer.com.ar", sub: "" }
            ].map((item, i) => (
              <div key={i} className="py-6 border-b border-brand-border last:border-b-0 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-1">{item.label}</div>
                  <div className="text-[0.95rem] font-medium">{item.value}</div>
                  {item.sub && <div className="text-[0.78rem] text-brand-gray mt-0.5">{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">Nombre *</label>
                <input type="text" required placeholder="Tu nombre" className="w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">Teléfono *</label>
                <input type="tel" required placeholder="+54 11 ..." className="w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">Email *</label>
              <input type="email" required placeholder="tu@email.com" className="w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">Tipo de espacio</label>
              <select className="w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors appearance-none">
                <option className="bg-brand-surface-2 text-white">Edificio / Consorcio</option>
                <option className="bg-brand-surface-2 text-white">Empresa</option>
                <option className="bg-brand-surface-2 text-white">Country / Barrio Cerrado</option>
                <option className="bg-brand-surface-2 text-white">Hotel</option>
                <option className="bg-brand-surface-2 text-white">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">Consulta</label>
              <textarea placeholder="Contanos sobre tu espacio..." className="w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors min-h-[120px] resize-y" />
            </div>

            <button type="submit" className="w-full bg-brand-blue text-brand-black py-4 rounded font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all">
              Enviar consulta
            </button>
          </form>

          <a href="https://wa.me/5491179994444?text=Hola%20Shomer%2C%20quiero%20cotizar%20el%20servicio%20de%20seguridad%20para%20mi%20edificio" target="_blank" className="w-full flex items-center justify-center gap-2.5 py-4 border border-[#25D366]/40 rounded bg-[#25D366]/10 text-[#25D366] font-semibold text-[0.88rem] tracking-wider uppercase mt-4 hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escribinos por WhatsApp
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
