"use client";

import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Segments() {
  const segments = [
    {
      title: "Edificios y consorcios",
      label: "Residencial",
      desc: "Dejá de depender del encargado. Gestioná el acceso de tu edificio desde donde estés, con registro completo de cada ingreso."
    },
    {
      title: "Empresas",
      label: "Corporativo",
      desc: "Control operativo en uno. Fichaje automático, Face ID, historial por persona y horarios estrictos sin supervisión humana."
    },
    {
      title: "Hoteles",
      label: "Hotelería",
      desc: "Check-in sin fricciones. Los huéspedes acceden con su cara, sin llaves ni recepción. Personal controlado por turno."
    }
  ];

  return (
    <section id="segmentos" className="py-24 px-6 md:px-10 bg-brand-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Para cada espacio</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-12">
            Estés donde <em className="text-brand-blue not-italic">estés</em>,<br />te cuidamos.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {segments.map((segment, i) => (
            <FadeUp key={segment.title} delay={i * 0.1}>
              <Link href="#contacto" className="group relative block rounded overflow-hidden aspect-[4/3] sm:aspect-[3/4] bg-brand-surface border border-brand-border">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col">
                  <div className="text-[0.72rem] font-mono tracking-[0.15em] uppercase text-brand-blue mb-2">
                    {segment.label}
                  </div>
                  <h3 className="font-display text-3xl uppercase leading-none mb-3">
                    {segment.title}
                  </h3>
                  <p className="text-[0.85rem] text-brand-gray-light leading-relaxed mb-5">
                    {segment.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brand-blue group-hover:gap-3 transition-all">
                    Consultar servicio <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
