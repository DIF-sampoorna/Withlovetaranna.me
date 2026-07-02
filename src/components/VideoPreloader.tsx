import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface VideoPreloaderProps {
  onComplete: () => void;
}

export default function VideoPreloader({ onComplete }: VideoPreloaderProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1000);
    return () => {
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleEnter = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }}
      className="fixed inset-0 z-50 bg-[#121110] w-screen h-screen overflow-hidden select-none flex flex-col justify-between p-8 md:p-12 text-[#FCFAF6]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full scale-90 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/20">
          <motion.img 
            src="/taranna.png" 
            alt="Cinematic Portrait Fallback" 
            initial={{ scale: 1, filter: "grayscale(30%) brightness(50%) blur(4px)" }}
            animate={{ scale: 1.08, filter: "grayscale(10%) brightness(60%) blur(0px)" }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
          />
          <video
            src="/vid.mp4"
            autoPlay
            muted
            playsInline
            onEnded={onComplete}
            onError={onComplete}
            className="absolute inset-0 w-full h-full md:object-cover object-contain pointer-events-none mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#121110] z-10 pointer-events-none opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/80 via-transparent to-[#121110]/80 z-10 pointer-events-none opacity-90" />
        </div>
      </div>
      <div className="relative z-10 w-full flex justify-end" />
      <div className="relative z-10" />
      <div className="relative z-10 flex justify-end items-center w-full">
        <div className="h-12 flex items-center justify-center">
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={handleEnter}
              className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#121110] bg-[#FCFAF6]/95 hover:bg-[#FCFAF6] shadow-2xl px-6 py-3 rounded-full transition-all flex items-center gap-2 duration-300 scale-100 hover:scale-105 active:scale-95 cursor-pointer uppercase border border-neutral-200/20 backdrop-blur-sm"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E65F1B]" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
