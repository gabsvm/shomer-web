"use client";

import { useState, useEffect, useRef } from "react";
import { FadeUp } from "./FadeUp";
import { Wifi, Zap, Activity, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

interface MapNode {
  id: string;
  name: string;
  role: string;
  coords: { lat: number; lng: number };
  latency: number;
  status: "ONLINE" | "STANDBY" | "ACTIVE";
  powerRedundancy: string;
  netRedundancy: string;
  details: string;
  region: "ba" | "miami";
}

const localInfraExtra: Record<Locale, {
  selectNode: string;
  avgLatency: string;
  powerBackup: string;
  connectivityLinks: string;
  opsMap: string;
  loadingMap: string;
  activeLinks: string;
  mapAttribution: string;
  statusActive: string;
  statusOnline: string;
  statusStandby: string;
  nodes: Record<string, {
    name: string;
    role: string;
    powerRedundancy: string;
    netRedundancy: string;
    details: string;
  }>;
}> = {
  es: {
    selectNode: "Seleccionar Nodo",
    avgLatency: "Latencia de Red Promedio",
    powerBackup: "Respaldo Eléctrico",
    connectivityLinks: "Enlaces de Conectividad",
    opsMap: "Mapa Operativo Terreno",
    loadingMap: "Cargando cartografía...",
    activeLinks: "Enlaces de Red Activos: 2/2",
    mapAttribution: "Cartografía OpenStreetMap / CartoDB Dark",
    statusActive: "ACTIVO",
    statusOnline: "EN LÍNEA",
    statusStandby: "EN ESPERA",
    nodes: {
      "puerto-madero": {
        name: "Puerto Madero HQ (Central Principal)",
        role: "Central de Monitoreo Activo & Despacho",
        powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante cortes de luz)",
        netRedundancy: "Fibra Óptica Fibercorp + Respaldo Starlink",
        details: "Nuestra base de operaciones principal. Alberga a la central de monitoristas homologados y el centro de coordinación y despacho directo con las fuerzas policiales."
      },
      "palermo": {
        name: "Palermo Hub (Central Redundante)",
        role: "Central de Respaldo Geográfico",
        powerRedundancy: "Baterías UPS (autonomía de 6 horas ante cortes)",
        netRedundancy: "Fibra Óptica Simétrica Tri-proveedor",
        details: "Nodo espejo georredundante activo. Sincroniza en tiempo real toda la información de accesos y flujos de video encriptado AES-256."
      },
      "nordelta": {
        name: "Nordelta Cluster (GBA Norte)",
        role: "Complejo Residencial & Comercial",
        powerRedundancy: "Respaldo eléctrico local + Tótems Shomer redundantes",
        netRedundancy: "Fibra Óptica Comercial + Respaldo Starlink",
        details: "Corredor de alta seguridad en Tigre y Nordelta. Protege complejos cerrados y locales residenciales."
      },
      "caballito": {
        name: "Caballito Cluster (Avellaneda / Boyacá)",
        role: "Corredor Residencial de Alta Densidad",
        powerRedundancy: "Baterías integradas Shomer por consorcio",
        netRedundancy: "Conexión de red de fibra dedicada",
        details: "Eje residencial estratégico que agrupa 18 edificios con tótems Shomer, incluyendo consorcios en Av. Avellaneda y Boyacá."
      },
      "belgrano": {
        name: "Belgrano Cluster (Cuba / Amenábar)",
        role: "Corredor Residencial Premium",
        powerRedundancy: "Baterías de respaldo Shomer por edificio",
        netRedundancy: "Red de fibra simétrica corporativa",
        details: "Zona residencial premium con alta densidad de tótems Shomer. Consolida consorcios como Cuba 2550 y Conesa 2151."
      },
      "recoleta": {
        name: "Recoleta & Almagro Cluster",
        role: "Corredor Céntrico de Alta Densidad",
        powerRedundancy: "Baterías locales y tótems autónomos Shomer",
        netRedundancy: "Enlaces de fibra dedicados e independientes",
        details: "Consolida consorcios inteligentes en Av. Santa Fe 1780, Pueyrredón y Laprida."
      },
      "miami": {
        name: "Miami Hub (USA Mirror Central)",
        role: "Central de Monitoreo Espejo & Soporte USA",
        powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante huracanes)",
        netRedundancy: "Fibra Óptica Redundante + Backhaul Starlink Pro",
        details: "Nuestra central de respaldo internacional en Miami, Florida. Provee soporte georredundante y atiende solicitudes nocturnas."
      }
    }
  },
  en: {
    selectNode: "Select Node",
    avgLatency: "Average Network Latency",
    powerBackup: "Power Backup",
    connectivityLinks: "Connectivity Links",
    opsMap: "Field Operations Map",
    loadingMap: "Loading cartography...",
    activeLinks: "Active Network Links: 2/2",
    mapAttribution: "Cartography OpenStreetMap / CartoDB Dark",
    statusActive: "ACTIVE",
    statusOnline: "ONLINE",
    statusStandby: "STANDBY",
    nodes: {
      "puerto-madero": {
        name: "Puerto Madero HQ (Main Central)",
        role: "Active Monitoring & Dispatch Center",
        powerRedundancy: "UPS Batteries (integrated 6-hour backup during outages)",
        netRedundancy: "Fibercorp Fiber Optic + Starlink Backup",
        details: "Our main operations base. It houses the certified monitoring team and the direct coordination and dispatch center with police forces."
      },
      "palermo": {
        name: "Palermo Hub (Redundant Central)",
        role: "Geographical Backup Central",
        powerRedundancy: "UPS Batteries (6-hour autonomy during power cuts)",
        netRedundancy: "Tri-provider Symmetric Fiber Optic",
        details: "Active geo-redundant mirror node. Synchronizes all access info and AES-256 encrypted video flows in real-time."
      },
      "nordelta": {
        name: "Nordelta Cluster (GBA North)",
        role: "Residential & Commercial Complex",
        powerRedundancy: "Local power backup + redundant Shomer Totems",
        netRedundancy: "Commercial Fiber Optic + Starlink Backup",
        details: "High-security corridor in Tigre and Nordelta. Protects gated communities and residential shops."
      },
      "caballito": {
        name: "Caballito Cluster (Avellaneda / Boyacá)",
        role: "High-Density Residential Corridor",
        powerRedundancy: "Integrated Shomer batteries per building HOA",
        netRedundancy: "Dedicated fiber network connection",
        details: "Strategic residential axis grouping 18 buildings with Shomer totems, including HOAs on Av. Avellaneda and Boyacá."
      },
      "belgrano": {
        name: "Belgrano Cluster (Cuba / Amenábar)",
        role: "Premium Residential Corridor",
        powerRedundancy: "Shomer backup batteries per building",
        netRedundancy: "Corporate symmetric fiber network",
        details: "Premium residential area with a high density of Shomer totems. Consolidates HOAs like Cuba 2550 and Conesa 2151."
      },
      "recoleta": {
        name: "Recoleta & Almagro Cluster",
        role: "High-Density Downtown Corridor",
        powerRedundancy: "Local batteries and autonomous Shomer totems",
        netRedundancy: "Dedicated and independent fiber links",
        details: "Consolida smart HOAs on Av. Santa Fe 1780, Pueyrredón and Laprida."
      },
      "miami": {
        name: "Miami Hub (USA Mirror Central)",
        role: "Mirror Monitoring Central & USA Support",
        powerRedundancy: "UPS Batteries (integrated 6-hour backup during hurricanes)",
        netRedundancy: "Redundant Fiber Optic + Starlink Pro Backhaul",
        details: "Our international backup center in Miami, Florida. Provides geo-redundant support and handles night requests."
      }
    }
  },
  he: {
    selectNode: "בחר נקודת חיבור",
    avgLatency: "עכבת רשת ממוצעת (Latency)",
    powerBackup: "גיבוי חשמלי",
    connectivityLinks: "חיבורי רשת",
    opsMap: "מפת פעילות מבצעית",
    loadingMap: "טוען מפות...",
    activeLinks: "חיבורי רשת פעילים: 2/2",
    mapAttribution: "מפות ע״י OpenStreetMap / CartoDB Dark",
    statusActive: "פעיל",
    statusOnline: "מחובר",
    statusStandby: "במתנה",
    nodes: {
      "puerto-madero": {
        name: "HQ פוארטו מאדרו (מוקד ראשי)",
        role: "מוקד ניטור פעיל ושיגור",
        powerRedundancy: "סוללות UPS (אוטונומיה מובנית של 6 שעות בהפסקות חשמל)",
        netRedundancy: "סיב אופטי Fibercorp + גיבוי Starlink",
        details: "בסיס הפעילות הראשי שלנו. מאכלס את מוקד המנטרים המוסמכים ומרכז התיאום והשיגור הישיר עם כוחות המשטרה."
      },
      "palermo": {
        name: "מוקד פלרמו (מוקד גיבוי)",
        role: "מוקד גיבוי גיאוגרפי",
        powerRedundancy: "סוללות UPS (אוטונומיה של 6 שעות בהפסקות)",
        netRedundancy: "סיב אופטי סימטרי משולש ספקים",
        details: "נקודת מראה פעילה לגיבוי גיאוגרפי. מסנכרן בזמן אמת את כל מידע הגישה וזרמי הווידאו המוצפנים ב-AES-256."
      },
      "nordelta": {
        name: "קלאסטר נורדלטה (GBA צפון)",
        role: "מתחם מגורים ומסחר",
        powerRedundancy: "גיבוי חשמלי מקומי + טוטמים של שומר",
        netRedundancy: "סיב אופטי מסחרי + גיבוי Starlink",
        details: "מסדרון אבטחה גבוהה בטיגרה ונורדלטה. מגן על קהילות סגורות וחנויות מקומיות."
      },
      "caballito": {
        name: "קלאסטר קבז'יטו (אבז'אנידה / בויאקה)",
        role: "מסדרון מגורים בצפיפות גבוהה",
        powerRedundancy: "סוללות שומר משולבות לכל בניין",
        netRedundancy: "חיבור רשת סיב ייעודי",
        details: "ציר מגורים אסטרטגי המאגד 18 בניינים עם טוטמים של שומר באבז'אנידה ובויאקה."
      },
      "belgrano": {
        name: "קלאסטר בלגראנו (קובה / אמנבר)",
        role: "מסדרון מגורים פרימיום",
        powerRedundancy: "סוללות גיבוי של שומר לכל בניין",
        netRedundancy: "רשת סיבים סימטרית ארגונית",
        details: "אזור מגורים פרימיום с צפיפות גבוהה של טוטמים של שומר. מאגד בניינים כמו קובה 2550 וקונסה 2151."
      },
      "recoleta": {
        name: "קלאסטר רקולטה ואלמגרו",
        role: "מסדרון מרכז העיר בצפיפות גבוהה",
        powerRedundancy: "סוללות מקומיות וטוטמים אוטונומיים של שומר",
        netRedundancy: "חיבורי סיб ייעודיים ועצמאיים",
        details: "מאגד בניינים חכמים בשדרות סנטה פה 1780, פואירדון ולפרידה."
      },
      "miami": {
        name: "מוקד מיאמי (מוקד מראה ארה״ב)",
        role: "מוקד ניטור מראה ותמיכה בארה״ב",
        powerRedundancy: "סוללות UPS (אוטונומיה מובנית של 6 שעות בסופות הוריקн)",
        netRedundancy: "סיב אופטי ייעודי + גיבוי Starlink Pro",
        details: "מרכז הגיבוי הבינלאומי שלנו במיאמי, פלורידה. מספק תמיכה גיאוגרפית ומטפל בבקשות לילה בחצי הכדור הדרומי."
      }
    }
  },
  de: {
    selectNode: "Knoten Auswählen",
    avgLatency: "Durchschnittliche Netzwerklatenz",
    powerBackup: "Strom-Backup",
    connectivityLinks: "Konnektivitätslinks",
    opsMap: "Betriebskarte Gelände",
    loadingMap: "Lade Landkarte...",
    activeLinks: "Aktive Netzwerklinks: 2/2",
    mapAttribution: "Kartografie OpenStreetMap / CartoDB Dark",
    statusActive: "AKTIV",
    statusOnline: "ONLINE",
    statusStandby: "STANDBY",
    nodes: {
      "puerto-madero": {
        name: "Puerto Madero HQ (Hauptzentrale)",
        role: "Zentrale für aktive Überwachung & Disposition",
        powerRedundancy: "UPS-Batterien (integrierte 6-stündige Autonomie bei Stromausfall)",
        netRedundancy: "Fibercorp Glasfaser + Starlink Backup",
        details: "Unsere Hauptbetriebsbasis. Beherbergt das zertifizierte Überwachungsteam und die Leitstelle zur direkten Abstimmung mit der Polizei."
      },
      "palermo": {
        name: "Palermo Hub (Redundante Zentrale)",
        role: "Geografische Backup-Zentrale",
        powerRedundancy: "UPS-Batterien (6-stündige Autonomie bei Ausfällen)",
        netRedundancy: "Symmetrische Glasfaser mit 3 Anbietern",
        details: "Aktiver geografisch redundanter Spiegelknoten. Synchronisiert alle Zugangsdaten und AES-256 verschlüsselten Videostreams in Echtzeit."
      },
      "nordelta": {
        name: "Nordelta Cluster (GBA Nord)",
        role: "Wohn- und Geschäftskomplex",
        powerRedundancy: "Lokales Strom-Backup + redundante Shomer-Totems",
        netRedundancy: "Kommerzielle Glasfaser + Starlink Backup",
        details: "Hochsicherheitskorridor in Tigre und Nordelta. Schützt bewachte Wohnanlagen und Geschäfte."
      },
      "caballito": {
        name: "Caballito Cluster (Avellaneda / Boyacá)",
        role: "Wohnkorridor mit hoher Dichte",
        powerRedundancy: "Integrierte Shomer-Batterien pro Wohnanlage",
        netRedundancy: "Dedizierte Glasfaser-Netzwerkverbindung",
        details: "Strategische Wohnachse mit 18 Gebäuden mit Shomer-Totems an der Av. Avellaneda und Boyacá."
      },
      "belgrano": {
        name: "Belgrano Cluster (Cuba / Amenábar)",
        role: "Premium-Wohnkorridor",
        powerRedundancy: "Shomer-Backup-Batterien pro Gebäude",
        netRedundancy: "Symmetrisches Glasfasernetzwerk für Unternehmen",
        details: "Premium-Wohngegend mit einer hohen Dichte an Shomer-Totems. Konsolidiert Wohnanlagen wie Cuba 2550 und Conesa 2151."
      },
      "recoleta": {
        name: "Recoleta & Almagro Cluster",
        role: "Zentrumsnaher Wohnkorridor mit hoher Dichte",
        powerRedundancy: "Lokale Batterien und autonome Shomer-Totems",
        netRedundancy: "Dedizierte und unabhängige Glasfaserverbindungen",
        details: "Konsolidiert intelligente Wohnanlagen an der Av. Santa Fe 1780, Pueyrredón und Laprida."
      },
      "miami": {
        name: "Miami Hub (USA Spiegelzentrale)",
        role: "Spiegelüberwachung & USA Support",
        powerRedundancy: "UPS-Batterien (integrierte 6-stündige Autonomie bei Hurrikans)",
        netRedundancy: "Premium redundante Glasfaser + Starlink Pro Backhaul",
        details: "Unsere internationale Backup-Zentrale in Miami, Florida. Bietet geografisch redundante Unterstützung bei lokalen Wetterkatastrophen."
      }
    }
  },
  ru: {
    selectNode: "Выбрать узел",
    avgLatency: "Средняя задержка сети",
    powerBackup: "Резервное питание",
    connectivityLinks: "Каналы связи",
    opsMap: "Оперативная карта местности",
    loadingMap: "Загрузка карты...",
    activeLinks: "Активные каналы: 2/2",
    mapAttribution: "Картография OpenStreetMap / CartoDB Dark",
    statusActive: "АКТИВЕН",
    statusOnline: "В СЕТИ",
    statusStandby: "ОЖИДАНИЕ",
    nodes: {
      "puerto-madero": {
        name: "Puerto Madero HQ (Главный центр)",
        role: "Центр активного мониторинга и диспетчеризации",
        powerRedundancy: "ИБП (встроенная автономность 6 часов)",
        netRedundancy: "Оптоволокно Fibercorp + Starlink",
        details: "Наша основная операционная база. Здесь находится команда сертифицированных операторов и центр координации с полицией."
      },
      "palermo": {
        name: "Palermo Hub (Резервный центр)",
        role: "Географический резервный центр",
        powerRedundancy: "ИБП (автономность 6 часов при отключении)",
        netRedundancy: "Симметричное оптоволокно от 3 провайдеров",
        details: "Активный географически резервный узел. Синхронизирует данные доступа и видеопотоки с шифрованием AES-256."
      },
      "nordelta": {
        name: "Nordelta Cluster (GBA Север)",
        role: "Жилой и коммерческий комплекс",
        powerRedundancy: "Местный генератор + резервные тотемы Shomer",
        netRedundancy: "Коммерческий интернет + резерв Starlink",
        details: "Коридор высокой безопасности в Тигре и Нордельте. Защищает закрытые поселки и коммерческие объекты."
      },
      "caballito": {
        name: "Caballito Cluster (Авельянеда / Бояка)",
        role: "Жилой коридор высокой плотности",
        powerRedundancy: "Встроенные аккумуляторы Shomer на кондоминиум",
        netRedundancy: "Выделенная волоконно-оптическая сеть",
        details: "Стратегическая жилая ось, объединяющая 18 зданий с тотемами Shomer на Авельянеда и Бояка."
      },
      "belgrano": {
        name: "Belgrano Cluster (Куба / Аменабар)",
        role: "Премиальный жилой коридор",
        powerRedundancy: "Резервные батареи Shomer на каждое здание",
        netRedundancy: "Симметричный корпоративный интернет",
        details: "Премиальный жилой район с высокой плотностью тотемов Shomer. Объединяет кондоминиумы Cuba 2550 и Conesa 2151."
      },
      "recoleta": {
        name: "Recoleta & Almagro Cluster",
        role: "Центральный жилой коридор высокой плотности",
        powerRedundancy: "Местные батареи и автономные тотемы Shomer",
        netRedundancy: "Выделенные независимые каналы связи",
        details: "Объединяет умные дома на Av. Santa Fe 1780, Pueyrredón и Laprida."
      },
      "miami": {
        name: "Miami Hub (США Зеркальный центр)",
        role: "Зеркальный центр мониторинга и поддержка США",
        powerRedundancy: "ИБП (встроенная автономность 6 часов при ураганах)",
        netRedundancy: "Резервный интернет премиум + Starlink Pro",
        details: "Наш международный резервный центр в Майами, Флорида. Обеспечивает географическую избыточность при климатических бедствиях."
      }
    }
  },
  pt: {
    selectNode: "Selecionar Nodo",
    avgLatency: "Latência Média de Rede",
    powerBackup: "Backup de Energia",
    connectivityLinks: "Links de Conectividade",
    opsMap: "Mapa Operativo de Campo",
    loadingMap: "Carregando cartografia...",
    activeLinks: "Links de Rede Ativos: 2/2",
    mapAttribution: "Cartografia OpenStreetMap / CartoDB Dark",
    statusActive: "ATIVO",
    statusOnline: "ONLINE",
    statusStandby: "EM ESPERA",
    nodes: {
      "puerto-madero": {
        name: "Puerto Madero HQ (Central Principal)",
        role: "Central de Monitoramento Ativo e Despacho",
        powerRedundancy: "Baterias UPS (autonomia integrada de 6 horas para quedas de energia)",
        netRedundancy: "Fibra Óptica Fibercorp + Backup Starlink",
        details: "Nossa principal base de operações. Abriga a central de operadores homologados e o centro de despacho direto com as forças policiais."
      },
      "palermo": {
        name: "Palermo Hub (Central Redundante)",
        role: "Central de Backup Geográfico",
        powerRedundancy: "Baterias UPS (autonomia de 6 horas para quedas)",
        netRedundancy: "Fibra Óptica Simétrica Tri-provedor",
        details: "Nodo espelho georredundante ativo. Sincroniza em tempo real todas as informações de acesso e fluxos de vídeo criptografados AES-256."
      },
      "nordelta": {
        name: "Nordelta Cluster (GBA Norte)",
        role: "Complexo Residencial e Comercial",
        powerRedundancy: "Backup elétrico local + Tótens Shomer redundantes",
        netRedundancy: "Fibra Óptica Comercial + Backup Starlink",
        details: "Corredor de alta segurança em Tigre e Nordelta. Protege condomínios fechados e lojas locais."
      },
      "caballito": {
        name: "Caballito Cluster (Avellaneda / Boyacá)",
        role: "Corredor Residencial de Alta Densidade",
        powerRedundancy: "Baterias integradas Shomer por condomínio",
        netRedundancy: "Conexão de rede de fibra dedicada",
        details: "Eixo residencial estratégico que agrupa 18 edifícios com tótens Shomer nas avenidas Avellaneda e Boyacá."
      },
      "belgrano": {
        name: "Belgrano Cluster (Cuba / Amenábar)",
        role: "Corredor Residencial Premium",
        powerRedundancy: "Baterias de backup Shomer por edifício",
        netRedundancy: "Rede de fibra simétrica corporativa",
        details: "Zona residencial premium com alta densidade de tótens Shomer. Consolida condomínios como Cuba 2550 e Conesa 2151."
      },
      "recoleta": {
        name: "Recoleta & Almagro Cluster",
        role: "Corredor Central de Alta Densidade",
        powerRedundancy: "Baterias locais e tótens autônomos Shomer",
        netRedundancy: "Links de fibra dedicados e independentes",
        details: "Consolida edifícios inteligentes em Av. Santa Fe 1780, Pueyrredón e Laprida."
      },
      "miami": {
        name: "Miami Hub (Central Espelho EUA)",
        role: "Central de Monitoramento Espelho e Suporte EUA",
        powerRedundancy: "Baterias UPS (autonomia integrada de 6 horas para furacões)",
        netRedundancy: "Fibra Óptica Redundante Premium + Backhaul Starlink Pro",
        details: "Nossa central de backup internacional em Miami, Flórida. Oferece suporte georredundante para desastres climáticos locais."
      }
    }
  },
  it: {
    selectNode: "Seleziona Nodo",
    avgLatency: "Latenza Media di Rete",
    powerBackup: "Backup Energetico",
    connectivityLinks: "Collegamenti di Rete",
    opsMap: "Mappa Operativa sul Campo",
    loadingMap: "Caricamento cartografia...",
    activeLinks: "Collegamenti di Rete Attivi: 2/2",
    mapAttribution: "Cartografia OpenStreetMap / CartoDB Dark",
    statusActive: "ATTIVO",
    statusOnline: "ONLINE",
    statusStandby: "STANDBY",
    nodes: {
      "puerto-madero": {
        name: "Puerto Madero HQ (Centrale Principale)",
        role: "Centrale di Monitoraggio Attivo & Dispaccio",
        powerRedundancy: "Batterie UPS (autonomia integrata di 6 ore in caso di blackout)",
        netRedundancy: "Fibra Ottica Fibercorp + Backup Starlink",
        details: "La nostra base operativa principale. Ospita il team di monitoraggio certificato e il centro di coordinamento e dispaccio con la polizia."
      },
      "palermo": {
        name: "Palermo Hub (Centrale Ridondante)",
        role: "Centrale di Backup Geografico",
        powerRedundancy: "Batterie UPS (autonomia di 6 ore in caso di blackout)",
        netRedundancy: "Fibra Ottica Simmetrica Tri-provider",
        details: "Nodo mirror georidondante attivo. Sincronizza in tempo real tutte le info di accesso e i flussi video criptati AES-256."
      },
      "nordelta": {
        name: "Nordelta Cluster (GBA Nord)",
        role: "Complesso Residenziale & Commerciale",
        powerRedundancy: "Backup elettrico locale + Totem Shomer ridondanti",
        netRedundancy: "Fibra Ottica Commerciale + Backup Starlink",
        details: "Corridoio ad alta sicurezza a Tigre e Nordelta. Protegge complessi chiusi e negozi locali."
      },
      "caballito": {
        name: "Caballito Cluster (Avellaneda / Boyacá)",
        role: "Corridoio Residenziale ad Alta Densità",
        powerRedundancy: "Batterie integrate Shomer per condominio",
        netRedundancy: "Connessione di rete in fibra dedicata",
        details: "Asse strategico residenziale che raggruppa 18 edifici con totem Shomer sulle vie Av. Avellaneda e Boyacá."
      },
      "belgrano": {
        name: "Belgrano Cluster (Cuba / Amenábar)",
        role: "Corridoio Residenziale Premium",
        powerRedundancy: "Batterie di backup Shomer per edificio",
        netRedundancy: "Rete in fibra simmetrica aziendale",
        details: "Zona residenziale premium con alta densità di totem Shomer. Consolida condomini come Cuba 2550 e Conesa 2151."
      },
      "recoleta": {
        name: "Recoleta & Almagro Cluster",
        role: "Corridoio Centrale ad Alta Densità",
        powerRedundancy: "Batterie locali e totem autonomi Shomer",
        netRedundancy: "Collegamenti in fibra dedicati e indipendenti",
        details: "Consolida condomini intelligenti in Av. Santa Fe 1780, Pueyrredón e Laprida."
      },
      "miami": {
        name: "Miami Hub (USA Mirror Central)",
        role: "Centrale di Monitoraggio Mirror & Supporto USA",
        powerRedundancy: "Batterie UPS (autonomia integrata di 6 ore per uragani)",
        netRedundancy: "Fibra Ottica Ridondante Premium + Backhaul Starlink Pro",
        details: "La nostra centrale di backup internazionale a Miami, Florida. Fornisce supporto georidondante in caso di disastri climatici locali."
      }
    }
  }
};

export function InfrastructureMap() {
  const { language, t } = useLanguage();
  const isRtl = language === "he";
  const extra = localInfraExtra[language as Locale] || localInfraExtra.es;

  const [selectedNodeId, setSelectedNodeId] = useState<string>("puerto-madero");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeRegion, setActiveRegion] = useState<"ba" | "miami">("ba");
  const mapRef = useRef<any>(null);

  const nodes: MapNode[] = [
    {
      id: "puerto-madero",
      name: "Puerto Madero HQ (Central Principal)",
      role: "Central de Monitoreo Activo & Despacho",
      coords: { lat: -34.6177, lng: -58.3621 },
      latency: 8,
      status: "ACTIVE",
      powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante cortes de luz)",
      netRedundancy: "Fibra Óptica Fibercorp + Respaldo Starlink",
      details: "Nuestra base de operaciones principal. Alberga a la central de monitoristas homologados y el centro de coordinación y despacho directo con las fuerzas policiales.",
      region: "ba",
    },
    {
      id: "palermo",
      name: "Palermo Hub (Central Redundante)",
      role: "Central de Respaldo Geográfico",
      coords: { lat: -34.5818, lng: -58.4210 },
      latency: 10,
      status: "ONLINE",
      powerRedundancy: "Baterías UPS (autonomía de 6 horas ante cortes)",
      netRedundancy: "Fibra Óptica Simétrica Tri-proveedor",
      details: "Nodo espejo georredundante activo. Sincroniza en tiempo real toda la información de accesos y flujos de video encriptado AES-256.",
      region: "ba",
    },
    {
      id: "nordelta",
      name: "Nordelta Cluster (GBA Norte)",
      role: "Complejo Residencial & Comercial",
      coords: { lat: -34.4082, lng: -58.6415 },
      latency: 14,
      status: "ONLINE",
      powerRedundancy: "Respaldo eléctrico local + Tótems Shomer redundantes",
      netRedundancy: "Fibra Óptica Comercial + Respaldo Starlink",
      details: "Corredor de alta seguridad en Tigre y Nordelta. Protege complejos cerrados y locales: Puerta Norte (1, 2, Locales, Exteriores) y Complejo Vientos (1, 2, Locales, Exteriores).",
      region: "ba",
    },
    {
      id: "caballito",
      name: "Caballito Cluster (Eje Avellaneda / Boyacá)",
      role: "Corredor Residencial de Alta Densidad",
      coords: { lat: -34.6225, lng: -58.4520 },
      latency: 12,
      status: "ONLINE",
      powerRedundancy: "Baterías integradas Shomer por consorcio",
      netRedundancy: "Conexión de red de fibra dedicada",
      details: "Eje residencial estratégico que agrupa 18 edificios con tótems Shomer, incluyendo consorcios en Av. Avellaneda (1817, 1902, 1974, 2282, 2460, 2566, 2631), Boyacá (361, 602, 652), Felipe Vallese, Falcón, Páez, Caracas, Artigas y Neuquén.",
      region: "ba",
    },
    {
      id: "belgrano",
      name: "Belgrano Cluster (Eje Cuba / Amenábar)",
      role: "Corredor Residencial Premium",
      coords: { lat: -34.5575, lng: -58.4590 },
      latency: 11,
      status: "ONLINE",
      powerRedundancy: "Baterías de respaldo Shomer por edificio",
      netRedundancy: "Red de fibra simétrica corporativa",
      details: "Zona residencial premium con alta densidad de tótems Shomer. Consolida consorcios como Cuba 2550, Conesa 2151, Amenábar (1762, 3022), Drago, Arévalo, Lafinur y Luis María Campos 1248.",
      region: "ba",
    },
    {
      id: "recoleta",
      name: "Recoleta & Almagro Cluster",
      role: "Corredor Céntrico de Alta Densidad",
      coords: { lat: -34.5950, lng: -58.4120 },
      latency: 13,
      status: "ONLINE",
      powerRedundancy: "Baterías locales y tótems autónomos Shomer",
      netRedundancy: "Enlaces de fibra dedicados e independientes",
      details: "Consolida consorcios inteligentes en Av. Santa Fe 1780, Pueyrredón (468, 480, 834, 910, 924), Laprida (967, 1264), Corrientes 2945, Humahuaca 3631, Cabrera y Anchorena (888, 896).",
      region: "ba",
    },
    {
      id: "miami",
      name: "Miami Hub (USA Mirror Central)",
      role: "Central de Monitoreo Espejo & Soporte USA",
      coords: { lat: 25.7617, lng: -80.1918 },
      latency: 42,
      status: "ACTIVE",
      powerRedundancy: "Baterías UPS (autonomía integrada de 6 horas ante huracanes/cortes)",
      netRedundancy: "Fibra Óptica Redundante Premium + Backhaul Starlink Pro",
      details: "Nuestra central de respaldo internacional en Miami, Florida. Provee soporte georredundante ante desastres climáticos locales y atiende solicitudes nocturnas del hemisferio sur.",
      region: "miami",
    },
  ];


  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];
  const nodeTrans = extra.nodes[selectedNode.id] || {
    name: selectedNode.name,
    role: selectedNode.role,
    powerRedundancy: selectedNode.powerRedundancy,
    netRedundancy: selectedNode.netRedundancy,
    details: selectedNode.details,
  };
  const nodeStatusLabel = selectedNode.status === "ACTIVE" ? extra.statusActive : selectedNode.status === "ONLINE" ? extra.statusOnline : extra.statusStandby;

  // Dynamic Leaflet Loading
  useEffect(() => {
    if (typeof window === "undefined") return;

    const win = window as any;
    if (win.L) {
      setMapLoaded(true);
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.onload = () => {
      setMapLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  // Initialize Map
  useEffect(() => {
    const win = window as any;
    if (!mapLoaded || !win.L || mapRef.current) return;

    const L = win.L;

    // Create map
    const map = L.map("leaflet-map", {
      center: [-34.55, -58.60],
      zoom: 10,
      zoomControl: false,
      attributionControl: false,
    });

    // Add Dark Matter Tile Layer from CartoDB (looks clean and monochromatic)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 20,
      subdomains: "abcd",
    }).addTo(map);

    mapRef.current = map;

    // Add heatmap/coverage zones (glowing semi-transparent circles)
    const heatmapZones = [
      { center: [-34.595, -58.435], radius: 8000, color: "#00BFFF" }, // CABA Core
      { center: [-34.42, -58.62], radius: 14000, color: "#00BFFF" },  // GBA Norte (Nordelta/Tigre/San Isidro/Pilar)
      { center: [-34.62, -58.55], radius: 8000, color: "#00BFFF" },   // GBA Oeste
      { center: [25.7617, -80.1918], radius: 9000, color: "#00BFFF" } // Miami USA
    ];

    heatmapZones.forEach(zone => {
      L.circle(zone.center, {
        radius: zone.radius,
        color: zone.color,
        fillColor: zone.color,
        fillOpacity: 0.05,
        weight: 1,
        dashArray: "4,6",
      }).addTo(map);
    });

    // Add markers for each node
    nodes.forEach((node) => {
      const isCentral = node.id.includes("puerto") || node.id.includes("palermo") || node.id === "miami";
      
      const customIcon = L.divIcon({
        className: "custom-div-icon",
        html: `
          <div class="relative w-8 h-8 flex items-center justify-center cursor-pointer">
            <div class="absolute w-8 h-8 rounded-full ${isCentral ? 'bg-[#00BFFF]/25' : 'bg-[#00E676]/25'} animate-ping" style="animation-duration: 3s;"></div>
            <div class="w-4 h-4 rounded-full ${isCentral ? 'bg-[#00BFFF]' : 'bg-[#00E676]'} border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      L.marker([node.coords.lat, node.coords.lng], { 
        icon: customIcon,
        title: node.name,
        alt: node.name
      })
        .addTo(map)
        .on("click", () => {
          setSelectedNodeId(node.id);
          setActiveRegion(node.region);
        });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mapLoaded]);

  // Pan Map on Node Selection or Region Change
  useEffect(() => {
    if (mapRef.current) {
      const node = nodes.find((n) => n.id === selectedNodeId);
      if (node) {
        mapRef.current.setView([node.coords.lat, node.coords.lng], node.region === "miami" ? 11 : 12, {
          animate: true,
          duration: 1.5,
        });
      }
    }
  }, [selectedNodeId]);

  // Handle region button clicks
  const handleRegionChange = (region: "ba" | "miami") => {
    setActiveRegion(region);
    const defaultNodeId = region === "ba" ? "puerto-madero" : "miami";
    setSelectedNodeId(defaultNodeId);
  };

  return (
    <section id="infraestructura" className={`py-24 px-6 md:px-10 bg-brand-near-black border-t border-brand-border ${isRtl ? "text-right" : "text-left"}`}>
      {/* Styles for Leaflet customization */}
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-container {
          background: #0a0a0a !important;
          outline: none;
        }
        .leaflet-grab {
          cursor: grab;
        }
        .leaflet-dragging .leaflet-grab {
          cursor: grabbing;
        }
        .custom-div-icon {
          background: transparent !important;
          border: none !important;
        }
      `}} />

      <div className="max-w-[1200px] mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
          {/* Left panel: Info & latency stats */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t("inframap.tag")}</div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
                {t("inframap.title")}
              </h2>
              <p className={`text-brand-gray-light leading-relaxed max-w-[480px] font-light mb-8 ${isRtl ? "mr-0 ml-auto" : ""}`}>
                {t("inframap.desc")}
              </p>
            </FadeUp>

            {/* Selected Node Details Box */}
            <FadeUp delay={0.2}>
              <div className="border border-brand-border rounded bg-brand-surface p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.05),transparent_70%)] pointer-events-none" />
                
                <div className={`flex items-center gap-2 mb-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-brand-green uppercase font-semibold">NODO {nodeStatusLabel}</span>
                </div>

                <h3 className="text-lg font-bold text-brand-white mb-1">{nodeTrans.name}</h3>
                <p className="text-xs font-mono text-brand-blue uppercase tracking-wide mb-4">{nodeTrans.role}</p>

                <p className="text-sm text-brand-gray leading-relaxed mb-6">{nodeTrans.details}</p>

                <div className="flex flex-col gap-4 border-t border-white/5 pt-5 text-xs text-brand-gray-light">
                  {/* Selector nodes inside card */}
                  <div className="mb-2">
                    <span className={`text-brand-gray font-mono block text-[0.68rem] uppercase mb-2 ${isRtl ? "text-right" : ""}`}>{extra.selectNode}</span>
                    <div className={`flex flex-wrap gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                      {nodes.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => {
                            setSelectedNodeId(node.id);
                            setActiveRegion(node.region);
                          }}
                          className={`px-2.5 py-1 text-[0.65rem] font-mono border rounded transition-all
                            ${node.id === selectedNodeId
                              ? "bg-brand-blue/10 border-brand-blue text-brand-blue"
                              : "border-brand-border text-brand-gray hover:text-brand-gray-light hover:border-brand-gray"
                            }`}
                        >
                          {node.id === "puerto-madero" ? "P. Madero" : node.id === "miami" ? "Miami Hub" : (extra.nodes[node.id]?.name || node.name).split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                    <Activity className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <span className="text-brand-gray font-mono block text-[0.68rem] uppercase">{extra.avgLatency}</span>
                      <span className="font-mono font-bold text-brand-white text-sm">{selectedNode.latency} ms</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                    <Zap className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <span className="text-brand-gray font-mono block text-[0.68rem] uppercase">{extra.powerBackup}</span>
                      <span>{nodeTrans.powerRedundancy}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse text-right" : ""}`}>
                    <Wifi className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <span className="text-brand-gray font-mono block text-[0.68rem] uppercase">{extra.connectivityLinks}</span>
                      <span>{nodeTrans.netRedundancy}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right panel: Real Interactive Leaflet Map */}
          <div className="lg:col-span-7 border border-brand-border rounded bg-brand-surface min-h-[460px] flex flex-col justify-between p-6 relative overflow-hidden">
            <div className={`flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center mb-6 relative z-10 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
              <span className="font-mono text-[0.7rem] text-brand-gray tracking-widest uppercase">{extra.opsMap}</span>
              
              {/* Region Selector Tabs */}
              <div className={`flex items-center border border-brand-border rounded overflow-hidden p-0.5 bg-black/40 w-fit ${isRtl ? "flex-row-reverse" : ""}`}>
                <button
                  onClick={() => handleRegionChange("ba")}
                  className={`px-3 py-1.5 text-[0.65rem] font-mono rounded-sm transition-all flex items-center gap-1
                    ${activeRegion === "ba"
                      ? "bg-brand-blue text-brand-black font-bold"
                      : "text-brand-gray hover:text-brand-gray-light"
                    }`}
                >
                  Buenos Aires
                </button>
                <button
                  onClick={() => handleRegionChange("miami")}
                  className={`px-3 py-1.5 text-[0.65rem] font-mono rounded-sm transition-all flex items-center gap-1
                    ${activeRegion === "miami"
                      ? "bg-brand-blue text-brand-black font-bold"
                      : "text-brand-gray hover:text-brand-gray-light"
                    }`}
                >
                  <Globe className="w-3 h-3" /> Miami, USA
                </button>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative flex-grow min-h-[320px] rounded overflow-hidden border border-brand-border">
              <div id="leaflet-map" className="absolute inset-0 w-full h-full" />
              {!mapLoaded && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#0a0a0a] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.03)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_2.4s_ease-in-out_infinite]" />
                </div>
              )}
            </div>

            {/* Bottom active feedback */}
            <div className={`relative z-10 mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-2 sm:justify-between text-[10px] sm:text-xs text-brand-gray font-mono ${isRtl ? "sm:flex-row-reverse" : ""}`}>
              <span className={`flex items-center gap-1 ${isRtl ? "flex-row-reverse" : ""}`}><Wifi className="w-3.5 h-3.5" /> {extra.activeLinks}</span>
              <span className="text-brand-blue">{extra.mapAttribution}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
