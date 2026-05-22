"use client";

import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { ArrowRight, Building, Briefcase, Trees, Check, Sliders, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export function Pricing() {
  const plans = [
    {
      name: "Vision",
      subtitle: "Comunicación inteligente bidireccional y verificación visual HD.",
      price: "199.000",
      features: [
        "Cámara HD 1080p integrada",
        "QR dinámico sin app para visitantes",
        "Llamada de un toque al residente",
        "Comunicación interna privada WebRTC",
        "Notificaciones a múltiples usuarios"
      ],
      notIncluded: [
        "Acceso físico Face ID",
        "Permisos por horario/día"
      ]
    },
    {
      name: "Vision Pro",
      subtitle: "Todo lo anterior más Face ID, permisos por horario y aperturas monitoreadas.",
      price: "390.000",
      featured: true,
      features: [
        "Todo lo de Vision",
        "Face ID biométrico sin llaves ni tarjetas",
        "Permisos inteligentes por horario y día",
        "Aperturas de emergencia monitoreadas",
        "Historial completo por persona y período",
        "Fichaje automático de personal"
      ],
      notIncluded: []
    },
    {
      name: "Vision Pro Dúo",
      subtitle: "Doble equipo para ingreso y egreso. Control total del flujo de personas.",
      price: "550.000",
      features: [
        "Todo lo de Vision Pro",
        "Equipo dual ingreso + egreso",
        "Control total del flujo de accesos",
        "Ideal para edificios de alto tráfico",
        "Reportes diferenciados entrada/salida",
        "Gestión centralizada avanzada"
      ],
      notIncluded: []
    }
  ];

  // Calculator State
  const [calcEnv, setCalcEnv] = useState<"edificio" | "empresa" | "barrio">("edificio");
  const [accessCount, setAccessCount] = useState(1);
  const [cameraCount, setCameraCount] = useState(4);
  const [hasTotem, setHasTotem] = useState(false);
  const [hasLineCrossing, setHasLineCrossing] = useState(false);
  const [hasShabbat, setHasShabbat] = useState(false);
  const [hasTimeTracking, setHasTimeTracking] = useState(false);

  // Set default values depending on chosen environment
  useEffect(() => {
    if (calcEnv === "edificio") {
      setAccessCount(1);
      setCameraCount(4);
      setHasTotem(false);
      setHasShabbat(false);
      setHasTimeTracking(false);
    } else if (calcEnv === "empresa") {
      setAccessCount(1);
      setCameraCount(2);
      setHasTotem(false);
      setHasShabbat(false);
      setHasTimeTracking(true);
    } else if (calcEnv === "barrio") {
      setAccessCount(2);
      setCameraCount(8);
      setHasTotem(true);
      setHasShabbat(false);
      setHasTimeTracking(false);
    }
  }, [calcEnv]);

  // Pricing calculations (in ARS)
  const baseCost = calcEnv === "edificio" ? 250000 : calcEnv === "empresa" ? 180000 : 450000;
  const includedAccess = calcEnv === "barrio" ? 2 : 1;
  const includedCameras = calcEnv === "edificio" ? 4 : calcEnv === "empresa" ? 2 : 8;

  const extraAccess = Math.max(0, accessCount - includedAccess);
  const extraCameras = Math.max(0, cameraCount - includedCameras);

  const accessCost = extraAccess * 90000;
  const cameraCost = extraCameras * 15000;

  const totemCost = hasTotem ? 150000 : 0;
  const lineCrossingCost = hasLineCrossing ? 35000 : 0;
  const shabbatCost = hasShabbat ? 15000 : 0;
  const timeTrackingCost = hasTimeTracking ? 25000 : 0;

  const totalAbono = baseCost + accessCost + cameraCost + totemCost + lineCrossingCost + shabbatCost + timeTrackingCost;
  const totalUSD = Math.round(totalAbono / 1000);

  const handleQuoteRequest = () => {
    const envNameMap = {
      edificio: "Edificio / Consorcio",
      empresa: "Empresa",
      barrio: "Country / Barrio Cerrado",
    };
    
    const addons = [];
    if (hasTotem) addons.push("Tótem Inteligente Shomer");
    if (hasLineCrossing) addons.push("Cruce de Línea Inteligente por IA");
    if (hasShabbat) addons.push("Módulo Sistema Shabat");
    if (hasTimeTracking) addons.push("Control Horario y Fichaje (RRHH)");

    const msg = `Hola Shomer, acabo de cotizar un abono mensual estimado de $${totalAbono.toLocaleString("es-AR")} ARS (~${totalUSD} USD) en su sitio web para un entorno de ${envNameMap[calcEnv]} con:\n- ${accessCount} Punto(s) de Acceso con Face ID (incluye ${includedAccess} base + ${extraAccess} adicional)\n- ${cameraCount} Cámaras HD perimetrales (incluye ${includedCameras} base + ${extraCameras} adicional)\n- Módulos opcionales seleccionados: ${addons.join(", ") || "Ninguno"}.\n\nMe interesa coordinar una evaluación técnica de mi espacio y recibir una propuesta comercial formal.`;

    // Dispatch custom event to Contact form
    window.dispatchEvent(
      new CustomEvent("shomer-set-quote", {
        detail: {
          tipoEspacio: envNameMap[calcEnv],
          consulta: msg,
        },
      })
    );

    // Scroll to contact form
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precios" className="py-16 md:py-24 px-6 md:px-10 bg-brand-near-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Línea VISION</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            Planes claros.<br /><em className="text-brand-blue not-italic">Sin sorpresas.</em>
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light">
            Abono mensual todo incluido. Sin costos ocultos, sin mantenimientos aparte, sin sorpresas.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
              <div 
                className={`h-full border rounded p-8 md:p-10 relative bg-brand-surface transition-colors duration-300 flex flex-col
                  ${plan.featured 
                    ? "border-brand-blue bg-[linear-gradient(135deg,var(--color-brand-surface)_0%,rgba(0,191,255,0.05)_100%)]" 
                    : "border-brand-border hover:border-brand-blue/40"
                  }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] bg-brand-blue text-brand-black font-mono text-[0.65rem] font-bold tracking-[0.1em] px-4 py-1 rounded-b">
                    MÁS ELEGIDO
                  </div>
                )}
                
                <h3 className="font-display text-3xl uppercase tracking-wider mb-2">{plan.name}</h3>
                <p className="text-[0.83rem] text-brand-gray mb-7 leading-relaxed min-h-[60px]">{plan.subtitle}</p>
                
                <div className="font-display text-5xl text-brand-blue leading-none mb-1">
                  ${plan.price} <span className="text-base text-brand-gray align-top">+ IVA</span>
                </div>
                <div className="text-xs text-brand-gray font-mono mb-8">/ mes · abono mensual</div>
                
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-brand-gray-light leading-relaxed">
                      <span className="text-brand-green font-bold shrink-0 mt-[1px]">✓</span> {f}
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-brand-gray leading-relaxed opacity-60">
                      <span className="text-brand-gray font-bold shrink-0 mt-[1px]">×</span> {f}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="#contacto"
                  className={`w-full py-3.5 border rounded-sm font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center
                    ${plan.featured 
                      ? "bg-brand-blue border-brand-blue text-brand-black hover:bg-white hover:border-white" 
                      : "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-black"
                    }`}
                >
                  Consultar plan
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-8 p-6 border border-brand-border rounded-sm bg-brand-blue/5 text-[0.85rem] text-brand-gray-light leading-relaxed text-center">
            Todos los planes incluyen <strong className="text-brand-blue font-semibold">instalación, mantenimiento, soporte técnico y actualizaciones de software sin costo adicional</strong>. El equipo va en comodato. Presupuesto final sujeto a relevamiento técnico en sitio.
          </div>
        </FadeUp>

        {/* Dynamic Budget Estimator CPQ Expreso */}
        <div className="mt-24 border-t border-brand-border/60 pt-16">
          <FadeUp>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Diseñá a Medida</div>
            <h3 className="font-display text-[2rem] uppercase leading-none mb-6">
              CPQ Expreso: <em className="text-brand-blue not-italic">Cotizá en Vivo</em>
            </h3>
            <p className="text-base text-brand-gray-light leading-relaxed max-w-[620px] font-light mb-12">
              ¿Tu espacio requiere múltiples accesos o cámaras adicionales? Personalizá las cantidades y sumá inteligencia artificial en tiempo real.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 border border-brand-border rounded bg-brand-surface p-6 md:p-8 flex flex-col gap-8">
              {/* Step 1: Environment */}
              <div>
                <label className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-3 block">
                  1. Elegí tu Entorno
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "edificio", label: "Consorcio", icon: <Building className="w-4 h-4" /> },
                    { id: "empresa", label: "Oficina / Empresa", icon: <Briefcase className="w-4 h-4" /> },
                    { id: "barrio", label: "Country / Barrio", icon: <Trees className="w-4 h-4" /> }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCalcEnv(item.id as "edificio" | "empresa" | "barrio")}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 border rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200
                        ${calcEnv === item.id 
                          ? "border-brand-blue bg-brand-blue-dim text-brand-white" 
                          : "border-brand-border bg-black/15 text-brand-gray hover:text-brand-gray-light hover:border-brand-gray"
                        }`}
                    >
                      {item.icon}
                      <span className="text-center sm:text-left">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Sliders */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase">
                      2. Puntos de Acceso (Face ID)
                    </label>
                    <span className="font-mono text-sm text-brand-blue font-bold">
                      {accessCount} {accessCount === 1 ? "Acceso" : "Accesos"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={accessCount}
                    onChange={(e) => setAccessCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                  <div className="flex justify-between text-[0.65rem] text-brand-gray font-mono mt-1">
                    <span>1 acceso</span>
                    <span>10 accesos max.</span>
                  </div>
                  <span className="text-[0.7rem] text-brand-gray block mt-1.5 italic">
                    * Incluye {includedAccess} lector(es) Face ID biométrico(s) en abono base.
                  </span>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase">
                      3. Cámaras de Seguridad HD
                    </label>
                    <span className="font-mono text-sm text-brand-blue font-bold">
                      {cameraCount} {cameraCount === 1 ? "Cámara" : "Cámaras"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="32"
                    step="2"
                    value={cameraCount}
                    onChange={(e) => setCameraCount(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                  <div className="flex justify-between text-[0.65rem] text-brand-gray font-mono mt-1">
                    <span>2 cámaras</span>
                    <span>32 cámaras max.</span>
                  </div>
                  <span className="text-[0.7rem] text-brand-gray block mt-1.5 italic">
                    * Incluye {includedCameras} cámaras HD perimetrales en abono base.
                  </span>
                </div>
              </div>

              {/* Step 3: Toggles */}
              <div>
                <label className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-4 block">
                  4. Módulos y Adicionales
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: "totem",
                      name: "Tótem Inteligente",
                      desc: "Pantalla y operador remoto en vivo 24/7.",
                      price: "$150k/mes",
                      checked: hasTotem,
                      onChange: setHasTotem
                    },
                    {
                      id: "line",
                      name: "IA Cruce de Línea",
                      desc: "Detección perimetral inteligente en cámaras.",
                      price: "$35k/mes",
                      checked: hasLineCrossing,
                      onChange: setHasLineCrossing
                    },
                    {
                      id: "shabbat",
                      name: "Sistema Shabat",
                      desc: "Aperturas automáticas respetuosas del Shabat.",
                      price: "$15k/mes",
                      checked: hasShabbat,
                      onChange: setHasShabbat
                    },
                    {
                      id: "time",
                      name: "Control de Fichaje",
                      desc: "Registro y control horario para personal.",
                      price: "$25k/mes",
                      checked: hasTimeTracking,
                      onChange: setHasTimeTracking
                    }
                  ].map((addon) => (
                    <div 
                      key={addon.id}
                      onClick={() => addon.onChange(!addon.checked)}
                      className={`flex items-start justify-between p-4 border rounded cursor-pointer transition-all duration-200 hover:border-brand-blue/30
                        ${addon.checked 
                          ? "border-brand-blue bg-brand-blue-dim/10" 
                          : "border-brand-border bg-black/10"
                        }`}
                    >
                      <div className="pr-3">
                        <div className="text-xs font-bold text-brand-white flex items-center gap-1.5">
                          {addon.name}
                        </div>
                        <p className="text-[0.7rem] text-brand-gray leading-normal mt-0.5">{addon.desc}</p>
                        <span className="text-[0.65rem] font-mono text-brand-blue mt-1 block">{addon.price}</span>
                      </div>
                      
                      <div 
                        className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 mt-0.5 flex items-center
                          ${addon.checked ? "bg-brand-blue" : "bg-white/10"}`}
                      >
                        <div 
                          className={`w-4 h-4 rounded-full bg-brand-black transition-transform duration-200
                            ${addon.checked ? "translate-x-4" : "translate-x-0"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculations Card (Right Column) */}
            <div className="lg:col-span-5 border border-brand-border rounded bg-brand-surface-2 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Neon Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue shadow-[0_0_10px_#00BFFF]" />
              
              <div>
                <h4 className="font-mono text-xs text-brand-blue tracking-[0.15em] font-bold mb-6 flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" /> RESUMEN CPQ PRELIMINAR
                </h4>

                <div className="flex flex-col gap-4 text-xs border-b border-brand-border pb-6">
                  <div className="flex justify-between items-center text-brand-gray-light">
                    <span>Entorno:</span>
                    <span className="font-bold text-brand-white capitalize">{calcEnv === "barrio" ? "Barrio Cerrado" : calcEnv}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-brand-gray-light">
                    <span>Abono Base:</span>
                    <span className="font-mono">${baseCost.toLocaleString("es-AR")} / mes</span>
                  </div>

                  <div className="flex justify-between items-center text-brand-gray-light">
                    <span>Lectores biométricos:</span>
                    <span className="font-mono text-brand-white">
                      {accessCount} ({includedAccess} base + {extraAccess} extra)
                    </span>
                  </div>
                  {extraAccess > 0 && (
                    <div className="flex justify-between items-center text-brand-gray pl-3 text-[0.7rem]">
                      <span>Costo adicional accesos:</span>
                      <span className="font-mono">+${accessCost.toLocaleString("es-AR")} / mes</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-brand-gray-light">
                    <span>Canales de Cámaras HD:</span>
                    <span className="font-mono text-brand-white">
                      {cameraCount} ({includedCameras} base + {extraCameras} extra)
                    </span>
                  </div>
                  {extraCameras > 0 && (
                    <div className="flex justify-between items-center text-brand-gray pl-3 text-[0.7rem]">
                      <span>Costo adicional cámaras:</span>
                      <span className="font-mono">+${cameraCost.toLocaleString("es-AR")} / mes</span>
                    </div>
                  )}

                  {/* Addons List */}
                  {(hasTotem || hasLineCrossing || hasShabbat || hasTimeTracking) && (
                    <div className="flex flex-col gap-1.5 pt-2 border-t border-brand-border/30">
                      <span className="text-brand-gray font-mono text-[0.65rem] tracking-wider uppercase mb-1">Módulos Inteligentes:</span>
                      {hasTotem && (
                        <div className="flex justify-between items-center text-[0.7rem] text-brand-gray-light">
                          <span>+ Tótem Monitoreo 24/7:</span>
                          <span className="font-mono text-brand-blue">+${totemCost.toLocaleString("es-AR")} / mes</span>
                        </div>
                      )}
                      {hasLineCrossing && (
                        <div className="flex justify-between items-center text-[0.7rem] text-brand-gray-light">
                          <span>+ IA Analíticas Perimetral:</span>
                          <span className="font-mono text-brand-blue">+${lineCrossingCost.toLocaleString("es-AR")} / mes</span>
                        </div>
                      )}
                      {hasTimeTracking && (
                        <div className="flex justify-between items-center text-[0.7rem] text-brand-gray-light">
                          <span>+ Gestión de Fichaje RRHH:</span>
                          <span className="font-mono text-brand-blue">+${timeTrackingCost.toLocaleString("es-AR")} / mes</span>
                        </div>
                      )}
                      {hasShabbat && (
                        <div className="flex justify-between items-center text-[0.7rem] text-brand-gray-light">
                          <span>+ Módulo Sistema Shabat:</span>
                          <span className="font-mono text-brand-blue">+${shabbatCost.toLocaleString("es-AR")} / mes</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="py-6 flex flex-col gap-1">
                  <div className="text-[0.65rem] font-mono tracking-widest text-brand-gray uppercase">Inversión Inicial</div>
                  <div className="text-lg font-display text-brand-green font-bold uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-5 h-5" /> $0 USD (BONIFICADA)
                  </div>
                  <span className="text-[0.65rem] text-brand-gray italic">
                    Instalación de cámaras, lectores y cableado sin cargo. Equipamiento en comodato.
                  </span>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <span className="text-[0.65rem] font-mono tracking-widest text-brand-gray uppercase block">Abono Mensual Estimado</span>
                  <div className="text-4xl font-display text-brand-blue leading-none mt-1">
                    ${totalAbono.toLocaleString("es-AR")} <span className="text-xs font-mono text-brand-gray font-normal lowercase">ars + iva</span>
                  </div>
                  <div className="text-xs text-brand-gray font-mono mt-1">
                    ~ {totalUSD} USD / mes + IVA
                  </div>
                </div>

                <button
                  onClick={handleQuoteRequest}
                  className="w-full bg-brand-blue text-brand-black py-4 rounded-sm font-bold text-sm tracking-wider uppercase text-center hover:bg-brand-white transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Solicitar esta Cotización <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

