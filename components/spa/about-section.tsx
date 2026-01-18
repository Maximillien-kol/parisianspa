"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFF9F5] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-2 relative">

          {/* Row 1: WHERE BEAUTY */}
          <div className="w-full text-center">
            <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif text-[#E2B686] uppercase tracking-tight">
              Where Beauty
            </h2>
          </div>

          {/* Row 2: Image - MEETS - Image */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative z-10 my-4 md:my-0">
            {/* Left Image */}
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[70%] md:w-[25%] aspect-[16/9] relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070"
                alt="Spa towels and flowers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 25vw"
              />
            </motion.div>

            {/* Center Text */}
            <div className="text-center flex-1">
              <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif text-[#E2B686] uppercase tracking-tight">
                Meets
              </h2>
            </div>

            {/* Right Image (Tilted) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 6 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-[60%] md:w-[20%] aspect-square relative transform transition-transform duration-500 rounded-xl overflow-hidden shadow-lg border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
                alt="Essential oils"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 20vw"
              />
            </motion.div>
          </div>

          {/* Row 3: NATURE - Content */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mt-4 md:mt-0">
            {/* Nature Text */}
            <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif text-[#E2B686] uppercase tracking-tight">
              Nature
            </h2>

            {/* Content Block */}
            <div className="max-w-md md:pt-8 md:pr-12">
              <h3 className="font-serif text-2xl text-[#4A4036] mb-4">SOFT MOMENTS</h3>
              <p className="text-[#8C8681] leading-relaxed text-sm md:text-base">
                We Blend Expert Massage Therapy With Rejuvenating Beauty Treatments To Create A True Sanctuary Of Relaxation. As Thailand's Leading Spa, We Invite You To Experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
