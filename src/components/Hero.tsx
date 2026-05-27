"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const TelemetryHUD = dynamic(
  () => import("./TelemetryHUD").then((mod) => mod.TelemetryHUD),
  { ssr: false }
);

export function Hero() {
  const { t } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);

  // Client-side detection of desktop viewport to avoid loading/rendering Telemetry HUD on mobile
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center py-20 lg:py-0 overflow-hidden">
      {/* Background with scan animation */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 z-0 opacity-25 lg:opacity-40">
        <Image src="/images/landing.jpeg" alt="Shomer Security" fill sizes="100vw" className="object-cover" preload fetchPriority="high" loading="eager" />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.97)_30%,rgba(0,191,255,0.06)_100%)]" />
      
      {/* Native CSS scanning laser line */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-40 pointer-events-none animate-scan-line" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 mt-16 md:mt-24 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 border border-brand-border px-4 py-2 rounded-full text-xs font-mono tracking-widest text-brand-gray-light mb-6 backdrop-blur-md bg-white/5">
              <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_#00E676] animate-pulse" />
              {t("hero.activeMonitoring")}
            </div>

            <div className="animate-fade-in-up opacity-0 font-mono text-sm tracking-[0.2em] text-brand-blue uppercase mb-4" style={{ animationDelay: "100ms" }}>
              Shomer Security
            </div>

            <h1 className="animate-fade-in-up opacity-0 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.1] tracking-wide uppercase mb-6 text-brand-white" style={{ animationDelay: "200ms" }}>
              {t("hero.heroTitle1")}<br />
              <span className="text-brand-blue">{t("hero.heroTitle2")}</span>
            </h1>

            <p className="animate-fade-in-up opacity-0 text-base sm:text-lg text-brand-gray-light leading-relaxed max-w-[560px] mb-8 font-light" style={{ animationDelay: "300ms" }}>
              {t("hero.heroDesc")}
            </p>

            <div className="animate-fade-in-up opacity-0 flex flex-wrap gap-4 items-center" style={{ animationDelay: "400ms" }}>
              <Link
                href="#contacto"
                className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all"
              >
                {t("hero.heroQuote")}
              </Link>
              <Link
                href="#vision"
                className="border border-white/30 text-brand-white px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                {t("hero.heroProducts")}
              </Link>
            </div>
          </div>

          {/* Right Column: Telemetry Holographic HUD (only rendered on Desktop) */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative min-w-[390px] min-h-[460px]">
            {isDesktop && <TelemetryHUD />}
          </div>

        </div>
      </div>

      {/* Native CSS Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 lg:opacity-50">
        <span className="text-[0.65rem] tracking-[0.15em] uppercase font-mono">Desplazarse</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent origin-top animate-scroll-indicator" />
      </div>
    </section>
  );
}
