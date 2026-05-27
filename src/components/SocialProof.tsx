"use client";

import Image from "next/image";
import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const localTranslations: Record<string, {
  tag: string;
  title: React.ReactNode;
  mapsLink: string;
  logoTitle: string;
  reviews: Array<{
    name: string;
    rating: number;
    time: string;
    text: string;
  }>;
}> = {
  es: {
    tag: "Clientes que confían",
    title: <>Lo que dicen<br /><em className="text-brand-blue not-italic">quienes</em><br />ya eligieron.</>,
    mapsLink: "Ver todas las reseñas en Google Maps →",
    logoTitle: "Confían en Shomer",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "hace 3 meses",
        text: "Desde que Shomer implementó su sistema integral, en Más Metros redujimos muchas horas de trabajo y de personal de seguridad. Nos gestionan el control de acceso y monitoreo de cámaras, y nos simplificaron la operación. Estamos muy satisfechos con su solución electrónica.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "hace 3 meses",
        text: "Gracias a Shomer, nuestra administración de consorcios tiene seguridad 24/7, con tótems, acceso biométrico y facial. Estamos muy satisfechos con su solución integral y su excelencia.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "hace 6 meses",
        text: "Tengo el servicio de Shomer hace casi un año, es genial, las veces que se sentaron en la puerta les pidieron que se retiren. Me siento más segura desde que protegen mi hogar.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "hace 1 año",
        text: "Excelente servicio, nada comparado con la seguridad que teníamos antes. Lo recomiendo.",
      },
    ]
  },
  en: {
    tag: "Trusted by clients",
    title: <>What<br /><em className="text-brand-blue not-italic">those who</em><br />already chose say.</>,
    mapsLink: "View all reviews on Google Maps →",
    logoTitle: "They trust Shomer",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "3 months ago",
        text: "Since Shomer implemented its comprehensive system, at Más Metros we reduced many hours of work and security personnel. They manage our access control and camera monitoring, and simplified our operation. We are very satisfied with their electronic solution.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "3 months ago",
        text: "Thanks to Shomer, our consortium administration has 24/7 security with totems, biometric and facial access. We are very satisfied with their comprehensive solution and excellence.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "6 months ago",
        text: "I've had Shomer's service for almost a year, it's great, the times people sat at the door they were asked to leave. I feel safer since they protect my home.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "1 year ago",
        text: "Excellent service, nothing compared to the security we had before. I recommend it.",
      },
    ]
  },
  he: {
    tag: "לקוחות סומכים",
    title: <>מה שאומרים<br /><em className="text-brand-blue not-italic">אלה שכבר</em><br />בחרו.</>,
    mapsLink: "צפה בכל הביקורות בגוגל מפות ←",
    logoTitle: "סומכים על שומר",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "לפני 3 חודשים",
        text: "מאז ששומר הטמיעה את המערכת המקיפה שלה, ב-Más Metros צמצמנו שעות עבודה רבות וצוותי אבטחה. הם מנהלים עבורנו את בקרת הכניסה וניטור המצלמות, ופישטו את הפעילות שלנו. אנו מרוצים מאוד מהפתרון האלקטרוני שלהם.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "לפני 3 חודשים",
        text: "הודות לשומר, לניהול בנייני המגורים שלנו יש אבטחה 24/7, עם טוטמים, גישה ביומטרית וזיהוי פנים. אנו מרוצים מאוד מהפתרון המקיף ומהמצוינות שלהם.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "לפני 6 חודשים",
        text: "יש לי את השירות של שומר כבר כמעט שנה, זה נהדר. כשזרים התיישבו ליד השער, המפעילים ביקשו מהם לעזוב. אני מרגישה בטוחה יותר מאז שהם מגינים על הבית שלי.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "לפני שנה",
        text: "שירות מצוין, אין מה להשוвать לאבטחה שהייתה לנו קודם. ממליצה בחום.",
      },
    ]
  },
  de: {
    tag: "Kunden, die vertrauen",
    title: <>Was diejenigen sagen,<br /><em className="text-brand-blue not-italic">die bereits</em><br />gewählt haben.</>,
    mapsLink: "Alle Bewertungen auf Google Maps anzeigen →",
    logoTitle: "Sie vertrauen Shomer",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "vor 3 Monaten",
        text: "Seit Shomer sein umfassendes System implementiert hat, haben wir bei Más Metros viele Arbeitsstunden und Sicherheitskosten eingespart. Sie verwalten unsere Zugangskontrolle und Kameraüberwachung und haben den Betrieb vereinfacht. Wir sind mit ihrer elektronischen Lösung sehr zufrieden.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "vor 3 Monaten",
        text: "Dank Shomer verfügt unsere Eigentümergemeinschaft über eine 24/7-Sicherheit mit Totems, biometrischem Zugang und Gesichtserkennung. Wir sind mit der Gesamtlösung und dem Service sehr zufrieden.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "vor 6 Monaten",
        text: "Ich nutze den Shomer-Service seit fast einem Jahr. Es ist großartig. Wenn sich Personen vor die Tür gesetzt haben, wurden sie gebeten zu gehen. Ich fühle mich sicherer, seit sie mein Zuhause schützen.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "vor 1 Jahr",
        text: "Ausgezeichneter Service, kein Vergleich zu der Sicherheit, die wir vorher hatten. Ich kann es nur empfehlen.",
      },
    ]
  },
  ru: {
    tag: "Клиенты, которые доверяют",
    title: <>Что говорят те,<br /><em className="text-brand-blue not-italic">кто уже</em><br />выбрал.</>,
    mapsLink: "Посмотреть все отзывы на Google Maps →",
    logoTitle: "Они доверяют Shomer",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "3 месяца назад",
        text: "С тех пор как Shomer внедрил свою комплексную систему, в Más Metros мы сократили много часов работы и затрат на охранников. Они управляют контролем доступа и мониторингом камер, упростив всю эксплуатацию. Мы очень довольны их электронным решением.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "3 месяца назад",
        text: "Благодаря Shomer наше управление консорциумом имеет безопасность 24/7 с тотемами, биометрическим и лицевым доступом. Мы очень довольны их комплексным решением и превосходным качеством.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "6 месяцев назад",
        text: "Я пользуюсь услугами Shomer почти год, это здорово. Те несколько раз, когда подозрительные люди садились у двери, операторы просили их удалиться. Я чувствую себя в большей безопасности с тех пор, как они защищают мой дом.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "1 год назад",
        text: "Отличный сервис, никакого сравнения с той безопасностью, которая была у нас раньше. Рекомендую.",
      },
    ]
  },
  pt: {
    tag: "Clientes que confiam",
    title: <>O que dizem<br /><em className="text-brand-blue not-italic">os que já</em><br />escolheram.</>,
    mapsLink: "Ver todas as avaliações no Google Maps →",
    logoTitle: "Confiam na Shomer",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "há 3 meses",
        text: "Desde que a Shomer implementou o seu sistema integral, na Más Metros reduzimos muitas horas de trabalho e de pessoal de segurança. Eles gerem o nosso controlo de acessos e monitorização de câmaras, simplificando a operação. Estamos muito satisfeitos com a sua solução eletrónica.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "há 3 meses",
        text: "Graças à Shomer, a nossa administração de condomínios tem segurança 24/7, com totens, acesso biométrico e facial. Estamos muito satisfeitos com a sua solução integral e com a sua excelência.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "há 6 meses",
        text: "Tenho o serviço da Shomer há quase um ano, é fantástico. Nas vezes em que pessoas se sentaram à porta, foi-lo pedido que se retirassem. Sinto-me mais segura desde que protegem a minha casa.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "há 1 ano",
        text: "Excelente serviço, nada comparado com a segurança que tínhamos antes. Recomendo.",
      },
    ]
  },
  it: {
    tag: "Clienti che si fidano",
    title: <>Cosa dice<br /><em className="text-brand-blue not-italic">chi ha già</em><br />scelto.</>,
    mapsLink: "Vedi tutte le recensioni su Google Maps →",
    logoTitle: "Si fidano di Shomer",
    reviews: [
      {
        name: "Jonathan Komarofsky",
        rating: 5,
        time: "3 mesi fa",
        text: "Da quando Shomer ha implementato il suo sistema integrato, in Más Metros abbiamo risparmiato molte ore di lavoro e personale di sicurezza. Gestiscono il controllo degli accessi e il monitoraggio delle telecamere, semplificando le operazioni. Siamo molto soddisfatti della loro soluzione elettronica.",
      },
      {
        name: "Sebastian Faur",
        rating: 5,
        time: "3 mesi fa",
        text: "Grazie a Shomer, la nostra amministrazione condominiale ha sicurezza 24/7 con totem, accessi biometrici e facciali. Siamo estremamente soddisfatti della loro soluzione completa e della loro eccellenza.",
      },
      {
        name: "Shirel Radzi",
        rating: 5,
        time: "6 mesi fa",
        text: "Uso il servizio Shomer da quasi un anno ed è fantastico. Quelle volte che si sono seduti davanti alla porta, è stato chiesto loro di allontanarsi. Mi sento più sicura da quando proteggono la mia casa.",
      },
      {
        name: "Magalyyy Antunez",
        rating: 5,
        time: "1 anno fa",
        text: "Servizio eccellente, niente a che vedere con la sicurezza che avevamo prima. Lo raccomando.",
      },
    ]
  }
};

const clients = [
  { name: "WorkingDepot",             src: "/images/clients/workingdepot.png" },
  { name: "+Metros Creadores de Espacios", src: "/images/clients/metros.png" },
  { name: "Grupo Vientos",            src: "/images/clients/grupovientos.png" },
  { name: "Milenium Tower",           src: "/images/clients/milenium-tower.png" },
  { name: "Urban Storage",            src: "/images/clients/urban-storage.png" },
];

const MAPS_URL = "https://maps.app.goo.gl/6pcDXfy1M1NeR9eq8";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < count ? "#00BFFF" : "none"} stroke="#00BFFF" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r, delay }: { r: { name: string; rating: number; time: string; text: string }; delay: number }) {
  return (
    <FadeUp delay={delay} className="h-full">
      <div className="border border-brand-border rounded p-5 bg-brand-surface-2 flex flex-col gap-3 h-full relative">
        <div className="absolute top-4 right-4">
          <GoogleIcon />
        </div>
        <div className="flex items-center gap-3 pr-6">
          <div className="w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center font-display text-base text-brand-blue shrink-0">
            {r.name[0]}
          </div>
          <div>
            <div className="font-medium text-[0.88rem] leading-tight">{r.name}</div>
            <div className="text-[0.7rem] text-brand-gray font-mono mt-0.5">{r.time}</div>
          </div>
        </div>
        <Stars count={r.rating} />
        <p className="text-[0.84rem] text-brand-gray-light leading-relaxed">"{r.text}"</p>
      </div>
    </FadeUp>
  );
}

export function SocialProof() {
  const { language } = useLanguage();
  const t = localTranslations[language] || localTranslations.en || localTranslations.es;
  const reviews = t.reviews;
  
  const isRtl = language === "he";

  return (
    <section id="testimonios" className="py-16 md:py-24 px-6 md:px-10 bg-brand-surface" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-14">
            {t.title}
          </h2>
        </FadeUp>

        {/* Reviews grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} delay={i * 0.08} />
          ))}
        </div>

        {/* Maps link */}
        <div className={`flex ${isRtl ? "justify-end" : "justify-start"} pt-6 border-t border-brand-border mb-16`}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
          >
            <GoogleIcon />
            {t.mapsLink}
          </a>
        </div>

        {/* Client logos */}
        <FadeUp>
          <p className="text-[0.7rem] font-mono tracking-[0.18em] uppercase text-brand-gray text-center mb-8">{t.logoTitle}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-brand-border border border-brand-border rounded overflow-hidden">
            {clients.map((c) => (
              <div key={c.name} className="bg-brand-surface-2 flex items-center justify-center py-8 px-6 group transition-colors hover:bg-brand-surface">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={60}
                  className="h-10 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 brightness-0 invert filter hover:scale-105"
                />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
