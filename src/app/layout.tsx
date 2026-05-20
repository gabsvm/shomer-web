import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shomer Security — La evolución del portero eléctrico",
  description:
    "Control de accesos inteligente con Face ID, monitoreo 24/7 y un ecosistema que evoluciona con tu edificio.",
  openGraph: {
    title: "Shomer Security — Seguridad que no descansa",
    description: "Control de accesos inteligente con Face ID, monitoreo 24/7 y un ecosistema que evoluciona con tu edificio.",
    url: "https://shomer.com.ar",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable} antialiased bg-brand-black text-brand-white font-body`}
      >
        {children}
      </body>
    </html>
  );
}
