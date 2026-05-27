"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cpu, Zap, Wifi, Eye, Radio, Lock } from "lucide-react";

interface TranslationSet {
  heroTag: string;
  heroTitle: string;
  heroDesc: string;
  manifestoTitle: string;
  manifestoSubtitle: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  roadmapTitle: string;
  roadmapSubtitle: string;
  step1Year: string;
  step1Title: string;
  step1Desc: string;
  step2Year: string;
  step2Title: string;
  step2Desc: string;
  step3Year: string;
  step3Title: string;
  step3Desc: string;
  step4Year: string;
  step4Title: string;
  step4Desc: string;
  techTitle: string;
  techSubtitle: string;
  techTag: string;
  techBody: string;
  techConsoleTitle: string;
  tech1Title: string;
  tech1Desc: string;
  tech2Title: string;
  tech2Desc: string;
  tech3Title: string;
  tech3Desc: string;
  tech4Title: string;
  tech4Desc: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}

const localTranslations: Record<string, TranslationSet> = {
  es: {
    heroTag: "Filosofía e Ingeniería",
    heroTitle: "Democratizando la seguridad de alta gama.",
    heroDesc: "Creemos que la tranquilidad no debe ser un privilegio de unos pocos, sino un derecho fundamental. Diseñamos e implementamos el ecosistema tecnológico de seguridad física más avanzado, robusto y accesible.",
    manifestoTitle: "El Manifiesto Shomer",
    manifestoSubtitle: "Principios de ingeniería aplicados a la protección de personas y comunidades.",
    pillar1Title: "Tecnología de Vanguardia para Todos",
    pillar1Desc: "La seguridad tradicional reserva sus mejores tecnologías para jefes de estado o corporaciones multinacionales. Nosotros cambiamos las reglas del juego: proveemos hardware y software de última generación en comodato (abono mensual) a precios razonables, permitiendo que cualquier consorcio, barrio o empresa acceda a la biometría y a la IA activa.",
    pillar2Title: "Protección Preventiva, no Reactiva",
    pillar2Desc: "La mayoría de los sistemas locales se limitan a grabar un delito o reaccionar una vez que la intrusión ocurrió. Shomer es un ecosistema lógico que opera en la nube y procesa amenazas en tiempo real. Actuamos en el perímetro mediante analíticas de IA y disuasión en vivo por operadores, deteniendo el riesgo antes de que la puerta física se abra.",
    pillar3Title: "Evolución Continua y Cero Fricción",
    pillar3Desc: "Los porteros eléctricos y llaves magnéticas tradicionales son obsoletos y costosos de actualizar. Shomer es una plataforma digital viva. Nuestro software se actualiza automáticamente desde la nube añadiendo nuevas medidas de protección de forma continua. Todo esto eliminando la necesidad de llaves físicas o de descargar aplicaciones móviles para visitantes.",
    roadmapTitle: "La Ruta de la Innovación",
    roadmapSubtitle: "Nuestra trayectoria construyendo la infraestructura de seguridad física del mañana.",
    step1Year: "FASE 01",
    step1Title: "La Vulnerabilidad Analógica",
    step1Desc: "Los consorcios y empresas dependían de llaves magnéticas fácilmente duplicables y de sistemas de portería sin trazabilidad real. La seguridad era física, reactiva y propensa a fallas humanas o coacción directa.",
    step2Year: "FASE 02",
    step2Title: "La Red de Disuasión Activa",
    step2Desc: "Lanzamos nuestro Tótem de Seguridad Virtual, integrando pantallas HD con operadores en vivo desde centrales blindadas, inmunes a la coacción y conectados de forma georredundante directamente con los protocolos policiales 911.",
    step3Year: "FASE 03",
    step3Title: "Seguridad sin Llaves ni Apps",
    step3Desc: "Revolucionamos el acceso con la Línea Shomer Vision: reconocimiento facial de ultra-alta velocidad (200ms) y QR dinámicos con geocerca GPS por hardware, eliminando aplicaciones invasivas y resolviendo la privacidad con tokens temporales de un solo uso (JWT).",
    step4Year: "FASE 04",
    step4Title: "El Ecosistema Autónomo",
    step4Desc: "Desplegamos procesamiento de inteligencia artificial en el extremo de la red (Edge computing) para permitir que los nodos tomen decisiones de forma autónoma. Tu edificio se mantiene protegido incluso ante cortes prolongados de internet o electricidad, respaldado por UPS de alta capacidad y diagnóstico de salud preventivo automatizado.",
    techTitle: "Pilares Técnicos de Confianza",
    techSubtitle: "Por qué el ecosistema de Shomer es inviolable.",
    techTag: "TECNOLOGÍA DE SISTEMAS",
    techBody: "Diseñamos e implementamos nuestro propio ecosistema físico y lógico, asegurando estándares de rendimiento de nivel internacional que eliminan vulnerabilidades mecánicas y humanas.",
    techConsoleTitle: "Operatividad en tiempo real (Nube)",
    tech1Title: "Cifrado AES-256 de Grado Militar",
    tech1Desc: "Toda la transmisión de datos, flujos de video y registros biométricos están encriptados end-to-end.",
    tech2Title: "Autonomía Energética y de Red",
    tech2Desc: "Cada dispositivo cuenta con almacenamiento local redundante y UPS de hasta 6 horas de duración.",
    tech3Title: "Diagnóstico Preventivo de Hardware",
    tech3Desc: "Nuestra nube monitorea la salud de cada nodo. Si un sensor falla, despachamos un técnico de inmediato.",
    tech4Title: "Geolocalización Inviolable",
    tech4Desc: "Las aperturas web temporales requieren confirmación GPS dentro de los 40 metros de la propiedad.",
    ctaTitle: "El Futuro de la Seguridad ya está aquí",
    ctaDesc: "Diseñá la configuración ideal para tu edificio, oficina o predio y obtené una cotización estimada al instante.",
    ctaBtn: "Configurar mi ecosistema →"
  },
  en: {
    heroTag: "Philosophy & Engineering",
    heroTitle: "Democratizing high-end security.",
    heroDesc: "We believe that peace of mind should not be a privilege for a few, but a fundamental right. We design and implement the most advanced, robust, and accessible physical security technology ecosystem.",
    manifestoTitle: "The Shomer Manifesto",
    manifestoSubtitle: "Engineering principles applied to the protection of people and communities.",
    pillar1Title: "State-of-the-Art Tech for Everyone",
    pillar1Desc: "Traditional security reserves its best technologies for heads of state or multinational corporations. We change the rules of the game: we provide state-of-the-art hardware and software in commodate (monthly fee) at reasonable rates, allowing any consortium or business to access biometrics and active AI.",
    pillar2Title: "Preventive, Not Reactive Protection",
    pillar2Desc: "Most local systems only record a crime or react once the intrusion has occurred. Shomer is a cloud-based logical ecosystem that processes threats in real-time. We act at the perimeter using AI analytics and live operator deterrence, stopping risk before the physical door opens.",
    pillar3Title: "Continuous Evolution & Zero Friction",
    pillar3Desc: "Traditional intercoms and magnetic keys are obsolete and expensive to upgrade. Shomer is a living digital platform. Our software updates automatically from the cloud, continuously adding new protection measures. All this while eliminating the need for physical keys or downloading mobile apps for visitors.",
    roadmapTitle: "The Roadmap of Innovation",
    roadmapSubtitle: "Our journey building the physical security infrastructure of tomorrow.",
    step1Year: "PHASE 01",
    step1Title: "Analog Vulnerability",
    step1Desc: "Consortiums and businesses depended on magnetic keys that were easily duplicable at any local locksmith, and intercom systems with no real traceability. Security was physical, reactive, and prone to human error or direct coercion.",
    step2Year: "PHASE 02",
    step2Title: "Active Deterrence Network",
    step2Desc: "We launched our Virtual Security Totem, integrating HD screens with live operators from armored monitoring centers, immune to coercion and connected georedundantly directly to 911 police protocols.",
    step3Year: "PHASE 03",
    step3Title: "Keyless & Appless Security",
    step3Desc: "We revolutionized access with the Shomer Vision Line: ultra-high-speed facial recognition (200ms) and dynamic QR codes with hardware GPS geofencing, eliminating invasive apps and solving privacy with single-use temporary tokens (JWT).",
    step4Year: "PHASE 04",
    step4Title: "The Autonomous Ecosystem",
    step4Desc: "We deploy artificial intelligence processing at the edge of the network (Edge computing) to allow nodes to make autonomous decisions. Your building remains protected even during prolonged network or power outages, backed by high-capacity UPS and automated preventive health diagnostics.",
    techTitle: "Technical Pillars of Trust",
    techSubtitle: "Why the Shomer ecosystem is inviolable.",
    techTag: "SYSTEMS TECHNOLOGY",
    techBody: "We design and implement our own physical and logical ecosystem, ensuring international performance standards that eliminate mechanical and human vulnerabilities.",
    techConsoleTitle: "Real-time operations (Cloud)",
    tech1Title: "Military-Grade AES-256 Encryption",
    tech1Desc: "All data transmission, video streams, and biometric logs are encrypted end-to-end.",
    tech2Title: "Power and Network Autonomy",
    tech2Desc: "Each device has redundant local storage and UPS backup lasting up to 6 hours.",
    tech3Title: "Preventive Hardware Diagnostics",
    tech3Desc: "Our cloud monitors the health of each node. If a sensor fails, we dispatch a technician immediately.",
    tech4Title: "Inviolable Geolocalisation",
    tech4Desc: "Temporary web openings require GPS confirmation within 40 meters of the property.",
    ctaTitle: "The Future of Security is Already Here",
    ctaDesc: "Design the ideal configuration for your building, office, or property and get an estimated quote instantly.",
    ctaBtn: "Configure my ecosystem →"
  },
  he: {
    heroTag: "פילוסופיה והנדסה",
    heroTitle: "דמוקרטיזציה של אבטחה ברמה הגבוהה ביותר.",
    heroDesc: "אנו מאמינים ששקט נפשי אינו צריך להיות פריבילגיה של מעטים, אלא זכות יסוד. אנו מעצבים ומיישמים את מערכת הטכנולוגיה המתקדמת, החזקה והנגישה ביותר לאבטחה פיזית.",
    manifestoTitle: "המניפסט של שומר",
    manifestoSubtitle: "עקרונות הנדסיים המיושמים להגנה על אנשים וקהילות.",
    pillar1Title: "טכנולוגיית קצה לכולם",
    pillar1Desc: "אבטחה מסורתית שומרת את הטכנולוגיות הטובות ביותר שלה לראשי מדינות או לתאגידים רב-לאומיים. אנו משנים את חוקי המשחק: אנו מספקים חומרה ותוכנה מתקדמות במנוי חודשי במחירים סבירים, המאפשרים לכל בניין או עסק לגשת לביומטריה ובינה מלאכותית פעילה.",
    pillar2Title: "הגנה מונעת, לא תגובתית",
    pillar2Desc: "רוב המערכות המקומיות מוגבלות להקלטת עבירה או תגובה לאחר שהפריצה כבר התרחשה. שומר היא מערכת לוגית מבוססת ענן המעבדת איומים בזמן אמת. אנו פועלים בהיקף הבניין באמצעות ניתוח בינה מלאכותית והרתעה חיה על ידי מפעילים, ועוצרים את הסיכון לפני שהדלת הפיזית נפתחת.",
    pillar3Title: "אבולוציה מתמשכת ואפס חיכוך",
    pillar3Desc: "אינטרקומים ומפתחות מגנטיים מסורתיים הם מיושנים ויקרים לשדרוג. שומר היא פלטפורמה דיגיטלית חיה. התוכנה שלנו מתעדכנת אוטומטית מהענן, ומוסיפה אמצעי הגנה חדשים ללא הרף. כל זאת תוך ביטול הצורך במפתחות פיזיים או בהורדת אפליקציות לנייד עבור מבקרים.",
    roadmapTitle: "מפת הדרכים של החדשנות",
    roadmapSubtitle: "המסע שלנו בבניית תשתית האבטחה הפיזית של המחר.",
    step1Year: "שלב 01",
    step1Title: "פגיעות אנלוגית",
    step1Desc: "בניינים ועסקים היו תלויים במפתחות מגנטיים הניתנים לשעתוק בקלות ובמערכות אינטרקום ללא יכולת מעקב אמיתית. האבטחה הייתה פיזית, תגובתית וחשופה לטעויות אנוש או כפייה ישירה.",
    step2Year: "שלב 02",
    step2Title: "רשת הרתעה פעילה",
    step2Desc: "השקנו את טוטם האבטחה הווירטואלי שלנו, המשלב מסכי HD עם מפעילים בשידור חי ממוקדים מוגנים, חסינים מפני כפייה ומחוברים ישירות לפרוטוקול המשטרה 911.",
    step3Year: "שלב 03",
    step3Title: "אבטחה ללא מפתחות ואפליקציות",
    step3Desc: "חוללנו מהפכה בגישה עם ליין שומר ויז'ן: זיהוי פנים במהירות על-קולית (200 מילישניות) וקודי QR דינמיים עם גדר גיאוגרפית מבוססת GPS בחומרה, המבטלת אפליקציות פולשניות ופותרת את הפרטיות באמצעות אסימונים זמניים לשימוש חד-פעמי (JWT).",
    step4Year: "שלב 04",
    step4Title: "המערכת האוטונומית",
    step4Desc: "אנו פורסים עיבוד בינה מלאכותית בקצה הרשת (Edge computing) כדי לאפשר לצמתים לקבל החלטות באופן אוטונומי. הבניין שלך נשאר מוגן גם במהלך הפסקות רשת או חשמל ממושכות, מגובה במערכות UPS בעלות קיבולת גבוהה ואבחון בריאות מונע אוטומטי.",
    techTitle: "עמודי תווך טכניים לאמון",
    techSubtitle: "מדוע המערכת של שומר היא בלתי חדירה.",
    techTag: "טכנולוגיית מערכות",
    techBody: "אנו מעצבים ומיישמים את המערכת הפיזית והלוגית שלנו, ומבטיחים סטנדרטים בינלאומיים של ביצועים המונעים נקודות תורפה מכניות ואנושיות.",
    techConsoleTitle: "פעילות בזמן אמת (ענן)",
    tech1Title: "הצפנה ברמה צבאית AES-256",
    tech1Desc: "כל העברת הנתונים, זרמי הווידאו והרישומים הביומטריים מוצפנים מקצה לקצה.",
    tech2Title: "אוטונומיה של אנרגיה ורשת",
    tech2Desc: "לכל מכשיר יש אחסון מקומי וגיבוי UPS המאפשר פעולה של עד 6 שעות ללא חשמל.",
    tech3Title: "אבחון מונע לחומרה",
    tech3Desc: "הענן שלנו מנטר את התקינות של כל צומת. אם חיישן נכשל, אנו שולחים טכנאי באופן מיידי.",
    tech4Title: "איכון גיאוגרפי בלתי ניתן לעקיפה",
    tech4Desc: "פתיחה זמנית מהנייד מחייבת אישור GPS בטווח של 40 מטרים מהנכס.",
    ctaTitle: "עתיד האבטחה כבר כאן",
    ctaDesc: "עצב את התצורה האידיאלית עבור הבניין, המשרד או הנכס שלך וקבל הצעת מחיר מוערכת באופן מיידי.",
    ctaBtn: "עצב את המערכת שלי ←"
  },
  de: {
    heroTag: "Philosophie & Ingenieurwesen",
    heroTitle: "Demokratisierung von High-End-Sicherheit.",
    heroDesc: "Wir glauben, dass Seelenfrieden kein Privileg für wenige sein sollte, sondern ein Grundrecht. Wir entwerfen und implementieren das fortschrittlichste, robusteste und zugänglichste physische Sicherheits-Ökosystem.",
    manifestoTitle: "Das Shomer-Manifest",
    manifestoSubtitle: "Ingenieurprinzipien angewandt auf den Schutz von Menschen und Gemeinschaften.",
    pillar1Title: "Spitzentechnologie für alle",
    pillar1Desc: "Traditionelle Sicherheit reserviert ihre besten Technologien für Staatsoberhäupter oder multinationale Konzerne. Wir ändern die Spielregeln: Wir stellen modernste Hardware und Software unter einem Mietvertrag (monatliche Gebühr) zu günstigen Preisen zur Verfügung, sodass jede Eigentümergemeinschaft, jedes Viertel oder jedes Unternehmen Zugang zu Biometrie und aktiver KI erhält.",
    pillar2Title: "Präventiver, nicht reaktiver Schutz",
    pillar2Desc: "Die meisten lokalen Systeme beschränken sich darauf, eine Straftat aufzuzeichnen oder erst dann zu reagieren, wenn das Eindringen bereits stattgefunden hat. Shomer ist ein logisches Ökosystem in der Cloud, das Bedrohungen in Echtzeit verarbeitet. Wir agieren an der Peripherie durch KI-Analysen und Live-Abschreckung durch Operatoren und stoppen das Risiko, bevor sich die physische Tür öffnet.",
    pillar3Title: "Kontinuierliche Entwicklung & Null Reibung",
    pillar3Desc: "Herkömmliche Gegensprechanlagen und Magnetschlüssel sind veraltet und teuer in der Aktualisierung. Shomer ist eine lebendige digitale Plattform. Unsere Software aktualisiert sich automatisch aus der Cloud und fügt kontinuierlich neue Schutzmaßnahmen hinzu. All dies, ohne dass physische Schlüssel benötigt werden oder Besucher mobile Apps herunterladen müssen.",
    roadmapTitle: "Der Fahrplan der Innovation",
    roadmapSubtitle: "Unser Weg zum Aufbau der physischen Sicherheitsinfrastruktur von morgen.",
    step1Year: "PHASE 01",
    step1Title: "Analoge Verwundbarkeit",
    step1Desc: "Eigentümergemeinschaften und Unternehmen hingen von Magnetschlüsseln ab, die bei jedem Schlüsseldienst leicht kopierbar waren, und von Gegensprechanlagen ohne echte Rückverfolgbarkeit. Sicherheit war physisch, reaktiv und anfällig für menschliche Fehler oder direkte Nötigung.",
    step2Year: "PHASE 02",
    step2Title: "Aktives Abschreckungsnetzwerk",
    step2Desc: "Wir haben unsere virtuelle Sicherheits-Stele eingeführt, die HD-Bildschirme mit Live-Operatoren aus gepanzerten Zentralen integriert, immun gegen Nötigung und georedundant direkt mit den Polizeiprotokollen 911 verbunden.",
    step3Year: "PHASE 03",
    step3Title: "Sicherheit ohne Schlüssel oder Apps",
    step3Desc: "Wir haben den Zugang mit der Shomer-Vision-Linie revolutioniert: ultraschnelle Gesichtserkennung (200 ms) und dynamische QR-Codes mit Hardware-GPS-Geofencing machen invasive Apps überflüssig und lösen den Datenschutz mit temporären Einweg-Tokens (JWT).",
    step4Year: "PHASE 04",
    step4Title: "Das autonome Ökosystem",
    step4Desc: "Wir setzen KI-Verarbeitung am Rande des Netzwerks (Edge-Computing) ein, um Knoten die Möglichkeit zu geben, autonome Entscheidungen zu treffen. Ihr Gebäude bleibt auch bei längeren Netzwerk- oder Stromausfällen geschützt, unterstützt durch hochkapazitive USV-Anlagen und automatisierte präventive Zustandsdiagnosen.",
    techTitle: "Technische Säulen des Vertrauens",
    techSubtitle: "Warum das Shomer-Ökosystem unverletzlich ist.",
    techTag: "SYSTEMTECHNOLOGIE",
    techBody: "Wir entwerfen und implementieren unser eigenes physisches und logisches Ökosystem und gewährleisten internationale Leistungsstandards, die mechanische und menschliche Schwachstellen eliminieren.",
    techConsoleTitle: "Echtzeitbetrieb (Cloud)",
    tech1Title: "Militärische AES-256-Verschlüsselung",
    tech1Desc: "Alle Datenübertragungen, Videoströme und biometrischen Protokolle sind Ende-zu-Ende verschlüsselt.",
    tech2Title: "Energie- und Netzwerkautonomie",
    tech2Desc: "Jedes Gerät verfügt über redundanten lokalen Speicher und USV-Backup für bis zu 6 Stunden Betrieb.",
    tech3Title: "Präventive Hardwarediagnose",
    tech3Desc: "Unsere Cloud überwacht den Zustand jedes Knotens. Wenn ein Sensor ausfällt, senden wir sofort einen Techniker.",
    tech4Title: "Unverletzliche Geolokalisierung",
    tech4Desc: "Temporäre Web-Öffnungen erfordern eine GPS-Bestätigung innerhalb von 40 Metern um das Grundstück.",
    ctaTitle: "Die Zukunft der Sicherheit ist bereits da",
    ctaDesc: "Entwerfen Sie die ideale Konfiguration für Ihr Gebäude, Büro oder Grundstück und erhalten Sie sofort ein geschätztes Angebot.",
    ctaBtn: "Mein Ökosystem konfigurieren →"
  },
  ru: {
    heroTag: "Философия и Инженерия",
    heroTitle: "Демократизация высокотехнологичной безопасности.",
    heroDesc: "Мы верим, что душевное спокойствие должно быть не привилегией немногих, а фундаментальным правом. Мы проектируем и внедряем самую передовую, надежную и доступную технологическую экосистему физической безопасности.",
    manifestoTitle: "Манифест Shomer",
    manifestoSubtitle: "Инженерные принципы, применяемые для защиты людей и сообществ.",
    pillar1Title: "Передовые технологии для каждого",
    pillar1Desc: "Традиционная безопасность резервирует свои лучшие технологии для глав государств или транснациональных корпораций. Мы меняем правила игры: мы предоставляем современное оборудование и программное обеспечение в пользование (ежемесячная подписка) по разумным ценам, позволяя любому консорциуму, району или бизнесу получить доступ к биометрии и активному ИИ.",
    pillar2Title: "Превентивная, а не реактивная защита",
    pillar2Desc: "Большинство локальных систем ограничиваются записью преступления или реагированием уже после вторжения. Shomer — это облачная логическая экосистема, которая обрабатывает угрозы в режиме реального времени. Мы действуем по периметру с помощью аналитики ИИ и живого сдерживания операторами, предотвращая риск до того, как откроется физическая дверь.",
    pillar3Title: "Непрерывная эволюция и отсутствие трения",
    pillar3Desc: "Традиционные домофоны и магнитные ключи устарели, а их обновление стоит дорого. Shomer — это живая цифровая платформа. Наше ПО автоматически обновляется из облака, постоянно добавляя новые меры защиты. И все это без необходимости в физических ключах или загрузки мобильных приложений для посетителей.",
    roadmapTitle: "Путь инноваций",
    roadmapSubtitle: "Наш путь создания инфраструктуры физической безопасности завтрашнего дня.",
    step1Year: "ФАЗА 01",
    step1Title: "Аналоговая уязвимость",
    step1Desc: "Консорциумы и компании зависели от магнитных ключей, которые легко скопировать в любой мастерской, и домофонных систем без реальной отслеживаемости. Безопасность была физической, реактивной и подверженной человеческим ошибкам или прямому давлению.",
    step2Year: "ФАЗА 02",
    step2Title: "Сеть активного сдерживания",
    step2Desc: "Мы запустили наш виртуальный тотем безопасности, объединяющий HD-экраны с операторами в реальном времени из бронированных центров мониторинга, защищенных от давления и подключенных напрямую к протоколам полиции 911.",
    step3Year: "ФАЗА 03",
    step3Title: "Безопасность без ключей и приложений",
    step3Desc: "Мы совершили революцию в сфере доступа с линейкой Shomer Vision: сверхбыстрое распознавание лиц (200 мс) и динамические QR-коды с аппаратным GPS-геофенсингом, исключающие инвазивные приложения и решающие вопросы конфиденциальности с помощью временных одноразовых токенов (JWT).",
    step4Year: "ФАЗА 04",
    step4Title: "Автономная экосистема",
    step4Desc: "Мы развертываем обработку ИИ на границе сети (Edge computing), чтобы узлы могли принимать решения автономно. Ваше здание остается под защитой даже во время длительных перебоев с интернетом или электричеством благодаря ИБП высокой емкости и автоматической профилактической диагностике.",
    techTitle: "Технические основы доверия",
    techSubtitle: "Почему экосистема Shomer неприкосновенна.",
    techTag: "ТЕХНОЛОГИЯ СИСТЕМ",
    techBody: "Мы проектируем и внедряем собственную физическую и логическую экосистему, обеспечивая международные стандарты производительности, исключающие механические и человеческие уязвимости.",
    techConsoleTitle: "Работа в реальном времени (Облако)",
    tech1Title: "Шифрование AES-256 военного класса",
    tech1Desc: "Все передачи данных, видеопотоки и биометрические журналы зашифрованы сквозным шифрованием.",
    tech2Title: "Энергетическая и сетевая автономия",
    tech2Desc: "Каждое устройство имеет резервное локальное хранилище и ИБП емкостью до 6 часов работы.",
    tech3Title: "Профилактическая диагностика оборудования",
    tech3Desc: "Наше облако отслеживает состояние каждого узла. В случае сбоя датчика мы немедленно отправляем техника.",
    tech4Title: "Неприкосновенная геолокация",
    tech4Desc: "Временное веб-открытие требует подтверждения GPS в пределах 40 метров от объекта.",
    ctaTitle: "Будущее безопасности уже здесь",
    ctaDesc: "Спроектируйте идеальную конфигурацию для вашего здания, офиса или участка и мгновенно получите предварительный расчет.",
    ctaBtn: "Настроить мою экосистему →"
  },
  pt: {
    heroTag: "Filosofia e Engenharia",
    heroTitle: "Democratizando a segurança de alta gama.",
    heroDesc: "Acreditamos que a tranquilidade não deve ser um privilégio de poucos, mas um direito fundamental. Projetamos e implementamos o ecossistema tecnológico de segurança física mais avançado, robusto e acessível.",
    manifestoTitle: "O Manifesto Shomer",
    manifestoSubtitle: "Princípios de engenharia aplicados à proteção de pessoas e comunidades.",
    pillar1Title: "Tecnologia de ponta para todos",
    pillar1Desc: "A segurança tradicional reserva as suas melhores tecnologias para chefes de estado ou corporações multinacionais. Nós mudamos as regras do jogo: fornecemos hardware e software de última geração em comodato (mensalidade) a preços razoáveis, permitindo que qualquer condomínio, bairro ou empresa aceda à biometria e à IA ativa.",
    pillar2Title: "Proteção preventiva, não reativa",
    pillar2Desc: "A maioria dos sistemas locais limita-se a gravar um crime ou a reagir quando a intrusão já ocorreu. Shomer é um ecossistema lógico baseado na nuvem que processa ameaças em tempo real. Atuamos no perímetro através de análise de IA e dissuasão ao vivo por operadores, detendo o risco antes que a porta física se abra.",
    pillar3Title: "Evolução contínua e fricção zero",
    pillar3Desc: "Os porteiros eletrónicos e chaves magnéticas tradicionais são obsoletos e caros de atualizar. Shomer é uma plataforma digital viva. Nosso software atualiza-se automaticamente a partir da nuvem, adicionando novas medidas de proteção de forma contínua. Tudo isso eliminando a necessidade de chaves físicas ou de descarregar aplicações móveis para visitantes.",
    roadmapTitle: "A rota da inovação",
    roadmapSubtitle: "Nossa trajetória construindo a infraestrutura de segurança física do amanhã.",
    step1Year: "FASE 01",
    step1Title: "Vulnerabilidade Analógica",
    step1Desc: "Condomínios e empresas dependiam de chaves magnéticas facilmente duplicáveis e de sistemas de portaria sem rastreabilidade real. A segurança era física, reativa e propensa a falhas humanas ou coação direta.",
    step2Year: "FASE 02",
    step2Title: "Rede de Dissuasão Ativa",
    step2Desc: "Lançamos o nosso Totem de Segurança Virtual, integrando ecrãs HD com operadores ao vivo a partir de centrais blindadas, imunes a coação e conectados de forma georredundante diretamente com os protocolos policiais 911.",
    step3Year: "FASE 03",
    step3Title: "Segurança sem chaves nem apps",
    step3Desc: "Revolucionamos o acesso com a Linha Shomer Vision: reconhecimento facial de ultra-alta velocidade (200ms) e QRs dinâmicos com geocerca GPS por hardware, eliminando aplicações invasivas e resolvendo a privacidade com tokens temporários de uso único (JWT).",
    step4Year: "FASE 04",
    step4Title: "O Ecossistema Autónomo",
    step4Desc: "Desprega processamento de inteligência artificial na borda da rede (Edge computing) para permitir que os nós tomem decisões de forma autónoma. O seu edifício mantém-se protegido mesmo perante cortes prolongados de internet ou eletricidade, apoiado por UPS de alta capacidade e diagnóstico de integridade preventivo automatizado.",
    techTitle: "Pilares Técnicos de Confianza",
    techSubtitle: "Por que o ecossistema Shomer é inviolável.",
    techTag: "TECNOLOGIA DE SISTEMAS",
    techBody: "Projetamos e implementamos o nosso próprio ecossistema físico e lógico, assegurando padrões de desempenho de nível internacional que eliminam vulnerabilidades mecânicas e humanas.",
    techConsoleTitle: "Operatividade em tempo real (Nuvem)",
    tech1Title: "Criptografia AES-256 de grau militar",
    tech1Desc: "Toda la transmisión de dados, fluxos de vídeo e registos biométricos são encriptados de ponta a ponta.",
    tech2Title: "Autonomia de energia e rede",
    tech2Desc: "Cada dispositivo conta com armazenamento local redundante e UPS de até 6 horas de duração.",
    tech3Title: "Diagnóstico preventivo de hardware",
    tech3Desc: "Nossa nuvem monitoriza a integridade de cada nó. Se um sensor falhar, enviamos um técnico imediatamente.",
    tech4Title: "Geolocalização inviolável",
    tech4Desc: "As aberturas web temporárias requerem confirmação de GPS dentro de 40 metros da propriedade.",
    ctaTitle: "O futuro da segurança já está aqui",
    ctaDesc: "Projete a configuração ideal para o seu edifício, escritório ou terreno e obtenha uma cotação estimada instantaneamente.",
    ctaBtn: "Configurar o meu ecossistema →"
  },
  it: {
    heroTag: "Filosofia e Ingegneria",
    heroTitle: "Democratizzare la sicurezza di fascia alta.",
    heroDesc: "Crediamo che la tranquillità non debba essere un privilegio di pochi, ma un diritto fondamentale. Progettiamo e implementiamo l'ecosistema tecnologico di sicurezza fisica più avanzato, robusto e accessibile.",
    manifestoTitle: "Il Manifesto Shomer",
    manifestoSubtitle: "Principi di ingegneria applicati alla protezione di persone e comunità.",
    pillar1Title: "Tecnologia all'avanguardia per tutti",
    pillar1Desc: "La sicurezza tradizionale riserva le sue migliori tecnologie a capi di stato o multinazionali. Noi cambiamo le regole del gioco: forniamo hardware e software di ultima generazione in comodato (canone mensile) a prezzi ragionevoli, consentendo a qualsiasi condominio, quartiere o azienda di accedere alla biometria e all'IA attiva.",
    pillar2Title: "Protezione preventiva, non reattiva",
    pillar2Desc: "La maggior parte dei sistemi locali si limita a registrare un reato o a reagire una volta avvenuta l'intrusione. Shomer è un citofono virtuale basato sul cloud che elabora le minacce in tempo reale. Agiamo sul perimetro tramite analisi IA e dissuasione dal vivo da parte degli operatori, bloccando il rischio prima che la porta fisica si apra.",
    pillar3Title: "Evoluzione continua e zero attriti",
    pillar3Desc: "I citofoni e le chiavi magnetiche tradizionali sono obsoleti e costosi da aggiornare. Shomer è una piattaforma digitale viva. Il nostro software si aggiorna automaticamente dal cloud, aggiungendo continuamente nuove protezione. Tutto questo eliminando la necessità di chiavi fisiche o di scaricare app mobili per i visitatori.",
    roadmapTitle: "La tabella di marcia dell'innovazione",
    roadmapSubtitle: "Il nostro viaggio nella costruzione dell'infrastruttura di sicurezza fisica del domani.",
    step1Year: "FASE 01",
    step1Title: "Vulnerabilità analogica",
    step1Desc: "I condomini e le aziende dipendevano da chiavi magnetiche facilmente duplicabili e da sistemi di portineria senza una reale tracciabilità. La sicurezza era fisica, reattiva e soggetta a errori umani o coercizione diretta.",
    step2Year: "FASE 02",
    step2Title: "Rete di dissuasione attiva",
    step2Desc: "Abbiamo lanciato il nostro Totem di sicurezza virtuale, che integra schermi HD con operatori in diretta da centrali blindate, immuni a coercizioni e collegati in modo georidondante direttamente ai protocolli di polizia 911.",
    step3Year: "FASE 03",
    step3Title: "Sicurezza senza chiavi né app",
    step3Desc: "Abbiamo rivoluzionato l'accesso con la linea Shomer Vision: riconoscimento facciale ad altissima velocità (200 ms) e QR dinamici con geofencing GPS hardware, eliminando app invasive e risolvendo la privacy con token temporanei monouso (JWT).",
    step4Year: "FASE 04",
    step4Title: "L'ecosistema autonomo",
    step4Desc: "Distribuiamo l'elaborazione dell'intelligenza artificiale all'edge della rete (Edge computing) per consentire ai nodi di prendere decisioni in autonomia. Il tuo edificio rimane protetto anche in caso di prolungati blackout elettrici o di rete, grazie a UPS ad alta capacità e diagnostica preventiva dello stato automatizzata.",
    techTitle: "Pilastri tecnici di fiducia",
    techSubtitle: "Perché l'ecosistema Shomer è inviolabile.",
    techTag: "TECNOLOGIA DEI SISTEMI",
    techBody: "Progettiamo e implementiamo il nostro ecosistema fisico e logico, garantendo standard di prestazioni di livello internazionale che eliminano le vulnerabilità meccaniche e umane.",
    techConsoleTitle: "Operatività in tempo reale (Cloud)",
    tech1Title: "Crittografia AES-256 di livello militare",
    tech1Desc: "Tutte le trasmissioni di dati, i flussi video e i registri biometrici sono crittografati end-to-end.",
    tech2Title: "Autonomia energetica e di rete",
    tech2Desc: "Ogni dispositivo è dotato di memoria locale ridondante e UPS con autonomia fino a 6 ore.",
    tech3Title: "Diagnostica hardware preventiva",
    tech3Desc: "Il nostro cloud monitora lo stato di salute di ciascun nodo. In caso di guasto a un sensore, inviamo immediatamente un tecnico.",
    tech4Title: "Geolocalizzazione inviolabile",
    tech4Desc: "Le aperture web temporanee richiedono la conferma GPS entro 40 metri dalla proprietà.",
    ctaTitle: "Il futuro della sicurezza è già qui",
    ctaDesc: "Progetta la configurazione ideale per il tuo edificio, ufficio o terreno e ottieni un preventivo stimato all'istante.",
    ctaBtn: "Configura il mio ecosistema →"
  }
};

export function AboutClient() {
  const { language } = useLanguage();

  // Use selected language, fallback to Spanish if not present, and handle translation sets
  const t = localTranslations[language] || localTranslations.en || localTranslations.es;

  const isRtl = language === "he";

  const timelineSteps = [
    { year: t.step1Year, title: t.step1Title, desc: t.step1Desc },
    { year: t.step2Year, title: t.step2Title, desc: t.step2Desc },
    { year: t.step3Year, title: t.step3Title, desc: t.step3Desc },
    { year: t.step4Year, title: t.step4Title, desc: t.step4Desc }
  ];

  return (
    <div className={`pt-[68px] min-h-screen bg-brand-black text-brand-white relative overflow-hidden ${isRtl ? "text-right" : "text-left"}`}>
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,191,255,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,230,118,0.05),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,191,255,0.05),transparent_70%)] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-[linear-gradient(180deg,rgba(8,8,8,0.6)_0%,rgba(0,0,0,0.95)_100%)]">
        <div className="max-w-[1000px] mx-auto text-center relative">
          {/* Virtual scanning line simulating CCTV tech */}
          <div className="absolute top-[-100px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent blur-[1px] animate-scan-line-cctv" style={{ animationDuration: "6s" }} />
          
          <FadeUp>
            <div className="font-mono text-xs md:text-sm tracking-[0.25em] text-brand-blue uppercase mb-5 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_6px_#00BFFF]" />
              {t.heroTag}
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] uppercase tracking-tight mb-8">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-brand-gray-light leading-relaxed max-w-[760px] mx-auto font-light">
              {t.heroDesc}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Manifesto / Core Philosophy Section */}
      <section className="py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-brand-near-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 text-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">{t.manifestoTitle}</h2>
              <p className="text-sm font-mono tracking-widest text-brand-gray uppercase max-w-[600px] mx-auto">{t.manifestoSubtitle}</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FadeUp delay={0.1} className="h-full">
              <div className="group border border-brand-border bg-brand-black/40 p-8 sm:p-10 rounded-lg hover:border-brand-blue/40 hover:bg-brand-surface/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-brand-blue transition-colors">{t.pillar1Title}</h3>
                  <p className="text-[0.88rem] text-brand-gray leading-relaxed font-light">{t.pillar1Desc}</p>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={0.2} className="h-full">
              <div className="group border border-brand-border bg-brand-black/40 p-8 sm:p-10 rounded-lg hover:border-brand-green/40 hover:bg-brand-surface/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,230,118,0.04),transparent_70%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-brand-green transition-colors">{t.pillar2Title}</h3>
                  <p className="text-[0.88rem] text-brand-gray leading-relaxed font-light">{t.pillar2Desc}</p>
                </div>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={0.3} className="h-full">
              <div className="group border border-brand-border bg-brand-black/40 p-8 sm:p-10 rounded-lg hover:border-brand-blue/40 hover:bg-brand-surface/30 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-blue-dim border border-brand-blue/20 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-brand-blue transition-colors">{t.pillar3Title}</h3>
                  <p className="text-[0.88rem] text-brand-gray leading-relaxed font-light">{t.pillar3Desc}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Interactive Timeline / Roadmap Section (Tesla/SpaceX Style) */}
      <section className="py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-brand-black">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-20 text-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-4">{t.roadmapTitle}</h2>
              <p className="text-sm font-mono tracking-widest text-brand-gray uppercase max-w-[600px] mx-auto">{t.roadmapSubtitle}</p>
            </FadeUp>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Central Timeline Line */}
            <div className={`absolute top-0 bottom-0 w-[2px] bg-brand-border ${isRtl ? "right-[1px] md:right-1/2" : "left-[1px] md:left-1/2"} pointer-events-none`} />

            {/* Steps */}
            {timelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative mb-16 last:mb-0 flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  
                  {/* Outer point on the timeline */}
                  <div className={`absolute w-3 h-3 rounded-full border-2 border-brand-black bg-brand-blue top-1.5 shadow-[0_0_8px_#00BFFF] z-20 ${
                    isRtl 
                      ? "right-[-4px] md:right-1/2 md:translate-x-[5px]" 
                      : "left-[-4px] md:left-1/2 md:translate-x-[-5px]"
                  }`} />

                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-1/2 flex items-center ${isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"} text-left ${isRtl ? "text-right" : ""}`}>
                    <FadeUp direction={isEven ? (isRtl ? "right" : "left") : (isRtl ? "left" : "right")} className="w-full">
                      <div className="border border-brand-border bg-brand-surface/40 p-6 sm:p-8 rounded-lg hover:border-brand-blue/20 transition-all duration-300">
                        <div className="font-mono text-xs text-brand-blue font-bold tracking-widest mb-2">{step.year}</div>
                        <h3 className="text-lg font-bold uppercase mb-3 text-white">{step.title}</h3>
                        <p className="text-[0.83rem] text-brand-gray-light leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </FadeUp>
                  </div>

                  {/* Empty Column spacer for layout alignment (Desktop) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering specs (Verkada Style) */}
      <section className="py-20 md:py-28 px-6 md:px-10 z-10 border-b border-brand-border bg-brand-near-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.2em] text-brand-green uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_6px_#00E676]" />
                {t.techTag}
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-6">
                {t.techTitle}
              </h2>
              <p className="text-brand-gray-light text-[0.95rem] leading-relaxed mb-10 font-light max-w-[550px]">
                {t.techSubtitle} {t.techBody}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    {t.tech1Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech1Desc}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5" />
                    {t.tech2Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech2Desc}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    {t.tech3Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech3Desc}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-blue tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    {t.tech4Title}
                  </h4>
                  <p className="text-[0.78rem] text-brand-gray leading-relaxed font-light">{t.tech4Desc}</p>
                </div>
              </div>
            </FadeUp>

            {/* Interactive console visual asset */}
            <FadeUp delay={0.2}>
              <div className="relative border border-brand-border rounded-lg bg-brand-black p-4 md:p-6 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,191,255,0.06),transparent_50%)]" />
                <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                    <span className="font-mono text-[9px] text-brand-gray tracking-wider uppercase">{t.techConsoleTitle}</span>
                  </div>
                  <span className="font-mono text-[9px] text-brand-blue tracking-widest">SHOMER COMMAND</span>
                </div>
                <div className="aspect-[16/10] bg-brand-near-black rounded border border-white/5 relative overflow-hidden flex flex-col justify-end p-4">
                  {/* Background node simulation */}
                  <div className="absolute inset-0 opacity-15 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <circle cx="50" cy="50" r="30" className="text-brand-blue" />
                      <line x1="50" y1="0" x2="50" y2="100" className="text-brand-blue" />
                      <line x1="0" y1="50" x2="100" y2="50" className="text-brand-blue" />
                      <circle cx="50" cy="50" r="2" className="text-brand-green fill-brand-green animate-ping" />
                    </svg>
                  </div>
                  <div className="relative z-10 font-mono text-[8px] sm:text-[10px] text-brand-gray-light flex flex-col gap-1">
                    <span className="text-brand-green">● SYSTEM STATE: NOMINAL</span>
                    <span>● LOCAL DATABASE SYNCHRONIZED</span>
                    <span>● VPN PROTOCOL TUNNEL: OK (12ms)</span>
                    <span className="text-brand-blue">● EDGE COMPILING SUCCESSFUL (100%)</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-brand-black">
        <div className="max-w-[900px] mx-auto border border-brand-blue rounded-lg p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-[linear-gradient(135deg,var(--color-brand-surface),rgba(0,191,255,0.05))] relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,191,255,0.1),transparent_70%)] pointer-events-none" />
          <div>
            <h3 className="font-display text-4xl uppercase mb-3 tracking-wide">{t.ctaTitle}</h3>
            <p className="text-sm text-brand-gray-light leading-relaxed max-w-[450px]">
              {t.ctaDesc}
            </p>
          </div>
          <Link href="/#configurador" className="whitespace-nowrap bg-brand-blue text-brand-black px-8 py-3.5 rounded-sm font-medium text-sm tracking-wider uppercase hover:bg-white hover:-translate-y-px transition-all">
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
