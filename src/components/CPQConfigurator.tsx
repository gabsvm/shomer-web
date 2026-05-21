"use client";

import { useState, useEffect } from "react";
import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { Building, Briefcase, Trees, Hotel, ShieldAlert, Cpu, Check, HelpCircle } from "lucide-react";

type EnvironmentType = "edificio" | "empresa" | "barrio" | "hotel";

interface HardwareItem {
  id: string;
  name: string;
  desc: string;
  price: number; // monthly ARS
  required?: boolean;
}

interface SoftwareItem {
  id: string;
  name: string;
  desc: string;
  price: number; // monthly ARS
}

export function CPQConfigurator() {
  const [env, setEnv] = useState<EnvironmentType>("edificio");
  const [selectedHardware, setSelectedHardware] = useState<string[]>(["totem", "facial"]);
  const [selectedSoftware, setSelectedSoftware] = useState<string[]>(["linea"]);

  const environments = [
    { id: "edificio", name: "Edificio Residencial", icon: <Building className="w-5 h-5" />, bg: "rgba(0, 191, 255, 0.05)" },
    { id: "empresa", name: "Oficina / Empresa", icon: <Briefcase className="w-5 h-5" />, bg: "rgba(0, 230, 118, 0.05)" },
    { id: "barrio", name: "Country / Barrio Cerrado", icon: <Trees className="w-5 h-5" />, bg: "rgba(255, 59, 48, 0.05)" },
    { id: "hotel", name: "Hotel / Airbnb", icon: <Hotel className="w-5 h-5" />, bg: "rgba(168, 85, 247, 0.05)" },
  ];

  const hardwareList: HardwareItem[] = [
    { id: "totem", name: "Tótem Inteligente Shomer", desc: "Audio bidireccional y pantalla con operador en vivo 24/7.", price: 150000 },
    { id: "facial", name: "Lector Facial Face ID con IA", desc: "Acceso biométrico rápido sin llaves físicas (200ms).", price: 90000 },
    { id: "camaras", name: "Cámaras de Seguridad HD (x4)", desc: "Lentes de alta definición con visión nocturna y respaldo.", price: 120000 },
    { id: "barrera", name: "Controlador de Portón / Barrera", desc: "Apertura electrónica remota y peer-to-peer autónoma.", price: 110000 },
  ];

  const softwareList: SoftwareItem[] = [
    { id: "linea", name: "Cruce de Línea Inteligente (IA)", desc: "Detección de intrusos perimetral y alerta instantánea.", price: 35000 },
    { id: "patentes", name: "Reconocimiento de Patentes (LPR)", desc: "Apertura autónoma por lectura de matrículas en el Edge.", price: 45000 },
    { id: "horarios", name: "Control Horario y Fichaje (RRHH)", desc: "Reportes en la nube e historial de accesos por persona.", price: 25000 },
    { id: "shabat", name: "Módulo Sistema Shabat", desc: "Protocolo adaptativo respetuoso para la Colectividad Judía.", price: 15000 },
  ];

  // Auto-select features based on environment for starting point
  useEffect(() => {
    if (env === "barrio") {
      setSelectedHardware(["totem", "camaras", "barrera"]);
      setSelectedSoftware(["patentes", "linea"]);
    } else if (env === "empresa") {
      setSelectedHardware(["facial", "barrera"]);
      setSelectedSoftware(["horarios"]);
    } else if (env === "hotel") {
      setSelectedHardware(["facial", "barrera"]);
      setSelectedSoftware(["horarios"]);
    } else if (env === "edificio") {
      setSelectedHardware(["totem", "facial"]);
      setSelectedSoftware(["shabat", "linea"]);
    }
  }, [env]);

  const toggleHardware = (id: string) => {
    if (selectedHardware.includes(id)) {
      setSelectedHardware(selectedHardware.filter((item) => item !== id));
    } else {
      setSelectedHardware([...selectedHardware, id]);
    }
  };

  const toggleSoftware = (id: string) => {
    if (selectedSoftware.includes(id)) {
      setSelectedSoftware(selectedSoftware.filter((item) => item !== id));
    } else {
      setSelectedSoftware([...selectedSoftware, id]);
    }
  };

  // Pricing calculations
  const hardwareCost = selectedHardware.reduce((acc, itemId) => {
    const item = hardwareList.find((h) => h.id === itemId);
    return acc + (item ? item.price : 0);
  }, 0);

  const softwareCost = selectedSoftware.reduce((acc, itemId) => {
    const item = softwareList.find((s) => s.id === itemId);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalAbonoARS = hardwareCost + softwareCost;
  const totalAbonoUSD = Math.round(totalAbonoARS / 1000); // 1 USD = 1000 ARS

  return (
    <section id="configurador" className="py-24 px-6 md:px-10 bg-brand-black border-t border-brand-border">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Configurador CPQ</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
            Diseñá tu <em className="text-brand-blue not-italic">Ecosistema</em><br />de Seguridad.
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light mb-12">
            Seleccioná tu entorno y personalizá los dispositivos y funcionalidades de IA. Obtené un abono mensual preliminar transparente al instante.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel: 3D Visualization Mock */}
          <div className="lg:col-span-6 border border-brand-border rounded bg-brand-surface p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            {/* Ambient grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.03),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex justify-between items-center mb-6">
              <span className="font-mono text-[0.7rem] text-brand-gray tracking-widest uppercase">Vista Axonométrica</span>
              <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" /> IA ACTIVA
              </span>
            </div>

            {/* Stylized Axonometric Drawing representation */}
            <div className="relative z-10 w-full flex-grow flex items-center justify-center min-h-[220px]">
              <svg width="280" height="200" viewBox="0 0 280 200" className="w-full max-w-[320px] h-auto drop-shadow-[0_8px_24px_rgba(0,191,255,0.05)]">
                {/* Environment: Edificio Residencial */}
                {env === "edificio" && (
                  <g>
                    {/* Apartment Tower (4 Floors detailed isometric outline) */}
                    {/* Ground floor & lobby */}
                    <polygon points="90,130 150,100 210,130 210,165 150,195 90,165" fill="#141414" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                    {/* Floor 2 */}
                    <polygon points="90,100 150,70 210,100 210,130 150,160 90,130" fill="#181818" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                    {/* Floor 3 */}
                    <polygon points="90,70 150,40 210,70 210,100 150,130 90,100" fill="#1c1c1c" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    {/* Floor 4 & Roof */}
                    <polygon points="90,40 150,10 210,40 210,70 150,100 90,70" fill="#222" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    {/* Roof top */}
                    <polygon points="90,40 150,10 210,40 150,70" fill="#0c0c0c" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    
                    {/* Windows grid details */}
                    <polygon points="105,115 115,110 115,122 105,127" fill="rgba(0,191,255,0.03)" stroke="rgba(255,255,255,0.15)" />
                    <polygon points="125,105 135,100 135,112 125,117" fill="rgba(0,191,255,0.03)" stroke="rgba(255,255,255,0.15)" />
                    <polygon points="165,110 175,115 175,127 165,122" fill="rgba(0,191,255,0.03)" stroke="rgba(255,255,255,0.15)" />
                    
                    {/* Glass lobby doors */}
                    <polygon points="130,145 150,135 170,145 170,180 150,190 130,180" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" strokeWidth="1" />
                    <line x1="150" y1="135" x2="150" y2="190" stroke="rgba(0,191,255,0.3)" strokeWidth="1.5" />
                  </g>
                )}

                {/* Environment: Oficina / Empresa */}
                {env === "empresa" && (
                  <g>
                    {/* Corporate Office Floor Layout */}
                    <polygon points="60,120 150,75 240,120 240,175 150,220 60,175" fill="#141414" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    
                    {/* Inner office glass partitions */}
                    <polygon points="100,120 150,95 200,120 150,145" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    
                    {/* Access Turnstiles representation */}
                    <line x1="130" y1="155" x2="170" y2="135" stroke="rgba(0,230,118,0.3)" strokeWidth="2.5" />
                    
                    {/* Desks and monitors */}
                    <polygon points="80,140 105,127 120,135 95,148" fill="#202020" stroke="rgba(255,255,255,0.08)" />
                    <line x1="90" y1="132" x2="90" y2="126" stroke="#555" strokeWidth="1.5" />
                    <polygon points="180,140 205,127 220,135 195,148" fill="#202020" stroke="rgba(255,255,255,0.08)" />
                    <line x1="190" y1="132" x2="190" y2="126" stroke="#555" strokeWidth="1.5" />
                  </g>
                )}

                {/* Environment: Country / Barrio Cerrado */}
                {env === "barrio" && (
                  <g>
                    {/* Gated Entrance roads & lanes */}
                    <polygon points="40,115 150,60 260,115 150,170" fill="#121212" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    {/* Double Lane dividers */}
                    <line x1="150" y1="60" x2="150" y2="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,3" />
                    
                    {/* Detailed guard house cabin */}
                    <polygon points="130,90 150,80 170,90 170,120 150,130 130,120" fill="#1d1d1d" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <polygon points="130,90 150,80 170,90 150,100" fill="#282828" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    {/* Glass window */}
                    <polygon points="135,97 145,92 145,107 135,112" fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.3)" />

                    {/* Perimeter Fence Line running across */}
                    <path d="M 20,120 L 130,175 M 170,195 L 280,250" fill="none" stroke="rgba(255,59,48,0.25)" strokeWidth="1.5" strokeDasharray="2.5,2.5" />
                  </g>
                )}

                {/* Environment: Hotel / Airbnb */}
                {env === "hotel" && (
                  <g>
                    {/* Hotel Corridor and Lobby Layout */}
                    <polygon points="70,120 150,80 230,120 230,170 150,210 70,170" fill="#141414" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    
                    {/* Room Door 1 */}
                    <polygon points="95,112 95,138 110,130 110,105" fill="#252525" stroke="rgba(255,255,255,0.18)" />
                    
                    {/* Room Door 2 */}
                    <polygon points="190,112 190,138 205,130 205,105" fill="#252525" stroke="rgba(255,255,255,0.18)" />

                    {/* Check-in automation counter desk */}
                    <polygon points="130,160 160,145 175,152 145,167" fill="#1f1f1f" stroke="rgba(255,255,255,0.08)" />
                  </g>
                )}

                {/* Device Indicators (Activated dynamically) */}
                {selectedHardware.includes("totem") && (
                  <g className="animate-pulse">
                    {/* Totem Location based on environment */}
                    {env === "edificio" && (
                      <g>
                        <circle cx="115" cy="175" r="14" fill="rgba(0, 191, 255, 0.08)" />
                        <circle cx="115" cy="175" r="4" fill="#00BFFF" />
                        <line x1="115" y1="175" x2="115" y2="145" stroke="#00BFFF" strokeWidth="1.5" />
                        <rect x="109" y="140" width="12" height="12" rx="2" fill="#00BFFF" />
                      </g>
                    )}
                    {env === "barrio" && (
                      <g>
                        <circle cx="110" cy="140" r="14" fill="rgba(0, 191, 255, 0.08)" />
                        <circle cx="110" cy="140" r="4" fill="#00BFFF" />
                        <line x1="110" y1="140" x2="110" y2="110" stroke="#00BFFF" strokeWidth="1.5" />
                        <rect x="104" y="105" width="12" height="12" rx="2" fill="#00BFFF" />
                      </g>
                    )}
                    {env !== "edificio" && env !== "barrio" && (
                      <g>
                        <circle cx="80" cy="135" r="14" fill="rgba(0, 191, 255, 0.08)" />
                        <circle cx="80" cy="135" r="4" fill="#00BFFF" />
                        <line x1="80" y1="135" x2="80" y2="105" stroke="#00BFFF" strokeWidth="1.5" />
                        <rect x="74" y="100" width="12" height="12" rx="2" fill="#00BFFF" />
                      </g>
                    )}
                  </g>
                )}

                {selectedHardware.includes("facial") && (
                  <g>
                    {/* Face ID Reader Position */}
                    {env === "edificio" && (
                      <g>
                        <circle cx="150" cy="150" r="8" fill="rgba(0, 230, 118, 0.15)" />
                        <circle cx="150" cy="150" r="3" fill="#00E676" />
                      </g>
                    )}
                    {env === "empresa" && (
                      <g>
                        <circle cx="150" cy="145" r="8" fill="rgba(0, 230, 118, 0.15)" />
                        <circle cx="150" cy="145" r="3" fill="#00E676" />
                      </g>
                    )}
                    {env === "hotel" && (
                      <g>
                        <circle cx="145" cy="153" r="8" fill="rgba(0, 230, 118, 0.15)" />
                        <circle cx="145" cy="153" r="3" fill="#00E676" />
                      </g>
                    )}
                    {env !== "edificio" && env !== "empresa" && env !== "hotel" && (
                      <g>
                        <circle cx="150" cy="120" r="8" fill="rgba(0, 230, 118, 0.15)" />
                        <circle cx="150" cy="120" r="3" fill="#00E676" />
                      </g>
                    )}
                  </g>
                )}

                {selectedHardware.includes("camaras") && (
                  <g>
                    {/* Camera scan zone */}
                    {env === "barrio" && (
                      <g>
                        <polygon points="170,90 230,110 200,150" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.05)" />
                        <circle cx="170" cy="90" r="4.5" fill="#fff" stroke="#888" strokeWidth="1" />
                        <line x1="170" y1="90" x2="190" y2="105" stroke="#fff" strokeWidth="1" />
                      </g>
                    )}
                    {env !== "barrio" && (
                      <g>
                        <polygon points="210,40 270,75 230,110" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.05)" />
                        <circle cx="210" cy="40" r="4.5" fill="#fff" stroke="#888" strokeWidth="1" />
                        <line x1="210" y1="40" x2="230" y2="55" stroke="#fff" strokeWidth="1" />
                      </g>
                    )}
                  </g>
                )}

                {selectedHardware.includes("barrera") && (
                  <g>
                    {/* Barrier gate across entrance lanes */}
                    {env === "barrio" && (
                      <g>
                        <circle cx="115" cy="130" r="3.5" fill="#FF3B30" />
                        <line x1="115" y1="130" x2="148" y2="114" stroke="#FF3B30" strokeWidth="2.5" />
                        <circle cx="185" cy="165" r="3.5" fill="#FF3B30" />
                        <line x1="185" y1="165" x2="152" y2="182" stroke="#FF3B30" strokeWidth="2.5" />
                      </g>
                    )}
                    {env !== "barrio" && (
                      <g>
                        <circle cx="180" cy="155" r="3.5" fill="#FF3B30" />
                        <line x1="180" y1="155" x2="215" y2="138" stroke="#FF3B30" strokeWidth="2.5" />
                      </g>
                    )}
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom active feedback */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-gray font-mono">
              <span>Dispositivos: {selectedHardware.length}</span>
              <span>·</span>
              <span>Inteligencia: {selectedSoftware.length}</span>
              <span>·</span>
              <span className="text-brand-blue uppercase">Esquema Comodato</span>
            </div>
          </div>

          {/* Right panel: Selector & Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {/* Step 1: Environment Selection */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gray mb-3">1. Seleccioná el Entorno</h3>
                <div className="grid grid-cols-2 gap-2">
                  {environments.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEnv(item.id as EnvironmentType)}
                      className={`flex items-center gap-3 p-3 text-left border rounded transition-all duration-200 text-sm font-medium
                        ${env === item.id 
                          ? "border-brand-blue bg-brand-surface text-brand-white" 
                          : "border-brand-border bg-black/20 text-brand-gray hover:border-brand-gray hover:text-brand-gray-light"
                        }`}
                    >
                      <span className={env === item.id ? "text-brand-blue" : "text-brand-gray"}>
                        {item.icon}
                      </span>
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Hardware Selection */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gray mb-3">2. Dispositivos de Hardware</h3>
                <div className="flex flex-col gap-2">
                  {hardwareList.map((item) => {
                    const isSelected = selectedHardware.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleHardware(item.id)}
                        className={`flex items-center justify-between p-3.5 border rounded cursor-pointer transition-all duration-200 hover:bg-brand-surface/60
                          ${isSelected 
                            ? "border-brand-blue bg-brand-surface/40" 
                            : "border-brand-border bg-transparent"
                          }`}
                      >
                        <div className="flex-grow pr-4">
                          <div className="text-sm font-semibold text-brand-white flex items-center gap-2">
                            {item.name}
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />}
                          </div>
                          <p className="text-[0.78rem] text-brand-gray leading-normal mt-0.5">{item.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs font-mono text-brand-gray-light">+${item.price.toLocaleString("es-AR")}/m</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Software Selection */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gray mb-3">3. Suscripción y Módulos de IA</h3>
                <div className="flex flex-col gap-2">
                  {softwareList.map((item) => {
                    const isSelected = selectedSoftware.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleSoftware(item.id)}
                        className={`flex items-center justify-between p-3.5 border rounded cursor-pointer transition-all duration-200 hover:bg-brand-surface/60
                          ${isSelected 
                            ? "border-brand-green/40 bg-brand-surface/40" 
                            : "border-brand-border bg-transparent"
                          }`}
                      >
                        <div className="flex-grow pr-4">
                          <div className="text-sm font-semibold text-brand-white flex items-center gap-2">
                            {item.name}
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />}
                          </div>
                          <p className="text-[0.78rem] text-brand-gray leading-normal mt-0.5">{item.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs font-mono text-brand-gray-light">+${item.price.toLocaleString("es-AR")}/m</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Calculations & Price Output */}
            <div className="mt-8 border border-brand-border rounded bg-brand-near-black p-6 flex flex-col justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <div>
                  <div className="text-[0.68rem] font-mono tracking-widest text-brand-gray uppercase">Inversión Inicial</div>
                  <div className="text-xl font-display text-brand-white uppercase">
                    $0 USD <span className="text-xs font-mono text-brand-green tracking-normal font-bold">100% BONIFICADA</span>
                  </div>
                </div>
                <div className="sm:text-right">
                  <div className="text-[0.68rem] font-mono tracking-widest text-brand-gray uppercase">Abono Mensual Estimado</div>
                  <div className="text-3xl font-display text-brand-blue leading-none">
                    ${totalAbonoARS.toLocaleString("es-AR")} <span className="text-xs font-mono text-brand-gray font-normal lowercase">ars/mes</span>
                  </div>
                  <div className="text-xs text-brand-gray font-mono mt-0.5">~ {totalAbonoUSD} USD / mes + IVA</div>
                </div>
              </div>

              <Link
                href="/#contacto"
                className="w-full bg-brand-blue text-brand-black py-4 rounded-sm font-bold text-sm tracking-wider uppercase text-center hover:bg-brand-white transition-colors"
              >
                Solicitar Cotización Formal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
