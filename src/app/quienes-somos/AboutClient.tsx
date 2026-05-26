"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cpu, Zap, Wifi, Eye, Radio, Lock } from "lucide-react";

interface TranslationSet {
  heroTag: string;
  heroTitle: string;
  heroDesc: string;
  manifestoTitle: string;
  manifestoSubtitle: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  roadmapTitle: string;
  roadmapSubtitle: string;
  step1Year: string;
  step1Title: string;
  step1Desc: string;
  step2Year: string;
  step2Title: string;
  step2Desc: string;
  step3Year: string;
  step3Title: string;
  step3Desc: string;
  step4Year: string;
  step4Title: string;
  step4Desc: string;
  techTitle: string;
  techSubtitle: string;
  tech1Title: string;
  tech1Desc: string;
  tech2Title: string;
  tech2Desc: string;
  tech3Title: string;
  tech3Desc: string;
  tech4Title: string;
  tech4Desc: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

const localTranslations: Record<string, TranslationSet> = {
  es: {
    heroTag: "Filosofía e Ingeniería",
    heroTitle: "Democratizando la seguridad de alta gama.",
    heroDesc: "Creemos que la tranquilidad no debe ser un privilegio de unos pocos, sino un derecho fundamental. Diseñamos e implementamos el ecosistema tecnológico de seguridad física más avanzado, robusto y accesible.",
    manifestoTitle: "El Manifiesto Shomer",
    manifestoSubtitle: "Principios de ingeniería aplicados a la protección de personas y comunidades.",
    pillar1Title: "Tecnología de Vanguardia para Todos",
    pillar1Desc: "La seguridad tradicional reserva sus mejores tecnologías para jefes de estado o corporaciones multinacionales. Nosotros cambiamos las reglas del juego: proveemos hardware y software de última generación en comodato (abono mensual) a precios razonables, permitiendo que cualquier consorcio, barrio o empresa acceda a la biometría y a la IA activa.",
    pillar2Title: "Protección Preventiva, no Reactiva",
    pillar2Desc: "La mayoría de los sistemas locales se limitan a grabar un delito o reaccionar una vez que la intrusión ocurrió. Shomer es un ecosistema lógico que opera en la nube y procesa amenazas en tiempo real. Actuamos en el perímetro mediante analíticas de IA y disuasión en vivo por operadores, deteniendo el riesgo antes de que la puerta física se abra.",
    pillar3Title: "Evolución Continua y Cero Fricción",
    pillar3Desc: "Los porteros eléctricos y llaves magnéticas tradicionales son obsoletos y costosos de actualizar. Shomer es una plataforma digital viva. Nuestro software se actualiza automáticamente desde la nube añadiendo nuevas medidas de protección de forma continua. Todo esto eliminando la necesidad de llaves físicas o de descargar aplicaciones móviles para visitantes.",
    roadmapTitle: "La Ruta de la Innovación",
    roadmapSubtitle: "Nuestra trayectoria construyendo la infraestructura de seguridad física del mañana.",
    step1Year: "FASE 01",
    step1Title: "La Vulnerabilidad Analógica",
    step1Desc: "Los consorcios y empresas dependían de llaves magnéticas fácilmente duplicables y de sistemas de portería sin trazabilidad real. La seguridad era física, reactiva y propensa a fallas humanas o coacción directa.",
    step2Year: "FASE 02",
    step2Title: "La Red de Disuasión Activa",
    step2Desc: "Lanzamos nuestro Tótem de Seguridad Virtual, integrando pantallas HD con operadores en vivo desde centrales blindadas, inmunes a la coacción y conectados de forma georredundante directamente con los protocolos policiales 911.",
    step3Year: "FASE 03",
    step3Title: "Seguridad sin Llaves ni Apps",
    step3Desc: "Revolucionamos el acceso con la Línea Shomer Vision: reconocimiento facial de ultra-alta velocidad (200ms) y QR dinámicos con geocerca GPS por hardware, eliminando aplicaciones invasivas y resolviendo la privacidad con tokens temporales de un solo uso (JWT).",
    step4Year: "FASE 04",
    step4Title: "El Ecosistema Autónomo",
    step4Desc: "Desplegamos procesamiento de inteligencia artificial en el extremo de la red (Edge computing) para permitir que los nodos tomen decisiones de forma autónoma. Tu edificio se mantiene protegido incluso ante cortes prolongados de internet o electricidad, respaldado por UPS de alta capacidad y diagnóstico de salud preventivo automatizado.",
    techTitle: "Pilares Técnicos de Confianza",
    techSubtitle: "Por qué el ecosistema de Shomer es inviolable.",
    tech1Title: "Cifrado AES-256 de Grado Militar",
    tech1Desc: "Toda la transmisión de datos, flujos de video y registros biométricos están encriptados end-to-end.",
    tech2Title: "Autonomía Energética y de Red",
    tech2Desc: "Cada dispositivo cuenta con almacenamiento local redundante y UPS de hasta 6 horas de duración.",
    tech3Title: "Diagnóstico Preventivo de Hardware",
    tech3Desc: "Nuestra nube monitorea la salud de cada nodo. Si un sensor falla, despachamos un técnico de inmediato.",
    tech4Title: "Geolocalización Inviolable",
    tech4Desc: "Las aperturas web temporales requieren confirmación GPS dentro de los 40 metros de la propiedad.",
    ctaTitle: "El Futuro de la Seguridad ya está aquí",
    ctaDesc: "Diseñá la configuración ideal para tu edificio, oficina o predio y obtené una cotización estimada al instante.",
    ctaBtn: "Configurar mi ecosistema →"
  },
  en: {
    heroTag: "Philosophy & Engineering",
    heroTitle: "Democratizing high-end security.",
    heroDesc: "We believe that peace of mind should not be a privilege for a few, but a fundamental right. We design and implement the most advanced, robust, and accessible physical security technology ecosystem.",
    manifestoTitle: "The Shomer Manifesto",
    manifestoSubtitle: "Engineering principles applied to the protection of people and communities.",
    pillar1Title: "State-of-the-Art Tech for Everyone",
    pillar1Desc: "Traditional security reserves its best technologies for heads of state or multinational corporations. We change the rules of the game: we provide state-of-the-art hardware and software in commodate (monthly fee) at reasonable rates, allowing any consortium or business to access biometrics and active AI.",
    pillar2Title: "Preventive, Not Reactive Protection",
    pillar2Desc: "Most local systems only record a crime or react once the intrusion has occurred. Shomer is a cloud-based logical ecosystem that processes threats in real-time. We act at the perimeter using AI analytics and live operator deterrence, stopping risk before the physical door opens.",
    pillar3Title: "Continuous Evolution & Zero Friction",
    pillar3Desc: "Traditional intercoms and magnetic keys are obsolete and expensive to upgrade. Shomer is a living digital platform. Our software updates automatically from the cloud, continuously adding new protection measures. All this while eliminating the need for physical keys or downloading mobile apps for visitors.",
    roadmapTitle: "The Roadmap of Innovation",
    roadmapSubtitle: "Our journey building the physical security infrastructure of tomorrow.",
    step1Year: "PHASE 01",
    step1Title: "Analog Vulnerability",
    step1Desc: "Consortiums and businesses depended on magnetic keys that were easily duplicable at any local locksmith, and intercom systems with no real traceability. Security was physical, reactive, and prone to human error or direct coercion.",
    step2Year: "PHASE 02",
    step2Title: "Active Deterrence Network",
    step2Desc: "We launched our Virtual Security Totem, integrating HD screens with live operators from armored monitoring centers, immune to coercion and connected georedundantly directly to 911 police protocols.",
    step3Year: "PHASE 03",
    step3Title: "Keyless & Appless Security",
    step3Desc: "We revolutionized access with the Shomer Vision Line: ultra-high-speed facial recognition (200ms) and dynamic QR codes with hardware GPS geofencing, eliminating invasive apps and solving privacy with single-use temporary tokens (JWT).",
    step4Year: "PHASE 04",
    step4Title: "The Autonomous Ecosystem",
    step4Desc: "We deploy artificial intelligence processing at the edge of the network (Edge computing) to allow nodes to make autonomous decisions. Your building remains protected even during prolonged network or power outages, backed by high-capacity UPS and automated preventive health diagnostics.",
    techTitle: "Technical Pillars of Trust",
    techSubtitle: "Why the Shomer ecosystem is inviolable.",
    tech1Title: "Military-Grade AES-256 Encryption",
    tech1Desc: "All data transmission, video streams, and biometric logs are encrypted end-to-end.",
    tech2Title: "Power and Network Autonomy",
    tech2Desc: "Each device has redundant local storage and UPS backup lasting up to 6 hours.",
    tech3Title: "Preventive Hardware Diagnostics",
    tech3Desc: "Our cloud monitors the health of each node. If a sensor fails, we dispatch a technician immediately.",
    tech4Title: "Inviolable Geolocalisation",
    tech4Desc: "Temporary web openings require GPS confirmation within 40 meters of the property.",
    ctaTitle: "The Future of Security is Already Here",
    ctaDesc: "Design the ideal configuration for your building, office, or property and get an estimated quote instantly.",
    ctaBtn: "Configure my ecosystem →"
  },
  he: {
    heroTag: "פילוסופיה והנדסה",
    heroTitle: "דמוקרטיזציה של אבטחה ברמה הגבוהה ביותר.",
    heroDesc: "אנו מאמינים ששקט נפשי אינו צריך להיות פריבילגיה של מעטים, אלא זכות יסוד. אנו מעצבים ומיישמים את מערכת הטכנולוגיה המתקדמת, החזקה והנגישה ביותר לאבטחה פיזית.",
    manifestoTitle: "המניפסט של שומר",
    manifestoSubtitle: "עקרונות הנדסיים המיושמים להגנה על אנשים וקהילות.",
    pillar1Title: "טכנולוגיית קצה לכולם",
    pillar1Desc: "אבטחה מסורתית שומרת את הטכנולוגיות הטובות ביותר שלה לראשי מדינות או לתאגידים רב-לאומיים. אנו משנים את חוקי המשחק: אנו מספקים חומרה ותוכנה מתקדמות במנוי חודשי במחירים סבירים, המאפשרים לכל בניין או עסק לגשת לביומטריה ובינה מלאכותית פעילה.",
    pillar2Title: "הגנה מונעת, לא תגובתית",
    pillar2Desc: "רוב המערכות המקומיות מוגבלות להקלטת עבירה או תגובה לאחר שהפריצה כבר התרחשה. שומר היא מערכת לוגית מבוססת ענן המעבדת איומים בזמן אמת. אנו פועלים בהיקף הבניין באמצעות ניתוח בינה מלאכותית והרתעה חיה על ידי מפעילים, ועוצרים את הסיכון לפני שהדלת הפיזית נפתחת.",
    pillar3Title: "אבולוציה מתמשכת ואפס חיכוך",
    pillar3Desc: "אינטרקומים ומפתחות מגנטיים מסורתיים הם מיושנים ויקרים לשדרוג. שומר היא פלטפורמה דיגיטלית חיה. התוכנה שלנו מתעדכנת אוטומטית מהענן, ומוסיפה אמצעי הגנה חדשים ללא הרף. כל זאת תוך ביטול הצורך במפתחות פיזיים או בהורדת אפליקציות לנייד עבור מבקרים.",
    roadmapTitle: "מפת הדרכים של החדשנות",
    roadmapSubtitle: "המסע שלנו בבניית תשתית האבטחה הפיזית של המחר.",
    step1Year: "שלב 01",
    step1Title: "פגיעות אנלוגית",
    step1Desc: "בניינים ועסקים היו תלויים במפתחות מגנטיים הניתנים לשעתוק בקלות ובמערכות אינטרקום ללא יכולת מעקב אמיתית. האבטחה הייתה פיזית, תגובתית וחשופה לטעויות אנוש או כפייה ישירה.",
    step2Year: "שלב 02",
    step2Title: "רשת הרתעה פעילה",
    step2Desc: "השקנו את טוטם האבטחה הווירטואלי שלנו, המשלב מסכי HD עם מפעילים בשידור חי ממוקדים מוגנים, חסינים מפני כפייה ומחוברים ישירות לפרוטוקול המשטרה 911.",
    step3Year: "שלב 03",
    step3Title: "אבטחה ללא מפתחות ואפליקציות",
    step3Desc: "חוללנו מהפכה בגישה עם ליין שומר ויז'ן: זיהוי פנים במהירות על-קולית (200 מילישניות) וקודי QR דינמיים עם גדר גיאוגרפית מבוססת GPS בחומרה, המבטלת אפליקציות פולשניות ופותרת את הפרטיות באמצעות אסימונים זמניים לשימוש חד-פעמי (JWT).",
    step4Year: "שלב 04",
    step4Title: "המערכת האוטונומית",
    step4Desc: "אנו פורסים עיבוד בינה מלאכותית בקצה הרשת (Edge computing) כדי לאפשר לצמתים לקבל החלטות באופן אוטונומי. הבניין שלך נשאר מוגן גם במהלך הפסקות רשת או חשמל ממושכות, מגובה במערכות UPS בעלות קיבולת גבוהה ואבחון בריאות מונע אוטומטי.",
    techTitle: "עמודי תווך טכניים לאמון",
    techSubtitle: "מדוע המערכת של שומר היא בלתי חדירה.",
    tech1Title: "הצפנה ברמה צבאית AES-256",
    tech1Desc: "כל העברת הנתונים, זרמי הווידאו והרישומים הביומטריים מוצפנים מקצה לקצה.",
    tech2Title: "אוטונומיה של אנרגיה ורשת",
    tech2Desc: "לכל מכשיר יש אחסון מקומי וגיבוי UPS המאפשר פעולה של עד 6 שעות ללא חשמל.",
    tech3Title: "אבחון מונע לחומרה",
    tech3Desc: "הענן שלנו מנטר את התקינות של כל צומת. אם חיישן נכשל, אנו שולחים טכנאי באופן מיידי.",
    tech4Title: "איכון גיאוגרפי בלתי ניתן לעקיפה",
    tech4Desc: "פתיחה זמנית מהנייד מחייבת אישור GPS בטווח של 40 מטרים מהנכס.",
    ctaTitle: "עתיד האבטחה כבר כאן",
    ctaDesc: "עצב את התצורה האידיאלית עבור הבניין, המשרד או הנכס שלך וקבל הצעת מחיר מוערכת באופן מיידי.",
    ctaBtn: "עצב את המערכת שלי ←"
  }
};

export function AboutClient() {
  const { language } = useLanguage();

  // Use selected language, fallback to Spanish if not present, and handle translation sets
  const t = localTranslations[language] || localTranslations.en || localTranslations.es;

  const isRtl = language === "he";

  const timelineSteps = [
    { year: t.step1Year, title: t.step1Title, desc: t.step1Desc },
    { year: t.step2Year, title: t.step2Title, desc: t.step2Desc },
    { year: t.step3Year, title: t.step3Title, desc: t.step3Desc },
    { year: t.step4Year, title: t.step4Title, desc: t.step4Desc }
  ];

  return (
    <div className={`pt-[68px] min-h-screen bg-brand-black text-brand-white relative overflow-hidden ${isRtl ? "text-right" : "text-left"}`}>
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,191,255,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,230,118,0.05),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,191,255,0.05),transparent_70%)] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-[linear-gradient(180deg,rgba(8,8,8,0.6)_0%,rgba(0,0,0,0.95)_100%)]">
        <div className="max-w-[1000px] mx-auto text-center relative">
          {/* Virtual scanning line simulating CCTV tech */}
          <div className="absolute top-[-100px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent blur-[1px] animate-scan-line-cctv" style={{ animationDuration: "6s" }} />
          
          <FadeUp>
            <div className="font-mono text-xs md:text-sm tracking-[0.25em] text-brand-blue uppercase mb-5 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_6px_#00BFFF]" />
              {t.heroTag}
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] uppercase tracking-tight mb-8">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-brand-gray-light leading-relaxed max-w-[760px] mx-auto font-light">
              {t.heroDesc}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Manifesto / Core Philosophy Section */}
      <section className="py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-brand-near-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 text-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">{t.manifestoTitle}</h2>
              <p className="text-sm font-mono tracking-widest text-brand-gray uppercase max-w-[600px] mx-auto">{t.manifestoSubtitle}</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FadeUp delay={0.1} className="h-full">
              <div className="group border border-brand-border bg-brand-black/40 p-8 sm:p-10 rounded-lg hover:border-brand-blue/40 hover:bg-brand-surface/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-brand-blue transition-colors">{t.pillar1Title}</h3>
                  <p className="text-[0.88rem] text-brand-gray leading-relaxed font-light">{t.pillar1Desc}</p>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={0.2} className="h-full">
              <div className="group border border-brand-border bg-brand-black/40 p-8 sm:p-10 rounded-lg hover:border-brand-green/40 hover:bg-brand-surface/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,230,118,0.04),transparent_70%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-brand-green transition-colors">{t.pillar2Title}</h3>
                  <p className="text-[0.88rem] text-brand-gray leading-relaxed font-light">{t.pillar2Desc}</p>
                </div>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={0.3} className="h-full">
              <div className="group border border-brand-border bg-brand-black/40 p-8 sm:p-10 rounded-lg hover:border-brand-blue/40 hover:bg-brand-surface/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-brand-blue transition-colors">{t.pillar3Title}</h3>
                  <p className="text-[0.88rem] text-brand-gray leading-relaxed font-light">{t.pillar3Desc}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Interactive Timeline / Roadmap Section (Tesla/SpaceX Style) */}
      <section className="py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-brand-black">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-20 text-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">{t.roadmapTitle}</h2>
              <p className="text-sm font-mono tracking-widest text-brand-gray uppercase max-w-[600px] mx-auto">{t.roadmapSubtitle}</p>
            </FadeUp>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Central Timeline Line */}
            <div className={`absolute top-0 bottom-0 w-[2px] bg-brand-border ${isRtl ? "right-[1px] md:right-1/2" : "left-[1px] md:left-1/2"} pointer-events-none`} />

            {/* Steps */}
            {timelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative mb-16 last:mb-0 flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  
                  {/* Outer point on the timeline */}
                  <div className={`absolute w-3 h-3 rounded-full border-2 border-brand-black bg-brand-blue top-1.5 shadow-[0_0_8px_#00BFFF] z-20 ${
                    isRtl 
                      ? "right-[-4px] md:right-1/2 md:translate-x-[5px]" 
                      : "left-[-4px] md:left-1/2 md:translate-x-[-5px]"
                  }`} />

                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-1/2 flex items-center ${isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"} text-left ${isRtl ? "text-right" : ""}`}>
                    <FadeUp direction={isEven ? (isRtl ? "right" : "left") : (isRtl ? "left" : "right")} className="w-full">
                      <div className="border border-brand-border bg-brand-surface/40 p-6 sm:p-8 rounded-lg hover:border-brand-blue/20 transition-all duration-300">
                        <div className="font-mono text-xs text-brand-blue font-bold tracking-widest mb-2">{step.year}</div>
                        <h3 className="text-lg font-bold uppercase mb-3 text-white">{step.title}</h3>
                        <p className="text-[0.83rem] text-brand-gray-light leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </FadeUp>
                  </div>

                  {/* Empty Column spacer for layout alignment (Desktop) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering specs (Verkada Style) */}
      <section className="py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-brand-near-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.2em] text-brand-green uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_6px_#00E676]" />
                TECNOLOGÍA DE SISTEMAS
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
                {t.techTitle}
              </h2>
              <p className="text-brand-gray-light text-[0.95rem] leading-relaxed mb-10 font-light max-w-[550px]">
                {t.techSubtitle} Diseñamos e implementamos nuestro propio ecosistema físico y lógico, asegurando estándares de rendimiento de nivel internacional que eliminan vulnerabilidades mecánicas y humanas.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    {t.tech1Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech1Desc}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5" />
                    {t.tech2Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech2Desc}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    {t.tech3Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech3Desc}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    {t.tech4Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech4Desc}</p>
                </div>
              </div>
            </FadeUp>

            {/* Interactive console visual asset */}
            <FadeUp delay={0.2}>
              <div className="relative border border-brand-border rounded-lg bg-brand-black p-4 md:p-6 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,191,255,0.06),transparent_50%)]" />
                <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                    <span className="font-mono text-[9px] text-brand-gray tracking-wider uppercase">Operatividad en tiempo real (Nube)</span>
                  </div>
                  <span className="font-mono text-[9px] text-brand-blue tracking-widest">SHOMER COMMAND</span>
                </div>
                <div className="aspect-[16/10] bg-brand-near-black rounded border border-white/5 relative overflow-hidden flex flex-col justify-end p-4">
                  {/* Background node simulation */}
                  <div className="absolute inset-0 opacity-15 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <circle cx="50" cy="50" r="30" className="text-brand-blue" />
                      <line x1="50" y1="0" x2="50" y2="100" className="text-brand-blue" />
                      <line x1="0" y1="50" x2="100" y2="50" className="text-brand-blue" />
                      <circle cx="50" cy="50" r="2" className="text-brand-green fill-brand-green animate-ping" />
                    </svg>
                  </div>
                  <div className="relative z-10 font-mono text-[8px] sm:text-[10px] text-brand-gray-light flex flex-col gap-1">
                    <span className="text-brand-green">● SYSTEM STATE: NOMINAL</span>
                    <span>● LOCAL DATABASE SYNCHRONIZED</span>
                    <span>● VPN PROTOCOL TUNNEL: OK (12ms)</span>
                    <span className="text-brand-blue">● EDGE COMPILING SUCCESSFUL (100%)</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-brand-black">
        <div className="max-w-[900px] mx-auto border border-brand-blue rounded-lg p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-[linear-gradient(135deg,var(--color-brand-surface),rgba(0,191,255,0.05))] relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.1),transparent_70%)] pointer-events-none" />
          <div>
            <h3 className="font-display text-4xl uppercase mb-3 tracking-wide">{t.ctaTitle}</h3>
            <p className="text-sm text-brand-gray-light leading-relaxed max-w-[450px]">
              {t.ctaDesc}
            </p>
          </div>
          <Link href="/#configurador" className="whitespace-nowrap bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all">
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
