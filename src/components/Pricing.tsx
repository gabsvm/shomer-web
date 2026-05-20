"use client";

import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Vision",
      subtitle: "Comunicación inteligente bidireccional y verificación visual HD.",
      price: "199.000",
      features: [
        "Cámara HD 1080p integrada",
        "QR dinámico sin app para visitantes",
        "Llamada de un toque al residente",
        "Comunicación interna privada WebRTC",
        "Notificaciones a múltiples usuarios"
      ],
      notIncluded: [
        "Acceso físico Face ID",
        "Permisos por horario/día"
      ]
    },
    {
      name: "Vision Pro",
      subtitle: "Todo lo anterior más Face ID, permisos por horario y aperturas monitoreadas.",
      price: "390.000",
      featured: true,
      features: [
        "Todo lo de Vision",
        "Face ID biométrico sin llaves ni tarjetas",
        "Permisos inteligentes por horario y día",
        "Aperturas de emergencia monitoreadas",
        "Historial completo por persona y período",
        "Fichaje automático de personal"
      ],
      notIncluded: []
    },
    {
      name: "Vision Pro Dúo",
      subtitle: "Doble equipo para ingreso y egreso. Control total del flujo de personas.",
      price: "550.000",
      features: [
        "Todo lo de Vision Pro",
        "Equipo dual ingreso + egreso",
        "Control total del flujo de accesos",
        "Ideal para edificios de alto tráfico",
        "Reportes diferenciados entrada/salida",
        "Gestión centralizada avanzada"
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="precios" className="py-24 px-6 md:px-10 bg-brand-near-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Línea VISION</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            Planes claros.<br /><em className="text-brand-blue not-italic">Sin sorpresas.</em>
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light">
            Abono mensual todo incluido. Sin costos ocultos, sin mantenimientos aparte, sin sorpresas.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1}>
              <div 
                className={`h-full border rounded p-8 md:p-10 relative bg-brand-surface transition-colors duration-300 flex flex-col
                  ${plan.featured 
                    ? "border-brand-blue bg-[linear-gradient(135deg,var(--color-brand-surface)_0%,rgba(0,191,255,0.05)_100%)]" 
                    : "border-brand-border hover:border-brand-blue/40"
                  }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] bg-brand-blue text-brand-black font-mono text-[0.65rem] font-bold tracking-[0.1em] px-4 py-1 rounded-b">
                    MÁS ELEGIDO
                  </div>
                )}
                
                <h3 className="font-display text-3xl uppercase tracking-wider mb-2">{plan.name}</h3>
                <p className="text-[0.83rem] text-brand-gray mb-7 leading-relaxed min-h-[60px]">{plan.subtitle}</p>
                
                <div className="font-display text-5xl text-brand-blue leading-none mb-1">
                  ${plan.price} <span className="text-base text-brand-gray align-top">+ IVA</span>
                </div>
                <div className="text-xs text-brand-gray font-mono mb-8">/ mes · abono mensual</div>
                
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-brand-gray-light leading-relaxed">
                      <span className="text-brand-green font-bold shrink-0 mt-[1px]">✓</span> {f}
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-brand-gray leading-relaxed opacity-60">
                      <span className="text-brand-gray font-bold shrink-0 mt-[1px]">×</span> {f}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="#contacto"
                  className={`w-full py-3.5 border rounded-sm font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center
                    ${plan.featured 
                      ? "bg-brand-blue border-brand-blue text-brand-black hover:bg-white hover:border-white" 
                      : "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-black"
                    }`}
                >
                  Consultar plan
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-8 p-6 border border-brand-border rounded-sm bg-brand-blue/5 text-[0.85rem] text-brand-gray-light leading-relaxed text-center">
            Todos los planes incluyen <strong className="text-brand-blue font-semibold">instalación, mantenimiento, soporte técnico y actualizaciones de software sin costo adicional</strong>. El equipo va en comodato. Presupuesto final sujeto a relevamiento técnico en sitio.
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
