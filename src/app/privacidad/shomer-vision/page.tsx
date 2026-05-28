import type { Metadata } from "next";
import Link from "next/link";
import { SoporteHeader } from "@/components/SoporteHeader";
import { cookies } from "next/headers";
import { Locale } from "@/translations";
import { appPrivacyTranslations } from "@/translations/privacidad-app";

export const metadata: Metadata = {
  title: "Política de Privacidad de Shomer Vision — Shomer Security",
  description: "Política de privacidad y protección de datos personales de la aplicación móvil Shomer Vision de Shomer Security SRL.",
  robots: "index, follow",
};

export default async function PrivacidadAppPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const t = appPrivacyTranslations[lang] || appPrivacyTranslations.es;
  const isRtl = lang === "he";

  // Helper to dynamically render email links
  const renderText = (text: string) => {
    const parts = text.split(/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g);
    return parts.map((part, index) => {
      if (part.includes("@")) {
        return (
          <a key={index} href={`mailto:${part}`} className="text-brand-blue hover:underline">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white" dir={isRtl ? "rtl" : "ltr"}>
      <SoporteHeader />

      <main className={`max-w-[760px] mx-auto px-6 py-16 md:py-24 ${isRtl ? "text-right" : "text-left"}`}>
        <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-4">{t.tag}</div>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none uppercase mb-10">
          {t.title}<br /><em className="text-brand-blue not-italic">{t.titleEm}</em>
        </h1>

        <div className="flex flex-col gap-10 text-[0.92rem] text-brand-gray-light leading-relaxed">
          <p className="text-brand-gray text-xs font-mono tracking-widest uppercase">{t.lastUpdated}</p>

          <p>{t.intro}</p>

          <Section title={t.responsibleTitle}>
            <p>
              <strong className="text-brand-white">{t.responsibleText}</strong>
            </p>
            <p>
              {t.contactText}
              <a href="mailto:info@shomer.com.ar" className="text-brand-blue hover:underline">
                info@shomer.com.ar
              </a>
            </p>
          </Section>

          <Section title={t.sections.s1.title}>
            <p>{t.sections.s1.desc}</p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div>
                <strong className="text-brand-white block mb-1">{t.sections.s1.a}</strong>
                <p className="text-sm text-brand-gray-light pl-2 border-l border-brand-border">
                  {t.sections.s1.aText}
                </p>
              </div>

              <div>
                <strong className="text-brand-white block mb-1">{t.sections.s1.b}</strong>
                <p className="text-sm text-brand-gray-light pl-2 border-l border-brand-border">
                  {t.sections.s1.bText}
                </p>
              </div>

              <div>
                <strong className="text-brand-white block mb-1">{t.sections.s1.c}</strong>
                <p className="text-sm text-brand-gray-light pl-2 border-l border-brand-border">
                  {t.sections.s1.cText}
                </p>
              </div>
            </div>

            <p className="mt-4 bg-brand-surface p-4 rounded-md border border-brand-border text-brand-gray-light text-sm font-mono">
              <strong className="text-brand-white block mb-1 uppercase text-xs tracking-wider">{t.noCollectLabel}</strong>
              {t.noCollectText}
            </p>
          </Section>

          <Section title={t.sections.s2.title}>
            <p>{t.sections.s2.desc}</p>
            <ul className="list-disc list-inside flex flex-col gap-2 mt-2 ml-2">
              {t.sections.s2.items.map((item, idx) => (
                <li key={idx}>
                  {renderText(item)}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.sections.s3.title}>
            <p>{t.sections.s3.text}</p>
          </Section>

          <Section title={t.sections.s4.title}>
            <p>{t.sections.s4.text}</p>
          </Section>

          <Section title={t.sections.s5.title}>
            <p>{t.sections.s5.text}</p>
          </Section>

          <Section title={t.sections.s6.title}>
            <p>{t.sections.s6.text1}</p>
            <p>{t.sections.s6.text2}</p>
          </Section>

          <Section title={t.sections.s7.title}>
            <p>{t.sections.s7.desc}</p>
            <ul className="list-disc list-inside flex flex-col gap-2 mt-2 ml-2 text-sm">
              {t.sections.s7.items.map((item, idx) => (
                <li key={idx}>
                  {renderText(item)}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-brand-gray">
              {t.sections.s7.footer}
            </p>
          </Section>

          <Section title={t.sections.s8.title}>
            <p>{t.sections.s8.text}</p>
          </Section>

          <Section title={t.sections.s9.title}>
            <ul className="list-disc list-inside flex flex-col gap-2 mt-2 ml-2">
              {t.sections.s9.items.map((item, idx) => (
                <li key={idx}>
                  {item.includes(" Ajustes → ") || item.includes(" Settings → ") || item.includes(" Ajustes &rarr; ") || item.includes(" Settings &rarr; ") || item.includes(" הגדרות ← ") || item.includes(" Einstellungen → ") || item.includes(" Настройки → ") || item.includes(" Impostazioni → ") ? (
                    <span>
                      {renderText(item.split(t.unvinculationLabel)[0])}
                      <code className="text-brand-blue bg-brand-surface px-1.5 py-0.5 rounded font-mono text-xs">
                        {t.unvinculationLabel}
                      </code>
                      {renderText(item.split(t.unvinculationLabel)[1] || "")}
                    </span>
                  ) : (
                    renderText(item)
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.sections.s10.title}>
            <p>{t.sections.s10.text1}</p>
            <p>{renderText(t.sections.s10.text2)}</p>
          </Section>

          <Section title={t.sections.s11.title}>
            <p>{t.sections.s11.text}</p>
          </Section>

          <Section title={t.sections.s12.title}>
            <p>{t.sections.s12.text}</p>
          </Section>

          <Section title={t.sections.s13.title}>
            <p>{t.sections.s13.text1}</p>
            <div className="bg-brand-surface p-4 rounded-md border border-brand-border">
              <strong className="text-brand-white block mb-1">{t.sections.s13.text2}</strong>
              <p>
                {t.sections.s13.text3.includes("Email:") || t.sections.s13.text3.includes("E-mail:") || t.sections.s13.text3.includes("Электронная почта:") || t.sections.s13.text3.includes("אימייל:") ? (
                  <span>
                    {t.sections.s13.text3.split("info@shomer.com.ar")[0]}
                    <a href="mailto:info@shomer.com.ar" className="text-brand-blue hover:underline">
                      info@shomer.com.ar
                    </a>
                    {t.sections.s13.text3.split("info@shomer.com.ar")[1] || ""}
                  </span>
                ) : (
                  renderText(t.sections.s13.text3)
                )}
              </p>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              {t.sections.s13.footer}
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border flex gap-6">
          <Link
            href="/"
            className="text-sm font-mono tracking-widest uppercase text-brand-blue hover:text-white transition-colors"
          >
            {t.backLink}
          </Link>
          <span className="text-brand-gray/30 text-sm font-mono">|</span>
          <Link
            href="/privacidad"
            className="text-sm font-mono tracking-widest uppercase text-brand-blue hover:text-white transition-colors"
          >
            {t.generalLink}
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl uppercase tracking-wide text-brand-white mb-3">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
