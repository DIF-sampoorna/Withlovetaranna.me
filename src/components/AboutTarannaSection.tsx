import React from "react";
import { motion } from "motion/react";
import { Heart, Feather, Sparkles, BookOpen } from "lucide-react";

export default function AboutTarannaSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#FCFAF6] border-t border-neutral-200 overflow-hidden">
      {/* Background aesthetics matching fine-art publication layout */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#0e5fa3]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#E65F1B]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#E65F1B]" /> THE SHARED INSTINCT
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight uppercase leading-none">
            ABOUT TARANNA
          </h2>
          <div className="h-[2px] w-12 bg-neutral-900 mt-4 md:mt-5" />
        </div>

        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Decorative Polaroids (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="relative group p-4 bg-white border border-neutral-200 shadow-xl rounded-3xl overflow-hidden"
            >
              {/* Image Aspect ratio is beautiful vertical portrait */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative">
                <img 
                  src="/NOV00034.JPG.jpeg" 
                  alt="Taranna Deepjyoti" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Overlay subtle shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                
                {/* Float tag */}
                <div className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.3em] font-bold text-white uppercase bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-md">
                  PORTRAIT // STUDIO AMBER
                </div>
              </div>

              {/* Polaroid bottom credit */}
              <div className="pt-4 pb-2 text-center">
                <p className="font-display italic text-base text-neutral-800">
                  “Daring to exist completely, in public and in shadow.”
                </p>
                <p className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase mt-1 font-bold">
                  Kolkata, Summer 2026
                </p>
              </div>
            </motion.div>

            {/* Minor supporting polaroid stack effect */}
            <div className="hidden sm:grid grid-cols-2 gap-4 mt-2">
              <div className="p-3 bg-white border border-neutral-150 rounded-2xl shadow-sm rotate-[-1.5deg]">
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100">
                  <img src="/TD-382.jpg.jpeg" alt="Poise" className="w-full h-full object-cover" />
                </div>
                <div className="pt-2 text-center font-mono text-[7px] text-neutral-400 uppercase tracking-widest font-bold">
                  Symmetrical Poise
                </div>
              </div>
              <div className="p-3 bg-white border border-neutral-150 rounded-2xl shadow-sm rotate-[2deg]">
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100">
                  <img src="/Writer.jpg.jpeg" alt="Writer" className="w-full h-full object-cover" />
                </div>
                <div className="pt-2 text-center font-mono text-[7px] text-neutral-400 uppercase tracking-widest font-bold">
                  The Writer's Gaze
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Four Rooms Dashboard (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full">
            
            {/* Lead Statement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <p className="font-display italic text-xl md:text-2xl text-neutral-800 leading-relaxed font-light">
                Taranna Deepjyoti moves between four different rooms — and shows up unguarded in every one of them.
              </p>

              <div className="font-sans text-neutral-600 space-y-6 text-sm md:text-base leading-relaxed font-light">
                <p>
                  She's the founder of <strong className="font-semibold text-neutral-900">Deepjyoti India Foundation (Sampoorna)</strong>, building health, mental wellness, and dignity-first programs for young women and the elderly across India. She's a confessional poet, writing free verse that turns longing, loss, and the ache of distance into something physical enough to hold.
                </p>
                <p>
                  She's a speaker and podcaster who talks about what most people are taught to swallow — <strong className="font-semibold text-neutral-900">shame, guilt, rejection</strong> — and asks people to feel their way through instead of around it. And she's a plus-size model whose work has helped a generation of men and women see their own bodies as already enough.
                </p>
                <p className="border-l-2 border-[#E65F1B]/30 pl-5 italic font-display text-neutral-700 text-base md:text-lg">
                  Different mediums, same instinct: dig into a feeling before it's fully named, and turn it into something someone else can use.
                </p>
                <p>
                  Taranna doesn't separate the personal from the professional — her foundation, her poems, her talks, and her photographs all come from the same place, and she'd rather show up authentically than perform confidence she doesn't feel. That's the thread running through everything she builds.
                </p>
              </div>
            </motion.div>

            {/* The Four Rooms Mini Dashboard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
            >
              <div className="p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#0e5fa3]/10 flex items-center justify-center text-[#0e5fa3]">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase">
                  SAMPOORNA
                </span>
                <span className="font-heading text-xs text-neutral-800 font-bold uppercase">
                  Welfare Loop
                </span>
              </div>

              <div className="p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E65F1B]/10 flex items-center justify-center text-[#E65F1B]">
                  <Feather className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase">
                  FREE VERSE
                </span>
                <span className="font-heading text-xs text-neutral-800 font-bold uppercase">
                  Confessional
                </span>
              </div>

              <div className="p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#0a8fa0]/10 flex items-center justify-center text-[#0a8fa0]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase">
                  SOMATIC
                </span>
                <span className="font-heading text-xs text-neutral-800 font-bold uppercase">
                  Vocal Stage
                </span>
              </div>

              <div className="p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-amber-600 font-bold block uppercase">
                  PLUS-SIZE
                </span>
                <span className="font-heading text-xs text-neutral-800 font-bold uppercase">
                  Representation
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
