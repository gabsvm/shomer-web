"use client";

import { useState } from "react";
import { FadeUp } from "./FadeUp";

const faqs = [
  {
    q: "¿Cuánto tarda la instalación y tiene algún costo adicional?",
    a: "La instalación profesional demora entre 2 y 4 horas según el tamaño del edificio. Está incluida en el plan — sin costo extra, sin sorpresas. Nuestro técnico también capacita al administrador en el mismo momento.",
  },
  {
    q: "¿El sistema funciona si se va la luz o el internet?",
    a: "Sí. Contamos con respaldo de energía y protocolos de contingencia que garantizan el acceso incluso ante cortes de luz o internet. La central de monitoreo permanece operativa 24/7 en todo momento.",
  },
  {
    q: "¿Cómo manejan las visitas eventuales y repartidores?",
    a: "El administrador o cada residente puede generar un código de acceso de un solo uso con expiración automática de 5 minutos. El número del intercomunicador nunca se comparte, y no se instala ninguna app en el dispositivo del visitante.",
  },
  {
    q: "¿El servicio tiene permanencia mínima o contrato de largo plazo?",
    a: "No. Todos los planes son mes a mes. Podés cancelar cuando quieras sin penalidad ni trámites. Elegimos mantener clientes por la calidad del servicio, no por contratos.",
  },
  {
    q: "¿Qué pasa cuando un inquilino se muda o cambia un empleado?",
    a: "La gestión de altas y bajas de usuarios está incluida en el abono. Nos informás el cambio y nosotros lo hacemos — el administrador no tiene que operar ningún sistema ni hacer trámites manuales.",
  },
  {
    q: "¿Es compatible con el portero eléctrico que ya tenemos instalado?",
    a: "En la gran mayoría de los casos sí. Antes de presentar cualquier propuesta, nuestro técnico evalúa la instalación existente sin cargo. Te confirmamos compatibilidad completa antes de que decidas.",
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
