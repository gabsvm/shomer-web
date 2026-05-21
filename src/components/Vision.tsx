"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";
import Image from "next/image";
import Link from "next/link";

export function Vision() {
  const [viewMode, setViewMode] = useState<"photo" | "3d">("photo");

  return (
    <section id="vision" className="py-24 px-6 md:px-10 bg-brand-black">
      <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        <FadeUp>
          <div className="relative">
            <div className="absolute -inset-5 bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.15),transparent_70%)] pointer-events-none" />
            <div className="aspect-[4/5] w-full rounded-lg overflow-hidden relative bg-[#0a0a0a] border border-white/5 shadow-2xl flex flex-col justify-between">
              
              {viewMode === "photo" ? (
                <Image 
                  src="/images/device.png" 
                  alt="Línea VISION" 
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <iframe 
                  src="https://my.spline.design/untitled-bG8GVacgvfJrDgbJSSGzJ6Pu/"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg bg-[#0a0a0a]"
                  title="Portero Inteligente Shomer 3D"
                  allow="vr; gyroscope; accelerometer"
                />
              )}

              {/* Selector de Modo */}
              <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-black/60 border border-white/10 p-1 rounded-full backdrop-blur-sm">
                <button 
                  onClick={() => setViewMode("photo")}
                  className={`px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "photo" ? "bg-brand-blue text-brand-black font-bold" : "text-brand-gray hover:text-white"}`}
                >
                  FOTO
                </button>
                <button 
                  onClick={() => setViewMode("3d")}
                  className={`px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "3d" ? "bg-brand-blue text-brand-black font-bold shadow-[0_0_8px_rgba(0,191,255,0.4)]" : "text-brand-gray hover:text-white"}`}
                >
                  3D INTERACTIVO
                </button>
              </div>

              <div className="absolute bottom-5 left-5 right-5 bg-black/85 border border-brand-border rounded p-4 backdrop-blur-md flex justify-between items-center z-10">
                <span className="text-xs font-mono text-brand-gray tracking-widest uppercase">
                  Línea VISION {viewMode === "3d" && "3D"}
                </span>
                <span className="flex items-center gap-2 text-xs font-mono text-brand-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_6px_#00E676] animate-pulse" />
                  Operativo 24/7
                </span>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col">
          <FadeUp delay={0.2}>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Producto estrella</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
              La evolución<br />del portero <em className="text-brand-blue not-italic">eléctrico.</em>
            </h2>
            <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light">
              Un sistema moderno que reemplaza el portero tradicional. Comunicación inteligente, acceso sin llaves y control total desde tu celular. Sin apps. Sin descargas. Sin fricción.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-9 flex flex-col">
              {[
                { icon: "📱", title: "Sin Apps. Sin Descargas.", text: "El visitante escanea el QR y accede desde el navegador. Sin instalaciones, sin cuentas. Funciona en cualquier celular." },
                { icon: "🔐", title: "Token JWT de un solo uso", text: "Cada acceso genera un token único, encriptado, válido por 5 minutos. Imposible copiar o reutilizar." },
                { icon: "📍", title: "Geocerca GPS inteligente", text: "El acceso solo funciona dentro de 40 metros del edificio. Imposible llamar desde otra ciudad o país." },
                { icon: "👁️", title: "Verificación visual HD en vivo", text: "Ves a la persona antes de abrir. Audio bidireccional y verificación de identidad sin exponerte." }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 py-5 border-b border-brand-border last:border-b-0">
                  <div className="w-9 h-9 rounded-full bg-brand-blue-dim border border-brand-blue/30 flex items-center justify-center shrink-0 text-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-1">{feature.title}</h4>
                    <p className="text-[0.83rem] text-brand-gray leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="#precios"
                className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all inline-block"
              >
                Ver planes y precios
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Vision Pro in-situ showcase */}
      <FadeUp delay={0.3} className="mt-16">
        <div className="relative rounded-lg overflow-hidden border border-brand-border shadow-2xl">
          <Image
            src="/images/vision-pro.png"
            alt="Shomer Vision Pro instalado en edificio"
            width={2750}
            height={1536}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-1">Línea VISION PRO</p>
              <p className="font-display text-2xl md:text-3xl uppercase text-white leading-none">Instalado. Operativo. Invisible.</p>
            </div>
            <Link
              href="#precios"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-blue text-brand-black px-5 py-2.5 rounded-sm font-bold text-xs tracking-wider uppercase hover:bg-white transition-colors shrink-0"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </FadeUp>
      </div>
    </section>
  );
}
