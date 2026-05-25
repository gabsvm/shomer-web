"use client";

import { FadeUp } from "./FadeUp";
import { AlertTriangle, DollarSign, Unlock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problema" className="py-16 md:py-24 px-6 md:px-10 bg-brand-near-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">
            {t("problem.tag")}
          </div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            {t("problem.title1")}<br />{t("problem.title2")}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border rounded-md overflow-hidden mt-14">
            
            <div className="bg-brand-surface p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <AlertTriangle className="w-12 h-12 mb-6 text-brand-red" />
              <div className="font-display text-2xl uppercase mb-3 tracking-wide">{t("problem.card1Title")}</div>
              <p className="text-sm text-brand-gray leading-relaxed">
                {t("problem.card1Desc")}
              </p>
            </div>

            <div className="bg-brand-surface p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <DollarSign className="w-12 h-12 mb-6 text-brand-red" />
              <div className="font-display text-2xl uppercase mb-3 tracking-wide">{t("problem.card2Title")}</div>
              <p className="text-sm text-brand-gray leading-relaxed">
                {t("problem.card2Desc")}
              </p>
            </div>

            <div className="bg-brand-surface p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <Unlock className="w-12 h-12 mb-6 text-brand-red" />
              <div className="font-display text-2xl uppercase mb-3 tracking-wide">{t("problem.card3Title")}</div>
              <p className="text-sm text-brand-gray leading-relaxed">
                {t("problem.card3Desc")}
              </p>
            </div>

          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-12 p-6 md:px-8 border border-brand-red/20 rounded-sm bg-brand-red/5 flex items-center gap-4">
            <CheckCircle2 className="shrink-0 text-brand-red w-6 h-6" />
            <p className="text-brand-gray-light leading-relaxed text-[0.95rem]">
              {t("problem.footerText")}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
