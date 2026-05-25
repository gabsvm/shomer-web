import type { Viewport } from "next";
import { Outfit, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/context/LanguageContext";
import { Locale, translations } from "@/translations";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
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

export async function generateMetadata() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const t = translations[lang] || translations["es"];
  const SITE_URL = "https://shomer-web.vercel.app";
  const OG_IMAGE = `${SITE_URL}/images/vision-pro.png`;
  
  const title = `Shomer Security — ${t.hero.title1} ${t.hero.title2}`;
  const description = t.hero.desc;

  return {
    title,
    description,
    icons: {
      icon: "/logo.png",
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Shomer Security" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: "index, follow",
  };
}

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "es") as Locale;
  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-brand-black text-brand-white font-body`}
      >
        <LanguageProvider initialLang={lang}>
          {children}
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
