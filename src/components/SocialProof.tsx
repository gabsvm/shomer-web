"use client";

import Image from "next/image";
import { FadeUp } from "./FadeUp";

const reviews = [
  {
    name: "Jonathan Komarofsky",
    rating: 5,
    time: "hace 3 meses",
    text: "Desde que Shomer implementó su sistema integral, en Más Metros redujimos muchas horas de trabajo y de personal de seguridad. Nos gestionan el control de acceso y monitoreo de cámaras, y nos simplificaron la operación. Estamos muy satisfechos con su solución electrónica.",
  },
  {
    name: "Sebastian Faur",
    rating: 5,
    time: "hace 3 meses",
    text: "Gracias a Shomer, nuestra administración de consorcios tiene seguridad 24/7, con tótems, acceso biométrico y facial. Estamos muy satisfechos con su solución integral y su excelencia.",
  },
  {
    name: "Shirel Radzi",
    rating: 5,
    time: "hace 6 meses",
    text: "Tengo el servicio de Shomer hace casi un año, es genial, las veces que se sentaron en la puerta les pidieron que se retiren. Me siento más segura desde que protegen mi hogar.",
  },
  {
    name: "Magalyyy Antunez",
    rating: 5,
    time: "hace 1 año",
    text: "Excelente servicio, nada comparado con la seguridad que teníamos antes. Lo recomiendo.",
  },
];

const clients = [
  { name: "WorkingDepot",             src: "/images/clients/workingdepot.png" },
  { name: "+Metros Creadores de Espacios", src: "/images/clients/metros.png" },
  { name: "Grupo Vientos",            src: "/images/clients/grupovientos.png" },
  { name: "Agudat Dodim",             src: "/images/clients/agudat.webp" },
];

const MAPS_URL = "https://maps.app.goo.gl/6pcDXfy1M1NeR9eq8";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < count ? "#00BFFF" : "none"} stroke="#00BFFF" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r, delay }: { r: typeof reviews[0]; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div className="border border-brand-border rounded p-5 bg-brand-surface-2 flex flex-col gap-3 h-full relative">
        <div className="absolute top-4 right-4">
          <GoogleIcon />
        </div>
        <div className="flex items-center gap-3 pr-6">
          <div className="w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center font-display text-base text-brand-blue shrink-0">
            {r.name[0]}
          </div>
          <div>
            <div className="font-medium text-[0.88rem] leading-tight">{r.name}</div>
            <div className="text-[0.7rem] text-brand-gray font-mono mt-0.5">{r.time}</div>
          </div>
        </div>
        <Stars count={r.rating} />
        <p className="text-[0.84rem] text-brand-gray-light leading-relaxed">"{r.text}"</p>
      </div>
    </FadeUp>
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

        {/* Reviews grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} delay={i * 0.08} />
          ))}
        </div>

        {/* Maps link */}
        <div className="flex justify-start pt-6 border-t border-brand-border mb-16">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
          >
            <GoogleIcon />
            Ver todas las reseñas en Google Maps →
          </a>
        </div>

        {/* Client logos */}
        <FadeUp>
          <p className="text-[0.7rem] font-mono tracking-[0.18em] uppercase text-brand-gray text-center mb-8">Confían en Shomer</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border border border-brand-border rounded overflow-hidden">
            {clients.map((c) => (
              <div key={c.name} className="bg-brand-surface-2 flex items-center justify-center py-8 px-6">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={60}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
