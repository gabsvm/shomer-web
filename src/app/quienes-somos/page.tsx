import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutClient } from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos — Shomer Security",
  description: "Conocé la filosofía, visión e ingeniería detrás de Shomer Security. Democratizando la seguridad física de alta gama con tecnología avanzada, Face ID y analíticas en la nube.",
  robots: "index, follow",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <AboutClient />
      <Footer />
    </main>
  );
}
