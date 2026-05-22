"use client";

import { FadeUp } from "./FadeUp";
import { AlertTriangle, DollarSign, Unlock, CheckCircle2 } from "lucide-react";

export function Problem() {
  return (
    <section id="problema" className="py-16 md:py-24 px-6 md:px-10 bg-brand-near-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">
            El problema de hoy
          </div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            ¿Tu edificio sigue<br />dependiendo de <em className="text-brand-blue not-italic">esto</em>?
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border rounded-md overflow-hidden mt-14">
            
            <div className="bg-brand-surface p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <AlertTriangle className="w-12 h-12 mb-6 text-brand-red" />
              <div className="font-display text-2xl uppercase mb-3 tracking-wide">Porteros viejos</div>
              <p className="text-sm text-brand-gray leading-relaxed">
                Sistemas obsoletos, fallas constantes, mantenimientos que siempre salen más caros de lo esperado. Sin registro, sin control real.
              </p>
            </div>

            <div className="bg-brand-surface p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <DollarSign className="w-12 h-12 mb-6 text-brand-red" />
              <div className="font-display text-2xl uppercase mb-3 tracking-wide">Costos ocultos</div>
              <p className="text-sm text-brand-gray leading-relaxed">
                Mantenimientos recurrentes, reposición de hardware, sueldos de encargado nocturno. El costo real es el doble de lo que parece.
              </p>
            </div>

            <div className="bg-brand-surface p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <Unlock className="w-12 h-12 mb-6 text-brand-red" />
              <div className="font-display text-2xl uppercase mb-3 tracking-wide">Inseguridad real</div>
              <p className="text-sm text-brand-gray leading-relaxed">
                QR compartidos por WhatsApp, llaves duplicadas, accesos que nadie controla. Cualquiera puede entrar si sabe cómo.
              </p>
            </div>

          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-12 p-6 md:px-8 border border-brand-red/20 rounded-sm bg-brand-red/5 flex items-center gap-4">
            <CheckCircle2 className="shrink-0 text-brand-red w-6 h-6" />
            <p className="text-brand-gray-light leading-relaxed text-[0.95rem]">
              Dejá atrás los sistemas tradicionales, <strong className="text-white">inseguros y costosos</strong> de mantener. Hay una forma mejor de proteger tu edificio.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
