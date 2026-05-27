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
  }
};

export function SoporteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [dispositivo, setDispositivo] = useState("");
  const { language } = useLanguage();
  
  // Choose Spanish or English fallback
  const langKey = language === "en" ? "en" : "es";
  const t = translationsLocal[langKey];
  const isRtl = language === "he";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const consorcio = formData.get("consorcio") as string;
    const devSelected = formData.get("dispositivo") as string;
    const version = formData.get("version") as string;
    const descripcion = formData.get("descripcion") as string;

    const now = new Date();
    const dateStr = now.toLocaleDateString("es-AR") + " " + now.toLocaleTimeString("es-AR", { hour: '2-digit', minute: '2-digit' }) + " hs";

    // Formatted data for Web3Forms email body
    const web3Data = new FormData();
    web3Data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    web3Data.append("subject", `SOPORTE PORTEROS: ${nombre} - ${consorcio}`);
    web3Data.append("from_name", "Shomer Soporte App Store");
    web3Data.append("replyto", email);

    // Form details
    web3Data.append("Fecha del Ticket", dateStr);
    web3Data.append("Nombre del Afectado", nombre);
    web3Data.append("Consorcio / Edificio", consorcio);
    web3Data.append("Mail de contacto", email);
    web3Data.append("Dispositivo Móvil", devSelected);
    web3Data.append("Versión / Navegador", version || "No especificado");
    web3Data.append("Descripción del Problema", descripcion);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3Data,
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
      {/* Information Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="p-6 md:p-8 bg-brand-surface border border-brand-border rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-display text-lg uppercase tracking-wider text-brand-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-brand-blue" />
            {t.infoTitle}
          </h2>
          <div className="flex flex-col gap-4 text-[0.88rem] text-brand-gray-light leading-relaxed">
            <p>{t.infoDesc1}</p>
            <p className="border-l-2 border-brand-blue/30 pl-4 py-1 bg-brand-blue-dim/10">
              {t.infoDesc2}
            </p>
          </div>
        </div>

        <div className="py-6 border-b border-brand-border flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0">
            📞
          </div>
          <div>
            <div className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-1">{t.infoTime}</div>
            <div className="text-[0.95rem] font-medium text-brand-white">+54 11 2364-8511</div>
            <div className="text-[0.78rem] text-brand-gray mt-0.5">{t.infoTimeSub}</div>
          </div>
        </div>

        <div className="py-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center shrink-0">
            ✉️
          </div>
          <div>
            <div className="text-[0.72rem] font-mono tracking-widest text-brand-gray uppercase mb-1">Email Técnico</div>
            <div className="text-[0.95rem] font-medium text-brand-white hover:text-brand-blue transition-colors">
              <a href="mailto:soporte@shomer.com.ar">soporte@shomer.com.ar</a>
            </div>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 bg-brand-near-black border border-brand-border rounded-lg relative shadow-[0_0_50px_rgba(0,191,255,0.02)]">
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
                <label htmlFor="nombre" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {t.nameLabel}
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px]"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {t.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px]"
                />
              </div>

              {/* Building field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="consorcio" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  {t.buildingLabel}
                </label>
                <input
                  id="consorcio"
                  name="consorcio"
                  type="text"
                  required
                  placeholder={t.buildingPlaceholder}
                  className="w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px]"
                />
              </div>

              {/* Grid for Device and Version */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Device Selector */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="dispositivo" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5">
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
                      className="w-full bg-brand-black border border-brand-border rounded pl-4 pr-10 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors appearance-none cursor-pointer min-h-[48px]"
                    >
                      <option value="" disabled className="text-brand-gray/50">{t.devicePlaceholder}</option>
                      <option className="bg-brand-surface-2 text-white" value="Apple iPhone (iOS)">{t.deviceIos}</option>
                      <option className="bg-brand-surface-2 text-white" value="Android">{t.deviceAndroid}</option>
                      <option className="bg-brand-surface-2 text-white" value="Otro">{t.deviceOther}</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
                  </div>
                </div>

                {/* Version field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="version" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    {t.versionLabel}
                  </label>
                  <input
                    id="version"
                    name="version"
                    type="text"
                    placeholder={t.versionPlaceholder}
                    className="w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[48px]"
                  />
                </div>
              </div>

              {/* Description field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="descripcion" className="text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {t.descLabel}
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  required
                  placeholder={t.descPlaceholder}
                  rows={4}
                  className="w-full bg-brand-black border border-brand-border rounded px-4 py-3 text-[1rem] text-brand-white outline-none focus:border-brand-blue transition-colors placeholder:text-brand-gray/50 min-h-[100px] resize-y"
                />
              </div>

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
