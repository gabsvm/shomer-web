"use client";

import { useState, useEffect } from "react";
import { Share2 } from "lucide-react";

export function BlogProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[3px] bg-brand-blue z-50 transition-all duration-75" 
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export function BlogShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-brand-gray hover:text-brand-blue transition-colors cursor-pointer"
    >
      <Share2 className="w-4 h-4" /> {copied ? "Copiado!" : "Compartir"}
    </button>
  );
}
