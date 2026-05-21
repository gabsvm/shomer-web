"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";

const faqs = [
  {
    q: "¿Qué pasa si falla el sistema o se corta internet?",
    a: "El sistema opera con redundancia. Ante falla de conectividad, el tótem mantiene el registro local y sincroniza cuando se restaura la conexión. La central de monitoreo tiene protocolos de contingencia activos las 24 horas, los 365 días del año.",
  },
  {
    q: "¿Quién gestiona las altas y bajas de residentes?",
    a: "Shomer lo gestiona por completo. El administrador notifica el cambio — mudanza, nuevo residente, empleado nuevo — y nosotros actualizamos el sistema. Sin trabajo manual para el consorcio, sin sistemas que aprender a operar.",
  },
  {
    q: "¿Cuánto tarda la instalación?",
    a: "La instalación estándar se completa en un día hábil. Incluye configuración completa, pruebas de funcionamiento y capacitación al administrador o encargado. Sin costo adicional.",
  },
  {
    q: "¿El visitante necesita descargar una app?",
    a: "No. El visitante escanea el QR del equipo y accede directamente desde el navegador de su celular. Sin instalaciones, sin cuentas, sin fricción. Compatible con cualquier smartphone iOS o Android.",
  },
  {
    q: "¿Qué pasa si necesito abrir la puerta en una emergencia un feriado o fin de semana?",
    a: "La central de monitoreo opera 24/7 los 365 días del año. Las aperturas de emergencia — técnico de ascensor, reparación de bomba, bomberos — se gestionan remotamente con autorización del administrador o consejo de propietarios. Todo queda registrado.",
  },
  {
    q: "¿Los datos de los residentes son seguros?",
    a: "Toda la comunicación corre dentro del ecosistema Shomer, cifrada end-to-end. No se utilizan redes externas ni se expone ningún número personal. Los datos biométricos (Face ID) se procesan y almacenan bajo protocolos de seguridad estrictos en la base operativa Shomer.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-10 bg-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[860px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Preguntas frecuentes</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-14">
            Todo lo que<br /><em className="text-brand-blue not-italic">pregunta</em><br />el administrador.
          </h2>
        </FadeUp>

        <div className="flex flex-col divide-y divide-brand-border border border-brand-border rounded overflow-hidden">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={i} delay={(i % 3) * 0.05}>
              <div className="bg-brand-surface">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left hover:bg-brand-surface-2 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-[0.95rem] text-brand-white leading-snug">{q}</span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border border-brand-border flex items-center justify-center text-brand-blue transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-[0.88rem] text-brand-gray-light leading-relaxed">
                    {a}
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
