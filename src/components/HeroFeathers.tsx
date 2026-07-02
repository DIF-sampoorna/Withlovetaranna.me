import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, LucideIcon, Sprout, Pen, Mic, Camera } from "lucide-react";

interface SeedFeather {
  id: string;
  label: string;
  description: string;
  image: string;
  icon: LucideIcon;
  readMoreColor: string;
  objectPosition?: string;
}

const FEATHERS: SeedFeather[] = [
  {
    id: "visionary",
    label: "SOCIAL ENTREPRENEUR",
    description: "Founder of Deepjyoti India Foundation (Sampoorna), building healthcare, mental health, and dignity-first programs for young women and the elderly across India.",
    image: "/social_ent.jpeg",
    icon: Sprout,
    readMoreColor: "text-sky-400 hover:text-sky-300",
    objectPosition: "center 20%"
  },
  {
    id: "voice",
    label: "WRITER",
    description: "Free verse. Confessional. Unguarded. Poems that turn maggi and adrak chai into metaphors for desire, and grief into a language anyone can hold.",
    image: "/Writer.jpg.jpeg",
    icon: Pen,
    readMoreColor: "text-orange-400 hover:text-orange-300",
    objectPosition: "center 20%"
  },
  {
    id: "strategist",
    label: "PUBLIC SPEAKER",
    description: "A podcaster and speaker who talks about what most people avoid — shame, guilt, rejection — and invites people to feel it all the way through instead of around it.",
    image: "/Speaker.JPG.jpeg",
    icon: Mic,
    readMoreColor: "text-teal-400 hover:text-teal-300",
    objectPosition: "center 20%"
  },
  {
    id: "catalyst",
    label: "MODEL",
    description: "A plus-size model who became, for someone else, exactly what she once needed to see. Her work has helped a generation of plus-size men and women embrace their bodies as they are.",
    image: "/Modle.JPG.jpeg",
    icon: Camera,
    readMoreColor: "text-amber-400 hover:text-amber-300",
    objectPosition: "center 20%"
  }
];

const LOGOS = [
  { name: "Deepjyoti India Foundation", abbr: "DJIF" },
  { name: "Guwahati Welfare Project", abbr: "GWP" },
  { name: "Assam Community Health Association", abbr: "ACHA" },
  { name: "Northeast Chronicle Press", abbr: "NCP" },
  { name: "Shillong Education Alliance", abbr: "SEA" }
];

interface HeroFeathersProps {
  onNavigate?: (view: string) => void;
}

const VIEW_MAPPING: Record<string, string> = {
  visionary: "social-entrepreneur",
  voice: "writer",
  catalyst: "model",
  strategist: "public-speaker"
};

export default function HeroFeathers({ onNavigate }: HeroFeathersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Scroll animations for gliding and dissolving
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.7], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <div id="feathers" className="relative bg-white" ref={containerRef}>
      {/* 4 Feathers Viewport - Locked to Full Screen */}
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative h-[95vh] w-full overflow-hidden flex flex-col md:flex-row bg-neutral-900 border-b border-neutral-100"
      >
        {FEATHERS.map((feather, idx) => {
          const isHovered = hoveredIdx === idx;
          const isAnyHovered = hoveredIdx !== null;
          
          // Width animations: default 25%, hover 50%, non-hover 16.6%
          let widthPercent = "25%";
          if (isAnyHovered) {
            widthPercent = isHovered ? "50%" : "16.6%";
          }

          // Height animations for mobile: default 25%, hover 40%, non-hover 20%
          let heightPercent = "100%";
          if (isMobile) {
            heightPercent = "25%";
            if (isAnyHovered) {
              heightPercent = isHovered ? "40%" : "20%";
            }
          }

          return (
            <div
              key={feather.id}
              onClick={() => {
                if (onNavigate) {
                  onNavigate(VIEW_MAPPING[feather.id]);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative transition-all duration-700 ease-out flex-grow cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800/10 last:border-0"
              style={{ 
                width: isMobile ? "100%" : widthPercent,
                height: isMobile ? heightPercent : "100%"
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Background Image with hardware-accelerated CSS transition on hover */}
              <div className="absolute inset-0 w-full h-full bg-neutral-950">
                <img
                  src={feather.image.startsWith("http") ? feather.image : encodeURI(feather.image)}
                  alt={feather.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: feather.objectPosition || "center 20%",
                    transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "scale(1.06)" : "scale(1.0)",
                    filter: isHovered ? "grayscale(100%) brightness(0.3) contrast(1.1)" : "grayscale(0%) brightness(0.65) contrast(1.0)"
                  }}
                />
                {/* Subtle visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-60" />
                
                {/* Visionary scan/lens-iris effect overlay for visionary and voice */}
                {(feather.id === "visionary" || feather.id === "voice") && (
                  <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none transition-opacity duration-700 ${
                    isHovered ? "opacity-100" : "opacity-40"
                  }`} />
                )}
              </div>

              {/* Floating Content Inside Slice */}
              <div className={`absolute inset-0 p-6 md:p-12 flex flex-col z-10 select-none transition-all duration-500 ${
                isHovered ? "justify-center items-center text-center bg-black/35" : "justify-end items-start text-left"
              }`}>
                {/* Top icon - absolutely positioned so it doesn't interfere with center-middle text alignment */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                  <motion.div 
                    animate={{
                      scale: isHovered ? 1.15 : 1.0,
                      borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
                      backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.4)"
                    }}
                    className="p-2 md:p-2.5 rounded-full border border-neutral-800 text-white backdrop-blur-xs flex items-center justify-center relative"
                  >
                    <feather.icon className="w-4 h-4 text-neutral-100" />
                    
                    {/* Pulsing glow ring for visionary and voice */}
                    {(feather.id === "visionary" || feather.id === "voice") && (
                      <span className="absolute inset-0 rounded-full border border-white/35 animate-ping opacity-25" />
                    )}
                  </motion.div>
                </div>

                {/* Vertical centered or bottom labels */}
                <motion.div 
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`flex flex-col gap-3 transition-all duration-500 ${
                    isHovered ? "items-center max-w-xl" : "items-start"
                  }`}
                >
                  <span className={`font-mono tracking-[0.25em] text-neutral-400 transition-all duration-500 uppercase ${
                    isHovered ? "text-xs md:text-sm" : "text-[10px] md:text-xs"
                  }`}>
                    ROLE OUTLINE
                  </span>
                  
                  {/* Stark bracket text - Fades in/up with tracking */}
                  <motion.h2 
                    className={`font-heading font-bold text-white transition-all duration-500 tracking-widest uppercase ${
                      isHovered ? "text-2xl md:text-4xl my-2" : "text-lg md:text-2xl"
                    }`}
                    animate={{
                      letterSpacing: isHovered ? "0.18em" : "0.05em",
                      color: isHovered ? "#ffffff" : "#e5e5e5",
                      textShadow: isHovered && (feather.id === "visionary" || feather.id === "voice")
                        ? "0 0 12px rgba(255,255,255,0.4)"
                        : "none"
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    [ {feather.label} ]
                  </motion.h2>

                  {/* Subtitle description appearing on hover or expanded */}
                  <div className={`transition-all duration-500 ease-out ${
                    isHovered ? "opacity-100 translate-y-0 max-h-[300px] mt-4" : "opacity-0 translate-y-4 max-h-0 pointer-events-none overflow-hidden"
                  }`}>
                    <p className={`font-sans text-neutral-100 leading-relaxed font-normal transition-all duration-500 ${
                      isHovered ? "text-sm md:text-lg" : "text-xs md:text-sm"
                    }`}>
                      {feather.description}
                    </p>
                    <div className={`font-mono font-bold tracking-widest uppercase mt-4 flex items-center gap-1.5 transition-all duration-300 ${feather.readMoreColor} ${
                      isHovered ? "text-xs md:text-sm justify-center" : "text-[10px] md:text-xs"
                    }`}>
                      Read More <span className="text-sm">→</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}

      </motion.div>
    </div>
  );
}
