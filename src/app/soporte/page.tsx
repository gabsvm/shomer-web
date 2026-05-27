import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { SoporteForm } from "@/components/SoporteForm";
import { SoporteHeader } from "@/components/SoporteHeader";
import { Locale } from "@/translations";

export const metadata: Metadata = {
  title: "Soporte Técnico para Porteros y Residentes — Shomer Security",
  description: "Canal oficial de soporte técnico y generación de tickets para porteros, encargados y usuarios de la app Shomer Security.",
  robots: "index, follow",
};

const translationsLocalPage: Record<string, {
  home: string;
  support: string;
  title: string;
  desc: string;
  back: string;
}> = {
  es: {
    home: "Inicio",
    support: "Soporte Técnico",
    title: "¿Necesitás Asistencia?",
    desc: "Generá un ticket detallando el inconveniente con tu dispositivo, app o lector biométrico y nuestro equipo operativo de control iniciará una inspección remota inmediatamente.",
    back: "← Volver al inicio"
  },
  en: {
    home: "Home",
    support: "Technical Support",
    title: "Need Assistance?",
    desc: "Generate a ticket detailing the issue with your device, app, or biometric reader, and our control operations team will launch a remote diagnostic check immediately.",
    back: "← Back to home"
  },
  he: {
    home: "דף הבית",
    support: "תמיכה טכנית",
    title: "זקוק לעזרה?",
    desc: "פתח פנייה ופרט את הבעיה במכשיר, באפליקציה או בקורא הביומטרי, וצוות הבקרה שלנו יפעיל בדיקת אבחון מרחוק באופן מיידי.",
    back: "← חזרה לדף הבית"
  },
  de: {
    home: "Startseite",
    support: "Technischer Support",
    title: "Benötigen Sie Hilfe?",
    desc: "Erstellen Sie ein Ticket mit Details zu Ihrem Problem mit dem Gerät, der App oder dem biometrischen Leser, und unser Steuerungsteam wird sofort eine Ferndiagnose starten.",
    back: "← Zurück zur Startseite"
  },
  ru: {
    home: "Главная",
    support: "Техническая поддержка",
    title: "Нужна помощь?",
    desc: "Создайте тикет с подробным описанием проблемы с вашим устройством, приложением или биометрическим считывателем, и наша техническая служба немедленно начнет удаленную диагностику.",
    back: "← Вернуться на главную"
  },
  pt: {
    home: "Início",
    support: "Suporte Técnico",
    title: "Precisa de Ajuda?",
    desc: "Abra um ticket detalhando o inconveniente com o seu dispositivo, aplicativo ou leitor biométrico e a nossa equipe de controle operacional iniciará uma inspección remota imediatamente.",
    back: "← Voltar ao início"
  },
  it: {
    home: "Home",
    support: "Supporto Tecnico",
    title: "Hai bisogno di aiuto?",
    desc: "Invia un ticket descrivendo il problema con il tuo dispositivo, l'app o il lettore biometrico, e il nostro team operativo avvierà immediatamente una diagnostica remota.",
    back: "← Torna alla home"
  }
};

export default async function SoportePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const t = translationsLocalPage[lang] || translationsLocalPage.es;
  const isRtl = lang === "he";

  return (
    <div 
      className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div>
        {/* Header with language selector button */}
        <SoporteHeader />

        {/* Main Content */}
        <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className={`max-w-[760px] mb-12 ${isRtl ? "text-right" : "text-left"}`}>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-4">{t.support}</div>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-brand-gray-light font-light leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Form and info panels */}
          <SoporteForm />

          {/* Back link */}
          <div className={`mt-16 pt-8 border-t border-brand-border ${isRtl ? "text-right" : "text-left"}`}>
            <Link 
              href="/" 
              className="text-sm font-mono tracking-widest uppercase text-brand-blue hover:text-white transition-colors"
            >
              {t.back}
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
