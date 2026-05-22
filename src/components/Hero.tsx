"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "./FadeUp";
import { useState, useEffect } from "react";
import { Radio, Wifi, Activity, ShieldCheck, Cpu } from "lucide-react";

interface TelemetryLog {
  time: string;
  event: string;
  type: "info" | "success" | "warning";
}

export function Hero() {
  const [logs, setLogs] = useState<TelemetryLog[]>([
    { time: "13:34:01", event: "Enlace encriptado establecido con Central Shomer", type: "success" },
    { time: "13:34:05", event: "Autodiagnóstico completo - Todos los nodos OK", type: "success" },
    { time: "13:34:12", event: "LPR cochera activa - Escaneo listo", type: "info" }
  ]);

  const [activeFaceIndex, setActiveFaceIndex] = useState(0);

  // Live log ticker
  useEffect(() => {
    const events = [
      { event: "Acceso Facial: Propietario verificado en puerta 1", type: "success" as const },
      { event: "Control de rondas: Operador verificado en sector A", type: "success" as const },
      { event: "Chequeo de redundancia: Ping óptimo (12ms)", type: "info" as const },
      { event: "LPR Entrada: Patente detectada y autorizada", type: "success" as const },
      { event: "Cámara HD perimetral: Sincronización WebRTC activa", type: "info" as const },
      { event: "Modo inteligente activo: Detección perimetral encendida", type: "info" as const }
    ];

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      const randomEvent = events[Math.floor(Math.random() * events.length)];

      setLogs((prev) => [
        { time: timeStr, event: randomEvent.event, type: randomEvent.type },
        ...prev.slice(0, 3)
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center py-20 lg:py-0 overflow-hidden">
      {/* Background with scan animation */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 z-0 opacity-25 lg:opacity-40">
        <Image src="/images/landing.jpeg" alt="Shomer Security" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.97)_30%,rgba(0,191,255,0.06)_100%)]" />
      
      <motion.div
        className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-40 pointer-events-none"
        animate={{ y: ["0dvh", "100dvh", "0dvh"] }}
        transition={{ duration: 7, ease: "linear", repeat: Infinity }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 mt-16 md:mt-24 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 border border-brand-border px-4 py-2 rounded-full text-xs font-mono tracking-widest text-brand-gray-light mb-6 backdrop-blur-md bg-white/5">
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
              <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] tracking-wide uppercase mb-6 text-brand-white">
                La seguridad<br />que <em className="text-brand-blue not-italic">no</em><br />descansa.
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-base sm:text-lg text-brand-gray-light leading-relaxed max-w-[560px] mb-8 font-light">
                Control de accesos inteligente, monitoreo en tiempo real por operadores y un ecosistema tecnológico que protege tu edificio sin depender de nadie.
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

          {/* Right Column: Telemetry Holographic HUD */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative">
            <FadeUp delay={0.2} className="w-full max-w-[390px]">
              <div className="relative border border-brand-border rounded-lg p-6 bg-brand-black/75 backdrop-blur-md shadow-[0_0_40px_rgba(0,191,255,0.06)] overflow-hidden flex flex-col gap-4">
                {/* Neon Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-blue" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-blue" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-blue" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-blue" />
                
                {/* HUD Header */}
                <div className="flex justify-between items-center border-b border-brand-border pb-3">
                  <span className="font-mono text-[10px] text-brand-blue tracking-[0.15em] font-bold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 animate-pulse" /> SHOMER SHIELD HUD
                  </span>
                  <span className="font-mono text-[9px] text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" /> LIVE TELEMETRY
                  </span>
                </div>

                {/* Cybernetic Wireframe SVG (Rotating dome + laser scan) */}
                <div className="relative w-full h-[150px] bg-brand-surface/60 rounded border border-brand-border flex items-center justify-center overflow-hidden">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* Cyber Scanner line */}
                  <div className="absolute left-0 right-0 h-[1px] bg-brand-blue/30 shadow-[0_0_8px_#00BFFF]" style={{
                    animation: "laser-flow 3.5s linear infinite"
                  }} />

                  <svg viewBox="0 0 200 120" className="w-full h-[130px] z-10 text-brand-blue/30">
                    <defs>
                      <filter id="glow-hud-blue" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="glow-grad-hud" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 191, 255, 0.2)" />
                        <stop offset="100%" stopColor="rgba(0, 191, 255, 0.0)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Rotating dome base */}
                    <ellipse cx="100" cy="30" rx="35" ry="10" fill="none" stroke="currentColor" strokeWidth="1" />
                    <ellipse cx="100" cy="30" rx="40" ry="12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" />
                    
                    {/* Security Dome structure */}
                    <path d="M 65,30 A 35,35 0 0,0 135,30 Z" fill="none" stroke="#00BFFF" strokeWidth="1.2" filter="url(#glow-hud-blue)" />
                    
                    {/* Inner Rotating Laser Core */}
                    <g>
                      <line x1="100" y1="30" x2="75" y2="90" stroke="#00E676" strokeWidth="1.5" filter="url(#glow-hud-blue)" opacity="0.8">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 100 30"
                          to="360 100 30"
                          dur="6s"
                          repeatCount="indefinite"
                        />
                      </line>
                      <polygon points="100,30 65,95 85,95" fill="url(#glow-grad-hud)" opacity="0.4">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 100 30"
                          to="360 100 30"
                          dur="6s"
                          repeatCount="indefinite"
                        />
                      </polygon>
                    </g>
                    
                    {/* Access Floor Plane */}
                    <polygon points="40,95 160,95 180,110 20,110" fill="rgba(255,255,255,0.02)" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="100" y1="95" x2="100" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                    
                    {/* Face scan HUD overlay target */}
                    <g transform="translate(140, 45)" className="animate-pulse">
                      <path d="M 0,2 L 0,0 L 2,0" fill="none" stroke="#00E676" strokeWidth="0.8" />
                      <path d="M 8,0 L 10,0 L 10,2" fill="none" stroke="#00E676" strokeWidth="0.8" />
                      <path d="M 0,8 L 0,10 L 2,10" fill="none" stroke="#00E676" strokeWidth="0.8" />
                      <path d="M 8,10 L 10,10 L 10,8" fill="none" stroke="#00E676" strokeWidth="0.8" />
                      <text x="-4" y="16" fill="#00E676" fontSize="5" fontFamily="monospace">ROSTRO OK</text>
                    </g>

                    <g transform="translate(30, 45)">
                      <circle cx="5" cy="5" r="4" fill="none" stroke="#FF3B30" strokeWidth="0.8" />
                      <line x1="5" y1="1" x2="5" y2="9" stroke="#FF3B30" strokeWidth="0.8" />
                      <line x1="1" y1="5" x2="9" y2="5" stroke="#FF3B30" strokeWidth="0.8" />
                      <text x="-6" y="16" fill="#FF3B30" fontSize="5" fontFamily="monospace">LPR LOCK</text>
                    </g>
                  </svg>

                  <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center font-mono text-[8px] text-brand-gray">
                    <span>SECTOR: ACCESO PRINCIPAL</span>
                    <span className="text-brand-blue">CAM_01_DOME</span>
                  </div>
                </div>

                {/* Telemetry Stats Rows */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="border border-brand-border rounded bg-brand-surface/30 p-2 flex flex-col">
                    <span className="text-[10px] text-brand-gray tracking-wider uppercase mb-0.5">LATENCIA</span>
                    <span className="text-xs text-brand-green font-bold flex items-center justify-center gap-1">
                      <Wifi className="w-3 h-3" /> 12ms
                    </span>
                  </div>
                  <div className="border border-brand-border rounded bg-brand-surface/30 p-2 flex flex-col">
                    <span className="text-[10px] text-brand-gray tracking-wider uppercase mb-0.5">CPU HUBS</span>
                    <span className="text-xs text-brand-blue font-bold flex items-center justify-center gap-1">
                      <Cpu className="w-3 h-3" /> 14.8%
                    </span>
                  </div>
                  <div className="border border-brand-border rounded bg-brand-surface/30 p-2 flex flex-col">
                    <span className="text-[10px] text-brand-gray tracking-wider uppercase mb-0.5">ENLACES</span>
                    <span className="text-xs text-brand-white font-bold flex items-center justify-center gap-1">
                      <Activity className="w-3 h-3" /> 12/12
                    </span>
                  </div>
                </div>

                {/* Live Activity Logs Ticker */}
                <div className="flex flex-col gap-2 font-mono border-t border-brand-border pt-3">
                  <span className="text-[8px] text-brand-gray uppercase tracking-widest font-bold">BITÁCORA EN TIEMPO REAL</span>
                  <div className="flex flex-col gap-1.5 h-[70px] overflow-hidden">
                    {logs.map((log, idx) => (
                      <motion.div 
                        key={log.time + idx} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1 - idx * 0.25, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[9px] flex items-start gap-1 text-brand-gray-light leading-normal"
                      >
                        <span className="text-brand-blue shrink-0">[{log.time}]</span>
                        <span className={`shrink-0 font-bold ${log.type === "success" ? "text-brand-green" : "text-brand-blue"}`}>
                          {log.type === "success" ? "OK" : "INFO"}:
                        </span>
                        <span className="truncate text-brand-white">{log.event}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="flex justify-between items-center text-[8px] text-brand-gray font-mono pt-1.5 border-t border-brand-border/40">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-brand-green" /> PROTOCOLO DE CIFRADO ACTIVO
                  </span>
                  <span>v1.2.6</span>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 lg:opacity-50">
        <span className="text-[0.65rem] tracking-[0.15em] uppercase font-mono">Desplazarse</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <style jsx global>{`
        @keyframes laser-flow {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}

