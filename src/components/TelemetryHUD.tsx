"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Radio, Wifi, Cpu, Activity, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TelemetryLog {
  time: string;
  event: string;
  type: "info" | "success" | "warning";
}

export function TelemetryHUD() {
  const { t, language } = useLanguage();
  const [logs, setLogs] = useState<TelemetryLog[]>([]);

  // Sync initial logs with selected language
  useEffect(() => {
    setLogs([
      { time: "13:34:01", event: t("hero.logEnc"), type: "success" },
      { time: "13:34:05", event: t("hero.logDiag"), type: "success" },
      { time: "13:34:12", event: t("hero.logLprReady"), type: "info" }
    ]);
  }, [language, t]);

  // Live log ticker
  useEffect(() => {
    const events = [
      { event: t("hero.logFaceOk"), type: "success" as const },
      { event: t("hero.logRoundsOk"), type: "success" as const },
      { event: t("hero.logPingOk"), type: "info" as const },
      { event: t("hero.logLprOk"), type: "success" as const },
      { event: t("hero.logCctvOk"), type: "info" as const },
      { event: t("hero.logModeOk"), type: "info" as const }
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
  }, [language, t]);

  return (
    <div className="w-full max-w-[390px] animate-fade-in-up">
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

        {/* Active CCTV Terminal Mockup (Wow-factor active scanner) */}
        <div className="relative w-full h-[160px] bg-[#050505] rounded border border-brand-border flex items-center justify-center overflow-hidden select-none">
          {/* CCTV Video Image */}
          <Image
            src="/images/cctv_hall_sec.png"
            alt="Active CCTV Monitoring"
            fill
            sizes="390px"
            className="object-cover pointer-events-none"
            style={{
              filter: "brightness(0.6) contrast(1.25) saturate(0.2) sepia(0.15) hue-rotate(85deg)"
            }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
          
          {/* Cyber Scanner line */}
          <div className="absolute left-0 right-0 h-[1.5px] bg-brand-blue/40 shadow-[0_0_8px_#00BFFF] pointer-events-none z-10 animate-scan-line-cctv" style={{
            animation: "laser-flow-cctv 4s linear infinite"
          }} />

          {/* Screen Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10" />

          {/* SVG overlays */}
          <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full text-brand-white z-20 pointer-events-none">
            {/* Blinking REC indicator */}
            <g transform="translate(15, 18)">
              <circle cx="0" cy="0" r="2.5" fill="#FF3B30" className="animate-pulse" />
              <text x="6" y="2.5" fill="rgba(255,255,255,0.85)" fontSize="6" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">{t("hero.rec")}</text>
            </g>

            <text x="50" y="20.5" fill="rgba(255,255,255,0.85)" fontSize="6" fontFamily="monospace" letterSpacing="0.3">
              CAM_01_HALL_SEC
            </text>

            {/* Corner Frame Brackets */}
            <path d="M 10 20 L 10 10 L 20 10" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M 300 10 L 310 10 L 310 20" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M 10 160 L 10 170 L 20 170" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M 300 170 L 310 170 L 310 160" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />

            {/* Face Scan Bounding Box on Lobby Entrance */}
            <g transform="translate(130, 45)">
              {/* Box corner brackets */}
              <path d="M 0 10 L 0 0 L 10 0" stroke="#00E676" strokeWidth="1.2" fill="none" />
              <path d="M 50 0 L 60 0 L 60 10" stroke="#00E676" strokeWidth="1.2" fill="none" />
              <path d="M 0 70 L 0 80 L 10 80" stroke="#00E676" strokeWidth="1.2" fill="none" />
              <path d="M 50 80 L 60 80 L 60 70" stroke="#00E676" strokeWidth="1.2" fill="none" />
              
              {/* Target area */}
              <rect x="5" y="5" width="50" height="70" fill="rgba(0, 230, 118, 0.04)" stroke="rgba(0, 230, 118, 0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              
              {/* Scanning bar */}
              <line x1="3" y1="10" x2="57" y2="10" stroke="#00E676" strokeWidth="0.8" opacity="0.8">
                <animate attributeName="y1" values="8;72;8" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="y2" values="8;72;8" dur="2.5s" repeatCount="indefinite" />
              </line>

              {/* Bio Target Tag */}
              <rect x="-10" y="-12" width="72" height="9" fill="#00E676" rx="0.5" />
              <text x="-7" y="-5.5" fill="black" fontSize="4.5" fontWeight="bold" fontFamily="monospace">{t("hero.faceDetected")}</text>
              
              {/* Sub-labels */}
              <g fontSize="4.5" fontFamily="monospace" fill="#00E676" fontWeight="bold" transform="translate(0, 88)">
                <text x="0" y="0">ID: USER (4B)</text>
                <text x="0" y="5.5">BIOMETRICS: OK [98.7%]</text>
              </g>
            </g>

            {/* Secondary monitoring node */}
            <g transform="translate(225, 65)">
              <rect x="0" y="0" width="55" height="55" fill="none" stroke="#00BFFF" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.6" />
              <text x="3" y="7" fill="#00BFFF" fontSize="4.5" fontFamily="monospace" fontWeight="bold" opacity="0.75">ZONE 02 (ACCESS)</text>
              <text x="3" y="13" fill="#00BFFF" fontSize="4" fontFamily="monospace" opacity="0.6">SECURE</text>
            </g>

            {/* Threat indicator (0% danger) */}
            <g transform="translate(15, 155)" fontSize="5.5" fontFamily="monospace" fill="rgba(255,255,255,0.6)">
              <text x="0" y="0">FPS: 30.00</text>
              <text x="45" y="0">BITRATE: 4120 Kbps</text>
              <text x="105" y="0" fill="#00E676">AI SHIELD: ACTIVE</text>
            </g>
          </svg>

          <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center font-mono text-[8px] text-brand-gray z-20">
            <span>{t("hero.sector")}</span>
            <span className="text-brand-blue">CAM_01_LOBBY</span>
          </div>
        </div>

        {/* Telemetry Stats Rows */}
        <div className="grid grid-cols-3 gap-2 text-center font-mono">
          <div className="border border-brand-border rounded bg-brand-surface/30 p-2 flex flex-col">
            <span className="text-[10px] text-brand-gray tracking-wider uppercase mb-0.5">{t("hero.latency")}</span>
            <span className="text-xs text-brand-green font-bold flex items-center justify-center gap-1">
              <Wifi className="w-3 h-3" /> 12ms
            </span>
          </div>
          <div className="border border-brand-border rounded bg-brand-surface/30 p-2 flex flex-col">
            <span className="text-[10px] text-brand-gray tracking-wider uppercase mb-0.5">{t("hero.cpu")}</span>
            <span className="text-xs text-brand-blue font-bold flex items-center justify-center gap-1">
              <Cpu className="w-3 h-3" /> 14.8%
            </span>
          </div>
          <div className="border border-brand-border rounded bg-brand-surface/30 p-2 flex flex-col">
            <span className="text-[10px] text-brand-gray tracking-wider uppercase mb-0.5">{t("hero.links")}</span>
            <span className="text-xs text-brand-white font-bold flex items-center justify-center gap-1">
              <Activity className="w-3 h-3" /> 12/12
            </span>
          </div>
        </div>

        {/* Live Activity Logs Ticker */}
        <div className="flex flex-col gap-2 font-mono border-t border-brand-border pt-3">
          <span className="text-[8px] text-brand-gray uppercase tracking-widest font-bold">{t("hero.tickerTitle")}</span>
          <div className="flex flex-col gap-1.5 h-[70px] overflow-hidden">
            {logs.map((log, idx) => (
              <div 
                key={log.time + idx} 
                className="text-[9px] flex items-start gap-1 text-brand-gray-light leading-normal animate-slide-in-log"
                style={{ opacity: 1 - idx * 0.25 }}
              >
                <span className="text-brand-blue shrink-0">[{log.time}]</span>
                <span className={`shrink-0 font-bold ${log.type === "success" ? "text-brand-green" : "text-brand-blue"}`}>
                  {log.type === "success" ? "OK" : "INFO"}:
                </span>
                <span className="truncate text-brand-white">{log.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtext info */}
        <div className="flex justify-between items-center text-[8px] text-brand-gray font-mono pt-1.5 border-t border-brand-border/40">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-brand-green" /> ENCRYPTED PROTOCOL ACTIVE
          </span>
          <span>v1.2.6</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes laser-flow-cctv {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
