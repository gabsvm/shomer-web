"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const aboutLabels: Record<string, string> = {
    es: "Nosotros",
    en: "About Us",
    he: "מי אנחנו",
    de: "Über uns",
    ru: "О нас",
    pt: "Sobre nós",
    it: "Chi siamo"
  };

  const links = [
    { href: "/#vision", label: t("navbar.vision") },
    { href: "/#totem", label: t("navbar.totem") },
    { href: "/#segmentos", label: t("navbar.services") },
    { href: "/quienes-somos", label: aboutLabels[language] || aboutLabels.es },
    { href: "/#precios", label: t("navbar.pricing") },
    { href: "/blog", label: t("navbar.blog") },
    { href: "/#testimonios", label: t("navbar.clients") },
    { href: "https://shomer-club-v2.vercel.app", label: t("navbar.club"), external: true },
  ];

  const languages = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "he", label: "עב" }, // עברית
    { code: "de", label: "DE" },
    { code: "ru", label: "RU" },
    { code: "pt", label: "PT" },
    { code: "it", label: "IT" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 backdrop-blur-md border-b border-brand-border ${
          scrolled ? "h-14 bg-black/90" : "h-[68px] bg-black/70"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image src="/images/SHOMER.png" alt="Shomer Security" width={120} height={44} preload fetchPriority="high" loading="eager" sizes="120px" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex gap-8 list-none">
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

        {/* Right Actions Menu (Desktop CTA + Language Selector) */}
        <div className="flex items-center gap-4">
          {/* Language Selector Toggle */}
          <div className="relative flex items-center gap-1.5 bg-brand-surface border border-brand-border rounded px-2 py-1">
            <Globe className="w-3.5 h-3.5 text-brand-blue" />
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value as Locale);
                router.refresh();
              }}
              aria-label="Seleccionar idioma"
              className="bg-transparent text-brand-white text-xs font-mono font-medium focus:outline-none cursor-pointer uppercase border-none pr-1"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-brand-black text-brand-white">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <Link
            href="/#contacto"
            className="hidden md:inline-block bg-brand-blue text-brand-black px-5 py-2.5 rounded-sm text-[0.82rem] font-bold tracking-[0.06em] uppercase hover:bg-white hover:text-brand-black transition-colors whitespace-nowrap"
          >
            {t("common.cta")}
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="xl:hidden p-2 text-brand-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-x-0 bottom-0 z-40 bg-black/98 flex flex-col p-10 gap-6 animate-fade-in-down ${
            scrolled ? "top-14" : "top-[68px]"
          }`}
        >
          {links.map((link, idx) => (
            <div
              key={link.href}
              className="animate-fade-in-left opacity-0"
              style={{ animationDelay: `${idx * 50}ms`, animationFillMode: "forwards" }}
            >
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium py-3 border-b border-brand-border text-brand-white block hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${links.length * 50}ms`, animationFillMode: "forwards" }}
          >
            <Link
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-brand-blue text-brand-black p-4 text-center rounded-sm font-bold text-lg uppercase block hover:bg-white hover:text-brand-black transition-all"
            >
              {t("common.cta")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
