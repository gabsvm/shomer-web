"use client";

import { FadeUp } from "./FadeUp";
import { Wrench, Shield, Users, RefreshCw, BarChart, BellRing } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

const localIncludesTranslations: Record<Locale, {
  tag: string;
  title: React.ReactNode;
  desc: string;
  items: Array<{
    title: string;
    text: string;
  }>;
}> = {
  es: {
    tag: "Modelo de servicio",
    title: <>No comprás un equipo.<br /><em className="text-brand-blue not-italic">Suscribís</em> a un ecosistema.</>,
    desc: "Mientras otros te venden hardware y se desentienden, nosotros evolucionamos con vos. El valor del servicio crece con el tiempo.",
    items: [
      { title: "Instalación inicial", text: "Instalación profesional por técnico especializado, sin costo adicional. Incluye configuración completa y capacitación al administrador." },
      { title: "Soporte técnico completo", text: "Soporte ilimitado incluido en el abono. Sin 'pago aparte'. Atención directa, respuesta rápida ante cualquier inconveniente." },
      { title: "Altas y bajas de usuarios", text: "Gestión continua de alta y baja de residentes, empleados y visitas. Siempre actualizado, sin procesos manuales del administrador." },
      { title: "Actualizaciones automáticas", text: "El software evoluciona continuamente. Nuevas funciones llegan automáticamente. Lo que contratás hoy será más potente en 6 meses." },
      { title: "Gestión de accesos", text: "Control centralizado desde la base Shomer. Historial de cada acceso, reportes por período y detección de anomalías." },
      { title: "Monitoreo y control", text: "Central operativa 24 horas. Respuesta inmediata ante siniestros, apertura de emergencia y coordinación con fuerzas de seguridad." }
    ]
  },
  en: {
    tag: "Service Model",
    title: <>You are not buying equipment.<br /><em className="text-brand-blue not-italic">You subscribe</em> to an ecosystem.</>,
    desc: "While others sell you hardware and walk away, we evolve with you. The service value increases over time.",
    items: [
      { title: "Initial installation", text: "Professional installation by a specialized technician, at no additional cost. Includes complete configuration and administrator training." },
      { title: "Complete technical support", text: "Unlimited support included in the subscription fee. No extra charges. Direct assistance, quick response to any issue." },
      { title: "User management", text: "Continuous registration and removal of residents, employees, and visitors. Always updated, no manual processes for the manager." },
      { title: "Automatic updates", text: "The software continuously evolves. New features arrive automatically. What you subscribe to today will be more powerful in 6 months." },
      { title: "Access management", text: "Centralized control from the Shomer base. History of each access, reports by period, and anomaly detection." },
      { title: "Monitoring and control", text: "24-hour operations center. Immediate response to emergencies, emergency openings, and coordination with security forces." }
    ]
  },
  he: {
    tag: "מודל שירות",
    title: <>אינך קונה ציוד.<br /><em className="text-brand-blue not-italic">אתה מנוי</em> למערכת אקולוגית שלמה.</>,
    desc: "בעוד שאחרים מוכרים לך חומרה ונעלמים, אנחנו מתפתחים יחד איתך. ערך השירות גדל עם הזמן.",
    items: [
      { title: "התקנה ראשונית", text: "התקנה מקצועית על ידי טכנאי מוסמך, ללא עלות נוספת. כולל הגדרה מלאה והדרכה למנהל המערכת." },
      { title: "תמיכה טכנית מלאה", text: "תמיכה ללא הגבלה כלולה בדמי המנוי. ללא חיובים נוספים. שירות ישיר ומענה מהיר לכל בעיה." },
      { title: "ניהול משתמשים שוטף", text: "ניהול שוטף של הרשמה והסרת דיירים, עובדים ואורחים. תמיד מעודכן, ללא צורך בפעולה ידנית של מנהל הבית." },
      { title: "עדכונים אוטומטיים", text: "התוכנה מתפתחת כל הזמן. תכונות חדשות מתווספות אוטומטית. מה שאתה רוכש היום יהיה חזק בהרבה בעוד 6 חודשים." },
      { title: "ניהול גישה מרכזי", text: "ניהול מרכזי מבסיס שומר. היסטוריית גישה מלאה, דוחות תקופתיים וזיהוי חריגות." },
      { title: "ניטור ובקרה 24/7", text: "מוקד מבצעי 24 שעות ביממה. תגובה מיידית למקרי חירום, פתיחה מרחוק בעת חירום ותיאום עם כוחות הביטחון." }
    ]
  },
  de: {
    tag: "Servicemodell",
    title: <>Sie kaufen keine Ausrüstung.<br /><em className="text-brand-blue not-italic">Sie abonnieren</em> ein Ökosystem.</>,
    desc: "Während andere Ihnen Hardware verkaufen und sich dann nicht mehr kümmern, entwickeln wir uns mit Ihnen weiter. Der Wert des Dienstes wächst mit der Zeit.",
    items: [
      { title: "Erstinstallation", text: "Professionelle Installation durch spezialisierte Techniker, ohne zusätzliche Kosten. Beinhaltet die komplette Einrichtung und Schulung des Administrators." },
      { title: "Vollständiger technischer Support", text: "Unbegrenzter Support in der monatlichen Gebühr enthalten. Keine 'Extrazahlungen'. Direkte Betreuung, schnelle Antwort bei Problemen." },
      { title: "Benutzermanagement", text: "Kontinuierliche Verwaltung von An- und Abmeldungen von Bewohnern, Mitarbeitern und Besuchern. Immer aktuell, keine manuellen Prozesse für den Verwalter." },
      { title: "Automatische Updates", text: "Die software entwickelt sich ständig weiter. Neue Funktionen kommen automatisch. Was Sie heute abonnieren, ist in 6 Monaten noch leistungsfähiger." },
      { title: "Zugriffsverwaltung", text: "Zentralisiertes Management von der Shomer-Basis aus. Verlauf jedes Zugriffs, Berichte nach Zeiträumen und Erkennung von Unregelmäßigkeiten." },
      { title: "Überwachung und Kontrolle", text: "24-Stunden-Betriebszentrale. Sofortige Reaktion bei Notfällen, Notöffnung und Koordination mit Sicherheitskräften." }
    ]
  },
  ru: {
    tag: "Модель обслуживания",
    title: <>Вы покупаете не просто оборудование.<br /><em className="text-brand-blue not-italic">Вы подписываетесь</em> на экосистему.</>,
    desc: "Пока другие продают вам оборудование и уходят, мы развиваемся вместе с вами. Ценность услуги растет со временем.",
    items: [
      { title: "Первоначальная установка", text: "Профессиональная установка специалистом без дополнительной оплаты. Включает полную настройку и обучение администратора." },
      { title: "Полная техподдержка", text: "Безлимитная поддержка включена в стоимость. Никаких скрытых доплат. Прямое обслуживание, быстрое решение любых проблем." },
      { title: "Управление пользователями", text: "Постоянное добавление и удаление жильцов, сотрудников и гостей. Всегда актуальная база без ручной работы со стороны управляющего." },
      { title: "Автоматические обновления", text: "Программное обеспечение постоянно развивается. Новые функции появляются автоматически. То, что вы подключаете сегодня, станет мощнее через 6 месяцев." },
      { title: "Управление доступом", text: "Централизованное управление из базы Shomer. История каждого входа, отчеты за период и обнаружение аномалий." },
      { title: "Мониторинг и контроль", text: "Круглосуточный оперативный центр. Мгновенное реагирование на происшествия, экстренное открытие и координация со службами безопасности." }
    ]
  },
  pt: {
    tag: "Modelo de serviço",
    title: <>Não compra um equipamento.<br /><em className="text-brand-blue not-italic">Subscreve</em> a um ecossistema.</>,
    desc: "Enquanto outros vendem hardware e se desentendem, nós evoluímos consigo. O valor do serviço cresce com o tempo.",
    items: [
      { title: "Instalação inicial", text: "Instalação profissional por técnico especializado, sem custo adicional. Inclui configuração completa e treinamento do administrador." },
      { title: "Suporte técnico completo", text: "Suporte ilimitado incluído na assinatura mensal. Sem cobranças extras. Atendimento direto e resposta rápida para qualquer problema." },
      { title: "Gestão de usuários", text: "Gestão contínua de entrada e saída de residentes, funcionários e visitantes. Sempre atualizado, sem processos manuais do administrador." },
      { title: "Atualizações automáticas", text: "O software evolui continuamente. Novos recursos chegam automaticamente. O que contrata hoje será mais potente em 6 meses." },
      { title: "Gestão de acessos", text: "Controle centralizado a partir da base Shomer. Histórico de cada acesso, relatórios periódicos e detecção de anomalias." },
      { title: "Monitoramento e controle", text: "Central operacional 24 horas. Resposta imediata ante sinistros, abertura de emergência e coordenação com forças de segurança." }
    ]
  },
  it: {
    tag: "Modello di servizio",
    title: <>Non compri un dispositivo.<br /><em className="text-brand-blue not-italic">Ti abboni</em> a un ecosistema.</>,
    desc: "Mentre altri ti vendono hardware e spariscono, noi ci evolviamo con te. Il valore del servizio cresce nel tempo.",
    items: [
      { title: "Installazione iniziale", text: "Installazione professionale da parte di un tecnico specializzato, senza costi aggiuntivi. Include configurazione completa e formazione dell'amministratore." },
      { title: "Supporto tecnico completo", text: "Supporto illimitato incluso nel canone mensile. Nessun costo extra. Assistenza diretta, risposta rapida a qualsiasi problema." },
      { title: "Gestione degli utenti", text: "Gestione continua di residenti, dipendenti e visitatori. Sempre aggiornato, nessun processo manuale per l'amministratore." },
      { title: "Aggiornamenti automatici", text: "Il software si evolve continuamente. Le nuove funzionalità arrivano in automatico. Ciò che acquisti oggi sarà più potente tra 6 mesi." },
      { title: "Gestione degli accessi", text: "Controllo centralizzato dalla base Shomer. Storico di ogni accesso, report per periodo e rilevamento delle anomalie." },
      { title: "Monitoraggio e controllo", text: "Centrale operativa 24 ore su 24. Risposta immediata in caso di emergenza, apertura di sicurezza e coordinamento con le forze dell'ordine." }
    ]
  }
};

export function Includes() {
  const { language } = useLanguage();
  const isRtl = language === "he";
  const t = localIncludesTranslations[language as Locale] || localIncludesTranslations.es;

  const icons = [
    <Wrench size={20} key="wrench" />,
    <Shield size={20} key="shield" />,
    <Users size={20} key="users" />,
    <RefreshCw size={20} key="refresh" />,
    <BarChart size={20} key="chart" />,
    <BellRing size={20} key="bell" />
  ];

  return (
    <section id="incluye" className={`py-16 md:py-24 px-6 md:px-10 bg-brand-black ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            {t.title}
          </h2>
          <p className={`text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light mb-14 ${isRtl ? "mr-0 ml-auto" : ""}`}>
            {t.desc}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border rounded overflow-hidden">
          {t.items.map((item, i) => (
            <FadeUp key={item.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="bg-brand-surface p-6 sm:p-10 h-full flex flex-col">
                <div className={`w-11 h-11 rounded-full bg-brand-blue-dim border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-5 ${isRtl ? "mr-0 ml-auto" : ""}`}>
                  {icons[i]}
                </div>
                <h3 className="font-semibold text-[0.95rem] mb-3">{item.title}</h3>
                <p className="text-[0.83rem] text-brand-gray leading-relaxed">{item.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
