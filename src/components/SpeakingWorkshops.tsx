import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpeakingSession } from "../types";
import { Play, Volume2, Mic, Calendar, Sparkles, Radio } from "lucide-react";

const SESSIONS: SpeakingSession[] = [
  {
    id: "keynote",
    type: "Keynote Topic",
    title: "Rethinking Grassroots Mobilization",
    description: "A deep dive into structuring community development projects without losing human-centric design. Discussing models implemented across remote Northeast regions to marry rigorous impact metrics with localized wisdom."
  },
  {
    id: "session",
    type: "Interactive Session",
    title: "Emotional Intelligence in Social Sector Leadership",
    description: "Designing workflows that honor community emotions, vulnerability, and resilience. Addressing systemic burnout and building active circles that sustain deep, localized care over decades."
  }
];

export default function SpeakingWorkshops() {
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Generate simulated audio heights for the interactive soundwave mask
  const soundwaveBars = Array.from({ length: 18 }, () => Math.floor(Math.random() * 25) + 5);

  return (
    <div id="speaking" className="py-24 md:py-36 bg-neutral-50 px-6 border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-stretch">
          
          {/* Left Half: Fixed/Sticky Stage Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="lg:sticky lg:top-36 h-fit space-y-6">
              
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-400 font-bold block">
                  05 // PRESS & DISCOURSE
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-neutral-900 leading-tight">
                  Speaking &<br />
                  <span className="italic font-light">Workshops.</span>
                </h2>
              </div>

              {/* Stage Portrait Frame */}
              <div className="relative w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-md group border border-neutral-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200"
                  alt="Taranna on Stage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.9] contrast-[1.05] group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                
                {/* Visual shade and cross-mark lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-neutral-300 tracking-widest uppercase">
                      LATEST DIALOGS
                    </span>
                    <p className="font-heading font-medium text-lg leading-tight text-white">
                      The Global Dignity Summit
                    </p>
                  </div>
                  
                  <span className="font-mono text-[10px] text-neutral-400 bg-black/60 px-2 py-0.5 rounded-md border border-neutral-800">
                    KEYNOTE // LIVE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                <Calendar className="w-4 h-4 text-neutral-500" />
                <span>BOOKING SCHEDULE FOR 2026/2027 IS OPEN</span>
              </div>

            </div>
          </div>

          {/* Right Half: Scrolling Stack & Slit Video Mask */}
          <div className="lg:col-span-7 flex flex-col gap-12 justify-center">
            
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group"
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-neutral-900 rounded-l" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] bg-neutral-100 uppercase text-neutral-500 font-bold px-2.5 py-1 rounded">
                  {SESSIONS[0].type}
                </span>
                <span className="font-mono text-xs text-neutral-400 font-semibold">[ KEY 01 ]</span>
              </div>

              <h3 className="font-heading font-semibold text-xl md:text-2xl text-neutral-900 group-hover:text-neutral-800 tracking-wide mb-3">
                {SESSIONS[0].title}
              </h3>
              
              <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
                {SESSIONS[0].description}
              </p>
            </motion.div>

            {/* THE TALL VERTICAL SLIT VIDEO WINDOW MASK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden border border-neutral-200 cursor-pointer group bg-neutral-900 shadow-md"
              onMouseEnter={() => setIsPlayingShowreel(true)}
              onMouseLeave={() => setIsPlayingShowreel(false)}
            >
              {/* Backlit Stage backdrop simulating a stage looping media clip */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200"
                  alt="Stage loop background"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-30 contrast-125 saturate-50 mix-blend-overlay"
                />
                {/* Slow pulse overlay mapping video flow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-neutral-950/40 animate-pulse" />
              </div>

              {/* Symmetrical framing lines (Feather Slit Look) */}
              <div className="absolute inset-y-0 left-12 right-12 border-l border-r border-white/10 flex items-center justify-between px-6 z-10 bg-neutral-950/20">
                
                {/* Left indicators */}
                <div className="hidden sm:flex flex-col gap-1 text-white">
                  <span className="font-mono text-[9px] tracking-widest text-neutral-400">MEDIA REG</span>
                  <p className="font-heading font-medium text-xs text-white">Taranna Showreel</p>
                </div>

                {/* Central active Play state / Dynamic sound waves */}
                <div className="flex flex-col items-center justify-center gap-3 mx-auto">
                  
                  {/* Soundwave animation */}
                  <div className="flex items-end gap-[2px] h-8 justify-center">
                    {soundwaveBars.map((val, i) => (
                      <motion.div
                        key={i}
                        className={`w-[2.5px] rounded-full bg-emerald-400 ${
                          isPlayingShowreel ? "opacity-100" : "opacity-30"
                        }`}
                        animate={{
                          height: isPlayingShowreel 
                            ? [val * 0.3, val * 1.1, val * 0.4, val * 0.9, val * 0.3][i % 5] 
                            : 4
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.7 + (i % 3) * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Operational status button */}
                  <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800/80 px-3 py-1 rounded-full shadow-sm z-20">
                    {isPlayingShowreel ? (
                      <>
                        <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                        <span className="font-mono text-[9px] text-white tracking-widest uppercase">
                          [ SHOWREEL PLAYING ]
                        </span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                        <span className="font-mono text-[9px] text-neutral-300 tracking-widest uppercase">
                          Hover to Play speaking Showreel
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right indicators */}
                <div className="hidden sm:flex flex-col gap-1 text-right text-white">
                  <span className="font-mono text-[9px] tracking-widest text-neutral-400">DURATION</span>
                  <p className="font-mono text-xs font-semibold">01:45 SEC</p>
                </div>

              </div>

              {/* Diagonal visual slit highlights */}
              <div className="absolute top-0 right-0 w-24 h-full bg-white/5 skew-x-12 transform pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group"
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] bg-neutral-100 uppercase text-neutral-500 font-bold px-2.5 py-1 rounded">
                  {SESSIONS[1].type}
                </span>
                <span className="font-mono text-xs text-neutral-400 font-semibold">[ KEY 02 ]</span>
              </div>

              <h3 className="font-heading font-semibold text-xl md:text-2xl text-neutral-900 group-hover:text-neutral-800 tracking-wide mb-3">
                {SESSIONS[1].title}
              </h3>
              
              <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
                {SESSIONS[1].description}
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
