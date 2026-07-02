import React, { useState } from "react";
import { motion } from "motion/react";
import { Sliders, Sparkles, Image, RefreshCw, Eye, ThumbsUp, ZoomIn, Contrast } from "lucide-react";
import EditorialHeroCollage from "./EditorialHeroCollage";

export default function EditorialHeroSection() {
  const [blendMode, setBlendMode] = useState<"normal" | "multiply">("normal");
  const [contrast, setContrast] = useState(1.15);
  const [brightness, setBrightness] = useState(1.0);
  const [saturate, setSaturate] = useState(1.0);

  const resetFilters = () => {
    setContrast(1.15);
    setBrightness(1.0);
    setSaturate(1.0);
    setBlendMode("normal");
  };

  return (
    <section id="interactive-hero" className="relative w-full pt-28 md:pt-32 pb-0 px-4 md:px-6 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        
        {/* Left Column: Founder & Writer */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-neutral-950 uppercase shrink-0 text-center md:text-right"
        >
          <div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight block leading-none whitespace-nowrap">
            Founder.<span className="md:hidden"> </span><span className="hidden md:inline"><br /></span>
            <span className="mt-1 md:block">Writer.</span>
          </div>
        </motion.div>

        {/* Middle Column: The Collage */}
        <div className="w-[290px] sm:w-[450px] md:w-[560px] lg:w-[672px] max-w-full flex items-center justify-center shrink-0">
          <EditorialHeroCollage 
            currentImageUrl="/taranna.png" 
            blendMode={blendMode}
            contrast={contrast}
            brightness={brightness}
            saturate={saturate}
          />
        </div>

        {/* Right Column: Speaker & Model */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-neutral-950 uppercase shrink-0 text-center md:text-left"
        >
          <div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight block leading-none whitespace-nowrap">
            Speaker.<span className="md:hidden"> </span><span className="hidden md:inline"><br /></span>
            <span className="mt-1 md:block">Model.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
