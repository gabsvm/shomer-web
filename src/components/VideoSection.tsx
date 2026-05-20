"use client";

import { FadeUp } from "./FadeUp";

export function VideoSection() {
  return (
    <section id="video" className="py-24 px-6 md:px-10 bg-brand-black text-center">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="font-mono text-xs tracking-[0.18em] text-brand-blue uppercase mb-3 justify-center flex">En funcionamiento</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-none uppercase mb-10">
            Mirá cómo<br />funciona <em className="text-brand-blue not-italic">Shomer.</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="max-w-[900px] mx-auto relative rounded overflow-hidden border border-brand-border aspect-video shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/VsBzvaK4f54" 
              title="Shomer Security - Touch ID en funcionamiento" 
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
