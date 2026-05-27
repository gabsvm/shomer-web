"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

const localVideoTranslations: Record<Locale, {
  tag: string;
  title: React.ReactNode;
  playBtn: string;
  iframeTitle: string;
}> = {
  es: {
    tag: "En funcionamiento",
    title: <>Mirá cómo<br />funciona <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Reproducir video",
    iframeTitle: "Shomer Security - En funcionamiento"
  },
  en: {
    tag: "In Operation",
    title: <>See how<br /><em className="text-brand-blue not-italic">Shomer</em> works.</>,
    playBtn: "Play video",
    iframeTitle: "Shomer Security - In Operation"
  },
  he: {
    tag: "בפעולה",
    title: <>ראה כיצד<br /><em className="text-brand-blue not-italic">שומר</em> עובדת.</>,
    playBtn: "נגן סרטון",
    iframeTitle: "שומר אבטחה - בפעולה"
  },
  de: {
    tag: "In Betrieb",
    title: <>Sehen Sie wie<br /><em className="text-brand-blue not-italic">Shomer</em> funktioniert.</>,
    playBtn: "Video abspielen",
    iframeTitle: "Shomer Security - In Betrieb"
  },
  ru: {
    tag: "В работе",
    title: <>Посмотрите, как<br />работает <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Воспроизвести видео",
    iframeTitle: "Shomer Security - В работе"
  },
  pt: {
    tag: "Em funcionamento",
    title: <>Veja como<br />funciona <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Reproduzir vídeo",
    iframeTitle: "Shomer Security - Em funcionamento"
  },
  it: {
    tag: "In funzione",
    title: <>Guarda come<br />funziona <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Riproduci video",
    iframeTitle: "Shomer Security - In funzione"
  }
};

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const { language } = useLanguage();
  const isRtl = language === "he";
  const t = localVideoTranslations[language as Locale] || localVideoTranslations.es;

  return (
    <section id="video" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black text-center" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 justify-center flex">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-10 text-center">
            {t.title}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="max-w-[900px] mx-auto relative rounded overflow-hidden border border-brand-border aspect-video shadow-2xl bg-brand-surface">
            {playing ? (
              <iframe
                src="https://www.youtube.com/embed/VsBzvaK4f54?autoplay=1"
                title={t.iframeTitle}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-5 group bg-brand-surface hover:bg-brand-surface-2 transition-colors"
                aria-label={t.playBtn}
              >
                <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center shadow-[0_0_40px_rgba(0,191,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray group-hover:text-brand-blue transition-colors">
                  {t.playBtn}
                </span>
              </button>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
