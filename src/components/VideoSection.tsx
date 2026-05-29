"use client";

import { useState, useEffect, useRef } from "react";
import { FadeUp } from "./FadeUp";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

const localVideoTranslations: Record<Locale, {
  tag: string;
  title: React.ReactNode;
  playBtn: string;
  iframeTitle: string;
}> = {
  es: {
    tag: "En funcionamiento",
    title: <>Mirá cómo<br />funciona <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Reproducir video",
    iframeTitle: "Shomer Security - En funcionamiento"
  },
  en: {
    tag: "In Operation",
    title: <>See how<br /><em className="text-brand-blue not-italic">Shomer</em> works.</>,
    playBtn: "Play video",
    iframeTitle: "Shomer Security - In Operation"
  },
  he: {
    tag: "בפעולה",
    title: <>ראה כיצד<br /><em className="text-brand-blue not-italic">שומר</em> עובדת.</>,
    playBtn: "נגן סרטון",
    iframeTitle: "שומר אבטחה - בפעולה"
  },
  de: {
    tag: "In Betrieb",
    title: <>Sehen Sie wie<br /><em className="text-brand-blue not-italic">Shomer</em> funktioniert.</>,
    playBtn: "Video abspielen",
    iframeTitle: "Shomer Security - In Betrieb"
  },
  ru: {
    tag: "В работе",
    title: <>Посмотрите, как<br />работает <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Воспроизвести видео",
    iframeTitle: "Shomer Security - В работе"
  },
  pt: {
    tag: "Em funcionamento",
    title: <>Veja como<br />funciona <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Reproduzir vídeo",
    iframeTitle: "Shomer Security - Em funcionamiento"
  },
  it: {
    tag: "In funzione",
    title: <>Guarda come<br />funziona <em className="text-brand-blue not-italic">Shomer.</em></>,
    playBtn: "Riproduci video",
    iframeTitle: "Shomer Security - In funzione"
  }
};

export function VideoSection() {
  const { language } = useLanguage();
  const isRtl = language === "he";
  const t = localVideoTranslations[language as Locale] || localVideoTranslations.es;

  // Custom player states
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [availableQualities, setAvailableQualities] = useState<string[]>([]);
  const [currentQuality, setCurrentQuality] = useState<string>("default");

  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic API loading
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).YT && (window as any).YT.Player) {
        setIsApiLoaded(true);
        return;
      }

      // Check if script tag is already there
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }
      }

      // Hook callback
      const previousCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        setIsApiLoaded(true);
      };

      // Poll as fallback
      const interval = setInterval(() => {
        if ((window as any).YT && (window as any).YT.Player) {
          setIsApiLoaded(true);
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  // Player initialization & cleanup
  useEffect(() => {
    if (!hasStarted) {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
        playerRef.current = null;
      }
      setIsReady(false);
      setIsPlaying(false);
      setCurrentTime(0);
      return;
    }

    if (isApiLoaded && iframeRef.current && !playerRef.current) {
      setIsLoading(true);
      const YT = (window as any).YT;
      playerRef.current = new YT.Player(iframeRef.current, {
        videoId: "VsBzvaK4f54",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            setDuration(event.target.getDuration());
            event.target.setVolume(volume);
            if (isMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
            const qualities = event.target.getAvailableQualityLevels();
            if (qualities && qualities.length > 0) {
              setAvailableQualities(qualities);
            }
            const current = event.target.getPlaybackQuality();
            if (current) {
              setCurrentQuality(current);
            }
            setIsReady(true);
            setIsLoading(false);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const state = event.data;
            if (state === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              if (playerRef.current) {
                const qualities = playerRef.current.getAvailableQualityLevels();
                if (qualities && qualities.length > 0) {
                  setAvailableQualities(qualities);
                }
                const current = playerRef.current.getPlaybackQuality();
                if (current) {
                  setCurrentQuality(current);
                }
              }
            } else if (state === YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            } else if (state === YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setHasStarted(false);
              setCurrentTime(0);
              setAvailableQualities([]);
              setCurrentQuality("default");
              setShowQualityMenu(false);
            }
          },
          onError: (event: any) => {
            console.error("YouTube Player Error:", event.data);
            setIsLoading(false);
          }
        }
      });
    }
  }, [hasStarted, isApiLoaded]);

  // Track progress time
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && playerRef.current && isReady) {
      interval = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
          setCurrentTime(playerRef.current.getCurrentTime());
        }
      }, 250);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isReady]);

  // Handle controls hide/show timeout
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    resetControlsTimeout();
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!showControls) {
      setShowQualityMenu(false);
    }
  }, [showControls]);

  const handleMouseEnter = () => {
    resetControlsTimeout();
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    }
  };

  // Playback control functions
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!showControls) {
      resetControlsTimeout();
    } else {
      togglePlay();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (playerRef.current && isReady && typeof playerRef.current.seekTo === "function") {
      playerRef.current.seekTo(val, true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current || !isReady) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
      if (volume === 0) {
        setVolume(50);
        playerRef.current.setVolume(50);
      }
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (playerRef.current && isReady) {
      playerRef.current.setVolume(val);
      if (val === 0) {
        playerRef.current.mute();
        setIsMuted(true);
      } else {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerContainerRef.current) return;

    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const getQualityLabel = (quality: string) => {
    switch (quality) {
      case "highres": return "1080p+";
      case "hd1080": return "1080p";
      case "hd720": return "720p";
      case "large": return "480p";
      case "medium": return "360p";
      case "small": return "240p";
      case "tiny": return "144p";
      case "default": return "Auto";
      default: return quality;
    }
  };

  const handleQualityChange = (quality: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentQuality(quality);
    if (playerRef.current && isReady && typeof playerRef.current.setPlaybackQuality === "function") {
      playerRef.current.setPlaybackQuality(quality);
    }
    setShowQualityMenu(false);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="video" className="py-16 md:py-24 px-6 md:px-10 bg-brand-black text-center" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 justify-center flex">{t.tag}</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-10 text-center">
            {t.title}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div 
            ref={playerContainerRef}
            className="max-w-[900px] mx-auto relative rounded overflow-hidden border border-brand-border aspect-video shadow-2xl bg-brand-surface group"
            onMouseMove={resetControlsTimeout}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: (!showControls && isPlaying) ? "none" : "auto" }}
          >
            {hasStarted ? (
              <>
                <div className="absolute inset-0 w-full h-full bg-black pointer-events-none">
                  <div ref={iframeRef} className="w-full h-full scale-[1.01]" />
                </div>

                <div 
                  className="absolute inset-0 w-full h-[calc(100%-60px)] z-10 cursor-pointer"
                  onClick={handleVideoClick}
                />

                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30 pointer-events-none">
                    <div className="w-12 h-12 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin" />
                  </div>
                )}

                <div 
                  className={`absolute bottom-4 left-4 right-4 z-20 backdrop-blur-md bg-brand-black/80 border border-brand-border/60 rounded-xl px-4 py-3 flex items-center justify-between gap-4 transition-all duration-300 ${
                    showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Quality Settings Dropdown Menu */}
                  {showQualityMenu && (
                    <div 
                      className="absolute bottom-16 right-4 z-30 w-36 py-1 bg-brand-black/90 border border-brand-border/60 rounded-lg shadow-xl backdrop-blur-md text-left"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-gray border-b border-brand-border/40 mb-1">
                        Calidad
                      </div>
                      {(availableQualities.length > 0 ? availableQualities.filter(q => q !== "highres" || availableQualities.includes("hd1080")) : ["default", "hd1080", "hd720", "large", "medium"]).map((quality) => (
                        <button
                          key={quality}
                          onClick={(e) => handleQualityChange(quality, e)}
                          className={`w-full px-3 py-1.5 text-xs text-left font-mono transition-colors hover:bg-white/10 hover:text-brand-blue flex items-center justify-between cursor-pointer ${
                            currentQuality === quality ? "text-brand-blue font-bold" : "text-brand-white"
                          }`}
                        >
                          <span>{getQualityLabel(quality)}</span>
                          {currentQuality === quality && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue text-brand-black hover:scale-105 hover:bg-brand-white transition-all cursor-pointer"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      )}
                    </button>
                    
                    <span className="text-xs font-mono text-brand-white font-medium min-w-[75px] text-left">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex-grow flex items-center px-1">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-brand-blue bg-white/20 transition-all hover:h-2 focus:outline-none
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-white [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.5)]
                        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-brand-white [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:hover:scale-125 [&::-moz-range-thumb]:shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                      style={{
                        background: `linear-gradient(to right, #00BFFF 0%, #00BFFF ${progressPercent}%, rgba(255, 255, 255, 0.2) ${progressPercent}%, rgba(255, 255, 255, 0.2) 100%)`
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 group/volume">
                      <button 
                        onClick={toggleMute}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-brand-gray hover:text-brand-white hover:bg-white/10 transition-colors cursor-pointer"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted || volume === 0 ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                          </svg>
                        ) : volume < 50 ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                          </svg>
                        )}
                      </button>
                      
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-0 opacity-0 group-hover/volume:w-16 group-hover/volume:opacity-100 focus:w-16 focus:opacity-100 h-1 rounded-lg appearance-none cursor-pointer accent-brand-blue bg-white/20 transition-all duration-300"
                        style={{
                          background: `linear-gradient(to right, #00BFFF 0%, #00BFFF ${isMuted ? 0 : volume}%, rgba(255, 255, 255, 0.2) ${isMuted ? 0 : volume}%, rgba(255, 255, 255, 0.2) 100%)`
                        }}
                      />
                    </div>

                    {/* Quality settings gear button */}
                    <div className="relative">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowQualityMenu(!showQualityMenu);
                          resetControlsTimeout();
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          showQualityMenu ? "text-brand-blue bg-white/10" : "text-brand-gray hover:text-brand-white hover:bg-white/10"
                        }`}
                        aria-label="Calidad de video"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showQualityMenu ? "rotate-45" : "hover:rotate-45"}`}>
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </button>
                    </div>

                    <button 
                      onClick={toggleFullscreen}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-brand-gray hover:text-brand-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    >
                      {isFullscreen ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={() => setHasStarted(true)}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-5 group cursor-pointer overflow-hidden"
                aria-label={t.playBtn}
              >
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://img.youtube.com/vi/VsBzvaK4f54/maxresdefault.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                <div className="relative z-10 w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center shadow-[0_0_40px_rgba(0,191,255,0.4)] group-hover:scale-110 group-hover:bg-brand-white transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-brand-blue/30 animate-ping opacity-75" />
                  
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="black" className="relative z-20">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className="relative z-10 text-[0.78rem] font-mono tracking-widest uppercase text-brand-white bg-brand-black/40 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded group-hover:text-brand-blue group-hover:bg-brand-black/60 transition-all">
                  {t.playBtn}
                </span>
              </button>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
