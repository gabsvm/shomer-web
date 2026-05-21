"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";
import { MapPin, Radio, Wifi, Zap, Award, Activity } from "lucide-react";

interface MapNode {
  id: string;
  name: string;
  role: string;
  coords: { x: number; y: number };
  latency: number;
  status: "ONLINE" | "STANDBY" | "ACTIVE";
  powerRedundancy: string;
  netRedundancy: string;
  details: string;
}

export function InfrastructureMap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("puerto-madero");

  const nodes: MapNode[] = [
    {
      id: "puerto-madero",
      name: "Puerto Madero HQ (Central Principal)",
      role: "Central de Monitoreo Activo & Despacho",
      coords: { x: 165, y: 110 },
      latency: 8,
      status: "ACTIVE",
      powerRedundancy: "Baterías UPS + Generador Diésel de Emergencia",
      netRedundancy: "Fibra Óptica Fibercorp + Respaldo Starlink",
      details: "Nuestra base principal. Alberga a la central de monitoristas homologados y el centro de coordinación de alertas al 911.",
    },
    {
      id: "palermo",
      name: "Palermo Hub (Central Redundante)",
      role: "Central de Respaldo Geográfico",
      coords: { x: 135, y: 80 },
      latency: 12,
      status: "ONLINE",
      powerRedundancy: "Baterías UPS de Grado Militar",
      netRedundancy: "Fibra Óptica Simétrica Tri-proveedor",
      details: "Nodo espejo activo. Sincroniza en tiempo real toda la información de accesos y flujos de video de forma encriptada.",
    },
    {
      id: "pilar",
      name: "Pilar Node (Base Zona Norte)",
      role: "Centro de Verificación Motorizada GBA",
      coords: { x: 60, y: 50 },
      latency: 18,
      status: "ONLINE",
      powerRedundancy: "Sistema Solar con Baterías de Respaldo",
      netRedundancy: "Conexión Inalámbrica de Alta Velocidad dedicada",
      details: "Base de despacho rápido para vehículos y motociclistas de verificación rápida en la zona de countries y barrios privados del norte.",
    },
    {
      id: "san-isidro",
      name: "San Isidro Node (Base GBA Norte)",
      role: "Base de Verificación Rápida",
      coords: { x: 100, y: 65 },
      latency: 14,
      status: "ONLINE",
      powerRedundancy: "Baterías UPS redundantes",
      netRedundancy: "Fibra Óptica Corporativa dedicada",
      details: "Punto de logística y distribución de patrullas perimetrales para la cobertura de San Isidro, San Fernando y Tigre.",
    },
  ];

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <section id="infraestructura" className="py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left panel: Info & latency stats */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Infraestructura y Logística</div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
                Infraestructura<br />Activa y Redundante.
              </h2>
              <p className="text-brand-gray-light leading-relaxed max-w-[480px] font-light mb-8">
                No somos solo software en una pantalla. Respaldamos nuestra protección perimetral con servidores locales redundantes, bases de patrulla y la menor latencia de respuesta del mercado en Argentina.
              </p>
            </FadeUp>

            {/* Selected Node Details Box */}
            <FadeUp delay={0.2}>
              <div className="border border-brand-border rounded bg-brand-surface p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.05),transparent_70%)] pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-brand-green uppercase font-semibold">NODO {selectedNode.status}</span>
                </div>

                <h3 className="text-lg font-bold text-brand-white mb-1">{selectedNode.name}</h3>
                <p className="text-xs font-mono text-brand-blue uppercase tracking-wide mb-4">{selectedNode.role}</p>

                <p className="text-sm text-brand-gray leading-relaxed mb-6">{selectedNode.details}</p>

                <div className="flex flex-col gap-4 border-t border-white/5 pt-5 text-xs text-brand-gray-light">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <span className="text-brand-gray font-mono block text-[0.68rem] uppercase">Latencia de Red Promedio</span>
                      <span className="font-mono font-bold text-brand-white text-sm">{selectedNode.latency} ms</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <span className="text-brand-gray font-mono block text-[0.68rem] uppercase">Respaldo Eléctrico</span>
                      <span>{selectedNode.powerRedundancy}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <span className="text-brand-gray font-mono block text-[0.68rem] uppercase">Enlaces de Conectividad</span>
                      <span>{selectedNode.netRedundancy}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right panel: Stylized Interactive GBA/CABA Map */}
          <div className="lg:col-span-7 border border-brand-border rounded bg-brand-surface min-h-[460px] flex flex-col justify-between p-6 relative overflow-hidden">
            {/* Ambient grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />

            <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="font-mono text-[0.7rem] text-brand-gray tracking-widest uppercase">Mapa Operativo CABA / GBA</span>
              <div className="flex gap-4 text-xs font-mono text-brand-gray">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Centrales</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Bases</span>
              </div>
            </div>

            {/* Stylized vector region representation */}
            <div className="relative flex-grow flex items-center justify-center min-h-[300px]">
              <svg width="340" height="300" viewBox="0 0 340 300" className="w-full max-w-[420px] h-auto">
                {/* Stylized coast lines of Rio de la Plata */}
                <path d="M 0,220 Q 80,180 160,130 T 340,60" fill="none" stroke="rgba(0,191,255,0.08)" strokeWidth="6" />
                <path d="M 0,220 Q 80,180 160,130 T 340,60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                
                {/* River label */}
                <text x="240" y="70" fill="rgba(255,255,255,0.15)" className="font-mono text-[0.62rem] uppercase tracking-[0.2em]" transform="rotate(-15, 240, 70)">
                  Río de la Plata
                </text>

                {/* Major Highways/Avenues stylized representations */}
                {/* General Paz */}
                <path d="M 120,68 Q 115,100 130,120 T 170,128" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeDasharray="3,3" />
                {/* Panamericana */}
                <path d="M 50,45 Q 85,60 120,68" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                {/* Lugones/Illia */}
                <path d="M 120,68 Q 135,78 165,110" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />

                {/* Clickable Node hotspots on Map */}
                {nodes.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isCentral = node.id.includes("puerto") || node.id.includes("palermo");
                  return (
                    <g 
                      key={node.id} 
                      className="cursor-pointer group"
                      onClick={() => setSelectedNodeId(node.id)}
                    >
                      {/* Pulse effect */}
                      <circle 
                        cx={node.coords.x} 
                        cy={node.coords.y} 
                        r={isSelected ? 16 : 8} 
                        fill={isCentral ? "rgba(0, 191, 255, 0.07)" : "rgba(0, 230, 118, 0.07)"}
                        className={isSelected ? "animate-pulse" : "group-hover:scale-125 transition-transform"}
                      />
                      <circle 
                        cx={node.coords.x} 
                        cy={node.coords.y} 
                        r={isSelected ? 6 : 3.5} 
                        fill={isCentral ? "#00BFFF" : "#00E676"}
                        className="transition-all duration-300"
                        stroke={isSelected ? "#fff" : "transparent"}
                        strokeWidth="1"
                      />
                      {/* Stylized visual selection indicator ring */}
                      {isSelected && (
                        <circle 
                          cx={node.coords.x} 
                          cy={node.coords.y} 
                          r="22" 
                          fill="none" 
                          stroke={isCentral ? "#00BFFF" : "#00E676"} 
                          strokeWidth="0.75" 
                          strokeDasharray="4,4"
                          className="animate-[spin_10s_linear_infinite]"
                        />
                      )}

                      {/* Floating tooltip text on hover / select */}
                      <text 
                        x={node.coords.x + 10} 
                        y={node.coords.y + 4} 
                        fill={isSelected ? "#fff" : "rgba(255,255,255,0.4)"} 
                        className="font-mono text-[0.62rem] font-semibold tracking-wider pointer-events-none transition-colors"
                      >
                        {node.id === "puerto-madero" ? "PUERTO MADERO HQ" : node.name.split(" ")[0].toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom active feedback */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex justify-between text-xs text-brand-gray font-mono">
              <span className="flex items-center gap-1"><Wifi className="w-3.5 h-3.5" /> Enlaces Activos: 2/2</span>
              <span>Centrales Conectadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
