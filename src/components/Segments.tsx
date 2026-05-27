"use client";

import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const titleMap: Record<string, React.ReactNode> = {
  es: <>Estés donde <em className="text-brand-blue not-italic">estés</em>,<br />te cuidamos.</>,
  en: <>Wherever you <em className="text-brand-blue not-italic">are</em>,<br />we protect you.</>,
  he: <>בכל מקום <em className="text-brand-blue not-italic">שתהיה</em>,<br />אנחנו שומרים עליך.</>,
  de: <>Wo auch immer Sie <em className="text-brand-blue not-italic">sind</em>,<br />wir beschützen Sie.</>,
  ru: <>Где бы вы ни <em className="text-brand-blue not-italic">находились</em>,<br />мы вас защитим.</>,
  pt: <>Onde quer que <em className="text-brand-blue not-italic">esteja</em>,<br />nós te protegemos.</>,
  it: <>Ovunque tu <em className="text-brand-blue not-italic">sia</em>,<br />ti proteggiamo.</>
};

const tagMap: Record<string, string> = {
  es: "Para cada espacio",
  en: "For every space",
  he: "לכל חלל",
  de: "Für jeden Raum",
  ru: "Для любого пространства",
  pt: "Para cada espaço",
  it: "Per ogni spazio"
};

const ctaMap: Record<string, string> = {
  es: "Consultar servicio",
  en: "Inquire about service",
  he: "בדוק שירות",
  de: "Dienstleistung anfragen",
  ru: "Узнать о услуге",
  pt: "Consultar serviço",
  it: "Richiedi servizio"
};

const labelsMap: Record<string, Record<string, string>> = {
  consorcios: {
    es: "Residencial",
    en: "Residential",
    he: "מגורים",
    de: "Wohnbereich",
    ru: "Жилой сектор",
    pt: "Residencial",
    it: "Residenziale"
  },
  empresas: {
    es: "Corporativo",
    en: "Corporate",
    he: "עסקי",
    de: "Unternehmen",
    ru: "Корпоративный",
    pt: "Corporativo",
    it: "Corporate"
  },
  barrios: {
    es: "Residencias privadas",
    en: "Private residences",
    he: "בתי יוקרה פרטיים",
    de: "Private Residenzen",
    ru: "Частный сектор",
    pt: "Residências privadas",
    it: "Residenze private"
  },
  hoteles: {
    es: "Hotelería",
    en: "Hospitality",
    he: "מלונאות",
    de: "Hotellerie",
    ru: "Гостиничный бизнес",
    pt: "Hotelaria",
    it: "Hotellerie"
  }
};

export function Segments() {
  const { language } = useLanguage();
  const t = translations[language]?.segments || translations.es.segments;
  const isRtl = language === "he";

  const segments = [
    {
      title: t.consorcios,
      label: labelsMap.consorcios[language] || labelsMap.consorcios.es,
      desc: t.consorciosDesc,
      gradient: "from-[#00BFFF]/10 via-transparent to-transparent",
      href: "/servicios/edificios-y-consorcios",
    },
    {
      title: t.empresas,
      label: labelsMap.empresas[language] || labelsMap.empresas.es,
      desc: t.empresasDesc,
      gradient: "from-[#00E676]/10 via-transparent to-transparent",
      href: "/servicios/empresas",
    },
    {
      title: t.barrios,
      label: labelsMap.barrios[language] || labelsMap.barrios.es,
      desc: t.barriosDesc,
      gradient: "from-[#FF3B30]/10 via-transparent to-transparent",
      href: "/servicios/barrios-cerrados",
    },
    {
      title: t.hoteles,
      label: labelsMap.hoteles[language] || labelsMap.hoteles.es,
      desc: t.hotelesDesc,
      gradient: "from-purple-500/10 via-transparent to-transparent",
      href: "/servicios/hoteles",
    },
  ];

  return (
    <section id="segmentos" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">
            {tagMap[language] || tagMap.es}
          </div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-12">
            {titleMap[language] || titleMap.es}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {segments.map((segment, i) => (
            <FadeUp 
              key={segment.title} 
              direction={i % 2 === 0 ? "left" : "right"} 
              delay={i * 0.1} 
              className="h-full"
            >
              <Link 
                href={segment.href} 
                className={`group relative flex flex-col justify-between rounded overflow-hidden min-h-[240px] h-full bg-brand-surface border border-brand-border hover:border-brand-blue/60 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,191,255,0.06)] transition-all duration-300 p-8 ${isRtl ? "text-right" : "text-left"}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${segment.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="text-[0.72rem] font-mono tracking-[0.15em] uppercase text-brand-blue mb-3">
                    {segment.label}
                  </div>
                  <h3 className="font-display text-[2rem] uppercase leading-none mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {segment.title}
                  </h3>
                  <p className="text-[0.85rem] text-brand-gray group-hover:text-brand-gray-light transition-colors duration-300 leading-relaxed">
                    {segment.desc}
                  </p>
                </div>
                <div className={`relative z-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brand-blue mt-8 group-hover:gap-3 transition-all ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                  {ctaMap[language] || ctaMap.es} <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
