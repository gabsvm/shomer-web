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

const SITE_URL = "https://shomer-web.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/hero-bg-new.jpg`;

export const metadata: Metadata = {
  title: "Shomer Security — La evolución del portero eléctrico",
  description:
    "Control de accesos inteligente con Face ID, monitoreo 24/7 y un ecosistema que evoluciona con tu edificio.",
  openGraph: {
    title: "Shomer Security — Seguridad que no descansa",
    description: "Control de accesos inteligente con Face ID, monitoreo 24/7 y un ecosistema que evoluciona con tu edificio.",
    url: SITE_URL,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Shomer Security — Control de accesos inteligente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shomer Security — Seguridad que no descansa",
    description: "Control de accesos inteligente con Face ID, monitoreo 24/7 y un ecosistema que evoluciona con tu edificio.",
    images: [OG_IMAGE],
  },
  robots: "index, follow",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shomer Security",
  description: "Control de accesos inteligente con Face ID, monitoreo 24/7 y un ecosistema que evoluciona con tu edificio.",
  url: "https://shomer-web.vercel.app",
  telephone: ["+541123648511", "+541179994444"],
  email: "info@shomer.com.ar",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressRegion: "Buenos Aires",
  },
  sameAs: [
    "https://instagram.com/shomer_arg",
    "https://linkedin.com/in/shomerarg",
  ],
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
