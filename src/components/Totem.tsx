"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";
import Image from "next/image";
import Link from "next/link";
import { Video, ShieldAlert, BellRing, ShieldCheck } from "lucide-react";

export function Totem() {
  const [viewMode, setViewMode] = useState<"in-situ" | "catalog">("in-situ");

  return (
    <section id="totem" className="bg-brand-surface p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="relative overflow-hidden w-full h-[300px] sm:h-[400px] lg:h-auto lg:min-h-full bg-brand-black flex items-center justify-center">
          
          {viewMode === "in-situ" ? (
            <>
              <Image 
                src="/images/totem-section.png" 
                alt="Tótem de Seguridad Virtual en situ" 
                fill 
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-brand-surface opacity-90 lg:opacity-100" />
            </>
          ) : (
            <div className="absolute inset-0 w-full h-full p-8 md:p-12 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]">
              <div className="relative w-full h-full max-w-[380px] max-h-[480px]">
                <Image 
                  src="/images/totem_catalogo.png" 
                  alt="Tótem Shomer Vista de Catálogo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}

          {/* Selector de Vista */}
          <div className="absolute top-6 left-6 z-20 flex gap-1.5 bg-black/70 border border-white/10 p-1 rounded-full backdrop-blur-md">
            <button 
              onClick={() => setViewMode("in-situ")}
              className={`px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "in-situ" ? "bg-brand-blue text-brand-black font-bold" : "text-brand-gray hover:text-white"}`}
            >
              EN SITIO
            </button>
            <button 
              onClick={() => setViewMode("catalog")}
              className={`px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "catalog" ? "bg-brand-blue text-brand-black font-bold shadow-[0_0_8px_rgba(0,191,255,0.4)]" : "text-brand-gray hover:text-white"}`}
            >
              CATÁLOGO ESTUDIO
            </button>
          </div>
        </div>
        
        <div className="py-16 px-6 md:px-16 flex flex-col justify-center">
          <FadeUp>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Hardware</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
              Tótem de<br /><em className="text-brand-blue not-italic">Seguridad</em><br />Virtual.
            </h2>
            <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light">
              Monitoreo 24/7 con operador en vivo. Sin ausencias, sin fatiga, sin distracciones. El operador interactúa en tiempo real y activa protocolos ante cualquier incidente.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <Video className="w-6 h-6 mb-3 text-white" />
                <h4 className="text-[0.88rem] font-semibold mb-1">Cámaras HD 24/7</h4>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">Monitoreo en tiempo real con visión nocturna. Respuesta inmediata.</p>
              </div>
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <ShieldAlert className="w-6 h-6 mb-3 text-white" />
                <h4 className="text-[0.88rem] font-semibold mb-1">Huella de pánico</h4>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">Activa alerta silenciosa a la central ante situaciones de riesgo.</p>
              </div>
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <BellRing className="w-6 h-6 mb-3 text-white" />
                <h4 className="text-[0.88rem] font-semibold mb-1">Alarma disuasoria</h4>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">El operador activa señal sonora + protocolo 911 en tiempo real.</p>
              </div>
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <ShieldCheck className="w-6 h-6 mb-3 text-white" />
                <h4 className="text-[0.88rem] font-semibold mb-1">Conexión directa 911</h4>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">Protocolos anti-siniestros con respuesta coordinada a las fuerzas.</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contacto"
                className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all inline-block"
              >
                Cotizar tótem
              </Link>
              <Link
                href="https://youtu.be/VsBzvaK4f54?si=_u1hjlzIF2IOgYhe"
                target="_blank"
                className="border border-white/30 text-brand-white px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:border-brand-blue hover:text-brand-blue transition-all inline-block"
              >
                ▶ Ver video
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
