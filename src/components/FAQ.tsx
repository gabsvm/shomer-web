"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const titleMap: Record<string, React.ReactNode> = {
  es: <>Todo lo que<br /><em className="text-brand-blue not-italic">pregunta</em><br />el administrador.</>,
  en: <>Everything<br />the administrator<br /><em className="text-brand-blue not-italic">asks</em>.</>,
  he: <>כל מה<br />שהמנהל<br /><em className="text-brand-blue not-italic">שואל</em>.</>,
  de: <>Alles, was der<br />Verwalter<br /><em className="text-brand-blue not-italic">fragt</em>.</>,
  ru: <>Всё, что<br />спрашивает<br /><em className="text-brand-blue not-italic">администратор</em>.</>,
  pt: <>Tudo o que<br />o administrador<br /><em className="text-brand-blue not-italic">pergunta</em>.</>,
  it: <>Tutto quello che<br />l'amministratore<br /><em className="text-brand-blue not-italic">chiede</em>.</>
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { language } = useLanguage();
  
  const t = translations[language]?.faq || translations.es.faq;
  const faqList = t.list || [];
  const isRtl = language === "he";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black" dir={isRtl ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[860px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-14">
            {titleMap[language] || titleMap.es}
          </h2>
        </FadeUp>

        <div className="flex flex-col divide-y divide-brand-border border border-brand-border rounded overflow-hidden">
          {faqList.map(({ q, a }, i) => (
            <FadeUp key={i} delay={(i % 3) * 0.05}>
              <div className="bg-brand-surface">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full flex items-start justify-between gap-6 px-6 py-5 hover:bg-brand-surface-2 transition-colors ${isRtl ? "text-right" : "text-left"}`}
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-[0.95rem] text-brand-white leading-snug">{q}</span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border border-brand-border flex items-center justify-center text-brand-blue transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-[0.88rem] text-brand-gray-light leading-relaxed">
                    {a}
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

