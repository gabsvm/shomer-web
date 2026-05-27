"use client";

import { useState, useEffect } from "react";
import { FadeUp } from "./FadeUp";
import { Shield, Radio, RefreshCw, Activity, Volume2 } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

interface LogEvent {
  id: string;
  time: string;
  type: "info" | "warning" | "success" | "danger";
  message: string;
}

const localSandboxExtra: Record<Locale, {
  aiLatency: string;
  battery: string;
  localSiren: string;
  sirenOn: string;
  sirenOff: string;
  camAlertLive: string;
  camLive: string;
  hallEntrada: string;
  cocheraLpr: string;
  cctvHall: string;
  cctvLpr: string;
  cctvEmergency: string;
  cctvPrimaryLink: string;
  faceDetected: string;
  idResidente: string;
  biometriaOk: string;
  accesoPermitido: string;
  vehiculoIdentificado: string;
  lprZoom: string;
  patente: string;
  registroAutorizado: string;
  portonAbriendo: string;
  lineaViolada: string;
  objetoNoIdentificado: string;
  tipoMerodeador: string;
  tiempoPermanencia: string;
  disuasionActivada: string;
  presenciaAnomala: string;
  seguimientoActivo: string;
  coberturaVirtual: string;
  altavozActivo: string;
  alertaIntromision: string;
  helpEmergency: string;
  helpNormal: string;
  bitacoraOperativa: string;
  restablecerSimulador: string;
  simularAlerta: string;
  limpiarBitacora: string;
  clearLogMsg: string;
  logMsg1: string;
  logMsg2: string;
  logMsg3: string;
  logMsg4: string;
  genMsg1: string;
  genMsg2: string;
  genMsg3: string;
  genMsg4: string;
  genMsg5: string;
  alarmOffMsg: string;
  alarmOnMsg1: string;
  alarmOnMsg2: string;
  alarmOnMsg3: string;
}> = {
  es: {
    aiLatency: "Latencia AI",
    battery: "Batería",
    localSiren: "Sirena Local",
    sirenOn: "Encendida",
    sirenOff: "Apagada",
    camAlertLive: "CÁMARA: ALERTA DE INTROMISIÓN EN VIVO",
    camLive: "CÁMARA 0{num} - EN VIVO",
    hallEntrada: "Hall Entrada",
    cocheraLpr: "Cochera LPR",
    cctvHall: "CAM 01 - HALL ENTRADA",
    cctvLpr: "CAM 02 - COCHERA LPR",
    cctvEmergency: "ESTADO: EMERGENCIA ACTIVA",
    cctvPrimaryLink: "LINK: PRIMARIO FIBRA",
    faceDetected: "ROSTRO DETECTADO",
    idResidente: "ID: RESIDENTE (4° B)",
    biometriaOk: "BIOMETRÍA: OK [98.7%]",
    accesoPermitido: "ACCESO: PERMITIDO",
    vehiculoIdentificado: "VEHÍCULO IDENTIFICADO",
    lprZoom: "LPR ZOOM ANALYTICS",
    patente: "PATENTE: B-XY 7890",
    registroAutorizado: "REGISTRO: AUTORIZADO",
    portonAbriendo: "PORTÓN: ABRIENDO...",
    lineaViolada: "LÍNEA PERIMETRAL VIOLADA",
    objetoNoIdentificado: "CRÍTICO: OBJETO NO IDENTIFICADO",
    tipoMerodeador: "TIPO: MERODEADOR",
    tiempoPermanencia: "TIEMPO PERMANENCIA: 14s",
    disuasionActivada: "DISUASIÓN AUDIBLE ACTIVADA",
    presenciaAnomala: "PRESENCIA ANÓMALA 02",
    seguimientoActivo: "SEGUIMIENTO ACTIVO",
    coberturaVirtual: "COBERTURA VIRTUAL: 100%",
    altavozActivo: "ALTAVOZ DISUASIVO SHOMER ACTIVO",
    alertaIntromision: "ALERTA DE INTROMISIÓN - ACCIÓN OPERATIVA",
    helpEmergency: "Simulación: Operador interactuando por audio bidireccional y despachando patrulla de apoyo.",
    helpNormal: "El algoritmo perimetral local analiza e identifica peatones y patentes de forma instantánea.",
    bitacoraOperativa: "Bitácora Operativa",
    restablecerSimulador: "Restablecer Simulador",
    simularAlerta: "Simular Alerta de Intrusión",
    limpiarBitacora: "Limpiar Bitácora",
    clearLogMsg: "Historial de bitácora vaciado. Recarga de sensores activa.",
    logMsg1: "Conexión encriptada establecida con Hub Buenos Aires",
    logMsg2: "Sistema LPR: Ingreso vehicular autorizado (Patente: B-XY 7890)",
    logMsg3: "Acceso Facial: Juan González (Propietario 4° B) - Rostro validado 98.7%",
    logMsg4: "Autochequeo de seguridad perimetral: Todos los nodos activos",
    genMsg1: "Acceso Facial: Residente ingresando por Entrada Principal",
    genMsg2: "Control de rondas: Operador virtual verificó zona perimetral norte",
    genMsg3: "Sensor de presencia: Movimiento detectado en zona de amenities (bajo umbral)",
    genMsg4: "Autochequeo: Enlace de fibra primaria activo y redundante",
    genMsg5: "Apertura remota de portón por solicitud del Propietario (Cochera)",
    alarmOffMsg: "Alarma desactivada por operador autorizado. Retorno a estado normal.",
    alarmOnMsg1: "CRÍTICO: Alerta de pánico activada desde terminal web",
    alarmOnMsg2: "Audio Disuasivo: Transmitiendo advertencia por altoparlantes",
    alarmOnMsg3: "Operador Shomer ID 408 tomando control bidireccional en vivo",
  },
  en: {
    aiLatency: "AI Latency",
    battery: "Battery",
    localSiren: "Local Siren",
    sirenOn: "Active",
    sirenOff: "Inactive",
    camAlertLive: "CAMERA: LIVE INTRUSION ALERT",
    camLive: "CAMERA 0{num} - LIVE",
    hallEntrada: "Entrance Hall",
    cocheraLpr: "Garage LPR",
    cctvHall: "CAM 01 - ENTRANCE HALL",
    cctvLpr: "CAM 02 - GARAGE LPR",
    cctvEmergency: "STATUS: ACTIVE EMERGENCY",
    cctvPrimaryLink: "LINK: PRIMARY FIBER",
    faceDetected: "FACE DETECTED",
    idResidente: "ID: RESIDENT (Apt 4B)",
    biometriaOk: "BIOMETRICS: OK [98.7%]",
    accesoPermitido: "ACCESS: ALLOWED",
    vehiculoIdentificado: "VEHICLE IDENTIFIED",
    lprZoom: "LPR ZOOM ANALYTICS",
    patente: "PLATE: B-XY 7890",
    registroAutorizado: "RECORD: AUTHORIZED",
    portonAbriendo: "GATE: OPENING...",
    lineaViolada: "PERIMETER LINE VIOLATED",
    objetoNoIdentificado: "CRITICAL: UNIDENTIFIED OBJECT",
    tipoMerodeador: "TYPE: LOITERER",
    tiempoPermanencia: "DWELL TIME: 14s",
    disuasionActivada: "AUDIBLE DETERRENCE ACTIVE",
    presenciaAnomala: "ANOMALOUS PRESENCE 02",
    seguimientoActivo: "ACTIVE TRACKING",
    coberturaVirtual: "VIRTUAL COVERAGE: 100%",
    altavozActivo: "SHOMER DETERRENT SPEAKER ACTIVE",
    alertaIntromision: "INTRUSION ALERT - OPERATIONAL ACTION",
    helpEmergency: "Simulation: Operator interacting via two-way audio and dispatching support patrol.",
    helpNormal: "The local perimeter algorithm analyzes and identifies pedestrians and plates instantly.",
    bitacoraOperativa: "Operations Log",
    restablecerSimulador: "Reset Simulator",
    simularAlerta: "Simulate Intrusion Alert",
    limpiarBitacora: "Clear Log",
    clearLogMsg: "Log history cleared. Sensor reload active.",
    logMsg1: "Encrypted connection established with Hub Buenos Aires",
    logMsg2: "LPR System: Authorized vehicle entry (Plate: B-XY 7890)",
    logMsg3: "Facial Access: Juan Gonzalez (Owner 4B) - Face validated 98.7%",
    logMsg4: "Perimeter security self-check: All nodes active",
    genMsg1: "Facial Access: Resident entering through Main Entrance",
    genMsg2: "Rounds control: Virtual operator verified north perimeter zone",
    genMsg3: "Presence sensor: Motion detected in amenities area (below threshold)",
    genMsg4: "Self-check: Primary fiber link active and redundant",
    genMsg5: "Remote gate opening requested by Owner (Garage)",
    alarmOffMsg: "Alarm deactivated by authorized operator. Return to normal state.",
    alarmOnMsg1: "CRITICAL: Panic alert triggered from web terminal",
    alarmOnMsg2: "Deterrent Audio: Broadcasting warning over loudspeakers",
    alarmOnMsg3: "Shomer Operator ID 408 taking live two-way control",
  },
  he: {
    aiLatency: "עכבת בינה מלאכותית",
    battery: "סוללה",
    localSiren: "סירנה מקומית",
    sirenOn: "פעילה",
    sirenOff: "כבויה",
    camAlertLive: "מצלמה: התרעת פריצה בשידור חי",
    camLive: "מצלמה 0{num} - שידור חי",
    hallEntrada: "לובי כניסה",
    cocheraLpr: "חניון LPR",
    cctvHall: "מצלמה 01 - לובי כניסה",
    cctvLpr: "מצלמה 02 - חניון LPR",
    cctvEmergency: "מצב: חירום פעיל",
    cctvPrimaryLink: "קישור: סיב ראשי",
    faceDetected: "פנים זוהו",
    idResidente: "מזהה: תושב (דירה 4ב)",
    biometriaOk: "ביומטריה: תקין [98.7%]",
    accesoPermitido: "גישה: מאושרת",
    vehiculoIdentificado: "רכב זוהה",
    lprZoom: "אנליזת LPR מורחבת",
    patente: "לוחית: B-XY 7890",
    registroAutorizado: "רישום: מורשה",
    portonAbriendo: "שער: נפתח...",
    lineaViolada: "חציית קו היקפי זוהתה",
    objetoNoIdentificado: "קריטי: אובייקט לא מזוהה",
    tipoMerodeador: "סוג: משוטט",
    tiempoPermanencia: "זמן שהייה: 14 שניות",
    disuasionActivada: "הרתעה קולית פעילה",
    presenciaAnomala: "נוכחות חריגה 02",
    seguimientoActivo: "מעקב פעיל",
    coberturaVirtual: "כיסוי וירטואלי: 100%",
    altavozActivo: "רמקול הרתעה שומר פעיל",
    alertaIntromision: "התרעת חדירה - פעולה מבצעית",
    helpEmergency: "סימולציה: מפעיל מתקשר באמצעות שמע דו-כיווני ומזניק סיור תמיכה.",
    helpNormal: "האלגוריתם ההיקפי המקומי מנתח ומזהה הולכי רגל ולוחיות רישוי באופן מיידי.",
    bitacoraOperativa: "יומן מבצעי",
    restablecerSimulador: "איפוס סימולטור",
    simularAlerta: "סמל התרעת פריצה",
    limpiarBitacora: "נקה יומן",
    clearLogMsg: "היסטוריית היומן נוקתה. טעינת חיישנים פעילה.",
    logMsg1: "חיבור מוצפן הוקם עם מרכז בואנוס איירס",
    logMsg2: "מערכת LPR: כניסת רכב מורשית (לוחית: B-XY 7890)",
    logMsg3: "גישת פנים: חואן גונזלס (בעלים 4ב) - פנים אומתו ב-98.7%",
    logMsg4: "בדיקה עצמית של אבטחה היקפית: כל הצמתים פעילים",
    genMsg1: "גישת פנים: תושב נכנס דרך הכניסה הראשית",
    genMsg2: "בקרת סיורים: מפעיל וירטואלי אימת את האזור ההיקפי הצפוני",
    genMsg3: "חיישן נוכחות: תנועה זוהתה באזור השירותים המשותפים (מתחת לסף)",
    genMsg4: "בדיקה עצמית: חיבור סיב אופטי ראשי פעיל ויתיר",
    genMsg5: "פתיחת שער מרחוק לבקשת הבעלים (חניון)",
    alarmOffMsg: "האזעקה נוטרלה על ידי מפעיל מורשה. חזרה למצב רגיל.",
    alarmOnMsg1: "קריטי: התרעת פאניקה הופעלה ממסוף האינטרנט",
    alarmOnMsg2: "שמע הרתעה: משדר אזהרה ברמקולים",
    alarmOnMsg3: "מפעיל שומר מספר 408 לוקח שליטה דו-כיוונית בשידור חי",
  },
  de: {
    aiLatency: "KI-Latenz",
    battery: "Batterie",
    localSiren: "Lokale Sirene",
    sirenOn: "Eingeschaltet",
    sirenOff: "Ausgeschaltet",
    camAlertLive: "KAMERA: LIVE-EINDRINGALARM",
    camLive: "KAMERA 0{num} - LIVE",
    hallEntrada: "Eingangshalle",
    cocheraLpr: "Garage LPR",
    cctvHall: "CAM 01 - EINGANGSHALLE",
    cctvLpr: "CAM 02 - GARAGE LPR",
    cctvEmergency: "STATUS: AKTIVER NOTFALL",
    cctvPrimaryLink: "LINK: PRIMÄRE GLASFASER",
    faceDetected: "GESICHT ERKANNT",
    idResidente: "ID: BEWOHNER (Apt 4B)",
    biometriaOk: "BIOMETRIE: OK [98.7%]",
    accesoPermitido: "ZUGANG: ERLAUBT",
    vehiculoIdentificado: "FAHRZEUG IDENTIFIZIERT",
    lprZoom: "LPR ZOOM ANALYTICS",
    patente: "KENNZEICHEN: B-XY 7890",
    registroAutorizado: "REGISTRIERUNG: AUTORISIERT",
    portonAbriendo: "TOR: ÖFFNET...",
    lineaViolada: "PERIMETERLINIE VERLETZT",
    objetoNoIdentificado: "KRITISCH: UNBEKANNTES OBJEKT",
    tipoMerodeador: "TYP: LANDSTREICHER",
    tiempoPermanencia: "VERWEILZEIT: 14s",
    disuasionActivada: "HÖRBARE ABSCHRECKUNG AKTIV",
    presenciaAnomala: "ANOMALE PRÄSENZ 02",
    seguimientoActivo: "AKTIVE VERFOLGUNG",
    coberturaVirtual: "VIRTUELLE ABDECKUNG: 100%",
    altavozActivo: "ABSOHRECKENDER LAUTSPRECHER AKTIV",
    alertaIntromision: "EINDRINGALARM - OPERATIVER EINSATZ",
    helpEmergency: "Simulation: Operator interagiert über Zwei-Wege-Audio und schickt Unterstützung.",
    helpNormal: "Der lokale Perimeter-Algorithmus analysiert und identifiziert Personen und Kennzeichen sofort.",
    bitacoraOperativa: "Betriebsprotokoll",
    restablecerSimulador: "Simulator zurücksetzen",
    simularAlerta: "Eindringalarm simulieren",
    limpiarBitacora: "Protokoll löschen",
    clearLogMsg: "Protokollverlauf gelöscht. Sensor-Reload aktiv.",
    logMsg1: "Verschlüsselte Verbindung mit Hub Buenos Aires hergestellt",
    logMsg2: "LPR-System: Autorisierte Fahrzeugzufahrt (Kennzeichen: B-XY 7890)",
    logMsg3: "Gesichtserkennung: Juan Gonzalez (Eigentümer 4B) - Gesicht validiert 98.7%",
    logMsg4: "Perimetersicherheits-Selbsttest: Alle Knoten aktiv",
    genMsg1: "Gesichtserkennung: Bewohner betritt Haupteingang",
    genMsg2: "Rundenkontrolle: Virtueller Operator hat nördliche Perimeterzone überprüft",
    genMsg3: "Präsenzsensor: Bewegung im Amenities-Bereich erkannt (unter Grenzwert)",
    genMsg4: "Selbsttest: Primäre Glasfaserverbindung aktiv und redundant",
    genMsg5: "Fernöffnung des Tores auf Anfrage des Eigentümers (Garage)",
    alarmOffMsg: "Alarm durch autorisierten Operator deaktiviert. Rückkehr zum Normalzustand.",
    alarmOnMsg1: "KRITISCH: Panikalarm vom Webterminal ausgelöst",
    alarmOnMsg2: "Abschreckendes Audio: Warnung über Lautsprecher übertragen",
    alarmOnMsg3: "Shomer-Operator ID 408 übernimmt Live-Zwei-Wege-Kontrolle",
  },
  ru: {
    aiLatency: "Задержка ИИ",
    battery: "Батарея",
    localSiren: "Локальная сирена",
    sirenOn: "Включена",
    sirenOff: "Выключена",
    camAlertLive: "КАМЕРА: ТРЕВОГА ВТОРЖЕНИЯ В ЖИВОМ ЭФИРЕ",
    camLive: "КАМЕРА 0{num} - В ЭФИРЕ",
    hallEntrada: "Вестибюль",
    cocheraLpr: "Гараж LPR",
    cctvHall: "КАМЕРА 01 - ВЕСТИБЮЛЬ",
    cctvLpr: "КАМЕРА 02 - ГАРАЖ LPR",
    cctvEmergency: "СТАТУС: АКТИВНАЯ ЧС",
    cctvPrimaryLink: "СВЯЗЬ: ОСНОВНОЕ ВОЛОКНО",
    faceDetected: "ЛИЦО ОБНАРУЖЕНО",
    idResidente: "ID: РЕЗИДЕНТ (Кв 4B)",
    biometriaOk: "БИОМЕТРИЯ: ОК [98.7%]",
    accesoPermitido: "ДОСТУП: РАЗРЕШЕН",
    vehiculoIdentificado: "АВТОМОБИЛЬ ИДЕНТИФИЦИРОВАН",
    lprZoom: "ZOOM АНАЛИТИКА LPR",
    patente: "НОМЕР: B-XY 7890",
    registroAutorizado: "РЕГИСТРАЦИЯ: РАЗРЕШЕНА",
    portonAbriendo: "ВОРОТА: ОТКРЫВАЮТСЯ...",
    lineaViolada: "НАРУШЕНИЕ ПЕРИМЕТРА",
    objetoNoIdentificado: "КРИТИЧЕСКИ: НЕИЗВЕСТНЫЙ ОБЪЕКТ",
    tipoMerodeador: "ТИП: ПОДОЗРИТЕЛЬНЫЙ",
    tiempoPermanencia: "ВРЕМЯ НАХОЖДЕНИЯ: 14с",
    disuasionActivada: "ЗВУКОВОЕ ОТПУГИВАНИЕ АКТИВИРОВАНО",
    presenciaAnomala: "ПОДОЗРИТЕЛЬНОЕ ПРИСУТСТВИЕ 02",
    seguimientoActivo: "АКТИВНОЕ СЛЕЖЕНИЕ",
    coberturaVirtual: "ВИРТУАЛЬНОЕ ПОКРЫТИЕ: 100%",
    altavozActivo: "ГРОМКОГОВОРИТЕЛЬ ШОМЕР АКТИВЕН",
    alertaIntromision: "ТРЕВОГА ВТОРЖЕНИЯ - ОПЕРАТИВНОЕ ДЕЙСТВИЕ",
    helpEmergency: "Симуляция: Оператор общается по двусторонней связи и направляет патруль поддержки.",
    helpNormal: "Локальный алгоритм периметра мгновенно анализирует и идентифицирует пешеходов и номера.",
    bitacoraOperativa: "Оперативный журнал",
    restablecerSimulador: "Сбросить симулятор",
    simularAlerta: "Имитировать тревогу",
    limpiarBitacora: "Очистить журнал",
    clearLogMsg: "История журнала очищена. Перезагрузка датчиков активна.",
    logMsg1: "Установлено зашифрованное соединение с узлом Буэнос-Айреса",
    logMsg2: "Система LPR: Разрешен въезд ТС (Номер: B-XY 7890)",
    logMsg3: "Доступ по лицу: Хуан Гонсалес (Владелец 4B) - Лицо подтверждено 98.7%",
    logMsg4: "Автодиагностика безопасности периметра: все узлы активны",
    genMsg1: "Доступ по лицу: резидент входит через главный вход",
    genMsg2: "Контроль обходов: виртуальный оператор проверил северную зону периметра",
    genMsg3: "Датчик присутствия: обнаружено движение в зоне отдыха (ниже порога)",
    genMsg4: "Самопроверка: основной оптоволоконный канал активен и резервирован",
    genMsg5: "Дистанционное открытие ворот по запросу владельца (гараж)",
    alarmOffMsg: "Сигнализация отключена авторизованным оператором. Возврат в нормальное состояние.",
    alarmOnMsg1: "КРИТИЧЕСКИ: Тревога паники активирована с веб-терминала",
    alarmOnMsg2: "Звук отпугивания: Трансляция предупреждения через громкоговорители",
    alarmOnMsg3: "Оператор Shomer ID 408 берет живое двустороннее управление",
  },
  pt: {
    aiLatency: "Latência AI",
    battery: "Bateria",
    localSiren: "Sirene Local",
    sirenOn: "Ligada",
    sirenOff: "Desligada",
    camAlertLive: "CÂMERA: ALERTA DE INTRUSÃO AO VIVO",
    camLive: "CÂMERA 0{num} - AO VIVO",
    hallEntrada: "Hall Entrada",
    cocheraLpr: "Garagem LPR",
    cctvHall: "CAM 01 - HALL ENTRADA",
    cctvLpr: "CAM 02 - GARAGEM LPR",
    cctvEmergency: "ESTADO: EMERGÊNCIA ATIVA",
    cctvPrimaryLink: "LINK: PRIMÁRIO FIBRA",
    faceDetected: "ROSTO DETECTADO",
    idResidente: "ID: RESIDENTE (Apt 4B)",
    biometriaOk: "BIOMETRIA: OK [98.7%]",
    accesoPermitido: "ACESSO: PERMITIDO",
    vehiculoIdentificado: "VEÍCULO IDENTIFICADO",
    lprZoom: "LPR ZOOM ANALYTICS",
    patente: "PLACA: B-XY 7890",
    registroAutorizado: "REGISTRO: AUTORIZADO",
    portonAbriendo: "PORTÃO: ABRINDO...",
    lineaViolada: "LINHA PERIMETRAL VIOLADA",
    objetoNoIdentificado: "CRÍTICO: OBJETO NÃO IDENTIFICADO",
    tipoMerodeador: "TIPO: SUSPEITO",
    tiempoPermanencia: "TEMPO DE PERMANÊNCIA: 14s",
    disuasionActivada: "DISSUASÃO AUDÍVEL ATIVA",
    presenciaAnomala: "PRESENÇA ANÔMALA 02",
    seguimientoActivo: "RASTREAMENTO ATIVO",
    coberturaVirtual: "COBERTURA VIRTUAL: 100%",
    altavozActivo: "ALTOFALANTE DISSUASIVO SHOMER ATIVO",
    alertaIntromision: "ALERTA DE INTRUSÃO - AÇÃO OPERACIONAL",
    helpEmergency: "Simulação: Operador interagindo por áudio bidirecional e enviando patrulha de apoio.",
    helpNormal: "O algoritmo perimetral local analisa e identifica pedestres e placas instantaneamente.",
    bitacoraOperativa: "Diário Operacional",
    restablecerSimulador: "Redefinir Simulador",
    simularAlerta: "Simular Alerta de Intrusão",
    limpiarBitacora: "Limpar Diário",
    clearLogMsg: "Histórico de registros limpo. Recarga de sensores ativa.",
    logMsg1: "Conexão criptografada estabelecida com Hub Buenos Aires",
    logMsg2: "Sistema LPR: Entrada de veículo autorizada (Placa: B-XY 7890)",
    logMsg3: "Acesso Facial: Juan Gonzalez (Proprietário 4B) - Rosto validado 98.7%",
    logMsg4: "Autoverificação de segurança perimetral: Todos os nós ativos",
    genMsg1: "Acesso Facial: Residente entrando pela Entrada Principal",
    genMsg2: "Controle de rondas: Operador virtual verificou zona perimetral norte",
    genMsg3: "Sensor de presença: Movimento detectado na área de lazer (abaixo do limite)",
    genMsg4: "Autoverificação: Link de fibra primário ativo e redundante",
    genMsg5: "Abertura remota de portão a pedido do Proprietário (Garagem)",
    alarmOffMsg: "Alarme desativado por operador autorizado. Retorno ao estado normal.",
    alarmOnMsg1: "CRÍTICO: Alerta de pânico ativado a partir do terminal web",
    alarmOnMsg2: "Áudio Dissuasivo: Transmitindo aviso pelos alto-falantes",
    alarmOnMsg3: "Operador Shomer ID 408 assumindo controle ao vivo bidirecional",
  },
  it: {
    aiLatency: "Latenza AI",
    battery: "Batteria",
    localSiren: "Sirena Locale",
    sirenOn: "Attiva",
    sirenOff: "Spenta",
    camAlertLive: "TELECAMERA: ALLERTA INTRUSIONE LIVE",
    camLive: "TELECAMERA 0{num} - LIVE",
    hallEntrada: "Hall Ingresso",
    cocheraLpr: "Garage LPR",
    cctvHall: "CAM 01 - INGRESSO PRINCIPALE",
    cctvLpr: "CAM 02 - GARAGE LPR",
    cctvEmergency: "STATO: EMERGENZA ATTIVA",
    cctvPrimaryLink: "LINK: PRIMARIO FIBRA",
    faceDetected: "VOLTO RILEVATO",
    idResidente: "ID: RESIDENTE (App 4B)",
    biometriaOk: "BIOMETRIA: OK [98.7%]",
    accesoPermitido: "ACCESSO: CONSENTITO",
    vehiculoIdentificado: "VEICOLO IDENTIFICATO",
    lprZoom: "ANALISI DETTAGLIATA LPR",
    patente: "TARGA: B-XY 7890",
    registroAutorizado: "REGISTRO: AUTORIZZATO",
    portonAbriendo: "CANCELLO: APERTURA...",
    lineaViolada: "LINEA PERIMETRALE VIOLATA",
    objetoNoIdentificado: "CRITICO: OGGETTO NON IDENTIFICATO",
    tipoMerodeador: "TIPO: SOSPETTO",
    tiempoPermanencia: "TEMPO DI PERMANENZA: 14s",
    disuasionActivada: "DISSUASIONE VOCALE ATTIVA",
    presenciaAnomala: "PRESENZA ANOMALA 02",
    seguimientoActivo: "TRACCIAMENTO ATTIVO",
    coberturaVirtual: "COPERTURA VIRTUALE: 100%",
    altavozActivo: "ALTOPARLANTE DISSUASIVO SHOMER ATTIVO",
    alertaIntromision: "ALLERTA INTRUSIONE - AZIONE OPERATIVA",
    helpEmergency: "Simulazione: Operatore che interagisce via audio bidirezionale e invia pattuglia di supporto.",
    helpNormal: "L'algoritmo perimetrale locale analizza e identifica istantaneamente pedoni e targhe.",
    bitacoraOperativa: "Registro Operativo",
    restablecerSimulador: "Ripristina Simulatore",
    simularAlerta: "Simula Allerta Intrusione",
    limpiarBitacora: "Pulisci Registro",
    clearLogMsg: "Cronologia del registro svuotata. Ricarica sensori attiva.",
    logMsg1: "Connessione crittografata stabilita con Hub Buenos Aires",
    logMsg2: "Sistema LPR: Ingresso veicolo autorizzato (Targa: B-XY 7890)",
    logMsg3: "Accesso Facciale: Juan Gonzalez (App 4B) - Volto verficato 98.7%",
    logMsg4: "Autodiagnosi sicurezza perimetrale: Tutti i nodi attivi",
    genMsg1: "Accesso Facciale: Residente in ingresso da Ingresso Principale",
    genMsg2: "Controllo ronde: Operatore virtuale ha verificato perimetro nord",
    genMsg3: "Sensore presenza: Movimento rilevato in area comune (sotto la soglia)",
    genMsg4: "Autodiagnosi: Collegamento in fibra principale attivo e ridondato",
    genMsg5: "Apertura remota cancello su richiesta del Proprietario (Garage)",
    alarmOffMsg: "Allarme disattivato da operatore autorizzato. Ritorno allo stato normale.",
    alarmOnMsg1: "CRITICO: Allarme panico attivato da terminale web",
    alarmOnMsg2: "Audio Dissuasivo: Trasmissione avviso tramite altoparlanti",
    alarmOnMsg3: "Operatore Shomer ID 408 assume controllo live bidirezionale",
  }
};

export function MonitoringSandbox() {
  const { language, t } = useLanguage();
  const isRtl = language === "he";
  const extra = localSandboxExtra[language as Locale] || localSandboxExtra.es;

  const [alarmActive, setAlarmActive] = useState(false);
  const [activeCam, setActiveCam] = useState<1 | 2>(1);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [logs, setLogs] = useState<LogEvent[]>([]);

  // Initialize and translate logs on language switch
  useEffect(() => {
    setLogs([
      { id: "1", time: "16:30:12", type: "success", message: extra.logMsg1 },
      { id: "2", time: "16:31:05", type: "info", message: extra.logMsg2 },
      { id: "3", time: "16:32:44", type: "info", message: extra.logMsg3 },
      { id: "4", time: "16:33:15", type: "success", message: extra.logMsg4 },
    ]);
  }, [language, extra]);

  // Live ticking clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString(language === "es" ? "es-AR" : "en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, "-");
      const timeStr = now.toTimeString().split(" ")[0];
      setCurrentTime(`${dateStr} ${timeStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  // Scanning bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Generate mock logs dynamically
  useEffect(() => {
    if (alarmActive) return;

    const messages = [
      { type: "info" as const, message: extra.genMsg1 },
      { type: "success" as const, message: extra.genMsg2 },
      { type: "info" as const, message: extra.genMsg3 },
      { type: "success" as const, message: extra.genMsg4 },
      { type: "info" as const, message: extra.genMsg5 },
    ];

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];
      
      setLogs((prev) => [
        {
          id: Date.now().toString(),
          time: timeString,
          type: randomMsg.type,
          message: randomMsg.message
        },
        ...prev.slice(0, 5) // Keep last 6 logs
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, [alarmActive, extra]);

  // Trigger Panic simulation
  const handleTriggerAlarm = () => {
    if (alarmActive) {
      setAlarmActive(false);
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];
      setLogs((prev) => [
        { id: Date.now().toString(), time: timeString, type: "success", message: extra.alarmOffMsg },
        ...prev
      ]);
      return;
    }

    setAlarmActive(true);
    const now = new Date();
    const timeString = now.toTimeString().split(" ")[0];
    
    setLogs((prev) => [
      { id: Date.now().toString(), time: timeString, type: "danger", message: extra.alarmOnMsg1 },
      { id: (Date.now() + 1).toString(), time: timeString, type: "warning", message: extra.alarmOnMsg2 },
      { id: (Date.now() + 2).toString(), time: timeString, type: "info", message: extra.alarmOnMsg3 },
      ...prev
    ]);
  };

  return (
    <section id="simulador" className={`py-24 px-6 md:px-10 bg-[#060606] border-t border-brand-border overflow-hidden ${isRtl ? "text-right" : "text-left"}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3">{t("sandbox.tag")}</div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-6">
                {t("sandbox.title")}
              </h2>
              <p className={`text-brand-gray-light leading-relaxed max-w-[520px] font-light ${isRtl ? "mr-0 ml-auto" : ""}`}>
                {t("sandbox.desc")}
              </p>
            </FadeUp>
          </div>

          {/* Stats Bar */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4">
            <FadeUp delay={0.1} className="border border-brand-border rounded bg-brand-surface/40 p-4 text-center">
              <span className="font-mono text-xl md:text-2xl text-brand-blue font-bold">180ms</span>
              <p className="text-[10px] text-brand-gray tracking-widest uppercase mt-1 font-mono">{extra.aiLatency}</p>
            </FadeUp>
            <FadeUp delay={0.2} className="border border-brand-border rounded bg-brand-surface/40 p-4 text-center">
              <span className="font-mono text-xl md:text-2xl text-brand-green font-bold">UPS 100%</span>
              <p className="text-[10px] text-brand-gray tracking-widest uppercase mt-1 font-mono">{extra.battery}</p>
            </FadeUp>
            <FadeUp delay={0.3} className="border border-brand-border rounded bg-brand-surface/40 p-4 text-center">
              <span className={`font-mono text-xl md:text-2xl font-bold ${alarmActive ? "text-brand-red animate-pulse" : "text-white"}`}>
                {alarmActive ? extra.sirenOn : extra.sirenOff}
              </span>
              <p className="text-[10px] text-brand-gray tracking-widest uppercase mt-1 font-mono">{extra.localSiren}</p>
            </FadeUp>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 border rounded-lg overflow-hidden bg-brand-surface/20 transition-colors duration-500
          ${alarmActive ? "border-brand-red/40 shadow-[0_0_30px_rgba(255,59,48,0.15)]" : "border-brand-border"}`}
        >
          {/* Left Panel: Camera Viewport */}
          <div className="lg:col-span-7 p-6 flex flex-col gap-4">
            <div className={`flex justify-between items-center ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <span className={`w-2 h-2 rounded-full ${alarmActive ? "bg-brand-red animate-ping" : "bg-brand-green animate-pulse"}`} />
                <span className="font-mono text-xs text-brand-white uppercase tracking-wider">
                  {alarmActive ? extra.camAlertLive : extra.camLive.replace("{num}", activeCam.toString())}
                </span>
              </div>
              <div className={`flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <button
                  onClick={() => setActiveCam(1)}
                  disabled={alarmActive}
                  className={`px-3 py-1 font-mono text-[10px] border rounded transition-all
                    ${activeCam === 1 
                      ? "border-brand-blue text-brand-blue bg-brand-blue/5" 
                      : "border-brand-border text-brand-gray hover:text-white"
                    } disabled:opacity-50`}
                >
                  {extra.hallEntrada}
                </button>
                <button
                  onClick={() => setActiveCam(2)}
                  disabled={alarmActive}
                  className={`px-3 py-1 font-mono text-[10px] border rounded transition-all
                    ${activeCam === 2 
                      ? "border-brand-blue text-brand-blue bg-brand-blue/5" 
                      : "border-brand-border text-brand-gray hover:text-white"
                    } disabled:opacity-50`}
                >
                  {extra.cocheraLpr}
                </button>
              </div>
            </div>

            {/* Viewport Frame */}
            <div className="relative aspect-video rounded overflow-hidden border border-brand-border bg-[#050505] flex items-center justify-center select-none shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)]">
              
              {/* Realistic Background Image with CCTV Filter */}
              <Image
                src={activeCam === 1 ? "/images/cctv_hall_sec.png" : "/images/cctv_lpr_sec.png"}
                alt="CCTV Background Feed"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 700px"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none"
                style={{
                  filter: alarmActive
                    ? "brightness(0.45) contrast(1.3) saturate(0.9) sepia(0.25) hue-rotate(320deg)"
                    : "brightness(0.6) contrast(1.2) saturate(0.3) sepia(0.1) hue-rotate(80deg)"
                }}
              />

              {/* Scanline Animation */}
              <div 
                className="absolute left-0 right-0 h-[1.5px] bg-brand-blue/15 pointer-events-none z-10 shadow-[0_0_6px_rgba(0,191,255,0.4)]"
                style={{ top: `${scanProgress}%` }}
              />

              {/* Subtle Screen Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10 opacity-75" />

              {/* Screen Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)] pointer-events-none z-10" />

              {/* Screen Flashing if Alarm Active */}
              {alarmActive && (
                <div className="absolute inset-0 bg-brand-red/5 animate-pulse pointer-events-none z-20 border-[3px] border-brand-red/80" />
              )}

              {/* SVG-based AI Camera Feed Overlays */}
              <svg viewBox="0 0 640 360" className="absolute inset-0 w-full h-full text-brand-white z-20 pointer-events-none select-none">
                
                {/* Corner Frame Brackets */}
                <path d="M 20 40 L 20 20 L 40 20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                <path d="M 600 20 L 620 20 L 620 40" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                <path d="M 20 320 L 20 340 L 40 340" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                <path d="M 600 340 L 620 340 L 620 320" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

                {/* CCTV HUD Elements */}
                {/* Blinking REC indicator */}
                <g transform="translate(25, 32)">
                  <circle cx="0" cy="0" r="4.5" fill="#FF3B30" className={alarmActive ? "animate-ping" : "animate-pulse"} />
                  <circle cx="0" cy="0" r="4.5" fill="#FF3B30" />
                  <text x="12" y="3.5" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">REC</text>
                </g>

                {/* Camera metadata top left */}
                <text x="95" y="36" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="monospace" letterSpacing="0.5">
                  {activeCam === 1 ? extra.cctvHall : extra.cctvLpr}
                </text>

                {/* Live clock top right */}
                <text x="615" y="36" textAnchor="end" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="monospace">
                  {currentTime}
                </text>

                {/* Stream stats bottom left */}
                <g transform="translate(25, 325)" fontSize="9" fontFamily="monospace" fill="rgba(255,255,255,0.5)">
                  <text x="0" y="0">FPS: 30.00</text>
                  <text x="75" y="0">BITRATE: {alarmActive ? "6520" : "4124"} Kbps</text>
                  <text x="180" y="0">STREAM: H.265 (AES-256)</text>
                  <text x="320" y="0" fill={alarmActive ? "#FF3B30" : "#00E676"} className={alarmActive ? "animate-pulse" : ""}>
                    {alarmActive ? extra.cctvEmergency : extra.cctvPrimaryLink}
                  </text>
                </g>

                {/* Cam 1: Lobby Entrance (Normal Mode) */}
                {!alarmActive && activeCam === 1 && (
                  <g>
                    {/* Face Scan Bounding Box (Centered on the resident woman walking forward) */}
                    <g transform="translate(345, 255)">
                      {/* Box corner brackets */}
                      <path d="M 0 6 L 0 0 L 6 0" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      <path d="M 14 0 L 20 0 L 20 6" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      <path d="M 0 16 L 0 22 L 6 22" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      <path d="M 14 22 L 20 22 L 20 16" stroke="#00E676" strokeWidth="2.5" fill="none" />
                      
                      {/* Solid inner border representing detected face target */}
                      <rect x="3" y="3" width="14" height="16" fill="rgba(0, 230, 118, 0.05)" stroke="rgba(0, 230, 118, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Facial recognition mesh grid */}
                      <g opacity="0.3" stroke="#00E676" strokeWidth="0.8">
                        <line x1="7" y1="3" x2="7" y2="19" />
                        <line x1="13" y1="3" x2="13" y2="19" />
                        
                        <line x1="3" y1="8" x2="17" y2="8" />
                        <line x1="3" y1="14" x2="17" y2="14" />

                        {/* Node dots */}
                        <circle cx="10" cy="11" r="1" fill="#00E676" />
                        <circle cx="7" cy="8" r="0.7" fill="#00E676" />
                        <circle cx="13" cy="8" r="0.7" fill="#00E676" />
                        <circle cx="7" cy="14" r="0.7" fill="#00E676" />
                        <circle cx="13" cy="14" r="0.7" fill="#00E676" />
                      </g>

                      {/* Scanning horizontal laser line */}
                      <line x1="3" y1="6" x2="17" y2="6" stroke="#00E676" strokeWidth="1.2" opacity="0.8" className="animate-bounce" style={{ animationDuration: "3.5s" }} />

                      {/* UI Tag Header */}
                      <rect x="-50" y="-18" width="120" height="14" fill="#00E676" rx="1" />
                      <text x="10" y="-8" textAnchor="middle" fill="black" fontSize="7.5" fontWeight="bold" fontFamily="monospace">{extra.faceDetected}</text>
                      
                      {/* Sub-label info */}
                      <g fontSize="8" fontFamily="monospace" fill="#00E676" fontWeight="bold" transform="translate(0, 80)">
                        <text x="10" y="0" textAnchor="middle" fill="#00E676">{extra.idResidente}</text>
                        <text x="10" y="9" textAnchor="middle" fill="#00E676">{extra.biometriaOk}</text>
                        <text x="10" y="18" textAnchor="middle" fill="#00E676">{extra.accesoPermitido}</text>
                      </g>
                    </g>
                  </g>
                )}

                {/* Cam 2: Garage Gate LPR (Normal Mode) */}
                {!alarmActive && activeCam === 2 && (
                  <g>
                    {/* Vehicle Scan Bounding Box (Positioned as a car entering driveway) */}
                    <g transform="translate(230, 160)">
                      {/* Vehicle detection border */}
                      <rect x="0" y="0" width="390" height="175" fill="rgba(0, 191, 255, 0.03)" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="4 4" />
                      
                      {/* Box corner brackets */}
                      <path d="M 0 15 L 0 0 L 15 0" stroke="#00BFFF" strokeWidth="2.5" fill="none" />
                      <path d="M 375 0 L 390 0 L 390 15" stroke="#00BFFF" strokeWidth="2.5" fill="none" />
                      <path d="M 0 160 L 0 175 L 15 175" stroke="#00BFFF" strokeWidth="2.5" fill="none" />
                      <path d="M 375 175 L 390 175 L 390 160" stroke="#00BFFF" strokeWidth="2.5" fill="none" />

                      <rect x="0" y="-20" width="135" height="16" fill="#00BFFF" rx="1" />
                      <text x="6" y="-9" fill="black" fontSize="9" fontWeight="bold" fontFamily="monospace">{extra.vehiculoIdentificado}</text>

                      {/* License Plate Recognition Box (Aligned perfectly with B-XY 7890 plate) */}
                      <g transform="translate(16, 110)">
                        <rect x="0" y="0" width="50" height="22" fill="rgba(0, 230, 118, 0.1)" stroke="#00E676" strokeWidth="1.5" />
                        <rect x="0" y="-10" width="45" height="9" fill="#00E676" rx="0.5" />
                        <text x="4" y="-3" fill="black" fontSize="6.5" fontWeight="bold" fontFamily="monospace">LPR ACTIVE</text>
                        <text x="25" y="15.5" textAnchor="middle" fill="#00E676" fontSize="9.5" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">B-XY 7890</text>
                      </g>

                      {/* Zoom detail frame in top-right */}
                      <g transform="translate(270, 15)">
                        <rect x="0" y="0" width="110" height="60" fill="rgba(0, 0, 0, 0.75)" stroke="#00BFFF" strokeWidth="1" />
                        <line x1="0" y1="14" x2="110" y2="14" stroke="#00BFFF" strokeWidth="0.8" />
                        <text x="6" y="10" fill="#00BFFF" fontSize="7" fontWeight="bold" fontFamily="monospace">{extra.lprZoom}</text>
                        
                        <text x="6" y="26" fill="rgba(255,255,255,0.8)" fontSize="7.5" fontFamily="monospace">{extra.patente}</text>
                        <text x="6" y="37" fill="rgba(255,255,255,0.8)" fontSize="7.5" fontFamily="monospace">{extra.registroAutorizado}</text>
                        <text x="6" y="48" fill="#00E676" fontSize="7.5" fontWeight="bold" fontFamily="monospace">{extra.portonAbriendo}</text>
                      </g>
                    </g>
                  </g>
                )}

                {/* Active Intruders (DANGER STATE) */}
                {alarmActive && (
                  <g>
                    {/* Intrusion Warning Line */}
                    <path d="M 20,240 L 620,240" stroke="#FF3B30" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />
                    <rect x="250" y="231" width="140" height="16" fill="#FF3B30" rx="1" />
                    <text x="320" y="242" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace" letterSpacing="0.5">{extra.lineaViolada}</text>

                    {/* Threat Target 1 (Merodeador en primer plano - Aligned with pedestrian on far left) */}
                    <g transform="translate(72, 150)">
                      <rect x="0" y="0" width="30" height="80" fill="none" stroke="#FF3B30" strokeWidth="2.5" />
                      
                      {/* Warning brackets */}
                      <path d="M -6 -6 L 8 -6 M -6 -6 L -6 8" stroke="#FF3B30" strokeWidth="3" fill="none" />
                      <path d="M 36 -6 L 22 -6 M 36 -6 L 36 8" stroke="#FF3B30" strokeWidth="3" fill="none" />
                      <path d="M -6 86 L 8 86 M -6 86 L -6 72" stroke="#FF3B30" strokeWidth="3" fill="none" />
                      <path d="M 36 86 L 22 86 M 36 86 L 36 72" stroke="#FF3B30" strokeWidth="3" fill="none" />

                      <rect x="-55" y="-18" width="140" height="14" fill="#FF3B30" rx="1" />
                      <text x="15" y="-8" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold" fontFamily="monospace" letterSpacing="0.2">{extra.objetoNoIdentificado}</text>
                      
                      {/* Aim reticle overlay */}
                      <circle cx="15" cy="40" r="10" fill="none" stroke="#FF3B30" strokeWidth="1" strokeDasharray="3 2" />
                      <line x1="15" y1="15" x2="15" y2="65" stroke="#FF3B30" strokeWidth="0.8" opacity="0.7" />
                      <line x1="0" y1="40" x2="30" y2="40" stroke="#FF3B30" strokeWidth="0.8" opacity="0.7" />

                      {/* Text info label */}
                      <g fontSize="8" fontFamily="monospace" fill="#FF3B30" fontWeight="bold" transform="translate(0, 87)">
                        <text x="15" y="0" textAnchor="middle">{extra.tipoMerodeador}</text>
                        <text x="15" y="9" textAnchor="middle">{extra.tiempoPermanencia}</text>
                        <text x="15" y="18" textAnchor="middle" fill="#FF3B30" className="animate-pulse">{extra.disuasionActivada}</text>
                      </g>
                    </g>

                    {/* Threat Target 2 (Segundo intruso - Aligned with man walking in foreground right) */}
                    <g transform="translate(435, 245)">
                      <rect x="0" y="0" width="30" height="100" fill="rgba(255, 59, 48, 0.05)" stroke="#FF3B30" strokeWidth="1.5" />
                      
                      <rect x="-40" y="-15" width="110" height="12" fill="#FF3B30" rx="1" />
                      <text x="15" y="-6" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="monospace">{extra.presenciaAnomala}</text>
                      
                      <g fontSize="8" fontFamily="monospace" fill="#FF3B30" fontWeight="bold" transform="translate(0, 107)">
                        <text x="15" y="0" textAnchor="middle">{extra.seguimientoActivo}</text>
                        <text x="15" y="9" textAnchor="middle">{extra.coberturaVirtual}</text>
                      </g>
                    </g>

                    {/* Warning overlay top center */}
                    <g transform="translate(320, 70)">
                      <rect x="-130" y="-15" width="260" height="24" fill="rgba(0,0,0,0.85)" stroke="#FF3B30" strokeWidth="1" />
                      <text x="0" y="1" textAnchor="middle" fill="#FF3B30" fontSize="9.5" fontWeight="bold" fontFamily="monospace" className="animate-pulse">
                        {extra.altavozActivo}
                      </text>
                    </g>
                  </g>
                )}
              </svg>

              {/* Siren Red Overlay Flashing (Alert Bar HUD) */}
              {alarmActive && (
                <div className="absolute top-4 left-[200px] right-[200px] z-30 flex items-center justify-center gap-2 bg-brand-red text-white px-4 py-1.5 rounded-sm font-mono text-[9px] tracking-widest uppercase font-bold animate-pulse shadow-[0_0_15px_rgba(255,59,48,0.5)]">
                  <Activity className="w-3.5 h-3.5 animate-bounce" /> {extra.alertaIntromision}
                </div>
              )}
            </div>

            {/* Legend & Help Info */}
            <p className="text-[10px] text-brand-gray uppercase font-mono tracking-wider flex items-center gap-1.5 min-h-[16px]">
              {alarmActive ? (
                <>
                  <Volume2 className="w-3 h-3 text-brand-red animate-pulse shrink-0" />
                  <span>{extra.helpEmergency}</span>
                </>
              ) : (
                <span>{extra.helpNormal}</span>
              )}
            </p>
          </div>

          {/* Right Panel: Event Logs & Controls */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-brand-border p-6 flex flex-col justify-between gap-6 bg-black/40">
            {/* Top Logs Box */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-brand-gray tracking-wider uppercase flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-brand-blue" /> {extra.bitacoraOperativa}
                </span>
                <span className="text-[10px] font-mono text-brand-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" /> ONLINE
                </span>
              </div>

              {/* Logs List Container */}
              <div className="h-[210px] overflow-y-auto pr-1 flex flex-col gap-2 font-mono scrollbar-thin scrollbar-thumb-white/10">
                {logs.map((log) => (
                  <div key={log.id} className="text-[10.5px] leading-relaxed border-b border-white/5 pb-2 transition-all">
                    <span className="text-brand-gray-light mr-1.5">[{log.time}]</span>
                    <span className={`font-semibold mr-1.5 uppercase
                      ${log.type === "danger" ? "text-brand-red" : ""}
                      ${log.type === "warning" ? "text-amber-500" : ""}
                      ${log.type === "success" ? "text-brand-green" : ""}
                      ${log.type === "info" ? "text-brand-blue" : ""}
                    `}>
                      {log.type === "danger" ? "CRIT" : log.type === "warning" ? "WARN" : log.type === "success" ? "OK" : "INFO"}:
                    </span>
                    <span className="text-brand-white">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Controls */}
            <div className="flex flex-col gap-3 border-t border-white/5 pt-5">
              <button
                onClick={handleTriggerAlarm}
                className={`w-full py-4 px-6 rounded-sm font-bold text-xs tracking-wider uppercase text-center transition-all duration-300 flex items-center justify-center gap-2 border
                  ${alarmActive 
                    ? "bg-[#FF3B30]/15 hover:bg-[#FF3B30]/25 text-brand-red border-brand-red/30 shadow-[0_0_15px_rgba(255,59,48,0.1)]" 
                    : "bg-brand-red text-white border-transparent hover:bg-red-600 shadow-[0_0_12px_rgba(255,59,48,0.25)]"
                  }`}
              >
                <Shield className="w-4 h-4" />
                {alarmActive ? extra.restablecerSimulador : extra.simularAlerta}
              </button>

              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    setLogs([
                      { id: Date.now().toString(), time: new Date().toTimeString().split(" ")[0], type: "success", message: extra.clearLogMsg }
                    ]);
                  }}
                  className="flex-1 py-2 px-3 border border-brand-border bg-transparent text-brand-gray hover:text-white rounded-sm font-mono text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> {extra.limpiarBitacora}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
