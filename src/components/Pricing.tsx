"use client";

import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

const localPricingTranslations: Record<Locale, {
  tag: string;
  title: React.ReactNode;
  desc: string;
  mostChosen: string;
  ivaPlus: string;
  perMonth: string;
  ctaButton: string;
  disclaimer: string;
  ctaBannerTag: string;
  ctaBannerTitle: string;
  ctaBannerDesc: string;
  ctaBannerBtn: string;
  plans: Array<{
    name: string;
    subtitle: string;
    price: string;
    featured?: boolean;
    features: string[];
    notIncluded: string[];
  }>;
}> = {
  es: {
    tag: "Línea VISION",
    title: <>Planes claros.<br /><em className="text-brand-blue not-italic">Sin sorpresas.</em></>,
    desc: "Abono mensual todo incluido. Sin costos ocultos, sin mantenimientos aparte, sin sorpresas.",
    mostChosen: "MÁS ELEGIDO",
    ivaPlus: "+ IVA",
    perMonth: "/ mes · abono mensual",
    ctaButton: "Consultar plan",
    disclaimer: "Todos los planes incluyen instalación, mantenimiento, soporte técnico y actualizaciones de software sin costo adicional. El equipo va en comodato. Presupuesto final sujeto a relevamiento técnico en sitio.",
    ctaBannerTag: "Diseño del Ecosistema",
    ctaBannerTitle: "¿Tu proyecto requiere una configuración a medida?",
    ctaBannerDesc: "Utilizá nuestro Configurador 3D interactivo más abajo para proyectar tu edificio, oficina o barrio cerrado en tiempo real con las cámaras, lectores biométricos y analíticas de inteligencia artificial necesarias.",
    ctaBannerBtn: "Diseñar en 3D →",
    plans: [
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
    ]
  },
  en: {
    tag: "VISION Line",
    title: <>Clear plans.<br /><em className="text-brand-blue not-italic">No surprises.</em></>,
    desc: "All-inclusive monthly subscription. No hidden costs, no separate maintenance fees, no surprises.",
    mostChosen: "MOST CHOSEN",
    ivaPlus: "+ VAT",
    perMonth: "/ month · monthly subscription",
    ctaButton: "Inquire about plan",
    disclaimer: "All plans include professional installation, maintenance, technical support, and software updates at no additional cost. Equipment is provided on a lease basis. Final quote is subject to on-site technical inspection.",
    ctaBannerTag: "Ecosystem Design",
    ctaBannerTitle: "Does your project require a custom configuration?",
    ctaBannerDesc: "Use our interactive 3D Configurator below to design your building, office, or gated community in real time with the cameras, biometric readers, and AI analytics needed.",
    ctaBannerBtn: "Design in 3D →",
    plans: [
      {
        name: "Vision",
        subtitle: "Smart two-way communication and HD visual verification.",
        price: "199,000",
        features: [
          "Integrated HD 1080p camera",
          "Dynamic app-less QR for visitors",
          "One-touch call to resident",
          "Private internal WebRTC communication",
          "Notifications to multiple users"
        ],
        notIncluded: [
          "Physical Face ID access",
          "Time/day-based permissions"
        ]
      },
      {
        name: "Vision Pro",
        subtitle: "All of the above plus Face ID, scheduled permissions, and monitored openings.",
        price: "390,000",
        featured: true,
        features: [
          "Everything in Vision",
          "Keyless biometric Face ID access",
          "Smart time and day-based permissions",
          "Monitored emergency openings",
          "Full logs by person and period",
          "Automatic staff check-in/out"
        ],
        notIncluded: []
      },
      {
        name: "Vision Pro Duo",
        subtitle: "Double hardware for entry and exit. Full control of people flow.",
        price: "550,000",
        features: [
          "Everything in Vision Pro",
          "Dual entry + exit hardware",
          "Full control of access flow",
          "Ideal for high-traffic buildings",
          "Differentiated entry/exit logs",
          "Advanced centralized management"
        ],
        notIncluded: []
      }
    ]
  },
  he: {
    tag: "קו וויז'ן",
    title: <>תוכניות ברורות.<br /><em className="text-brand-blue not-italic">בלי הפתעות.</em></>,
    desc: "מנוי חודשי הכל כלול. ללא עלויות נסתרות, ללא דמי תחזוקה נפרדים, בלי הפתעות.",
    mostChosen: "הכי פופולרי",
    ivaPlus: "+ מע\"מ",
    perMonth: "/ חודש · תשלום חודשי",
    ctaButton: "שאל על המסלול",
    disclaimer: "כל התוכניות כוללות התקנה מקצועית, תחזוקה, תמיכה טכנית ועדכוני תוכנה ללא עלות נוספת. הציוד מסופק בהשאלה. הצעת המחיר הסופית כפופה לבדיקה טכنية במקום.",
    ctaBannerTag: "עיצוב המערכת",
    ctaBannerTitle: "האם הפרויקט שלך דורש תצורה מותאמת אישית?",
    ctaBannerDesc: "השתמש בקונפיגורטור התלת-ממד האינטראקטיבי שלנו למטה כדי לעצב את הבניין, המשרד או השכונה הסגורה שלך בזמן אמת עם המצלמות, הקוראים הביומטריים וניתוחי ה-AI הנדרשים.",
    ctaBannerBtn: "עצב בתלת-ממד ←",
    plans: [
      {
        name: "Vision",
        subtitle: "תקשורת דו-כיוונית חכמה ואימות חזותי HD.",
        price: "199,000",
        features: [
          "מצלמת HD 1080p מובנית",
          "קוד QR דינמי ללא אפליקציה למבקרים",
          "שיחה בלחיצה אחת לדייר",
          "תקשורת WebRTC פנימית פרטית",
          "התראות למספר משתמשים"
        ],
        notIncluded: [
          "גישת Face ID פיזית",
          "הרשאות מבוססות שעה/יום"
        ]
      },
      {
        name: "Vision Pro",
        subtitle: "כל האמור לעיל בתוספת Face ID, הרשאות מתוזמנות ופתיחות מנוטרות.",
        price: "390,000",
        featured: true,
        features: [
          "כל מה שכלול ב-Vision",
          "גישת Face ID ביומטרית ללא מפתח",
          "הרשאות חכמות מבוססות שעה ויום",
          "פתיחת חירום מנוטרת",
          "יומן דוחות מלא לפי אדם ותקופה",
          "רישום נוכחות אוטומטי לצוות"
        ],
        notIncluded: []
      },
      {
        name: "Vision Pro Duo",
        subtitle: "ציוד כפול לכניסה ויציאה. שליטה מלאה על זרימת האנשים.",
        price: "550,000",
        features: [
          "כל מה שכלול ב-Vision Pro",
          "ציוד כפול כניסה + יציאה",
          "שליטה מלאה על זרימת הגישה",
          "אידיאלי לבניינים עם תנועה רבה",
          "דוחות נפרדים לכניסה ויציאה",
          "ניהול ריכוזי מתקדם"
        ],
        notIncluded: []
      }
    ]
  },
  de: {
    tag: "VISION Line",
    title: <>Klare Pläne.<br /><em className="text-brand-blue not-italic">Keine Überraschungen.</em></>,
    desc: "All-inclusive-Monatsabonnement. Keine versteckten Kosten, keine separaten Wartungsgebühren, keine Überraschungen.",
    mostChosen: "AM MEISTEN GEWÄHLT",
    ivaPlus: "+ MwSt.",
    perMonth: "/ Monat · Monatsabonnement",
    ctaButton: "Plan anfragen",
    disclaimer: "Alle Pläne beinhalten professionelle Installation, Wartung, technischen Support und Software-Updates ohne zusätzliche Kosten. Die Ausrüstung wird leihweise zur Verfügung gestellt. Das endgültige Angebot hängt von einer technischen Inspektion vor Ort ab.",
    ctaBannerTag: "Ecosystem Design",
    ctaBannerTitle: "Erfordert Ihr Projekt eine maßgeschneiderte Konfiguration?",
    ctaBannerDesc: "Nutzen Sie unseren interaktiven 3D-Konfigurator unten, um Ihr Gebäude, Büro oder Ihre geschlossene Wohnanlage in Echtzeit mit den erforderlichen Kameras, biometrischen Lesern und KI-Analysen zu planen.",
    ctaBannerBtn: "In 3D planen →",
    plans: [
      {
        name: "Vision",
        subtitle: "Intelligente Zwei-Wege-Kommunikation und visuelle HD-Verifizierung.",
        price: "199.000",
        features: [
          "Integrierte 1080p HD-Kamera",
          "Dynamischer QR-Code ohne App für Besucher",
          "Ein-Tasten-Anruf beim Bewohner",
          "Private interne WebRTC-Kommunikation",
          "Benachrichtigungen an mehrere Benutzer"
        ],
        notIncluded: [
          "Physischer Face ID-Zugang",
          "Zeit-/tagesbasierte Berechtigungen"
        ]
      },
      {
        name: "Vision Pro",
        subtitle: "Alles oben Genannte plus Face ID, zeitgesteuerte Berechtigungen und überwachte Öffnungen.",
        price: "390.000",
        featured: true,
        features: [
          "Alles von Vision",
          "Schlüsselloser biometrischer Face ID-Zugang",
          "Intelligente zeit- und tagesbasierte Berechtigungen",
          "Überwachte Notöffnungen",
          "Vollständiges Protokoll nach Person und Zeitraum",
          "Automatische Zeiterfassung des Personals"
        ],
        notIncluded: []
      },
      {
        name: "Vision Pro Dúo",
        subtitle: "Doppelte Geräte für Eingang und Ausgang. Volle Kontrolle über den Personenfluss.",
        price: "550.000",
        features: [
          "Alles von Vision Pro",
          "Duales Gerät Einlass + Auslass",
          "Volle Kontrolle über den Zugangsfluss",
          "Ideal für Gebäude mit hohem Verkehrsaufkommen",
          "Differenzierte Protokolle für Ein-/Ausgang",
          "Fortgeschrittene zentralisierte Verwaltung"
        ],
        notIncluded: []
      }
    ]
  },
  ru: {
    tag: "Линия VISION",
    title: <>Четкие планы.<br /><em className="text-brand-blue not-italic">Без сюрпризов.</em></>,
    desc: "Ежемесячная подписка «все включено». Никаких скрытых расходов, никаких отдельных плат за обслуживание, никаких сюрпризов.",
    mostChosen: "ПОПУЛЯРНЫЙ",
    ivaPlus: "+ НДС",
    perMonth: "/ мес · ежемесячный тариф",
    ctaButton: "Запросить тариф",
    disclaimer: "Все тарифы включают профессиональную установку, обслуживание, техническую поддержку и обновления программного обеспечения без дополнительной оплаты. Оборудование предоставляется в аренду. Окончательное предложение зависит от технического осмотра на месте.",
    ctaBannerTag: "Дизайн Экосистемы",
    ctaBannerTitle: "Требуется индивидуальная конфигурация для вашего проекта?",
    ctaBannerDesc: "Используйте наш интерактивный 3D-конфигуратор ниже, чтобы спроектировать ваше здание, офис или закрытый поселок в реальном времени с необходимыми камерами, биометрическими считывателями и аналитикой ИИ.",
    ctaBannerBtn: "Спроектировать в 3D →",
    plans: [
      {
        name: "Vision",
        subtitle: "Умная двусторонняя связь и визуальная верификация в формате HD.",
        price: "199.000",
        features: [
          "Встроенная камера HD 1080p",
          "Динамический QR-код без приложений для гостей",
          "Вызов жильца в одно касание",
          "Приватная внутренняя связь WebRTC",
          "Уведомления для нескольких пользователей"
        ],
        notIncluded: [
          "Физический доступ по Face ID",
          "Разрешения по дням и времени"
        ]
      },
      {
        name: "Vision Pro",
        subtitle: "Все вышеперечисленное плюс доступ по Face ID, разрешения по времени и контролируемые открытия.",
        price: "390.000",
        featured: true,
        features: [
          "Все возможности Vision",
          "Бесключевой биометрический доступ Face ID",
          "Умные разрешения по времени и дням недели",
          "Контролируемые аварийные открытия",
          "Полная история посещений по людям и периодам",
          "Автоматический учет рабочего времени персонала"
        ],
        notIncluded: []
      },
      {
        name: "Vision Pro Dúo",
        subtitle: "Двойной комплект оборудования на вход и выход. Полный контроль потока людей.",
        price: "550.000",
        features: [
          "Все возможности Vision Pro",
          "Двойной комплект (вход + выход)",
          "Полный контроль потока посетителей",
          "Идеально для зданий с интенсивным трафиком",
          "Раздельные отчеты на вход и выход",
          "Расширенное централизованное управление"
        ],
        notIncluded: []
      }
    ]
  },
  pt: {
    tag: "Linha VISION",
    title: <>Planos claros.<br /><em className="text-brand-blue not-italic">Sem surpresas.</em></>,
    desc: "Assinatura mensal tudo incluído. Sem custos ocultos, sem taxas de manutenção separadas, sem surpresas.",
    mostChosen: "MAIS ESCOLHIDO",
    ivaPlus: "+ IVA",
    perMonth: "/ mês · assinatura mensal",
    ctaButton: "Consultar plano",
    disclaimer: "Todos os planos incluem instalação profissional, manutenção, suporte técnico e atualizações de software sem custo adicional. O equipamento é fornecido em regime de comodato. O orçamento final está sujeito a vistoria técnica no local.",
    ctaBannerTag: "Design do Ecossistema",
    ctaBannerTitle: "O seu projeto requer uma configuração sob medida?",
    ctaBannerDesc: "Utilize o nosso Configurador 3D interativo abaixo para projetar o seu edifício, escritório ou condomínio fechado em tempo real com as câmeras, leitores biométricos e análises de inteligência artificial necessárias.",
    ctaBannerBtn: "Projetar em 3D →",
    plans: [
      {
        name: "Vision",
        subtitle: "Comunicação inteligente bidirecional e verificação visual HD.",
        price: "199.000",
        features: [
          "Câmera HD 1080p integrada",
          "QR dinâmico sem app para visitantes",
          "Chamada de um toque ao residente",
          "Comunicação interna privada WebRTC",
          "Notificações para múltiplos usuários"
        ],
        notIncluded: [
          "Acesso físico Face ID",
          "Permissões por horário/dia"
        ]
      },
      {
        name: "Vision Pro",
        subtitle: "Tudo o anterior mais Face ID, permissões por horário e aberturas monitoradas.",
        price: "390.000",
        featured: true,
        features: [
          "Tudo o de Vision",
          "Acesso biométrico Face ID sem chaves nem cartões",
          "Permissões inteligentes por horário e dia",
          "Aberturas de emergência monitoradas",
          "Histórico completo por pessoa e período",
          "Controle automático de ponto da equipe"
        ],
        notIncluded: []
      },
      {
        name: "Vision Pro Dúo",
        subtitle: "Equipamento duplo para entrada e saída. Controle total do fluxo de pessoas.",
        price: "550.000",
        features: [
          "Tudo o de Vision Pro",
          "Equipamento duplo entrada + saída",
          "Controle total do fluxo de acessos",
          "Ideal para edifícios de alto tráfego",
          "Relatórios diferenciados entrada/saída",
          "Gestão centralizada avançada"
        ],
        notIncluded: []
      }
    ]
  },
  it: {
    tag: "Linea VISION",
    title: <>Piani chiari.<br /><em className="text-brand-blue not-italic">Senza sorprese.</em></>,
    desc: "Abbonamento mensile tutto incluso. Nessun costo nascosto, nessuna spesa di manutenzione separata, nessuna sorpresa.",
    mostChosen: "PIÙ SCELTO",
    ivaPlus: "+ IVA",
    perMonth: "/ mese · abbonamento mensile",
    ctaButton: "Richiedi informazioni",
    disclaimer: "Tutti i piani includono installazione professionale, manutenzione, supporto tecnico e aggiornamenti software senza costi aggiuntivi. L'attrezzatura viene fornita in comodato d'uso. Preventivo finale soggetto a sopralluogo tecnico in loco.",
    ctaBannerTag: "Design dell'Ecosistema",
    ctaBannerTitle: "Il tuo progetto richiede una configurazione personalizzata?",
    ctaBannerDesc: "Usa il nostro Configuratore 3D interattivo qui sotto per progettare il tuo edificio, ufficio o quartiere chiuso in tempo reale con le telecamere, i lettori biometrici e le analisi di intelligenza artificiale necessarie.",
    ctaBannerBtn: "Progetta in 3D →",
    plans: [
      {
        name: "Vision",
        subtitle: "Comunicazione intelligente bidirezionale e verifica visiva HD.",
        price: "199.000",
        features: [
          "Telecamera HD 1080p integrata",
          "QR dinamico senza app per visitatori",
          "Chiamata a un tocco per il residente",
          "Comunicazione interna WebRTC privata",
          "Notifiche a più utenti"
        ],
        notIncluded: [
          "Accesso fisico Face ID",
          "Permessi per orario/giorno"
        ]
      },
      {
        name: "Vision Pro",
        subtitle: "Tutto il precedente più Face ID, permessi orari e aperture monitorate.",
        price: "390.000",
        featured: true,
        features: [
          "Tutto quello di Vision",
          "Accesso biometrico Face ID senza chiavi o tessere",
          "Permessi intelligenti per orario e giorno",
          "Aperture di emergenza monitorate",
          "Registro completo per persona e periodo",
          "Rilevazione automatica delle presenze del personale"
        ],
        notIncluded: []
      },
      {
        name: "Vision Pro Dúo",
        subtitle: "Doppio dispositivo per ingresso e uscita. Controllo totale del flusso di persone.",
        price: "550.000",
        features: [
          "Tutto quello di Vision Pro",
          "Dispositivo doppio ingresso + uscita",
          "Controllo totale del flusso di accessi",
          "Ideale per edifici ad alto traffico",
          "Report differenziati entrata/uscita",
          "Gestione centralizzata avanzata"
        ],
        notIncluded: []
      }
    ]
  }
};

export function Pricing() {
  const { language } = useLanguage();
  const isRtl = language === "he";
  const t = localPricingTranslations[language as Locale] || localPricingTranslations.es;

  return (
    <section id="precios" className={`py-24 px-6 md:px-10 bg-brand-near-black ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            {t.title}
          </h2>
          <p className={`text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light ${isRtl ? "mr-0 ml-auto" : ""}`}>
            {t.desc}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {t.plans.map((plan, i) => (
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
                    {t.mostChosen}
                  </div>
                )}
                
                <h3 className="font-display text-3xl uppercase tracking-wider mb-2">{plan.name}</h3>
                <p className="text-[0.83rem] text-brand-gray mb-7 leading-relaxed min-h-[60px]">{plan.subtitle}</p>
                
                <div className={`font-display text-5xl text-brand-blue leading-none mb-1 ${isRtl ? "flex flex-row-reverse justify-end gap-1.5" : ""}`}>
                  <span>${plan.price}</span> <span className="text-base text-brand-gray align-top">{t.ivaPlus}</span>
                </div>
                <div className="text-xs text-brand-gray font-mono mb-8">{t.perMonth}</div>
                
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-start gap-2.5 text-[0.85rem] text-brand-gray-light leading-relaxed ${isRtl ? "flex-row-reverse" : ""}`}>
                      <span className="text-brand-green font-bold shrink-0 mt-[1px]">✓</span> <span>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} className={`flex items-start gap-2.5 text-[0.85rem] text-brand-gray leading-relaxed opacity-60 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <span className="text-brand-gray font-bold shrink-0 mt-[1px]">×</span> <span>{f}</span>
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
                  {t.ctaButton}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-8 p-6 border border-brand-border rounded-sm bg-brand-blue/5 text-[0.85rem] text-brand-gray-light leading-relaxed text-center">
            {t.disclaimer}
          </div>
        </FadeUp>

        {/* 3D Configurator CTA banner instead of a second redundant calculator */}
        <FadeUp delay={0.4}>
          <div className={`mt-20 border border-brand-border/40 rounded-lg p-8 md:p-12 bg-[linear-gradient(135deg,var(--color-brand-surface)_0%,rgba(0,191,255,0.02)_100%)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_4px_30px_rgba(0,191,255,0.01)] ${isRtl ? "md:flex-row-reverse" : ""}`}>
            <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
            <div className={`max-w-[650px] relative z-10 ${isRtl ? "text-right" : "text-left"}`}>
              <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.ctaBannerTag}</div>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-3 leading-none">{t.ctaBannerTitle}</h3>
              <p className="text-sm text-brand-gray-light leading-relaxed font-light">
                {t.ctaBannerDesc}
              </p>
            </div>
            <Link
              href="#configurador"
              className="relative z-10 whitespace-nowrap bg-transparent border border-brand-blue/60 text-brand-blue px-8 py-3.5 rounded-sm font-bold text-xs tracking-wider uppercase hover:bg-brand-blue hover:text-brand-black hover:border-brand-blue transition-all"
            >
              {t.ctaBannerBtn}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
