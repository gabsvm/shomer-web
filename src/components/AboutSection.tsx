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
