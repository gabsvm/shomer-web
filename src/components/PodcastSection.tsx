"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Headphones, Sparkles, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "./FadeUp";

export function PodcastSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

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
  const visualizerBars = Array.from({ length: 24 }).map((_, i) => {
    // Generate different anim properties for each bar
    const randomDuration = 0.5 + Math.random() * 0.7;
    const randomDelay = Math.random() * 0.3;
    return {
      duration: randomDuration,
      delay: randomDelay,
      heights: [20, 45, 10, 60, 25, 40, 20].map(h => h * (0.6 + Math.random() * 0.4))
    };
  });

  return (
    <section id="podcast" className="py-16 md:py-24 px-6 md:px-10 bg-brand-surface relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,191,255,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(0,230,118,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text intro */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeUp>
              <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-brand-blue animate-pulse" />
                Shomer Audio Guía
              </div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none uppercase mb-6">
                Explicación de<br />Planes en <em className="text-brand-blue not-italic">Audio.</em>
              </h2>
              <p className="text-base text-brand-gray-light leading-relaxed mb-6 font-light">
                ¿Querés entender a fondo cómo funcionan nuestros planes de monitoreo inteligente? Escuchá esta conversación interactiva. Explica de forma natural y dinámica el funcionamiento del Tótem, los abonos y cómo logramos seguridad continua sin intermediarios.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-brand-gray bg-white/5 border border-white/5 rounded-full px-4 py-2 w-fit">
                <Headphones size={14} className="text-brand-blue" />
                Duración aprox: {duration ? formatTime(duration) : "8:00"} min
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Audio Player */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="relative bg-black/60 border border-brand-border rounded-xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row gap-6 sm:gap-8 items-center overflow-hidden">
                
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
                    <span className="text-[7px] font-mono tracking-widest text-brand-blue uppercase mt-1">Deep Dive</span>
                    <div className="mt-4 px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20 text-[6px] font-mono text-brand-blue uppercase tracking-widest">
                      AUDIO PODCAST
                    </div>
                  </div>
                </div>

                {/* Player Interface */}
                <div className="flex-1 w-full flex flex-col justify-between self-stretch py-1">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl uppercase text-white leading-tight tracking-wide">
                          Planes de Seguridad & Tótem
                        </h3>
                        <p className="text-xs text-brand-gray mt-1">
                          Conversación interactiva sobre tecnología virtual
                        </p>
                      </div>
                    </div>

                    {/* Sound Waves Animation */}
                    <div className="h-10 flex items-end justify-between gap-[2px] py-2 overflow-hidden w-full opacity-90 border-b border-brand-border mb-4">
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
                    src="/audio/podcast-shomer.m4a"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleAudioEnded}
                    preload="metadata"
                  />

                  {/* Scrubber / Progress Bar */}
                  <div className="flex flex-col gap-1.5 mb-6">
                    <input
                      ref={progressBarRef}
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleScrub}
                      className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-blue focus:outline-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-blue [&::-webkit-slider-thumb]:appearance-none"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-brand-gray">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Controls Toolbar */}
                  <div className="flex items-center justify-between gap-4">
                    {/* Left: Speed */}
                    <button
                      onClick={handleSpeedCycle}
                      className="px-2.5 py-1 border border-brand-border hover:border-brand-blue hover:text-brand-blue rounded text-[10px] font-mono text-brand-gray transition-colors cursor-pointer w-14 text-center shrink-0"
                      title="Velocidad de reproducción"
                    >
                      {playbackRate.toFixed(2)}x
                    </button>

                    {/* Center: Playback actions */}
                    <div className="flex items-center gap-4">
                      {/* Skip back 15s */}
                      <button 
                        onClick={skipBackward} 
                        className="text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
                        title="Retroceder 15s"
                      >
                        <RotateCcw size={16} className="-scale-x-100" />
                      </button>

                      {/* Play/Pause */}
                      <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-brand-blue text-brand-black flex items-center justify-center hover:scale-105 hover:bg-white shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-all cursor-pointer shrink-0"
                        title={isPlaying ? "Pausar" : "Reproducir"}
                      >
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
                      </button>

                      {/* Skip forward 15s */}
                      <button 
                        onClick={skipForward} 
                        className="text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
                        title="Adelantar 15s"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>

                    {/* Right: Volume */}
                    <div className="flex items-center gap-2 max-w-[80px] sm:max-w-[100px] shrink-0">
                      <button
                        onClick={toggleMute}
                        className="text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
                      >
                        {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </button>
                      <input
                        type="range"
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
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
