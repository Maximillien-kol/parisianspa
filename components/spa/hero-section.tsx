"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a1512]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Relaxing spa treatment"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Main Content Wrapper - Aligned with Header */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-[80px] pointer-events-none">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 h-full flex flex-col justify-end relative">

          {/* Middle Row: Welcome Text & Happy Client */}
          <div className="flex flex-col md:flex-row items-end justify-between w-full mb-8 pointer-events-auto">
            {/* Left: Welcome Text */}
            <div className="max-w-md space-y-2 text-white/90 text-[11px] md:text-xs font-medium tracking-[0.2em] leading-relaxed uppercase" style={{ fontFamily: "var(--font-sans)" }}>
              <p>Welcome to your personal escape</p>
              <p>A serene space for deep rest and renewal.</p>
              <p>Your weekly ritual to unwind the body and calm the mind.</p>
            </div>
          </div>

          {/* Massive Typography */}
          <div className="w-full pointer-events-auto">
            <h1
              className="text-4xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-[9vw] leading-[0.85] sm:leading-[0.8] font-serif text-white whitespace-nowrap opacity-90 text-left -ml-[0.09em]"
              style={{ letterSpacing: "-0.02em" }}
            >
              GOLDEN MOMENTS.
            </h1>
          </div>

        </div>
      </div>

      {/* Footer Marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#F5F5F0] z-30 flex items-center overflow-hidden border-t border-[#E6CBA8]/20">
        <div className="animate-scroll flex whitespace-nowrap min-w-full">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-[#5C4D43] text-xs font-medium tracking-[0.15em] uppercase">KIBAGABAGA, 𝐊𝐆 𝟑𝟓7 𝐍•𝟔</span>
              <span className="mx-8 text-[#E6CBA8]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
              </span>
              <span className="text-[#5C4D43] text-xs font-medium tracking-[0.15em] uppercase">MON-SUN: 𝟎𝟗:𝟎𝟎–𝟐𝟏:𝟎𝟎</span>
              <span className="mx-8 text-[#E6CBA8]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
