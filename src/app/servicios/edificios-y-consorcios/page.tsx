import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Key, Eye, EyeOff, CheckCircle2, UserCheck, AlertTriangle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguridad para Edificios y Consorcios — Shomer Security",
  description: "La evolución de la portería en consorcios. Acceso biométrico con reconocimiento facial, Tótem interactivo y control centralizado 24/7/365.",
  keywords: ["portero visor edificios", "seguridad consorcios", "portero electrico inteligente", "totem seguridad", "shomer security", "sistema shabat"],
  robots: "index, follow",
};

export default function EdificiosPage() {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6 text-brand-blue" />,
      title: "Reconocimiento Facial Inteligente",
      desc: "Acceso con Face ID potenciado con inteligencia artificial. Tiempo de respuesta de ultra-alta velocidad (200ms) y alta resistencia anti-robo.",
    },
    {
      icon: <Key className="w-6 h-6 text-brand-blue" />,
      title: "Control de Acceso Total",
      desc: "Autenticación por huella digital, tarjeta RFID personalizada y sensores avanzados contra intrusiones o alerta de 'Puerta Abierta'.",
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
      title: "Huella de Pánico",
      desc: "Permite registrar un dedo alternativo para enviar en secreto una alarma silenciosa e inmediata a nuestra central en caso de coacción.",
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-blue" />,
      title: "Televigilancia e Integración de Tótem",
      desc: "Tótem interactivo con audio bidireccional en tiempo real, sirena de alta potencia y monitoristas altamente capacitados que actúan al instante.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 flex items-center overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/images/hero-bg.jpg" alt="Fondo de seguridad residencial" fill className="object-cover" />
        </div>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,191,255,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Soluciones Residenciales</div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none uppercase mb-6">
            Edificios y<br /><em className="text-brand-blue not-italic">Consorcios</em>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light leading-relaxed max-w-[680px] font-light mb-8">
            Reemplazamos las debilidades del esquema de vigilancia física tradicional con un ecosistema híbrido que combina tecnología de vanguardia y operadores alertas las 24 horas del día.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all"
            >
              Consultar con un Asesor
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">La evolución del acceso</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none uppercase mb-6">
              El Fin de la Llave<br />Física y de la Inseguridad
            </h2>
            <p className="text-brand-gray-light leading-relaxed mb-6">
              Los consorcios tradicionales sufren constantes brechas de seguridad por copias de llaves no autorizadas, porteros distraídos y portones de acceso que quedan abiertos. Shomer redefine la seguridad en consorcios con una propuesta robusta que pone el control lógico en la nube antes de que la puerta se abra de forma física.
            </p>
            <p className="text-brand-gray-light leading-relaxed">
              Nuestro hardware está diseñado para resistir intentos de sabotaje mientras que el software brinda trazabilidad completa a los administradores e inquilinos, ofreciendo un registro detallado de cada ingreso en tiempo real.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded border border-brand-border overflow-hidden bg-brand-surface/40 p-1 flex items-center justify-center">
            <Image src="/images/vision-pro.png" alt="Dispositivo de Acceso Facial Shomer" fill className="object-contain p-8" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-10 bg-brand-surface border-t border-b border-brand-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Ecosistema Shomer</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase">Tecnología de Grado Militar para tu Edificio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-brand-black/40 border border-brand-border rounded p-8 hover:border-brand-blue/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema Shabat Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-video rounded border border-brand-border overflow-hidden bg-brand-surface/40 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none" />
            <div className="z-10 text-center">
              <span className="inline-block px-3 py-1 bg-brand-blue-dim border border-brand-blue/30 text-brand-blue rounded-full text-xs font-mono mb-4">INCLUIDO EN PROPUESTA B Y C</span>
              <h4 className="font-display text-4xl uppercase mb-2">SISTEMA SHABAT</h4>
              <p className="text-xs text-brand-gray uppercase font-mono tracking-widest">Respeto, Convivencia y Tecnología</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Convivencia y respeto</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none uppercase mb-6">
              Sistema Shabat Integrado
            </h2>
            <p className="text-brand-gray-light leading-relaxed mb-6">
              Pensando en las costumbres y necesidades religiosas de la Colectividad Judía, desarrollamos una solución tecnológica que permite la operación y acceso de forma respetuosa durante el Shabat.
            </p>
            <p className="text-brand-gray-light leading-relaxed">
              El sistema biométrico y los automatismos de apertura se adaptan bajo protocolos específicos para evitar la transgresión de las normas del Shabat, manteniendo el edificio totalmente protegido. Asimismo, el sistema sigue funcionando de manera convencional y biométrica para el resto de los residentes no observantes, asegurando una convivencia armónica y fluida.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Promo Highlights */}
      <section className="py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.18em] text-brand-green uppercase mb-3 inline-block">Promoción Especial</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none uppercase mb-6">Instalación 100% Bonificada</h2>
          <p className="text-brand-gray-light mb-10 max-w-[620px] mx-auto text-sm leading-relaxed">
            Durante este mes, los equipos y la instalación de infraestructura física para tu consorcio están 100% bonificados. Shomer Security provee e instala los lectores, cámaras e intercomunicadores en comodato sin costo inicial.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-12">
            <div className="border border-brand-border bg-brand-surface p-6 rounded">
              <h4 className="font-mono text-xs text-brand-blue uppercase mb-2">Requisitos Técnicos</h4>
              <p className="text-xs text-brand-gray leading-relaxed">
                Conexión a internet con IP pública fija y al menos 100 Mbps de subida (recomendado fibra óptica corporativa) y conexión a 220V.
              </p>
            </div>
            <div className="border border-brand-border bg-brand-surface p-6 rounded">
              <h4 className="font-mono text-xs text-brand-blue uppercase mb-2">Soporte Técnico</h4>
              <p className="text-xs text-brand-gray leading-relaxed">
                Monitoreo activo y mantenimiento proactivo de la salud de los dispositivos. Detectamos anomalías y enviamos técnicos sin necesidad de reportes.
              </p>
            </div>
            <div className="border border-brand-border bg-brand-surface p-6 rounded">
              <h4 className="font-mono text-xs text-brand-blue uppercase mb-2">Servicio al Cliente</h4>
              <p className="text-xs text-brand-gray leading-relaxed">
                Central de monitoreo activa las 24 horas, los 365 días del año. Respuestas coordinadas inmediatas con las fuerzas de seguridad pública.
              </p>
            </div>
          </div>

          <Link
            href="/#contacto"
            className="bg-brand-blue text-brand-black px-10 py-4 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-white hover:scale-102 transition-all inline-block"
          >
            Solicitar Presupuesto Bonificado
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
