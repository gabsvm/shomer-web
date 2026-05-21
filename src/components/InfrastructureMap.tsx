"use client";

import { useState, useEffect, useRef } from "react";
import { FadeUp } from "./FadeUp";
import { Wifi, Zap, Activity } from "lucide-react";

interface MapNode {
  id: string;
  name: string;
  role: string;
  coords: { lat: number; lng: number };
  latency: number;
  status: "ONLINE" | "STANDBY" | "ACTIVE";
  powerRedundancy: string;
  netRedundancy: string;
  details: string;
}

export function InfrastructureMap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("puerto-madero");
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<any>(null);

  const nodes: MapNode[] = [
    {
      id: "puerto-madero",
      name: "Puerto Madero HQ (Central Principal)",
      role: "Central de Monitoreo Activo & Despacho",
      coords: { lat: -34.6177, lng: -58.3621 },
      latency: 8,
      status: "ACTIVE",
      powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante cortes de luz)",
      netRedundancy: "Fibra Óptica Fibercorp + Respaldo Starlink",
      details: "Nuestra base principal. Alberga a la central de monitoristas homologados y el centro de coordinación de alertas al 911.",
    },
    {
      id: "palermo",
      name: "Palermo Hub (Central Redundante)",
      role: "Central de Respaldo Geográfico",
      coords: { lat: -34.5818, lng: -58.4210 },
      latency: 12,
      status: "ONLINE",
      powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante cortes)",
      netRedundancy: "Fibra Óptica Simétrica Tri-proveedor",
      details: "Nodo espejo activo. Sincroniza en tiempo real toda la información de accesos y flujos de video de forma encriptada.",
    },
    {
      id: "pilar",
      name: "Pilar Node (Base Zona Norte)",
      role: "Centro de Verificación Motorizada GBA",
      coords: { lat: -34.4532, lng: -58.9137 },
      latency: 18,
      status: "ONLINE",
      powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante cortes)",
      netRedundancy: "Conexión Inalámbrica de Alta Velocidad dedicada",
      details: "Base de despacho rápido para vehículos y motociclistas de verificación rápida en la zona de countries y barrios privados del norte.",
    },
    {
      id: "san-isidro",
      name: "San Isidro Node (Base GBA Norte)",
      role: "Base de Verificación Rápida",
      coords: { lat: -34.4754, lng: -58.5262 },
      latency: 14,
      status: "ONLINE",
      powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante cortes)",
      netRedundancy: "Fibra Óptica Corporativa dedicada",
      details: "Punto de logística y distribución de patrullas perimetrales para la cobertura de San Isidro, San Fernando y Tigre.",
    },
  ];

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  // Dynamic Leaflet Loading
  useEffect(() => {
    if (typeof window === "undefined") return;

    const win = window as any;
    if (win.L) {
      setMapLoaded(true);
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.onload = () => {
      setMapLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  // Initialize Map
  useEffect(() => {
    const win = window as any;
    if (!mapLoaded || !win.L || mapRef.current) return;

    const L = win.L;

    // Create map
    const map = L.map("leaflet-map", {
      center: [-34.55, -58.60],
      zoom: 10,
      zoomControl: false,
      attributionControl: false,
    });

    // Add Dark Matter Tile Layer from CartoDB (looks clean and monochromatic)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 20,
      subdomains: "abcd",
    }).addTo(map);

    mapRef.current = map;

    // Add markers for each node
    nodes.forEach((node) => {
      const isCentral = node.id.includes("puerto") || node.id.includes("palermo");
      
      const customIcon = L.divIcon({
        className: "custom-div-icon",
        html: `
          <div class="relative w-8 h-8 flex items-center justify-center cursor-pointer">
            <div class="absolute w-8 h-8 rounded-full ${isCentral ? 'bg-[#00BFFF]/25' : 'bg-[#00E676]/25'} animate-ping" style="animation-duration: 3s;"></div>
            <div class="w-4 h-4 rounded-full ${isCentral ? 'bg-[#00BFFF]' : 'bg-[#00E676]'} border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      L.marker([node.coords.lat, node.coords.lng], { icon: customIcon })
        .addTo(map)
        .on("click", () => {
          setSelectedNodeId(node.id);
        });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mapLoaded]);

  // Pan Map on Node Selection Change
  useEffect(() => {
    if (mapRef.current) {
      const node = nodes.find((n) => n.id === selectedNodeId);
      if (node) {
        mapRef.current.setView([node.coords.lat, node.coords.lng], 12, {
          animate: true,
          duration: 1.2,
        });
      }
    }
  }, [selectedNodeId]);

  return (
    <section id="infraestructura" className="py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border">
      {/* Styles for Leaflet customization */}
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-container {
          background: #0a0a0a !important;
          outline: none;
        }
        .leaflet-grab {
          cursor: grab;
        }
        .leaflet-dragging .leaflet-grab {
          cursor: grabbing;
        }
        .custom-div-icon {
          background: transparent !important;
          border: none !important;
        }
      `}} />

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
                  {/* Selector nodes inside card */}
                  <div className="mb-2">
                    <span className="text-brand-gray font-mono block text-[0.68rem] uppercase mb-2">Seleccionar Nodo</span>
                    <div className="flex flex-wrap gap-1.5">
                      {nodes.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`px-2.5 py-1 text-[0.65rem] font-mono border rounded transition-all
                            ${node.id === selectedNodeId
                              ? "bg-brand-blue/10 border-brand-blue text-brand-blue"
                              : "border-brand-border text-brand-gray hover:text-brand-gray-light hover:border-brand-gray"
                            }`}
                        >
                          {node.id === "puerto-madero" ? "P. Madero" : node.name.split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>

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

          {/* Right panel: Real Interactive Leaflet Map */}
          <div className="lg:col-span-7 border border-brand-border rounded bg-brand-surface min-h-[460px] flex flex-col justify-between p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="font-mono text-[0.7rem] text-brand-gray tracking-widest uppercase">Mapa Operativo Terreno (CABA / GBA)</span>
              <div className="flex gap-4 text-xs font-mono text-brand-gray">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Centrales</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Bases</span>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative flex-grow min-h-[320px] rounded overflow-hidden border border-brand-border">
              <div id="leaflet-map" className="absolute inset-0 w-full h-full" />
              {!mapLoaded && (
                <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center text-xs font-mono text-brand-gray">
                  Cargando cartografía...
                </div>
              )}
            </div>

            {/* Bottom active feedback */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex justify-between text-xs text-brand-gray font-mono">
              <span className="flex items-center gap-1"><Wifi className="w-3.5 h-3.5" /> Enlaces de Red Activos: 2/2</span>
              <span className="text-brand-blue">Cartografía OpenStreetMap / CartoDB Dark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
