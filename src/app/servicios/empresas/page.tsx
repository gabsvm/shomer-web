import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Clock, Monitor, Volume2, ShieldCheck, HardDrive, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguridad y Control de Acceso para Empresas — Shomer Security",
  description: "Optimice el control operativo de su empresa. Fichaje automático con Face ID, gestión de horarios estrictos en la nube e integración de seguridad virtual.",
  keywords: ["control de accesos empresas", "fichaje personal face id", "seguridad corporativa", "biometria oficinas", "shomer security"],
  robots: "index, follow",
};

export default function EmpresasPage() {
  const corporateFeatures = [
    {
      icon: <Users className="w-6 h-6 text-brand-green" />,
      title: "Identificación Biométrica Avanzada",
      desc: "Autenticación facial en menos de 200ms mediante algoritmos de inteligencia artificial. Prevención activa de suplantación y fraude en ingresos.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-green" />,
      title: "Control de Fichaje y Horarios",
      desc: "Gestión de personal y contratistas automatizada. Configure permisos horarios estrictos (ej. personal de limpieza de L-V de 8 a 16 hs) sin personal de supervisión.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-brand-green" />,
      title: "Gestión en la Nube Centralizada",
      desc: "Monitoree en tiempo real las altas, bajas y el historial de ingresos y egresos de su oficina desde un portal web centralizado, rápido e intuitivo.",
    },
    {
      icon: <Volume2 className="w-6 h-6 text-brand-green" />,
      title: "Audio Bidireccional Disuasivo",
      desc: "Operadores remotos pueden interactuar verbalmente en vivo, reproducir advertencias grabadas o activar la sirena disuasoria de alta potencia ante intrusos.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 flex items-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/images/hero-bg-new.jpg" alt="Fondo de seguridad corporativa" fill className="object-cover" />
        </div>
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,230,118,0.06),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="font-mono text-xs tracking-[0.18em] text-brand-green uppercase mb-3">Soluciones Corporativas</div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none uppercase mb-6">
            Empresas y<br /><em className="text-brand-green not-italic">Oficinas</em>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light leading-relaxed max-w-[680px] font-light mb-8">
            Automatización del control operativo e infraestructura de seguridad lógica. Suprima la supervisión humana física y obtenga trazabilidad total de su personal y activos en un único panel de control.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="bg-brand-green text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all"
            >
              Solicitar Demostración Corporativa
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-green uppercase mb-3">Control Operativo Simplificado</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none uppercase mb-6">
              Fichaje y Autenticación sin Fricción
            </h2>
            <p className="text-brand-gray-light leading-relaxed mb-6">
              El control horario tradicional requiere de planillas analógicas propensas a errores o de tarjetas físicas fácilmente compartibles o extraviables. Con el acceso facial de Shomer Security, cada empleado registra su ingreso simplemente mirando a la pantalla en 0.2 segundos.
            </p>
            <p className="text-brand-gray-light leading-relaxed">
              El panel de gestión permite dar de alta a nuevos empleados en segundos mediante el envío de su foto y datos, facilitando una administración ágil de contratistas y visitas temporarias. Controle el cumplimiento horario estricto y reduzca la carga administrativa de Recursos Humanos.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded border border-brand-border overflow-hidden bg-brand-surface/40">
            <Image src="/images/fingerprint_reader_access.jpg" alt="Hardware de Control de Acceso Biométrico Shomer" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-10 bg-brand-surface border-t border-b border-brand-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="font-mono text-xs tracking-[0.18em] text-brand-green uppercase mb-3">Características Principales</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase">Eficiencia en Seguridad Lógica B2B</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateFeatures.map((feature, idx) => (
              <div key={idx} className="bg-brand-black/40 border border-brand-border rounded p-8 hover:border-brand-green/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Integration Specs */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="font-mono text-xs tracking-[0.18em] text-brand-green uppercase mb-3">Especificaciones de Red y Energía</div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase">Infraestructura Corporativa Mínima</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-brand-border p-8 rounded bg-brand-surface/20 flex flex-col justify-between">
            <div>
              <HardDrive className="w-8 h-8 text-brand-green mb-4" />
              <h4 className="font-mono text-[0.82rem] tracking-wider uppercase mb-3">Requisitos de Red</h4>
              <p className="text-sm text-brand-gray-light leading-relaxed">
                Conexión a internet estable con IP pública fija y 100 Mbps de ancho de banda de subida mínimo (se recomienda fibra óptica).
              </p>
            </div>
            <span className="text-xs text-brand-gray font-mono mt-6">Conexión dedicada</span>
          </div>

          <div className="border border-brand-border p-8 rounded bg-brand-surface/20 flex flex-col justify-between">
            <div>
              <ShieldCheck className="w-8 h-8 text-brand-green mb-4" />
              <h4 className="font-mono text-[0.82rem] tracking-wider uppercase mb-3">Hardware e Instalación</h4>
              <p className="text-sm text-brand-gray-light leading-relaxed">
                Los equipos de reconocimiento facial y sensores se instalan 100% bonificados bajo modalidad de comodato activo de Shomer Security S.R.L.
              </p>
            </div>
            <span className="text-xs text-brand-gray font-mono mt-6">Equipamiento sin costo</span>
          </div>

          <div className="border border-brand-border p-8 rounded bg-brand-surface/20 flex flex-col justify-between">
            <div>
              <Award className="w-8 h-8 text-brand-green mb-4" />
              <h4 className="font-mono text-[0.82rem] tracking-wider uppercase mb-3">Monitoreo Proactivo (SLA)</h4>
              <p className="text-sm text-brand-gray-light leading-relaxed">
                Control automático continuo del estado de red de los equipos. Detectamos fallas de conexión o sabotaje de inmediato enviando soporte técnico prioritario.
              </p>
            </div>
            <span className="text-xs text-brand-gray font-mono mt-6">Soporte 24/7/365</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.18em] text-brand-green uppercase mb-3 inline-block">Plan Piloto 30 Días</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none uppercase mb-6">Pruebe Shomer sin riesgo</h2>
          <p className="text-brand-gray-light mb-10 max-w-[600px] mx-auto text-sm leading-relaxed">
            Ofrecemos a empresas seleccionadas una prueba del sistema de accesos con instalación y hardware bonificados. Evalúe el impacto en la puntualidad y seguridad de su personal antes de firmar cualquier contrato a largo plazo.
          </p>

          <Link
            href="/#contacto"
            className="bg-brand-green text-brand-black px-10 py-4 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:scale-102 transition-all inline-block"
          >
            Comenzar Prueba Gratuita
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
