"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#vision", label: "Línea Vision" },
    { href: "/#totem", label: "Tótem" },
    { href: "/#segmentos", label: "Servicios" },
    { href: "/#precios", label: "Precios" },
    { href: "/#testimonios", label: "Clientes" },
    { href: "https://shomer-club-v2.vercel.app", label: "Club Shomer", external: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 backdrop-blur-md border-b border-brand-border ${
          scrolled ? "h-14 bg-black/90" : "h-[68px] bg-black/70"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image src="/images/SHOMER.png" alt="Shomer Security" width={120} height={44} className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="text-[0.82rem] font-medium tracking-[0.06em] uppercase text-brand-gray-light hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#contacto"
          className="hidden md:inline-block bg-brand-blue text-brand-black px-5 py-2.5 rounded-sm text-[0.82rem] font-bold tracking-[0.06em] uppercase hover:bg-white hover:text-brand-black transition-colors whitespace-nowrap"
        >
          Cotizar ahora
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-brand-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[68px] bg-black/95 z-40 flex flex-col p-10 gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium py-3 border-b border-brand-border text-brand-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-brand-blue text-brand-black p-4 text-center rounded-sm font-bold text-lg uppercase"
            >
              Cotizar ahora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
