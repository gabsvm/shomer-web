"use client";

import Image from "next/image";
import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";

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
  whatsappTitle?: string;
  whatsappDesc?: string;
  whatsappChats?: Array<{
    id: string;
    clientName: string;
    avatar: string;
    messages: Array<{
      sender: "client" | "central";
      text: string;
      time: string;
    }>;
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
    ],
    whatsappTitle: "Interacciones reales con la Central.",
    whatsappDesc: "Conversaciones reales (transcritas de capturas de WhatsApp) entre administradores y residentes con la central de monitoreo de Shomer en situaciones cotidianas de prevención, soporte y respuesta.",
    whatsappChats: [
      {
        id: "chat1",
        clientName: "Carlos Vignolo (Alta de Tarjetas)",
        avatar: "CV",
        messages: [
          { sender: "client", text: "estos son los datos...", time: "09:07" },
          { sender: "client", text: "las tarjetas para activar y serán destinadas al 4B", time: "09:08" },
          { sender: "client", text: "Mil gracias!!!", time: "09:08" },
          { sender: "central", text: "dale perfecto, ahora las realizamos", time: "09:08" },
          { sender: "central", text: "Listo, ya estan dadas de alta!", time: "09:14" },
          { sender: "client", text: "Son unos grandes...", time: "09:36" },
          { sender: "client", text: "un placer trabajar con ustedes..", time: "09:36" },
          { sender: "central", text: "Que tengan buen dia", time: "09:37" }
        ]
      },
      {
        id: "chat2",
        clientName: "Miguel Soto (Reparación de Imán)",
        avatar: "MS",
        messages: [
          { sender: "client", text: "Perfecto muchas gracias por ocuparse", time: "21:37" },
          { sender: "central", text: "Nuestro grupo técnico fue a revisar la puerta", time: "21:50" },
          { sender: "central", text: "Nuestro grupo técnico ya arreglo el imán", time: "21:57" },
          { sender: "client", text: "Perfecto muchas gracias mañana mando a cerrajero", time: "22:07" },
          { sender: "client", text: "Millones de gracias", time: "22:07" },
          { sender: "central", text: "A usted", time: "22:07" },
          { sender: "central", text: "Ya la puerta cierra correctamente", time: "22:08" },
          { sender: "client", text: "Mejor aún entonces son unos genios", time: "22:08" },
          { sender: "client", text: "De verdad gracias", time: "22:08" },
          { sender: "central", text: "De igual manera nosotros estamos atentos", time: "22:08" }
        ]
      },
      {
        id: "chat3",
        clientName: "Jorge Gómez (Control de Accesos)",
        avatar: "JG",
        messages: [
          { sender: "central", text: "seria el propietario de la tarjeta?", time: "16:31" },
          { sender: "client", text: "sisi es ese nombre", time: "16:32" },
          { sender: "central", text: "ok ahora lo arreglamos", time: "16:33" },
          { sender: "client", text: "yo había pedido que la den de alta el otro dia...", time: "16:33" },
          { sender: "client", text: "Dale dale", time: "16:33" },
          { sender: "client", text: "gracias!!", time: "16:33" },
          { sender: "client", text: "avisame asi le aviso a la persona", time: "16:33" },
          { sender: "central", text: "listo", time: "16:33" },
          { sender: "central", text: "ya fue solucionado.", time: "16:33" },
          { sender: "client", text: "gracias por la velocidad", time: "16:33" },
          { sender: "client", text: "excelente!!", time: "16:33" },
          { sender: "central", text: "no de nada sr jorge.", time: "16:34" },
          { sender: "central", text: "que tenga buenas tardes sr jorge.", time: "16:34" },
          { sender: "central", text: "estamos a su disposición!!!", time: "16:35" },
          { sender: "central", text: "Buenas tardes sr Jorge, sabe que acaban de dejar la puerta abierta de Boyacá 652. La cerró recién la misma que la dejó abierta. La srta del 7B.", time: "20:13" }
        ]
      },
      {
        id: "chat4",
        clientName: "Eleutelio Freire (Mensaje 1)",
        avatar: "EF",
        messages: [
          { sender: "client", text: "Hola como andan chicos ? Todavía los extraño mucho 🥰", time: "18:56" },
          { sender: "central", text: "Gracias por comunicarte con Shomer Security Central Monitoreo. ¿Cómo podemos ayudarte?", time: "18:56" },
          { sender: "central", text: "Buenas noches Sr.. Que tal el edificio? Com va todo?", time: "18:57" },
          { sender: "client", text: "Todo bien gracias a dios pero la seguridad ay mucho q decir para mal", time: "18:58" },
          { sender: "central", text: "Uh, bueno una lastima.. Ojala que podamos volver... Hablá con administración asi volvemos.", time: "18:58" },
          { sender: "client", text: "Si si por favor  🙏", time: "18:59" },
          { sender: "central", text: "Saludos te mandamos aca todos.", time: "18:59" },
          { sender: "central", text: "te extrañamos!!", time: "18:59" },
          { sender: "client", text: "Gracias igual para ustedes", time: "18:59" },
          { sender: "central", text: "Cuidate. Saludos..", time: "18:59" }
        ]
      },
      {
        id: "chat5",
        clientName: "Eleutelio Freire (Mensaje 2)",
        avatar: "EF",
        messages: [
          { sender: "client", text: "Como andan chicos los extraño mucho 🥰", time: "19:39" },
          { sender: "central", text: "Gracias por comunicarte con Shomer Security Central Monitoreo. ¿Cómo podemos ayudarte?", time: "19:39" },
          { sender: "central", text: "Hola Sr.. Como le va.. Nosotros también y mucho", time: "19:39" },
          { sender: "client", text: "Si si estos son un desastre", time: "19:39" },
          { sender: "central", text: "Jajajajaja", time: "19:39" },
          { sender: "client", text: "Me hacen renegar mucho", time: "19:40" },
          { sender: "central", text: "Paciencia..", time: "19:40" },
          { sender: "central", text: "Bueno entonces a lo mejor podemos volver...", time: "19:40" },
          { sender: "client", text: "Ojalá 🙏", time: "19:41" },
          { sender: "central", text: "Ojalá", time: "19:41" },
          { sender: "client", text: "Saludos para todos  😌", time: "19:42" },
          { sender: "central", text: "Muchas gracias, saludos a vos de parte de todo el equipo turno tarde..", time: "19:42" }
        ]
      }
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
    ],
    whatsappTitle: "Real interactions with the Central.",
    whatsappDesc: "Real conversations (transcribed from WhatsApp screenshots) between administrators/residents and Shomer's monitoring central during everyday prevention, support, and response events.",
    whatsappChats: [
      {
        id: "chat1",
        clientName: "Carlos Vignolo (Card Activation)",
        avatar: "CV",
        messages: [
          { sender: "client", text: "here are the details...", time: "09:07" },
          { sender: "client", text: "these are the cards to activate, they will be assigned to 4B", time: "09:08" },
          { sender: "client", text: "Thanks a million!!!", time: "09:08" },
          { sender: "central", text: "perfect, we will set them up right away", time: "09:08" },
          { sender: "central", text: "Done, they are now registered in the system!", time: "09:14" },
          { sender: "client", text: "You guys are great...", time: "09:36" },
          { sender: "client", text: "a pleasure working with you..", time: "09:36" },
          { sender: "central", text: "Have a great day", time: "09:37" }
        ]
      },
      {
        id: "chat2",
        clientName: "Miguel Soto (Magnet Repair)",
        avatar: "MS",
        messages: [
          { sender: "client", text: "Perfect, thank you so much for taking care of it", time: "21:37" },
          { sender: "central", text: "Our technical team went to inspect the door", time: "21:50" },
          { sender: "central", text: "Our technical team has already fixed the magnet", time: "21:57" },
          { sender: "client", text: "Perfect, thank you so much, tomorrow I will send a locksmith", time: "22:07" },
          { sender: "client", text: "Thanks a million", time: "22:07" },
          { sender: "central", text: "You are welcome", time: "22:07" },
          { sender: "central", text: "The door is closing correctly now", time: "22:08" },
          { sender: "client", text: "Even better then, you guys are geniuses", time: "22:08" },
          { sender: "client", text: "Thank you so much, truly", time: "22:08" },
          { sender: "central", text: "We will keep monitoring it closely either way", time: "22:08" }
        ]
      },
      {
        id: "chat3",
        clientName: "Jorge Gómez (Access Control)",
        avatar: "JG",
        messages: [
          { sender: "central", text: "would that be the card owner?", time: "16:31" },
          { sender: "client", text: "yes, that is the name", time: "16:32" },
          { sender: "central", text: "ok, we will sort it out now", time: "16:33" },
          { sender: "client", text: "I requested to activate it the other day...", time: "16:33" },
          { sender: "client", text: "Alright then", time: "16:33" },
          { sender: "client", text: "thanks!!", time: "16:33" },
          { sender: "client", text: "let me know so I can notify the person", time: "16:33" },
          { sender: "central", text: "done", time: "16:33" },
          { sender: "central", text: "it has been resolved.", time: "16:33" },
          { sender: "client", text: "thanks for the speed", time: "16:33" },
          { sender: "client", text: "excellent!!", time: "16:33" },
          { sender: "central", text: "you are welcome, Mr. Jorge.", time: "16:34" },
          { sender: "central", text: "have a good afternoon, Mr. Jorge.", time: "16:34" },
          { sender: "central", text: "we are at your service!!!", time: "16:35" },
          { sender: "central", text: "Good afternoon Mr. Jorge, just to let you know they left the door open at Boyacá 652. The same person who left it open just closed it. The lady from 7B.", time: "20:13" }
        ]
      },
      {
        id: "chat4",
        clientName: "Eleutelio Freire (Message 1)",
        avatar: "EF",
        messages: [
          { sender: "client", text: "Hello, how are you guys doing? We still miss you a lot 🥰", time: "18:56" },
          { sender: "central", text: "Thank you for contacting Shomer Security Monitoring Center. How can we help you?", time: "18:56" },
          { sender: "central", text: "Good evening, Sir. How is the building doing? How is everything?", time: "18:57" },
          { sender: "client", text: "Everything is fine, thank God, but the current security leaves a lot to be desired", time: "18:58" },
          { sender: "central", text: "Oh, what a shame.. I hope we can return... Talk with the administration so we can come back.", time: "18:58" },
          { sender: "client", text: "Yes, yes, please 🙏", time: "18:59" },
          { sender: "central", text: "Greetings to you from all of us here.", time: "18:59" },
          { sender: "central", text: "we miss you too!!", time: "18:59" },
          { sender: "client", text: "Thanks, same to you guys", time: "18:59" },
          { sender: "central", text: "Take care. Best regards..", time: "18:59" }
        ]
      },
      {
        id: "chat5",
        clientName: "Eleutelio Freire (Message 2)",
        avatar: "EF",
        messages: [
          { sender: "client", text: "How are you guys doing, I miss you a lot 🥰", time: "19:39" },
          { sender: "central", text: "Thank you for contacting Shomer Security Monitoring Center. How can we help you?", time: "19:39" },
          { sender: "central", text: "Hello, Sir. How is it going? We miss you too, a lot", time: "19:39" },
          { sender: "client", text: "Yes, yes, these ones are a disaster", time: "19:39" },
          { sender: "central", text: "Hahaha", time: "19:39" },
          { sender: "client", text: "They give me a hard time", time: "19:40" },
          { sender: "central", text: "Patience..", time: "19:40" },
          { sender: "central", text: "Well, then maybe we can return...", time: "19:40" },
          { sender: "client", text: "Hopefully 🙏", time: "19:41" },
          { sender: "central", text: "Hopefully", time: "19:41" },
          { sender: "client", text: "Greetings to everyone 😌", time: "19:42" },
          { sender: "central", text: "Thank you so much, greetings to you from all of the afternoon shift team..", time: "19:42" }
        ]
      }
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
  { name: "AVN",                      src: "/images/clients/AVN.svg" },
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

  const [activeChatIdx, setActiveChatIdx] = useState(0);
  const chats = t.whatsappChats || localTranslations.es.whatsappChats || [];

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
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-mono tracking-widest uppercase text-brand-gray hover:text-brand-blue transition-colors"
          >
            <GoogleIcon />
            {t.mapsLink}
          </a>
        </div>

        {/* WhatsApp Real-time Logs / Testimonials */}
        <div className="mt-20 mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text intro */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeUp>
              <div className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Respuesta Inmediata
              </div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-none uppercase mb-5 text-white">
                {t.whatsappTitle || "Interacciones reales con la Central."}
              </h2>
              <p className="text-[0.92rem] text-brand-gray-light leading-relaxed mb-8 font-light">
                {t.whatsappDesc || "Conversaciones reales (transcritas de capturas de WhatsApp) entre nuestros clientes y los operadores de la central de monitoreo Shomer durante eventos cotidianos de prevención y respuesta."}
              </p>
              
              {/* Chat tab selector */}
              <div className="flex flex-col gap-2.5">
                {chats.map((chat: any, idx: number) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChatIdx(idx)}
                    className={`flex items-center gap-3 p-3.5 rounded border transition-all text-left cursor-pointer ${
                      activeChatIdx === idx
                        ? "bg-brand-blue/5 border-brand-blue/50 text-white"
                        : "bg-brand-surface-2 border-brand-border text-brand-gray hover:text-brand-gray-light"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-semibold shrink-0 ${
                      activeChatIdx === idx ? "bg-brand-blue/20 text-brand-blue" : "bg-neutral-800 text-brand-gray"
                    }`}>
                      {chat.avatar}
                    </div>
                    <div className="truncate">
                      <div className="text-[0.82rem] font-medium leading-none mb-1 text-white">{chat.clientName}</div>
                      <div className="text-[0.7rem] font-mono text-brand-gray opacity-80 truncate">{chat.messages[0].text}</div>
                    </div>
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Interactive Chat Mockup */}
          <div className="lg:col-span-7 w-full">
            <FadeUp delay={0.2}>
              <div className="relative bg-[#0d141a] border border-brand-border rounded-xl shadow-2xl flex flex-col overflow-hidden h-[380px] max-w-[480px] mx-auto lg:mx-0">
                {/* Chat header */}
                <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-display text-xs font-medium">
                      SH
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-semibold text-white leading-tight">Central de Monitoreo Shomer</div>
                      <div className="flex items-center gap-1.5 text-[0.68rem] text-brand-green leading-none mt-0.5 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                        En línea
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp top icons */}
                  <div className="flex gap-4 text-brand-gray/60">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z"/></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </div>
                </div>

                {/* Chat messages background (subtle texture or dark overlay) */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3.5 bg-[#0b141a]/95 select-text">
                  {chats[activeChatIdx]?.messages.map((msg: any, mIdx: number) => {
                    const isClient = msg.sender === "client";
                    return (
                      <div
                        key={mIdx}
                        className={`flex flex-col max-w-[85%] rounded-lg p-2.5 relative text-[0.84rem] leading-relaxed shadow-sm ${
                          isClient
                            ? "bg-[#202c33] text-white self-start rounded-tl-none"
                            : "bg-[#005c4b] text-white self-end rounded-tr-none"
                        }`}
                      >
                        {/* Message text */}
                        <p className="pr-12 pb-1 text-white">{msg.text}</p>
                        
                        {/* Time and ticks status */}
                        <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[0.62rem] text-brand-gray-light/60 font-mono select-none">
                          <span>{msg.time}</span>
                          {!isClient && (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2">
                              <path d="M20 6L9 17l-5-5" />
                              <path d="M16 6l-7 7-2-2" />
                            </svg>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Chat bottom bar mockup */}
                <div className="bg-[#202c33] px-3 py-2 flex items-center gap-3 border-t border-white/5 shrink-0">
                  <div className="flex-1 bg-[#2a3942] rounded-lg px-4 py-2 text-xs text-brand-gray/50 border border-white/5 pointer-events-none select-none">
                    Escribe un mensaje...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-brand-black shrink-0 pointer-events-none select-none">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Client logos */}
        <FadeUp>
          <p className="text-[0.7rem] font-mono tracking-[0.18em] uppercase text-brand-gray text-center mb-8">{t.logoTitle}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-brand-border border border-brand-border rounded overflow-hidden">
            {clients.map((c) => (
              <div key={c.name} className="bg-brand-surface-2 flex items-center justify-center py-8 px-6 group transition-colors hover:bg-brand-surface">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={140}
                  height={60}
                  className={`${c.name === "Urban Storage" ? "h-20 sm:h-22" : "h-10"} w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 brightness-0 invert filter hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
