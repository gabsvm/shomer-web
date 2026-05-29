"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle, AlertCircle, Smartphone, Mail, Building, User, FileText, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Status = "idle" | "sending" | "ok" | "error";

const translationsLocal: Record<string, {
  title: string;
  subtitle: string;
  infoTitle: string;
  infoDesc1: string;
  infoDesc2: string;
  infoTime: string;
  infoTimeSub: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  buildingLabel: string;
  buildingPlaceholder: string;
  deviceLabel: string;
  devicePlaceholder: string;
  deviceIos: string;
  deviceAndroid: string;
  deviceOther: string;
  versionLabel: string;
  versionPlaceholder: string;
  descLabel: string;
  descPlaceholder: string;
  submitBtn: string;
  submittingText: string;
  successTitle: string;
  successDesc: string;
  successBtn: string;
  errorMsg: string;
  errorEmailLink: string;
}> = {
  es: {
    title: "Soporte para Porteros",
    subtitle: "Generá un ticket técnico y nuestro centro de monitoreo se contactará a la brevedad.",
    infoTitle: "Centro de Soporte Técnico",
    infoDesc1: "Si sos portero, encargado o usuario de la app Shomer y estás experimentando problemas con el lector biométrico, videollamadas o acceso QR, por favor completá este formulario.",
    infoDesc2: "Una vez enviado el ticket, nuestro equipo de soporte técnico iniciará un autodiagnóstico remoto sobre el nodo de tu consorcio.",
    infoTime: "Operación Disuasiva y Técnica",
    infoTimeSub: "Operativo 24 hs · Consultas no urgentes de 9 a 18 hs.",
    nameLabel: "Nombre Completo *",
    namePlaceholder: "Tu nombre y apellido",
    emailLabel: "Correo Electrónico de Contacto *",
    emailPlaceholder: "ejemplo@correo.com",
    buildingLabel: "Edificio / Consorcio *",
    buildingPlaceholder: "Nombre del edificio y dirección",
    deviceLabel: "Dispositivo Móvil *",
    devicePlaceholder: "Seleccioná tu sistema operativo",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola, etc.)",
    deviceOther: "Otro / Navegador Web de PC",
    versionLabel: "Versión de App / Navegador",
    versionPlaceholder: "Ej: App v1.4.2 o Google Chrome",
    descLabel: "Descripción del Problema *",
    descPlaceholder: "Detallá lo que sucede (ej: no recibo la llamada, falla el lector facial, etc.)",
    submitBtn: "Generar Ticket de Soporte",
    submittingText: "Generando Ticket...",
    successTitle: "¡Ticket Creado con Éxito!",
    successDesc: "Hemos recibido tu reporte. Un operador técnico se comunicará con vos al correo proporcionado o vía telefónica.",
    successBtn: "Generar otro ticket",
    errorMsg: "Hubo un error al enviar el ticket. Escribinos directamente a ",
    errorEmailLink: "soporte@shomer.com.ar"
  },
  en: {
    title: "Intercom & Operator Support",
    subtitle: "Generate a support ticket and our monitoring center will contact you shortly.",
    infoTitle: "Technical Support Center",
    infoDesc1: "If you are a building operator, concierge, or Shomer app user experiencing issues with biometric readers, video calls, or QR access, please fill out this form.",
    infoDesc2: "Once the ticket is submitted, our technical support team will run a remote self-diagnostic scan on your building's node.",
    infoTime: "Technical Operations",
    infoTimeSub: "Active 24/7 · Non-urgent inquiries from 9 AM to 6 PM.",
    nameLabel: "Full Name *",
    namePlaceholder: "Your first and last name",
    emailLabel: "Contact Email *",
    emailPlaceholder: "example@email.com",
    buildingLabel: "Building / Property Group *",
    buildingPlaceholder: "Building name and address",
    deviceLabel: "Mobile Device *",
    devicePlaceholder: "Select your operating system",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola, etc.)",
    deviceOther: "Other / PC Web Browser",
    versionLabel: "App Version / Browser",
    versionPlaceholder: "E.g. App v1.4.2 or Google Chrome",
    descLabel: "Problem Description *",
    descPlaceholder: "Describe the issue (e.g. not receiving calls, facial reader error, etc.)",
    submitBtn: "Generate Support Ticket",
    submittingText: "Generating Ticket...",
    successTitle: "Ticket Successfully Created!",
    successDesc: "We have received your report. A technical operator will contact you at the email address provided or via phone.",
    successBtn: "Generate another ticket",
    errorMsg: "There was an error submitting the ticket. Contact us directly at ",
    errorEmailLink: "soporte@shomer.com.ar"
  },
  he: {
    title: "תמיכה באינטרקום ומפעילים",
    subtitle: "פתח כרטיס תמיכה טכנית ומוקד הבקרה שלנו ייצור עמך קשר בהקדם.",
    infoTitle: "מרכז תמיכה טכנית",
    infoDesc1: "אם אתה מפעיל בניין, שוער או משתמש באפליקציית Shomer וחווה בעיות בקורא הביומטרי, בשיחות וידאו או בגישה באמצעות קוד QR, אנא מלא טופס זה.",
    infoDesc2: "לאחר שליחת הכרטיס, צוות התמיכה הטכנית שלנו יפעיל סריקת אבחון מרחוק על נקודת הקצה של הבניין שלך.",
    infoTime: "פעילות טכנית ומבצעית",
    infoTimeSub: "פעיל 24/7 · פניות לא דחופות בין 9:00 ל-18:00.",
    nameLabel: "שם מלא *",
    namePlaceholder: "שם פרטי ומשפחה",
    emailLabel: "אימייל ליצירת קשר *",
    emailPlaceholder: "example@email.com",
    buildingLabel: "בניין / קבוצת נכסים *",
    buildingPlaceholder: "שם הבניין וכתובת",
    deviceLabel: "מכשיר נייד *",
    devicePlaceholder: "בחר את מערכת ההפעלה שלך",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola, etc.)",
    deviceOther: "אחר / דפדפן אינטרנט במחשב",
    versionLabel: "גרסת אפליקציה / דפדפן",
    versionPlaceholder: "לדוגמה: App v1.4.2 או Google Chrome",
    descLabel: "תיאור הבעיה *",
    descPlaceholder: "פרט את הבעיה (לדוגמה: לא מתקבלות שיחות, שגיאה בקורא הפנים וכו')",
    submitBtn: "פתח כרטיס תמיכה",
    submittingText: "פותח כרטיס...",
    successTitle: "הכרטיס נפתח בהצלחה!",
    successDesc: "פנייתך התקבלה. נציג תמיכה טכנית ייצור עמך קשר במייל שסופק או בטלפון.",
    successBtn: "פתח כרטיס נוסף",
    errorMsg: "אירעה שגיאה בשליחת הכרטיס. פנה אלינו ישירות בכתובת ",
    errorEmailLink: "soporte@shomer.com.ar"
  },
  de: {
    title: "Intercom- & Bediener-Support",
    subtitle: "Erstellen Sie ein Support-Ticket und unsere Leitstelle wird sich in Kürze mit Ihnen in Verbindung setzen.",
    infoTitle: "Technisches Support-Center",
    infoDesc1: "Wenn Sie als Pförtner, Hausmeister oder Nutzer der Shomer-App Probleme mit dem biometrischen Leser, Videoanrufen oder dem QR-Zugang haben, füllen Sie bitte dieses Formular aus.",
    infoDesc2: "Nach Absenden des Tickets startet unser technisches Support-Team eine Remote-Diagnose auf dem Knotenpunkt Ihres Gebäudes.",
    infoTime: "Technischer & operativer Betrieb",
    infoTimeSub: "24/7 in Betrieb · Nicht dringende Anfragen von 9:00 bis 18:00 Uhr.",
    nameLabel: "Vollständiger Name *"
    ,namePlaceholder: "Ihr Vor- und Nachname",
    emailLabel: "Kontakt-E-Mail *",
    emailPlaceholder: "beispiel@email.de",
    buildingLabel: "Gebäude / Konsortium *",
    buildingPlaceholder: "Name des Gebäudes und Adresse",
    deviceLabel: "Mobilgerät *",
    devicePlaceholder: "Wählen Sie Ihr Betriebssystem aus",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola, etc.)",
    deviceOther: "Anderes / PC-Webbrowser",
    versionLabel: "App-Version / Browser",
    versionPlaceholder: "Z. B. App v1.4.2 oder Google Chrome",
    descLabel: "Beschreibung des Problems *",
    descPlaceholder: "Beschreiben Sie das Problem (z. B. keine Anrufe erhalten, Fehler beim Gesichtsscanner usw.)",
    submitBtn: "Support-Ticket erstellen",
    submittingText: "Ticket wird erstellt...",
    successTitle: "Ticket erfolgreich erstellt!",
    successDesc: "Wir haben Ihre Meldung erhalten. Ein technischer Mitarbeiter wird sich unter der angegebenen E-Mail-Adresse oder telefonisch mit Ihnen in Verbindung setzen.",
    successBtn: "Weiteres Ticket erstellen",
    errorMsg: "Fehler beim Senden des Tickets. Schreiben Sie uns direkt unter ",
    errorEmailLink: "soporte@shomer.com.ar"
  },
  ru: {
    title: "Поддержка домофонов и операторов",
    subtitle: "Создайте тикет службы поддержки, и наш центр мониторинга свяжется с вами в ближайшее время.",
    infoTitle: "Центр технической поддержки",
    infoDesc1: "Если вы консьерж, оператор здания или пользователь приложения Shomer и у вас возникли проблемы с биометрическим считывателем, видеозвонками или доступом по QR-коду, пожалуйста, заполните эту форму.",
    infoDesc2: "После отправки тикета наша служба технической поддержки запустит удаленную самодиагностику узла вашего здания.",
    infoTime: "Техническая и оперативная служба",
    infoTimeSub: "Работает 24/7 · Несрочные запросы с 9:00 до 18:00.",
    nameLabel: "Полное имя *",
    namePlaceholder: "Ваши имя и фамилия",
    emailLabel: "Контактный E-mail *",
    emailPlaceholder: "example@email.ru",
    buildingLabel: "Здание / Консорциум *",
    buildingPlaceholder: "Название здания и адрес",
    deviceLabel: "Мобильное устройство *",
    devicePlaceholder: "Выберите вашу операционную систему",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola и др.)",
    deviceOther: "Другое / Браузер на ПК",
    versionLabel: "Версия приложения / Браузер",
    versionPlaceholder: "Например: App v1.4.2 или Google Chrome",
    descLabel: "Описание проблемы *",
    descPlaceholder: "Подробно опишите проблему (например: не приходят вызовы, сбой сканера лица и т.д.)",
    submitBtn: "Создать тикет поддержки",
    submittingText: "Создание тикета...",
    successTitle: "Тикет успешно создан!",
    successDesc: "Мы получили ваше обращение. Технический специалист свяжется с вами по указанному адресу электронной почты или по телефону.",
    successBtn: "Создать еще один тикет",
    errorMsg: "Ошибка при отправке тикета. Напишите нам напрямую на ",
    errorEmailLink: "soporte@shomer.com.ar"
  },
  pt: {
    title: "Suporte para Porteiros e Operadores",
    subtitle: "Abra um tíquete de suporte e nossa central de monitoramento entrará em contato em breve.",
    infoTitle: "Central de Suporte Técnico",
    infoDesc1: "Se você é porteiro, zelador ou usuário do aplicativo Shomer e está enfrentando problemas com o leitor biométrico, videochamadas ou acesso QR, por favor preencha este formulário.",
    infoDesc2: "Assim que o tíquete for enviado, nossa equipe de suporte técnico iniciará um diagnóstico remoto no nó do seu condomínio.",
    infoTime: "Operação Técnica e Disuasiva",
    infoTimeSub: "Operando 24h · Consultas não urgentes das 9h às 18h.",
    nameLabel: "Nome Completo *",
    namePlaceholder: "Seu nome e sobrenome",
    emailLabel: "E-mail de Contato *",
    emailPlaceholder: "exemplo@email.com",
    buildingLabel: "Edifício / Condomínio *",
    buildingPlaceholder: "Nome do edifício e endereço",
    deviceLabel: "Dispositivo Móvel *",
    devicePlaceholder: "Selecione o seu sistema operacional",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola, etc.)",
    deviceOther: "Outro / Navegador Web de PC",
    versionLabel: "Versão do App / Navegador",
    versionPlaceholder: "Ex: App v1.4.2 ou Google Chrome",
    descLabel: "Descrição do Problema *",
    descPlaceholder: "Detalhe o problema (ex: não recebo a chamada, falha no leitor facial, etc.)",
    submitBtn: "Gerar Tíquete de Suporte",
    submittingText: "Gerando Tíquete...",
    successTitle: "Tíquete Criado com Sucesso!",
    successDesc: "Recebemos o seu relatório. Um operador técnico entrará em contato através do e-mail fornecido ou por telefone.",
    successBtn: "Gerar outro tíquete",
    errorMsg: "Houve um erro ao enviar o tíquete. Escreva diretamente para ",
    errorEmailLink: "soporte@shomer.com.ar"
  },
  it: {
    title: "Supporto Citofono & Operatori",
    subtitle: "Invia un ticket di supporto e la nostra centrale operativa ti contatterà a breve.",
    infoTitle: "Centro di Supporto Tecnico",
    infoDesc1: "Se sei un portiere, un custode o un utente dell'app Shomer e riscontri problemi con il lettore biometrico, le videochiamate o l'accesso QR, compila questo modulo.",
    infoDesc2: "Una volta inviato il ticket, il nostro team di supporto tecnico avvierà una diagnostica remota sul nodo del tuo condominio.",
    infoTime: "Operazioni Tecniche e Dissuasive",
    infoTimeSub: "Attivo 24/7 · Richieste non urgenti dalle 9:00 alle 18:00.",
    nameLabel: "Nome Completo *",
    namePlaceholder: "Il tuo nome e cognome",
    emailLabel: "E-mail di Contatto *",
    emailPlaceholder: "esempio@email.it",
    buildingLabel: "Edificio / Condominio *",
    buildingPlaceholder: "Nome dell'edificio e indirizzo",
    deviceLabel: "Dispositivo Mobile *",
    devicePlaceholder: "Seleziona il tuo sistema operativo",
    deviceIos: "Apple iPhone (iOS)",
    deviceAndroid: "Android (Samsung, Xiaomi, Motorola, ecc.)",
    deviceOther: "Altro / PC Web Browser",
    versionLabel: "Versione App / Browser",
    versionPlaceholder: "Es: App v1.4.2 o Google Chrome",
    descLabel: "Descrizione del Problema *",
    descPlaceholder: "Dettaglia il problema (es: non ricevo la chiamata, errore nel lettore facciale, ecc.)",
    submitBtn: "Invia Ticket di Supporto",
    submittingText: "Invio Ticket in corso...",
    successTitle: "Ticket Creato con Successo!",
    successDesc: "Abbiamo ricevuto la tua segnalazione. Un operatore tecnico ti contatterà all'indirizzo e-mail fornito o telefonicamente.",
    successBtn: "Invia un altro ticket",
    errorMsg: "Si è verificato un errore durante l'invio del ticket. Scrivici direttamente a ",
    errorEmailLink: "soporte@shomer.com.ar"
  }
};

export function SoporteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [dispositivo, setDispositivo] = useState("");
  const { language } = useLanguage();
  
  const t = translationsLocal[language] || translationsLocal.es;
  const isRtl = language === "he";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("language", language);

    try {
      const res = await fetch("/api/soporte", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
        setDispositivo("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
      {/* Information Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="p-5 sm:p-6 md:p-8 bg-brand-surface border border-brand-border rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-display text-lg uppercase tracking-wider text-brand-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-brand-blue" />
            {t.infoTitle}
          </h2>
          <div className="flex flex-col gap-4 text-[0.88rem] text-brand-gray-light leading-relaxed">
            <p>{t.infoDesc1}</p>
            <p className={`border-brand-blue/30 py-1 bg-brand-blue-dim/10 ${isRtl ? "border-r-2 pr-4 text-right" : "border-l-2 pl-4 text-left"}`}>
              {t.infoDesc2}
            </p>
          </div>
        </div>

        <div className={`py-4 sm:py-6 border-b border-brand-border flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
          <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0 text-brand-blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className={isRtl ? "text-right" : "text-left"}>
            <div className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-1">{t.infoTime}</div>
            <div className="text-[0.95rem] font-medium text-brand-white" dir="ltr">+54 11 2364-8511</div>
            <div className="text-[0.78rem] text-brand-gray mt-0.5">{t.infoTimeSub}</div>
          </div>
        </div>

        <div className={`py-4 sm:py-6 flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
          <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0 text-brand-blue">
            <Mail className="w-[18px] h-[18px]" />
          </div>
          <div className={isRtl ? "text-right" : "text-left"}>
            <div className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-1">Email Técnico</div>
            <div className="text-[0.95rem] font-medium text-brand-white hover:text-brand-blue transition-colors">
              <a href="mailto:soporte@shomer.com.ar">soporte@shomer.com.ar</a>
            </div>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="lg:col-span-7">
        <div className="p-5 sm:p-6 md:p-8 bg-brand-near-black border border-brand-border rounded-lg relative shadow-[0_0_50px_rgba(0,191,255,0.02)]">
          {status === "ok" ? (
            <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center animate-pulse">
                <CheckCircle className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase text-brand-white mb-2">{t.successTitle}</h3>
                <p className="text-[0.9rem] text-brand-gray-light max-w-md mx-auto leading-relaxed">
                  {t.successDesc}
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-3 border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-brand-black rounded text-xs font-mono tracking-wider uppercase transition-all"
              >
                {t.successBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className={`text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <User className="w-3.5 h-3.5" />
                  {t.nameLabel}
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  className={`w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px] ${isRtl ? "text-right" : "text-left"}`}
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={`text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <Mail className="w-3.5 h-3.5" />
                  {t.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className={`w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px] ${isRtl ? "text-right" : "text-left"}`}
                />
              </div>

              {/* Building field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="consorcio" className={`text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <Building className="w-3.5 h-3.5" />
                  {t.buildingLabel}
                </label>
                <input
                  id="consorcio"
                  name="consorcio"
                  type="text"
                  required
                  placeholder={t.buildingPlaceholder}
                  className={`w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px] ${isRtl ? "text-right" : "text-left"}`}
                />
              </div>

              {/* Grid for Device and Version */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Device Selector */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="dispositivo" className={`text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Smartphone className="w-3.5 h-3.5" />
                    {t.deviceLabel}
                  </label>
                  <div className="relative w-full">
                    <select
                      id="dispositivo"
                      name="dispositivo"
                      value={dispositivo}
                      required
                      onChange={(e) => setDispositivo(e.target.value)}
                      className={`w-full bg-brand-black border border-brand-border rounded pl-4 pr-10 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer min-h-[48px] ${isRtl ? "text-right" : "text-left"}`}
                    >
                      <option value="" disabled className="text-brand-gray/50">{t.devicePlaceholder}</option>
                      <option className="bg-brand-surface-2 text-white" value="Apple iPhone (iOS)">{t.deviceIos}</option>
                      <option className="bg-brand-surface-2 text-white" value="Android">{t.deviceAndroid}</option>
                      <option className="bg-brand-surface-2 text-white" value="Otro">{t.deviceOther}</option>
                    </select>
                    <ChevronDown className={`pointer-events-none absolute top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray ${isRtl ? "left-4" : "right-4"}`} />
                  </div>
                </div>

                {/* Version field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="version" className={`text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Cpu className="w-3.5 h-3.5" />
                    {t.versionLabel}
                  </label>
                  <input
                    id="version"
                    name="version"
                    type="text"
                    placeholder={t.versionPlaceholder}
                    className={`w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px] ${isRtl ? "text-right" : "text-left"}`}
                  />
                </div>
              </div>

              {/* Description field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="descripcion" className={`text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <FileText className="w-3.5 h-3.5" />
                  {t.descLabel}
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  required
                  placeholder={t.descPlaceholder}
                  rows={4}
                  className={`w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[100px] resize-y ${isRtl ? "text-right" : "text-left"}`}
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
                <div className="flex items-center gap-2 p-4 bg-brand-red/10 border border-brand-red/30 rounded text-brand-red text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p>
                    {t.errorMsg}
                    <a href={`mailto:${t.errorEmailLink}`} className="underline font-bold">{t.errorEmailLink}</a>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-blue text-brand-black py-4 rounded font-bold text-xs tracking-wider uppercase hover:bg-brand-white hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mt-2 flex items-center justify-center gap-2 min-h-[48px]"
              >
                {status === "sending" ? t.submittingText : t.submitBtn}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
