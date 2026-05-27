"use client";

import { useState, useEffect, useRef } from "react";
import { FadeUp } from "./FadeUp";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const localVisionTranslations: Record<string, {
  tag: string;
  title: React.ReactNode;
  desc: string;
  photoBtn: string;
  view3dBtn: string;
  operational: string;
  cta: string;
  modalTitle: string;
  modalDesc: string;
  modalClose: string;
  altImage: string;
  bannerTag: string;
  bannerTitle: string;
  bannerBtn: string;
  features: Array<{
    icon: string;
    title: string;
    text: string;
  }>;
}> = {
  es: {
    tag: "Producto estrella",
    title: <>La evolución<br />del portero <em className="text-brand-blue not-italic">eléctrico.</em></>,
    desc: "Un sistema moderno que reemplaza el portero tradicional. Comunicación inteligente, acceso sin llaves y control total desde tu celular. Sin apps. Sin descargas. Sin fricción.",
    photoBtn: "FOTO",
    view3dBtn: "3D INTERACTIVO",
    operational: "Operativo 24/7",
    cta: "Ver planes y precios",
    modalTitle: "Visualizador 3D Detallado",
    modalDesc: "Use el mouse o gestos táctiles para rotar y hacer zoom",
    modalClose: "CERRAR ✕",
    altImage: "Shomer Vision Pro instalado en edificio",
    bannerTag: "Línea VISION PRO",
    bannerTitle: "Instalado. Operativo. Invisible.",
    bannerBtn: "Ver planes",
    features: [
      { icon: "📱", title: "Sin Apps. Sin Descargas.", text: "El visitante escanea el QR y accede desde el navegador. Sin instalaciones, sin cuentas. Funciona en cualquier celular." },
      { icon: "🔐", title: "Token JWT de un solo uso", text: "Cada acceso genera un token único, encriptado, válido por 5 minutos. Imposible copiar o reutilizar." },
      { icon: "📍", title: "Geocerca GPS inteligente", text: "El acceso solo funciona dentro de 40 metros del edificio. Imposible llamar desde otra ciudad o país." },
      { icon: "👁️", title: "Verificación visual HD en vivo", text: "Ves a la persona antes de abrir. Audio bidireccional y verificación de identidad sin exponerte." }
    ]
  },
  en: {
    tag: "Flagship product",
    title: <>The evolution<br />of the <em className="text-brand-blue not-italic">intercom.</em></>,
    desc: "A modern system that replaces the traditional intercom. Smart communication, keyless access and full control from your mobile. No apps. No downloads. No friction.",
    photoBtn: "PHOTO",
    view3dBtn: "INTERACTIVE 3D",
    operational: "Operational 24/7",
    cta: "View plans and pricing",
    modalTitle: "Detailed 3D Viewer",
    modalDesc: "Use your mouse or touch gestures to rotate and zoom",
    modalClose: "CLOSE ✕",
    altImage: "Shomer Vision Pro installed in building",
    bannerTag: "VISION PRO Line",
    bannerTitle: "Installed. Operational. Invisible.",
    bannerBtn: "View plans",
    features: [
      { icon: "📱", title: "No Apps. No Downloads.", text: "Visitors scan the QR code and access from their browser. No installations, no accounts. Works on any phone." },
      { icon: "🔐", title: "One-time JWT Token", text: "Each access generates a unique, encrypted token valid for 5 minutes. Impossible to copy or reuse." },
      { icon: "📍", title: "Smart GPS Geofence", text: "Access only works within 40 meters of the building. Impossible to open from another city or country." },
      { icon: "👁️", title: "Live HD Visual Verification", text: "See the person before opening. Two-way audio and identity check without exposing yourself." }
    ]
  },
  he: {
    tag: "מוצר הדגל",
    title: <>האבולוציה<br />של <em className="text-brand-blue not-italic">האינטרקום.</em></>,
    desc: "מערכת מודרנית המחליפה את האינטרקום המסורתי. תקשורת חכמה, גישה ללא מפתח ושליטה מלאה מהנייד שלך. ללא אפליקציות. ללא הורדות. ללא חיכוך.",
    photoBtn: "תמונה",
    view3dBtn: "תלת מימד אינטראקטיבי",
    operational: "פעיל 24/7",
    cta: "ראה תוכניות ומחירים",
    modalTitle: "מציג תלת מימד מפורט",
    modalDesc: "השתמש בעכבר או במחוות מגע כדי לסובב ולבצע זום",
    modalClose: "סגור ✕",
    altImage: "שומר וויז'ן פרו מותקן בבניין",
    bannerTag: "קו וויז'ן פרו",
    bannerTitle: "מותקן. פעיל. בלתי נראה.",
    bannerBtn: "ראה תוכניות",
    features: [
      { icon: "📱", title: "ללא אפליקציות. ללא הורדות.", text: "המבקר סורק את ה-QR וניגש ישירות מהדפדפן. ללא התקנות, ללא חשבונות. עובד בכל טלפון." },
      { icon: "🔐", title: "אסימון JWT לשימוש חד-פעמי", text: "כל גישה מייצרת אסימון ייחודי ומוצפן בתוקף ל-5 דקות. בלתי ניתן להעתקה או לשימוש חוזר." },
      { icon: "📍", title: "גדר גיאוגרפית GPS חכמה", text: "הגישה עובדת רק בטווח של 40 מטרים מהבניין. לא ניתן לפתוח מעיר או מדינה אחרת." },
      { icon: "👁️", title: "אימות חזותי HD בשידור חי", text: "ראה את האדם לפני הפתיחה. שמע דו-כיווני ואימות זהות מבלי לחשוף את עצמך." }
    ]
  },
  de: {
    tag: "Flaggschiff-Produkt",
    title: <>Die Evolution<br />der <em className="text-brand-blue not-italic">Gegensprechanlage.</em></>,
    desc: "Ein modernes System, das die traditionelle Gegensprechanlage ersetzt. Intelligente Kommunikation, schlüsselloser Zugang und volle Kontrolle über Ihr Handy. Keine Apps. Keine Downloads. Keine Reibung.",
    photoBtn: "FOTO",
    view3dBtn: "INTERAKTIVES 3D",
    operational: "24/7 Betriebsbereit",
    cta: "Pläne und Preise anzeigen",
    modalTitle: "Detaillierter 3D-Viewer",
    modalDesc: "Nutzen Sie Maus oder Touch-Gesten zum Drehen und Zoomen",
    modalClose: "SCHLIESSEN ✕",
    altImage: "Shomer Vision Pro im Gebäude installiert",
    bannerTag: "VISION PRO Linie",
    bannerTitle: "Installiert. Betriebsbereit. Unsichtbar.",
    bannerBtn: "Pläne anzeigen",
    features: [
      { icon: "📱", title: "Keine Apps. Keine Downloads.", text: "Besucher scannen den QR-Code und greifen direkt über den Browser zu. Keine Installationen, keine Konten. Funktioniert auf jedem Handy." },
      { icon: "🔐", title: "Einmaliges JWT-Token", text: "Jeder Zugriff generiert ein einzigartiges, verschlüsseltes Token, das 5 Minuten lang gültig ist. Unmöglich zu kopieren oder wiederzuverwenden." },
      { icon: "📍", title: "Intelligenter GPS-Geofence", text: "Der Zugang funktioniert nur im Umkreis von 40 Metern um das Gebäude. Unmöglich, aus einer anderen Stadt oder einem anderen Land zu öffnen." },
      { icon: "👁️", title: "Live-HD-Visuelle Überprüfung", text: "Sehen Sie die Person, bevor Sie öffnen. Zwei-Wege-Audio und Identitätsprüfung, ohne sich selbst zu exponieren." }
    ]
  },
  ru: {
    tag: "Флагманский продукт",
    title: <>Эволюция<br />домофонных <em className="text-brand-blue not-italic">систем.</em></>,
    desc: "Современная система, заменяющая традиционный домофон. Интеллектуальная связь, бесключевой доступ и полный контроль с вашего мобильного телефона. Без приложений. Без скачиваний. Без трения.",
    photoBtn: "ФОТО",
    view3dBtn: "ИНТЕРАКТИВНЫЙ 3D",
    operational: "Работает 24/7",
    cta: "Посмотреть планы и цены",
    modalTitle: "Детальный 3D-просмотрщик",
    modalDesc: "Используйте мышь или сенсорные жесты для поворота и масштабирования",
    modalClose: "ЗАКРЫТЬ ✕",
    altImage: "Shomer Vision Pro установлен в здании",
    bannerTag: "Линейка VISION PRO",
    bannerTitle: "Установлен. Работает. Невидим.",
    bannerBtn: "Посмотреть планы",
    features: [
      { icon: "📱", title: "Без приложений. Без скачиваний.", text: "Посетитель сканирует QR-код и получает доступ через браузер. Без установки, без учетных записей. Работает на любом телефоне." },
      { icon: "🔐", title: "Одноразовый токен JWT", text: "Каждый доступ генерирует уникальный зашифрованный токен, действительный в течение 5 минут. Невозможно скопировать или использовать повторно." },
      { icon: "📍", title: "Умная геозона GPS", text: "Доступ работает только в радиусе 40 метров от здания. Невозможно открыть из другого города или страны." },
      { icon: "👁️", title: "Визуальная верификация в HD", text: "Вы видите человека перед открытием. Двусторонняя аудиосвязь и подтверждение личности без лишнего риска." }
    ]
  },
  pt: {
    tag: "Produto estrela",
    title: <>A evolução<br />do porteiro <em className="text-brand-blue not-italic">eletrônico.</em></>,
    desc: "Um sistema moderno que substitui o porteiro tradicional. Comunicação inteligente, acesso sem chaves e controle total a partir do seu celular. Sem apps. Sem downloads. Sem fricção.",
    photoBtn: "FOTO",
    view3dBtn: "3D INTERATIVO",
    operational: "Operativo 24/7",
    cta: "Ver planos e preços",
    modalTitle: "Visualizador 3D Detallado",
    modalDesc: "Use o mouse ou gestos de toque para girar e dar zoom",
    modalClose: "FECHAR ✕",
    altImage: "Shomer Vision Pro instalado em edifício",
    bannerTag: "Linha VISION PRO",
    bannerTitle: "Instalado. Operativo. Invisível.",
    bannerBtn: "Ver planos",
    features: [
      { icon: "📱", title: "Sem Apps. Sem Downloads.", text: "O visitante escaneia o QR e acede a partir do navegador. Sem instalações, sem contas. Funciona em qualquer celular." },
      { icon: "🔐", title: "Token JWT de uso único", text: "Cada acesso gera um token único, criptografado, válido por 5 minutos. Impossível copiar ou reutilizar." },
      { icon: "📍", title: "Geocerca GPS inteligente", text: "O acesso só funciona num raio de 40 metros do edifício. Impossível abrir a partir de outra cidade ou país." },
      { icon: "👁️", title: "Verificação visual HD ao vivo", text: "Veja a pessoa antes de abrir. Áudio bidirecional e verificação de identidade sem se expor." }
    ]
  },
  it: {
    tag: "Prodotto di punta",
    title: <>L'evoluzione<br />del citofono <em className="text-brand-blue not-italic">elettrico.</em></>,
    desc: "Un sistema moderno che sostituisce il citofono tradizionale. Comunicazione intelligente, accesso senza chiavi e controllo totale dal tuo cellulare. Senza app. Senza download. Senza attrito.",
    photoBtn: "FOTO",
    view3dBtn: "3D INTERATTIVO",
    operational: "Attivo 24/7",
    cta: "Vedi piani e prezzi",
    modalTitle: "Visualizzatore 3D Dettagliato",
    modalDesc: "Usa il mouse o i gesti touch per ruotare e ingrandire",
    modalClose: "CHIUDI ✕",
    altImage: "Shomer Vision Pro installato in edificio",
    bannerTag: "Linea VISION PRO",
    bannerTitle: "Installato. Operativo. Invisibile.",
    bannerBtn: "Vedi piani",
    features: [
      { icon: "📱", title: "Senza App. Senza Download.", text: "Il visitatore scansiona il QR e accede direttamente dal browser. Nessuna installazione, nessun account. Funziona su qualsiasi telefono." },
      { icon: "🔐", title: "Token JWT monouso", text: "Ogni accesso genera un token unico, crittografato, valido per 5 minuti. Impossibile da copiare o riutilizzare." },
      { icon: "📍", title: "Geofence GPS intelligente", text: "L'accesso funziona solo entro 40 metri dall'edificio. Impossibile aprire da un'altra città o paese." },
      { icon: "👁️", title: "Verifica visiva HD dal vivo", text: "Vedi la persona prima di aprire. Audio bidirecional e verifica dell'identità senza esporti." }
    ]
  }
};

export function Vision() {
  const [viewMode, setViewMode] = useState<"photo" | "3d">("photo");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = localVisionTranslations[language] || localVisionTranslations.es;
  const isRtl = language === "he";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        <FadeUp>
          <div className="relative">
            <div className="absolute -inset-5 bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.15),transparent_70%)] pointer-events-none" />
            <div ref={containerRef} className="aspect-[4/5] w-full rounded-lg overflow-hidden relative bg-[#0a0a0a] border border-white/5 shadow-2xl flex flex-col justify-between">
              
              {viewMode === "photo" ? (
                inView ? (
                  <video 
                    src="/Shomer vision PRO close up.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse rounded-lg" />
                )
              ) : (
                <iframe 
                  src="https://my.spline.design/untitled-bG8GVacgvfJrDgbJSSGzJ6Pu/"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg bg-[#0a0a0a]"
                  title="Portero Inteligente Shomer 3D"
                  allow="vr; gyroscope; accelerometer"
                />
              )}

              {/* Selector de Modo */}
              <div className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} z-20 flex gap-1.5 bg-black/60 border border-white/10 p-1 rounded-full backdrop-blur-sm`}>
                <button 
                  onClick={() => setViewMode("photo")}
                  className={`px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "photo" ? "bg-brand-blue text-brand-black font-bold" : "text-brand-gray hover:text-white"}`}
                >
                  {t.photoBtn}
                </button>
                <button 
                  onClick={() => setViewMode("3d")}
                  className={`px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === "3d" ? "bg-brand-blue text-brand-black font-bold shadow-[0_0_8px_rgba(0,191,255,0.4)]" : "text-brand-gray hover:text-white"}`}
                >
                  {t.view3dBtn}
                </button>
              </div>

              {/* Botón de Zoom / Pantalla Completa */}
              {viewMode === "3d" && (
                <button 
                  onClick={() => setIsFullscreen(true)}
                  className={`absolute bottom-20 ${isRtl ? "left-4" : "right-4"} z-20 bg-black/80 hover:bg-brand-blue hover:text-brand-black border border-white/10 text-white p-2.5 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95`}
                  title="Ampliar Vista 3D (Zoom)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                  </svg>
                </button>
              )}

              <div className={`absolute bottom-5 left-5 right-5 bg-black/85 border border-brand-border rounded p-4 backdrop-blur-md flex justify-between items-center z-10 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                <span className="text-xs font-mono text-brand-gray tracking-widest uppercase">
                  Línea VISION {viewMode === "3d" && "3D"}
                </span>
                <span className="flex items-center gap-2 text-xs font-mono text-brand-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_6px_#00E676] animate-pulse" />
                  {t.operational}
                </span>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col">
          <FadeUp delay={0.2}>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
              {t.title}
            </h2>
            <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light">
              {t.desc}
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-9 flex flex-col">
              {t.features.map((feature, i) => (
                <div key={i} className={`flex items-start gap-4 py-5 border-b border-brand-border last:border-b-0 ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="w-9 h-9 rounded-full bg-brand-blue-dim border border-brand-blue/30 flex items-center justify-center shrink-0 text-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold mb-1">{feature.title}</h3>
                    <p className="text-[0.83rem] text-brand-gray leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="#precios"
                className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all inline-block"
              >
                {t.cta}
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Vision Pro in-situ showcase */}
      <FadeUp delay={0.3} className="mt-16">
        <div className="relative rounded-lg overflow-hidden border border-brand-border shadow-2xl">
          <Image
            src="/images/vision-pro.png"
            alt={t.altImage}
            width={2750}
            height={1536}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className={`absolute bottom-4 left-4 right-4 md:bottom-6 md:left-8 md:right-8 flex items-end justify-between gap-4 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
            <div className={isRtl ? "text-right" : "text-left"}>
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-brand-blue uppercase mb-1">{t.bannerTag}</p>
              <p className="font-display text-lg sm:text-2xl md:text-3xl uppercase text-white leading-none">{t.bannerTitle}</p>
            </div>
            <Link
              href="#precios"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-blue text-brand-black px-5 py-2.5 rounded-sm font-bold text-xs tracking-wider uppercase hover:bg-white transition-colors shrink-0"
            >
              {t.bannerBtn}
            </Link>
          </div>
        </div>
      </FadeUp>
      </div>

      {/* Modal de Vista 3D Ampliada (Zoom Completo) */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-300">
          <div className="relative w-full h-full max-w-[1400px] max-h-[85vh] border border-white/10 rounded bg-[#0a0a0a] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200" dir="ltr">
            {/* Header */}
            <div className={`flex justify-between items-center p-4 border-b border-white/5 bg-black/40 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              <div className={isRtl ? "text-right" : "text-left"}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.modalTitle}</h3>
                <p className="text-[10px] text-brand-gray uppercase font-mono tracking-widest mt-0.5">{t.modalDesc}</p>
              </div>
              <button 
                onClick={() => setIsFullscreen(false)}
                className="text-brand-gray hover:text-white border border-white/10 hover:border-white/30 px-4 py-1.5 rounded-full transition-all text-[10px] font-mono tracking-widest uppercase bg-brand-surface/20"
              >
                {t.modalClose}
              </button>
            </div>
            {/* Content */}
            <div className="flex-1 relative bg-[#0a0a0a]">
              <iframe 
                src="https://my.spline.design/untitled-bG8GVacgvfJrDgbJSSGzJ6Pu/"
                className="w-full h-full border-0"
                title="Portero Inteligente Shomer 3D Pantalla Completa"
                allow="vr; gyroscope; accelerometer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
