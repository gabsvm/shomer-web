"use client";

import { FadeUp } from "./FadeUp";
import { Wrench, Shield, Users, RefreshCw, BarChart, BellRing } from "lucide-react";

export function Includes() {
  const items = [
    { icon: <Wrench size={20} />, title: "Instalación inicial", text: "Instalación profesional por técnico especializado, sin costo adicional. Incluye configuración completa y capacitación al administrador." },
    { icon: <Shield size={20} />, title: "Soporte técnico completo", text: "Soporte ilimitado incluido en el abono. Sin 'pago aparte'. Atención directa, respuesta rápida ante cualquier inconveniente." },
    { icon: <Users size={20} />, title: "Altas y bajas de usuarios", text: "Gestión continua de alta y baja de residentes, empleados y visitas. Siempre actualizado, sin procesos manuales del administrador." },
    { icon: <RefreshCw size={20} />, title: "Actualizaciones automáticas", text: "El software evoluciona continuamente. Nuevas funciones llegan automáticamente. Lo que contratás hoy será más potente en 6 meses." },
    { icon: <BarChart size={20} />, title: "Gestión de accesos", text: "Control centralizado desde la base Shomer. Historial de cada acceso, reportes por período y detección de anomalías." },
    { icon: <BellRing size={20} />, title: "Monitoreo y control", text: "Central operativa 24 horas. Respuesta inmediata ante siniestros, apertura de emergencia y coordinación con fuerzas de seguridad." }
  ];

  return (
    <section id="incluye" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">Modelo de servicio</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-5">
            No comprás un equipo.<br /><em className="text-brand-blue not-italic">Suscribís</em> a un ecosistema.
          </h2>
          <p className="text-lg text-brand-gray-light leading-relaxed max-w-[620px] font-light mb-14">
            Mientras otros te venden hardware y se desentienden, nosotros evolucionamos con vos. El valor del servicio crece con el tiempo.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border rounded overflow-hidden">
          {items.map((item, i) => (
            <FadeUp key={item.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="bg-brand-surface p-6 sm:p-10 h-full flex flex-col">
                <div className="w-11 h-11 rounded-full bg-brand-blue-dim border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-5">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[0.95rem] mb-3">{item.title}</h4>
                <p className="text-[0.83rem] text-brand-gray leading-relaxed">{item.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
