"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";
import Image from "next/image";
import Link from "next/link";
import { Video, ShieldAlert, BellRing, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const localTotemTranslations: Record<string, {
  tag: string;
  title: React.ReactNode;
  desc: string;
  viewInSitu: string;
  viewCatalog: string;
  altInSitu: string;
  camTitle: string;
  camDesc: string;
  panicTitle: string;
  panicDesc: string;
  sirenTitle: string;
  sirenDesc: string;
  policeTitle: string;
  policeDesc: string;
  ctaQuote: string;
  ctaVideo: string;
}> = {
  es: {
    tag: "Hardware",
    title: <>Tótem de<br /><em className="text-brand-blue not-italic">Seguridad</em><br />Virtual.</>,
    desc: "Monitoreo 24/7 con operador en vivo. Sin ausencias, sin fatiga, sin distracciones. El operador interactúa en tiempo real y activa protocolos ante cualquier incidente.",
    viewInSitu: "EN SITIO",
    viewCatalog: "CATÁLOGO ESTUDIO",
    altInSitu: "Tótem de Seguridad Virtual en situ",
    camTitle: "Cámaras HD 24/7",
    camDesc: "Monitoreo en tiempo real con visión nocturna. Respuesta inmediata.",
    panicTitle: "Huella de pánico",
    panicDesc: "Activa alerta silenciosa a la central ante situaciones de riesgo.",
    sirenTitle: "Alarma disuasoria",
    sirenDesc: "El operador activa señal sonora + protocolo 911 en tiempo real.",
    policeTitle: "Conexión directa 911",
    policeDesc: "Protocolos anti-siniestros con respuesta coordinada a las fuerzas.",
    ctaQuote: "Cotizar tótem",
    ctaVideo: "▶ Ver video"
  },
  en: {
    tag: "Hardware",
    title: <>Virtual<br />Security<br /><em className="text-brand-blue not-italic">Totem</em>.</>,
    desc: "24/7 monitoring with live operators. No absences, no fatigue, no distractions. The operator interacts in real time and triggers protocols for any incident.",
    viewInSitu: "ON SITE",
    viewCatalog: "STUDIO CATALOG",
    altInSitu: "Virtual Security Totem on site",
    camTitle: "24/7 HD Cameras",
    camDesc: "Real-time monitoring with night vision. Immediate response.",
    panicTitle: "Panic finger print",
    panicDesc: "Triggers a silent alert to the monitoring center in risk situations.",
    sirenTitle: "Deterrent siren",
    sirenDesc: "Operator triggers sound alert + 911 protocol in real time.",
    policeTitle: "Direct 911 Connection",
    policeDesc: "Anti-incident protocols with coordinated dispatch to public forces.",
    ctaQuote: "Get Totem Quote",
    ctaVideo: "▶ Watch video"
  },
  he: {
    tag: "חומרה",
    title: <>טוטם<br />אבטחה<br /><em className="text-brand-blue not-italic">וירטואלי</em>.</>,
    desc: "ניטור 24/7 עם מפעיל חי. ללא היעדרויות, ללא עייפות, ללא הסחות דעת. המפעיל מתקשר בזמן אמת ומפעיל פרוטוקולים בכל אירוע.",
    viewInSitu: "בשטח",
    viewCatalog: "קטלוג סטוジオ",
    altInSitu: "טוטם אבטחה וירטואלי בשטח",
    camTitle: "מצלמות HD 24/7",
    camDesc: "ניטור בזמן אמת עם ראיית לילה. תגובה מיידית.",
    panicTitle: "טביעת אצבע למצבי לחץ",
    panicDesc: "מפעיל התרעה שקטה למוקד במצבי סיכון.",
    sirenTitle: "אזעקת הרתעה",
    sirenDesc: "המפעיל מפעיל אזעקה קולית + פרוטוקول 911 בזמן אמת.",
    policeTitle: "חיבור ישיר 911",
    policeDesc: "פרוטוקולים נגד אירועים עם תיאום כוחות הביטחון.",
    ctaQuote: "קבל הצעת מחיר לטוטם",
    ctaVideo: "▶ צפה בסרטון"
  },
  de: {
    tag: "Hardware",
    title: <>Virtuelle<br />Sicherheits-<br /><em className="text-brand-blue not-italic">Stele</em>.</>,
    desc: "24/7-Überwachung mit Live-Operatoren. Keine Ausfälle, keine Müdigkeit, keine Ablenkungen. Der Operator interagiert in Echtzeit und aktiviert Protokolle bei Vorfällen.",
    viewInSitu: "VOR ORT",
    viewCatalog: "STUDIO-KATALOG",
    altInSitu: "Virtuelle Sicherheitsstele vor Ort",
    camTitle: "24/7 HD-Kameras",
    camDesc: "Echtzeit-Überwachung mit Nachtsicht. Sofortige Reaktion.",
    panicTitle: "Stiller Alarm (Fingerabdruck)",
    panicDesc: "Aktiviert in Risikosituationen einen stillen Alarm an die Zentrale.",
    sirenTitle: "Abschreckungssirene",
    sirenDesc: "Operator aktiviert akustisches Signal + 911-Protokoll in Echtzeit.",
    policeTitle: "Direkte 911-Verbindung",
    policeDesc: "Notfallprotokolle mit koordinierter Reaktion der Sicherheitskräfte.",
    ctaQuote: "Angebot anfordern",
    ctaVideo: "▶ Video ansehen"
  },
  ru: {
    tag: "Оборудование",
    title: <>Виртуальный<br />тотем<br /><em className="text-brand-blue not-italic">безопасности</em>.</>,
    desc: "Круглосуточный мониторинг с живым оператором. Без отсутствия на месте, без усталости, без отвлечений. Оператор взаимодействует в реальном времени и активирует протоколы при любых инцидентах.",
    viewInSitu: "НА ОБЪЕКТЕ",
    viewCatalog: "СТУДИЙНЫЙ КАТАЛОГ",
    altInSitu: "Виртуальный тотем безопасности на объекте",
    camTitle: "HD-камеры 24/7",
    camDesc: "Мониторинг в реальном времени с ночным видением. Немедленный отклик.",
    panicTitle: "Тревожная кнопка (тихий доступ)",
    panicDesc: "Активирует бесшумный сигнал тревоги в центр при угрозе.",
    sirenTitle: "Сдерживающая сирена",
    sirenDesc: "Оператор включает звуковой сигнал + протокол 911 в реальном времени.",
    policeTitle: "Прямая связь с 911",
    policeDesc: "Противоаварийные протоколы с координацией вызова спецслужб.",
    ctaQuote: "Заказать расчет тотема",
    ctaVideo: "▶ Смотреть видео"
  },
  pt: {
    tag: "Hardware",
    title: <>Totem de<br />Segurança<br /><em className="text-brand-blue not-italic">Virtual</em>.</>,
    desc: "Monitoramento 24/7 com operador ao vivo. Sem ausências, sem fadiga, sem distrações. O operador interage em tempo real e ativa protocolos diante de qualquer incidente.",
    viewInSitu: "NO LOCAL",
    viewCatalog: "CATÁLOGO ESTÚDIO",
    altInSitu: "Totem de Segurança Virtual no local",
    camTitle: "Câmeras HD 24/7",
    camDesc: "Monitoramento em tempo real com visão noturna. Resposta imediata.",
    panicTitle: "Dedo de pânico",
    panicDesc: "Ativa alerta silencioso para a central em situações de risco.",
    sirenTitle: "Alarme dissuasivo",
    sirenDesc: "O operador ativa sinal sonoro + protocolo 911 em tempo real.",
    policeTitle: "Conexão direta 911",
    policeDesc: "Protocolos de emergência com resposta coordenada às forças públicas.",
    ctaQuote: "Cotar totem",
    ctaVideo: "▶ Ver vídeo"
  },
  it: {
    tag: "Hardware",
    title: <>Totem di<br />Sicurezza<br /><em className="text-brand-blue not-italic">Virtuale</em>.</>,
    desc: "Monitoraggio 24/7 con operatore dal vivo. Senza assenze, senza fatica, senza distrazioni. L'operatore interagisce in tempo reale e attiva i protocolli in caso di incidente.",
    viewInSitu: "SUL POSTO",
    viewCatalog: "CATALOGO STUDIO",
    altInSitu: "Totem di Sicurezza Virtuale sul posto",
    camTitle: "Telecamere HD 24/7",
    camDesc: "Monitoraggio in tempo real con visione notturna. Risposta immediata.",
    panicTitle: "Impronta di panico",
    panicDesc: "Attiva un allarme silenzioso alla centrale in situazioni di rischio.",
    sirenTitle: "Allarme deterrente",
    sirenDesc: "L'operatore attiva un segnale acustico + protocollo 911 in tempo reale.",
    policeTitle: "Connessione diretta 911",
    policeDesc: "Protocolli di emergenza con risposta coordinata con le forze dell'ordine.",
    ctaQuote: "Richiedi preventivo totem",
    ctaVideo: "▶ Vedi video"
  }
};

export function Totem() {
  const [viewMode, setViewMode] = useState<"in-situ" | "catalog">("in-situ");
  const { language } = useLanguage();
  const t = localTotemTranslations[language] || localTotemTranslations.es;
  const isRtl = language === "he";

  return (
    <section id="totem" className="bg-brand-surface p-0" dir={isRtl ? "rtl" : "ltr"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="relative overflow-hidden w-full h-[300px] sm:h-[400px] lg:h-auto lg:min-h-full bg-brand-black flex items-center justify-center">
          
          {viewMode === "in-situ" ? (
            <>
              <Image 
                src="/images/totem-section.png" 
                alt={t.altInSitu} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${isRtl ? "lg:bg-gradient-to-l" : "lg:bg-gradient-to-r"} from-transparent via-transparent to-brand-surface opacity-90 lg:opacity-100`} />
            </>
          ) : (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#ffffff]">
              <video 
                src="/Totem panning horizontal fondo blanco.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Selector de Vista */}
          <div className={`absolute top-6 ${isRtl ? "right-6" : "left-6"} z-20 flex gap-1.5 bg-black/70 border border-white/10 p-1 rounded-full backdrop-blur-md`}>
            <button 
              onClick={() => setViewMode("in-situ")}
              className={`px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "in-situ" ? "bg-brand-blue text-brand-black font-bold" : "text-brand-gray hover:text-white"}`}
            >
              {t.viewInSitu}
            </button>
            <button 
              onClick={() => setViewMode("catalog")}
              className={`px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "catalog" ? "bg-brand-blue text-brand-black font-bold shadow-[0_0_8px_rgba(0,191,255,0.4)]" : "text-brand-gray hover:text-white"}`}
            >
              {t.viewCatalog}
            </button>
          </div>
        </div>
        
        <div className={`py-16 px-6 md:px-16 flex flex-col justify-center ${isRtl ? "text-right" : "text-left"}`}>
          <FadeUp>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
              {t.title}
            </h2>
            <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light">
              {t.desc}
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <Video className="w-6 h-6 mb-3 text-white" />
                <h3 className="text-[0.88rem] font-semibold mb-1">{t.camTitle}</h3>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">{t.camDesc}</p>
              </div>
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <ShieldAlert className="w-6 h-6 mb-3 text-white" />
                <h3 className="text-[0.88rem] font-semibold mb-1">{t.panicTitle}</h3>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">{t.panicDesc}</p>
              </div>
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <BellRing className="w-6 h-6 mb-3 text-white" />
                <h3 className="text-[0.88rem] font-semibold mb-1">{t.sirenTitle}</h3>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">{t.sirenDesc}</p>
              </div>
              <div className="bg-black/50 border border-brand-border rounded p-5">
                <ShieldCheck className="w-6 h-6 mb-3 text-white" />
                <h3 className="text-[0.88rem] font-semibold mb-1">{t.policeTitle}</h3>
                <p className="text-[0.78rem] text-brand-gray leading-relaxed">{t.policeDesc}</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contacto"
                className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all inline-block"
              >
                {t.ctaQuote}
              </Link>
              <Link
                href="https://youtu.be/VsBzvaK4f54?si=_u1hjlzIF2IOgYhe"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-brand-white px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:border-brand-blue hover:text-brand-blue transition-all inline-block"
              >
                {t.ctaVideo}
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
