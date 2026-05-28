"use client";

import { useState, useEffect } from "react";
import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { Building, Briefcase, Trees, Hotel, ShieldAlert, Cpu, Check, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

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

const localExtra: Record<Locale, {
  initialInvestment: string;
  subsidized: string;
  devices: string;
  intelligence: string;
  comodatoScheme: string;
  step1: string;
  step2: string;
  step3: string;
  shabatMode: string;
  automaticAccess: string;
  logDeAccesos: string;
}> = {
  es: {
    initialInvestment: "Inversión Inicial",
    subsidized: "100% BONIFICADA",
    devices: "Dispositivos",
    intelligence: "Inteligencia",
    comodatoScheme: "Esquema Comodato",
    step1: "1. Seleccioná el Entorno",
    step2: "2. Dispositivos de Hardware",
    step3: "3. Suscripción y Módulos de IA",
    shabatMode: "MODO SHABAT",
    automaticAccess: "ACCESO AUTOMÁTICO",
    logDeAccesos: "LOG DE ACCESOS",
  },
  en: {
    initialInvestment: "Initial Investment",
    subsidized: "100% SUBSIDIZED",
    devices: "Devices",
    intelligence: "Intelligence",
    comodatoScheme: "Free Lease Scheme",
    step1: "1. Select Environment",
    step2: "2. Hardware Devices",
    step3: "3. AI Subscription & Modules",
    shabatMode: "SHABAT MODE",
    automaticAccess: "AUTOMATIC ACCESS",
    logDeAccesos: "ACCESS LOG",
  },
  he: {
    initialInvestment: "השקעה ראשונית",
    subsidized: "100% מסובסד",
    devices: "מכשירים",
    intelligence: "בינה מלאכותית",
    comodatoScheme: "מסלול השאלה",
    step1: "1. בחר סביבה",
    step2: "2. מכשירי חומרה",
    step3: "3. מנוי ומודולי בינה מלאכותית",
    shabatMode: "מצב שבת",
    automaticAccess: "גישה אוטומטית",
    logDeAccesos: "יומן כניסות",
  },
  de: {
    initialInvestment: "Erstinvestition",
    subsidized: "100% GEFÖRDERT",
    devices: "Geräte",
    intelligence: "Intelligenz",
    comodatoScheme: "Leihschema",
    step1: "1. Umgebung Auswählen",
    step2: "2. Hardware-Geräte",
    step3: "3. KI-Abonnement & Module",
    shabatMode: "SCHABBAT-MODUS",
    automaticAccess: "AUTOMATISCHER ZUGANG",
    logDeAccesos: "ZUGANGSPROTOKOLL",
  },
  ru: {
    initialInvestment: "Начальные инвестиции",
    subsidized: "100% СУБСИДИРУЕТСЯ",
    devices: "Устройства",
    intelligence: "Интеллект",
    comodatoScheme: "Схема аренды",
    step1: "1. Выберите окружение",
    step2: "2. Аппаратные устройства",
    step3: "3. Подписка и модули ИИ",
    shabatMode: "РЕЖИМ ШАБАТ",
    automaticAccess: "АВТОМАТИЧЕСКИЙ ДОСТУП",
    logDeAccesos: "ЖУРНАЛ ДОСТУПА",
  },
  pt: {
    initialInvestment: "Investimento Inicial",
    subsidized: "100% SUBSIDIADA",
    devices: "Dispositivos",
    intelligence: "Inteligência",
    comodatoScheme: "Esquema de Comodato",
    step1: "1. Selecione o Ambiente",
    step2: "2. Dispositivos de Hardware",
    step3: "3. Assinatura e Módulos de IA",
    shabatMode: "MODO SHABAT",
    automaticAccess: "ACESSO AUTÔNOMO",
    logDeAccesos: "REGISTRO DE ACESSO",
  },
  it: {
    initialInvestment: "Investimento Iniziale",
    subsidized: "100% COPERTO",
    devices: "Dispositivi",
    intelligence: "Intelligenza",
    comodatoScheme: "Schema Comodato",
    step1: "1. Seleziona l'Ambiente",
    step2: "2. Dispositivi Hardware",
    step3: "3. Abbonamento e Moduli IA",
    shabatMode: "MODALITÀ SHABAT",
    automaticAccess: "ACCESSO AUTOMATICO",
    logDeAccesos: "REGISTRO ACCESSI",
  }
};

export function CPQConfigurator() {
  const { language, t } = useLanguage();
  const isRtl = language === "he";
  const extra = localExtra[language as Locale] || localExtra.es;

  const [env, setEnv] = useState<EnvironmentType>("edificio");
  const [selectedHardware, setSelectedHardware] = useState<string[]>(["totem", "facial"]);
  const [selectedSoftware, setSelectedSoftware] = useState<string[]>(["linea"]);
  const [dolarRate, setDolarRate] = useState<number>(1000); // 1 USD = 1000 ARS (default fallback)

  useEffect(() => {
    const fetchDolarRate = async () => {
      try {
        const CACHE_KEY = "shomer_dolar_rate";
        const TIME_KEY = "shomer_dolar_time";
        
        // 1. Load cached value immediately if it exists
        const cachedRate = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(TIME_KEY);
        
        if (cachedRate) {
          setDolarRate(parseFloat(cachedRate));
        }

        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;

        // 2. If cache is valid (less than 24 hours old), skip API fetch
        if (cachedRate && cachedTime && (now - parseInt(cachedTime, 10) < oneDayMs)) {
          return;
        }

        // 3. Fetch from DolarAPI
        const res = await fetch("https://dolarapi.com/v1/dolares/blue");
        if (!res.ok) throw new Error("DolarAPI request failed");
        const data = await res.json();
        
        if (data && data.venta && typeof data.venta === "number") {
          setDolarRate(data.venta);
          localStorage.setItem(CACHE_KEY, data.venta.toString());
          localStorage.setItem(TIME_KEY, now.toString());
        }
      } catch (err) {
        console.error("Error fetching dollar rate from DolarAPI:", err);
      }
    };

    fetchDolarRate();
  }, []);

  const environments = [
    { id: "edificio", name: t("cpq.environments.edificio"), icon: <Building className="w-5 h-5" />, bg: "rgba(0, 191, 255, 0.05)" },
    { id: "empresa", name: t("cpq.environments.empresa"), icon: <Briefcase className="w-5 h-5" />, bg: "rgba(0, 230, 118, 0.05)" },
    { id: "barrio", name: t("cpq.environments.barrio"), icon: <Trees className="w-5 h-5" />, bg: "rgba(255, 59, 48, 0.05)" },
    { id: "hotel", name: t("cpq.environments.hotel"), icon: <Hotel className="w-5 h-5" />, bg: "rgba(168, 85, 247, 0.05)" },
  ];

  const hardwareList: HardwareItem[] = [
    { id: "totem", name: "Tótem Inteligente Shomer", desc: "Audio bidireccional y pantalla con operador en vivo 24/7.", price: 620000 },
    { id: "facial", name: "Lector Facial Face ID con IA", desc: "Acceso biométrico rápido sin llaves físicas (200ms).", price: 310000 },
    { id: "huella", name: "Lector de Huella Digital", desc: "Sistema de registro de acceso único e intransferible.", price: 180000 },
    { id: "camaras", name: "Cámaras de Seguridad HD (x4)", desc: "Lentes de alta definición con visión nocturna y respaldo.", price: 476230 },
    { id: "barrera", name: "Controlador de Portón / Barrera", desc: "Apertura electrónica remota y peer-to-peer autónoma.", price: 390000 },
  ];

  const softwareList: SoftwareItem[] = [
    { id: "linea", name: "Cruce de Línea Inteligente (IA)", desc: "Detección de intrusos perimetral y alerta instantánea.", price: 50000 },
    { id: "patentes", name: "Reconocimiento de Patentes (LPR)", desc: "Apertura autónoma por lectura de matrículas en el Edge.", price: 97500 },
    { id: "horarios", name: "Control Horario y Fichaje (RRHH)", desc: "Reportes en la nube e historial de accesos por persona.", price: 40000 },
    { id: "shabat", name: "Módulo Sistema Shabat", desc: "Protocolo adaptativo respetuoso para la Colectividad Judía.", price: 86394 },
    { id: "panico", name: "Huella de Pánico", desc: "Alerta silenciosa a la central de monitoreo con un dedo específico en caso de peligro.", price: 35000 },
  ];

  const getHardwareTranslation = (id: string) => {
    switch (id) {
      case "totem":
        return { name: t("cpq.hardware.totemName"), desc: t("cpq.hardware.totemDesc") };
      case "facial":
        return { name: t("cpq.hardware.facialName"), desc: t("cpq.hardware.facialDesc") };
      case "huella":
        return {
          name: language === "es" ? "Lector de Huella Digital" : language === "en" ? "Fingerprint Reader" : language === "he" ? "קורא טביעת אצבע" : language === "de" ? "Fingerabdruckleser" : language === "ru" ? "Сканер отпечатков пальцев" : language === "pt" ? "Leitor de Impressão Digital" : "Lettore di Impronte Digitali",
          desc: language === "es" ? "Sistema de registro de acceso único e intransferible." : language === "en" ? "Unique and non-transferable access registration system." : language === "he" ? "מערכת רישום גישה ייחודית ושאינה ניתנת להעברה." : language === "de" ? "Einzigartiges und nicht übertragbares Zutrittsregistrierungssystem." : language === "ru" ? "Уникальная и непередаваемая система регистрации доступа." : language === "pt" ? "Sistema de registro de acesso único e intransferível." : "Sistema di registrazione dell'accesso unico e intrasferibile."
        };
      case "camaras":
        return { name: t("cpq.hardware.camarasName"), desc: t("cpq.hardware.camarasDesc") };
      case "barrera":
        return { name: t("cpq.hardware.barreraName"), desc: t("cpq.hardware.barreraDesc") };
      default:
        return { name: "", desc: "" };
    }
  };

  const getSoftwareTranslation = (id: string) => {
    switch (id) {
      case "linea":
        return { name: t("cpq.software.lineaName"), desc: t("cpq.software.lineaDesc") };
      case "patentes":
        return { name: t("cpq.software.patentesName"), desc: t("cpq.software.patentesDesc") };
      case "horarios":
        return { name: t("cpq.software.horariosName"), desc: t("cpq.software.horariosDesc") };
      case "shabat":
        return { name: t("cpq.software.shabatName"), desc: t("cpq.software.shabatDesc") };
      case "panico":
        return {
          name: language === "es" ? "Huella de Pánico" : language === "en" ? "Panic Fingerprint" : language === "he" ? "טביעת אצבע של פאניקה" : language === "de" ? "Panik-Fingerabdruck" : language === "ru" ? "Отпечаток паники" : language === "pt" ? "Impressão Digital de Pânico" : "Impronta Digitale di Panico",
          desc: language === "es" ? "Alerta silenciosa a la central de monitoreo con un dedo específico en caso de peligro." : language === "en" ? "Silent alert to the monitoring center using a specific finger in case of danger." : language === "he" ? "התראה שקטה למרכז הניטור באמצעות אצבע ספציפית במקרה של סכנה." : language === "de" ? "Stiller Alarm an die Leitstelle mit einem bestimmten Finger im Gefahrenfall." : language === "ru" ? "Тихая тревога в центр мониторинга определенным пальцем в случае опасности." : language === "pt" ? "Alerta silencioso à central de monitoramento com um dedo específico em caso de perigo." : "Allerta silenziosa alla centrale di monitoraggio con un dito specifico in caso di pericolo."
        };
      default:
        return { name: "", desc: "" };
    }
  };

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
      if (id === "huella") {
        setSelectedSoftware(selectedSoftware.filter((item) => item !== "panico"));
      }
    } else {
      setSelectedHardware([...selectedHardware, id]);
      if (id === "huella") {
        setSelectedSoftware(selectedSoftware.includes("panico") ? selectedSoftware : [...selectedSoftware, "panico"]);
      }
    }
  };

  const toggleSoftware = (id: string) => {
    if (selectedSoftware.includes(id)) {
      setSelectedSoftware(selectedSoftware.filter((item) => item !== id));
    } else {
      setSelectedSoftware([...selectedSoftware, id]);
    }
  };

  const visibleSoftwareList = softwareList.filter(item => {
    if (item.id === "panico") {
      return selectedHardware.includes("huella");
    }
    return true;
  });

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
  const totalAbonoUSD = Math.round(totalAbonoARS / dolarRate);

  return (
    <section id="configurador" className={`py-24 px-6 md:px-10 bg-brand-black border-t border-brand-border ${isRtl ? "text-right" : "text-left"}`}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t("cpq.tag")}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
            {t("cpq.title")}
          </h2>
          <p className={`text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light mb-12 ${isRtl ? "mr-0 ml-auto" : ""}`}>
            {t("cpq.desc")}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel: 3D Visualization Mock */}
          <div className="lg:col-span-6 border border-brand-border rounded bg-brand-surface p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            {/* Ambient grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.03),transparent_70%)] pointer-events-none" />

            <div className={`relative z-10 flex justify-between items-center mb-6 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-mono text-[0.7rem] text-brand-gray tracking-widest uppercase">{t("cpq.axonometric")}</span>
              <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" /> {t("cpq.aiActive")}
              </span>
            </div>

            {/* Stylized Axonometric Drawing representation */}
            <div className="relative z-10 w-full flex-grow flex items-center justify-center min-h-[320px]">
              <svg viewBox="0 0 400 300" className="w-full max-w-[420px] h-auto mx-auto drop-shadow-[0_12px_36px_rgba(0,191,255,0.08)]">
                <style>
                  {`
                    @keyframes laser-flow {
                      to { stroke-dashoffset: -20; }
                    }
                    .laser-fence {
                      animation: laser-flow 1.2s linear infinite;
                    }
                    @keyframes radar-pulse {
                      0% { r: 3; opacity: 0.8; }
                      100% { r: 15; opacity: 0; }
                    }
                    .radar-pulse-circle {
                      animation: radar-pulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
                    }
                    @keyframes alert-glow {
                      0%, 100% { opacity: 0.3; }
                      50% { opacity: 0.9; }
                    }
                    .alert-light {
                      animation: alert-glow 1.5s ease-in-out infinite;
                    }
                  `}
                </style>
                <defs>
                  <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <linearGradient id="glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 191, 255, 0.18)" />
                    <stop offset="100%" stopColor="rgba(0, 191, 255, 0.03)" />
                  </linearGradient>

                  <linearGradient id="warm-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                  
                  <linearGradient id="cool-window" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="active-window" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9" />
                  </linearGradient>

                  <linearGradient id="scan-cone-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 191, 255, 0.25)" />
                    <stop offset="100%" stopColor="rgba(0, 191, 255, 0.0)" />
                  </linearGradient>
                  
                  <linearGradient id="totem-hologram" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 191, 255, 0.3)" />
                    <stop offset="100%" stopColor="rgba(0, 191, 255, 0.0)" />
                  </linearGradient>

                  <linearGradient id="left-wall-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  
                  <linearGradient id="right-wall-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>

                  <linearGradient id="top-roof-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  
                  <linearGradient id="totem-screen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00bfff" />
                    <stop offset="100%" stopColor="#093358" />
                  </linearGradient>
                </defs>

                {/* Environment: Edificio Residencial */}
                {env === "edificio" && (
                  <g>
                    {/* Lobby Floor Back/Base Grid */}
                    <polygon points="200,270 130,235 200,200 270,235" fill="#09090b" stroke="rgba(255,255,255,0.05)" />
                    
                    {/* Ground floor / Lobby Structure */}
                    <polygon points="200,270 130,235 130,195 200,230" fill="url(#left-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    <polygon points="200,270 270,235 270,195 200,230" fill="url(#right-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

                    {/* Floor 1 */}
                    <polygon points="200,230 130,195 130,155 200,190" fill="url(#left-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    <polygon points="200,230 270,195 270,155 200,190" fill="url(#right-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

                    {/* Floor 2 */}
                    <polygon points="200,190 130,155 130,115 200,150" fill="url(#left-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    <polygon points="200,190 270,155 270,115 200,150" fill="url(#right-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

                    {/* Floor 3 */}
                    <polygon points="200,150 130,115 130,75 200,110" fill="url(#left-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    <polygon points="200,150 270,115 270,75 200,110" fill="url(#right-wall-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

                    {/* Roof Top */}
                    <polygon points="200,110 270,75 200,40 130,75" fill="url(#top-roof-grad)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

                    {/* Glass balconies: Floor 2 */}
                    <polygon points="200,180 130,145 130,135 200,170" fill="rgba(0, 191, 255, 0.15)" stroke="rgba(0, 191, 255, 0.4)" strokeWidth="1" />
                    <polygon points="200,180 270,145 270,135 200,170" fill="rgba(0, 191, 255, 0.15)" stroke="rgba(0, 191, 255, 0.4)" strokeWidth="1" />
                    
                    {/* Glass balconies: Floor 1 */}
                    <polygon points="200,220 130,185 130,175 200,210" fill="rgba(0, 191, 255, 0.15)" stroke="rgba(0, 191, 255, 0.4)" strokeWidth="1" />
                    <polygon points="200,220 270,185 270,175 200,210" fill="rgba(0, 191, 255, 0.15)" stroke="rgba(0, 191, 255, 0.4)" strokeWidth="1" />

                    {/* Windows grid rendering with conditional fills */}
                    {/* Floor 3 Left */}
                    <polygon points="145,103 157,96 157,84 145,91" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#cool-window)"} stroke="rgba(255,255,255,0.15)" />
                    <polygon points="170,89 182,82 182,70 170,77" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#active-window)"} stroke="rgba(255,255,255,0.15)" />
                    
                    {/* Floor 3 Right */}
                    <polygon points="218,82 230,89 230,77 218,70" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#cool-window)"} stroke="rgba(255,255,255,0.15)" />
                    <polygon points="243,96 255,103 255,91 243,84" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#active-window)"} stroke="rgba(255,255,255,0.15)" />

                    {/* Floor 2 Left */}
                    <polygon points="145,143 157,136 157,124 145,131" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#cool-window)"} stroke="rgba(255,255,255,0.15)" />
                    <polygon points="170,129 182,122 182,110 170,117" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "rgba(30, 41, 59, 0.5)"} stroke="rgba(255,255,255,0.15)" />
                    
                    {/* Floor 2 Right */}
                    <polygon points="218,122 230,129 230,117 218,110" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#active-window)"} stroke="rgba(255,255,255,0.15)" />
                    <polygon points="243,136 255,143 255,131 243,124" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#cool-window)"} stroke="rgba(255,255,255,0.15)" />

                    {/* Floor 1 Left */}
                    <polygon points="145,183 157,176 157,164 145,171" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#active-window)"} stroke="rgba(255,255,255,0.15)" />
                    <polygon points="170,169 182,162 182,150 170,157" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#cool-window)"} stroke="rgba(255,255,255,0.15)" />

                    {/* Floor 1 Right */}
                    <polygon points="218,162 230,169 230,157 218,150" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "rgba(30, 41, 59, 0.5)"} stroke="rgba(255,255,255,0.15)" />
                    <polygon points="243,176 255,183 255,171 243,164" fill={selectedSoftware.includes("shabat") ? "url(#warm-glow)" : "url(#active-window)"} stroke="rgba(255,255,255,0.15)" />

                    {/* Ground Floor / Lobby Glass Facade */}
                    <polygon points="195,228 140,200 140,230 195,258" fill="url(#glass-grad)" stroke="rgba(0, 191, 255, 0.3)" strokeWidth="0.8" />
                    <polygon points="205,228 260,200 260,230 205,258" fill="url(#glass-grad)" stroke="rgba(0, 191, 255, 0.3)" strokeWidth="0.8" />
                    
                    {/* Glass Doors in the front lobby */}
                    <polygon points="200,230 180,220 180,250 200,260" fill="rgba(0, 191, 255, 0.08)" stroke="rgba(0, 191, 255, 0.5)" strokeWidth="0.8" />
                    <polygon points="200,230 220,220 220,250 200,260" fill="rgba(0, 191, 255, 0.08)" stroke="rgba(0, 191, 255, 0.5)" strokeWidth="0.8" />

                    {/* Roof Penthouse */}
                    <polygon points="200,105 180,95 180,75 200,85" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
                    <polygon points="200,105 220,95 220,75 200,85" fill="#334155" stroke="rgba(255,255,255,0.1)" />
                    <polygon points="200,85 220,95 200,102 180,95" fill="#475569" stroke="rgba(255,255,255,0.1)" />
                    
                    {/* Antenna & Beacon Red LED */}
                    <line x1="200" y1="75" x2="200" y2="45" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    <circle cx="200" cy="45" r="2.5" fill="#ef4444" filter="url(#glow-red)" className="alert-light" />
                  </g>
                )}

                {/* Environment: Oficina / Empresa */}
                {env === "empresa" && (
                  <g>
                    {/* Concrete slab under-lip */}
                    <polygon points="90,215 90,225 200,280 310,225 310,215" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8" />
                    
                    {/* Slab top surface */}
                    <polygon points="200,270 310,215 200,160 90,215" fill="#1e293b" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" opacity="0.9" />

                    {/* Back glass walls */}
                    <polygon points="90,215 200,160 200,110 90,165" fill="rgba(0, 191, 255, 0.03)" stroke="rgba(0, 191, 255, 0.15)" strokeWidth="0.8" />
                    <polygon points="310,215 200,160 200,110 310,165" fill="rgba(0, 191, 255, 0.03)" stroke="rgba(0, 191, 255, 0.15)" strokeWidth="0.8" />

                    {/* Pillars */}
                    <line x1="90" y1="215" x2="90" y2="165" stroke="#334155" strokeWidth="2.5" />
                    <line x1="310" y1="215" x2="310" y2="165" stroke="#334155" strokeWidth="2.5" />
                    <line x1="200" y1="160" x2="200" y2="110" stroke="#334155" strokeWidth="2.5" />

                    {/* Partition wall in the back-center */}
                    <polygon points="155,182.5 200,160 200,120 155,142.5" fill="rgba(0, 191, 255, 0.05)" stroke="rgba(0, 191, 255, 0.25)" strokeWidth="0.8" />
                    <polygon points="155,182.5 175,192.5 175,152.5 155,142.5" fill="rgba(0, 191, 255, 0.05)" stroke="rgba(0, 191, 255, 0.25)" strokeWidth="0.8" />

                    {/* Desk Group A (Left side) */}
                    <polygon points="130,215 160,200 175,207.5 145,222.5" fill="#0f172a" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    <line x1="130" y1="215" x2="130" y2="225" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <line x1="160" y1="200" x2="160" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <line x1="145" y1="222.5" x2="145" y2="232.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <polygon points="148,206 154,203 154,196 148,199" fill="#00BFFF" stroke="#fff" strokeWidth="0.5" filter="url(#glow-blue)" />
                    <line x1="151" y1="201.5" x2="151" y2="204" stroke="#fff" strokeWidth="0.8" />
                    <polygon points="144,212 150,209 153,210.5 147,213.5" fill="#374151" />

                    {/* Desk Group B (Right side) */}
                    <polygon points="225,207.5 255,192.5 270,200 240,215" fill="#0f172a" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    <line x1="225" y1="207.5" x2="225" y2="217.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <line x1="255" y1="192.5" x2="255" y2="202.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <line x1="240" y1="215" x2="240" y2="225" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <polygon points="243,198 249,195 249,188 243,191" fill="#00BFFF" stroke="#fff" strokeWidth="0.5" filter="url(#glow-blue)" />
                    <line x1="246" y1="193.5" x2="246" y2="196" stroke="#fff" strokeWidth="0.8" />

                    {/* Server Rack Cabinet */}
                    <polygon points="235,180 220,172.5 220,137.5 235,145" fill="#111827" stroke="rgba(255,255,255,0.15)" />
                    <polygon points="235,180 250,172.5 250,137.5 235,145" fill="#1f2937" stroke="rgba(255,255,255,0.15)" />
                    <polygon points="235,145 250,137.5 235,130 220,137.5" fill="#374151" stroke="rgba(255,255,255,0.15)" />
                    <circle cx="225" cy="145" r="0.8" fill="#00E676" />
                    <circle cx="229" cy="143" r="0.8" fill="#ef4444" className="alert-light" />
                    <circle cx="225" cy="151" r="0.8" fill="#00BFFF" />
                    <circle cx="229" cy="149" r="0.8" fill="#00E676" />
                    <circle cx="225" cy="157" r="0.8" fill="#00E676" />
                    <circle cx="229" cy="155" r="0.8" fill="#3b82f6" />

                    {/* Corporate logo on reception wall */}
                    <polygon points="195,200 195,160 235,140 235,180" fill="#111827" stroke="rgba(255,255,255,0.1)" />
                    <text transform="translate(201, 169) rotate(-26.5)" fill="#00BFFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold" letterSpacing="0.8" filter="url(#glow-blue)">SHOMER</text>

                    {/* Speed gates / Turnstiles pillars */}
                    <rect x="178" y="222" width="3" height="15" fill="#374151" rx="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <rect x="193" y="214.5" width="3" height="15" fill="#374151" rx="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <rect x="208" y="207" width="3" height="15" fill="#374151" rx="0.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

                    {selectedHardware.includes("barrera") ? (
                      <g>
                        <line x1="179.5" y1="229.5" x2="194.5" y2="222" stroke="#ef4444" strokeWidth="2.5" filter="url(#glow-red)" />
                        <line x1="194.5" y1="222" x2="209.5" y2="214.5" stroke="#ef4444" strokeWidth="2.5" filter="url(#glow-red)" />
                      </g>
                    ) : (
                      <g opacity="0.3">
                        <line x1="179.5" y1="229.5" x2="194.5" y2="222" stroke="#fff" strokeWidth="1.5" />
                        <line x1="194.5" y1="222" x2="209.5" y2="214.5" stroke="#fff" strokeWidth="1.5" />
                      </g>
                    )}
                  </g>
                )}

                {/* Environment: Country / Barrio Cerrado */}
                {env === "barrio" && (
                  <g>
                    {/* Forest/Grass Background Slab */}
                    <polygon points="20,240 200,150 380,240 200,330" fill="#022c22" stroke="rgba(16,185,129,0.15)" strokeWidth="0.8" />
                    
                    {/* Asphalt driveway roads */}
                    <polygon points="60,280 200,210 250,235 110,305" fill="#1e293b" stroke="rgba(255,255,255,0.06)" />
                    <polygon points="150,235 290,165 340,190 200,260" fill="#1e293b" stroke="rgba(255,255,255,0.06)" />
                    
                    {/* Lane separation line */}
                    <line x1="85" y1="292.5" x2="225" y2="222.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeDasharray="5,5" />
                    <line x1="175" y1="247.5" x2="315" y2="177.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeDasharray="5,5" />

                    {/* Concrete island in the middle for guardhouse */}
                    <polygon points="160,225 210,200 235,212.5 185,237.5" fill="#475569" stroke="#64748b" strokeWidth="0.8" />
                    
                    {/* Security guardhouse */}
                    <polygon points="195,220 180,212.5 180,182.5 195,190" fill="url(#left-wall-grad)" stroke="rgba(255,255,255,0.1)" />
                    <polygon points="195,220 215,210 215,180 195,190" fill="url(#right-wall-grad)" stroke="rgba(255,255,255,0.1)" />
                    <polygon points="195,188 175,178 200,165.5 220,175.5" fill="url(#top-roof-grad)" stroke="rgba(255,255,255,0.15)" />
                    
                    {/* Panoramic windows */}
                    <polygon points="183,205 192,209.5 192,197 183,192.5" fill="rgba(0,191,255,0.15)" stroke="rgba(0,191,255,0.4)" />
                    <polygon points="200,207.5 212,201.5 212,189 200,195" fill="rgba(0,191,255,0.15)" stroke="rgba(0,191,255,0.4)" />

                    {/* Low-poly 3D Tree 1 */}
                    <line x1="70" y1="210" x2="70" y2="195" stroke="#78350f" strokeWidth="2" />
                    <polygon points="70,195 55,180 85,180" fill="#047857" />
                    <polygon points="70,183 58,170 82,170" fill="#059669" />
                    <polygon points="70,172 62,160 78,160" fill="#10b981" />

                    {/* Low-poly 3D Tree 2 */}
                    <line x1="330" y1="260" x2="330" y2="245" stroke="#78350f" strokeWidth="2" />
                    <polygon points="330,245 315,230 345,230" fill="#047857" />
                    <polygon points="330,233 318,220 342,220" fill="#059669" />
                    <polygon points="330,222 322,210 338,210" fill="#10b981" />

                    {/* Barriers base poles */}
                    <rect x="165" y="222" width="4" height="10" fill="#334155" rx="0.5" />
                    <rect x="225" y="195" width="4" height="10" fill="#334155" rx="0.5" />

                    {/* Entry Barrier Arm */}
                    {selectedHardware.includes("barrera") ? (
                      <g>
                        <line x1="167" y1="225" x2="120" y2="248.5" stroke="#ef4444" strokeWidth="3" filter="url(#glow-red)" />
                        <circle cx="167" cy="225" r="2" fill="#ef4444" className="alert-light" />
                      </g>
                    ) : (
                      <line x1="167" y1="225" x2="120" y2="248.5" stroke="#94a3b8" strokeWidth="1.5" opacity="0.4" />
                    )}

                    {/* Exit Barrier Arm */}
                    {selectedHardware.includes("barrera") ? (
                      <g>
                        <line x1="227" y1="198" x2="274" y2="174.5" stroke="#ef4444" strokeWidth="3" filter="url(#glow-red)" />
                        <circle cx="227" cy="198" r="2" fill="#ef4444" className="alert-light" />
                      </g>
                    ) : (
                      <line x1="227" y1="198" x2="274" y2="174.5" stroke="#94a3b8" strokeWidth="1.5" opacity="0.4" />
                    )}
                  </g>
                )}

                {/* Environment: Hotel / Airbnb */}
                {env === "hotel" && (
                  <g>
                    {/* Floor slab */}
                    <polygon points="200,270 320,210 200,150 80,210" fill="#1c1917" stroke="rgba(255,255,255,0.05)" />
                    <polygon points="80,210 80,220 200,280 320,220 320,210 Z" fill="#0c0a09" stroke="#292524" strokeWidth="0.8" />
                    
                    {/* Tiled floor lines for premium texture */}
                    <line x1="140" y1="240" x2="260" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
                    <line x1="110" y1="225" x2="230" y2="165" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
                    <line x1="170" y1="255" x2="290" y2="195" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />

                    {/* Back-walls */}
                    <polygon points="80,210 200,150 200,80 80,140" fill="#292524" stroke="rgba(255,255,255,0.05)" />
                    <polygon points="320,210 200,150 200,80 320,140" fill="#292524" stroke="rgba(255,255,255,0.05)" />

                    {/* Wood panel sections */}
                    <polygon points="90,195 140,170 140,110 90,135" fill="#451a03" opacity="0.85" stroke="rgba(255,255,255,0.06)" />
                    <polygon points="310,195 260,170 260,110 310,135" fill="#451a03" opacity="0.85" stroke="rgba(255,255,255,0.06)" />

                    {/* Left Guest Door */}
                    <polygon points="145,167.5 170,155 170,95 145,107.5" fill="#1c1917" stroke="#b45309" strokeWidth="1.2" />
                    <polygon points="143,168.5 172,154 172,94 143,108.5" fill="none" stroke="#78350f" strokeWidth="0.8" />
                    <circle cx="150" cy="138" r="1.2" fill="#d97706" />

                    {/* Right Guest Door */}
                    <polygon points="255,167.5 230,155 230,95 255,107.5" fill="#1c1917" stroke="#b45309" strokeWidth="1.2" />
                    <polygon points="257,168.5 228,154 228,94 257,108.5" fill="none" stroke="#78350f" strokeWidth="0.8" />
                    <circle cx="250" cy="138" r="1.2" fill="#d97706" />

                    {/* Wall sconces and V-light glow */}
                    <polygon points="115,130 95,95 135,95" fill="rgba(245,158,11,0.18)" />
                    <polygon points="115,130 90,165 140,165" fill="rgba(245,158,11,0.18)" />
                    <rect x="114" y="125" width="2" height="10" fill="#78350f" rx="0.5" />

                    <polygon points="285,130 265,95 305,95" fill="rgba(245,158,11,0.18)" />
                    <polygon points="285,130 260,165 310,165" fill="rgba(245,158,11,0.18)" />
                    <rect x="284" y="125" width="2" height="10" fill="#78350f" rx="0.5" />

                    {/* Automated check-in terminal desk */}
                    <polygon points="210,240 240,225 255,232.5 225,247.5" fill="#e2e8f0" stroke="rgba(0,0,0,0.15)" />
                    <polygon points="210,240 225,247.5 225,262.5 210,255" fill="#cbd5e1" />
                    <polygon points="255,232.5 225,247.5 225,262.5 255,247.5" fill="#94a3b8" />
                    <polygon points="228,236 234,233 234,226 228,229" fill="#00BFFF" stroke="#fff" strokeWidth="0.5" filter="url(#glow-blue)" />

                    {selectedHardware.includes("barrera") && (
                      <g filter="url(#glow-green)">
                        <rect x="146.5" y="133" width="2" height="4" rx="0.5" fill="#00E676" />
                        <rect x="251.5" y="133" width="2" height="4" rx="0.5" fill="#00E676" />
                      </g>
                    )}
                  </g>
                )}

                {/* Hardware: Totem Inteligente (Dynamic 3D model overlay) */}
                {selectedHardware.includes("totem") && (
                  <g>
                    {(() => {
                      let tx = 110, ty = 245;
                      if (env === "edificio") { tx = 115; ty = 245; }
                      else if (env === "empresa") { tx = 110; ty = 245; }
                      else if (env === "barrio") { tx = 110; ty = 260; }
                      else if (env === "hotel") { tx = 110; ty = 245; }

                      return (
                        <g>
                          {/* Under-totem glow shadow */}
                          <ellipse cx={tx} cy={ty} rx="12" ry="6" fill="rgba(0, 191, 255, 0.2)" filter="url(#glow-blue)" />

                          {/* Hologram/sight cone of the Tótem */}
                          <polygon points={`${tx},${ty-46.5} ${tx-40},${ty+15} ${tx+20},${ty+45}`} fill="url(#totem-hologram)" opacity="0.65" style={{ pointerEvents: 'none' }} />

                          {/* Totem Base structure (3D Column) */}
                          <polygon points={`${tx},${ty} ${tx-6},${ty-3} ${tx-6},${ty-48} ${tx},${ty-45}`} fill="#111827" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                          <polygon points={`${tx},${ty} ${tx+6},${ty-3} ${tx+6},${ty-48} ${tx},${ty-45}`} fill="#1f2937" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                          <polygon points={`${tx},${ty-45} ${tx+6},${ty-48} ${tx},${ty-51} ${tx-6},${ty-48}`} fill="#374151" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

                          {/* Glowing side neon borders */}
                          <line x1={tx-6} y1={ty-3} x2={tx-6} y2={ty-48} stroke="#00BFFF" strokeWidth="1" filter="url(#glow-blue)" />
                          <line x1={tx+6} y1={ty-3} x2={tx+6} y2={ty-48} stroke="#00BFFF" strokeWidth="1" filter="url(#glow-blue)" />

                          {/* Vertical LED Screen on the right face */}
                          <polygon points={`${tx+0.5},${ty-12} ${tx+5},${ty-14.25} ${tx+5},${ty-42} ${tx+0.5},${ty-40}`} fill="url(#totem-screen)" />
                          
                          {/* Operator avatar silhouette inside the screen */}
                          <circle cx={tx+2.75} cy={ty-32} r="2" fill="#fff" opacity="0.8" />
                          <path d={`M ${tx+1},${ty-26} Q ${tx+2.75},${ty-29} ${tx+4.5},${ty-26}`} fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
                          
                          {/* Screen scan lines or pulse */}
                          <line x1={tx+0.5} y1={ty-22} x2={tx+5} y2={ty-24.25} stroke="#00BFFF" strokeWidth="1" opacity="0.6">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                          </line>

                          {/* Camera Lens at the top */}
                          <circle cx={tx} cy={ty-46.5} r="1.5" fill="#111" stroke="#ef4444" strokeWidth="0.5" />
                        </g>
                      );
                    })()}
                  </g>
                )}

                {/* Hardware: Facial ID Access Control System Overlay */}
                {selectedHardware.includes("facial") && (
                  <g>
                    {(() => {
                      let fx = 138, fy = 210;
                      if (env === "edificio") { fx = 138; fy = 210; }
                      else if (env === "empresa") { fx = 185; fy = 212; }
                      else if (env === "barrio") { fx = 182; fy = 182; }
                      else if (env === "hotel") { fx = 142; fy = 145; }

                      return (
                        <g filter="url(#glow-green)">
                          {/* Small biometric reader on wall */}
                          <rect x={fx-1.5} y={fy-3} width="3" height="6" fill="#00E676" rx="0.5" />
                          
                          {/* Pulsating green radar circle under target */}
                          <circle cx={fx+12} cy={fy+12} r="4" fill="none" stroke="#00E676" strokeWidth="0.8" className="radar-pulse-circle" />
                          
                          {/* Scanning laser beam */}
                          <line x1={fx} y1={fy} x2={fx+12} y2={fy+12} stroke="#00E676" strokeWidth="0.8" opacity="0.8">
                            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite" />
                          </line>
                          
                          {/* Floating face mesh target */}
                          <g transform={`translate(${fx+6}, ${fy+6})`}>
                            {/* Brackets [ ] */}
                            <path d="M 0,3 L 0,0 L 3,0" fill="none" stroke="#00E676" strokeWidth="0.8" />
                            <path d="M 9,0 L 12,0 L 12,3" fill="none" stroke="#00E676" strokeWidth="0.8" />
                            <path d="M 0,9 L 0,12 L 3,12" fill="none" stroke="#00E676" strokeWidth="0.8" />
                            <path d="M 9,12 L 12,12 L 12,9" fill="none" stroke="#00E676" strokeWidth="0.8" />
                            
                            {/* Glowing dots representing face mesh */}
                            <circle cx="3" cy="4" r="0.5" fill="#00E676" />
                            <circle cx="6" cy="3" r="0.5" fill="#00E676" />
                            <circle cx="9" cy="4" r="0.5" fill="#00E676" />
                            <circle cx="4" cy="7" r="0.5" fill="#00E676" />
                            <circle cx="8" cy="7" r="0.5" fill="#00E676" />
                            <circle cx="6" cy="9" r="0.5" fill="#00E676" />
                          </g>
                        </g>
                      );
                    })()}
                  </g>
                )}

                {/* Hardware: Fingerprint Reader Overlay */}
                {selectedHardware.includes("huella") && (
                  <g>
                    {(() => {
                      let hx = 132, hy = 222;
                      if (env === "edificio") { hx = 132; hy = 222; }
                      else if (env === "empresa") { hx = 175; hy = 216; }
                      else if (env === "barrio") { hx = 175; hy = 188; }
                      else if (env === "hotel") { hx = 136; hy = 153; }

                      return (
                        <g filter="url(#glow-blue)">
                          {/* Small reader on wall */}
                          <rect x={hx-1} y={hy-2} width="2" height="4" fill="#00BFFF" rx="0.3" />
                          
                          {/* Scanning laser beam / pulse */}
                          <line x1={hx} y1={hy} x2={hx-10} y2={hy+10} stroke="#00BFFF" strokeWidth="0.8" opacity="0.8">
                            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.2s" repeatCount="indefinite" />
                          </line>

                          {/* Floating fingerprint hologram */}
                          <g transform={`translate(${hx-16}, ${hy+5})`}>
                            {/* Brackets [ ] */}
                            <path d="M 0,2 L 0,0 L 2,0" fill="none" stroke="#00BFFF" strokeWidth="0.8" />
                            <path d="M 8,0 L 10,0 L 10,2" fill="none" stroke="#00BFFF" strokeWidth="0.8" />
                            <path d="M 0,8 L 0,10 L 2,10" fill="none" stroke="#00BFFF" strokeWidth="0.8" />
                            <path d="M 8,10 L 10,10 L 10,8" fill="none" stroke="#00BFFF" strokeWidth="0.8" />
                            
                            {/* Fingerprint ridges representation */}
                            <path d="M 2,5 C 2,3 8,3 8,5" fill="none" stroke="#00BFFF" strokeWidth="0.6" />
                            <path d="M 3,6 C 3,4.5 7,4.5 7,6" fill="none" stroke="#00BFFF" strokeWidth="0.6" />
                            <path d="M 4,7 C 4,6 6,6 6,7" fill="none" stroke="#00BFFF" strokeWidth="0.6" />
                            <path d="M 5,8 C 5,7.5 5.5,7.5 5.5,8" fill="none" stroke="#00BFFF" strokeWidth="0.6" />
                          </g>
                        </g>
                      );
                    })()}
                  </g>
                )}

                {/* Hardware: Camaras HD dome + sweeping cone */}
                {selectedHardware.includes("camaras") && (
                  <g>
                    {(() => {
                      let cams: Array<{x: number, y: number, rx: number, ry: number}> = [];
                      if (env === "edificio") {
                        cams = [
                          { x: 130, y: 155, rx: -30, ry: 40 },
                          { x: 270, y: 115, rx: -40, ry: 50 }
                        ];
                      } else if (env === "empresa") {
                        cams = [
                          { x: 90, y: 165, rx: 30, ry: 40 },
                          { x: 310, y: 165, rx: -40, ry: 40 }
                        ];
                      } else if (env === "barrio") {
                        cams = [
                          { x: 215, y: 172, rx: -30, ry: 40 },
                          { x: 180, y: 182, rx: -30, ry: 40 }
                        ];
                      } else if (env === "hotel") {
                        cams = [
                          { x: 80, y: 140, rx: 40, ry: 50 },
                          { x: 320, y: 140, rx: -40, ry: 50 }
                        ];
                      }

                      return cams.map((cam, idx) => (
                        <g key={idx}>
                          <path d={`M ${cam.x-3},${cam.y} A 3,3 0 0,1 ${cam.x+3},${cam.y} Z`} fill="#f3f4f6" stroke="#4b5563" strokeWidth="0.5" />
                          <circle cx={cam.x} cy={cam.y} r="1.5" fill="#111" />
                          <circle cx={cam.x+0.8} cy={cam.y} r="0.6" fill="#ef4444" className="alert-light" />
                          
                          <g transform={`rotate(0, ${cam.x}, ${cam.y})`}>
                            <polygon points={`${cam.x},${cam.y} ${cam.x + cam.rx - 15},${cam.y + cam.ry} ${cam.x + cam.rx + 15},${cam.y + cam.ry}`} fill="url(#scan-cone-grad)" opacity="0.35" style={{ pointerEvents: 'none' }}>
                              <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values={`-15 ${cam.x} ${cam.y}; 15 ${cam.x} ${cam.y}; -15 ${cam.x} ${cam.y}`}
                                dur="4s"
                                repeatCount="indefinite"
                              />
                            </polygon>
                          </g>
                        </g>
                      ));
                    })()}
                  </g>
                )}

                {/* Software: Cruce de Linea IA (Glowing red laser fence) */}
                {selectedSoftware.includes("linea") && (
                  <g>
                    {(() => {
                      let fencePaths: string[] = [];
                      let alertPositions: Array<{x: number, y: number}> = [];

                      if (env === "edificio") {
                        fencePaths = [
                          "M 70,255 L 130,235",
                          "M 270,235 L 330,255"
                        ];
                        alertPositions = [
                          { x: 100, y: 245 },
                          { x: 300, y: 245 }
                        ];
                      } else if (env === "empresa") {
                        fencePaths = [
                          "M 90,215 L 200,270",
                          "M 200,270 L 310,215"
                        ];
                        alertPositions = [
                          { x: 145, y: 242.5 },
                          { x: 255, y: 242.5 }
                        ];
                      } else if (env === "barrio") {
                        fencePaths = [
                          "M 20,240 L 60,280",
                          "M 340,200 L 380,240"
                        ];
                        alertPositions = [
                          { x: 40, y: 260 },
                          { x: 360, y: 220 }
                        ];
                      } else if (env === "hotel") {
                        fencePaths = [
                          "M 80,210 L 200,270",
                          "M 200,270 L 320,210"
                        ];
                        alertPositions = [
                          { x: 140, y: 240 },
                          { x: 260, y: 240 }
                        ];
                      }

                      return (
                        <g>
                          {fencePaths.map((d, idx) => (
                            <path
                              key={idx}
                              d={d}
                              stroke="#ef4444"
                              strokeWidth="2.5"
                              strokeDasharray="6,4"
                              fill="none"
                              filter="url(#glow-red)"
                              className="laser-fence"
                            />
                          ))}
                          {alertPositions.map((pos, idx) => (
                            <g key={idx} transform={`translate(${pos.x - 4}, ${pos.y - 4})`} className="alert-light">
                              <polygon points="4,0 8,3 8,7 4,10 0,7 0,3" fill="#ef4444" filter="url(#glow-red)" />
                              <text x="3.5" y="7" fill="#fff" fontSize="5.5" fontWeight="bold" fontFamily="monospace">!</text>
                            </g>
                          ))}
                        </g>
                      );
                    })()}
                  </g>
                )}

                {/* Software: LPR Patentes Scan Overlay */}
                {selectedSoftware.includes("patentes") && (
                  <g>
                    {(() => {
                      let px = 120, py = 240;
                      if (env === "edificio") { px = 150; py = 250; }
                      else if (env === "empresa") { px = 160; py = 240; }
                      else if (env === "barrio") { px = 110; py = 245; }
                      else if (env === "hotel") { px = 160; py = 245; }

                      return (
                        <g>
                          <polygon points={`${px},${py} ${px+50},${py-25} ${px+70},${py-15} ${px+20},${py+10}`} fill="rgba(0, 230, 118, 0.06)" stroke="rgba(0, 230, 118, 0.25)" strokeWidth="0.8" />
                          <line x1={px} y1={py} x2={px+20} y2={py+10} stroke="#00E676" strokeWidth="1.5" filter="url(#glow-green)">
                            <animateTransform
                              attributeName="transform"
                              type="translate"
                              values="0,0; 50,-25; 0,0"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </line>
                          
                          <g transform={`translate(${px+10}, ${py-35})`}>
                            <rect x="0" y="0" width="62" height="15" rx="2" fill="rgba(9, 9, 11, 0.85)" stroke="#00E676" strokeWidth="1" filter="url(#glow-green)" />
                            <text x="5" y="10" fill="#00E676" fontSize="6.5" fontFamily="monospace" fontWeight="bold">ARG-724 | OK</text>
                          </g>
                        </g>
                      );
                    })()}
                  </g>
                )}

                {/* Stacking HUD dashboard for Software Modules */}
                {(() => {
                  let offsetY = 40;
                  const hudElements = [];
                  
                  if (selectedSoftware.includes("horarios")) {
                    hudElements.push(
                      <g key="horarios" transform={`translate(295, ${offsetY})`}>
                        <rect x="0" y="0" width="95" height="42" rx="3" fill="rgba(9, 9, 11, 0.85)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <text x="6" y="10" fill="#a1a1aa" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{extra.logDeAccesos}</text>
                        <text x="6" y="20" fill="#00E676" fontSize="5.5" fontFamily="monospace">08:02 JPerez [IN]</text>
                        <text x="6" y="28" fill="#00E676" fontSize="5.5" fontFamily="monospace">08:15 MDiaz  [IN]</text>
                        <text x="6" y="36" fill="#3b82f6" fontSize="5.5" fontFamily="monospace">08:44 RSmith [OUT]</text>
                      </g>
                    );
                    offsetY += 46;
                  }
                  
                  if (selectedSoftware.includes("shabat")) {
                    hudElements.push(
                      <g key="shabat" transform={`translate(295, ${offsetY})`}>
                        <rect x="0" y="0" width="95" height="28" rx="3" fill="rgba(245, 158, 11, 0.05)" stroke="#fbbf24" strokeWidth="1" />
                        <text x="6" y="11" fill="#fbbf24" fontSize="6.5" fontFamily="monospace" fontWeight="bold">{extra.shabatMode}</text>
                        <text x="6" y="20" fill="#d97706" fontSize="5.5" fontFamily="monospace">{extra.automaticAccess}</text>
                      </g>
                    );
                    offsetY += 32;
                  }

                  if (selectedSoftware.includes("panico")) {
                    hudElements.push(
                      <g key="panico" transform={`translate(295, ${offsetY})`}>
                        <rect x="0" y="0" width="95" height="28" rx="3" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="1" filter="url(#glow-red)" className="alert-light" />
                        <text x="6" y="11" fill="#ef4444" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
                          {language === "es" ? "ALERTA PÁNICO" : language === "en" ? "PANIC ALERT" : language === "he" ? "אזעקת פאניקה" : "PANIK-ALARM"}
                        </text>
                        <text x="6" y="20" fill="#f87171" fontSize="5.5" fontFamily="monospace">
                          {language === "es" ? "Silencioso Activo" : language === "en" ? "Silent Active" : language === "he" ? "פעיל שקט" : "Stumm Aktiv"}
                        </text>
                      </g>
                    );
                  }
                  
                  return hudElements;
                })()}
              </svg>
            </div>

            {/* Bottom active feedback */}
            <div className={`relative z-10 mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-gray font-mono ${isRtl ? "flex-row-reverse" : ""}`}>
              <span>{extra.devices}: {selectedHardware.length}</span>
              <span>·</span>
              <span>{extra.intelligence}: {selectedSoftware.length}</span>
              <span>·</span>
              <span className="text-brand-blue uppercase">{extra.comodatoScheme}</span>
            </div>
          </div>

          {/* Right panel: Selector & Controls */}
          <div className={`lg:col-span-6 flex flex-col justify-between ${isRtl ? "text-right" : "text-left"}`}>
            <div className="flex flex-col gap-6">
              {/* Step 1: Environment Selection */}
              <div>
                <h3 className={`text-xs font-mono uppercase tracking-widest text-brand-gray mb-3 ${isRtl ? "text-right" : ""}`}>{extra.step1}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {environments.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEnv(item.id as EnvironmentType)}
                      className={`flex items-center gap-3 p-3 border rounded transition-all duration-200 text-sm font-medium
                        ${env === item.id 
                          ? "border-brand-blue bg-brand-surface text-brand-white" 
                          : "border-brand-border bg-black/20 text-brand-gray hover:border-brand-gray hover:text-brand-gray-light"
                        } ${isRtl ? "flex-row-reverse text-right" : "text-left"}`}
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
                <h3 className={`text-xs font-mono uppercase tracking-widest text-brand-gray mb-3 ${isRtl ? "text-right" : ""}`}>{extra.step2}</h3>
                <div className="flex flex-col gap-2">
                  {hardwareList.map((item) => {
                    const isSelected = selectedHardware.includes(item.id);
                    const trans = getHardwareTranslation(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleHardware(item.id)}
                        className={`flex items-center justify-between p-3.5 border rounded cursor-pointer transition-all duration-200 hover:bg-brand-surface/60
                          ${isSelected 
                            ? "border-brand-blue bg-brand-surface/40" 
                            : "border-brand-border bg-transparent"
                          } ${isRtl ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`flex-grow ${isRtl ? "pl-4 text-right" : "pr-4 text-left"}`}>
                          <div className={`text-sm font-semibold text-brand-white flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                            {trans.name}
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />}
                          </div>
                          <p className="text-[0.78rem] text-brand-gray leading-normal mt-0.5">{trans.desc}</p>
                        </div>
                        <div className={`${isRtl ? "text-left" : "text-right"} shrink-0`}>
                          <div className="text-xs font-mono text-brand-gray-light">+{isRtl ? "" : "$"}{item.price.toLocaleString(language === "es" ? "es-AR" : "en-US")}{isRtl ? " $" : ""}/m</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Software Selection */}
              <div>
                <h3 className={`text-xs font-mono uppercase tracking-widest text-brand-gray mb-3 ${isRtl ? "text-right" : ""}`}>{extra.step3}</h3>
                <div className="flex flex-col gap-2">
                  {visibleSoftwareList.map((item) => {
                    const isSelected = selectedSoftware.includes(item.id);
                    const trans = getSoftwareTranslation(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleSoftware(item.id)}
                        className={`flex items-center justify-between p-3.5 border rounded cursor-pointer transition-all duration-200 hover:bg-brand-surface/60
                          ${isSelected 
                            ? item.id === "panico"
                              ? "border-brand-blue bg-brand-blue/5 shadow-[0_0_15px_rgba(0,191,255,0.15)]"
                              : "border-brand-green/40 bg-brand-surface/40" 
                            : "border-brand-border bg-transparent"
                          } ${isRtl ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`flex-grow ${isRtl ? "pl-4 text-right" : "pr-4 text-left"}`}>
                          <div className={`text-sm font-semibold text-brand-white flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                            {trans.name}
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />}
                            {item.id === "panico" && (
                              <span className="bg-brand-blue/20 text-brand-blue text-[0.65rem] font-mono font-bold px-2 py-0.5 rounded border border-brand-blue/30 uppercase animate-pulse">
                                {language === "es" ? "Función Única" : language === "en" ? "Unique Feature" : language === "he" ? "תכונה ייחודית" : "Unique"}
                              </span>
                            )}
                          </div>
                          <p className="text-[0.78rem] text-brand-gray leading-normal mt-0.5">{trans.desc}</p>
                        </div>
                        <div className={`${isRtl ? "text-left" : "text-right"} shrink-0`}>
                          <div className="text-xs font-mono text-brand-gray-light">+{isRtl ? "" : "$"}{item.price.toLocaleString(language === "es" ? "es-AR" : "en-US")}{isRtl ? " $" : ""}/m</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Calculations & Price Output */}
            <div className="mt-8 border border-brand-border rounded bg-brand-near-black p-6 flex flex-col justify-between gap-4">
              <div className={`flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between ${isRtl ? "sm:flex-row-reverse" : ""}`}>
                <div className={isRtl ? "text-right" : "text-left"}>
                  <div className="text-[0.68rem] font-mono tracking-widest text-brand-gray uppercase">{extra.initialInvestment}</div>
                  <div className="text-xl font-display text-brand-white uppercase">
                    $0 USD <span className="text-xs font-mono text-brand-green tracking-normal font-bold">{extra.subsidized}</span>
                  </div>
                </div>
                <div className={isRtl ? "sm:text-left" : "sm:text-right"}>
                  <div className="text-[0.68rem] font-mono tracking-widest text-brand-gray uppercase">{t("cpq.summary.monthlyTotal")}</div>
                  <div className={`text-3xl font-display text-brand-blue leading-none flex items-baseline gap-1.5 ${isRtl ? "flex-row-reverse justify-end" : "justify-start"}`}>
                    <span className="text-sm font-sans text-brand-gray font-normal lowercase align-middle">
                      {language === "es" ? "desde" : language === "en" ? "from" : language === "he" ? "החל מ-" : language === "de" ? "ab" : language === "ru" ? "от" : language === "pt" ? "a partir de" : "da"}
                    </span>
                    <span>${totalAbonoARS.toLocaleString(language === "es" ? "es-AR" : "en-US")}</span>
                    <span className="text-xs font-mono text-brand-gray font-normal lowercase">{t("cpq.summary.arsSuffix")}</span>
                  </div>
                  <div className="text-xs text-brand-gray font-mono mt-0.5">
                    ~ {language === "es" ? "desde " : language === "en" ? "from " : language === "he" ? "החל מ-" : language === "de" ? "ab " : language === "ru" ? "от " : language === "pt" ? "a partir de " : "da "}{totalAbonoUSD} {t("cpq.summary.usdSuffix")}
                  </div>
                </div>
              </div>

              <Link
                href="/#contacto"
                className="w-full bg-brand-blue text-brand-black py-4 rounded-sm font-bold text-sm tracking-wider uppercase text-center hover:bg-brand-white transition-colors"
              >
                {t("cpq.summary.quoteBtn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
