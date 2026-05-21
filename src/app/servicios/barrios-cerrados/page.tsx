import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, QrCode, ScanFace, Eye, Compass, Zap, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguridad para Countries y Barrios Cerrados — Shomer Security",
  description: "Accesos masivos sin cuellos de botella para barrios cerrados. Invitaciones seguras con códigos QR encriptados con JWT y geolocalización GPS.",
  keywords: ["seguridad barrios cerrados", "acceso countries qr", "lector patentes lpr", "porteria virtual barrios", "shomer security"],
  robots: "index, follow",
};

export default function BarriosCerradosPage() {
  const features = [
    {
      icon: <QrCode className="w-6 h-6 text-brand-red" />,
      title: "Invitaciones QR Encriptadas (JWT + GPS)",
      desc: "Códigos de acceso únicos creados bajo estándares criptográficos JWT. Se vinculan con una geocerca GPS para impedir capturas de pantalla, clonación o uso compartido fuera del horario establecido.",
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-red" />,
      title: "Control de Patentes Autónomo (LPR Edge)",
      desc: "Lectura de matrículas mediante cámaras con inteligencia artificial en el extremo de la red (Edge Computing). Comunicación directa peer-to-peer con la barrera de acceso en menos de 0.5 segundos.",
    },
    {
      icon: <ScanFace className="w-6 h-6 text-brand-red" />,
      title: "Reconocimiento Facial de Alta Velocidad",
      desc: "Fichaje facial para residentes e invitados frecuentes. Respuesta ultrarrápida de 200ms que elimina cuellos de botella en horas pico de acceso.",
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-red" />,
      title: "Doble Cobertura Monitoreada",
      desc: "Hasta 8 cámaras de videovigilancia monitoreadas y 4 de respaldo por entrada principal. Supervisión constante por operadores remotos las 24 horas del día.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 flex items-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Image src="/images/hero-bg.jpg" alt="Fondo de barrios cerrados y countries" fill className="object-cover" />
        </div>
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,59,48,0.06),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="font-mono text-xs tracking-[0.18em] text-brand-red uppercase mb-3">Residencias Privadas</div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none uppercase mb-6">
            Countries y<br /><em className="text-brand-red not-italic">Barrios Cerrados</em>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light leading-relaxed max-w-[680px] font-light mb-8">
            Elimine los cuellos de botella en las porterías. Ofrecemos una experiencia premium y segura de ingreso mediante códigos de invitación dinámicos y reconocimiento de patentes que opera incluso sin conexión a internet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="bg-brand-red text-brand-white px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-brand-black hover:-translate-y-px transition-all"
            >
              Consultar con un Especialista
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-red uppercase mb-3">Velocidad y Máxima Seguridad</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none uppercase mb-6">
              Accesos sin Cuellos de Botella ni Demoras
            </h2>
            <p className="text-brand-gray-light leading-relaxed mb-6">
              Las demoras en los accesos vehiculares a barrios cerrados generan filas molestas en horarios pico y representan un blanco de vulnerabilidad. La solución de Shomer combina hardware avanzado LPR con software de encriptación que procesa la apertura en menos de medio segundo.
            </p>
            <p className="text-brand-gray-light leading-relaxed">
              Gracias al procesamiento local de las patentes (Edge Computing), la apertura del portón o barrera es completamente autónoma. El sistema funciona ininterrumpidamente aun ante cortes de red o de suministro eléctrico local (empleando un sistema de UPS con 6 horas de autonomía predeterminada), garantizando la continuidad de la operación del barrio.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded border border-brand-border overflow-hidden bg-brand-surface/40">
            <Image src="/images/parlante_disuasivo_entrada.jpg" alt="Audio disuasivo y seguridad perimetral Shomer" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-10 bg-brand-surface border-t border-b border-brand-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="font-mono text-xs tracking-[0.18em] text-brand-red uppercase mb-3">Ecosistema Shomer</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase">Tecnología Inteligente Perimetral</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-brand-black/40 border border-brand-border rounded p-8 hover:border-brand-red/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specifications */}
      <section className="py-24 px-6 md:px-10 max-w-[900px] mx-auto text-center">
        <div className="font-mono text-xs tracking-[0.18em] text-brand-red uppercase mb-3">Garantía Operativa</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase mb-6">Autonomía y Resiliencia Eléctrica</h2>
        <p className="text-brand-gray-light mb-12 text-sm leading-relaxed max-w-[620px] mx-auto">
          Todos nuestros dispositivos e intercomunicadores cuentan con un sistema de UPS integrado que garantiza hasta 6 horas de autonomía y almacenamiento de datos local. Las patentes autorizadas y los registros de ingresos de residentes se sincronizan en la nube de forma selectiva, garantizando que el barrio siga funcionando normalmente aun si se corta la luz en la zona.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="border border-brand-border p-6 rounded bg-brand-surface">
            <h4 className="font-semibold text-sm mb-2">Monitoreo de Salud Activo</h4>
            <p className="text-xs text-brand-gray leading-relaxed">
              El panel central supervisa continuamente la salud de red y alimentación de todos los dispositivos del perímetro de forma automática, despachando técnicos ante cualquier caída de latencia.
            </p>
          </div>
          <div className="border border-brand-border p-6 rounded bg-brand-surface">
            <h4 className="font-semibold text-sm mb-2">Instalación Bonificada</h4>
            <p className="text-xs text-brand-gray leading-relaxed">
              El equipamiento y cableado perimetral están completamente bonificados bajo el modelo de suscripción mensual activa de Shomer Security S.R.L.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.18em] text-brand-red uppercase mb-3 inline-block">Asesoría de Seguridad</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none uppercase mb-6">Planifique la Seguridad de su Barrio</h2>
          <p className="text-brand-gray-light mb-10 max-w-[600px] mx-auto text-sm leading-relaxed">
            Nuestros ingenieros en seguridad pueden realizar un relevamiento técnico tridimensional y diseño de cobertura perimetral sin cargo para evaluar las necesidades específicas de su barrio cerrado.
          </p>

          <Link
            href="/#contacto"
            className="bg-brand-red text-brand-white px-10 py-4 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-brand-black hover:scale-102 transition-all inline-block"
          >
            Solicitar Relevamiento Gratuito
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
