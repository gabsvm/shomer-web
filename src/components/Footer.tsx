"use client";

import { FadeUp } from "./FadeUp";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-brand-border">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/images/SHOMER.png" alt="Shomer Security" width={140} height={52} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-[0.83rem] text-brand-gray leading-relaxed max-w-[280px]">
              La evolución del portero eléctrico. Tecnología, control y seguridad real para consorcios, empresas y hoteles en Argentina.
            </p>
          </div>
          
          <div>
            <h4 className="text-[0.72rem] font-mono tracking-[0.15em] uppercase text-brand-gray mb-5">Productos</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#vision" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Línea VISION</Link></li>
              <li><Link href="/#totem" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Tótem de Seguridad</Link></li>
              <li><Link href="/#precios" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Planes y precios</Link></li>
              <li><Link href="/blog" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Blog</Link></li>
              <li><a href="https://shomer-club-v2.vercel.app" target="_blank" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Club Shomer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[0.72rem] font-mono tracking-[0.15em] uppercase text-brand-gray mb-5">Servicios</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/servicios/edificios-y-consorcios" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Edificios y Consorcios</Link></li>
              <li><Link href="/servicios/empresas" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Empresas</Link></li>
              <li><Link href="/servicios/barrios-cerrados" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Barrios Cerrados</Link></li>
              <li><Link href="/servicios/hoteles" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">Hoteles</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[0.72rem] font-mono tracking-[0.15em] uppercase text-brand-gray mb-5">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="tel:+541123648511" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">+54 11 2364-8511</a></li>
              <li><a href="tel:+541179994444" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">+54 11 7999-4444</a></li>
              <li><a href="mailto:info@shomer.com.ar" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">info@shomer.com.ar</a></li>
              <li><a href="mailto:rrhh@shomer.com.ar" className="text-[0.85rem] text-brand-gray-light hover:text-brand-blue transition-colors">rrhh@shomer.com.ar</a></li>
            </ul>
          </div>
        </div>
        
        {/* Habilitación — fuente: Disposición N° 49/DGSPCB/22, BOCBA N° 6313 del 07/02/2022 */}
        <div className="py-4 border-b border-brand-border flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-[0.7rem] text-brand-gray font-mono">CUIT 30-71553704-0</span>
          <span className="text-[0.7rem] text-brand-gray font-mono">Hab. C.A.B.A. · Disp. N° 49/DGSPCB/22 · Ley 5688</span>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-[0.75rem] text-brand-gray font-mono">© {new Date().getFullYear()} Shomer Security SRL — Todos los derechos reservados</p>
            <Link href="/privacidad" className="text-[0.75rem] text-brand-gray font-mono hover:text-brand-blue transition-colors">
              Política de privacidad
            </Link>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/shomer_arg" target="_blank" aria-label="Instagram de Shomer Security" className="w-9 h-9 border border-brand-border rounded-full flex items-center justify-center text-brand-gray hover:border-brand-blue hover:text-brand-blue transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://linkedin.com/in/shomerarg" target="_blank" aria-label="LinkedIn de Shomer Security" className="w-9 h-9 border border-brand-border rounded-full flex items-center justify-center text-brand-gray hover:border-brand-blue hover:text-brand-blue transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

