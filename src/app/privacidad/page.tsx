import type { Metadata } from "next";
import Link from "next/link";
import { SoporteHeader } from "@/components/SoporteHeader";
import { cookies } from "next/headers";
import { Locale } from "@/translations";
import { generalPrivacyTranslations } from "@/translations/privacidad";

export const metadata: Metadata = {
  title: "Política de Privacidad — Shomer Security",
  description: "Política de privacidad y protección de datos personales de Shomer Security SRL, conforme a la Ley 25.326 de Argentina.",
  robots: "index, follow",
};

export default async function PrivacidadPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const t = generalPrivacyTranslations[lang] || generalPrivacyTranslations.es;
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

          {t.sections.map((section, idx) => (
            <Section key={idx} title={section.title}>
              <p>{renderText(section.content)}</p>
            </Section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border">
          <Link href="/" className="text-sm font-mono tracking-widest uppercase text-brand-blue hover:text-white transition-colors">
            {t.backLink}
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
