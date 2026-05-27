"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { ShieldCheck, Sparkles, Orbit } from "lucide-react";

const sectionTranslations: Record<string, {
  tag: string;
  title: string;
  desc: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  cta: string;
}> = {
  es: {
    tag: "Filosofía Shomer",
    title: "Democratizando la seguridad de alta gama.",
    desc: "Creemos que la tranquilidad no debe ser un privilegio de unos pocos, sino un derecho fundamental. Diseñamos e implementamos el ecosistema tecnológico de seguridad física más avanzado y accesible del mercado, protegiendo a las personas donde viven y trabajan.",
    pillar1Title: "Tecnología para Todos",
    pillar1Desc: "Brindamos hardware y software de última generación en comodato (abono mensual) a precios razonables, permitiendo que cualquier consorcio, barrio o empresa acceda a biometría de punta.",
    pillar2Title: "Prevención en Tiempo Real",
    pillar2Desc: "Operamos un ecosistema lógico en la nube con analíticas de inteligencia artificial y operadores en vivo en central blindada que disuaden amenazas antes de que la puerta física se abra.",
    pillar3Title: "Evolución sin Llaves",
    pillar3Desc: "Actualizamos de forma continua el software sin costo adicional para el consorcio. Un sistema libre de llaves magnéticas obsoletas y libre de aplicaciones invasivas para visitas.",
    cta: "Conocé nuestra visión e ingeniería →"
  },
  en: {
    tag: "Shomer Philosophy",
    title: "Democratizing high-end security.",
    desc: "We believe that peace of mind should not be a privilege for a few, but a fundamental right. We design and implement the most advanced and accessible physical security tech ecosystem on the market, protecting people where they live and work.",
    pillar1Title: "Tech for Everyone",
    pillar1Desc: "We provide state-of-the-art hardware and software in comodate (monthly fee) at reasonable rates, allowing any consortium, neighborhood, or business to access advanced biometrics.",
    pillar2Title: "Real-Time Prevention",
    pillar2Desc: "We operate a cloud logical ecosystem with AI analytics and live operators in armored monitoring centers that deter threats before the physical door opens.",
    pillar3Title: "Keyless Evolution",
    pillar3Desc: "We continuously update software at no additional cost to the consortium. A system free of obsolete magnetic keys and free of invasive visitor apps.",
    cta: "Learn about our vision and engineering →"
  },
  he: {
    tag: "הפילוסופיה של שומר",
    title: "דמוקרטיזציה של אבטחה ברמה הגבוהה ביותר.",
    desc: "אנו מאמינים ששקט נפשי אינו צריך להיות פריבילגיה של מעטים, אלא זכות יסוד. אנו מעצבים ומיישמים את מערכת הטכנולוגיה המתקדמת והנגישה ביותר לאבטחה פיזית בשוק, המגנה על אנשים במקום מגוריהם ועבודתם.",
    pillar1Title: "טכנולוגיה לכולם",
    pillar1Desc: "אנו מספקים חומרה ותוכנה מתקדמות במנוי חודשי במחירים סבירים, המאפשרים לכל בניין, שכונה או עסק לגשת לביומטריה מתקדמת.",
    pillar2Title: "מניעה בזמן אמת",
    pillar2Desc: "אנו מפעילים מערכת לוגית בענן עם ניתוח בינה מלאכותית ומפעילים בשידור חי ממוקדים מוגנים המרתיעים איומים לפני שהדלת הפיזית נפתחת.",
    pillar3Title: "אבולוציה ללא מפתחות",
    pillar3Desc: "אנו מעדכנים תוכנה באופן רציף ללא עלות נוספת לבניין. מערכת נקייה ממפתחות מגנטיים מיושנים ומאפליקציות פולשניות למבקרים.",
    cta: "למד על החזון וההנדסה שלנו ←"
  },
  de: {
    tag: "Shomer-Philosophie",
    title: "Demokratisierung von High-End-Sicherheit.",
    desc: "Wir glauben, dass Seelenfrieden kein Privileg für wenige sein sollte, sondern ein Grundrecht. Wir entwerfen und implementieren das fortschrittlichste und zugänglichste physische Sicherheits-Ökosystem auf dem Markt, um Menschen dort zu schützen, wo sie leben und arbeiten.",
    pillar1Title: "Technologie für alle",
    pillar1Desc: "Wir bieten modernste Hardware und Software unter einem Mietvertrag (monatliche Gebühr) zu günstigen Preisen an, sodass jede Eigentümergemeinschaft, jedes Viertel oder jedes Unternehmen Zugang zu fortschrittlicher Biometrie erhält.",
    pillar2Title: "Prävention in Echtzeit",
    pillar2Desc: "Wir betreiben ein logisches Ökosystem in der Cloud mit KI-Analysen und Live-Operatoren in gepanzerten Überwachungszentren, die Bedrohungen abwehren, bevor sich die physische Tür öffnet.",
    pillar3Title: "Schlüssellose Entwicklung",
    pillar3Desc: "Wir aktualisieren die Software kontinuierlich und ohne zusätzliche Kosten für die Eigentümergemeinschaft. Ein System frei von veralteten Magnetschlüsseln und invasiven Besucher-Apps.",
    cta: "Erfahren Sie mehr über unsere Vision und unser Engineering →"
  },
  ru: {
    tag: "Философия Shomer",
    title: "Демократизация высокотехнологичной безопасности.",
    desc: "Мы верим, что душевное спокойствие должно быть не привилегией немногих, а фундаментальным правом. Мы проектируем и внедряем самую передовую и доступную технологическую экосистему физической безопасности на рынке, защищая людей там, где они живут и работают.",
    pillar1Title: "Технологии для каждого",
    pillar1Desc: "Мы предоставляем современное оборудование и программное обеспечение в пользование (ежемесячная подписка) по разумным тарифам, позволяя любому консорциуму, району или бизнесу получить доступ к передовой биометрии.",
    pillar2Title: "Предотвращение в реальном времени",
    pillar2Desc: "Мы управляем облачной логической экосистемой с ИИ-аналитикой и операторами в реальном времени в бронированных центрах мониторинга, которые сдерживают угрозы до открытия физической двери.",
    pillar3Title: "Эволюция без ключей",
    pillar3Desc: "Мы постоянно обновляем программное обеспечение без дополнительных затрат для консорциума. Система, свободная от устаревших магнитных ключей и инвазивных приложений для посетителей.",
    cta: "Узнайте о нашем видении и инженерии →"
  },
  pt: {
    tag: "Filosofia Shomer",
    title: "Democratizando a segurança de alta gama.",
    desc: "Acreditamos que a tranquilidade não deve ser um privilégio de poucos, mas um direito fundamental. Projetamos e implementamos o ecossistema de segurança física mais avançado e acessível do mercado, protegendo as pessoas onde vivem e trabalham.",
    pillar1Title: "Tecnologia para todos",
    pillar1Desc: "Fornecemos hardware e software de última geração em comodato (mensalidade) a taxas razoáveis, permitindo que qualquer condomínio, bairro ou empresa tenha acesso a biometria avançada.",
    pillar2Title: "Prevenção em tempo real",
    pillar2Desc: "Operamos um ecossistema lógico na nuvem com análise de IA e operadores em tempo real em centrais blindadas que impedem ameaças antes que a porta física se abra.",
    pillar3Title: "Evolução sem chaves",
    pillar3Desc: "Atualizamos continuamente o software sem custo adicional para o condomínio. Um sistema livre de chaves magnéticas obsoletas e de aplicações invasivas para visitantes.",
    cta: "Conheça a nossa visão e engenharia →"
  },
  it: {
    tag: "Filosofia Shomer",
    title: "Democratizzare la sicurezza di fascia alta.",
    desc: "Crediamo che la tranquillità non debba essere un privilegio di pochi, ma un diritto fondamentale. Progettiamo e implementiamo l'ecosistema tecnologico di sicurezza fisica più avanzato e accessibile sul mercato, proteggendo le persone dove vivono e lavorano.",
    pillar1Title: "Tecnologia per tutti",
    pillar1Desc: "Forniamo hardware e software di ultima generazione in comodato (canone mensile) a tariffe ragionevoli, consentendo a qualsiasi condominio, quartiere o azienda di accedere a sistemi biometrici avanzati.",
    pillar2Title: "Prevenzione in tempo reale",
    pillar2Desc: "Gestiamo un ecosistema logico in cloud con analisi IA e operatori in tempo reale in centri di monitoraggio blindati che scoraggiano le minacce prima che la porta fisica si apra.",
    pillar3Title: "Evoluzione senza chiavi",
    pillar3Desc: "Aggiorniamo continuamente il software senza costi aggiuntivi per il condominio. Un sistema privo di chiavi magnetiche obsolete e di app invasive per i visitatori.",
    cta: "Scopri la nostra visione e la nostra ingegneria →"
  }
};

export function AboutSection() {
  const { language } = useLanguage();
  const t = sectionTranslations[language] || sectionTranslations.en || sectionTranslations.es;
  
  const isRtl = language === "he";

  return (
    <section id="nosotros" className="py-20 md:py-28 px-6 md:px-10 bg-brand-black border-t border-brand-border relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-[-100px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,230,118,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeUp direction={isRtl ? "left" : "right"}>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {t.tag}
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-brand-gray-light leading-relaxed font-light mb-10 max-w-[580px]">
              {t.desc}
            </p>
            <div>
              <Link
                href="/quienes-somos"
                className="inline-block border border-brand-blue/30 text-brand-blue hover:text-brand-black hover:bg-brand-blue px-8 py-3.5 rounded-sm font-semibold text-sm tracking-wider uppercase transition-all"
              >
                {t.cta}
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6">
            <FadeUp delay={0.1}>
              <div className="border border-brand-border bg-brand-surface/40 p-6 rounded hover:border-brand-blue/20 transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-1.5">{t.pillar1Title}</h3>
                  <p className="text-[0.82rem] text-brand-gray leading-relaxed font-light">{t.pillar1Desc}</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="border border-brand-border bg-brand-surface/40 p-6 rounded hover:border-brand-green/20 transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0">
                  <Orbit className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-1.5">{t.pillar2Title}</h3>
                  <p className="text-[0.82rem] text-brand-gray leading-relaxed font-light">{t.pillar2Desc}</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="border border-brand-border bg-brand-surface/40 p-6 rounded hover:border-brand-blue/20 transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-1.5">{t.pillar3Title}</h3>
                  <p className="text-[0.82rem] text-brand-gray leading-relaxed font-light">{t.pillar3Desc}</p>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
