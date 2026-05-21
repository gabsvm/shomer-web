"use client";

import { FadeUp } from "./FadeUp";

const reviews = [
  {
    name: "Magalyyy Antunez",
    rating: 5,
    time: "hace 1 año",
    text: "Excelente servicio, nada comparado con la seguridad que teníamos antes. Lo recomiendo.",
    source: "Google",
  },
];

const clients = [
  { name: "Grupo Vientos" },
  { name: "+Metros Creadores de Espacios" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? "#00BFFF" : "none"} stroke="#00BFFF" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="testimonios" className="py-24 px-6 md:px-10 bg-brand-surface">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Clientes que confían</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-14">
            Lo que dicen<br /><em className="text-brand-blue not-italic">quienes</em><br />ya eligieron.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Reviews */}
          <div className="flex flex-col gap-6">
            {reviews.map((r) => (
              <FadeUp key={r.name}>
                <div className="border border-brand-border rounded p-6 bg-brand-surface-2 flex flex-col gap-4 relative">
                  <div className="absolute top-5 right-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center font-display text-lg text-brand-blue">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-[0.9rem]">{r.name}</div>
                      <div className="text-[0.72rem] text-brand-gray font-mono">{r.time} · {r.source}</div>
                    </div>
                  </div>
                  <Stars count={r.rating} />
                  <p className="text-[0.88rem] text-brand-gray-light leading-relaxed">"{r.text}"</p>
                </div>
              </FadeUp>
            ))}

            <FadeUp delay={0.1}>
              <a
                href="https://www.google.com/maps/search/Shomer+Security"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[0.8rem] font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="currentColor"/>
                </svg>
                Ver reseñas en Google Maps →
              </a>
            </FadeUp>
          </div>

          {/* Client logos */}
          <FadeUp delay={0.15}>
            <div className="border border-brand-border rounded p-8 bg-brand-surface-2">
              <p className="text-[0.72rem] font-mono tracking-[0.18em] uppercase text-brand-gray mb-8">Confían en Shomer</p>
              <div className="flex flex-col gap-6">
                {clients.map((c) => (
                  <div key={c.name} className="flex items-center gap-4 py-5 border-b border-brand-border last:border-b-0">
                    <div className="w-10 h-10 rounded border border-brand-blue/30 bg-brand-blue/5 flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="1.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <span className="font-medium text-[0.95rem] text-brand-white">{c.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-[0.72rem] text-brand-gray mt-8 leading-relaxed">
                Administradores y desarrolladores inmobiliarios que eligieron Shomer como estándar de seguridad en sus edificios.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
