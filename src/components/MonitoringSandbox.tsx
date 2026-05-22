"use client";

import { useState, useEffect } from "react";
import { FadeUp } from "./FadeUp";
import { Shield, Radio, Bell, Users, Eye, Zap, RefreshCw, Activity, Volume2 } from "lucide-react";

interface LogEvent {
  id: string;
  time: string;
  type: "info" | "warning" | "success" | "danger";
  message: string;
}

export function MonitoringSandbox() {
  const [alarmActive, setAlarmActive] = useState(false);
  const [activeCam, setActiveCam] = useState<1 | 2>(1);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [logs, setLogs] = useState<LogEvent[]>([
    { id: "1", time: "16:30:12", type: "success", message: "Conexión encriptada establecida con Hub Buenos Aires" },
    { id: "2", time: "16:31:05", type: "info", message: "Sistema LPR: Ingreso vehicular autorizado (Patente: B-XY 7890)" },
    { id: "3", time: "16:32:44", type: "info", message: "Acceso Facial: Juan González (Propietario 4° B) - Rostro validado 98.7%" },
    { id: "4", time: "16:33:15", type: "success", message: "Autochequeo de seguridad perimetral: Todos los nodos activos" },
  ]);

  // Live ticking clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("es-AR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, "-");
      const timeStr = now.toTimeString().split(" ")[0];
      setCurrentTime(`${dateStr} ${timeStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scanning bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Generate mock logs dynamically
  useEffect(() => {
    if (alarmActive) return;

    const messages = [
      { type: "info" as const, message: "Acceso Facial: Residente ingresando por Entrada Principal" },
      { type: "success" as const, message: "Control de rondas: Operador virtual verificó zona perimetral norte" },
      { type: "info" as const, message: "Sensor de presencia: Movimiento detectado en zona de amenities (bajo umbral)" },
      { type: "success" as const, message: "Autochequeo: Enlace de fibra primaria activo y redundante" },
      { type: "info" as const, message: "Apertura remota de portón por solicitud del Propietario (Cochera)" },
    ];

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];
      
      setLogs((prev) => [
        {
          id: Date.now().toString(),
          time: timeString,
          type: randomMsg.type,
          message: randomMsg.message
        },
        ...prev.slice(0, 5) // Keep last 6 logs
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, [alarmActive]);

  // Trigger Panic simulation
  const handleTriggerAlarm = () => {
    if (alarmActive) {
      setAlarmActive(false);
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];
      setLogs((prev) => [
        { id: Date.now().toString(), time: timeString, type: "success", message: "Alarma desactivada por operador autorizado. Retorno a estado normal." },
        ...prev
      ]);
      return;
    }

    setAlarmActive(true);
    const now = new Date();
    const timeString = now.toTimeString().split(" ")[0];
    
    setLogs((prev) => [
      { id: Date.now().toString(), time: timeString, type: "danger", message: "CRÍTICO: Alerta de pánico activada desde terminal web" },
      { id: (Date.now() + 1).toString(), time: timeString, type: "warning", message: "Audio Disuasivo: Transmitiendo advertencia por altoparlantes" },
      { id: (Date.now() + 2).toString(), time: timeString, type: "info", message: "Operador Shomer ID 408 tomando control bidireccional en vivo" },
      ...prev
    ]);
  };

  return (
    <section id="simulador" className="py-24 px-6 md:px-10 bg-[#060606] border-t border-brand-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Live Simulation Sandbox</div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
                Tu seguridad, <br />
                En un <em className="text-brand-blue not-italic">solo panel.</em>
              </h2>
              <p className="text-brand-gray-light leading-relaxed max-w-[520px] font-light">
                Interactuá con nuestro simulador del **Centro de Control Shomer**. Visualizá cómo la Inteligencia Artificial analiza flujos reales y responde en milisegundos ante intrusiones simuladas. Hacé clic en "Simular Alerta de Intrusión" para ver la respuesta operativa.
              </p>
            </FadeUp>
          </div>

          {/* Stats Bar */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4">
            <FadeUp delay={0.1} className="border border-brand-border rounded bg-brand-surface/40 p-4 text-center">
              <span className="font-mono text-xl md:text-2xl text-brand-blue font-bold">180ms</span>
              <p className="text-[10px] text-brand-gray tracking-widest uppercase mt-1 font-mono">Latencia AI</p>
            </FadeUp>
            <FadeUp delay={0.2} className="border border-brand-border rounded bg-brand-surface/40 p-4 text-center">
              <span className="font-mono text-xl md:text-2xl text-brand-green font-bold">UPS 100%</span>
              <p className="text-[10px] text-brand-gray tracking-widest uppercase mt-1 font-mono">Batería</p>
            </FadeUp>
            <FadeUp delay={0.3} className="border border-brand-border rounded bg-brand-surface/40 p-4 text-center">
              <span className="font-mono text-xl md:text-2xl text-white font-bold">Encendida</span>
              <p className="text-[10px] text-brand-gray tracking-widest uppercase mt-1 font-mono">Sirena Local</p>
            </FadeUp>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 border rounded-lg overflow-hidden bg-brand-surface/20 transition-colors duration-500
          ${alarmActive ? "border-brand-red/40 shadow-[0_0_30px_rgba(255,59,48,0.15)]" : "border-brand-border"}`}
        >
          {/* Left Panel: Camera Viewport */}
          <div className="lg:col-span-7 p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${alarmActive ? "bg-brand-red animate-ping" : "bg-brand-green animate-pulse"}`} />
                <span className="font-mono text-xs text-brand-white uppercase tracking-wider">
                  {alarmActive ? "CÁMARA: ALERTA DE INTROMISIÓN EN VIVO" : `CÁMARA 0${activeCam} - EN VIVO`}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCam(1)}
                  disabled={alarmActive}
                  className={`px-3 py-1 font-mono text-[10px] border rounded transition-all
                    ${activeCam === 1 
                      ? "border-brand-blue text-brand-blue bg-brand-blue/5" 
                      : "border-brand-border text-brand-gray hover:text-white"
                    } disabled:opacity-50`}
                >
                  Hall Entrada
                </button>
                <button
                  onClick={() => setActiveCam(2)}
                  disabled={alarmActive}
                  className={`px-3 py-1 font-mono text-[10px] border rounded transition-all
                    ${activeCam === 2 
                      ? "border-brand-blue text-brand-blue bg-brand-blue/5" 
                      : "border-brand-border text-brand-gray hover:text-white"
                    } disabled:opacity-50`}
                >
                  Cochera LPR
                </button>
              </div>
            </div>

            {/* Viewport Frame */}
            <div className="relative aspect-video rounded overflow-hidden border border-brand-border bg-[#050505] flex items-center justify-center select-none shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)]">
              
              {/* Realistic Background Image with CCTV Filter */}
              <img
                src={activeCam === 1 ? "/images/cctv_hall_sec.png" : "/images/cctv_lpr_sec.png"}
                alt="CCTV Background Feed"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none"
                style={{
                  filter: alarmActive
                    ? "brightness(0.45) contrast(1.3) saturate(0.9) sepia(0.25) hue-rotate(320deg)"
                    : "brightness(0.6) contrast(1.2) saturate(0.3) sepia(0.1) hue-rotate(80deg)"
                }}
              />

              {/* Scanline Animation */}
              <div 
                className="absolute left-0 right-0 h-[1.5px] bg-brand-blue/15 pointer-events-none z-10 shadow-[0_0_6px_rgba(0,191,255,0.4)]"
                style={{ top: `${scanProgress}%` }}
              />

              {/* Subtle Screen Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10 opacity-75" />

              {/* Screen Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)] pointer-events-none z-10" />

              {/* Screen Flashing if Alarm Active */}
              {alarmActive && (
                <div className="absolute inset-0 bg-brand-red/5 animate-pulse pointer-events-none z-20 border-[3px] border-brand-red/80" />
              )}

              {/* SVG-based AI Camera Feed Overlays */}
              <svg viewBox="0 0 640 360" className="absolute inset-0 w-full h-full text-brand-white z-20 pointer-events-none select-none">
                
                {/* Corner Frame Brackets */}
                <path d="M 20 40 L 20 20 L 40 20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                <path d="M 600 20 L 620 20 L 620 40" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                <path d="M 20 320 L 20 340 L 40 340" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                <path d="M 600 340 L 620 340 L 620 320" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

                {/* CCTV HUD Elements */}
                {/* Blinking REC indicator */}
                <g transform="translate(25, 32)">
                  <circle cx="0" cy="0" r="4.5" fill="#FF3B30" className={alarmActive ? "animate-ping" : "animate-pulse"} />
                  <circle cx="0" cy="0" r="4.5" fill="#FF3B30" />
                  <text x="12" y="3.5" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">REC</text>
                </g>

                {/* Camera metadata top left */}
                <text x="95" y="36" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="monospace" letterSpacing="0.5">
                  {activeCam === 1 ? "CAM 01 - HALL ENTRADA" : "CAM 02 - COCHERA LPR"}
                </text>

                {/* Live clock top right */}
                <text x="615" y="36" textAnchor="end" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="monospace">
                  {currentTime}
                </text>

                {/* Stream stats bottom left */}
                <g transform="translate(25, 325)" fontSize="9" fontFamily="monospace" fill="rgba(255,255,255,0.5)">
                  <text x="0" y="0">FPS: 30.00</text>
                  <text x="75" y="0">BITRATE: {alarmActive ? "6520" : "4124"} Kbps</text>
                  <text x="180" y="0">STREAM: H.265 (AES-256)</text>
                  <text x="320" y="0" fill={alarmActive ? "#FF3B30" : "#00E676"} className={alarmActive ? "animate-pulse" : ""}>
                    {alarmActive ? "ESTADO: EMERGENCIA ACTIVA" : "LINK: PRIMARIO FIBRA"}
                  </text>
                </g>

                {/* Cam 1: Lobby Entrance (Normal Mode) */}
                {!alarmActive && activeCam === 1 && (
                  <g>
                    {/* Face Scan Bounding Box (Centered on the resident woman walking forward) */}
                    <g transform="translate(345, 255)">
                      {/* Box corner brackets */}
                      <path d="M 0 6 L 0 0 L 6 0" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      <path d="M 14 0 L 20 0 L 20 6" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      <path d="M 0 16 L 0 22 L 6 22" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      <path d="M 14 22 L 20 22 L 20 16" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      
                      {/* Solid inner border representing detected face target */}
                      <rect x="3" y="3" width="14" height="16" fill="rgba(0, 230, 118, 0.05)" stroke="rgba(0, 230, 118, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Facial recognition mesh grid */}
                      <g opacity="0.3" stroke="#00E676" strokeWidth="0.8">
                        <line x1="7" y1="3" x2="7" y2="19" />
                        <line x1="13" y1="3" x2="13" y2="19" />
                        
                        <line x1="3" y1="8" x2="17" y2="8" />
                        <line x1="3" y1="14" x2="17" y2="14" />

                        {/* Node dots */}
                        <circle cx="10" cy="11" r="1" fill="#00E676" />
                        <circle cx="7" cy="8" r="0.7" fill="#00E676" />
                        <circle cx="13" cy="8" r="0.7" fill="#00E676" />
                        <circle cx="7" cy="14" r="0.7" fill="#00E676" />
                        <circle cx="13" cy="14" r="0.7" fill="#00E676" />
                      </g>

                      {/* Scanning horizontal laser line */}
                      <line x1="3" y1="6" x2="17" y2="6" stroke="#00E676" strokeWidth="1.2" opacity="0.8" className="animate-bounce" style={{ animationDuration: "3.5s" }} />

                      {/* UI Tag Header */}
                      <rect x="-50" y="-18" width="120" height="14" fill="#00E676" rx="1" />
                      <text x="10" y="-8" textAnchor="middle" fill="black" fontSize="7.5" fontWeight="bold" fontFamily="monospace">ROSTRO DETECTADO</text>
                      
                      {/* Sub-label info */}
                      <g fontSize="8" fontFamily="monospace" fill="#00E676" fontWeight="bold" transform="translate(0, 80)">
                        <text x="10" y="0" textAnchor="middle" fill="#00E676">ID: RESIDENTE (4° B)</text>
                        <text x="10" y="9" textAnchor="middle" fill="#00E676">BIOMETRÍA: OK [98.7%]</text>
                        <text x="10" y="18" textAnchor="middle" fill="#00E676">ACCESO: PERMITIDO</text>
                      </g>
                    </g>
                  </g>
                )}

                {/* Cam 2: Garage Gate LPR (Normal Mode) */}
                {!alarmActive && activeCam === 2 && (
                  <g>
                    {/* Vehicle Scan Bounding Box (Positioned as a car entering driveway) */}
                    <g transform="translate(230, 160)">
                      {/* Vehicle detection border */}
                      <rect x="0" y="0" width="390" height="175" fill="rgba(0, 191, 255, 0.03)" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="4 4" />
                      
                      {/* Box corner brackets */}
                      <path d="M 0 15 L 0 0 L 15 0" stroke="#00BFFF" strokeWidth="2.5" fill="none" />
                      <path d="M 375 0 L 390 0 L 390 15" stroke="#00BFFF" strokeWidth="2.5" fill="none" />
                      <path d="M 0 160 L 0 175 L 15 175" stroke="#00BFFF" strokeWidth="2.5" fill="none" />
                      <path d="M 375 175 L 390 175 L 390 160" stroke="#00BFFF" strokeWidth="2.5" fill="none" />

                      <rect x="0" y="-20" width="135" height="16" fill="#00BFFF" rx="1" />
                      <text x="6" y="-9" fill="black" fontSize="9" fontWeight="bold" fontFamily="monospace">VEHÍCULO IDENTIFICADO</text>

                      {/* License Plate Recognition Box (Aligned perfectly with B-XY 7890 plate) */}
                      <g transform="translate(16, 110)">
                        <rect x="0" y="0" width="50" height="22" fill="rgba(0, 230, 118, 0.1)" stroke="#00E676" strokeWidth="1.5" />
                        <rect x="0" y="-10" width="45" height="9" fill="#00E676" rx="0.5" />
                        <text x="4" y="-3" fill="black" fontSize="6.5" fontWeight="bold" fontFamily="monospace">LPR ACTIVE</text>
                        <text x="25" y="15.5" textAnchor="middle" fill="#00E676" fontSize="9.5" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">B-XY 7890</text>
                      </g>

                      {/* Zoom detail frame in top-right */}
                      <g transform="translate(270, 15)">
                        <rect x="0" y="0" width="110" height="60" fill="rgba(0, 0, 0, 0.75)" stroke="#00BFFF" strokeWidth="1" />
                        <line x1="0" y1="14" x2="110" y2="14" stroke="#00BFFF" strokeWidth="0.8" />
                        <text x="6" y="10" fill="#00BFFF" fontSize="7" fontWeight="bold" fontFamily="monospace">LPR ZOOM ANALYTICS</text>
                        
                        <text x="6" y="26" fill="rgba(255,255,255,0.8)" fontSize="7.5" fontFamily="monospace">PATENTE: B-XY 7890</text>
                        <text x="6" y="37" fill="rgba(255,255,255,0.8)" fontSize="7.5" fontFamily="monospace">REGISTRO: AUTORIZADO</text>
                        <text x="6" y="48" fill="#00E676" fontSize="7.5" fontWeight="bold" fontFamily="monospace">PORTÓN: ABRIENDO...</text>
                      </g>
                    </g>
                  </g>
                )}

                {/* Active Intruders (DANGER STATE) */}
                {alarmActive && (
                  <g>
                    {/* Intrusion Warning Line */}
                    <path d="M 20,240 L 620,240" stroke="#FF3B30" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
                    <rect x="250" y="231" width="140" height="16" fill="#FF3B30" rx="1" />
                    <text x="320" y="242" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">LÍNEA PERIMETRAL VIOLADA</text>

                    {/* Threat Target 1 (Merodeador en primer plano - Aligned with pedestrian on far left) */}
                    <g transform="translate(72, 150)">
                      <rect x="0" y="0" width="30" height="80" fill="none" stroke="#FF3B30" strokeWidth="2.5" />
                      
                      {/* Warning brackets */}
                      <path d="M -6 -6 L 8 -6 M -6 -6 L -6 8" stroke="#FF3B30" strokeWidth="3" fill="none" />
                      <path d="M 36 -6 L 22 -6 M 36 -6 L 36 8" stroke="#FF3B30" strokeWidth="3" fill="none" />
                      <path d="M -6 86 L 8 86 M -6 86 L -6 72" stroke="#FF3B30" strokeWidth="3" fill="none" />
                      <path d="M 36 86 L 22 86 M 36 86 L 36 72" stroke="#FF3B30" strokeWidth="3" fill="none" />

                      <rect x="-55" y="-18" width="140" height="14" fill="#FF3B30" rx="1" />
                      <text x="15" y="-8" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold" fontFamily="monospace" letterSpacing="0.2">CRÍTICO: OBJETO NO IDENTIFICADO</text>
                      
                      {/* Aim reticle overlay */}
                      <circle cx="15" cy="40" r="10" fill="none" stroke="#FF3B30" strokeWidth="1" strokeDasharray="3 2" />
                      <line x1="15" y1="15" x2="15" y2="65" stroke="#FF3B30" strokeWidth="0.8" opacity="0.7" />
                      <line x1="0" y1="40" x2="30" y2="40" stroke="#FF3B30" strokeWidth="0.8" opacity="0.7" />

                      {/* Text info label */}
                      <g fontSize="8" fontFamily="monospace" fill="#FF3B30" fontWeight="bold" transform="translate(0, 87)">
                        <text x="15" y="0" textAnchor="middle">TIPO: MERODEADOR</text>
                        <text x="15" y="9" textAnchor="middle">TIEMPO PERMANENCIA: 14s</text>
                        <text x="15" y="18" textAnchor="middle" fill="#FF3B30" className="animate-pulse">DISUASIÓN AUDIBLE ACTIVADA</text>
                      </g>
                    </g>

                    {/* Threat Target 2 (Segundo intruso - Aligned with man walking in foreground right) */}
                    <g transform="translate(435, 245)">
                      <rect x="0" y="0" width="30" height="100" fill="rgba(255, 59, 48, 0.05)" stroke="#FF3B30" strokeWidth="1.5" />
                      
                      <rect x="-40" y="-15" width="110" height="12" fill="#FF3B30" rx="1" />
                      <text x="15" y="-6" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="monospace">PRESENCIA ANÓMALA 02</text>
                      
                      <g fontSize="8" fontFamily="monospace" fill="#FF3B30" fontWeight="bold" transform="translate(0, 107)">
                        <text x="15" y="0" textAnchor="middle">SEGUIMIENTO ACTIVO</text>
                        <text x="15" y="9" textAnchor="middle">COBERTURA VIRTUAL: 100%</text>
                      </g>
                    </g>

                    {/* Warning overlay top center */}
                    <g transform="translate(320, 70)">
                      <rect x="-130" y="-15" width="260" height="24" fill="rgba(0,0,0,0.85)" stroke="#FF3B30" strokeWidth="1" />
                      <text x="0" y="1" textAnchor="middle" fill="#FF3B30" fontSize="9.5" fontWeight="bold" fontFamily="monospace" className="animate-pulse">
                        ALTAVOZ DISUASIVO SHOMER ACTIVO
                      </text>
                    </g>
                  </g>
                )}
              </svg>

              {/* Siren Red Overlay Flashing (Alert Bar HUD) */}
              {alarmActive && (
                <div className="absolute top-4 left-[200px] right-[200px] z-30 flex items-center justify-center gap-2 bg-brand-red text-white px-4 py-1.5 rounded-sm font-mono text-[9px] tracking-widest uppercase font-bold animate-pulse shadow-[0_0_15px_rgba(255,59,48,0.5)]">
                  <Activity className="w-3.5 h-3.5 animate-bounce" /> ALERTA DE INTROMISIÓN - ACCIÓN OPERATIVA
                </div>
              )}
            </div>

            {/* Legend & Help Info */}
            <p className="text-[10px] text-brand-gray uppercase font-mono tracking-wider flex items-center gap-1.5 min-h-[16px]">
              {alarmActive ? (
                <>
                  <Volume2 className="w-3 h-3 text-brand-red animate-pulse shrink-0" />
                  <span>Simulación: Operador interactuando por audio bidireccional y despachando patrulla de apoyo.</span>
                </>
              ) : (
                <span>El algoritmo perimetral local analiza e identifica peatones y patentes de forma instantánea.</span>
              )}
            </p>
          </div>

          {/* Right Panel: Event Logs & Controls */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-brand-border p-6 flex flex-col justify-between gap-6 bg-black/40">
            {/* Top Logs Box */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-brand-gray tracking-wider uppercase flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-brand-blue" /> Bitácora Operativa
                </span>
                <span className="text-[10px] font-mono text-brand-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" /> ONLINE
                </span>
              </div>

              {/* Logs List Container */}
              <div className="h-[210px] overflow-y-auto pr-1 flex flex-col gap-2 font-mono scrollbar-thin scrollbar-thumb-white/10">
                {logs.map((log) => (
                  <div key={log.id} className="text-[10.5px] leading-relaxed border-b border-white/5 pb-2 transition-all">
                    <span className="text-brand-gray-light mr-1.5">[{log.time}]</span>
                    <span className={`font-semibold mr-1.5 uppercase
                      ${log.type === "danger" ? "text-brand-red" : ""}
                      ${log.type === "warning" ? "text-amber-500" : ""}
                      ${log.type === "success" ? "text-brand-green" : ""}
                      ${log.type === "info" ? "text-brand-blue" : ""}
                    `}>
                      {log.type === "danger" ? "CRIT" : log.type === "warning" ? "WARN" : log.type === "success" ? "OK" : "INFO"}:
                    </span>
                    <span className="text-brand-white">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Controls */}
            <div className="flex flex-col gap-3 border-t border-white/5 pt-5">
              <button
                onClick={handleTriggerAlarm}
                className={`w-full py-4 px-6 rounded-sm font-bold text-xs tracking-wider uppercase text-center transition-all duration-300 flex items-center justify-center gap-2 border
                  ${alarmActive 
                    ? "bg-[#FF3B30]/15 hover:bg-[#FF3B30]/25 text-brand-red border-brand-red/30 shadow-[0_0_15px_rgba(255,59,48,0.1)]" 
                    : "bg-brand-red text-white border-transparent hover:bg-red-600 shadow-[0_0_12px_rgba(255,59,48,0.25)]"
                  }`}
              >
                <Shield className="w-4 h-4" />
                {alarmActive ? "Restablecer Simulador" : "Simular Alerta de Intrusión"}
              </button>

              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    setLogs([
                      { id: Date.now().toString(), time: new Date().toTimeString().split(" ")[0], type: "success", message: "Historial de bitácora vaciado. Recarga de sensores activa." }
                    ]);
                  }}
                  className="flex-1 py-2 px-3 border border-brand-border bg-transparent text-brand-gray hover:text-white rounded-sm font-mono text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Limpiar Bitácora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
