import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SoporteForm } from "@/components/SoporteForm";

export const metadata: Metadata = {
  title: "Soporte Técnico para Porteros y Residentes — Shomer Security",
  description: "Canal oficial de soporte técnico y generación de tickets para porteros, encargados y usuarios de la app Shomer Security.",
  robots: "index, follow",
};

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="border-b border-brand-border px-6 md:px-10 py-5">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <Link href="/" className="inline-block hover:opacity-85 transition-opacity">
              <Image 
                src="/images/SHOMER.png" 
                alt="Shomer Security" 
                width={120} 
                height={44} 
                className="h-9 w-auto object-contain" 
                priority
              />
            </Link>
            
            <Link 
              href="/" 
              className="text-xs font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
            >
              Inicio
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-[760px] mb-12">
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-4">Soporte Técnico</div>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
              ¿Necesitás<br /><em className="text-brand-blue not-italic">Asistencia?</em>
            </h1>
            <p className="text-lg text-brand-gray-light font-light leading-relaxed">
              Generá un ticket detallando el inconveniente con tu dispositivo, app o lector biométrico y nuestro equipo operativo de control iniciará una inspección remota inmediatamente.
            </p>
          </div>

          {/* Form and info panels */}
          <SoporteForm />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-brand-border">
            <Link 
              href="/" 
              className="text-sm font-mono tracking-widest uppercase text-brand-blue hover:text-white transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
