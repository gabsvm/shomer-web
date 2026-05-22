"use client";

import { FadeUp } from "./FadeUp";

export function WhyShomer() {
  return (
    <section id="porque" className="py-16 md:py-24 px-6 md:px-10 bg-brand-surface">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <FadeUp direction="left" duration={0.8}>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">La diferencia</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            Por qué<br /><em className="text-brand-blue not-italic">Shomer</em><br />gana.
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed font-light mb-8">
            El QR de WhatsApp que usás hoy es una puerta abierta. Cualquiera puede copiar el código, compartirlo o usarlo desde donde quiera. Shomer cierra esa brecha con infraestructura real.
          </p>
          <div className="p-6 border border-brand-blue/30 rounded bg-brand-blue/5 hover:border-brand-blue hover:shadow-[0_4px_25px_rgba(0,191,255,0.04)] transition-all duration-300">
            <h3 className="font-display text-2xl uppercase text-brand-blue mb-2 tracking-wide">Invulnerable.</h3>
            <p className="text-[0.88rem] text-brand-gray-light leading-relaxed">
              Doble validación de seguridad: Token JWT de un solo uso + Geocerca GPS de 40 metros. Lo que ningún QR genérico puede ofrecer.
            </p>
          </div>
        </FadeUp>

        <FadeUp direction="right" delay={0.2} duration={0.8} className="overflow-x-auto">
          <p className="text-[0.72rem] font-mono text-brand-gray tracking-widest uppercase mb-3 sm:hidden">← Deslizá para ver →</p>
          <div className="min-w-[600px] border border-brand-border rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-brand-surface-2 border-b border-brand-border text-[0.72rem] font-mono tracking-widest uppercase text-center">
              <div className="p-4 text-left text-brand-gray">Sistema</div>
              <div className="p-4 text-brand-red">QR Tradicional</div>
              <div className="p-4 text-brand-blue">Shomer</div>
            </div>
            
            {[
              { label: "Clonable", trad: "Sí", shomer: "Nunca" },
              { label: "Expira automáticamente", trad: "No", shomer: "5 minutos" },
              { label: "Control de ubicación", trad: "No", shomer: "GPS 40m" },
              { label: "Registro de accesos", trad: "No", shomer: "Completo" },
              { label: "Llamadas remotas", trad: "Sí", shomer: "Bloqueadas" },
              { label: "App requerida", trad: "Depende", shomer: "Nunca" },
              { label: "Números expuestos", trad: "Sí", shomer: "Nunca" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-brand-border last:border-b-0 text-center text-[0.83rem] text-brand-gray-light">
                <div className="p-4 text-left">{row.label}</div>
                <div className="p-4 text-brand-red">{row.trad}</div>
                <div className="p-4 text-brand-green">{row.shomer}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
