"use client";

import { useState, useEffect } from "react";
import { FadeUp } from "./FadeUp";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

type Status = "idle" | "sending" | "ok" | "error";

const sidebarTranslations: Record<string, {
  monitoringLabel: string;
  monitoringSub: string;
  commercialLabel: string;
  hrLabel: string;
  whatsappBtn: string;
  successTitle: string;
  successDesc: string;
  successBtn: string;
  errorMsg: string;
  errorEmailLink: string;
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  spaceTypeLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitBtn: string;
  submittingText: string;
}> = {
  es: {
    monitoringLabel: "Central de Monitoreo",
    monitoringSub: "Operativo 24/7",
    commercialLabel: "Área Comercial",
    hrLabel: "Trabajá con nosotros",
    whatsappBtn: "Escribinos por WhatsApp",
    successTitle: "Consulta enviada",
    successDesc: "Te contactamos a la brevedad.",
    successBtn: "Enviar otra consulta →",
    errorMsg: "Hubo un error al enviar. Escribinos directamente a ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "Nombre *",
    phoneLabel: "Teléfono *",
    emailLabel: "Email *",
    spaceTypeLabel: "Tipo de espacio",
    messageLabel: "Consulta",
    namePlaceholder: "Tu nombre",
    phonePlaceholder: "+54 11 ...",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Contanos sobre tu espacio...",
    submitBtn: "Enviar consulta",
    submittingText: "Enviando..."
  },
  en: {
    monitoringLabel: "Monitoring Center",
    monitoringSub: "Operational 24/7",
    commercialLabel: "Commercial Division",
    hrLabel: "Careers / HR",
    whatsappBtn: "Chat via WhatsApp",
    successTitle: "Inquiry sent",
    successDesc: "We'll get back to you shortly.",
    successBtn: "Send another inquiry →",
    errorMsg: "Error sending message. Write directly to ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "Full Name *",
    phoneLabel: "Phone *",
    emailLabel: "Email *",
    spaceTypeLabel: "Space type",
    messageLabel: "Inquiry",
    namePlaceholder: "Your name",
    phonePlaceholder: "Phone number",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell us about your space...",
    submitBtn: "Send Inquiry",
    submittingText: "Sending..."
  },
  he: {
    monitoringLabel: "מוקד בקרה",
    monitoringSub: "פעיל 24/7",
    commercialLabel: "מחלקה מסחרית",
    hrLabel: "דרושים / קריירה",
    whatsappBtn: "כתבו לנו ב-WhatsApp",
    successTitle: "הפנייה נשלחה",
    successDesc: "נחזור אליך בהקדם.",
    successBtn: "שלח פנייה נוספת ←",
    errorMsg: "אירעה שגיאה בשליחה. כתוב לנו ישירות אל ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "שם מלא *",
    phoneLabel: "טלפון *",
    emailLabel: "אימייל *",
    spaceTypeLabel: "סוג הנכס",
    messageLabel: "פנייה",
    namePlaceholder: "השם שלך",
    phonePlaceholder: "מספר טלפון",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "ספר לנו על הנכס שלך...",
    submitBtn: "שלח פנייה",
    submittingText: "שולח..."
  },
  de: {
    monitoringLabel: "Überwachungszentrale",
    monitoringSub: "24/7 in Betrieb",
    commercialLabel: "Vertrieb & Verkauf",
    hrLabel: "Karriere / HR",
    whatsappBtn: "Schreiben Sie uns auf WhatsApp",
    successTitle: "Anfrage gesendet",
    successDesc: "Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
    successBtn: "Weitere Anfrage senden →",
    errorMsg: "Fehler beim Senden. Schreiben Sie uns direkt unter ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "Name *",
    phoneLabel: "Telefon *",
    emailLabel: "E-Mail *",
    spaceTypeLabel: "Art der Immobilie",
    messageLabel: "Anfrage",
    namePlaceholder: "Ihr Name",
    phonePlaceholder: "Telefonnummer",
    emailPlaceholder: "ihre@email.com",
    messagePlaceholder: "Erzählen Sie uns von Ihrer Immobilie...",
    submitBtn: "Anfrage senden",
    submittingText: "Wird gesendet..."
  },
  ru: {
    monitoringLabel: "Центр мониторинга",
    monitoringSub: "Работает 24/7",
    commercialLabel: "Коммерческий отдел",
    hrLabel: "Вакансии / HR",
    whatsappBtn: "Напишите нам в WhatsApp",
    successTitle: "Запрос отправлен",
    successDesc: "Мы свяжемся с вами в ближайшее время.",
    successBtn: "Отправить еще один запрос →",
    errorMsg: "Ошибка при отправке. Напишите нам на ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "Имя *",
    phoneLabel: "Телефон *",
    emailLabel: "E-mail *",
    spaceTypeLabel: "Тип недвижимости",
    messageLabel: "Сообщение",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "Номер телефона",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Расскажите о вашем объекте...",
    submitBtn: "Отправить запрос",
    submittingText: "Отправка..."
  },
  pt: {
    monitoringLabel: "Central de Monitoramento",
    monitoringSub: "Operação 24/7",
    commercialLabel: "Área Comercial",
    hrLabel: "Trabalhe conosco",
    whatsappBtn: "Escreva-nos pelo WhatsApp",
    successTitle: "Consulta enviada",
    successDesc: "Entraremos em contato em breve.",
    successBtn: "Enviar outra consulta →",
    errorMsg: "Erro ao enviar. Escreva-nos diretamente para ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "Nome completo *",
    phoneLabel: "Telefone *",
    emailLabel: "E-mail *",
    spaceTypeLabel: "Tipo de propriedade",
    messageLabel: "Consulta",
    namePlaceholder: "Seu nome",
    phonePlaceholder: "Número de telefone",
    emailPlaceholder: "seu@email.com",
    messagePlaceholder: "Conte-nos sobre o seu espaço...",
    submitBtn: "Enviar consulta",
    submittingText: "Enviando..."
  },
  it: {
    monitoringLabel: "Centrale Operativa",
    monitoringSub: "Attiva 24/7",
    commercialLabel: "Ufficio Commerciale",
    hrLabel: "Lavora con noi",
    whatsappBtn: "Scrivici su WhatsApp",
    successTitle: "Richiesta inviata",
    successDesc: "Ti ricontatteremo a breve.",
    successBtn: "Invia un'altra richiesta →",
    errorMsg: "Errore durante l'invio. Scrivici direttamente a ",
    errorEmailLink: "info@shomer.com.ar",
    nameLabel: "Nome completo *",
    phoneLabel: "Telefono *",
    emailLabel: "E-mail *",
    spaceTypeLabel: "Tipo di proprietà",
    messageLabel: "Richiesta",
    namePlaceholder: "Il tuo nome",
    phonePlaceholder: "Numero di telefono",
    emailPlaceholder: "tua@email.com",
    messagePlaceholder: "Raccontaci del tuo spazio...",
    submitBtn: "Invia richiesta",
    submittingText: "Invio in corso..."
  }
};

const contactTitleMap: Record<string, React.ReactNode> = {
  es: <>Cotizá tu<br /><em className="text-brand-blue not-italic">servicio</em><br />ahora.</>,
  en: <>Get your<br /><em className="text-brand-blue not-italic">quote</em><br />now.</>,
  he: <>קבל הצעת<br /><em className="text-brand-blue not-italic">מחיר</em><br />עכשיו.</>,
  de: <>Erhalten Sie Ihr<br /><em className="text-brand-blue not-italic">Angebot</em><br />jetzt.</>,
  ru: <>Получите свой<br /><em className="text-brand-blue not-italic">расчет</em><br />сейчас.</>,
  pt: <>Solicite seu<br /><em className="text-brand-blue not-italic">orçamento</em><br />agora.</>,
  it: <>Richiedi il tuo<br /><em className="text-brand-blue not-italic">preventivo</em><br />ora.</>
};

const getSpaceTypeLabel = (val: string, lang: string): string => {
  const map: Record<string, Record<string, string>> = {
    "Edificio / Consorcio": {
      es: "Edificio / Consorcio",
      en: "Building / Property Group",
      he: "בניין משותף",
      de: "Wohngebäude / Konsortium",
      ru: "Жилое здание / Консорциум",
      pt: "Edifício / Condomínio",
      it: "Edificio / Condominio"
    },
    "Empresa": {
      es: "Empresa",
      en: "Company / Office",
      he: "חברה / משרד",
      de: "Unternehmen / Büro",
      ru: "Компания / Офис",
      pt: "Empresa / Escritório",
      it: "Azienda / Ufficio"
    },
    "Country / Barrio Cerrado": {
      es: "Country / Barrio Cerrado",
      en: "Gated Community / Neighborhood",
      he: "שכונה סגורה / יישוב",
      de: "Gated Community",
      ru: "Закрытый поселок",
      pt: "Condomínio Fechado / Bairro",
      it: "Quartiere privato / Gated Community"
    },
    "Hotel": {
      es: "Hotel / Airbnb",
      en: "Hotel / Airbnb",
      he: "מלון / Airbnb",
      de: "Hotel / Airbnb",
      ru: "Отель / Airbnb",
      pt: "Hotel / Airbnb",
      it: "Hotel / Airbnb"
    },
    "Otro": {
      es: "Otro",
      en: "Other",
      he: "אחר",
      de: "Andere",
      ru: "Другое",
      pt: "Outro",
      it: "Altro"
    }
  };
  return map[val]?.[lang] || val;
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [tipoEspacio, setTipoEspacio] = useState("Edificio / Consorcio");
  const [consulta, setConsulta] = useState("");
  const { language } = useLanguage();
  
  const isRtl = language === "he";
  const t = translations[language]?.contact || translations.es.contact;
  const s = sidebarTranslations[language] || sidebarTranslations.es;

  useEffect(() => {
    const handleSetQuote = (e: Event) => {
      const customEvent = e as CustomEvent<{
        tipoEspacio: string;
        consulta: string;
      }>;
      if (customEvent.detail) {
        setTipoEspacio(customEvent.detail.tipoEspacio);
        setConsulta(customEvent.detail.consulta);
      }
    };
    window.addEventListener("shomer-set-quote", handleSetQuote);
    return () => {
      window.removeEventListener("shomer-set-quote", handleSetQuote);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
        setConsulta("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-6 md:px-10 bg-brand-surface" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            {contactTitleMap[language] || contactTitleMap.es}
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed font-light mb-12">
            {t.desc}
          </p>

          <div className="flex flex-col gap-0">
            {[
              { icon: "📞", label: s.monitoringLabel, value: "+54 11 2364-8511", sub: s.monitoringSub },
              { icon: "💼", label: s.commercialLabel, value: "+54 11 7999-4444", sub: "info@shomer.com.ar" },
              { icon: "👥", label: s.hrLabel, value: "rrhh@shomer.com.ar", sub: "" }
            ].map((item, i) => (
              <div key={i} className={`py-6 border-b border-brand-border last:border-b-0 flex items-start gap-4 ${isRtl ? "text-right" : "text-left"}`}>
                <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-1">{item.label}</div>
                  <div className="text-[0.95rem] font-medium" dir="ltr">{item.value}</div>
                  {item.sub && <div className="text-[0.78rem] text-brand-gray mt-0.5">{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          {status === "ok" ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-20 border border-brand-blue/30 rounded bg-brand-blue/5">
              <div className="w-16 h-16 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl uppercase text-brand-white mb-2">{s.successTitle}</p>
                <p className="text-[0.88rem] text-brand-gray-light">{s.successDesc}</p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
              >
                {s.successBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">{s.nameLabel}</label>
                  <input id="nombre" name="nombre" type="text" required placeholder={s.namePlaceholder} className={`w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors ${isRtl ? "text-right" : "text-left"}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefono" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">{s.phoneLabel}</label>
                  <input id="telefono" name="telefono" type="tel" required placeholder={s.phonePlaceholder} className={`w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors ${isRtl ? "text-right animate-none" : "text-left"}`} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">{s.emailLabel}</label>
                <input id="email" name="email" type="email" required placeholder={s.emailPlaceholder} className={`w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors ${isRtl ? "text-right" : "text-left"}`} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tipo_espacio" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">{s.spaceTypeLabel}</label>
                <div className="relative w-full">
                  <select 
                    id="tipo_espacio"
                    name="tipo_espacio" 
                    value={tipoEspacio}
                    onChange={(e) => setTipoEspacio(e.target.value)}
                    className={`w-full bg-white/5 border border-brand-border rounded pl-4 pr-10 py-3 text-white outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer ${isRtl ? "text-right" : "text-left"}`}
                  >
                    <option className="bg-brand-surface-2 text-white" value="Edificio / Consorcio">{getSpaceTypeLabel("Edificio / Consorcio", language)}</option>
                    <option className="bg-brand-surface-2 text-white" value="Empresa">{getSpaceTypeLabel("Empresa", language)}</option>
                    <option className="bg-brand-surface-2 text-white" value="Country / Barrio Cerrado">{getSpaceTypeLabel("Country / Barrio Cerrado", language)}</option>
                    <option className="bg-brand-surface-2 text-white" value="Hotel">{getSpaceTypeLabel("Hotel", language)}</option>
                    <option className="bg-brand-surface-2 text-white" value="Otro">{getSpaceTypeLabel("Otro", language)}</option>
                  </select>
                  <ChevronDown className={`pointer-events-none absolute top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray ${isRtl ? "left-4" : "right-4"}`} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="consulta" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray">{s.messageLabel}</label>
                <textarea 
                  id="consulta"
                  name="consulta" 
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                  placeholder={s.messagePlaceholder} 
                  className={`w-full bg-white/5 border border-brand-border rounded px-4 py-3 text-white outline-none focus:border-brand-blue transition-colors min-h-[120px] resize-y ${isRtl ? "text-right" : "text-left"}`} 
                />
              </div>

              {/* Honeypot — invisible to humans, bots fill it */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              {status === "error" && (
                <p className="text-[0.82rem] text-brand-red text-center">
                  {s.errorMsg}
                  <a href={`mailto:${s.errorEmailLink}`} className="underline">{s.errorEmailLink}</a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-blue text-brand-black py-4 rounded font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? s.submittingText : s.submitBtn}
              </button>
            </form>
          )}

          <a href="https://wa.me/5491179994444?text=Hola%20Shomer%2C%20quiero%20cotizar%20el%20servicio%20de%20seguridad%20para%20mi%20edificio" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2.5 py-4 border border-[#25D366]/40 rounded bg-[#25D366]/10 text-[#25D366] font-semibold text-[0.88rem] tracking-wider uppercase mt-4 hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {s.whatsappBtn}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

