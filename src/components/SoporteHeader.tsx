"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";
import { useRouter } from "next/navigation";

const homeLabels: Record<string, string> = {
  es: "Inicio",
  en: "Home",
  he: "דף הבית",
  de: "Startseite",
  ru: "Главная",
  pt: "Início",
  it: "Home"
};

const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "he", label: "עב" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
  { code: "pt", label: "PT" },
  { code: "it", label: "IT" },
];

export function SoporteHeader() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const isRtl = language === "he";

  return (
    <header className="border-b border-brand-border px-4 sm:px-6 md:px-10 py-4 sm:py-5">
      <div className={`max-w-[1200px] mx-auto flex items-center justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
        <Link href="/" className="inline-block hover:opacity-85 transition-opacity">
          <Image 
            src="/images/SHOMER.png" 
            alt="Shomer Security" 
            width={120} 
            height={44} 
            className="h-8 sm:h-9 w-auto object-contain" 
            priority
          />
        </Link>
        
        <div className={`flex items-center gap-3 sm:gap-6 ${isRtl ? "flex-row-reverse" : ""}`}>
          <Link 
            href="/" 
            className="text-xs font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
          >
            {homeLabels[language] || homeLabels.es}
          </Link>

          {/* Language Selector Toggle */}
          <div className={`relative flex items-center gap-1.5 bg-brand-surface border border-brand-border rounded px-2 py-1 ${isRtl ? "flex-row-reverse" : ""}`}>
            <Globe className="w-3.5 h-3.5 text-brand-blue" />
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value as Locale);
                router.refresh();
              }}
              aria-label="Seleccionar idioma"
              className="bg-transparent text-brand-white text-xs font-mono font-medium focus:outline-none cursor-pointer uppercase border-none pr-1"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-brand-black text-brand-white">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
