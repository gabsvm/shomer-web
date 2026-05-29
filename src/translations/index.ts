export type Locale = "es" | "en" | "he" | "de" | "ru" | "pt" | "it";

export interface TranslationDictionary {
  common: {
    cta: string;
    loading: string;
    success: string;
    error: string;
    learnMore: string;
    soon: string;
    emergency: string;
    contactAdvisor: string;
    requestProposal: string;
  };
  navbar: {
    vision: string;
    totem: string;
    services: string;
    pricing: string;
    blog: string;
    clients: string;
    club: string;
  };
  hero: {
    product: string;
    title1: string;
    title2: string;
    desc: string;
    bullet1Title: string;
    bullet1Desc: string;
    bullet2Title: string;
    bullet2Desc: string;
    "3dView": string;
    photo: string;
    activeMonitoring: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDesc: string;
    heroQuote: string;
    heroProducts: string;
    cctvLive: string;
    rec: string;
    sector: string;
    faceDetected: string;
    latency: string;
    cpu: string;
    links: string;
    tickerTitle: string;
    logEnc: string;
    logDiag: string;
    logLprReady: string;
    logFaceOk: string;
    logRoundsOk: string;
    logPingOk: string;
    logLprOk: string;
    logCctvOk: string;
    logModeOk: string;
  };
  stats: {
    over: string;
    monitored: string;
    police: string;
    avgTime: string;
    satisfaction: string;
    yearsExp: string;
    usersProt: string;
    activeMon: string;
    hiddenCosts: string;
  };
  problem: {
    tag: string;
    title1: string;
    title2: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    footerText: string;
  };
  vision: {
    tag: string;
    title: string;
    desc: string;
    faceIdTitle: string;
    faceIdDesc: string;
    rfidTitle: string;
    rfidDesc: string;
    qrTitle: string;
    qrDesc: string;
    intercomTitle: string;
    intercomDesc: string;
    aiTitle: string;
    aiDesc: string;
  };
  totem: {
    tag: string;
    title: string;
    desc: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
  };
  segments: {
    tag: string;
    title: string;
    consorcios: string;
    consorciosDesc: string;
    empresas: string;
    empresasDesc: string;
    barrios: string;
    barriosDesc: string;
    hoteles: string;
    hotelesDesc: string;
  };
  inframap: {
    tag: string;
    title: string;
    desc: string;
    nodes: string;
    nodesDesc: string;
    ops: string;
    opsDesc: string;
    redundancy: string;
    redundancyDesc: string;
  };
  sandbox: {
    tag: string;
    title: string;
    desc: string;
    liveFeed: string;
    noAlarms: string;
    simulateAlert: string;
    simulating: string;
    resolved: string;
    alertTypes: {
lpr: string;
      line: string;
      panic: string;
      open: string;
    };
    log: {
      lpr: string;
      line: string;
      panic: string;
      open: string;
      monitoring: string;
      resolvedLog: string;
    };
  };
  pricing: {
    tag: string;
    title: string;
    desc: string;
    monthly: string;
    ars: string;
    usd: string;
    perMonth: string;
    plans: {
      basic: {
        name: string;
        desc: string;
      };
      standard: {
        name: string;
        desc: string;
      };
      premium: {
        name: string;
        desc: string;
      };
    };
    features: {
      support: string;
      app: string;
      jwt: string;
      monitoring: string;
      shabat: string;
      patents: string;
      ai: string;
      ups: string;
      unlimited: string;
    };
  };
  cpq: {
    tag: string;
    title: string;
    desc: string;
    axonometric: string;
    aiActive: string;
    environments: {
      edificio: string;
      empresa: string;
      barrio: string;
      hotel: string;
    };
    hardware: {
      title: string;
      totemName: string;
      totemDesc: string;
      facialName: string;
      facialDesc: string;
      camarasName: string;
      camarasDesc: string;
      barreraName: string;
      barreraDesc: string;
    };
    software: {
      title: string;
      lineaName: string;
      lineaDesc: string;
      patentesName: string;
      patentesDesc: string;
      horariosName: string;
      horariosDesc: string;
      shabatName: string;
      shabatDesc: string;
    };
    summary: {
      title: string;
      envLabel: string;
      hwLabel: string;
      swLabel: string;
      items: string;
      monthlyTotal: string;
      arsSuffix: string;
      usdSuffix: string;
      disclaimer: string;
      quoteBtn: string;
    };
  };
  podcast: {
    tag: string;
    title: string;
    desc: string;
    play: string;
    pause: string;
    listening: string;
    downloadTranscript: string;
    episodeTitle: string;
    episodeDesc: string;
  };
  includes: {
    tag: string;
    title: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  why: {
    tag: string;
    title: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  testimonials: {
    tag: string;
    title: string;
    list: Array<{
      name: string;
      role: string;
      content: string;
    }>;
  };
  faq: {
    tag: string;
    title: string;
    list: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    name: string;
    email: string;
    phone: string;
    propType: string;
    message: string;
    send: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderMessage: string;
    types: {
      edificio: string;
      empresa: string;
      barrio: string;
      hotel: string;
    };
    successMsg: string;
    submitting: string;
  };
  footer: {
    desc: string;
    navigation: string;
    legal: string;
    rights: string;
    address: string;
    privacy: string;
  };
  club: {
    tag: string;
    title: string;
    desc: string;
    btn: string;
  };
  servicesPage: {
    backToHome: string;
    residentialTitle: string;
    corporateTitle: string;
    neighborhoodTitle: string;
    hotelTitle: string;
    residentialDesc: string;
    corporateDesc: string;
    neighborhoodDesc: string;
    hotelDesc: string;
    militaryGrade: string;
    shabatTitle: string;
    shabatDesc: string;
    promoTitle: string;
    promoDesc: string;
    requirementsTitle: string;
    requirementsDesc: string;
    supportTitle: string;
    supportDesc: string;
    customerTitle: string;
    customerDesc: string;
    consultAdvisor: string;
    reqQuote: string;
    endInsecurity: string;
    consorcioSecurityDesc: string;
    consorcioEndDesc: string;
    features: {
      biometric: string;
      biometricDesc: string;
      accessControl: string;
      accessControlDesc: string;
      panicFinger: string;
      panicFingerDesc: string;
      monitoring: string;
      monitoringDesc: string;
    };
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  es: {
    common: {
      cta: "Cotizar ahora",
      loading: "Cargando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Ocurrió un error. Por favor intenta de nuevo.",
      learnMore: "Saber más",
      soon: "Próximamente",
      emergency: "Emergencias 24/7",
      contactAdvisor: "Consultar con un Asesor",
      requestProposal: "Solicitar Presupuesto Bonificado",
    },
    navbar: {
      vision: "Línea Vision",
      totem: "Tótem",
      services: "Servicios",
      pricing: "Precios",
      blog: "Blog",
      clients: "Clientes",
      club: "Club Shomer",
    },
    hero: {
        product: "Producto Estrella",
        title1: "La evolución",
        title2: "del portero eléctrico.",
        desc: "Un sistema moderno que reemplaza el portero tradicional. Comunicación inteligente, acceso sin llaves y control total desde tu celular. Sin apps. Sin descargas. Sin fricción.",
        bullet1Title: "Sin Apps. Sin Descargas.",
        bullet1Desc: "El visitante escanea el QR y accede desde el navegador. Sin instalaciones, sin cuentas. Funciona en cualquier celular.",
        bullet2Title: "Token JWT de un solo uso",
        bullet2Desc: "Cada acceso genera un token único, encriptado, válido por 5 minutos. Imposible de copiar o reutilizar.",
        "3dView": "3D INTERACTIVO",
        photo: "FOTO",
        activeMonitoring: "CENTRAL DE MONITOREO 24/7 ACTIVA",
        heroTitle1: "La seguridad",
        heroTitle2: "que no descansa.",
        heroDesc: "Control de accesos inteligente, monitoreo en tiempo real por operadores y un ecosistema tecnológico que protege tu edificio sin depender de nadie.",
        heroQuote: "Cotizá tu servicio",
        heroProducts: "Ver productos",
        cctvLive: "CCTV EN VIVO",
        rec: "GRABANDO",
        sector: "SECTOR: INGRESO PRINCIPAL",
        faceDetected: "ROSTRO DETECTADO",
        latency: "LATENCIA",
        cpu: "CPU HUBS",
        links: "ENLACES",
        tickerTitle: "BITÁCORA EN TIEMPO REAL",
        logEnc: "Enlace encriptado establecido con Central Shomer",
        logDiag: "Autodiagnóstico completo - Todos los nodos OK",
        logLprReady: "LPR cochera activa - Escaneo listo",
        logFaceOk: "Acceso Facial: Propietario verificado en puerta 1",
        logRoundsOk: "Control de rondas: Operador verificado en sector A",
        logPingOk: "Chequeo de redundancia: Ping óptimo (12ms)",
        logLprOk: "LPR Entrada: Patente detectada y autorizada",
        logCctvOk: "Cámara HD perimetral: Sincronización WebRTC activa",
        logModeOk: "Modo inteligente activo: Detección perimetral encendida"
    },
    stats: {
      over: "MÁS DE",
      monitored: "EDIFICIOS MONITOREADOS",
      police: "ASISTENCIA POLICIAL",
      avgTime: "MINUTOS DE TIEMPO PROMEDIO",
      satisfaction: "SATISFACCIÓN DEL RESIDENTE",
      yearsExp: "Años de experiencia",
      usersProt: "Usuarios protegidos",
      activeMon: "Monitoreo activo",
      hiddenCosts: "Costos ocultos",
    },
    problem: {
      tag: "El problema de hoy",
      title1: "¿Tu edificio sigue",
      title2: "dependiendo de esto?",
      card1Title: "Porteros viejos",
      card1Desc: "Sistemas obsoletos, fallas constantes, mantenimientos que siempre salen más caros de lo esperado. Sin registro, sin control real.",
      card2Title: "Costos ocultos",
      card2Desc: "Mantenimientos recurrentes, reposición de hardware, sueldos de encargado nocturno. El costo real es el doble de lo que parece.",
      card3Title: "Inseguridad real",
      card3Desc: "QR compartidos por WhatsApp, llaves duplicadas, accesos que nadie controla. Cualquiera puede entrar si sabe cómo.",
      footerText: "Dejá atrás los sistemas tradicionales, inseguros y costosos de mantener. Hay una forma mejor de proteger tu edificio.",
    },
    vision: {
      tag: "Línea Vision",
      title: "Tecnología que redefine el acceso",
      desc: "Nuestro hardware inteligente reemplaza el portero eléctrico tradicional con un nodo interactivo de seguridad de alta durabilidad.",
      faceIdTitle: "Reconocimiento Facial Face ID",
      faceIdDesc: "Validación biométrica en 200ms. Imposible de duplicar o transferir.",
      rfidTitle: "Lectores RFID Seguros",
      rfidDesc: "Tarjetas de proximidad encriptadas para contingencias y servicios de soporte.",
      qrTitle: "Invitaciones por QR Dinámico",
      qrDesc: "Generación de accesos temporales para visitas que expiran automáticamente.",
      intercomTitle: "Intercomunicador de Audio y Video",
      intercomDesc: "Videollamada directa de alta definición desde el frente hacia el smartphone del residente.",
      aiTitle: "Cámara Inteligente con IA",
      aiDesc: "Procesamiento en el Edge para detectar rostros y comportamientos sospechosos al instante.",
    },
    totem: {
      tag: "Tótem Inteligente",
      title: "Monitoreo Remoto Activo 24/7",
      desc: "El vigilador virtual está en tu entrada, pero en una central blindada de alta seguridad, libre de coacción.",
      bullet1: "Pantalla interactiva con operador en vivo las 24 horas del día.",
      bullet2: "Audio bidireccional y bocina de alta potencia para disuasión activa.",
      bullet3: "Respaldo energético por UPS que mantiene el tótem encendido por 6 horas ante cortes de luz.",
      bullet4: "Cámaras perimetrales con IA que alertan al operador antes de que toquen la puerta.",
    },
    segments: {
      tag: "Segmentos de Aplicación",
      title: "Soluciones a medida para cada necesidad",
      consorcios: "Edificios y Consorcios",
      consorciosDesc: "Ecosistema robusto de control de accesos para erradicar las llaves físicas en edificios residenciales.",
      empresas: "Oficinas y Empresas",
      empresasDesc: "Control de presentismo, control de visitas y protección de áreas restringidas corporativas.",
      barrios: "Countries y Barrios Cerrados",
      barriosDesc: "Monitoreo perimetral inteligente, control de barreras vehiculares y LPR de alta velocidad.",
      hoteles: "Hoteles y Airbnb",
      hotelesDesc: "Gestión de llaves digitales sin recepción, check-in autónomo y trazabilidad de accesos temporarios.",
    },
    inframap: {
      tag: "Mapa de Infraestructura",
      title: "Monitoreo que no descansa",
      desc: "Nuestra red de monitoreo conecta cada objetivo con centrales redundantes de alta tecnología mediante túneles VPN cifrados.",
      nodes: "Nodos de Conexión",
      nodesDesc: "Nodos distribuidos para asegurar baja latencia y alta disponibilidad de flujo de datos.",
      ops: "Operadores en Línea",
      opsDesc: "Monitoristas especializados en seguridad disuasiva activa operando en simultáneo.",
      redundancy: "Redundancia de Canales",
      redundancyDesc: "Enlaces de fibra óptica simétrica, respaldo 4G LTE y alimentación ininterrumpida.",
    },
    sandbox: {
      tag: "Simulador de Monitoreo",
      title: "Experimentá la velocidad de respuesta",
      desc: "Interactuá con el panel interactivo y simulá alertas en tiempo real. Observá cómo nuestro ecosistema de IA y operadores disuaden amenazas al instante.",
      liveFeed: "CCTV EN VIVO — ENTRADA PRINCIPAL",
      noAlarms: "CCTV en línea. Esperando eventos...",
      simulateAlert: "SIMULAR ALERTA DE SEGURIDAD",
      simulating: "Simulando evento...",
      resolved: "EVENTO RESUELTO",
      alertTypes: {
        lpr: "Lectura de Patente Sospechosa (LPR)",
        line: "Intruso Perimetral (Cruce de Línea IA)",
        panic: "Ingreso con Huella de Pánico",
        open: "Alerta de Puerta Abierta Prolongada",
      },
      log: {
        lpr: "Detección de matrícula negra: LPR identifica vehículo denunciado merodeando.",
        line: "Cruce de línea detectado en reja perimetral izquierda. Humano detectado.",
        panic: "Usuario ingresó código alternativo. Alerta de coacción silenciosa.",
        open: "Entrada principal abierta por más de 120 segundos sin cierre automático.",
        monitoring: "Monitorista tomando control de audio bidireccional y cámaras...",
        resolvedLog: "Evento catalogado y cerrado. Fuerzas de seguridad notificadas.",
      },
    },
    pricing: {
      tag: "Planes de Servicio",
      title: "Costos claros y previsibles",
      desc: "Abonos mensuales fijos pensados para optimizar el presupuesto del consorcio sin sorpresas.",
      monthly: "Abono mensual",
      ars: "ARS",
      usd: "USD",
      perMonth: "/mes",
      plans: {
        basic: {
          name: "Línea Vision",
          desc: "Acceso biométrico autónomo ideal para edificios pequeños.",
        },
        standard: {
          name: "Ecosistema Tótem",
          desc: "Vigilancia virtual interactiva y control de accesos residencial.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "Máxima seguridad para grandes predios y cocheras corporativas.",
        },
      },
      features: {
        support: "Soporte técnico y mantenimiento preventivo 24/7",
        app: "Panel administrativo cloud sin costo",
        jwt: "Invitaciones dinámicas por QR (sin descargas)",
        monitoring: "Monitoreo disuasivo desde central activa",
        shabat: "Configuración y Módulo Sistema Shabat",
        patents: "Lectura de patentes vehicular (LPR) ilimitada",
        ai: "Analíticas de IA para detección perimetral activa",
        ups: "Respaldo por UPS de alta autonomía (6 horas)",
        unlimited: "Altas y bajas de usuarios ilimitadas",
      },
    },
    cpq: {
      tag: "Configurador CPQ",
      title: "Diseñá tu Ecosistema de Seguridad",
      desc: "Seleccioná tu entorno y personalizá los dispositivos y funcionalidades de IA. Obtené un abono mensual preliminar transparente al instante.",
      axonometric: "Vista Axonométrica",
      aiActive: "IA ACTIVA",
      environments: {
        edificio: "Edificio Residencial",
        empresa: "Oficina / Empresa",
        barrio: "Country / Barrio Cerrado",
        hotel: "Hotel / Airbnb",
      },
      hardware: {
        title: "Dispositivos de Hardware (Comodato)",
        totemName: "Tótem Inteligente Shomer",
        totemDesc: "Audio bidireccional y pantalla con operador en vivo 24/7.",
        facialName: "Lector Facial Face ID con IA",
        facialDesc: "Acceso biométrico rápido sin llaves físicas (200ms).",
        camarasName: "Cámaras de Seguridad HD (x4)",
        camarasDesc: "Lentes de alta definición con visión nocturna y respaldo.",
        barreraName: "Controlador de Portón / Barrera",
        barreraDesc: "Apertura electrónica remota y peer-to-peer autónoma.",
      },
      software: {
        title: "Módulos de Software e Inteligencia Artificial",
        lineaName: "Cruce de Línea Inteligente (IA)",
        lineaDesc: "Detección de intrusos perimetral y alerta instantánea.",
        patentesName: "Reconocimiento de Patentes (LPR)",
        patentesDesc: "Apertura autónoma por lectura de matrículas en el Edge.",
        horariosName: "Control Horario y Fichaje (RRHH)",
        horariosDesc: "Reportes en la nube e historial de accesos por persona.",
        shabatName: "Módulo Sistema Shabat",
        shabatDesc: "Protocolo adaptativo respetuoso para la Colectividad Judía.",
      },
      summary: {
        title: "Resumen de Configuración",
        envLabel: "Entorno seleccionado",
        hwLabel: "Hardware en comodato",
        swLabel: "Módulos software activos",
        items: "ítems",
        monthlyTotal: "Abono Mensual Estimado",
        arsSuffix: "ARS /mes",
        usdSuffix: "USD aprox /mes",
        disclaimer: "*Los valores expresados son preliminares, no incluyen impuestos y están sujetos a inspección técnica sobre la infraestructura de cables existente.",
        quoteBtn: "Solicitar Cotización de este Diseño",
      },
    },
    podcast: {
      tag: "Podcast Shomer",
      title: "Seguridad Explicada",
      desc: "Escuchá nuestros episodios explicativos acerca del funcionamiento de la portería virtual y los mitos de la biometría.",
      play: "Reproducir",
      pause: "Pausar",
      listening: "Escuchando",
      downloadTranscript: "Descargar Transcripción Completa (PDF)",
      episodeTitle: "Episodio #1 — La evolución del control de acceso en Buenos Aires",
      episodeDesc: "Analizamos cómo la biometría facial y el IoT resuelven el problema de la copia de llaves magnéticas en edificios residenciales.",
    },
    includes: {
      tag: "Qué Incluye Shomer",
      title: "Un servicio llave en mano sin costos ocultos",
      items: [
        {
          title: "Hardware en comodato sin inversión inicial",
          desc: "Instalamos los lectores biométricos y la infraestructura de cámaras sin costo para el consorcio bajo un esquema de abono mensual.",
        },
        {
          title: "Configuración y alta de residentes",
          desc: "Nos encargamos de recopilar el registro inicial y las bases de datos de accesos. Las altas y bajas son procesadas de forma interna en minutos.",
        },
        {
          title: "Mantenimiento proactivo en el sitio",
          desc: "Si un dispositivo reporta fallas en sus sensores o batería, enviamos a nuestros técnicos para su reemplazo de inmediato.",
        },
      ],
    },
    why: {
      tag: "Por Qué Elegir Shomer",
      title: "La alternativa moderna y eficiente",
      items: [
        {
          title: "Ahorro presupuestario de hasta el 65%",
          desc: "Al sustituir o complementar la vigilancia presencial por tótems virtuales, el costo mensual de seguridad se reduce drásticamente.",
        },
        {
          title: "Control absoluto y trazabilidad",
          desc: "La administración y los propietarios disponen de reportes precisos en la nube para saber exactamente quién ingresó al edificio.",
        },
        {
          title: "Inviolabilidad técnica",
          desc: "Los operadores disuasivos en central blindada no pueden ser agredidos por asaltantes, garantizando el aviso inmediato a la policía.",
        },
      ],
    },
    testimonials: {
      tag: "Clientes Satisfechos",
      title: "Lo que dicen los administradores",
      list: [
        {
          name: "Patricia Gómez",
          role: "Administración Gómez & Asociados",
          content: "Implementar Shomer Vision Pro en un consorcio de Palermo nos permitió reducir las expensas un 40% en tres meses. Los vecinos se adaptaron al instante al acceso facial.",
        },
        {
          name: "Roberto F.",
          role: "Presidente de Consejo, Edificio Av. Santa Fe",
          content: "Teníamos problemas constantes con el llavero magnético duplicado en cerrajerías del barrio. El reconocimiento facial eliminó las intrusiones de raíz. Excelente servicio.",
        },
        {
          name: "Marta Rodríguez",
          role: "Administradora de Consorcios en Belgrano",
          content: "Destaco el Módulo de Sistema Shabat. En edificios con gran población ortodoxa era clave contar con un sistema que respete el Shabat sin descuidar el acceso del resto.",
        },
      ],
    },
    faq: {
      tag: "Preguntas Frecuentes",
      title: "Todo lo que pregunta el administrador",
      list: [
        {
          q: "¿Qué pasa si falla el sistema o se corta internet?",
          a: "El sistema de acceso biométrico cuenta con batería de respaldo que mantiene la operación durante 6 horas ante un corte de luz o internet. Si el edificio requiere mayor autonomía, nuestros técnicos realizan visitas para reemplazar o ampliar las baterías según el caso. La central de monitoreo tiene protocolos de contingencia activos las 24 horas, los 365 días del año.",
        },
        {
          q: "¿Quién gestiona las altas y bajas de residentes?",
          a: "Shomer lo gestiona por completo. El administrador notifica el cambio — mudanza, nuevo residente, empleado nuevo — y nosotros actualizamos el sistema. Sin trabajo manual para el consorcio, sin sistemas que aprender a operar.",
        },
        {
          q: "¿Cuánto tarda la instalación?",
          a: "La instalación lleva entre 2 y 4 días hábiles en la mayoría de los casos. El tiempo exacto depende de la magnitud del objetivo y la complejidad que suponga según la estructura del edificio. Incluye configuración completa, pruebas de funcionamiento y capacitación al administrador. Sin costo adicional.",
        },
        {
          q: "¿El visitante necesita descargar una app?",
          a: "No. El visitante escanea el QR del equipo y accede directamente desde el navegador de su celular. Sin instalaciones, sin cuentas, sin fricción. Compatible con cualquier smartphone iOS o Android.",
        },
        {
          q: "¿Qué pasa si necesito abrir la puerta en una emergencia un feriado o fin de semana?",
          a: "La central de monitoreo opera 24/7 los 365 días del año. Las aperturas de emergencia — técnico de ascensor, reparación de bomba, bomberos — se gestionan remotamente con autorización del administrador o consejo de propietarios. Todo queda registrado.",
        },
        {
          q: "¿Los datos de los residentes son seguros?",
          a: "Toda la comunicación corre dentro del ecosistema Shomer, cifrada end-to-end. No se utilizan redes externas ni se expone ningún número personal. Los datos biométricos (Face ID) se procesan y almacenan bajo protocolos de seguridad estrictos en la base operativa Shomer.",
        },
      ],
    },
    contact: {
      tag: "Cotizar Ahora",
      title: "Hablemos de tu edificio",
      desc: "Completá tus datos y un especialista técnico de Shomer se pondrá en contacto para evaluar tu infraestructura física sin compromiso.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono / Celular",
      propType: "Tipo de Propiedad",
      message: "Mensaje / Consulta",
      send: "Enviar Consulta",
      placeholderName: "Ej: Alejandro Rossi",
      placeholderEmail: "Ej: alejandro@consorcio.com",
      placeholderPhone: "Ej: 11 2345 6789",
      placeholderMessage: "Detallá la cantidad de unidades funcionales u oficinas...",
      types: {
        edificio: "Edificio Residencial",
        empresa: "Oficina / Empresa",
        barrio: "Barrio Cerrado",
        hotel: "Hotel / Airbnb",
      },
      successMsg: "¡Recibimos tu solicitud! Nos contactaremos a la brevedad.",
      submitting: "Enviando...",
    },
    footer: {
      desc: "La evolución de la seguridad residencial y corporativa. Ecosistemas integrados en la nube con analíticas de inteligencia artificial y monitoreo interactivo.",
      navigation: "Navegación",
      legal: "Legal",
      rights: "Todos los derechos reservados.",
      address: "Buenos Aires, Argentina",
      privacy: "Políticas de Privacidad",
    },
    club: {
      tag: "Activo",
      title: "Club Shomer",
      desc: "Descuentos exclusivos, beneficios y bonificaciones para clientes y socios. Accedé antes que nadie a las novedades de Shomer Security.",
      btn: "Conocer Club Shomer →",
    },
    servicesPage: {
      backToHome: "← Volver al Inicio",
      residentialTitle: "Edificios y Consorcios",
      corporateTitle: "Oficinas y Empresas",
      neighborhoodTitle: "Barrios Cerrados y Countries",
      hotelTitle: "Hoteles y Alojamientos",
      residentialDesc: "Reemplazamos las debilidades del esquema de vigilancia física tradicional con un ecosistema híbrido que combina tecnología de vanguardia y operadores alertas las 24 horas del día.",
      corporateDesc: "Optimización de control de accesos, fichaje de personal por biometría facial en la nube y resguardo de áreas de servidores restrictivas.",
      neighborhoodDesc: "Monitoreo perimetral integral y lectura rápida de matrículas en porterías de barrios cerrados con automatización de barreras.",
      hotelDesc: "Check-in autónomo y control de accesos mediante llaves digitales dinámicas de alta trazabilidad, ideal para alquileres temporarios y hoteles.",
      militaryGrade: "Tecnología de Grado Militar para tu Edificio",
      shabatTitle: "Sistema Shabat Integrado",
      shabatDesc: "Pensando en las costumbres y necesidades religiosas de la Colectividad Judía, desarrollamos una solución tecnológica que permite la operación y acceso de forma respetuosa durante el Shabat. El sistema biométrico y los automatismos de apertura se adaptan bajo protocolos específicos para evitar la transgresión de las normas del Shabat, manteniendo el edificio totalmente protegido.",
      promoTitle: "Instalación 100% Bonificada",
      promoDesc: "Durante este mes, los equipos y la instalación de infraestructura física para tu consorcio están 100% bonificados. Shomer Security provee e instala los lectores, cámaras e intercomunicadores en comodato sin costo inicial.",
      requirementsTitle: "Requisitos Técnicos",
      requirementsDesc: "Conexión a internet con IP pública fija (100 Mbps de subida recomendados) y alimentación 220V. Los controles de acceso incluyen un sistema de UPS con 6 horas de autonomía ante cortes eléctricos.",
      supportTitle: "Soporte Técnico",
      supportDesc: "Monitoreo activo y mantenimiento proactivo de la salud de los dispositivos. Detectamos anomalías y enviamos técnicos sin necesidad de reportes.",
      customerTitle: "Servicio al Cliente",
      customerDesc: "Central de monitoreo activa las 24 horas, los 365 días del año. Respuestas coordinadas inmediatas con las fuerzas de seguridad pública.",
      consultAdvisor: "Consultar con un Asesor",
      reqQuote: "Solicitar Presupuesto Bonificado",
      endInsecurity: "El Fin de la Llave Física y de la Inseguridad",
      consorcioSecurityDesc: "Los consorcios tradicionales sufren constantes brechas de seguridad por copias de llaves no autorizadas, porteros distraídos y portones de acceso que quedan abiertos. Shomer redefine la seguridad en consorcios con una propuesta robusta que pone el control lógico en la nube antes de que la puerta se abra de forma física.",
      consorcioEndDesc: "Nuestro hardware está diseñado para resistir intentos de sabotaje mientras que el software brinda trazabilidad completa a los administradores e inquilinos, ofreciendo un registro detallado de cada ingreso en tiempo real.",
      features: {
        biometric: "Reconocimiento Facial Inteligente",
        biometricDesc: "Acceso con Face ID potenciado con inteligencia artificial. Tiempo de respuesta de ultra-alta velocidad (200ms) y alta resistencia anti-robo.",
        accessControl: "Control de Acceso Total",
        accessControlDesc: "Autenticación por huella digital, tarjeta RFID personalizada y sensores avanzados contra intrusiones o alerta de 'Puerta Abierta'.",
        panicFinger: "Huella de Pánico",
        panicFingerDesc: "Permite registrar un dedo alternativo para enviar en secreto una alarma silenciosa e inmediata a nuestra central en caso de coacción.",
        monitoring: "Televigilancia e Integración de Tótem",
        monitoringDesc: "Tótem interactivo con audio bidireccional en tiempo real, sirena de alta potencia y monitoristas altamente capacitados que actúan al instante.",
      },
    },
  },
  en: {

    common: {
      cta: "Get Quote Now",
      loading: "Loading...",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
      learnMore: "Learn More",
      soon: "Coming Soon",
      emergency: "24/7 Emergencies",
      contactAdvisor: "Consult with an Advisor",
      requestProposal: "Request Subsidized Estimate",
    },
    navbar: {
      vision: "Vision Line",
      totem: "Totem",
      services: "Services",
      pricing: "Pricing",
      blog: "Blog",
      clients: "Clients",
      club: "Shomer Club",
    },
        hero: {
        product: "Flagship Product",
        title1: "The evolution",
        title2: "of the intercom.",
        desc: "A modern system that replaces the traditional intercom. Smart communication, keyless access and full control from your mobile. No apps. No downloads. No friction.",
        bullet1Title: "No Apps. No Downloads.",
        bullet1Desc: "Visitors scan the QR code and access directly from the mobile browser. No installations, no accounts. Works on any phone.",
        bullet2Title: "One-time JWT Token",
        bullet2Desc: "Each access generates a unique, encrypted token valid for 5 minutes. Impossible to copy or reuse.",
        "3dView": "INTERACTIVE 3D",
        photo: "PHOTO",
        activeMonitoring: "24/7 ACTIVE MONITORING CENTER",
        heroTitle1: "Security that",
        heroTitle2: "never rests.",
        heroDesc: "Smart access control, real-time operator monitoring, and a technological ecosystem that protects your building independently.",
        heroQuote: "Get your quote",
        heroProducts: "View products",
        cctvLive: "LIVE CCTV",
        rec: "REC",
        sector: "SECTOR: MAIN ENTRANCE",
        faceDetected: "FACE DETECTED",
        latency: "LATENCY",
        cpu: "CPU HUBS",
        links: "LINKS",
        tickerTitle: "REAL-TIME LOG",
        logEnc: "Encrypted link established with Shomer Central",
        logDiag: "Full self-diagnosis - All nodes OK",
        logLprReady: "Garage LPR active - Scan ready",
        logFaceOk: "Facial Access: Owner verified at door 1",
        logRoundsOk: "Patrol control: Operator verified in sector A",
        logPingOk: "Redundancy check: Optimal ping (12ms)",
        logLprOk: "LPR Entrance: License plate detected and authorized",
        logCctvOk: "Perimeter HD Camera: WebRTC synchronization active",
        logModeOk: "Smart mode active: Perimeter detection enabled"
    },
    stats: {
      over: "OVER",
      monitored: "MONITORED BUILDINGS",
      police: "POLICE DISPATCHES",
      avgTime: "MINUTES AVG RESPONSE TIME",
      satisfaction: "RESIDENT SATISFACTION",
      yearsExp: "Years of experience",
      usersProt: "Protected users",
      activeMon: "Active monitoring",
      hiddenCosts: "Hidden costs",
    },
    problem: {
      tag: "Today's problem",
      title1: "Does your building still",
      title2: "depend on this?",
      card1Title: "Old intercoms",
      card1Desc: "Obsolete systems, constant failures, maintenance that is always more expensive than expected. No logs, no real control.",
      card2Title: "Hidden costs",
      card2Desc: "Recurring maintenance, hardware replacement, night guard salaries. The real cost is twice what it seems.",
      card3Title: "Real insecurity",
      card3Desc: "Shared QRs via WhatsApp, duplicate keys, uncontrolled access. Anyone can enter if they know how.",
      footerText: "Leave behind traditional, insecure, and costly systems to maintain. There is a better way to protect your building.",
    },
    vision: {
      tag: "Vision Line",
      title: "Technology Redefining Access",
      desc: "Our smart hardware replaces the traditional intercom with a highly durable interactive security node.",
      faceIdTitle: "Face ID Recognition",
      faceIdDesc: "Biometric validation in 200ms. Impossible to copy or transfer.",
      rfidTitle: "Secure RFID Readers",
      rfidDesc: "Encrypted proximity cards for contingencies and support services.",
      qrTitle: "Dynamic QR Invites",
      qrDesc: "Temporary access generation for visitors that expires automatically.",
      intercomTitle: "Audio & Video Intercom",
      intercomDesc: "Direct high-definition video call from the front gate to the resident's smartphone.",
      aiTitle: "Smart AI Camera",
      aiDesc: "Edge processing to detect faces and suspicious behaviors instantly.",
    },
    totem: {
      tag: "Smart Totem",
      title: "24/7 Active Remote Monitoring",
      desc: "The virtual guard is at your gate, but inside a high-security armored monitoring station, free from coercion.",
      bullet1: "Interactive screen with a live operator 24 hours a day.",
      bullet2: "Two-way audio and high-power horn for active deterrence.",
      bullet3: "UPS power backup that keeps the totem running for 6 hours during blackouts.",
      bullet4: "AI perimeter cameras that alert the operator before anyone touches the gate.",
    },
    segments: {
      tag: "Application Segments",
      title: "Customized solutions for every need",
      consorcios: "Buildings & Condos",
      consorciosDesc: "Robust access control ecosystem to eradicate physical keys in residential buildings.",
      empresas: "Offices & Businesses",
      empresasDesc: "Attendance tracking, visitor management, and restricted corporate area protection.",
      barrios: "Gated Communities",
      barriosDesc: "Smart perimeter monitoring, vehicular gate control, and high-speed LPR.",
      hoteles: "Hotels & Airbnb",
      hotelesDesc: "Receptionless digital key management, autonomous check-in, and temporary access logs.",
    },
    inframap: {
      tag: "Infrastructure Map",
      title: "Monitoring That Never Sleeps",
      desc: "Our monitoring network connects each objective with redundant high-tech stations using encrypted VPN tunnels.",
      nodes: "Connection Nodes",
      nodesDesc: "Distributed nodes to ensure low latency and high data stream availability.",
      ops: "Online Operators",
      opsDesc: "Specialized operators in active deterrent security working simultaneously.",
      redundancy: "Channel Redundancy",
      redundancyDesc: "Symmetric fiber-optic links, 4G LTE backup, and uninterruptible power supply.",
    },
    sandbox: {
      tag: "Monitoring Simulator",
      title: "Experience the Response Speed",
      desc: "Interact with the dashboard and simulate real-time alerts. Observe how our AI ecosystem and operators deter threats instantly.",
      liveFeed: "LIVE CCTV — MAIN GATE",
      noAlarms: "CCTV online. Awaiting events...",
      simulateAlert: "SIMULATE SECURITY ALERT",
      simulating: "Simulating event...",
      resolved: "EVENT RESOLVED",
      alertTypes: {
        lpr: "Suspicious License Plate (LPR)",
        line: "Perimeter Intruder (AI Line Crossing)",
        panic: "Panic Fingerprint Access",
        open: "Door Left Open Prolonged Alert",
      },
      log: {
        lpr: "Blacklisted plate detected: LPR identifies flagged vehicle loitering.",
        line: "Line crossing detected on left perimeter fence. Human detected.",
        panic: "User entered alternative code. Silent coercion alert triggered.",
        open: "Main entrance open for over 120 seconds without automatic closure.",
        monitoring: "Operator taking control of two-way audio and cameras...",
        resolvedLog: "Event logged and closed. Law enforcement notified.",
      },
    },
    pricing: {
      tag: "Service Plans",
      title: "Clear & Predictable Pricing",
      desc: "Fixed monthly fees designed to optimize the building's budget with no surprises.",
      monthly: "Monthly subscription",
      ars: "ARS",
      usd: "USD",
      perMonth: "/month",
      plans: {
        basic: {
          name: "Vision Line",
          desc: "Autonomous biometric access ideal for small buildings.",
        },
        standard: {
          name: "Totem Ecosystem",
          desc: "Interactive virtual guarding and residential access control.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "Maximum security for large properties and corporate garages.",
        },
      },
      features: {
        support: "24/7 technical support and preventive maintenance",
        app: "Cloud administrative dashboard at no cost",
        jwt: "Dynamic QR invitations (no downloads)",
        monitoring: "Deterrent monitoring from active station",
        shabat: "Shabbat System Module Configuration",
        patents: "Unlimited vehicular license plate reading (LPR)",
        ai: "AI analytics for active perimeter detection",
        ups: "High-autonomy UPS backup (6 hours)",
        unlimited: "Unlimited user additions and removals",
      },
    },
    cpq: {
      tag: "CPQ Configurator",
      title: "Design Your Security Ecosystem",
      desc: "Select your environment and customize the AI features and devices. Get an instant, transparent preliminary monthly estimate.",
      axonometric: "Axonometric View",
      aiActive: "AI ACTIVE",
      environments: {
        edificio: "Residential Building",
        empresa: "Office / Corporate",
        barrio: "Gated Community",
        hotel: "Hotel / Airbnb",
      },
      hardware: {
        title: "Hardware Devices (Leased)",
        totemName: "Shomer Smart Totem",
        totemDesc: "Two-way audio and interactive screen with 24/7 live operator.",
        facialName: "Face ID Biometric Reader (AI)",
        facialDesc: "Fast biometric access without physical keys (200ms).",
        camarasName: "HD Security Cameras (x4)",
        camarasDesc: "High-definition lenses with night vision and backup.",
        barreraName: "Gate / Barrier Controller",
        barreraDesc: "Remote electronic opening and autonomous peer-to-peer control.",
      },
      software: {
        title: "Software Modules & Artificial Intelligence",
        lineaName: "Smart Line Crossing (AI)",
        lineaDesc: "Perimeter intruder detection and instant alerts.",
        patentesName: "License Plate Recognition (LPR)",
        patentesDesc: "Autonomous opening by reading license plates on the Edge.",
        horariosName: "Time & Attendance Tracking (HR)",
        horariosDesc: "Cloud reports and access logs per person.",
        shabatName: "Shabbat System Module",
        shabatDesc: "Adaptive respectful protocol for the Jewish Community.",
      },
      summary: {
        title: "Configuration Summary",
        envLabel: "Selected environment",
        hwLabel: "Leased hardware",
        swLabel: "Active software modules",
        items: "items",
        monthlyTotal: "Estimated Monthly Fee",
        arsSuffix: "ARS /month",
        usdSuffix: "USD approx /month",
        disclaimer: "*Expressed values are preliminary, do not include taxes, and are subject to technical inspection of existing cable infrastructure.",
        quoteBtn: "Request Quote for this Design",
      },
    },
    podcast: {
      tag: "Shomer Podcast",
      title: "Security Explained",
      desc: "Listen to our explanatory episodes about how virtual guarding works and the truths about biometrics.",
      play: "Play",
      pause: "Pause",
      listening: "Listening",
      downloadTranscript: "Download Complete Transcript (PDF)",
      episodeTitle: "Episode #1 — The evolution of access control in Buenos Aires",
      episodeDesc: "We analyze how facial biometrics and IoT solve the problem of magnetic key duplication in residential buildings.",
    },
    includes: {
      tag: "What Shomer Includes",
      title: "A turnkey service with no hidden costs",
      items: [
        {
          title: "Hardware leased with no initial investment",
          desc: "We install biometric readers and camera infrastructure at no cost to the building under a monthly subscription model.",
        },
        {
          title: "Setup and resident onboarding",
          desc: "We manage initial registration and access databases. Additions and removals are processed internally in minutes.",
        },
        {
          title: "Proactive on-site maintenance",
          desc: "If a device reports anomalies in its sensors or battery, we dispatch technicians for an immediate replacement.",
        },
      ],
    },
    why: {
      tag: "Why Choose Shomer",
      title: "The modern, efficient alternative",
      items: [
        {
          title: "Up to 65% budget savings",
          desc: "By replacing or supplementing physical guards with virtual totems, monthly security costs drop drastically.",
        },
        {
          title: "Absolute control and logs",
          desc: "Administration and owners have access to precise cloud reports to know exactly who entered the building.",
        },
        {
          title: "Technical invulnerability",
          desc: "Deterrent operators in armored monitoring stations cannot be assaulted, guaranteeing immediate police dispatch.",
        },
      ],
    },
    testimonials: {
      tag: "Satisfied Customers",
      title: "What administrators say",
      list: [
        {
          name: "Patricia Gómez",
          role: "Gómez & Associates Administration",
          content: "Implementing Shomer Vision Pro in a Palermo condo allowed us to reduce building fees by 40% in three months. Neighbors adapted instantly to facial access.",
        },
        {
          name: "Roberto F.",
          role: "Council President, Santa Fe Ave Building",
          content: "We had constant issues with duplicate magnetic keys from neighborhood locksmiths. Facial recognition solved intrusions for good. Excellent service.",
        },
        {
          name: "Marta Rodríguez",
          role: "Condo Administrator in Belgrano",
          content: "I highlight the Shabbat System Module. In buildings with a large orthodox population, having a system that respects Shabbat without neglecting access for the rest was key.",
        },
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Everything the administrator asks",
      list: [
        {
          q: "What happens if the system fails or the internet goes down?",
          a: "The biometric access system has a backup battery that keeps operation running for 6 hours during power or internet outages. If the building requires more autonomy, our technicians perform on-site visits to replace or expand batteries as needed. The monitoring center has active contingency protocols 24/7/365.",
        },
        {
          q: "Who manages resident additions and removals?",
          a: "Shomer manages it entirely. The administrator notifies us of changes — moving, a new resident, a new employee — and we update the system. No manual work for the administration, no systems to learn to operate.",
        },
        {
          q: "How long does installation take?",
          a: "Installation takes between 2 and 4 business days in most cases. The exact time depends on the target's scale and complexity regarding the building structure. It includes complete configuration, operation testing, and admin training. No extra cost.",
        },
        {
          q: "Does the visitor need to download an app?",
          a: "No. The visitor scans the equipment QR code and accesses directly from their phone browser. No installations, no accounts, no friction. Compatible with any iOS or Android smartphone.",
        },
        {
          q: "What if I need to open the door in an emergency on a holiday or weekend?",
          a: "The monitoring center operates 24/7/365. Emergency openings — elevator technician, pump repair, firefighters — are managed remotely with authorization from the administrator or owners' council. Everything is logged.",
        },
        {
          q: "Are residents' data secure?",
          a: "All communication runs within the Shomer ecosystem, encrypted end-to-end. No external networks are used, and no personal numbers are exposed. Biometric data (Face ID) is processed and stored under strict security protocols at the Shomer operational base.",
        },
      ],
    },
    contact: {
      tag: "Get a Quote",
      title: "Let's talk about your building",
      desc: "Fill in your details, and a Shomer technical specialist will reach out to assess your physical infrastructure with no obligation.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone / Cellphone",
      propType: "Property Type",
      message: "Message / Inquiry",
      send: "Send Inquiry",
      placeholderName: "E.g., John Doe",
      placeholderEmail: "E.g., john@condo.com",
      placeholderPhone: "E.g., +1 234 567 890",
      placeholderMessage: "Detail the number of functional units or offices...",
      types: {
        edificio: "Residential Building",
        empresa: "Office / Company",
        barrio: "Gated Community",
        hotel: "Hotel / Airbnb",
      },
      successMsg: "We received your request! We will contact you shortly.",
      submitting: "Sending...",
    },
    footer: {
      desc: "The evolution of residential and corporate security. Integrated cloud ecosystems with artificial intelligence analytics and interactive monitoring.",
      navigation: "Navigation",
      legal: "Legal",
      rights: "All rights reserved.",
      address: "Buenos Aires, Argentina",
      privacy: "Privacy Policy",
    },
    club: {
      tag: "Now Active",
      title: "Shomer Club",
      desc: "Exclusive discounts, benefits, and bonuses for customers and members. Gain early access to Shomer Security novelties.",
      btn: "Discover Shomer Club →",
    },
    servicesPage: {
      backToHome: "← Back to Home",
      residentialTitle: "Buildings & Condos",
      corporateTitle: "Offices & Businesses",
      neighborhoodTitle: "Gated Communities",
      hotelTitle: "Hotels & Lodgings",
      residentialDesc: "We replace the weaknesses of traditional physical guarding with a hybrid ecosystem combining cutting-edge technology and alert operators 24 hours a day.",
      corporateDesc: "Access control optimization, cloud-based facial biometric employee timesheets, and restrictive server room safeguarding.",
      neighborhoodDesc: "Comprehensive perimeter monitoring and rapid license plate reading at gated community checkpoints with automated barriers.",
      hotelDesc: "Autonomous check-in and access control through dynamic, highly traceable digital keys, ideal for temporary rentals and hotels.",
      militaryGrade: "Military-Grade Technology for Your Building",
      shabatTitle: "Integrated Shabbat System",
      shabatDesc: "Keeping in mind the customs and religious needs of the Jewish Community, we developed a technological solution that allows respectful operation and access during Shabbat. The biometric system and opening automation adapt under specific protocols to avoid violating Shabbat rules, keeping the building fully protected.",
      promoTitle: "100% Subsidized Installation",
      promoDesc: "During this month, physical infrastructure equipment and installation for your building are 100% subsidized. Shomer Security provides and installs readers, cameras, and intercoms under a lease with no initial cost.",
      requirementsTitle: "Technical Requirements",
      requirementsDesc: "Internet connection with a static public IP (100 Mbps upload recommended) and 220V power. Access controls include a UPS system with 6 hours of backup during power cuts.",
      supportTitle: "Technical Support",
      supportDesc: "Active monitoring and proactive device health maintenance. We detect anomalies and dispatch technicians without requiring reports.",
      customerTitle: "Customer Service",
      customerDesc: "Monitoring center active 24 hours a day, 365 days a year. Immediate coordinated responses with public safety forces.",
      consultAdvisor: "Consult with an Advisor",
      reqQuote: "Request Subsidized Estimate",
      endInsecurity: "The End of Physical Keys and Insecurity",
      consorcioSecurityDesc: "Traditional buildings suffer constant security breaches due to unauthorized key duplicates, distracted guards, and gates left open. Shomer redefines security with a robust proposal putting logic control in the cloud before doors open physically.",
      consorcioEndDesc: "Our hardware is built to resist tampering, while our software provides full traceability to admins and tenants, offering a detailed real-time log of every entry.",
      features: {
        biometric: "Smart Facial Recognition",
        biometricDesc: "Face ID entry powered by AI. Ultra-high-speed response time (200ms) and high tamper resistance.",
        accessControl: "Full Access Control",
        accessControlDesc: "Authentication via fingerprint, custom RFID card, and advanced sensors against tailgating or 'Door Left Open' alerts.",
        panicFinger: "Panic Fingerprint",
        panicFingerDesc: "Enables registering an alternative finger to secretly trigger a silent and immediate alert to our central in case of coercion.",
        monitoring: "CCTV & Totem Integration",
        monitoringDesc: "Interactive totem with real-time two-way audio, high-power siren, and highly trained monitoring operators acting instantly.",
      },
    },
  },
  he: {

    common: {
      cta: "קבל הצעת מחיר",
      loading: "טוען...",
      success: "ההודעה נשלחה בהצלחה!",
      error: "אירעה שגיאה. אנא נסה שוב.",
      learnMore: "למידע נוסף",
      soon: "בקרוב",
      emergency: "מצבי חירום 24/7",
      contactAdvisor: "התייעץ עם יועץ",
      requestProposal: "בקש הערכה מסובסדת",
    },
    navbar: {
      vision: "סדרת Vision",
      totem: "טוטם",
      services: "שירותים",
      pricing: "מחירון",
      blog: "בלוג",
      clients: "לקוחות",
      club: "מועדון Shomer",
    },
        hero: {
        product: "מוצר הדגל",
        title1: "האבולוציה",
        title2: "של האינטרקום.",
        desc: "מערכת מודרנית המחליפה את האינטרקום המסורתי. תקשורת חכמה, כניסה ללא מפתח ושליטה מלאה מהנייד. ללא אפליקציות. ללא הורדות. ללא חיכוך.",
        bullet1Title: "ללא אפליקציות. ללא הורדות.",
        bullet1Desc: "המבקר סורק את קוד ה-QR ונכנס ישירות מדפדפן הנייד. ללא התקנות, ללא חשבונות. עובד בכל טלפון.",
        bullet2Title: "אסימון JWT חד-פעמי",
        bullet2Desc: "כל כניסה מייצרת אסימון מוצפן ייחודי, בתוקף ל-5 דקות. לא ניתן להעתקה או לשימוש חוזר.",
        "3dView": "תלת מימד אינטראקטיבי",
        photo: "תמונה",
        activeMonitoring: "מוקד ניטור פעיל 24/7",
        heroTitle1: "אבטחה שאינה",
        heroTitle2: "נחה לעולם.",
        heroDesc: "בקרת כניסה חכמה, ניטור מפעילים בזמן אמת ומערכת טכנולוגית המגנה על הבניין שלך באופן עצמאי.",
        heroQuote: "קבל הצעת מחיר",
        heroProducts: "צפה במוצרים",
        cctvLive: "טלוויזיה במעגל סגור בשידור חי",
        rec: "הקלטה פעילה",
        sector: "מגזר: כניסה ראשית",
        faceDetected: "זוהו פנים",
        latency: "שיהוי",
        cpu: "מעבד רכזות",
        links: "חיבורים",
        tickerTitle: "יומן פעילות בזמן אמת",
        logEnc: "חיבור מוצפן נוצר עם מוקד Shomer",
        logDiag: "אבחון עצמי מלא - כל הצמתים תקינים",
        logLprReady: "מערכת LPR חניון פעילה - מוכן לסריקה",
        logFaceOk: "גישה לפי פנים: בעל הדירה אומת בדלת 1",
        logRoundsOk: "בקרת סיור: המפעיל אומת במגזר א'",
        logPingOk: "בדיקת יתירות: פינג אופטימלי (12ms)",
        logLprOk: "כניסת LPR: לוחית רישוי זוהתה ואושרה",
        logCctvOk: "מצלמת HD היקפית: סנכרון WebRTC פעיל",
        logModeOk: "מצב חכם פעיל: זיהוי היקפי מופעל"
    },
    stats: {
      over: "מעל",
      monitored: "בניינים תחת פיקוח",
      police: "קריאות משטרה",
      avgTime: "דקות זמן תגובה ממוצע",
      satisfaction: "שביעות רצון הדיירים",
      yearsExp: "שנות ניסיון",
      usersProt: "משתמשים מוגנים",
      activeMon: "ניטור פעיל",
      hiddenCosts: "עלויות נסתרות",
    },
    problem: {
      tag: "הבעיה של היום",
      title1: "האם הבניין שלך עדיין",
      title2: "תלוי בזה?",
      card1Title: "אינטרקומים ישנים",
      card1Desc: "מערכות מיושנות, תקלות קבועות, תחזוקה שתמיד יקרה מהצפוי. ללא יומנים, ללא שליטה אמיתית.",
      card2Title: "עלויות נסתרות",
      card2Desc: "תחזוקה חוזרת ונשנית, החלפת חומרה, שכר שומר לילה. העלות האמיתית היא כפול ממה שנראה.",
      card3Title: "חוסร ביטחון אמיתי",
      card3Desc: "קודי QR משותפים בווטסאפ, מפתחות משוכפלים, גישה ללא פיקוח. כל אחד יכול להיכנס אם הוא יודע איך.",
      footerText: "השאר מאחור מערכות מסורתיות, לא מאובטחות ויקרות לתחזוקה. יש דרך טובה יותר להגן על הבניין שלך.",
    },
    vision: {
      tag: "סדרת Vision",
      title: "טכנולוגיה המגדירה מחדש את הגישה",
      desc: "החומרה החכמה שלנו מחליפה את האינטרקום המסורתי בנקודת אבטחה אינטראקטיבית עמידה ביותר.",
      faceIdTitle: "זיהוי פנים Face ID",
      faceIdDesc: "אימות ביומטרי ב-200 מילישניות. בלתי ניתן להעתקה או להעברה.",
      rfidTitle: "קוראי RFID מאובטחים",
      rfidDesc: "כרטיסי קרבה מוצפנים למקרי חירום ושירותי תמיכה.",
      qrTitle: "הזמנות QR דינמיות",
      qrDesc: "יצירת גישה זמנית למבקרים הפגה באופן אוטומטי.",
      intercomTitle: "אינטרקום שמע ווידאו",
      intercomDesc: "שיחת וידאו ישירה באיכות גבוהה משער הכניסה לסמארטפון של הדייר.",
      aiTitle: "מצלמת AI חכמה",
      aiDesc: "עיבוד קצה לזיהוי פנים והתנהגויות חשודות באופן מיידי.",
    },
    totem: {
      tag: "טוטם חכם",
      title: "ניטור מרחוק פעיל 24/7",
      desc: "השומר הווירטואלי נמצא בשער שלך, אך בתוך תחנת ניטור משוריינת ומאובטחת, מוגנת מפני סחיטה.",
      bullet1: "מסך אינטראקטיבי עם מפעיל חי 24 שעות ביממה.",
      bullet2: "שמע דו-כיווני וצופר בעוצמה גבוהה להרתעה פעילה.",
      bullet3: "גיבוי כוח UPS השומר על הטוטם פועל למשך 6 שעות במהלך הפסקות חשמל.",
      bullet4: "מצלמות היקפיות מבוססות AI המתריעות למפעיל לפני שמישהו נוגע בשער.",
    },
    segments: {
      tag: "מגזרי יישום",
      title: "פתרונות מותאמים אישית לכל צורך",
      consorcios: "בניינים ובתים משותפים",
      consorciosDesc: "מערכת בקרת כניסה חזקה למיגור המפתחות הפיזיים בבנייני מגורים.",
      empresas: "משרדים וחברות",
      empresasDesc: "מעקב נוכחות, ניהול מבקרים והגנה על אזורים ארגוניים מוגבלים.",
      barrios: "קהילות סגורות",
      barriosDesc: "ניטור היקפי חכם, בקרת שערים לכלי רכב וזיהוי לוחיות רישוי מהיר.",
      hoteles: "מלונות ו-Airbnb",
      hotelesDesc: "ניהול מפתחות דיגיטליים ללא קבלה, צ'ק-אין עצמאי ויומני גישה זמניים.",
    },
    inframap: {
      tag: "מפת תשתית",
      title: "ניטור שלעולם לא ישן",
      desc: "רשת הניטור שלנו מחברת כל יעד עם תחנות גיבוי טכנולוגיות באמצעות מנהרות VPN מוצפנות.",
      nodes: "צומתי חיבור",
      nodesDesc: "צמתים מבוזרים להבטחת שיהוי נמוך וזמינות גבוהה של זרם הנתונים.",
      ops: "מפעילים מקוונים",
      opsDesc: "מפעילים מתמחים באבטחה הרתעתית פעילה הפועלים בו-זמנית.",
      redundancy: "יתירות ערוצים",
      redundancyDesc: "חיבורי סיבים אופטיים סימטריים, גיבוי 4G LTE ואספקת כוח רציפה.",
    },
    sandbox: {
      tag: "סימולטור ניטור",
      title: "חווה את מהירות התגובה",
      desc: "בצע אינטראקציה עם לוח הבקרה וסמלז התראות בזמן אמת. ראה כיצד מערכת ה-AI והמפעילים שלנו מרתיעים איומים באופן מיידי.",
      liveFeed: "טלוויזיה במעגל סגור בשידור חי — שער ראשי",
      noAlarms: "מצלמות מקוונות. ממתין לאירועים...",
      simulateAlert: "סמלז התראת אבטחה",
      simulating: "מסמלז אירוע...",
      resolved: "האירוע נפתר",
      alertTypes: {
        lpr: "לוחית רישוי חשודה (LPR)",
        line: "פולש היקפי (חציית קו AI)",
        panic: "גישה באמצעות טביעת אצבע של פאניקה",
        open: "התרעת דלת פתוחה ממושכת",
      },
      log: {
        lpr: "זוהתה לוחית רישוי ברשימה השחורה: מערכת LPR מזהה רכב חשוד.",
        line: "חציית קו זוהתה בגדר ההיקפית השמאלית. זוהה אדם.",
        panic: "המשתמש הזין קוד חלופי. הופעלה התרעת סחיטה שקטה.",
        open: "הכניסה הראשית פתוחה מעל 120 שניות ללא סגירה אוטומטית.",
        monitoring: "המפעיל לוקח שליטה על השמע הדו-כיווני והמצלמות...",
        resolvedLog: "האירוע נרשם ונסגר. כוחות הביטחון עודכנו.",
      },
    },
    pricing: {
      tag: "תוכניות שירות",
      title: "תמחור ברור וצפוי",
      desc: "דמי מנוי חודשיים קבועים שנועדו למקסם את תקציב הבניין ללא הפתעות.",
      monthly: "מנוי חודשי",
      ars: "ARS",
      usd: "USD",
      perMonth: "/חודש",
      plans: {
        basic: {
          name: "סדרת Vision",
          desc: "גישה ביומטרית אוטונומית אידיאלית לבניינים קטנים.",
        },
        standard: {
          name: "מערכת טוטם",
          desc: "שמירה וירטואלית אינטראקטיבית ובקרת כניסה למגורים.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "אבטחה מרבית לנכסים גדולים וחניונים ארגוניים.",
        },
      },
      features: {
        support: "תמיכה טכנית 24/7 ותחזוקה מונעת",
        app: "לוח בקרה ניהולי בענן ללא עלות",
        jwt: "הזמנות QR דינמיות (ללא הורדות)",
        monitoring: "ניטור הרתעתי מתחנת ניטור פעילה",
        shabat: "הגדרת מודול מערכת שבת",
        patents: "קריאת לוחיות רישוי לרכב (LPR) ללא הגבלה",
        ai: "ניתוח AI לזיהוי היקפי פעיל",
        ups: "גיבוי UPS בעל עמידות גבוהה (6 שעות)",
        unlimited: "הוספה והסרה של משתמשים ללא הגבלה",
      },
    },
    cpq: {
      tag: "מגדיר CPQ",
      title: "עצב את מערכת האבטחה שלך",
      desc: "בחר את הסביבה שלך והתאם אישית את תכונות ה-AI והמכשירים. קבל הערכה חודשית ראשונית שקופה באופן מיידי.",
      axonometric: "מבט אקסונומטרי",
      aiActive: "AI פעיל",
      environments: {
        edificio: "בניין מגורים",
        empresa: "משרד / תאגיד",
        barrio: "קהילה סגורה",
        hotel: "מלון / Airbnb",
      },
      hardware: {
        title: "מכשירי חומרה (בחכירה)",
        totemName: "טוטם חכם Shomer",
        totemDesc: "שמע דו-כיווני ומסך אינטראקטיבי עם מפעיל חי 24/7.",
        facialName: "קורא ביומטרי Face ID (AI)",
        facialDesc: "גישה ביומטרית מהירה ללא מפתחות פיזיים (200 מילישניות).",
        camarasName: "מצלמות אבטחה HD (x4)",
        camarasDesc: "עדשות בציפוי HD עם ראיית לילה וגיבוי.",
        barreraName: "בקר שער / מחסום",
        barreraDesc: "פתיחה אלקטרונית מרחוק ושליטה אוטונומית עמית לעמית.",
      },
      software: {
        title: "מודולי תוכנה ובינה מלאכותית",
        lineaName: "חציית קו חכמה (AI)",
        lineaDesc: "זיהוי פולשים היקפי והתראות מיידיות.",
        patentesName: "זיהוי לוחיות רישוי (LPR)",
        patentesDesc: "פתיחה אוטונומית על ידי קריאת לוחיות רישוי בקצה.",
        horariosName: "מעקב נוכחות וזמן (משאבי אנוש)",
        horariosDesc: "דוחות ענן ויומני גישה לכל אדם.",
        shabatName: "מודול מערכת שבת",
        shabatDesc: "פרוטוקול מותאם ומכבד עבור הקהילה היהודית.",
      },
      summary: {
        title: "סיכום תצורה",
        envLabel: "סביבה נבחרת",
        hwLabel: "חומרה בחכירה",
        swLabel: "מודולי תוכנה פעילים",
        items: "פריטים",
        monthlyTotal: "תשלום חודשי משוער",
        arsSuffix: "ARS /חודש",
        usdSuffix: "USD בקירוב /חודש",
        disclaimer: "*הערכים המוצגים הם ראשוניים בלבד, אינם כוללים מסים וכפופים לבדיקה טכנית של תשתית הכבלים הקיימת.",
        quoteBtn: "בקש הצעת מחיר עבור עיצוב זה",
      },
    },
    podcast: {
      tag: "פודקאסט Shomer",
      title: "אבטחה מוסברת",
      desc: "האזן לפרקי ההסבר שלנו על אופן הפעולה של השמירה הווירטואלית והאמת על ביומטריה.",
      play: "נגן",
      pause: "השהה",
      listening: "מאזין",
      downloadTranscript: "הורד תמלול מלא (PDF)",
      episodeTitle: "פרק #1 — התפתחות בקרת הכניסה בבואנוס איירס",
      episodeDesc: "אנו מנתחים כיצד ביומטריה של הפנים ו-IoT פותרים את בעיית שכפול מפתחות המגנטיים בבנייני מגורים.",
    },
    includes: {
      tag: "מה שומר כולל",
      title: "שירות מפתח ללא עלויות נסתרות",
      items: [
        {
          title: "חומרה בחכירה ללא השקעה ראשונית",
          desc: "אנו מתקינים קוראים ביומטריים ותשתית מצלמות ללא עלות לבניין תחת מודל מנוי חודשי.",
        },
        {
          title: "הגדרה וקליטת דיירים",
          desc: "אנו מנהלים את הרישום הראשוני ומאגרי הגישה. הוספות והסרות מעובדות פנימית תוך דקות.",
        },
        {
          title: "תחזוקה יזומה באתר",
          desc: "אם מכשיר מדווח על בעיות בחיישנים או בסוללה שלו, אנו שולחים טכנאים להחלפה מיידית.",
        },
      ],
    },
    why: {
      tag: "למה לבחור ב-Shomer",
      title: "החלופה המודרנית והיעילה",
      items: [
        {
          title: "חיסכון בתקציב של עד 65%",
          desc: "על ידי החלפה או השלמה של שומרים פיזיים בטוטמים וירטואליים, עלויות האבטחה החודשיות יורדות באופן דרמטי.",
        },
        {
          title: "שליטה מוחלטת ויומנים",
          desc: "להנהלה ולבעלים יש גישה לדוחות ענן מדויקים כדי לדעת בדיוק מי נכנס לבניין.",
        },
        {
          title: "חסינות טכנית",
          desc: "מפעילים מרתיעים בתחנות ניטור משוריינות אינם יכולים להיות מותקפים, מה שמבטיח שיגור משטרתי מיידי.",
        },
      ],
    },
    testimonials: {
      tag: "לקוחות מרוצים",
      title: "מה אומרים מנהלי הבניינים",
      list: [
        {
          name: "פטריסיה גומז",
          role: "ניהול גומז ושותפים",
          content: "הטמעת Shomer Vision Pro בבניין משותף בפאלרמו אפשרה לנו להפחית את דמי הניהול ב-40% תוך שלושה חודשים. השכנים הסתגלו מיד לגישה מבוססת פנים.",
        },
        {
          name: "רוברטו פ.",
          role: "יו\"ר ועד הבית, בניין שדרות סנטה פה",
          content: "היו לנו בעיות קבועות עם שכפול מפתחות מגנטיים ממנעולנים בשכונה. זיהוי פנים פתר את הפריצות לצמיתות. שירות מעולה.",
        },
        {
          name: "מרתה רודריגז",
          role: "מנהלת בניינים בבלגראנו",
          content: "אני רוצה לציין את מודול מערכת השבת. בבניינים עם אוכלוסייה אורתודוקסית גדולה, מערכת המכבדת את השבת מבלי להזניח את הגישה לאחרים הייתה המפתח.",
        },
      ],
    },
    faq: {
      tag: "שאלות נפוצות",
      title: "כל מה שמנהל הבניין שואל",
      list: [
        {
          q: "מה קורה אם המערכת נכשלת או שהאינטרנט קורס?",
          a: "למערכת הגישה הביומטרית יש סוללת גיבוי השומרת על הפעולה למשך 6 שעות במהלך הפסקות חשמל או אינטרנט. אם הבניין דורש יתירות גבוהה יותר, הטכנאים שלנו מבצעים ביקורים באתר להחלפה או הרחבה של הסוללות לפי הצורך. למוקד הניטור יש פרוטוקולי חירום פעילים 24/7/365.",
        },
        {
          q: "מי מנהל הוספת והסרת דיירים?",
          a: "שומר מנהלת את זה לחלוטין. מנהל הבניין מודיע לנו על שינויים — מעבר דירה, דייר חדש, עובד חדש — ואנו מעדכנים את המערכת. ללא עבודה ידנית להנהלה, ללא מערכות ללמוד להפעיל.",
        },
        {
          q: "כמה זמן לוקחת ההתקנה?",
          a: "ההתקנה לוקחת בין 2 ל-4 ימי עסקים ברוב המקרים. הזמן המדויק תלוי בקנה המידה של היעד ובמורכבות מבנה הבניין. היא כוללת הגדרה מלאה, בדיקות תפעול והדרכת מנהל הבניין. ללא עלות נוספת.",
        },
        {
          q: "האם המבקר צריך להוריד אפליקציה?",
          a: "לא. המבקר סורק את קוד ה-QR של המכשיר ונכנס ישירות מדפדפן הטלפון שלו. ללא התקנות, ללא חשבונות, ללא חיכוך. תואם לכל סמארטפון iOS או Android.",
        },
        {
          q: "מה אם אני צריך לפתוח את הדלת במקרה חירום בחג או בסוף השבוע?",
          a: "מוקד הניטור פועל 24/7/365. פתיחות חירום — טכנאי מעליות, תיקון משאבות, כבאים — מנוהלות מרחוק באישור מנהל הבניין או ועד הדיירים. הכל נרשם ביומן.",
        },
        {
          q: "האם נתוני הדיירים מאובטחים?",
          a: "כל התקשורת מתנהלת בתוך המערכת של שומר, מוצפנת מקצה לקצה. לא נעשה שימוש ברשתות חיצוניות, ומספרי טלפון אישיים אינם נחשפים. הנתונים הביומטריים (Face ID) מועבדים ומאוחסנים תחת פרוטוקולי אבטחה מחמירים בבסיס המבצעי של שומר.",
        },
      ],
    },
    contact: {
      tag: "צור קשר",
      title: "בוא נדבר על הבניין שלך",
      desc: "מלא את פרטיך ומומחה טכני של שומר יצור קשר כדי להעריך את התשתית הפיזית שלך ללא כל התחייבות.",
      name: "שם מלא",
      email: "כתובת אימייל",
      phone: "טלפון / נייד",
      propType: "סוג הנכס",
      message: "הודעה / שאילתה",
      send: "שלח פנייה",
      placeholderName: "למשל, ישראל ישראלי",
      placeholderEmail: "למשל, israel@building.com",
      placeholderPhone: "למשל, 050 123 4567",
      placeholderMessage: "פרט את מספר הדירות או המשרדים...",
      types: {
        edificio: "בניין מגורים",
        empresa: "משרד / חברה",
        barrio: "קהילה סגורה",
        hotel: "מלón / Airbnb",
      },
      successMsg: "פנייתך התקבלה! ניצור עמך קשר בהקדם.",
      submitting: "שולח...",
    },
    footer: {
      desc: "האבולוציה של אבטחת מגורים וארגונים. מערכות ענן משולבות עם ניתוח בינה מלאכותית וניטור אינטראקטיבי.",
      navigation: "ניווט",
      legal: "משפטי",
      rights: "כל הזכויות שמורות.",
      address: "בואנוס איירס, ארגנטינה",
      privacy: "מדיניות פרטיות",
    },
    club: {
      tag: "פעיל",
      title: "מועדון Shomer",
      desc: "הנחות בלעדיות, הטבות ובונוסים ללקוחות וחברים. קבל גישה מוקדמת לחידושים של Shomer Security.",
      btn: "גלה את מועדון Shomer ←",
    },
    servicesPage: {
      backToHome: "← חזור לדף הבית",
      residentialTitle: "בניינים ובתים משותפים",
      corporateTitle: "משרדים ועסקים",
      neighborhoodTitle: "קהילות סגורות ושכונות",
      hotelTitle: "מלונות ואירוח",
      residentialDesc: "אנו מחליפים את החולשות של השמירה הפיזית המסורתית במערכת היברידית המשלבת טכנולוגיה מתקדמת ומפעילים ערניים 24 שעות ביממה.",
      corporateDesc: "אופטימיזציה של בקרת כניסה, מעקב נוכחות עובדים ביומטרי מבוסס ענן, ואבטחת חדרי שרתים מוגבלים.",
      neighborhoodDesc: "ניטור היקפי מקיף וקריאת לוחיות רישוי מהירה במחסומי כניסה של קהילות סגורות עם מחסומים אוטומטיים.",
      hotelDesc: "צ'ק-אין עצמאי ובקרת כניסה באמצעות מפתחות דיגיטליים דינמיים בעלי יכולת מעקב גבוהה, אידיאלי להשכרות לטווח קצר ומלונות.",
      militaryGrade: "טכנולוגיה ברמה צבאית לבניין שלך",
      shabatTitle: "מערכת שבת משולבת",
      shabatDesc: "תוך התחשבות במנהגים ובצרכים הדתיים של הקהילה היהודית, פיתחנו פתרון טכנולוגי המאפשר הפעלה וגישה מכבדת במהלך השבת. המערכת הביומטרית ואוטומציית הפתיחה מותאמות תחת פרוטוקולים ספציפיים כדי למנוע חילול שבת, תוך שמירה על הבניין מוגן לחלוטין.",
      promoTitle: "התקנה מסובסדת ב-100%",
      promoDesc: "במהלך חודש זה, ציוד התשתית הפיזית וההתקנה לבניין שלך מסובסדים ב-100%. Shomer Security מספקת ומתקינה קוראים, מצלמות ואינטרקום בחכירה ללא עלות ראשונית.",
      requirementsTitle: "דרישות טכניות",
      requirementsDesc: "חיבור לאינטרנט עם IP ציבורי סטטי (מומלץ 100 Mbps העלאה) וחיבור מתח 220V. בקרות הכניסה כוללות מערכת UPS עם גיבוי של 6 שעות במהלך הפסקות חשמל.",
      supportTitle: "תמיכה טכנית",
      supportDesc: "ניטור פעיל ותחזוקה יזומה של בריאות המכשיר. אנו מזהים אנומליות ושולחים טכנאים ללא צורך בדיווחים.",
      customerTitle: "שירות לקוחות",
      customerDesc: "מוקד ניטור פעיל 24 שעות ביממה, 365 ימים בשנה. תגובות מתואמות מיידיות עם כוחות הביטחון הציבוריים.",
      consultAdvisor: "התייעץ עם יועץ",
      reqQuote: "בקש הערכה מסובסדת",
      endInsecurity: "סוף המפתחות הפיזיים וחוסר הביטחון",
      consorcioSecurityDesc: "בניינים מסורתיים סובלים מפרצות אבטחה קבועות עקב שכפולי מפתחות לא מורשים, שומרים מוסחי דעת ושערים שנותרו פתוחים. שומר מגדירה מחדש את האבטחה עם הצעה חזקה המציבה את בקרת הלוגיקה בענן לפני שהדלתות נפתחות פיזית.",
      consorcioEndDesc: "החומרה שלנו בנויה לעמוד בפני חבלה, בעוד שהתוכנה שלנו מספקת מעקב מלא למנהלים ולדיירים, ומציעה יומן מפורט בזמן אמת של כל כניסה.",
      features: {
        biometric: "זיהוי פנים חכם",
        biometricDesc: "כניסת Face ID מופעלת על ידי AI. זמן תגובה מהיר במיוחד (200 מילישניות) ועמידות גבוהה בפני חבלה.",
        accessControl: "בקרת כניסה מלאה",
        accessControlDesc: "אימות באמצעות טביעת אצבע, כרטיס RFID מותאם אישית וחיישנים מתקדמים נגד היצמדות או התראות 'דלת נשארה פתוחה'.",
        panicFinger: "טביעת אצבע של פאניקה",
        panicFingerDesc: "מאפשר רישום אצבע חלופית כדי להפעיל בחשאי התראה שקטה ומיידית למוקד שלנו במקרה של סחיטה.",
        monitoring: "שילוב מצלמות וטוטם",
        monitoringDesc: "טוטם אינטראקטיבי עם שמע דו-כיווני בזמן אמת, צופר בעוצמה גבוהה ומפעילי ניטור מיומנים הפועלים באופן מיידי.",
      },
    },
  },
  de: {

    common: {
      cta: "Jetzt Angebot anfordern",
      loading: "Laden...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      learnMore: "Mehr erfahren",
      soon: "Demnächst",
      emergency: "Notfälle 24/7",
      contactAdvisor: "Berater kontaktieren",
      requestProposal: "Gefördertes Angebot anfordern",
    },
    navbar: {
      vision: "Vision-Linie",
      totem: "Totem",
      services: "Dienstleistungen",
      pricing: "Preise",
      blog: "Blog",
      clients: "Kunden",
      club: "Club Shomer",
    },
        hero: {
        product: "Flaggschiff-Produkt",
        title1: "Die Evolution",
        title2: "der Gegensprechanlage.",
        desc: "Ein modernes System, das die traditionelle Gegensprechanlage ersetzt. Intelligente Kommunikation, schlüsselloser Zugang und volle Kontrolle über Ihr Smartphone. Keine Apps. Keine Downloads. Keine Reibung.",
        bullet1Title: "Keine Apps. Keine Downloads.",
        bullet1Desc: "Besucher scannen den QR-Code und greifen direkt über den mobilen Browser zu. Keine Installationen, keine Konten. Funktioniert auf jedem Smartphone.",
        bullet2Title: "Einmaliger JWT-Token",
        bullet2Desc: "Jeder Zugang generiert einen einzigartigen, verschlüsselten Token, der 5 Minuten lang gültig ist. Kopieren oder Wiederverwenden unmöglich.",
        "3dView": "INTERAKTIVES 3D",
        photo: "FOTO",
        activeMonitoring: "AKTIVE ÜBERWACHUNGSZENTRALE 24/7",
        heroTitle1: "Sicherheit, die",
        heroTitle2: "nie schläft.",
        heroDesc: "Intelligente Zutrittskontrolle, Echtzeit-Überwachung durch Operatoren und ein technologisches Ökosystem, das Ihr Gebäude unabhängig schützt.",
        heroQuote: "Angebot anfordern",
        heroProducts: "Produkte ansehen",
        cctvLive: "LIVE CCTV",
        rec: "REC",
        sector: "SEKTOR: HAUPTEINGANG",
        faceDetected: "GESICHT ERKANNT",
        latency: "LATENZ",
        cpu: "CPU HUBS",
        links: "LINKS",
        tickerTitle: "ECHTZEIT-PROTOKOLL",
        logEnc: "Verschlüsselte Verbindung mit Shomer-Zentrale hergestellt",
        logDiag: "Vollständige Selbstdiagnose - Alle Knoten OK",
        logLprReady: "Garage LPR aktiv - Scan bereit",
        logFaceOk: "Gesichtszugang: Eigentümer an Tür 1 verifiziert",
        logRoundsOk: "Rundgangkontrolle: Operator in Sektor A verifiziert",
        logPingOk: "Redundanzprüfung: Optimaler Ping (12ms)",
        logLprOk: "LPR Eingang: Kennzeichen erkannt und autorisiert",
        logCctvOk: "Perimeter-HD-Kamera: WebRTC-Synchronisation aktiv",
        logModeOk: "Smart-Modus aktiv: Perimeter-Erkennung eingeschaltet"
    },
    stats: {
      over: "ÜBER",
      monitored: "ÜBERWACHTE GEBÄUDE",
      police: "POLIZEIEINSÄTZE",
      avgTime: "MINUTEN DURCHSCHNITTLICHE REAKTIONSZEIT",
      satisfaction: "ZUFRIEDENHEIT DER BEWOHNER",
      yearsExp: "Jahre Erfahrung",
      usersProt: "Geschützte Benutzer",
      activeMon: "Aktive Überwachung",
      hiddenCosts: "Versteckte Kosten",
    },
    problem: {
      tag: "Das Problem von heute",
      title1: "Hängt Ihr Gebäude immer noch",
      title2: "davon ab?",
      card1Title: "Alte Gegensprechanlagen",
      card1Desc: "Veraltete Systeme, ständige Ausfälle, Wartungsarbeiten, die immer teurer sind als erwartet. Keine Protokolle, keine echte Kontrolle.",
      card2Title: "Versteckte Kosten",
      card2Desc: "Regelmäßige Wartung, Hardware-Austausch, Nachtwächter-Gehälter. Die tatsächlichen Kosten sind doppelt so hoch wie es scheint.",
      card3Title: "Echte Unsicherheit",
      card3Desc: "QR-Codes über WhatsApp geteilt, kopierte Schlüssel, unkontrollierter Zugang. Jeder kann eintreten, wenn er weiß wie.",
      footerText: "Lassen Sie traditionelle, unsichere und teure Systeme hinter sich. Es gibt einen besseren Weg, Ihr Gebäude zu schützen.",
    },
    vision: {
      tag: "Vision-Linie",
      title: "Technologie, die den Zugang neu definiert",
      desc: "Unsere intelligente Hardware ersetzt die traditionelle Gegensprechanlage durch einen hochgradig langlebigen interaktiven Sicherheitsknoten.",
      faceIdTitle: "Face ID Gesichtserkennung",
      faceIdDesc: "Biometrische Validierung in 200 ms. Unmöglich zu kopieren oder zu übertragen.",
      rfidTitle: "Sichere RFID-Leser",
      rfidDesc: "Verschlüsselte Proximity-Karten für Eventualitäten und Support-Services.",
      qrTitle: "Dynamische QR-Einladungen",
      qrDesc: "Generierung von temporärem Zugang für Besucher, der automatisch abläuft.",
      intercomTitle: "Audio- und Video-Gegensprechanlage",
      intercomDesc: "Direkter hochauflösender Videoanruf von der Tür zum Smartphone des Bewohners.",
      aiTitle: "Intelligente KI-Kamera",
      aiDesc: "Edge-Verarbeitung zur sofortigen Erkennung von Gesichtern und verdächtigem Verhalten.",
    },
    totem: {
      tag: "Intelligentes Totem",
      title: "Aktive Fernüberwachung rund um die Uhr",
      desc: "Der virtuelle Wächter steht an Ihrem Eingang, befindet sich jedoch in einer hochsicheren, gepanzerten Überwachungsstation, frei von Nötigung.",
      bullet1: "Interaktiver Bildschirm mit Live-Operator rund um die Uhr.",
      bullet2: "Zwei-Wege-Audio und Hochleistungshorn zur aktiven Abschreckung.",
      bullet3: "Unterbrechungsfreie Stromversorgung (USV) für 6 Stunden Betrieb bei Stromausfall.",
      bullet4: "KI-Perimeterkameras, die den Operator alarmieren, bevor jemand das Tor berührt.",
    },
    segments: {
      tag: "Anwendungsbereiche",
      title: "Maßgeschneiderte Lösungen für jeden Bedarf",
      consorcios: "Wohngebäude & Eigentümergemeinschaften",
      consorciosDesc: "Robustes Zutrittskontrollsystem zur Abschaffung physischer Schlüssel in Wohngebäuden.",
      empresas: "Büros & Unternehmen",
      empresasDesc: "Zeiterfassung, Besucherverwaltung und Schutz sensibler Unternehmensbereiche.",
      barrios: "Gated Communities & Wohnparks",
      barriosDesc: "Intelligente Perimeterüberwachung, Schrankensteuerung und Hochgeschwindigkeits-LPR.",
      hoteles: "Hotels & Airbnb",
      hotelesDesc: "Rezeptionsloses digitales Schlüsselmanagement, autonomer Check-in und Zutrittsprotokollierung.",
    },
    inframap: {
      tag: "Infrastruktur-Karte",
      title: "Überwachung, die nie schläft",
      desc: "Unser Überwachungsnetzwerk verbindet jedes Objekt über verschlüsselte VPN-Tunnel mit redundanten Hightech-Stationen.",
      nodes: "Verbindungsknoten",
      nodesDesc: "Verteilte Knotenpunkte für geringe Latenz und hohe Datenstromverfügbarkeit.",
      ops: "Online-Operatoren",
      opsDesc: "Spezialisierte Mitarbeiter für aktive Abschreckungssicherheit, die simultan arbeiten.",
      redundancy: "Kanalredundanz",
      redundancyDesc: "Symmetrische Glasfaserleitungen, 4G-LTE-Backup und unterbrechungsfreie Stromversorgung.",
    },
    sandbox: {
      tag: "Überwachungssimulator",
      title: "Erleben Sie die Reaktionsgeschwindigkeit",
      desc: "Interagieren Sie mit dem Dashboard und simulieren Sie Echtzeit-Warnungen. Sehen Sie, wie unser KI-Ecosystem und unsere Operatoren Bedrohungen sofort abwehren.",
      liveFeed: "LIVE CCTV — HAUPTEINGANG",
      noAlarms: "CCTV online. Warte auf Ereignisse...",
      simulateAlert: "SICHERHEITSALARM SIMULIEREN",
      simulating: "Simuliere Ereignis...",
      resolved: "EREIGNIS GELÖST",
      alertTypes: {
        lpr: "Verdächtiges Kennzeichen (LPR)",
        line: "Perimeter-Eindringling (KI-Linienüberschreitung)",
        panic: "Panik-Fingerabdruck-Zugang",
        open: "Warnung bei lang offenstehender Tür",
      },
      log: {
        lpr: "Gesperrtes Kennzeichen erkannt: LPR identifiziert verdächtiges Fahrzeug.",
        line: "Linienüberschreitung am linken Zaun erkannt. Mensch identifiziert.",
        panic: "Benutzer hat Alternativcode eingegeben. Stiller Nötigungsalarm ausgelöst.",
        open: "Haupteingang seit über 120 Sekunden geöffnet ohne automatisches Schließen.",
        monitoring: "Operator übernimmt die Kontrolle über Zwei-Wege-Audio und Kameras...",
        resolvedLog: "Ereignis protokolliert und geschlossen. Sicherheitskräfte verständigt.",
      },
    },
    pricing: {
      tag: "Tarifmodelle",
      title: "Klare & planbare Preise",
      desc: "Feste monatliche Gebühren zur Optimierung des Budgets der Eigentümergemeinschaft ohne Überraschungen.",
      monthly: "Monatsgebühr",
      ars: "ARS",
      usd: "USD",
      perMonth: "/Monat",
      plans: {
        basic: {
          name: "Vision-Linie",
          desc: "Autonomer biometrischer Zugang, ideal für kleinere Gebäude.",
        },
        standard: {
          name: "Totem-Ecosystem",
          desc: "Interaktive virtuelle Bewachung und Zutrittskontrolle für Wohngebäude.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "Maximale Sicherheit für Großobjekte und Firmenparkplätze.",
        },
      },
      features: {
        support: "Technischer Support rund um die Uhr und präventive Wartung",
        app: "Kostenloses cloudbasiertes Administrations-Dashboard",
        jwt: "Dynamische QR-Einladungen (ohne App-Download)",
        monitoring: "Abschreckende Überwachung durch aktive Leitstelle",
        shabat: "Konfiguration des Schabbat-Systemmoduls",
        patents: "Unbegrenzte Nummernschilderkennung (LPR)",
        ai: "KI-Analysen für aktive Perimeter-Erkennung",
        ups: "USV-Backup mit hoher Autonomie (6 Stunden)",
        unlimited: "Unbegrenztes Hinzufügen und Entfernen von Benutzern",
      },
    },
    cpq: {
      tag: "CPQ-Konfigurator",
      title: "Entwerfen Sie Ihr Sicherheits-Ökosystem",
      desc: "Wählen Sie Ihre Umgebung und personalisieren Sie die KI-Funktionen und -Geräte. Erhalten Sie sofort ein transparentes vorläufiges Monatsangebot.",
      axonometric: "Axonometrische Ansicht",
      aiActive: "KI AKTIV",
      environments: {
        edificio: "Wohngebäude",
        empresa: "Büro / Unternehmen",
        barrio: "Gated Community",
        hotel: "Hotel / Airbnb",
      },
      hardware: {
        title: "Hardware-Geräte (Leasing)",
        totemName: "Shomer Intelligentes Totem",
        totemDesc: "Zwei-Wege-Audio und interaktiver Bildschirm mit 24/7 Live-Operator.",
        facialName: "Biometrischer Face ID Leser (KI)",
        facialDesc: "Schneller biometrischer Zugang ohne physische Schlüssel (200 ms).",
        camarasName: "HD-Sicherheitskameras (x4)",
        camarasDesc: "Hochauflösende Kameras mit Nachtsicht und Notstrom.",
        barreraName: "Schranken- / Torsteuerung",
        barreraDesc: "Elektronische Fernöffnung und autonome Peer-to-Peer-Steuerung.",
      },
      software: {
        title: "Software-Module & Künstliche Intelligenz",
        lineaName: "Intelligente Linienüberschreitung (KI)",
        lineaDesc: "Erkennung von Eindringlingen am Perimeter und Sofortwarnungen.",
        patentesName: "Kennzeichenerkennung (LPR)",
        patentesDesc: "Autonome Öffnung durch Kennzeichenlesung an der Edge.",
        horariosName: "Zeiterfassung & Anwesenheit (HR)",
        horariosDesc: "Cloud-Berichte und Zutrittsprotokolle pro Person.",
        shabatName: "Schabbat-Systemmodul",
        shabatDesc: "Anpassungsfähiges, respektvolles Protokoll für die jüdische Gemeinschaft.",
      },
      summary: {
        title: "Zusammenfassung der Konfiguration",
        envLabel: "Ausgewählte Umgebung",
        hwLabel: "Geleaste Hardware",
        swLabel: "Aktive Software-Module",
        items: "Artikel",
        monthlyTotal: "Geschätzte Monatsgebühr",
        arsSuffix: "ARS /Monat",
        usdSuffix: "USD ca. /Monat",
        disclaimer: "*Die angegebenen Werte sind vorläufig, enthalten keine Steuern und stehen unter dem Vorbehalt einer technischen Prüfung der vorhandenen Kabelinfrastruktur.",
        quoteBtn: "Angebot für diesen Entwurf anfordern",
      },
    },
    podcast: {
      tag: "Shomer Podcast",
      title: "Sicherheit erklärt",
      desc: "Hören Sie sich unsere Erklär-Episoden an, wie die virtuelle Bewachung funktioniert und was an Biometrie-Mythen dran ist.",
      play: "Abspielen",
      pause: "Pausieren",
      listening: "Wird abgespielt",
      downloadTranscript: "Vollständiges Transkript herunterladen (PDF)",
      episodeTitle: "Episode #1 — Die Evolution der Zutrittskontrolle in Buenos Aires",
      episodeDesc: "Wir analysieren, wie Gesichtsbiometrie und IoT das Problem der Vervielfältigung magnetischer Schlüssel in Wohngebäuden lösen.",
    },
    includes: {
      tag: "Was Shomer beinhaltet",
      title: "Ein schlüsselfertiger Service ohne versteckte Kosten",
      items: [
        {
          title: "Hardware-Bereitstellung ohne Anfangsinvestition",
          desc: "Wir installieren die biometrischen Leser und die Kamerainfrastruktur ohne Vorabkosten im Rahmen des monatlichen Abonnements.",
        },
        {
          title: "Einrichtung und Bewohner-Onboarding",
          desc: "Wir übernehmen die Erstregistrierung und Datenbankpflege. Hinzufügungen und Löschungen werden in wenigen Minuten bearbeitet.",
        },
        {
          title: "Proaktive Wartung vor Ort",
          desc: "Wenn ein Gerät Anomalien an Sensoren oder Batterien meldet, schicken wir sofort Techniker für den Austausch.",
        },
      ],
    },
    why: {
      tag: "Warum Shomer wählen",
      title: "Die moderne, effiziente Alternative",
      items: [
        {
          title: "Bis zu 65% Budgetersparnis",
          desc: "Durch den Ersatz oder die Ergänzung von physischem Wachpersonal durch virtuelle Totems sinken die monatlichen Sicherheitskosten drastisch.",
        },
        {
          title: "Absolute Kontrolle und Protokolle",
          desc: "Verwaltung und Eigentümer haben Zugriff auf präzise Cloud-Berichte, um genau zu wissen, wer das Gebäude betreten hat.",
        },
        {
          title: "Technische Unangreifbarkeit",
          desc: "Operatoren in gepanzerten Überwachungsstationen können nicht angegriffen werden, was eine sofortige Polizeibenachrichtigung garantiert.",
        },
      ],
    },
    testimonials: {
      tag: "Zufriedene Kunden",
      title: "Das sagen die Verwalter",
      list: [
        {
          name: "Patricia Gómez",
          role: "Hausverwaltung Gómez & Asociados",
          content: "Die Einführung von Shomer Vision Pro in einem Gebäude in Palermo half uns, die Nebenkosten in drei Monaten um 40 % zu senken. Die Bewohner gewöhnten sich sofort an den Gesichtszugang.",
        },
        {
          name: "Roberto F.",
          role: "Beiratsvorsitzender, Gebäude Av. Santa Fe",
          content: "Wir hatten ständige Probleme mit kopierten Magnetschlüsseln aus den Schlüsseldiensten der Nachbarschaft. Die Gesichtserkennung hat das gelöst. Exzellenter Service.",
        },
        {
          name: "Marta Rodríguez",
          role: "Hausverwalterin in Belgrano",
          content: "Besonders hervorheben möchte ich das Schabbat-Systemmodul. In Gebäuden mit vielen orthodoxen Bewohnern war ein System, das den Schabbat respektiert, der Schlüssel.",
        },
      ],
    },
    faq: {
      tag: "Häufig gestellte Fragen",
      title: "Alles, was der Verwalter fragt",
      list: [
        {
          q: "Was passiert bei System- oder Internetausfall?",
          a: "Das biometrische Zugangssystem verfügt über eine Backup-Batterie, die den Betrieb bei Strom- oder Internetausfall für 6 Stunden aufrechterhält. Bei Bedarf erweitern unsere Techniker die Batteriekapazität. Die Überwachungszentrale verfügt über aktive 24/7/365-Notfallprotokolle.",
        },
        {
          q: "Wer verwaltet das Hinzufügen und Entfernen von Bewohnern?",
          a: "Shomer übernimmt das komplett. Der Verwalter meldet die Änderung — Einzug, neuer Bewohner, neuer Mitarbeiter — und wir aktualisieren das System. Kein manueller Aufwand für die Verwaltung, keine Systeme zum Erlernen.",
        },
        {
          q: "Wie lange dauert die Installation?",
          a: "Die Installation dauert in den meisten Fällen zwischen 2 und 4 Werktagen. Die genaue Dauer hängt von der Größe des Objekts und der Komplexität der vorhandenen Gebäudestruktur ab. Inklusive Konfiguration, Tests und Schulung. Keine Zusatzkosten.",
        },
        {
          q: "Muss der Besucher eine App herunterladen?",
          a: "Nein. Der Besucher scannt den QR-Code am Gerät und greift direkt über den Webbrowser seines Handys zu. Ohne Installationen, ohne Benutzerkonten, ohne Reibung. Kompatibel mit jedem iOS- oder Android-Smartphone.",
        },
        {
          q: "Was ist, wenn ich an einem Feiertag oder Wochenende im Notfall die Tür öffnen muss?",
          a: "Die Überwachungszentrale arbeitet 24/7/365. Notöffnungen — Aufzugstechniker, Pumpenreparatur, Feuerwehr — werden aus der Ferne nach Autorisierung durch den Verwalter oder Beirat veranlasst. Alles wird protokolliert.",
        },
        {
          q: "Sind die Daten der Bewohner sicher?",
          a: "Die gesamte Kommunikation läuft end-to-end-verschlüsselt innerhalb des Shomer-Ecosystems. Es werden keine externen Netzwerke genutzt und keine persönlichen Nummern offengelegt. Biometrische Daten (Face ID) werden unter strengen Sicherheitsauflagen in der Shomer-Zentrale verarbeitet und gespeichert.",
        },
      ],
    },
    contact: {
      tag: "Kontakt aufnehmen",
      title: "Sprechen wir über Ihr Gebäude",
      desc: "Geben Sie Ihre Daten ein und ein technischer Spezialist von Shomer wird sich mit Ihnen in Verbindung setzen, um Ihre physische Infrastruktur unverbindlich zu bewerten.",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefon / Mobiltelefon",
      propType: "Immobilienart",
      message: "Nachricht / Anfrage",
      send: "Anfrage senden",
      placeholderName: "Z. B. Max Mustermann",
      placeholderEmail: "Z. B. max@hausverwaltung.de",
      placeholderPhone: "Z. B. +49 170 1234567",
      placeholderMessage: "Geben Sie die Anzahl der Wohneinheiten oder Büros an...",
      types: {
        edificio: "Wohngebäude",
        empresa: "Büro / Unternehmen",
        barrio: "Gated Community",
        hotel: "Hotel / Airbnb",
      },
      successMsg: "Wir haben Ihre Anfrage erhalten! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
      submitting: "Sende...",
    },
    footer: {
      desc: "Die Evolution der Wohn- und Unternehmenssicherheit. Integrierte Cloud-Systeme mit Analysen auf Basis künstlicher Intelligenz und interaktiver Überwachung.",
      navigation: "Navigation",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
      address: "Buenos Aires, Argentinien",
      privacy: "Datenschutzerklärung",
    },
    club: {
      tag: "Aktiv",
      title: "Club Shomer",
      desc: "Exklusive Rabatte, Vorteile und Vergünstigungen für Kunden und Partner. Erhalten Sie vor allen anderen Zugang zu den Neuigkeiten von Shomer Security.",
      btn: "Club Shomer kennenlernen →",
    },
    servicesPage: {
      backToHome: "← Zurück zur Startseite",
      residentialTitle: "Wohngebäude & Wohnanlagen",
      corporateTitle: "Büros & Unternehmen",
      neighborhoodTitle: "Gated Communities & Wohnparks",
      hotelTitle: "Hotels & Unterkünfte",
      residentialDesc: "Wir ersetzen die Schwachstellen des traditionellen physischen Wachpersonals durch ein hybrides Ökosystem, das modernste Technologie und aufmerksame Operatoren rund um die Uhr kombiniert.",
      corporateDesc: "Optimierung der Zutrittskontrolle, cloudbasierte biometrische Zeiterfassung für Mitarbeiter und Absicherung sensibler Serverbereiche.",
      neighborhoodDesc: "Umfassende Perimeterüberwachung und schnelle Kennzeichenerkennung an den Zufahrten von Gated Communities mit automatischen Schranken.",
      hotelDesc: "Autonomer Check-in und Zutrittskontrolle durch dynamische, hochgradig nachverfolgbare digitale Schlüssel, ideal für Ferienwohnungen und Hotels.",
      militaryGrade: "Militärtechnologie für Ihr Gebäude",
      shabatTitle: "Integriertes Schabbat-System",
      shabatDesc: "Unter Berücksichtigung der religiösen Bräuche und Bedürfnisse der jüdischen Gemeinschaft haben wir eine technologische Lösung entwickelt, die eine respektvolle Nutzung und einen reibungslosen Zugang während des Schabbats ermöglicht. Das biometrische System und die Türöffnungsautomatik passen sich unter speziellen Protokollen an, um eine Verletzung der Schabbat-Regeln zu vermeiden, während das Gebäude voll geschützt bleibt.",
      promoTitle: "100% geförderte Installation",
      promoDesc: "In diesem Monat werden die Ausrüstung und die Installation der physischen Infrastruktur für Ihre Eigentümergemeinschaft zu 100% gefördert. Shomer Security stellt Leser, Kameras und Gegensprechanlagen im Rahmen des Leasingvertrags ohne Anschaffungskosten bereit und installiert diese.",
      requirementsTitle: "Technische Anforderungen",
      requirementsDesc: "Internetverbindung mit statischer öffentlicher IP (100 Mbps Upload empfohlen) und 220V Stromanschluss. Zutrittskontrollen verfügen über eine USV mit 6 Stunden Pufferzeit bei Stromausfall.",
      supportTitle: "Technischer Support",
      supportDesc: "Aktive Überwachung und proaktive Gerätewartung. Wir erkennen Anomalien und schicken Techniker, ohne dass Sie uns kontaktieren müssen.",
      customerTitle: "Kundenservice",
      customerDesc: "Leitstelle an 365 Tagen im Jahr rund um die Uhr aktiv. Sofortige, koordinierte Alarmierung der öffentlichen Sicherheitskräfte.",
      consultAdvisor: "Berater kontaktieren",
      reqQuote: "Gefördertes Angebot anfordern",
      endInsecurity: "Das Ende von physischen Schlüsseln und Unsicherheit",
      consorcioSecurityDesc: "Traditionelle Wohngebäude leiden unter ständigen Sicherheitslücken durch unbefugte Schlüsselkopien, abgelenkte Wachen und offenstehende Tore. Shomer definiert die Sicherheit neu, indem die Zutrittslogik in der Cloud geprüft wird, noch bevor die Türen physisch geöffnet werden.",
      consorcioEndDesc: "Unsere Hardware ist sabotagegeschützt konstruiert, während unsere Software volle Rückverfolgbarkeit für Verwalter und Mieter bietet – inklusive detailliertem Echtzeit-Logbuch für jeden Zutritt.",
      features: {
        biometric: "Intelligente Gesichtserkennung",
        biometricDesc: "Face ID Zutritt powered by KI. Ultraschnelle Reaktionszeit (200 ms) und hohe Sabotagefestigkeit.",
        accessControl: "Vollständige Zutrittskontrolle",
        accessControlDesc: "Authentifizierung über Fingerabdruck, personalisierte RFID-Karte und fortschrittliche Sensoren gegen unbefugtes Nachgehen oder 'Tür offen'-Warnungen.",
        panicFinger: "Panik-Fingerabdruck",
        panicFingerDesc: "Ermöglicht die Registrierung eines alternativen Fingers, um im Falle einer Nötigung unbemerkt einen stillen und sofortigen Alarm an unsere Leitstelle zu senden.",
        monitoring: "CCTV & Totem-Integration",
        monitoringDesc: "Interaktives Totem mit Zwei-Wege-Audio in Echtzeit, Hochleistungssirene und hochqualifizierten Operatoren, die im Ernstfall sofort eingreifen.",
      },
    },
  },
  ru: {

    common: {
      cta: "Получить расчет",
      loading: "Загрузка...",
      success: "Сообщение успешно отправлено!",
      error: "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
      learnMore: "Подробнее",
      soon: "Скоро",
      emergency: "Экстренные службы 24/7",
      contactAdvisor: "Связаться со специалистом",
      requestProposal: "Запросить льготное предложение",
    },
    navbar: {
      vision: "Линейка Vision",
      totem: "Тотем",
      services: "Услуги",
      pricing: "Цены",
      blog: "Блог",
      clients: "Клиенты",
      club: "Клуб Shomer",
    },
        hero: {
        product: "Флагманский продукт",
        title1: "Эволюция",
        title2: "домофонных систем.",
        desc: "Современная система, заменяющая традиционный домофон. Интеллектуальная связь, бесключевой доступ и полный контроль со смартфона. Без приложений. Без скачиваний. Без трения.",
        bullet1Title: "Без приложений. Без скачиваний.",
        bullet1Desc: "Посетители сканируют QR-код и входят напрямую из мобильного браузера. Без установок, без аккаунтов. Работает на любом смартфоне.",
        bullet2Title: "Одноразовый токен JWT",
        bullet2Desc: "Каждый доступ генерирует уникальный зашифрованный токен, действующий в течение 5 минут. Скопировать или повторно использовать невозможно.",
        "3dView": "ИНТЕРАКТИВНОЕ 3D",
        photo: "ФОТО",
        activeMonitoring: "АКТИВНЫЙ МОНИТОРИНГОВЫЙ ЦЕНТР 24/7",
        heroTitle1: "Безопасность,",
        heroTitle2: "которая не спит.",
        heroDesc: "Интеллектуальный контроль доступа, мониторинг операторами в реальном времени и технологическая экосистема, защищающая ваше здание независимо.",
        heroQuote: "Заказать услугу",
        heroProducts: "Посмотреть продукты",
        cctvLive: "ОНЛАЙН CCTV",
        rec: "ЗАПИСЬ",
        sector: "СЕКТОР: ГЛАВНЫЙ ВХОД",
        faceDetected: "ЛИЦО ОБНАРУЖЕНО",
        latency: "ЗАДЕРЖКА",
        cpu: "ЦП ХАБОВ",
        links: "СВЯЗИ",
        tickerTitle: "ЖУРНАЛ СОБЫТИЙ В РЕАЛЬНОМ ВРЕМЕНИ",
        logEnc: "Установлено зашифрованное соединение с центром Shomer",
        logDiag: "Полная самодиагностика - все узлы исправны",
        logLprReady: "LPR паркинга активна - сканирование готово",
        logFaceOk: "Доступ по лицу: Собственник подтвержден на двери 1",
        logRoundsOk: "Контроль обходов: Оператор подтвержден в секторе А",
        logPingOk: "Проверка резерва: Оптимальный пинг (12 мс)",
        logLprOk: "LPR Вход: Номер обнаружен и авторизован",
        logCctvOk: "HD-камера периметра: Синхронизация WebRTC активна",
        logModeOk: "Умный режим активен: Обнаружение периметра включено"
    },
    stats: {
      over: "БОЛЕЕ",
      monitored: "ОБЪЕКТОВ ПОД МОНИТОРИНГОМ",
      police: "ВЫЗОВОВ ПОЛИЦИИ",
      avgTime: "МИНУТ СРЕДНЕЕ ВРЕМЯ РЕАГИРОВАНИЯ",
      satisfaction: "УДОВЛЕТВОРЕННОСТЬ ЖИЛЬЦОВ",
      yearsExp: "Лет опыта",
      usersProt: "Защищенных пользователей",
      activeMon: "Активный мониторинг",
      hiddenCosts: "Скрытые затраты",
    },
    problem: {
      tag: "Проблема сегодняшнего дня",
      title1: "Ваше здание все еще",
      title2: "зависит от этого?",
      card1Title: "Старые домофоны",
      card1Desc: "Устаревшие системы, постоянные сбои, обслуживание, которое всегда обходится дороже, чем ожидалось. Нет логов, нет реального контроля.",
      card2Title: "Скрытые расходы",
      card2Desc: "Регулярное обслуживание, замена оборудования, зарплата ночного сторожа. Реальная стоимость в два раза выше, чем кажется.",
      card3Title: "Реальная угроза",
      card3Desc: "QR-коды в WhatsApp, дубликаты ключей, неконтролируемый доступ. Войти может любой желающий, если знает как.",
      footerText: "Оставьте в прошлом традиционные, небезопасные и дорогие в обслуживании системы. Есть лучший способ защитить ваше здание.",
    },
    vision: {
      tag: "Линейка Vision",
      title: "Технологии, меняющие представление о доступе",
      desc: "Наше интеллектуальное оборудование заменяет традиционный домофон высокопрочным интерактивным узлом безопасности.",
      faceIdTitle: "Распознавание лиц Face ID",
      faceIdDesc: "Биометрическая валидация за 200 мс. Невозможно скопировать или передать кому-либо.",
      rfidTitle: "Безопасные считыватели RFID",
      rfidDesc: "Зашифрованные бесконтактные карты для непредвиденных обстоятельств и сервисной поддержки.",
      qrTitle: "Динамические приглашения по QR",
      qrDesc: "Генерация временных доступов для гостей, которые аннулируются автоматически.",
      intercomTitle: "Аудио- и видеодомофон",
      intercomDesc: "Прямой видеовызов высокой четкости со входа на смартфон жильца.",
      aiTitle: "Умная камера с ИИ",
      aiDesc: "Локальная обработка данных для мгновенного распознавания лиц и подозрительного поведения.",
    },
    totem: {
      tag: "Умный тотем",
      title: "Активный круглосуточный удаленный мониторинг",
      desc: "Виртуальный охранник находится на вашем входе, но физически располагается в бронированном мониторинговом центре высокой безопасности.",
      bullet1: "Интерактивный экран с живым оператором 24 часа в сутки.",
      bullet2: "Двусторонняя аудиосвязь и мощный рупор для активного сдерживания.",
      bullet3: "Резервное питание от ИБП (UPS) для работы до 6 часов при отключении электричества.",
      bullet4: "Камеры периметра с ИИ, которые предупреждают оператора до того, как кто-то прикоснется к воротам.",
    },
    segments: {
      tag: "Сферы применения",
      title: "Индивидуальные решения для любых задач",
      consorcios: "Многоквартирные дома и ТСЖ",
      consorciosDesc: "Надежная экосистема контроля доступа для полного отказа от физических ключей в жилых домах.",
      empresas: "Офисы и предприятия",
      empresasDesc: "Учет рабочего времени, управление посетителями и защита закрытых корпоративных зон.",
      barrios: "Коттеджные поселки",
      barriosDesc: "Интеллектуальный мониторинг периметра, управление шлагбаумами и высокоскоростной LPR.",
      hoteles: "Отели и Airbnb",
      hotelesDesc: "Управление цифровыми ключами без ресепшена, бесконтактная регистрация и журнал доступа.",
    },
    inframap: {
      tag: "Карта инфраструктуры",
      title: "Мониторинг, который никогда не спит",
      desc: "Наша сеть мониторинга соединяет каждый объект с резервными высокотехнологичными станциями через зашифрованные VPN-туннели.",
      nodes: "Узлы связи",
      nodesDesc: "Распределенные узлы для обеспечения низкой задержки и высокой доступности потока данных.",
      ops: "Онлайн-операторы",
      opsDesc: "Специализированные операторы активной сдерживающей безопасности, работающие одновременно.",
      redundancy: "Резервирование каналов",
      redundancyDesc: "Симметричные волоконно-оптические линии связи, резервный канал 4G LTE и бесперебойное питание.",
    },
    sandbox: {
      tag: "Симулятор мониторинга",
      title: "Оцените скорость реакции",
      desc: "Взаимодействуйте с интерактивной панелью и симулируйте тревоги в реальном времени. Посмотрите, как наша экосистема ИИ и операторы мгновенно предотвращают угрозы.",
      liveFeed: "ОНЛАЙН CCTV — ГЛАВНЫЙ ВХОД",
      noAlarms: "Камеры онлайн. Ожидание событий...",
      simulateAlert: "СИМУЛИРОВАТЬ ТРЕВОГУ БЕЗОПАСНОСТИ",
      simulating: "Симуляция события...",
      resolved: "ИНЦИДЕНТ РЕШЕН",
      alertTypes: {
        lpr: "Подозрительный номерной знак (LPR)",
        line: "Нарушитель периметра (Пересечение линии ИИ)",
        panic: "Вход по тревожному отпечатку пальца",
        open: "Дверь оставлена открытой слишком долго",
      },
      log: {
        lpr: "Обнаружен номерной знак из черного списка: LPR идентифицирует подозрительный автомобиль.",
        line: "Обнаружено пересечение линии на левом ограждении. Зафиксирован человек.",
        panic: "Пользователь ввел альтернативный код. Активирована скрытая тревога принуждения.",
        open: "Главный вход открыт более 120 секунд без автоматического закрытия.",
        monitoring: "Оператор берет под контроль двустороннюю аудиосвязь и камеры...",
        resolvedLog: "Инцидент зарегистрирован и закрыт. Правоохранительные органы уведомлены.",
      },
    },
    pricing: {
      tag: "Тарифные планы",
      title: "Простые и прозрачные цены",
      desc: "Фиксированная ежемесячная плата, призванная оптимизировать бюджет без скрытых расходов.",
      monthly: "Ежемесячный платеж",
      ars: "ARS",
      usd: "USD",
      perMonth: "/мес",
      plans: {
        basic: {
          name: "Линейка Vision",
          desc: "Автономный биометрический доступ, идеальный для небольших зданий.",
        },
        standard: {
          name: "Экосистема Тотем",
          desc: "Интерактивная виртуальная охрана и контроль доступа в жилых домах.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "Максимальная безопасность для крупных объектов и корпоративных парковок.",
        },
      },
      features: {
        support: "Круглосуточная техническая поддержка и профилактическое обслуживание",
        app: "Бесплатная облачная панель администратора",
        jwt: "Динамические QR-приглашения (без скачивания приложений)",
        monitoring: "Сдерживающий мониторинг из активного центра охраны",
        shabat: "Настройка модуля системы Шабат",
        patents: "Безлимитное распознавание автомобильных номеров (LPR)",
        ai: "ИИ-аналитика для активного обнаружения нарушителей",
        ups: "Резервное питание от ИБП (UPS) высокой автономности (6 часов)",
        unlimited: "Безлимитное добавление и удаление пользователей",
      },
    },
    cpq: {
      tag: "Конфигуратор CPQ",
      title: "Создайте свою экосистему безопасности",
      desc: "Выберите сферу применения и настройте устройства и функции ИИ. Получите мгновенную прозрачную предварительную смету.",
      axonometric: "Аксонометрический вид",
      aiActive: "ИИ АКТИВЕН",
      environments: {
        edificio: "Жилое здание",
        empresa: "Офис / Предприятие",
        barrio: "Коттеджный поселок",
        hotel: "Отель / Airbnb",
      },
      hardware: {
        title: "Аппаратные устройства (в аренду)",
        totemName: "Умный тотем Shomer",
        totemDesc: "Двусторонняя аудиосвязь и интерактивный экран с круглосуточным живым оператором.",
        facialName: "Биометрический терминал Face ID (ИИ)",
        facialDesc: "Быстрый биометрический доступ без физических ключей (200 мс).",
        camarasName: "HD-камеры безопасности (4 шт.)",
        camarasDesc: "Камеры высокой четкости с ночным видением и резервным питанием.",
        barreraName: "Контроллер ворот / шлагбаума",
        barreraDesc: "Дистанционное электронное открытие и автономное управление.",
      },
      software: {
        title: "Программные модули и искусственный интеллект",
        lineaName: "Интеллектуальное пересечение линии (ИИ)",
        lineaDesc: "Обнаружение нарушителей периметра и мгновенные оповещения.",
        patentesName: "Распознавание номеров (LPR)",
        patentesDesc: "Автономное открытие ворот по распознаванию номеров на Edge.",
        horariosName: "Контроль рабочего времени (HR)",
        horariosDesc: "Облачные отчеты и журналы посещаемости по каждому сотруднику.",
        shabatName: "Модуль системы Шабат",
        shabatDesc: "Адаптивный уважительный протокол для еврейской общины.",
      },
      summary: {
        title: "Итоги конфигурации",
        envLabel: "Выбранная среда",
        hwLabel: "Аренда оборудования",
        swLabel: "Активные программные модули",
        items: "наим.",
        monthlyTotal: "Ориентировочный платеж в месяц",
        arsSuffix: "ARS /мес",
        usdSuffix: "USD прибл. /мес",
        disclaimer: "*Указанные значения являются предварительными, не включают налоги и подлежат уточнению после технического осмотра существующей кабельной инфраструктуры.",
        quoteBtn: "Запросить предложение по этой конфигурации",
      },
    },
    podcast: {
      tag: "Подкаст Shomer",
      title: "Безопасность понятным языком",
      desc: "Слушайте наши выпуски о том, как работает виртуальная охрана, и о мифах, связанных с биометрией.",
      play: "Воспроизвести",
      pause: "Приостановить",
      listening: "Воспроизводится",
      downloadTranscript: "Скачать полную расшифровку (PDF)",
      episodeTitle: "Выпуск #1 — Эволюция контроля доступа в Буэнос-Айресе",
      episodeDesc: "Анализируем, как распознавание лиц и IoT решают проблему дублирования магнитных ключей в жилых домах.",
    },
    includes: {
      tag: "Что входит в Shomer",
      title: "Комплексное обслуживание без скрытых затрат",
      items: [
        {
          title: "Оборудование предоставляется в аренду без вложений",
          desc: "Мы устанавливаем биометрические терминалы и камеры без первоначальных затрат в рамках ежемесячной подписки.",
        },
        {
          title: "Настройка и регистрация жильцов",
          desc: "Мы берем на себя первоначальное ведение базы данных доступа. Добавление и удаление пользователей происходит за минуты.",
        },
        {
          title: "Проактивное обслуживание на месте",
          desc: "Если датчики устройства или резервная батарея сообщают об аномалиях, мы немедленно отправляем техников для замены.",
        },
      ],
    },
    why: {
      tag: "Почему стоит выбрать Shomer",
      title: "Современная и эффективная альтернатива",
      items: [
        {
          title: "Экономия бюджета до 65%",
          desc: "При замене или дополнении физической охраны виртуальными тотемами ежемесячные расходы снижаются кардинально.",
        },
        {
          title: "Абсолютный контроль и журналы событий",
          desc: "Управляющая компания и собственники имеют доступ к точным облачным отчетам о каждом входе в здание.",
        },
        {
          title: "Техническая неуязвимость",
          desc: "Операторы в бронированном мониторинговом центре находятся вне досягаемости злоумышленников, что гарантирует вызов полиции.",
        },
      ],
    },
    testimonials: {
      tag: "Довольные клиенты",
      title: "Что говорят управляющие домами",
      list: [
        {
          name: "Патрисия Гомес",
          role: "Управляющая компания Gómez & Asociados",
          content: "Внедрение Shomer Vision Pro в ТСЖ в Палермо позволило снизить коммунальные расходы на 40% за три месяца. Жильцы мгновенно привыкли к доступу по лицу.",
        },
        {
          name: "Роберто Ф.",
          role: "Председатель совета ТСЖ, дом на пр. Санта-Фе",
          content: "У нас были постоянные проблемы с дубликатами магнитных ключей в мастерских района. Распознавание лиц решило проблему раз и навсегда. Отличный сервис.",
        },
        {
          name: "Марта Родригес",
          role: "Управляющая ТСЖ в Бельграно",
          content: "Отдельно хочу отметить модуль системы Шабат. В домах с большим ортодоксальным населением система, уважающая Шабат, стала ключевым преимуществом.",
        },
      ],
    },
    faq: {
      tag: "Часто задаваемые вопросы",
      title: "Все, о чем спрашивает управляющий",
      list: [
        {
          q: "Что происходит в случае сбоя системы или отключения интернета?",
          a: "Биометрическая система доступа оснащена резервным аккумулятором, обеспечивающим до 6 часов автономной работы. При необходимости наши специалисты могут увеличить емкость аккумуляторов. Центр мониторинга работает по экстренным протоколам круглосуточно и без выходных.",
        },
        {
          q: "Кто занимается добавлением и удалением жильцов из базы?",
          a: "Shomer полностью берет это на себя. Управляющий сообщает об изменениях (переезд, новый жилец, новый сотрудник), и мы обновляем базу данных. Никакой ручной работы для администрации.",
        },
        {
          q: "Сколько времени занимает установка?",
          a: "В большинстве случаев установка занимает от 2 до 4 рабочих дней. Точные сроки зависят от масштабов объекта и сложности кабельной инфраструктуры здания. Включает настройку, тестирование и обучение. Без дополнительных плат.",
        },
        {
          q: "Нужно ли гостю скачивать приложение?",
          a: "Нет. Гость просто сканирует QR-код на терминале и получает доступ прямо из браузера смартфона. Без установок, без учетных записей. Совместимо с любыми устройствами iOS или Android.",
        },
        {
          q: "Что делать, если нужно открыть дверь в экстренной ситуации в выходной день?",
          a: "Мониторинговый центр работает 24/7/365. Экстренное открытие дверей (для аварийных служб, пожарных, лифтеров) осуществляется удаленно после подтверждения со стороны администрации. Все события фиксируются в журнале.",
        },
        {
          q: "Безопасны ли персональные данные жильцов?",
          a: "Вся передача данных внутри экосистемы Shomer зашифрована сквозным методом (end-to-end). Мы не используем внешние сети и не раскрываем личные номера. Биометрические данные (Face ID) обрабатываются и хранятся на серверах Shomer в соответствии со строгими стандартами безопасности.",
        },
      ],
    },
    contact: {
      tag: "Связаться с нами",
      title: "Давайте обсудим ваш объект",
      desc: "Заполните форму, и технический специалист Shomer свяжется с вами для бесплатной оценки вашей инфраструктуры.",
      name: "Полное имя",
      email: "Электронная почта",
      phone: "Телефон / Мобильный",
      propType: "Тип недвижимости",
      message: "Сообщение / Запрос",
      send: "Отправить запрос",
      placeholderName: "Например: Иван Иванов",
      placeholderEmail: "Например: ivan@condo.ru",
      placeholderPhone: "Например: +7 999 123 4567",
      placeholderMessage: "Укажите количество квартир или офисов...",
      types: {
        edificio: "Жилое здание",
        empresa: "Офис / Предприятие",
        barrio: "Коттеджный поселок",
        hotel: "Отель / Airbnb",
      },
      successMsg: "Ваш запрос получен! Мы свяжемся с вами в ближайшее время.",
      submitting: "Отправка...",
    },
    footer: {
      desc: "Эволюция жилой и корпоративной безопасности. Облачные интеграции, ИИ-аналитика и интерактивное удаленное присутствие.",
      navigation: "Навигация",
      legal: "Юридическая информация",
      rights: "Все права защищены.",
      address: "Буэнос-Айрес, Аргентина",
      privacy: "Политика конфиденциальности",
    },
    club: {
      tag: "Активно",
      title: "Клуб Shomer",
      desc: "Эксклюзивные скидки, льготы и бонусы для клиентов. Получите ранний доступ к новинкам Shomer Security.",
      btn: "Узнать больше о Клубе Shomer →",
    },
    servicesPage: {
      backToHome: "← Вернуться на главную",
      residentialTitle: "Многоквартирные дома и ТСЖ",
      corporateTitle: "Офисы и предприятия",
      neighborhoodTitle: "Коттеджные поселки",
      hotelTitle: "Отели и апартаменты",
      residentialDesc: "Мы заменяем слабые стороны традиционной физической охраны гибридной экосистемой, объединяющей передовые технологии и бдительных операторов 24 часа в сутки.",
      corporateDesc: "Оптимизация контроля доступа, облачный учет рабочего времени сотрудников по биометрии лиц и защита серверных помещений.",
      neighborhoodDesc: "Комплексный мониторинг периметра коттеджных поселков, быстрое распознавание автомобильных номеров и автоматизация шлагбаумов.",
      hotelDesc: "Автономное заселение гостей и контроль доступа с помощью динамических цифровых ключей, идеальное решение для апарт-отелей и посуточной аренды.",
      militaryGrade: "Технологии военного уровня для вашего здания",
      shabatTitle: "Интегрированная система Шабат",
      shabatDesc: "Принимая во внимание традиции еврейской общины, мы разработали решение, обеспечивающее уважительное соблюдение Шабата при входе в здание. Биометрическая система и автоматика открывания дверей адаптируются по специальным протоколам для предотвращения нарушений Шабата, сохраняя при этом полную безопасность объекта.",
      promoTitle: "Установка со 100% скидкой",
      promoDesc: "В этом месяце оборудование и монтаж физической инфраструктуры для вашего здания предоставляются со 100% скидкой. Shomer Security устанавливает камеры, считыватели и домофоны в аренду без первоначального взноса.",
      requirementsTitle: "Технические требования",
      requirementsDesc: "Подключение к интернету со статическим публичным IP-адресом (рекомендуется скорость отдачи от 100 Мбит/с) и питание 220 В. ИБП обеспечивает до 6 часов резервной работы.",
      supportTitle: "Техническая поддержка",
      supportDesc: "Активный мониторинг работоспособности устройств. Мы фиксируем неполадки и отправляем техников проактивно, без ожидания заявок.",
      customerTitle: "Служба поддержки",
      customerDesc: "Мониторинговый центр активен круглосуточно и круглогодично. Мгновенная координация действий с правоохранительными органами.",
      consultAdvisor: "Связаться со специалистом",
      reqQuote: "Запросить льготное предложение",
      endInsecurity: "Конец физическим ключам и небезопасности",
      consorcioSecurityDesc: "Традиционные здания страдают от постоянных нарушений безопасности из-за дубликатов ключей, отвлекающихся охранников и открытых ворот. Shomer переносит проверку прав доступа в облако до физического открытия дверей.",
      consorcioEndDesc: "Наше оборудование защищено от взлома, а программное обеспечение предоставляет полную историю посещений для управляющих и жильцов в режиме реального времени.",
      features: {
        biometric: "Умное распознавание лиц",
        biometricDesc: "Доступ по Face ID на базе искусственного интеллекта. Сверхбыстрый отклик (200 мс) и высокая антивандальная защита.",
        accessControl: "Полный контроль доступа",
        accessControlDesc: "Идентификация по отпечаткам пальцев, RFID-картам и датчики против несанкционированного прохода или предупреждения о незакрытой двери.",
        panicFinger: "Тревожный отпечаток пальца",
        panicFingerDesc: "Позволяет зарегистрировать дополнительный палец для отправки скрытого сигнала тревоги в наш центр в случае принуждения.",
        monitoring: "Видеонаблюдение и Тотем",
        monitoringDesc: "Интерактивный тотем с двусторонним аудио в реальном времени, мощная сирена и мгновенная реакция обученных операторов.",
      },
    },
  },
  pt: {

    common: {
      cta: "Solicitar Orçamento",
      loading: "Carregando...",
      success: "Mensagem enviada com sucesso!",
      error: "Ocorreu um erro. Por favor, tente novamente.",
      learnMore: "Saiba mais",
      soon: "Em breve",
      emergency: "Emergências 24/7",
      contactAdvisor: "Falar com um Assessor",
      requestProposal: "Solicitar Orçamento com Instalação Bonificada",
    },
    navbar: {
      vision: "Linha Vision",
      totem: "Totem",
      services: "Serviços",
      pricing: "Preços",
      blog: "Blog",
      clients: "Clientes",
      club: "Club Shomer",
    },
        hero: {
        product: "Produto Destaque",
        title1: "A evolução",
        title2: "do porteiro eletrônico.",
        desc: "Um sistema moderno que substitui o porteiro tradicional. Comunicação inteligente, acesso sem chaves e controle total a partir do seu celular. Sem apps. Sem downloads. Sem fricção.",
        bullet1Title: "Sem Apps. Sem Downloads.",
        bullet1Desc: "O visitante escaneia o código QR e acede diretamente a partir do navegador do celular. Sem instalações, sem contas. Funciona em qualquer smartphone.",
        bullet2Title: "Token JWT de uso único",
        bullet2Desc: "Cada acesso gera um token único e criptografado, válido por 5 minutos. Impossível copiar ou reutilizar.",
        "3dView": "3D INTERATIVO",
        photo: "FOTO",
        activeMonitoring: "CENTRAL DE MONITORAMENTO 24/7 ATIVA",
        heroTitle1: "A segurança",
        heroTitle2: "que não descansa.",
        heroDesc: "Controle de acesso inteligente, monitoramento em tempo real por operadores e um ecossistema tecnológico que protege seu edifício de forma independente.",
        heroQuote: "Cotar meu serviço",
        heroProducts: "Ver produtos",
        cctvLive: "CCTV AO VIVO",
        rec: "GRAVANDO",
        sector: "SETOR: ENTRADA PRINCIPAL",
        faceDetected: "ROSTO DETECTADO",
        latency: "LATÊNCIA",
        cpu: "CPU HUBS",
        links: "CONEXÕES",
        tickerTitle: "REGISTROS EM TEMPO REAL",
        logEnc: "Conexão criptografada estabelecida com a Central Shomer",
        logDiag: "Autodiagnóstico completo - Todos os nós OK",
        logLprReady: "LPR garagem ativa - Varredura pronta",
        logFaceOk: "Acesso Facial: Proprietário verificado na porta 1",
        logRoundsOk: "Controle de rondas: Operador verificado no setor A",
        logPingOk: "Cheque de redundância: Ping ideal (12ms)",
        logLprOk: "LPR Entrada: Placa detectada e autorizada",
        logCctvOk: "Câmera HD perimetral: Sincronização WebRTC activa",
        logModeOk: "Modo inteligente activo: Detecção perimetral ligada"
    },
    stats: {
      over: "MAIS DE",
      monitored: "EDIFÍCIOS MONITORADOS",
      police: "CHAMADOS DA POLÍCIA",
      avgTime: "MINUTOS DE TEMPO MÉDIO DE RESPOSTA",
      satisfaction: "SATISFAÇÃO DOS RESIDENTES",
      yearsExp: "Anos de experiência",
      usersProt: "Usuários protegidos",
      activeMon: "Monitoramento ativo",
      hiddenCosts: "Custos ocultos",
    },
    problem: {
      tag: "O problema de hoje",
      title1: "Seu edifício ainda",
      title2: "depende disso?",
      card1Title: "Porteiros antigos",
      card1Desc: "Sistemas obsoletos, falhas constantes, manutenções que sempre saem mais caras do que o esperado. Sem registro, sem controle real.",
      card2Title: "Custos ocultos",
      card2Desc: "Manutenções recorrentes, reposição de hardware, salários de vigilante noturno. O custo real é o dobro do que parece.",
      card3Title: "Insegurança real",
      card3Desc: "QRs compartilhados via WhatsApp, chaves duplicadas, acessos que ninguém controla. Qualquer um pode entrar se souber como.",
      footerText: "Deixe para trás os sistemas tradicionais, inseguros e caros de manter. Há uma forma melhor de proteger seu edifício.",
    },
    vision: {
      tag: "Linha Vision",
      title: "Tecnologia que redefine o acesso",
      desc: "Nossa tecnologia inteligente substitui o porteiro tradicional por um nó interativo de segurança de alta durabilidade.",
      faceIdTitle: "Reconhecimento Facial Face ID",
      faceIdDesc: "Validação biométrica em 200ms. Impossível duplicar ou transferir.",
      rfidTitle: "Leitores RFID Seguros",
      rfidDesc: "Cartões de proximidade criptografados para contingências e serviços de suporte.",
      qrTitle: "Convites por QR Dinâmico",
      qrDesc: "Geração de acessos temporários para visitas que expiram automaticamente.",
      intercomTitle: "Porteiro de Áudio e Vídeo",
      intercomDesc: "Videochamada direta em alta definição a partir da entrada para o smartphone do morador.",
      aiTitle: "Câmera Inteligente com IA",
      aiDesc: "Processamento no Edge para detectar rostos e comportamentos suspeitos instantaneamente.",
    },
    totem: {
      tag: "Totem Inteligente",
      title: "Monitoramento Remoto Ativo 24/7",
      desc: "O vigilante virtual está na sua entrada, mas dentro de uma central blindada de alta segurança, livre de coação.",
      bullet1: "Ecrã interativo com operador ao vivo 24 horas por dia.",
      bullet2: "Áudio bidirecional e corneta de alta potência para dissuasão ativa.",
      bullet3: "Backup de energia por UPS que mantém o totem ligado por 6 horas durante apagões.",
      bullet4: "Câmeras perimetrais com IA que alertam o operador antes que toquem no portão.",
    },
    segments: {
      tag: "Segmentos de Aplicação",
      title: "Soluções sob medida para cada necessidade",
      consorcios: "Edifícios e Condomínios",
      consorciosDesc: "Ecosistema robusto de controle de acessos para eliminar chaves físicas em prédios residenciais.",
      empresas: "Escritórios e Empresas",
      empresasDesc: "Controle de ponto, gestão de visitantes e proteção de áreas restritas corporativas.",
      barrios: "Loteamentos e Condomínios Fechados",
      barriosDesc: "Monitoramento perimetral inteligente, controle de cancelas veiculares e LPR de alta velocidade.",
      hoteles: "Hotéis e Airbnb",
      hotelesDesc: "Gestão de chaves digitais sem recepção, check-in autônomo e rastreabilidade de acessos temporários.",
    },
    inframap: {
      tag: "Mapa de Infraestrutura",
      title: "Monitoramento que nunca dorme",
      desc: "Nossa rede conecta cada condomínio a centrais redundantes de alta tecnologia através de túneis VPN criptografados.",
      nodes: "Nós de Conexão",
      nodesDesc: "Nós distribuídos para garantir baixa latência e alta disponibilidade do fluxo de dados.",
      ops: "Operadores Online",
      opsDesc: "Profissionais especializados em segurança dissuasiva ativa trabalhando em simultâneo.",
      redundancy: "Redundância de Canais",
      redundancyDesc: "Links de fibra óptica simétrica, backup 4G LTE e alimentação ininterrupta.",
    },
    sandbox: {
      tag: "Simulador de Monitoramento",
      title: "Experimente a velocidade de resposta",
      desc: "Interaja com o painel e simule alertas em tempo real. Veja como nossa IA e operadores dissuadem ameaças instantaneamente.",
      liveFeed: "CCTV AO VIVO — ENTRADA PRINCIPAL",
      noAlarms: "CCTV online. Aguardando eventos...",
      simulateAlert: "SIMULAR ALERTA DE SEGURANÇA",
      simulating: "Simulando evento...",
      resolved: "EVENTO RESOLVIDO",
      alertTypes: {
        lpr: "Leitura de Placa Suspeita (LPR)",
        line: "Intruso Perimetral (Cruzamento de Linha IA)",
        panic: "Acesso por Impressão Digital de Pânico",
        open: "Alerta de Porta Aberta Prolongada",
      },
      log: {
        lpr: "Placa na lista negra identificada: LPR detecta veículo suspeito rondando.",
        line: "Cruzamento de linha detectado na grade perimetral esquerda. Humano identificado.",
        panic: "Usuário inseriu código alternativo. Alerta silencioso de coação ativado.",
        open: "Entrada principal aberta por mais de 120 segundos sem fechamento automático.",
        monitoring: "Operador assume controle de áudio bidirecional e câmeras...",
        resolvedLog: "Evento registrado e fechado. Autoridades policiais notificadas.",
      },
    },
    pricing: {
      tag: "Planos de Serviço",
      title: "Custos claros e previsíveis",
      desc: "Abonos mensais fixos pensados para otimizar o orçamento do condomínio sem surpresas.",
      monthly: "Abono mensal",
      ars: "ARS",
      usd: "USD",
      perMonth: "/mês",
      plans: {
        basic: {
          name: "Linha Vision",
          desc: "Acesso biométrico autônomo ideal para pequenos edifícios.",
        },
        standard: {
          name: "Ecosistema Totem",
          desc: "Vigilância virtual interativa e controle de acessos residencial.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "Máxima segurança para grandes empreendimentos e garagens corporativas.",
        },
      },
      features: {
        support: "Suporte técnico e manutenção preventiva 24/7",
        app: "Painel administrativo na nuvem sem custos",
        jwt: "Convites dinâmicos por QR (sem downloads)",
        monitoring: "Monitoramento ativo a partir de central especializada",
        shabat: "Configuração do Módulo Sistema Shabat",
        patents: "Leitura de placas de veículos (LPR) ilimitada",
        ai: "Análises de IA para detecção perimetral ativa",
        ups: "Backup de UPS de alta autonomia (6 horas)",
        unlimited: "Altas e baixas de usuários ilimitadas",
      },
    },
    cpq: {
      tag: "Configurador CPQ",
      title: "Desenhe seu Ecosistema de Segurança",
      desc: "Selecione o seu ambiente e personalize os dispositivos e recursos de IA. Obtenha um orçamento mensal preliminar transparente na hora.",
      axonometric: "Vista Axonométrica",
      aiActive: "IA ATIVA",
      environments: {
        edificio: "Edifício Residencial",
        empresa: "Escritório / Empresa",
        barrio: "Condomínio Fechado",
        hotel: "Hotel / Airbnb",
      },
      hardware: {
        title: "Dispositivos de Hardware (Comodato)",
        totemName: "Totem Inteligente Shomer",
        totemDesc: "Áudio bidirecional e tela com operador ao vivo 24/7.",
        facialName: "Leitor Facial Face ID com IA",
        facialDesc: "Acesso biométrico rápido sem chaves físicas (200ms).",
        camarasName: "Câmeras de Segurança HD (x4)",
        camarasDesc: "Lentes de alta definição com visão noturna e backup.",
        barreraName: "Controlador de Portão / Cancela",
        barreraDesc: "Abertura eletrônica remota e controle peer-to-peer autônomo.",
      },
      software: {
        title: "Módulos de Software e Inteligência Artificial",
        lineaName: "Cruce de Linha Inteligente (IA)",
        lineaDesc: "Detecção de intrusos perimetrais e alertas instantâneos.",
        patentesName: "Reconhecimento de Placas (LPR)",
        patentesDesc: "Abertura autônoma por leitura de placas de veículos no Edge.",
        horariosName: "Controle de Ponto e Presença (RH)",
        horariosDesc: "Relatórios na nuvem e logs de acessos por pessoa.",
        shabatName: "Módulo Sistema Shabat",
        shabatDesc: "Protocolo adaptativo respeitoso para a Comunidade Judaica.",
      },
      summary: {
        title: "Resumo de Configuração",
        envLabel: "Ambiente selecionado",
        hwLabel: "Hardware em comodato",
        swLabel: "Módulos de software ativos",
        items: "itens",
        monthlyTotal: "Abono Mensal Estimado",
        arsSuffix: "ARS /mês",
        usdSuffix: "USD aprox. /mês",
        disclaimer: "*Os valores expressos são preliminares, não incluem impostos e estão sujeitos à vistoria técnica da infraestrutura de cabos existente.",
        quoteBtn: "Solicitar Orçamento deste Projeto",
      },
    },
    podcast: {
      tag: "Podcast Shomer",
      title: "Segurança Explicada",
      desc: "Ouça os nossos episódios explicativos sobre como funciona a vigilância virtual e os mitos da biometria.",
      play: "Reproduzir",
      pause: "Pausar",
      listening: "Ouvindo",
      downloadTranscript: "Baixar Transcrição Completa (PDF)",
      episodeTitle: "Episódio #1 — A evolução do controle de acessos em Buenos Aires",
      episodeDesc: "Analisamos como a biometria facial e a IoT resolvem o problema das cópias de chaves magnéticas em edifícios residenciais.",
    },
    includes: {
      tag: "O que o Shomer Inclui",
      title: "Um serviço completo sem custos ocultos",
      items: [
        {
          title: "Hardware em comodato sem investimento inicial",
          desc: "Instalamos leitores biométricos e infraestrutura de câmeras sem custo para o condomínio sob um modelo de assinatura mensal.",
        },
        {
          title: "Configuração e cadastro de moradores",
          desc: "Cuidamos do registro inicial e banco de dados de acessos. Cadastros e exclusões são processados internamente em minutos.",
        },
        {
          title: "Manutenção proativa no local",
          desc: "Se um dispositivo reportar falha em sensores ou bateria, enviamos técnicos para substituição imediata.",
        },
      ],
    },
    why: {
      tag: "Por Que Escolher Shomer",
      title: "A alternativa moderna e eficiente",
      items: [
        {
          title: "Economia de até 65% no orçamento",
          desc: "Ao substituir ou complementar a vigilância presencial por totens virtuais, o custo mensal de segurança cai drasticamente.",
        },
        {
          title: "Controle absoluto e relatórios",
          desc: "A administração e os proprietários têm acesso a relatórios precisos na nuvem para saber exatamente quem entrou no prédio.",
        },
        {
          title: "Inviolabilidade técnica",
          desc: "Os operadores da central blindada de monitoramento não estão expostos a agressões, garantindo o acionamento imediato da polícia.",
        },
      ],
    },
    testimonials: {
      tag: "Clientes Satisfeitos",
      title: "O que dizem os administradores",
      list: [
        {
          name: "Patricia Gómez",
          role: "Administração Gómez & Associados",
          content: "Implementar Shomer Vision Pro num condomínio em Palermo permitiu reduzir os custos em 40% em três meses. Os vizinhos adaptaram-se instantaneamente ao acesso facial.",
        },
        {
          name: "Roberto F.",
          role: "Presidente do Conselho, Edifício Av. Santa Fe",
          content: "Tivemos problemas constantes com chaves magnéticas duplicadas por chaveiros do bairro. O reconhecimento facial eliminou os intrusos de vez. Excelente serviço.",
        },
        {
          name: "Marta Rodríguez",
          role: "Administradora de Condomínios em Belgrano",
          content: "Destaco o Módulo de Sistema Shabat. Em prédios com grande população ortodoxa, ter um sistema que respeite o Shabat sem descuidar do acesso dos demais moradores foi a chave.",
        },
      ],
    },
    faq: {
      tag: "Perguntas Frequentes",
      title: "Tudo o que o administrador pergunta",
      list: [
        {
          q: "O que acontece se o sistema falhar ou faltar internet?",
          a: "O sistema de acesso biométrico possui uma bateria de backup que mantém a operação por 6 horas em caso de queda de energia ou internet. Se o prédio exigir maior autonomia, nossos técnicos realizam visitas para substituir ou ampliar as baterias. A central de monitoramento possui protocolos de contingência ativos 24/7/365.",
        },
        {
          q: "Quem gerencia o cadastro e a exclusão de moradores?",
          a: "A Shomer cuida de tudo. O administrador notifica a alteração — mudança, novo morador, novo funcionário — e nós atualizamos o sistema. Sem trabalho manual para o condomínio, sem sistemas complexos para aprender a operar.",
        },
        {
          q: "Quanto tempo demora a instalação?",
          a: "A instalação demora entre 2 e 4 dias úteis na maioria dos casos. O tempo exato depende do tamanho do objetivo e da complexidade estrutural do edifício. Inclui configuração completa, testes de funcionamento e treinamento do administrador. Sem custos adicionais.",
        },
        {
          q: "O visitante precisa baixar algum aplicativo?",
          a: "Não. O visitante apenas escaneia o QR code do equipamento e acede diretamente pelo navegador do celular. Sem instalações, sem contas, sem fricção. Compatível com qualquer smartphone iOS ou Android.",
        },
        {
          q: "E se eu precisar abrir a porta em uma emergência em um feriado ou fim de semana?",
          a: "A central de monitoramento opera 24/7/365. Aberturas de emergência — técnico do elevador, reparo de bomba de água, bombeiros — são gerenciadas remotamente mediante autorização do administrador ou do conselho. Tudo fica registrado.",
        },
        {
          q: "Os dados dos moradores estão seguros?",
          a: "Toda a comunicação ocorre dentro do ecossistema Shomer, criptografada ponta a ponta. Não utilizamos redes externas nem expomos números privados. Os dados biométricos (Face ID) são processados e armazenados sob rigorosos protocolos de segurança na base operacional da Shomer.",
        },
      ],
    },
    contact: {
      tag: "Fazer Orçamento",
      title: "Vamos conversar sobre o seu prédio",
      desc: "Preencha seus dados e um especialista técnico da Shomer entrará em contato para avaliar sua infraestrutura sem compromisso.",
      name: "Nome Completo",
      email: "E-mail",
      phone: "Telefone / Celular",
      propType: "Tipo de Imóvel",
      message: "Mensagem / Consulta",
      send: "Enviar Mensagem",
      placeholderName: "Ex: João Silva",
      placeholderEmail: "Ex: joao@condominio.com",
      placeholderPhone: "Ex: 11 98765 4321",
      placeholderMessage: "Detalhe o número de apartamentos ou salas...",
      types: {
        edificio: "Edifício Residencial",
        empresa: "Escritório / Empresa",
        barrio: "Condomínio Fechado",
        hotel: "Hotel / Airbnb",
      },
      successMsg: "Recebemos sua solicitação! Entraremos em contato em breve.",
      submitting: "Enviando...",
    },
    footer: {
      desc: "A evolução da segurança residencial e corporativa. Ecossistemas integrados na nuvem com análises de inteligência artificial e monitoramento interativo.",
      navigation: "Navegação",
      legal: "Legal",
      rights: "Todos os direitos reservados.",
      address: "Buenos Aires, Argentina",
      privacy: "Políticas de Privacidade",
    },
    club: {
      tag: "Ativo",
      title: "Club Shomer",
      desc: "Descontos exclusivos, benefícios e bonificações para clientes e sócios. Tenha acesso antecipado às novidades da Shomer Security.",
      btn: "Conhecer Club Shomer →",
    },
    servicesPage: {
      backToHome: "← Voltar ao Início",
      residentialTitle: "Edifícios e Condomínios",
      corporateTitle: "Escritórios e Empresas",
      neighborhoodTitle: "Condomínios Fechados",
      hotelTitle: "Hotéis e Acomodações",
      residentialDesc: "Substituímos as fraquezas do esquema tradicional de vigilância física por um ecossistema híbrido que combina tecnologia de ponta e operadores atentos 24 horas por dia.",
      corporateDesc: "Otimização de controle de acessos, folha de ponto biométrica facial na nuvem para funcionários e proteção de salas de servidores restritas.",
      neighborhoodDesc: "Monitoramento perimetral integral e leitura rápida de placas na portaria de condomínios fechados com cancelas automatizadas.",
      hotelDesc: "Check-in autônomo e controle de acessos através de chaves digitais dinâmicas de alta rastreabilidade, ideal para aluguéis de curta temporada e hotéis.",
      militaryGrade: "Tecnologia de Grau Militar para o Seu Prédio",
      shabatTitle: "Sistema Shabat Integrado",
      shabatDesc: "Pensando nos costumes e necessidades religiosas da Comunidade Judaica, desenvolvemos uma solução tecnológica que permite a operação e o acesso de forma respeitosa durante o Shabat. O sistema biométrico e a automatização de abertura adaptam-se sob protocolos específicos para evitar a violação das regras do Shabat, mantendo o prédio totalmente protegido.",
      promoTitle: "Instalação 100% Bonificada",
      promoDesc: "Durante este mês, os equipamentos e a instalação da infraestrutura física para o seu condomínio são 100% bonificados. A Shomer Security fornece e instala os leitores, câmeras e porteiros em regime de comodato, sem custo inicial.",
      requirementsTitle: "Requisitos Técnicos",
      requirementsDesc: "Conexão à internet com IP público fixo (recomenda-se 100 Mbps de upload) e energia 220V. Os controles de acesso incluem sistema de UPS com 6 horas de autonomia contra quedas de energia.",
      supportTitle: "Suporte Técnico",
      supportDesc: "Monitoramento ativo e manutenção proativa do status dos dispositivos. Detectamos anomalias e enviamos técnicos sem necessidade de chamados.",
      customerTitle: "Atendimento ao Cliente",
      customerDesc: "Central de monitoramento ativa 24 horas por dia, 365 dias por ano. Respostas imediatas e coordenadas com as forças de segurança pública.",
      consultAdvisor: "Falar com um Assessor",
      reqQuote: "Solicitar Orçamento com Instalação Bonificada",
      endInsecurity: "O Fim das Chaves Físicas e da Insegurança",
      consorcioSecurityDesc: "Os condomínios tradicionais sofrem constantes brechas de segurança por chaves clonadas, porteiros distraídos e portões deixados abertos. A Shomer redefine a segurança ao colocar a validação de acesso na nuvem antes que as portas se abram fisicamente.",
      consorcioEndDesc: "Nossos dispositivos são à prova de vandalismo, enquanto nosso software oferece rastreamento total para moradores e administradores com registros em tempo real.",
      features: {
        biometric: "Reconhecimento Facial Inteligente",
        biometricDesc: "Acesso por Face ID com inteligência artificial. Tempo de resposta rápido (200ms) e alta segurança anti-sabotagem.",
        accessControl: "Controle de Acesso Total",
        accessControlDesc: "Autenticação por biometria, cartão RFID personalizado e sensores avançados contra intrusões ou alertas de porta aberta.",
        panicFinger: "Impressão Digital de Pânico",
        panicFingerDesc: "Permite registrar um dedo alternativo para enviar secretamente um alerta silencioso imediato à nossa central de monitoramento em caso de coação.",
        monitoring: "Televigilância e Integração de Totem",
        monitoringDesc: "Totem interativo com áudio bidirecional em tempo real, sirene de alta potência e operadores treinados atuando imediatamente.",
      },
    },
  },
  it: {

    common: {
      cta: "Richiedi Preventivo",
      loading: "Caricamento...",
      success: "Messaggio inviato con successo!",
      error: "Si è verificato un errore. Riprova.",
      learnMore: "Scopri di più",
      soon: "Prossimamente",
      emergency: "Emergenze 24/7",
      contactAdvisor: "Parla con un Consulente",
      requestProposal: "Richiedi Preventivo Agevolato",
    },
    navbar: {
      vision: "Linea Vision",
      totem: "Totem",
      services: "Servizi",
      pricing: "Prezzi",
      blog: "Blog",
      clients: "Clienti",
      club: "Club Shomer",
    },
        hero: {
        product: "Prodotto di Punta",
        title1: "L'evoluzione",
        title2: "del citofono.",
        desc: "Un sistema moderno que sostituisce il citofono tradizionale. Comunicazione intelligente, accesso senza chiavi e controllo totale dal tuo smartphone. Senza app. Senza download. Senza attriti.",
        bullet1Title: "Senza App. Senza Download.",
        bullet1Desc: "I visitatori scansionano il codice QR ed entrano direttamente dal browser dello smartphone. Senza installazioni, senza account. Funziona su qualsiasi cellulare.",
        bullet2Title: "Token JWT monouso",
        bullet2Desc: "Ogni accesso genera un token cifrato unico e valido per 5 minuti. Impossibile da copiare o riutilizzare.",
        "3dView": "3D INTERATTIVO",
        photo: "FOTO",
        activeMonitoring: "CENTRALE DI MONITORAGGIO 24/7 ATTIVA",
        heroTitle1: "La sicurezza",
        heroTitle2: "che non riposa mai.",
        heroDesc: "Controllo accessi intelligente, monitoramento in tempo real da operatori e un ecosistema tecnologico che protegge il tuo edificio in autonomia.",
        heroQuote: "Richiedi preventivo",
        heroProducts: "Vedi i prodotti",
        cctvLive: "CCTV LIVE",
        rec: "REGISTRAZIONE",
        sector: "SETTORE: INGRESSO PRINCIPALE",
        faceDetected: "VOLTO RILEVATO",
        latency: "LATENZA",
        cpu: "CPU HUB",
        links: "COLLEGAMENTI",
        tickerTitle: "REGISTRO IN TEMPO REALE",
        logEnc: "Collegamento cifrato stabilito con la Centrale Shomer",
        logDiag: "Autodiagnosi completa - Tutti i nodi OK",
        logLprReady: "LPR garage attiva - Scansione pronta",
        logFaceOk: "Accesso Facciale: Proprietario verificato alla porta 1",
        logRoundsOk: "Controllo ronde: Operatore verificato nel settore A",
        logPingOk: "Controllo ridondanza: Ping ottimale (12ms)",
        logLprOk: "LPR Ingresso: Targa rilevata e autorizzata",
        logCctvOk: "Telecamera HD perimetrale: Sincronizzazione WebRTC attiva",
        logModeOk: "Modalità intelligente attiva: Rilevamento perimetrale attivo"
    },
    stats: {
      over: "OLTRE",
      monitored: "EDIFICI MONITORATI",
      police: "INTERVENTI DELLA POLIZIA",
      avgTime: "MINUTI DI TEMPO MEDIO DI RISPOSTA",
      satisfaction: "SODDISFAZIONE DEI RESIDENTI",
      yearsExp: "Anni di esperienza",
      usersProt: "Utenti protetti",
      activeMon: "Monitoraggio attivo",
      hiddenCosts: "Costi nascosti",
    },
    problem: {
      tag: "Il problema di oggi",
      title1: "Il tuo edificio dipende",
      title2: "ancora da questo?",
      card1Title: "Citofoni obsoleti",
      card1Desc: "Sistemi superati, guasti continui, manutenzione che costa sempre più del previsto. Niente registri, nessun controllo reale.",
      card2Title: "Costi nascosti",
      card2Desc: "Manutenzione ricorrente, sostituzione dell'hardware, stipendi del custode notturno. Il costo reale è il doppio di quello che sembra.",
      card3Title: "Insicurezza reale",
      card3Desc: "Codici QR condivisi su WhatsApp, duplicati di chiavi, accessi non controllati. Chiunque può entrare se sa come fare.",
      footerText: "Lasciati alle spalle i sistemi tradizionali, insicuri e costosi da mantenere. C'è un modo migliore per proteggere il tuo edificio.",
    },
    vision: {
      tag: "Linea Vision",
      title: "Tecnologia che ridefinisce l'accesso",
      desc: "I nostri dispositivi intelligenti sostituiscono il citofono tradizionale con un nodo interattivo di sicurezza altamente durevole.",
      faceIdTitle: "Riconoscimento Facciale Face ID",
      faceIdDesc: "Validazione biometrica in 200ms. Impossibile da duplicare o trasferire.",
      rfidTitle: "Lettori RFID Sicuri",
      rfidDesc: "Tessere di prossimità crittografate per emergenze e servizi di supporto.",
      qrTitle: "Inviti tramite QR Dinamico",
      qrDesc: "Generazione di accessi temporanei per visitatori che scadono automaticamente.",
      intercomTitle: "Citofono Audio e Video",
      intercomDesc: "Videochiamata diretta ad alta definizione dall'ingresso allo smartphone del residente.",
      aiTitle: "Telecamera Intelligente con IA",
      aiDesc: "Elaborazione Edge per rilevare volti e comportamenti sospetti all'istante.",
    },
    totem: {
      tag: "Totem Intelligente",
      title: "Monitoraggio Remoto Attivo 24/7",
      desc: "Il vigilante virtuale è al tuo ingresso, ma si trova in una centrale blindata ad alta sicurezza, al sicuro da coazione.",
      bullet1: "Schermo interattivo con operatore in diretta 24 ore al giorno.",
      bullet2: "Audio bidirezionale e megafono ad alta potenza per dissuasione attiva.",
      bullet3: "Backup energetico tramite UPS che mantiene il totem acceso per 6 ore in caso di blackout.",
      bullet4: "Telecamere perimetrali con IA che avvisano l'operatore prima che qualcuno tocchi il cancello.",
    },
    segments: {
      tag: "Segmenti di Applicazione",
      title: "Soluzioni su misura per ogni esigenza",
      consorcios: "Edifici e Condomini",
      consorciosDesc: "Ecosistema di controllo accessi robusto per eliminare le chiavi fisiche negli edifici residenziali.",
      empresas: "Uffici e Aziende",
      empresasDesc: "Rilevazione presenze, gestione visitatori e protezione di aree aziendali riservate.",
      barrios: "Comunità Chiuse e Residence",
      barriosDesc: "Monitoraggio perimetrale intelligente, controllo delle sbarre veicolari e LPR ad alta velocità.",
      hoteles: "Hotel e Airbnb",
      hotelesDesc: "Gestione delle chiavi digitali senza reception, check-in autonomo e tracciabilità dei log.",
    },
    inframap: {
      tag: "Mappa delle Infrastrutture",
      title: "Monitoraggio che non dorme mai",
      desc: "La nostra rete collega ogni condominio a centrali di monitoraggio ridondanti tramite tunnel VPN cifrati.",
      nodes: "Nodi di Connessione",
      nodesDesc: "Nodi distribuiti per garantire bassa latenza e alta disponibilità dei flussi dati.",
      ops: "Operatori Online",
      opsDesc: "Monitoratori specializzati in sicurezza dissuasiva attiva che operano in contemporanea.",
      redundancy: "Ridondanza dei Canali",
      redundancyDesc: "Collegamenti simmetrici in fibra ottica, backup 4G LTE e alimentazione ininterrotta.",
    },
    sandbox: {
      tag: "Simulatore di Monitoraggio",
      title: "Prova la velocità di risposta",
      desc: "Interagisci con il pannello e simula allarmi in tempo real. Scopri come la nostra IA e gli operatori respingono le minacce all'istante.",
      liveFeed: "CCTV IN DIRETTA — INGRESSO PRINCIPALE",
      noAlarms: "CCTV online. In attesa di eventi...",
      simulateAlert: "SIMULA ALLARME DI SICUREZZA",
      simulating: "Simulazione evento...",
      resolved: "EVENTO RISOLTO",
      alertTypes: {
        lpr: "Lettura Targa Sospetta (LPR)",
        line: "Intruso Perimetrale (Attraversamento Linea IA)",
        panic: "Accesso con Impronta Digitale di Panico",
        open: "Allarme Porta Aperta Prolungato",
      },
      log: {
        lpr: "Rilevata targa nella lista nera: LPR identifica veicolo sospetto che si aggira.",
        line: "Rilevato attraversamento della linea sulla recinzione sinistra. Riconosciuto un essere umano.",
        panic: "L'utente ha inserito l'impronta alternativa. Avviato allarme di coazione silenzioso.",
        open: "Ingresso principale aperto per più di 120 secondi senza chiusura automatica.",
        monitoring: "L'operatore assume il controllo di audio bidirezionale e telecamere...",
        resolvedLog: "Evento registrato e chiuso. Notificate le forze dell'ordine.",
      },
    },
    pricing: {
      tag: "Piani di Servizio",
      title: "Costi chiari e pianificabili",
      desc: "Canoni mensili fissi pensati per ottimizzare il bilancio del condominio senza sorprese.",
      monthly: "Canone mensile",
      ars: "ARS",
      usd: "USD",
      perMonth: "/mese",
      plans: {
        basic: {
          name: "Linea Vision",
          desc: "Accesso biometrico autonomo ideale per condomini di piccole dimensioni.",
        },
        standard: {
          name: "Ecosistema Totem",
          desc: "Vigilanza virtuale interattiva e controllo accessi residenziale.",
        },
        premium: {
          name: "Shomer Enterprise",
          desc: "Massima sicurezza per grandi complessi residenziali e garage aziendali.",
        },
      },
      features: {
        support: "Supporto tecnico e manutenzione preventiva 24/7",
        app: "Pannello amministratore cloud senza costi aggiuntivi",
        jwt: "Inviti dinamici tramite QR (senza download)",
        monitoring: "Monitoraggio attivo da centrale specializzata",
        shabat: "Configurazione del Modulo Sistema Shabat",
        patents: "Rilevamento targhe veicolari (LPR) illimitato",
        ai: "Analisi IA per il rilevamento perimetrale attivo",
        ups: "Backup tramite UPS ad alta autonomia (6 ore)",
        unlimited: "Aggiunta e rimozione di utenti illimitata",
      },
    },
    cpq: {
      tag: "Configuratore CPQ",
      title: "Disegna il Tuo Ecosistema di Sicurezza",
      desc: "Seleziona il tuo contesto e personalizza i dispositivi e le funzioni IA. Ottieni subito una stima mensile trasparente preliminare.",
      axonometric: "Vista Assonometrica",
      aiActive: "IA ATTIVA",
      environments: {
        edificio: "Edificio Residenziale",
        empresa: "Ufficio / Azienda",
        barrio: "Residence / Comunità Chiusa",
        hotel: "Hotel / Airbnb",
      },
      hardware: {
        title: "Dispositivi Hardware (Comodato d'Uso)",
        totemName: "Totem Intelligente Shomer",
        totemDesc: "Audio bidirezionale e schermo con operatore in diretta 24/7.",
        facialName: "Lettore Facciale Face ID con IA",
        facialDesc: "Accesso biometrico rapido senza chiavi fisiche (200ms).",
        camarasName: "Telecamere di Sicurezza HD (x4)",
        camarasDesc: "Obiettivi ad alta definizione con visione notturna e notturna.",
        barreraName: "Centralina Cancello / Sbarra",
        barreraDesc: "Apertura elettronica remota e controllo peer-to-peer autonomo.",
      },
      software: {
        title: "Moduli Software e Intelligenza Artificiale",
        lineaName: "Attraversamento Linea Intelligente (IA)",
        lineaDesc: "Rilevamento intrusi perimetrale e avvisi istantanei.",
        patentesName: "Riconoscimento Targhe (LPR)",
        patentesDesc: "Apertura autonoma tramite lettura delle targhe sull'Edge.",
        horariosName: "Rilevazione Presenze (HR)",
        horariosDesc: "Report in cloud e storico degli accessi per ciascuna persona.",
        shabatName: "Modulo Sistema Shabat",
        shabatDesc: "Protocollo adattivo rispettoso per la comunità ebraica.",
      },
      summary: {
        title: "Riepilogo Configurazione",
        envLabel: "Ambiente selezionato",
        hwLabel: "Hardware in comodato",
        swLabel: "Moduli software attivi",
        items: "voci",
        monthlyTotal: "Canone Mensile Stimato",
        arsSuffix: "ARS /mese",
        usdSuffix: "USD ca. /mese",
        disclaimer: "*I valori espressi sono preliminari, escludono le tasse e sono soggetti a sopralluogo tecnico sull'infrastruttura di cablaggio esistente.",
        quoteBtn: "Richiedi Preventivo per questo Progetto",
      },
    },
    podcast: {
      tag: "Podcast Shomer",
      title: "La Sicurezza Spiegata",
      desc: "Ascolta i nostri episodi dedicati a come funziona la sorveglianza virtuale e la verità sulla biometria.",
      play: "Riproduci",
      pause: "Pausa",
      listening: "In ascolto",
      downloadTranscript: "Scarica la Trascrizione Completa (PDF)",
      episodeTitle: "Episodio #1 — L'evoluzione del controllo accessi a Buenos Aires",
      episodeDesc: "Analizziamo come la biometria facciale e l'IoT risolvono il problema della duplicazione delle chiavi magnetiche nei condomini.",
    },
    includes: {
      tag: "Cosa Comprende Shomer",
      title: "Un servizio chiavi in mano senza costi nascosti",
      items: [
        {
          title: "Hardware in comodato senza investimento iniziale",
          desc: "Installiamo i lettori biometrici e l'infrastruttura di telecamere senza costi per il condominio tramite abbonamento mensile.",
        },
        {
          title: "Configurazione e attivazione residenti",
          desc: "Ci occupiamo noi del caricamento iniziale e dei database di accesso. Nuovi inserimenti ed eliminazioni eseguiti in pochi minuti.",
        },
        {
          title: "Manutenzione proattiva sul posto",
          desc: "Se un dispositivo segnala anomalie ai sensori o alla batteria, inviamo immediatamente tecnici per la sostituzione.",
        },
      ],
    },
    why: {
      tag: "Perché Scegliere Shomer",
      title: "L'alternativa moderna ed efficiente",
      items: [
        {
          title: "Risparmio di budget fino al 65%",
          desc: "Sostituendo o integrando la vigilanza fisica con i totem virtuali, il costo di sicurezza mensile diminuisce drasticamente.",
        },
        {
          title: "Controllo assoluto e tracciabilità",
          desc: "L'amministrazione e i proprietari dispongono di report dettagliati in cloud per sapere esattamente chi è entrato.",
        },
        {
          title: "Inviolabilità tecnica",
          desc: "Gli operatori nella centrale blindata di monitoraggio non possono essere aggrediti, garantendo l'allarme immediato alle forze dell'ordine.",
        },
      ],
    },
    testimonials: {
      tag: "Clienti Soddisfatti",
      title: "Cosa dicono gli amministratori",
      list: [
        {
          name: "Patricia Gómez",
          role: "Amministrazione Gómez & Asociados",
          content: "L'installazione di Shomer Vision Pro in un residence a Palermo ci ha permesso di abbattere le spese condominiali del 40% in tre mesi. Residenti entusiasti dell'accesso facciale.",
        },
        {
          name: "Roberto F.",
          role: "Presidente del Consiglio di Condominio, St. Fe Ave Building",
          content: "Avevamo problemi continui con le chiavi magnetiche clonate nei negozi di ferramenta locali. Il riconoscimento facciale ha azzerato le intrusioni. Ottimo servizio.",
        },
        {
          name: "Marta Rodríguez",
          role: "Amministratrice di Condomini a Belgrano",
          content: "Evidenzio il Modulo Sistema Shabat. Nei condomini con alta percentuale di residenti ortodossi, era fondamentale un sistema che rispettasse il Shabat senza compromettere gli accessi degli altri.",
        },
      ],
    },
    faq: {
      tag: "Domande Frequenti",
      title: "Tutto ciò che l'amministratore si chiede",
      list: [
        {
          q: "Cosa succede se il sistema si guasta o manca internet?",
          a: "Il sistema di accesso biometrico dispone di una batteria tampone che garantisce 6 ore di autonomia in caso di blackout o caduta della connessione internet. In caso di necessità, i nostri tecnici provvedono a potenziare le batterie. La centrale di monitoraggio ha protocolli attivi 24/7/365.",
        },
        {
          q: "Chi gestisce l'inserimento e la rimozione dei residenti?",
          a: "Shomer gestisce tutto il flusso. L'amministratore notifica la variazione — trasloco, nuovo inquilino, dipendente — e noi aggiorniamo il sistema. Nessuna operazione manuale per voi.",
        },
        {
          q: "Quanto dura l'installazione?",
          a: "L'installazione richiede dai 2 ai 4 giorni lavorativi nella maggior parte dei casi. I tempi precisi dipendono dalla dimensione dell'immobile e dalla complessità dell'infrastruttura esistente. Include configurazione e formazione.",
        },
        {
          q: "Il visitatore deve scaricare un'app?",
          a: "No. Il visitatore inquadra il QR code all'ingresso ed entra direttamente tramite il browser del suo cellulare. Senza registrazioni, senza account, senza alcuna frizione. Compatibile con iOS e Android.",
        },
        {
          q: "Come posso aprire il cancello per un'emergenza nei giorni festivi o nei weekend?",
          a: "La centrale di monitoraggio lavora 24/7/365. Le aperture di emergenza (manutenzione ascensori, vigili del fuoco, emergenza idrica) vengono gestite da remoto previa autorizzazione del consiglio o dell'amministratore. Tutto viene registrato.",
        },
        {
          q: "I dati dei residenti sono al sicuro?",
          a: "Tutta la comunicazione all'interno dell'ecosistema Shomer è cifrata end-to-end. Non utilizziamo reti pubbliche esterne né condividiamo contatti privati. I dati biometrici (Face ID) sono custoditi sotto severi protocolli nella nostra sede operativa.",
        },
      ],
    },
    contact: {
      tag: "Richiedi Preventivo",
      title: "Parliamo del tuo edificio",
      desc: "Inserisci i tuoi dati e un tecnico specializzato Shomer ti ricontatterà per valutare la tua infrastruttura fisica senza alcun impegno.",
      name: "Nome Completo",
      email: "Indirizzo Email",
      phone: "Telefono / Cellulare",
      propType: "Tipo di Immobile",
      message: "Messaggio / Richiesta",
      send: "Invia Richiesta",
      placeholderName: "Es: Mario Rossi",
      placeholderEmail: "Es: mario@condominio.it",
      placeholderPhone: "Es: 333 1234567",
      placeholderMessage: "Dettaglia il numero di appartamenti o uffici...",
      types: {
        edificio: "Edificio Residenziale",
        empresa: "Ufficio / Azienda",
        barrio: "Residence / Villa",
        hotel: "Hotel / Airbnb",
      },
      successMsg: "Richiesta ricevuta! Ti contatteremo al più presto.",
      submitting: "Invio in corso...",
    },
    footer: {
      desc: "L'evoluzione della sicurezza residenziale e aziendale. Ecosistemi integrati in cloud con analisi di intelligenza artificiale e monitoraggio interattivo.",
      navigation: "Navigazione",
      legal: "Note Legali",
      rights: "Tutti i diritti riservati.",
      address: "Buenos Aires, Argentina",
      privacy: "Informativa sulla Privacy",
    },
    club: {
      tag: "Attivo",
      title: "Club Shomer",
      desc: "Sconti esclusivi, vantaggi e promozioni riservate a clienti e soci. Accedi in anteprima alle novità di Shomer Security.",
      btn: "Scopri Club Shomer →",
    },
    servicesPage: {
      backToHome: "← Torna alla Home",
      residentialTitle: "Edifici e Condomini",
      corporateTitle: "Uffici e Aziende",
      neighborhoodTitle: "Residence e Ville",
      hotelTitle: "Hotel e Alloggi",
      residentialDesc: "Sostituiamo le debolezze della sorveglianza fisica tradizionale con un ecosistema ibrido che unisce tecnologia all'avanguardia e operatori attivi 24 ore su 24.",
      corporateDesc: "Ottimizzazione del controllo accessi, rilevazione presenze in cloud tramite biometria facciale e protezione di aree server riservate.",
      neighborhoodDesc: "Monitoraggio perimetrale completo e lettura rapida delle targhe ai varchi di residence e aree protette con sbarre automatiche.",
      hotelDesc: "Check-in autonomo e controllo degli accessi tramite chiavi digitali dinamiche ad alta tracciabilità, ideale per hotel e affitti brevi.",
      militaryGrade: "Tecnologia di Grado Militare per il tuo Edificio",
      shabatTitle: "Sistema Shabat Integrato",
      shabatDesc: "Nel rispetto dei costumi e delle esigenze religiose della comunità ebraica, abbiamo sviluppato una soluzione tecnologica che consente un accesso rispettoso durante lo Shabbat. Il sistema biometrico e le automazioni si adattano tramite protocolli specifici per evitare violazioni delle regole dello Shabbat, garantendo al contempo la massima sicurezza.",
      promoTitle: "Installazione Gratuita al 100%",
      promoDesc: "Questo mese, le apparecchiature e l'installazione dell'infrastruttura fisica per il tuo condominio sono interamente gratuite. Shomer Security fornisce e installa lettori, telecamere e citofoni in comodato d'uso, senza costi iniziali.",
      requirementsTitle: "Requisiti Tecnici",
      requirementsDesc: "Connessione internet con IP pubblico statico (consigliati 100 Mbps in upload) e alimentazione 220V. I dispositivi sono equipaggiati con UPS che assicura 6 ore di autonomia in caso di blackout.",
      supportTitle: "Supporto Tecnico",
      supportDesc: "Monitoraggio attivo e manutenzione preventiva dello stato dei dispositivi. Rileviamo anomalies e inviamo tecnici prima ancora che tu debba segnalarlo.",
      customerTitle: "Servizio Clienti",
      customerDesc: "Centrale operativa attiva 24 ore al giorno, 365 giorni all'anno. Risposte coordinate e tempestive con le forze dell'ordine locali.",
      consultAdvisor: "Parla con un Consulente",
      reqQuote: "Richiedi Preventivo Agevolato",
      endInsecurity: "La Fine delle Chiavi Fisiche e dell'Insicurezza",
      consorcioSecurityDesc: "I condomini tradizionali soffrono costanti violazioni a causa di duplicati non autorizzati delle chiavi, portieri distratti e cancelli lasciati aperti. Shomer ridefinisce la sicurezza introducendo la verifica degli accessi in cloud prima dell'apertura fisica dei varchi.",
      consorcioEndDesc: "La nostra hardware è progettata per resistere ai tentativi de sabotaggio, mentre il software offre la massima tracciabilità a inquilini e amministratori con registri storici dettagliati.",
      features: {
        biometric: "Riconoscimento Facciale Intelligente",
        biometricDesc: "Accesso con Face ID potenziato da intelligenza artificiale. Velocità di riconoscimento di 200ms e massima sicurezza anti-manomissione.",
        accessControl: "Controllo Accessi Integrato",
        accessControlDesc: "Autenticazione tramite impronta digitale, badge RFID personalizzati e sensori avanzati contro intrusioni o allarmi 'porta aperta'.",
        panicFinger: "Impronta di Panico",
        panicFingerDesc: "Consente di registrare un dito alternativo per inviare silenziosamente una chiamata di emergenza alla nostra centrale in caso di coazione.",
        monitoring: "Televigilanza e Integrazione Totem",
        monitoringDesc: "Totem interattivo con audio bidirezionale in tempo reale, sirena ad alta potenza e monitoraggio attivo degli operatori pronti a intervenire.",
      },
    },
  },
};
