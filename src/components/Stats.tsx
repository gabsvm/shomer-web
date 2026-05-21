"use client";

import { useEffect, useState, useRef } from "react";
import { FadeUp } from "./FadeUp";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const step = value / (duration / 16);
      let temp = 0;
      const interval = setInterval(() => {
        temp += step;
        if (temp >= value) {
          setCurrent(value);
          clearInterval(interval);
        } else {
          setCurrent(Math.ceil(temp));
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  // suppressHydrationWarning: SSR renders `value` so crawlers see real numbers;
  // client hydrates with 0 and animates up when scrolled into view.
  return (
    <span ref={ref} suppressHydrationWarning>
      {typeof window === "undefined" ? value : current}
    </span>
  );
}

export function Stats() {
  return (
    <div id="stats" className="border-y border-brand-border bg-brand-surface">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1200px] mx-auto">
        <FadeUp delay={0.1} className="p-8 md:p-9 border-r border-b md:border-b-0 border-brand-border text-center">
          <span className="font-display text-5xl text-brand-blue leading-none block">
            <AnimatedNumber value={20} />
          </span>
          <div className="text-xs text-brand-gray tracking-widest uppercase mt-2 font-mono">
            Años de experiencia
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2} className="p-8 md:p-9 border-b md:border-b-0 md:border-r border-brand-border text-center">
          <span className="font-display text-5xl text-brand-blue leading-none block">
            <AnimatedNumber value={15000} />
          </span>
          <div className="text-xs text-brand-gray tracking-widest uppercase mt-2 font-mono">
            Usuarios protegidos
          </div>
        </FadeUp>

        <FadeUp delay={0.3} className="p-8 md:p-9 border-r border-brand-border text-center">
          <span className="font-display text-4xl text-brand-blue leading-none block pt-1">
            24/7
          </span>
          <div className="text-xs text-brand-gray tracking-widest uppercase mt-2 font-mono">
            Monitoreo activo
          </div>
        </FadeUp>

        <FadeUp delay={0.4} className="p-8 md:p-9 text-center">
          <span className="font-display text-4xl text-brand-blue leading-none block pt-1">
            0%
          </span>
          <div className="text-xs text-brand-gray tracking-widest uppercase mt-2 font-mono">
            Costos ocultos
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
