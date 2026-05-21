"use client";

import { useState, useEffect } from "react";
import { FadeUp } from "./FadeUp";
import { Shield, Radio, Bell, Users, Eye, Zap, RefreshCw } from "lucide-react";

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
  const [logs, setLogs] = useState<LogEvent[]>([
    { id: "1", time: "16:30:12", type: "success", message: "Conexión encriptada establecida con Hub Buenos Aires" },
    { id: "2", time: "16:31:05", type: "info", message: "Sistema LPR: Ingreso vehicular autorizado (Patente: AF445HH)" },
    { id: "3", time: "16:32:44", type: "info", message: "Acceso Facial: Juan González (Propietario 4° B) - Rostro validado 98.7%" },
    { id: "4", time: "16:33:15", type: "success", message: "Autochequeo de seguridad perimetral: Todos los nodos activos" },
  ]);

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
      // Revert alarm
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
                Interactuá con nuestro simulador del **Centro de Control Shomer**. Visualizá cómo la Inteligencia Artificial analiza flujos y responde en milisegundos ante intrusiones simuladas. Hacé clic en "Simular Pánico" para ver la respuesta operativa.
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
                  {alarmActive ? "CÁMARA: ZONA CRÍTICA - INTENTOS DE ACCESO" : `CÁMARA 0${activeCam} - EN VIVO`}
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
            <div className="relative aspect-video rounded overflow-hidden border border-brand-border bg-[#050505] flex items-center justify-center">
              {/* Scanline Animation */}
              <div 
                className="absolute left-0 right-0 h-[1.5px] bg-brand-blue/20 pointer-events-none z-10 shadow-[0_0_8px_#00BFFF]"
                style={{ top: `${scanProgress}%` }}
              />

              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Screen Flashing if Alarm Active */}
              {alarmActive && (
                <div className="absolute inset-0 bg-brand-red/10 animate-pulse pointer-events-none z-20 border-4 border-brand-red" />
              )}

              {/* SVG-based AI Camera Feed Mock */}
              <svg viewBox="0 0 640 360" className="w-full h-full text-brand-gray/20">
                {/* Background Structure Lines */}
                <line x1="80" y1="300" x2="200" y2="240" stroke="currentColor" strokeWidth="1" />
                <line x1="200" y1="240" x2="440" y2="240" stroke="currentColor" strokeWidth="1" />
                <line x1="440" y1="240" x2="560" y2="300" stroke="currentColor" strokeWidth="1" />
                
                <line x1="200" y1="240" x2="200" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="440" y1="240" x2="440" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

                {/* Cam 1: Lobby Entrance */}
                {!alarmActive && activeCam === 1 && (
                  <g>
                    {/* Simulated scanning targets */}
                    {/* Person 1 (Entering) */}
                    <g className="translate-x-[260px] translate-y-[150px]">
                      <rect x="0" y="0" width="80" height="150" fill="none" stroke="#00E676" strokeWidth="1.5" className="animate-pulse" />
                      <line x1="0" y1="0" x2="15" y2="0" stroke="#00E676" strokeWidth="3" />
                      <line x1="0" y1="0" x2="0" y2="15" stroke="#00E676" strokeWidth="3" />
                      <rect x="0" y="-18" width="70" height="18" fill="#00E676" />
                      <text x="4" y="-5" fill="black" fontSize="9" fontWeight="bold" fontFamily="monospace">ROSTRO OK [98.2%]</text>
                      {/* Stick figure wireframe */}
                      <circle cx="40" cy="30" r="12" fill="none" stroke="rgba(0, 230, 118, 0.4)" strokeWidth="1.5" />
                      <line x1="40" y1="42" x2="40" y2="100" stroke="rgba(0, 230, 118, 0.4)" strokeWidth="1.5" />
                      <line x1="40" y1="60" x2="20" y2="80" stroke="rgba(0, 230, 118, 0.4)" strokeWidth="1.5" />
                      <line x1="40" y1="60" x2="60" y2="80" stroke="rgba(0, 230, 118, 0.4)" strokeWidth="1.5" />
                      <line x1="40" y1="100" x2="25" y2="140" stroke="rgba(0, 230, 118, 0.4)" strokeWidth="1.5" />
                      <line x1="40" y1="100" x2="55" y2="140" stroke="rgba(0, 230, 118, 0.4)" strokeWidth="1.5" />
                    </g>

                    {/* Technical details overlay */}
                    <text x="30" y="50" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">FPS: 30.00</text>
                    <text x="30" y="70" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">STREAM: H.265 (SECURE)</text>
                    <text x="30" y="90" fill="#00E676" fontSize="10" fontFamily="monospace" className="animate-pulse">DISPOSITIVO: EN LÍNEA</text>
                  </g>
                )}

                {/* Cam 2: Garage Gate LPR */}
                {!alarmActive && activeCam === 2 && (
                  <g>
                    {/* Gate outline */}
                    <polygon points="120,280 200,220 440,220 520,280" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Simulated car */}
                    <g className="translate-x-[220px] translate-y-[130px]">
                      <rect x="0" y="40" width="200" height="90" fill="none" stroke="#00BFFF" strokeWidth="1.5" />
                      <rect x="0" y="22" width="120" height="18" fill="#00BFFF" />
                      <text x="4" y="34" fill="black" fontSize="9" fontWeight="bold" fontFamily="monospace">VEHÍCULO DETECTADO</text>
                      
                      {/* License plate bounding box */}
                      <g className="translate-x-[65px] translate-y-[85px]">
                        <rect x="0" y="0" width="70" height="22" fill="none" stroke="#00E676" strokeWidth="2" />
                        <rect x="0" y="-12" width="60" height="12" fill="#00E676" />
                        <text x="3" y="-3" fill="black" fontSize="8" fontWeight="bold" fontFamily="monospace">LPR: AF445HH</text>
                        <text x="12" y="16" fill="#00E676" fontSize="11" fontWeight="bold" fontFamily="monospace">AF 445 HH</text>
                      </g>
                    </g>
                  </g>
                )}

                {/* Active Intruders (DANGER STATE) */}
                {alarmActive && (
                  <g>
                    {/* Threat target 1 */}
                    <g className="translate-x-[120px] translate-y-[90px] animate-bounce" style={{ animationDuration: "2s" }}>
                      <rect x="0" y="0" width="110" height="200" fill="none" stroke="#FF3B30" strokeWidth="2" />
                      <line x1="0" y1="0" x2="20" y2="0" stroke="#FF3B30" strokeWidth="4" />
                      <line x1="0" y1="0" x2="0" y2="20" stroke="#FF3B30" strokeWidth="4" />
                      <line x1="110" y1="200" x2="90" y2="200" stroke="#FF3B30" strokeWidth="4" />
                      <line x1="110" y1="200" x2="110" y2="180" stroke="#FF3B30" strokeWidth="4" />
                      
                      <rect x="0" y="-18" width="105" height="18" fill="#FF3B30" />
                      <text x="4" y="-5" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">ALERTA: CRUCE DE LÍNEA</text>
                    </g>

                    {/* Threat target 2 */}
                    <g className="translate-x-[410px] translate-y-[120px] animate-pulse">
                      <rect x="0" y="0" width="90" height="170" fill="none" stroke="#FF3B30" strokeWidth="2" />
                      <rect x="0" y="-18" width="85" height="18" fill="#FF3B30" />
                      <text x="4" y="-5" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">PRESENCIA SOSPECHOSA</text>
                    </g>

                    {/* Technical Emergency overlays */}
                    <text x="30" y="50" fill="#FF3B30" fontSize="11" fontWeight="bold" fontFamily="monospace" className="animate-pulse">ALARMA CENTRAL ACTIVA</text>
                    <text x="30" y="70" fill="#FF3B30" fontSize="10" fontFamily="monospace">ALTAVOZ DISUASIVO: ACTIVO</text>
                    <text x="30" y="90" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="monospace">OPERADOR CONECTADO: DUPLEX HABILITADO</text>
                  </g>
                )}
              </svg>

              {/* Siren Red/Blue Overlay Flashing */}
              {alarmActive && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-brand-red/90 text-white px-3 py-1.5 rounded-sm font-mono text-[10px] tracking-widest uppercase font-bold animate-pulse">
                  <Bell className="w-3.5 h-3.5 animate-bounce" /> ALERTA DE INTROMISIÓN
                </div>
              )}
            </div>

            {/* Legend & Help Info */}
            <p className="text-[10px] text-brand-gray uppercase font-mono tracking-wider">
              {alarmActive 
                ? "Simulación: El monitorista está enviando patrullas y hablando por el audio de doble vía." 
                : "El algoritmo perimetral local analiza e identifica peatones y patentes de forma instantánea."
              }
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
