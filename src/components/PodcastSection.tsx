"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Headphones, Sparkles, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

const TRACKS_STATIC = [
  {
    id: "totem",
    src: "/audio/podcast-shomer.m4a",
    durationSec: 1295, // 21:35
  },
  {
    id: "vision",
    src: "/audio/shomer-vision.m4a",
    durationSec: 1455, // 24:15
  }
];

const localPodcastTranslations: Record<Locale, {
  sectionTag: string;
  sectionTitle: React.ReactNode;
  sectionDesc: string;
  durationLabel: string;
  playLabel: string;
  pauseLabel: string;
  speedLabel: string;
  rewindLabel: string;
  forwardLabel: string;
  volumeLabel: string;
  muteLabel: string;
  unmuteLabel: string;
  progressLabel: string;
  tracks: Array<{
    id: string;
    tabLabel: string;
    title: string;
    subtitle: string;
    badge: string;
    coverText: string;
  }>;
}> = {
  es: {
    sectionTag: "Shomer Audio Guía",
    sectionTitle: <>Explicación de<br />Servicios en <em className="text-brand-blue not-italic">Audio.</em></>,
    sectionDesc: "¿Querés entender a fondo cómo funciona la seguridad inteligente de Shomer? Escuchá nuestras guías de audio interactivas. Explican de forma natural y dinámica el funcionamiento del Tótem, el sistema Shomer Vision, los abonos y cómo logramos protección continua sin intermediarios.",
    durationLabel: "Duración",
    playLabel: "Reproducir",
    pauseLabel: "Pausar",
    speedLabel: "Velocidad de reproducción",
    rewindLabel: "Retroceder 15s",
    forwardLabel: "Adelantar 15s",
    volumeLabel: "Volumen",
    muteLabel: "Silenciar",
    unmuteLabel: "Activar sonido",
    progressLabel: "Progreso de reproducción",
    tracks: [
      {
        id: "totem",
        tabLabel: "Monitoreo & Tótem",
        title: "Planes de Seguridad & Tótem",
        subtitle: "Conversación interactiva sobre tecnología virtual",
        badge: "TÓTEM & MONITOREO",
        coverText: "TÓTEM"
      },
      {
        id: "vision",
        tabLabel: "Portería Shomer Vision",
        title: "Portero Inteligente Shomer Vision",
        subtitle: "Explicación detallada del sistema de accesos",
        badge: "SHOMER VISION",
        coverText: "VISION"
      }
    ]
  },
  en: {
    sectionTag: "Shomer Audio Guide",
    sectionTitle: <>Audio Explanation<br />of <em className="text-brand-blue not-italic">Services.</em></>,
    sectionDesc: "Do you want to understand how Shomer's smart security works in detail? Listen to our interactive audio guides. They naturally and dynamically explain the operation of the Totem, the Shomer Vision system, the plans, and how we achieve continuous protection without intermediaries.",
    durationLabel: "Duration",
    playLabel: "Play",
    pauseLabel: "Pause",
    speedLabel: "Playback speed",
    rewindLabel: "Rewind 15s",
    forwardLabel: "Forward 15s",
    volumeLabel: "Volume",
    muteLabel: "Mute",
    unmuteLabel: "Unmute",
    progressLabel: "Playback progress",
    tracks: [
      {
        id: "totem",
        tabLabel: "Monitoring & Totem",
        title: "Security Plans & Totem",
        subtitle: "Interactive conversation on virtual technology",
        badge: "TOTEM & MONITORING",
        coverText: "TOTEM"
      },
      {
        id: "vision",
        tabLabel: "Shomer Vision Intercom",
        title: "Smart Intercom Shomer Vision",
        subtitle: "Detailed explanation of the access system",
        badge: "SHOMER VISION",
        coverText: "VISION"
      }
    ]
  },
  he: {
    sectionTag: "מדריך קולי שומר",
    sectionTitle: <>הסבר קולי<br />על <em className="text-brand-blue not-italic">השירותים.</em></>,
    sectionDesc: "רוצה להבין לעומק כיצד פועלת האבטחה החכמה של שומר? האזן למדריכים הקוליים האינטראקטיביים שלנו. הם מסבירים בצורה טבעית ודינמית את פעולת הטוטם, מערכת שומר וויז'ן, המנויים וכיצד אנו משיגים הגנה רציפה ללא מתווכים.",
    durationLabel: "משך",
    playLabel: "נגן",
    pauseLabel: "השהה",
    speedLabel: "מהירות ניגון",
    rewindLabel: "החזר 15 שניות",
    forwardLabel: "קדם 15 שניות",
    volumeLabel: "עוצמת שמע",
    muteLabel: "השתק",
    unmuteLabel: "בטל השתקה",
    progressLabel: "התקדמות הניגון",
    tracks: [
      {
        id: "totem",
        tabLabel: "ניטור וטוטם",
        title: "תוכניות אבטחה וטוטם",
        subtitle: "שיחה אינטראקטיבית על טכנולוגיה וירטואלית",
        badge: "טוטם וניטור",
        coverText: "טוטם"
      },
      {
        id: "vision",
        tabLabel: "שוער שומר וויז'ן",
        title: "שוער חכם שומר וויז'ן",
        subtitle: "הסבר מפורט על מערכת הגישה",
        badge: "שומר וויז'ן",
        coverText: "וויז'ן"
      }
    ]
  },
  de: {
    sectionTag: "Shomer Audio-Leitfaden",
    sectionTitle: <>Audio-Erklärung<br />der <em className="text-brand-blue not-italic">Dienstleistungen.</em></>,
    sectionDesc: "Möchten Sie im Detail verstehen, wie die intelligente Sicherheit von Shomer funktioniert? Hören Sie sich unsere interaktiven Audio-Leitfäden an. Sie erklären auf natürliche und dynamische Weise die Funktionsweise des Totems, des Shomer Vision-Systems, die Abonnements und wie wir kontinuierlichen Schutz ohne Zwischenhändler erreichen.",
    durationLabel: "Dauer",
    playLabel: "Abspielen",
    pauseLabel: "Pause",
    speedLabel: "Wiedergabegeschwindigkeit",
    rewindLabel: "15s zurückspulen",
    forwardLabel: "15s vorspulen",
    volumeLabel: "Lautstärke",
    muteLabel: "Stummschalten",
    unmuteLabel: "Ton einschalten",
    progressLabel: "Wiedergabefortschritt",
    tracks: [
      {
        id: "totem",
        tabLabel: "Überwachung & Totem",
        title: "Sicherheitspläne & Totem",
        subtitle: "Interaktives Gespräch über virtuelle Technologie",
        badge: "TOTEM & ÜBERWACHUNG",
        coverText: "TOTEM"
      },
      {
        id: "vision",
        tabLabel: "Shomer Vision Gegensprechanlage",
        title: "Intelligente Gegensprechanlage Shomer Vision",
        subtitle: "Detaillierte Erklärung des Zugangssystems",
        badge: "SHOMER VISION",
        coverText: "VISION"
      }
    ]
  },
  ru: {
    sectionTag: "Аудиогид Shomer",
    sectionTitle: <>Аудио-описание<br />наших <em className="text-brand-blue not-italic">услуг.</em></>,
    sectionDesc: "Хотите подробно разобраться, как работает умная безопасность Shomer? Послушайте наши интерактивные аудиогиды. Они просто и понятно объясняют работу Тотема, системы Shomer Vision, тарифных планов и то, как мы обеспечиваем непрерывную защиту без посредников.",
    durationLabel: "Длительность",
    playLabel: "Воспроизвести",
    pauseLabel: "Пауза",
    speedLabel: "Скорость воспроизведения",
    rewindLabel: "Назад на 15 сек",
    forwardLabel: "Вперед на 15 сек",
    volumeLabel: "Громкость",
    muteLabel: "Выключить звук",
    unmuteLabel: "Включить звук",
    progressLabel: "Прогресс воспроизведения",
    tracks: [
      {
        id: "totem",
        tabLabel: "Мониторинг и Тотем",
        title: "Планы безопасности и Тотем",
        subtitle: "Интерактивная беседа о виртуальных технологиях",
        badge: "ТОТЕМ И МОНИТОРИНГ",
        coverText: "ТОТЕМ"
      },
      {
        id: "vision",
        tabLabel: "Домофония Shomer Vision",
        title: "Умный домофон Shomer Vision",
        subtitle: "Подробное объяснение системы доступа",
        badge: "SHOMER VISION",
        coverText: "VISION"
      }
    ]
  },
  pt: {
    sectionTag: "Shomer Guia de Áudio",
    sectionTitle: <>Explicação de<br />Serviços em <em className="text-brand-blue not-italic">Áudio.</em></>,
    sectionDesc: "Quer entender a fundo como funciona a segurança inteligente da Shomer? Escute os nossos guias de áudio interativos. Eles explicam de forma natural e dinâmica o funcionamento do Totem, o sistema Shomer Vision, as assinaturas e como alcançamos proteção contínua sem intermediários.",
    durationLabel: "Duração",
    playLabel: "Reproduzir",
    pauseLabel: "Pausar",
    speedLabel: "Velocidade de reprodução",
    rewindLabel: "Retroceder 15s",
    forwardLabel: "Adiantar 15s",
    volumeLabel: "Volume",
    muteLabel: "Silenciar",
    unmuteLabel: "Ativar som",
    progressLabel: "Progresso de reprodução",
    tracks: [
      {
        id: "totem",
        tabLabel: "Monitoramento & Totem",
        title: "Planos de Segurança & Totem",
        subtitle: "Conversa interativa sobre tecnologia virtual",
        badge: "TOTEM & MONITORAMENTO",
        coverText: "TOTEM"
      },
      {
        id: "vision",
        tabLabel: "Portaria Shomer Vision",
        title: "Porteiro Inteligente Shomer Vision",
        subtitle: "Explicação detalhada do sistema de acessos",
        badge: "SHOMER VISION",
        coverText: "VISION"
      }
    ]
  },
  it: {
    sectionTag: "Shomer Audio Guida",
    sectionTitle: <>Spiegazione dei<br />Servizi in <em className="text-brand-blue not-italic">Audio.</em></>,
    sectionDesc: "Vuoi capire a fondo come funziona la sicurezza intelligente di Shomer? Ascolta le nostre guide audio interattive. Spiegano in modo naturale e dinamico il funzionamento del Totem, il sistema Shomer Vision, gli abbonamenti e come otteniamo una protezione continua senza intermediari.",
    durationLabel: "Durata",
    playLabel: "Riproduci",
    pauseLabel: "Pausa",
    speedLabel: "Velocità di riproduzione",
    rewindLabel: "Riavvolgi 15s",
    forwardLabel: "Avanti 15s",
    volumeLabel: "Volume",
    muteLabel: "Silenzia",
    unmuteLabel: "Attiva audio",
    progressLabel: "Progresso di riproduzione",
    tracks: [
      {
        id: "totem",
        tabLabel: "Monitoraggio & Totem",
        title: "Piani di Sicurezza & Totem",
        subtitle: "Conversazione interattiva sulla tecnologia virtuale",
        badge: "TOTEM & MONITORAGGIO",
        coverText: "TOTEM"
      },
      {
        id: "vision",
        tabLabel: "Citofonia Shomer Vision",
        title: "Citofono Intelligente Shomer Vision",
        subtitle: "Spiegazione dettagliata del sistema di accesso",
        badge: "SHOMER VISION",
        coverText: "VISION"
      }
    ]
  }
};

export function PodcastSection() {
  const { language } = useLanguage();
  const isRtl = language === "he";
  const t = localPodcastTranslations[language as Locale] || localPodcastTranslations.es;

  // Combine resources with translations
  const tracks = t.tracks.map((trackText) => {
    const resource = TRACKS_STATIC.find((r) => r.id === trackText.id) || TRACKS_STATIC[0];
    return {
      ...trackText,
      src: resource.src,
      durationSec: resource.durationSec
    };
  });

  const [activeTrackIdx, setActiveTrackIdx] = useState(0);
  const currentTrack = tracks[activeTrackIdx];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(currentTrack.durationSec);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

  // Sync duration robustly, resolving any React hydration/media load race conditions
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    // If metadata is already loaded before React binds event listeners
    if (audio.readyState >= 1 && audio.duration && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("canplay", updateDuration);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("canplay", updateDuration);
    };
  }, [activeTrackIdx]);

  const handleTrackChange = (idx: number) => {
    if (idx === activeTrackIdx) return;
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(tracks[idx].durationSec);
    setActiveTrackIdx(idx);

    if (audioRef.current) {
      audioRef.current.pause();
      // Allow react to update the src DOM attr first, then trigger load manually
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.playbackRate = playbackRate;
        }
      }, 0);
    }
  };

  // Cycle playback speed: 1x -> 1.25x -> 1.5x -> 2x
  const handleSpeedCycle = () => {
    let nextRate = 1;
    if (playbackRate === 1) nextRate = 1.25;
    else if (playbackRate === 1.25) nextRate = 1.5;
    else if (playbackRate === 1.5) nextRate = 2;
    else nextRate = 1;

    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed: ", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration && !isNaN(audioRef.current.duration) && duration !== audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioRef.current.muted = nextMute;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Generate bar animations for visualizer
  const visualizerBars = Array.from({ length: 24 }).map(() => {
    const randomDuration = 0.5 + Math.random() * 0.7;
    const randomDelay = Math.random() * 0.3;
    return {
      duration: randomDuration,
      delay: randomDelay,
      heights: [20, 45, 10, 60, 25, 40, 20].map((h) => h * (0.6 + Math.random() * 0.4))
    };
  });

  return (
    <section id="podcast" className={`py-16 md:py-24 px-6 md:px-10 bg-brand-surface relative overflow-hidden ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(0,230,118,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
          
          {/* Left Column: Text intro */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeUp>
              <div className={`font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <Sparkles size={14} className="text-brand-blue animate-pulse" />
                {t.sectionTag}
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none uppercase mb-6">
                {t.sectionTitle}
              </h2>
              <p className={`text-base text-brand-gray-light leading-relaxed mb-6 font-light ${isRtl ? "mr-0 ml-auto" : ""}`}>
                {t.sectionDesc}
              </p>
              <div className={`flex items-center gap-3 text-xs font-mono text-brand-gray bg-white/5 border border-white/5 rounded-full px-4 py-2 w-fit ${isRtl ? "flex-row-reverse" : ""}`}>
                <Headphones size={14} className="text-brand-blue" />
                {t.durationLabel}: {formatTime(duration)} min
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Audio Player */}
          <div className="lg:col-span-7 w-full">
            <FadeUp delay={0.2}>
              <div className="relative bg-black/60 border border-brand-border rounded-xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden">
                
                {/* Playlist Selector Tabs */}
                <div className={`flex border-b border-white/10 w-full mb-6 pb-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isRtl ? "flex-row-reverse" : ""}`}>
                  {tracks.map((track, idx) => (
                    <button
                      key={track.id}
                      onClick={() => handleTrackChange(idx)}
                      className={`pb-2.5 px-4 font-display text-[10px] sm:text-xs uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                        activeTrackIdx === idx
                          ? "border-brand-blue text-white"
                          : "border-transparent text-brand-gray hover:text-white"
                      }`}
                    >
                      {track.tabLabel}
                    </button>
                  ))}
                </div>

                {/* Player Row */}
                <div className={`flex flex-col sm:flex-row gap-6 sm:gap-8 items-center w-full ${isRtl ? "sm:flex-row-reverse" : ""}`}>
                  
                  {/* Vinyl/Cover Art Mockup */}
                  <div className="relative w-40 h-40 shrink-0 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-brand-surface-2 to-brand-black flex flex-col items-center justify-center p-4 shadow-lg group">
                    {/* Decorative soundwave circle */}
                    <div className="absolute inset-2 rounded-full border border-brand-blue/20 flex items-center justify-center animate-[spin_10s_linear_infinite]" 
                      style={{ animationPlayState: isPlaying ? "running" : "paused" }}>
                      <div className="w-24 h-24 rounded-full border border-dashed border-brand-blue/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/5 border border-brand-blue/40 flex items-center justify-center" />
                      </div>
                    </div>
                    
                    {/* Branding inside cover */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="font-display text-2xl uppercase tracking-wider text-white">SHOMER</span>
                      <span className="text-[7px] font-mono tracking-widest text-brand-blue uppercase mt-1">{currentTrack.coverText}</span>
                      <div className="mt-4 px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20 text-[6px] font-mono text-brand-blue uppercase tracking-widest">
                        {currentTrack.badge}
                      </div>
                    </div>
                  </div>

                  {/* Player Interface */}
                  <div className="flex-1 w-full flex flex-col justify-between self-stretch py-1">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div className="w-full">
                          <h3 className="font-display text-xl sm:text-2xl uppercase text-white leading-tight tracking-wide">
                            {currentTrack.title}
                          </h3>
                          <p className="text-xs text-brand-gray mt-1">
                            {currentTrack.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Sound Waves Animation */}
                      <div className={`h-10 flex items-end justify-between gap-[2px] py-2 overflow-hidden w-full opacity-90 border-b border-brand-border mb-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                        {visualizerBars.map((bar, idx) => (
                          <motion.div
                            key={idx}
                            className="w-1 sm:w-1.5 rounded-t bg-brand-blue"
                            initial={{ height: 4 }}
                            animate={isPlaying ? {
                              height: bar.heights
                            } : { height: 4 }}
                            transition={isPlaying ? {
                              duration: bar.duration,
                              repeat: Infinity,
                              repeatType: "mirror",
                              ease: "easeInOut",
                              delay: bar.delay
                            } : { duration: 0.3 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* HTML Audio element */}
                    <audio
                      ref={audioRef}
                      src={currentTrack.src}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      onDurationChange={handleLoadedMetadata}
                      onCanPlay={handleLoadedMetadata}
                      onEnded={handleAudioEnded}
                      preload="none"
                    />

                    {/* Scrubber / Progress Bar */}
                    <div className="flex flex-col gap-1.5 mb-6">
                      <input
                        ref={progressBarRef}
                        type="range"
                        aria-label={t.progressLabel}
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleScrub}
                        className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-blue focus:outline-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-blue [&::-webkit-slider-thumb]:appearance-none"
                      />
                      <div className={`flex justify-between text-[10px] font-mono text-brand-gray ${isRtl ? "flex-row-reverse" : ""}`}>
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Controls Toolbar */}
                    <div className={`flex items-center justify-between gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                      {/* Left: Speed */}
                      <button
                        onClick={handleSpeedCycle}
                        aria-label={t.speedLabel}
                        className="px-2.5 py-1 border border-brand-border hover:border-brand-blue hover:text-brand-blue rounded text-[10px] font-mono text-brand-gray transition-colors cursor-pointer w-14 text-center shrink-0"
                        title={t.speedLabel}
                      >
                        {playbackRate.toFixed(2)}x
                      </button>

                      {/* Center: Playback actions */}
                      <div className={`flex items-center gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                        {/* Skip back 15s */}
                        <button 
                          onClick={skipBackward} 
                          aria-label={t.rewindLabel}
                          className="text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
                          title={t.rewindLabel}
                        >
                          <RotateCcw size={16} className={isRtl ? "" : "-scale-x-100"} />
                        </button>

                        {/* Play/Pause */}
                        <button
                          onClick={togglePlay}
                          aria-label={isPlaying ? t.pauseLabel : t.playLabel}
                          className="w-12 h-12 rounded-full bg-brand-blue text-brand-black flex items-center justify-center hover:scale-105 hover:bg-white shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-all cursor-pointer shrink-0"
                          title={isPlaying ? t.pauseLabel : t.playLabel}
                        >
                          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className={isRtl ? "mr-1" : "ml-1"} fill="currentColor" />}
                        </button>

                        {/* Skip forward 15s */}
                        <button 
                          onClick={skipForward} 
                          aria-label={t.forwardLabel}
                          className="text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
                          title={t.forwardLabel}
                        >
                          <RotateCcw size={16} className={isRtl ? "-scale-x-100" : ""} />
                        </button>
                      </div>

                      {/* Right: Volume */}
                      <div className={`flex items-center gap-2 max-w-[80px] sm:max-w-[100px] shrink-0 ${isRtl ? "flex-row-reverse" : ""}`}>
                        <button
                          onClick={toggleMute}
                          aria-label={isMuted ? t.unmuteLabel : t.muteLabel}
                          className="text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
                        >
                          {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <input
                          type="range"
                          aria-label={t.volumeLabel}
                          min={0}
                          max={1}
                          step={0.1}
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-12 sm:w-16 h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-blue focus:outline-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-blue [&::-webkit-slider-thumb]:appearance-none"
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
