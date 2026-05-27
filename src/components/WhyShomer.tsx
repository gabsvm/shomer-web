"use client";

import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

const localWhyTranslations: Record<Locale, {
  tag: string;
  title: React.ReactNode;
  desc: string;
  leftCardTitle: string;
  leftCardDesc: string;
  headerSystem: string;
  headerTrad: string;
  headerShomer: string;
  tableSwipeText: string;
  rows: Array<{
    label: string;
    trad: string;
    shomer: string;
  }>;
}> = {
  es: {
    tag: "La diferencia",
    title: <>Por qué<br /><em className="text-brand-blue not-italic">Shomer</em><br />gana.</>,
    desc: "El QR de WhatsApp que usás hoy es una puerta abierta. Cualquiera puede copiar el código, compartirlo o usarlo desde donde quiera. Shomer cierra esa brecha con infraestructura real.",
    leftCardTitle: "Invulnerable.",
    leftCardDesc: "Doble validación de seguridad: Token JWT de un solo uso + Geocerca GPS de 40 metros. Lo que ningún QR genérico puede ofrecer.",
    headerSystem: "Sistema",
    headerTrad: "QR Tradicional",
    headerShomer: "Shomer",
    tableSwipeText: "← Deslizá para ver →",
    rows: [
      { label: "Clonable", trad: "Sí", shomer: "Nunca" },
      { label: "Expira automáticamente", trad: "No", shomer: "5 minutos" },
      { label: "Control de ubicación", trad: "No", shomer: "GPS 40m" },
      { label: "Registro de accesos", trad: "No", shomer: "Completo" },
      { label: "Llamadas remotas", trad: "Sí", shomer: "Bloqueadas" },
      { label: "App requerida", trad: "Depende", shomer: "Nunca" },
      { label: "Números expuestos", trad: "Sí", shomer: "Nunca" }
    ]
  },
  en: {
    tag: "The difference",
    title: <>Why<br /><em className="text-brand-blue not-italic">Shomer</em><br />wins.</>,
    desc: "The WhatsApp QR code you use today is an open door. Anyone can copy the code, share it, or use it from wherever they want. Shomer closes that gap with real infrastructure.",
    leftCardTitle: "Invulnerable.",
    leftCardDesc: "Double security validation: One-time JWT Token + 40-meter GPS Geofence. What no generic QR code can offer.",
    headerSystem: "System",
    headerTrad: "Traditional QR",
    headerShomer: "Shomer",
    tableSwipeText: "← Swipe to view →",
    rows: [
      { label: "Clonable", trad: "Yes", shomer: "Never" },
      { label: "Expires automatically", trad: "No", shomer: "5 minutes" },
      { label: "Location control", trad: "No", shomer: "GPS 40m" },
      { label: "Access log", trad: "No", shomer: "Full" },
      { label: "Remote calls", trad: "Yes", shomer: "Blocked" },
      { label: "App required", trad: "Depends", shomer: "Never" },
      { label: "Numbers exposed", trad: "Yes", shomer: "Never" }
    ]
  },
  he: {
    tag: "ההבדל",
    title: <>למה<br /><em className="text-brand-blue not-italic">שומר</em><br />מנצחת.</>,
    desc: "קוד ה-QR של WhatsApp שבו אתה משתמש כיום הוא דלת פתוחה. כל אחד יכול להעתיק את הקוד, לשתף אותו או להשתמש בו מכל מקום. שומר סוגרת את הפער הזה עם תשתית אמיתית.",
    leftCardTitle: "חסין לחלוטין.",
    leftCardDesc: "אימות אבטחה כפול: אסימון JWT לשימוש חד-פעמי + גדר גיאוגרפית GPS של 40 מטרים. משהו שאף קוד QR גנרי אינו יכול להציע.",
    headerSystem: "מערכת",
    headerTrad: "QR מסורתי",
    headerShomer: "שומר",
    tableSwipeText: "← החלק לצפייה →",
    rows: [
      { label: "ניתן לשכפול", trad: "כן", shomer: "לעולם לא" },
      { label: "פג תוקף אוטומטית", trad: "לא", shomer: "5 דקות" },
      { label: "בקרת מיקום", trad: "לא", shomer: "GPS 40 מ'" },
      { label: "רישום כניסות", trad: "לא", shomer: "מלא" },
      { label: "שיחות מרחוק", trad: "כן", shomer: "חסום" },
      { label: "נדרשת אפליקציה", trad: "תלוי", shomer: "לעולם לא" },
      { label: "מספרים חשופים", trad: "כן", shomer: "לעולם לא" }
    ]
  },
  de: {
    tag: "Der Unterschied",
    title: <>Warum<br /><em className="text-brand-blue not-italic">Shomer</em><br />gewinnt.</>,
    desc: "Der WhatsApp-QR-Code, den Sie heute verwenden, ist eine offene Tür. Jeder kann den Code kopieren, teilen oder von überall aus verwenden. Shomer schließt diese Lücke mit echter Infrastruktur.",
    leftCardTitle: "Unangreifbar.",
    leftCardDesc: "Doppelte Sicherheitsvalidierung: Einmaliger JWT-Token + 40-Meter-GPS-Geofence. Was kein generischer QR-Code bieten kann.",
    headerSystem: "System",
    headerTrad: "Traditioneller QR",
    headerShomer: "Shomer",
    tableSwipeText: "← Wischen zum Anzeigen →",
    rows: [
      { label: "Klonbar", trad: "Ja", shomer: "Nie" },
      { label: "Läuft automatisch ab", trad: "Nein", shomer: "5 Minuten" },
      { label: "Standortkontrolle", trad: "Nein", shomer: "GPS 40m" },
      { label: "Zugriffsprotokoll", trad: "Nein", shomer: "Vollständig" },
      { label: "Fernanrufe", trad: "Ja", shomer: "Blockiert" },
      { label: "App erforderlich", trad: "Hängt ab", shomer: "Nie" },
      { label: "Nummern freigegeben", trad: "Ja", shomer: "Nie" }
    ]
  },
  ru: {
    tag: "Разница",
    title: <>Почему<br /><em className="text-brand-blue not-italic">Shomer</em><br />выигрывает.</>,
    desc: "QR-код WhatsApp, который вы используете сегодня, — это открытая дверь. Любой может скопировать код, поделиться им или использовать его откуда угодно. Shomer устраняет эту уязвимость с помощью реальной инфраструктуры.",
    leftCardTitle: "Неуязвимый.",
    leftCardDesc: "Двойная проверка безопасности: одноразовый токен JWT + GPS-геозона на 40 метров. То, что не может предложить ни один обычный QR-код.",
    headerSystem: "Система",
    headerTrad: "Обычный QR",
    headerShomer: "Shomer",
    tableSwipeText: "← Прокрутите для просмотра →",
    rows: [
      { label: "Копируемый", trad: "Да", shomer: "Никогда" },
      { label: "Автоматически истекает", trad: "Нет", shomer: "5 минут" },
      { label: "Контроль геопозиции", trad: "Нет", shomer: "GPS 40м" },
      { label: "Регистрация доступа", trad: "Нет", shomer: "Полный" },
      { label: "Удаленные вызовы", trad: "Да", shomer: "Заблокировано" },
      { label: "Требуется приложение", trad: "Зависит", shomer: "Никогда" },
      { label: "Номера открыты", trad: "Да", shomer: "Никогда" }
    ]
  },
  pt: {
    tag: "A diferença",
    title: <>Por que<br /><em className="text-brand-blue not-italic">Shomer</em><br />vence.</>,
    desc: "O QR do WhatsApp que você usa hoje é uma porta aberta. Qualquer pessoa pode copiar o código, compartilhá-lo ou usá-lo de onde quiser. Shomer fecha essa lacuna com infraestrutura real.",
    leftCardTitle: "Invulnerável.",
    leftCardDesc: "Dupla validação de segurança: Token JWT de uso único + Geocerca GPS de 40 metros. O que nenhum código QR genérico pode oferecer.",
    headerSystem: "Sistema",
    headerTrad: "QR Tradicional",
    headerShomer: "Shomer",
    tableSwipeText: "← Deslize para ver →",
    rows: [
      { label: "Clonável", trad: "Sim", shomer: "Nunca" },
      { label: "Expira automaticamente", trad: "Não", shomer: "5 minutos" },
      { label: "Controle de localização", trad: "Não", shomer: "GPS 40m" },
      { label: "Registro de acessos", trad: "Não", shomer: "Completo" },
      { label: "Chamadas remotas", trad: "Sim", shomer: "Bloqueadas" },
      { label: "App necessária", trad: "Depende", shomer: "Nunca" },
      { label: "Números expostos", trad: "Sim", shomer: "Nunca" }
    ]
  },
  it: {
    tag: "La differenza",
    title: <>Perché<br /><em className="text-brand-blue not-italic">Shomer</em><br />vince.</>,
    desc: "Il QR di WhatsApp che usi oggi è una porta aperta. Chiunque può copiare il codice, condividerlo o usarlo da dove vuole. Shomer colma questo divario con un'infrastruttura reale.",
    leftCardTitle: "Invulnerabile.",
    leftCardDesc: "Doppia convalida di sicurezza: Token JWT monouso + Geofence GPS di 40 metri. Ciò che nessun codice QR generico può offrire.",
    headerSystem: "Sistema",
    headerTrad: "QR Tradizionale",
    headerShomer: "Shomer",
    tableSwipeText: "← Scorri per vedere →",
    rows: [
      { label: "Clonabile", trad: "Sì", shomer: "Mai" },
      { label: "Scade automaticamente", trad: "No", shomer: "5 minuti" },
      { label: "Controllo posizione", trad: "No", shomer: "GPS 40m" },
      { label: "Registro degli accessi", trad: "No", shomer: "Completo" },
      { label: "Chiamate remote", trad: "Sì", shomer: "Bloccate" },
      { label: "App richiesta", trad: "Dipende", shomer: "Mai" },
      { label: "Numeri esposti", trad: "Sì", shomer: "Mai" }
    ]
  }
};

export function WhyShomer() {
  const { language } = useLanguage();
  const isRtl = language === "he";
  const t = localWhyTranslations[language as Locale] || localWhyTranslations.es;

  return (
    <section id="porque" className={`py-16 md:py-24 px-6 md:px-10 bg-brand-surface ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <FadeUp direction={isRtl ? "right" : "left"} duration={0.8}>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            {t.title}
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed font-light mb-8">
            {t.desc}
          </p>
          <div className="p-6 border border-brand-blue/30 rounded bg-brand-blue/5 hover:border-brand-blue hover:shadow-[0_4px_25px_rgba(0,191,255,0.04)] transition-all duration-300">
            <h3 className="font-display text-2xl uppercase text-brand-blue mb-2 tracking-wide">{t.leftCardTitle}</h3>
            <p className="text-[0.88rem] text-brand-gray-light leading-relaxed">
              {t.leftCardDesc}
            </p>
          </div>
        </FadeUp>

        <FadeUp direction={isRtl ? "left" : "right"} delay={0.2} duration={0.8} className="overflow-x-auto">
          <p className="text-[0.72rem] font-mono text-brand-gray tracking-widest uppercase mb-3 sm:hidden">{t.tableSwipeText}</p>
          <div className="min-w-[600px] border border-brand-border rounded overflow-hidden">
            <div className={`grid grid-cols-3 bg-brand-surface-2 border-b border-brand-border text-[0.72rem] font-mono tracking-widest uppercase text-center ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className={`p-4 text-brand-gray ${isRtl ? "text-right" : "text-left"}`}>{t.headerSystem}</div>
              <div className="p-4 text-brand-red">{t.headerTrad}</div>
              <div className="p-4 text-brand-blue">{t.headerShomer}</div>
            </div>
            
            {t.rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-brand-border last:border-b-0 text-center text-[0.83rem] text-brand-gray-light ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>{row.label}</div>
                <div className="p-4 text-brand-red">{row.trad}</div>
                <div className="p-4 text-brand-green">{row.shomer}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
