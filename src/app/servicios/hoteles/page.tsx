import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Smile, Calendar, ShieldAlert, Key, HeartHandshake, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguridad y Accesos para Hoteles y Airbnb — Shomer Security",
  description: "Check-in sin fricciones para huéspedes. Acceso biométrico con reconocimiento facial sin llaves físicas, tarjetas ni personal de recepción 24/7.",
  keywords: ["seguridad hoteles", "acceso airbnb facial", "check-in facial hoteles", "portero electrico inteligente", "shomer security"],
  robots: "index, follow",
};

export default function HotelesPage() {
  const hotelFeatures = [
    {
      icon: <Smile className="w-6 h-6 text-purple-400" />,
      title: "Check-In Facial sin Fricciones",
      desc: "Los huéspedes acceden al establecimiento y a sus habitaciones usando su cara. Sin llaves metálicas, tarjetas plásticas que se pierden ni recepciones lentas.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Habilitación y Reserva Integrada",
      desc: "Dé de alta a sus clientes enviando su foto y datos básicos. El sistema otorga acceso de forma autónoma únicamente dentro de las fechas y horarios de la reserva.",
    },
    {
      icon: <Key className="w-6 h-6 text-purple-400" />,
      title: "Control de Personal por Turnos",
      desc: "Gestione el acceso del personal de limpieza, mantenimiento o guardias según sus respectivos turnos de trabajo, bloqueando el ingreso fuera de su horario laboral.",
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      title: "Monitoreo Virtual y Soporte 24/7",
      desc: "Central activa para dar soporte remoto a los huéspedes que requieran ayuda, coordinando con monitoristas en vivo mediante audio bidireccional en tiempo real.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 flex items-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Image src="/images/hero-bg-new.jpg" alt="Fondo de hotel moderno" fill className="object-cover" />
        </div>
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase mb-3">Soluciones de Hospitalidad</div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none uppercase mb-6">
            Hoteles y<br /><em className="text-purple-400 not-italic">Airbnb</em>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light leading-relaxed max-w-[680px] font-light mb-8">
            Reduzca sus costos operativos eliminando la necesidad de una recepción nocturna física. Brinde una experiencia premium, digital e interactiva donde el rostro del huésped es su llave de entrada.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="bg-purple-600 text-brand-white px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-brand-black hover:-translate-y-px transition-all"
            >
              Contactar Consultor Hotelero
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase mb-3">La Llave es su Rostro</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none uppercase mb-6">
              Check-In Remoto e Inmediato
            </h2>
            <p className="text-brand-gray-light leading-relaxed mb-6">
              En la hotelería moderna o el alquiler temporario (Airbnb), la entrega de llaves es el principal punto de fricción operativa. La solución biométrica de Shomer permite que el huésped envíe su selfie y DNI/Pasaporte antes de llegar.
            </p>
            <p className="text-brand-gray-light leading-relaxed">
              Al arribar, el lector de reconocimiento facial valida su rostro en menos de 200ms y destraba los accesos correspondientes, registrando la entrada de forma autónoma. Esto permite una operación sin personal en recepción las 24 horas del día, reduciendo costos de nómina mientras incrementa la satisfacción del cliente.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded border border-brand-border overflow-hidden bg-brand-surface/40 p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />
            <Image src="/images/vision-pro.png" alt="Dispositivo de Acceso Biométrico Shomer en Hoteles" fill className="object-contain p-8" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-10 bg-brand-surface border-t border-b border-brand-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase mb-3">Características Principales</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase">Hospitalidad Inteligente e Integrada</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotelFeatures.map((feature, idx) => (
              <div key={idx} className="bg-brand-black/40 border border-brand-border rounded p-8 hover:border-purple-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 md:px-10 max-w-[900px] mx-auto text-center">
        <div className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase mb-3">Beneficios Operativos</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase mb-6">Eficiencia Absoluta en la Gestión</h2>
        <p className="text-brand-gray-light mb-12 text-sm leading-relaxed max-w-[620px] mx-auto">
          Simplifique la logística de su propiedad turística u hotelera. Con la plataforma en la nube de Shomer, usted tiene visibilidad completa del estado de sus accesos en tiempo real, desde cualquier parte del mundo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="border border-brand-border p-6 rounded bg-brand-surface">
            <h4 className="font-semibold text-sm mb-2">Despacho y Soporte Remoto</h4>
            <p className="text-xs text-brand-gray leading-relaxed">
              ¿Un huésped tiene problemas para ingresar? La central puede verificar su identidad por video-llamada y abrir la puerta de forma remota e instantánea.
            </p>
          </div>
          <div className="border border-brand-border p-6 rounded bg-brand-surface">
            <h4 className="font-semibold text-sm mb-2">Equipos Bonificados</h4>
            <p className="text-xs text-brand-gray leading-relaxed">
              Instale cerraduras electrónicas y terminales faciales de última generación en comodato sin inversión de capital inicial. Pago por abono mensual.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.18em] text-purple-400 uppercase mb-3 inline-block">Consultoría sin costo</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none uppercase mb-6">Reduzca Costos Operativos Hoy</h2>
          <p className="text-brand-gray-light mb-10 max-w-[600px] mx-auto text-sm leading-relaxed">
            Analizamos la viabilidad de acceso inteligente en su hotel o departamento temporario de forma totalmente gratuita y le presupuestamos el abono mensual correspondiente.
          </p>

          <Link
            href="/#contacto"
            className="bg-purple-600 text-brand-white px-10 py-4 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-brand-black hover:scale-102 transition-all inline-block"
          >
            Solicitar Asesoramiento
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
