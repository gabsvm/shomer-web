"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, translations } from "@/translations";

interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang = "es",
}: {
  children: React.ReactNode;
  initialLang?: Locale;
}) {
  const [language, setLanguageState] = useState<Locale>(initialLang);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    
    // Set cookie for server component rendering (next dev / build)
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Set direction of document
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    // 1. Check URL query parameters (e.g. ?lang=en)
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang") as Locale | null;
    
    if (langParam && ["es", "en", "he", "de", "ru", "pt", "it"].includes(langParam)) {
      setLanguage(langParam);
    } else {
      // 2. Check cookie
      const cookieLang = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1] as Locale | null;
        
      if (cookieLang && ["es", "en", "he", "de", "ru", "pt", "it"].includes(cookieLang)) {
        setLanguageState(cookieLang);
        document.documentElement.dir = cookieLang === "he" ? "rtl" : "ltr";
        document.documentElement.lang = cookieLang;
      }
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = translations[language] || translations["es"];
    
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to Spanish if key is missing in active language
        let fallback = translations["es"] as any;
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key; // return key if fallback also fails
          }
        }
        return typeof fallback === "string" ? fallback : key;
      }
    }
    
    return typeof current === "string" ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
