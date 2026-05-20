"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "./FadeUp";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background with scan animation */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 z-0 opacity-40">
        <Image src="/images/landing.jpeg" alt="Shomer Security" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.95)_20%,rgba(0,191,255,0.05)_100%)]" />
      
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-60"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />

      <div className="relative z-10 px-6 md:px-10 max-w-[900px] mt-16">
        <FadeUp>
          <div className="inline-flex items-center gap-2 border border-brand-border px-4 py-2 rounded-full text-xs font-mono tracking-widest text-brand-gray-light mb-8 backdrop-blur-md bg-white/5">
            <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_#00E676] animate-pulse" />
            CENTRAL DE MONITOREO 24/7 ACTIVA
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="font-mono text-sm tracking-[0.2em] text-brand-blue uppercase mb-4">
            Shomer Security
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-wide uppercase mb-6 text-brand-white">
            La seguridad<br />que <em className="text-brand-blue not-italic">no</em><br />descansa.
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-lg text-brand-gray-light leading-relaxed max-w-[560px] mb-10 font-light">
            Control de accesos inteligente, monitoreo 24/7 y un ecosistema tecnológico que protege tu edificio sin depender de nadie.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="#contacto"
              className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all"
            >
              Cotizá tu servicio
            </Link>
            <Link
              href="#vision"
              className="border border-white/30 text-brand-white px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              Ver productos
            </Link>
          </div>
        </FadeUp>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[0.68rem] tracking-[0.15em] uppercase font-mono">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </section>
  );
}
