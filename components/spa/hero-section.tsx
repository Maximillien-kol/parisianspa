"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const marqueeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.2 },
    },
  };

  return (
    <section className="relative h-screen w-full bg-[#1a1512] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Relaxing spa treatment"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      {/* Main Content Wrapper - Aligned with Header */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-[80px] pointer-events-none">
        <div className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 h-full flex flex-col justify-end relative">
          {/* Middle Row: Welcome Text & Happy Client */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center w-full mb-12 pointer-events-auto text-center h-full pb-20"
          >
            {/* Center: Welcome Text */}
            <div className="w-full max-w-6xl mx-auto">
              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white leading-[1.1] mb-8 drop-shadow-lg"
              >
                Immerse yourself in a world<br />
                <span className="italic"> of personal escape.</span>
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="max-w-xl mx-auto space-y-3 text-white/90 text-lg font-light tracking-wide leading-relaxed drops-shadow-md"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <p>A serene space for deep rest and renewal.</p>
                <p>Your weekly ritual to unwind the body and calm the mind.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Marquee */}
      <motion.div
        variants={marqueeVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 h-[60px] bg-[#F5F5F0] z-30 flex items-center overflow-hidden border-t border-[#E6CBA8]/20"
      >
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
      </motion.div>

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
