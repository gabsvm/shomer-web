"use client";

import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Segments() {
  const segments = [
    {
      title: "Edificios y consorcios",
      label: "Residencial",
      desc: "Dejá de depender del encargado. Gestioná el acceso de tu edificio desde donde estés, con registro completo de cada ingreso.",
      gradient: "from-[#00BFFF]/10 via-transparent to-transparent",
      href: "/servicios/edificios-y-consorcios",
    },
    {
      title: "Empresas",
      label: "Corporativo",
      desc: "Control operativo en uno. Fichaje automático, Face ID, historial por persona y horarios estrictos sin supervisión humana.",
      gradient: "from-[#00E676]/10 via-transparent to-transparent",
      href: "/servicios/empresas",
    },
    {
      title: "Countries y barrios cerrados",
      label: "Residencias privadas",
      desc: "Accesos masivos sin cuellos de botella. JWT + geocerca GPS hacen imposible clonar o reutilizar un código de ingreso.",
      gradient: "from-[#FF3B30]/10 via-transparent to-transparent",
      href: "/servicios/barrios-cerrados",
    },
    {
      title: "Hoteles",
      label: "Hotelería",
      desc: "Check-in sin fricciones. Los huéspedes acceden con su cara, sin llaves ni recepción. Personal controlado por turno.",
      gradient: "from-purple-500/10 via-transparent to-transparent",
      href: "/servicios/hoteles",
    },
  ];

  return (
    <section id="segmentos" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Para cada espacio</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-12">
            Estés donde <em className="text-brand-blue not-italic">estés</em>,<br />te cuidamos.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {segments.map((segment, i) => (
            <FadeUp key={segment.title} delay={i * 0.08} className="h-full">
              <Link href={segment.href} className="group relative flex flex-col justify-between rounded overflow-hidden min-h-[240px] h-full bg-brand-surface border border-brand-border hover:border-brand-blue/40 transition-colors duration-300 p-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} pointer-events-none`} />
                <div className="relative z-10">
                  <div className="text-[0.72rem] font-mono tracking-[0.15em] uppercase text-brand-blue mb-3">
                    {segment.label}
                  </div>
                  <h3 className="font-display text-[2rem] uppercase leading-none mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-[0.85rem] text-brand-gray leading-relaxed">
                    {segment.desc}
                  </p>
                </div>
                <div className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brand-blue mt-8 group-hover:gap-3 transition-all">
                  Consultar servicio <ArrowRight size={16} />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
