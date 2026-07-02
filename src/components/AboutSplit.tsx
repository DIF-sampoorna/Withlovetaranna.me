import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Smile, Award, Activity, Heart, Sparkles, BookOpen } from "lucide-react";

interface MosaicPhoto {
  id: string;
  year?: string;
  title: string;
  category?: string;
  type: "image" | "pattern" | "text";
  image?: string;
  patternType?: "stripes" | "dots" | "chevrons";
  bgColor?: string;
  textColor?: string;
  text?: string;
  overlayColor?: "red" | "none";
  gridArea: string;
  desc: string;
}

const MOSAIC_PHOTOS: MosaicPhoto[] = [
  {
    id: "photo-top-left",
    year: "CONNECTION",
    title: "Taranna Deepjyoti — Portrait Profile",
    category: "Stable moments",
    type: "image",
    image: "/NOVA0019.JPG.jpeg",
    gridArea: "col-span-3 row-span-3",
    desc: "A striking, high-contrast professional portrait profile of Taranna, embodying deep commitment, courage, and focused clarity."
  },
  {
    id: "photo-top-mid",
    year: "IDENTITY",
    title: "Contemplative Leadership",
    category: "Confidence",
    type: "image",
    image: "/TD-263.jpg.jpeg",
    gridArea: "col-span-4 row-span-3",
    desc: "A serene and authentic portrait showcasing Taranna in a thoughtful stance, reflecting on long-term sustainability and regional empowerment."
  },
  {
    id: "text-post",
    title: "Post Interaction Hub",
    type: "text",
    bgColor: "bg-[#aa0066]", // Magenta
    textColor: "text-white",
    text: "POST",
    gridArea: "col-span-5 row-span-3",
    desc: "An active digital portal for sharing field stories, micro-articles, and localized narratives with partners."
  },
  {
    id: "photo-row2-left",
    year: "VISION",
    title: "Community Connection & Hope",
    category: "Resolve",
    type: "image",
    image: "/TD-297.jpg.jpeg",
    gridArea: "col-span-5 row-span-4",
    desc: "A warm and engaging moment capturing Taranna’s authentic interaction, grassroot solidarity, and field integration."
  },
  {
    id: "text-challenge",
    title: "Challenge Initiative Block",
    type: "text",
    bgColor: "bg-[#0e5fa3]", // Blue
    textColor: "text-white",
    text: "CHALLENGE",
    gridArea: "col-span-4 row-span-4",
    desc: "A creative design space prompting volunteers to solve critical logistical and accessibility issues."
  },
  {
    id: "photo-row2-right",
    year: "OUTREACH",
    title: "Grassroots Grounding Portrait",
    category: "Empathy",
    type: "image",
    image: "/TD-004.jpg.jpeg",
    gridArea: "col-span-3 row-span-4",
    desc: "A grounded, powerful, and highly detailed portrait from the field, highlighting a solid foundation of regional care and resilience."
  },
  {
    id: "photo-row3-left",
    year: "GRACE",
    title: "Editorial Portfolio Focus",
    category: "Focus",
    type: "image",
    image: "/TD-382.jpg.jpeg",
    gridArea: "col-span-6 row-span-3",
    desc: "A stunning close-up shot capturing a strong sense of purpose, intense dedication, and leadership drive."
  },
  {
    id: "text-meet",
    title: "Meet Collaboration Node",
    type: "text",
    bgColor: "bg-[#0a8fa0]", // Cyan/Teal
    textColor: "text-white",
    text: "MEET",
    gridArea: "col-span-3 row-span-3",
    desc: "A structured calendar system supporting co-design sessions alongside matriarches and local leaders."
  },
  {
    id: "photo-row3-right",
    year: "NURTURE",
    title: "Laughter in Piggyback Hug",
    category: "Future Care",
    type: "image",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600",
    gridArea: "col-span-3 row-span-3",
    desc: "A bright, beautiful moment of a child laughing on her back, highlighting generational empowerment and care."
  },
  {
    id: "text-hangout",
    title: "Hangout Interaction Node",
    type: "text",
    bgColor: "bg-[#c57d11]", // Amber
    textColor: "text-white",
    text: "HANG OUT",
    gridArea: "col-span-3 row-span-2",
    desc: "Informal, safe social environments where team members reflect and record field insights."
  },
  {
    id: "text-savour",
    title: "Savour Visual Block",
    type: "text",
    bgColor: "bg-[#960932]", // Crimson/Ruby
    textColor: "text-white",
    text: "SAVOUR",
    gridArea: "col-span-3 row-span-2",
    desc: "Documenting community culinary traditions and harvesting wisdom across borders."
  },
  {
    id: "text-browse",
    title: "Browse Media Repository",
    type: "text",
    bgColor: "bg-[#6b9d10]", // Lime Green
    textColor: "text-white",
    text: "BROWSE",
    gridArea: "col-span-3 row-span-2",
    desc: "Exploring open-source clinical diagnostic tools and design system archives."
  },
  {
    id: "photo-row4-right",
    year: "ARTISTRY",
    title: "Framed Perspective of Red Roses",
    category: "Creativity",
    type: "image",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600",
    gridArea: "col-span-3 row-span-2",
    desc: "An elaborate artistic vignette holding a square wooden frame wrapped with red roses, capturing design brilliance."
  }
];

export default function AboutSplit() {
  const [activePhoto, setActivePhoto] = useState<MosaicPhoto | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const photoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && typeof event.target.result === "string") {
          setUploadedImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && typeof event.target.result === "string") {
          setUploadedImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="about" ref={containerRef} className="py-24 md:py-36 bg-neutral-100/50 px-6 border-b border-neutral-200">
      
      {/* SVG Definitions for Clipping Mask & Classical Halftone Hatch Patterns */}
      <svg className="absolute w-0 h-0" aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <clipPath id="silhouette-profile" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0 
                     C 0.65 0, 0.85 0.05, 0.82 0.25 
                     C 0.80 0.32, 0.88 0.38, 0.85 0.50
                     C 0.82 0.62, 0.68 0.72, 0.78 0.85
                     C 0.80 0.88, 0.82 0.92, 0.82 1
                     L 0.12 1 
                     C 0.12 0.90, 0.18 0.82, 0.22 0.78
                     C 0.24 0.75, 0.25 0.72, 0.23 0.68
                     C 0.20 0.65, 0.18 0.62, 0.24 0.58
                     C 0.20 0.55, 0.20 0.52, 0.24 0.49
                     C 0.16 0.46, 0.18 0.42, 0.25 0.40
                     C 0.23 0.33, 0.22 0.25, 0.28 0.17
                     C 0.32 0.08, 0.38 0, 0.5 0 Z" />
          </clipPath>
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="#171717" opacity="0.8" />
          </pattern>
          <pattern id="stripes" x="0" y="0" width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="16" stroke="#171717" strokeWidth="4" opacity="0.8" />
          </pattern>
          <pattern id="chevrons" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 6 6 L 12 0" fill="none" stroke="#171717" strokeWidth="1.5" opacity="0.8" />
          </pattern>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-stretch">
        
        {/* Left Hand: Sticky Visual Centerpiece with the Segmented head profile silhouette */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between">
          <div className="lg:sticky lg:top-36 flex flex-col gap-8 h-fit">
            
            {/* Header Title inside Left Side */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-400 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                02 // SILHOUETTE GALLERY ARCHIVE
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 leading-tight">
                An Evolving <br />
                <span className="italic font-light">Visual Gallery.</span>
              </h2>
            </div>

            {/* SEGMENTED PROFILES LAYOUT MODULE */}
            <div className="relative w-full h-[520px] md:h-[650px] flex items-center justify-center py-4 bg-transparent select-none">
              
              {/* Backing Silhouette Drop Shadow Plate */}
              <div 
                className="absolute inset-0 w-full h-full transform translate-x-3 translate-y-3 bg-neutral-900/10 pointer-events-none"
                style={{ clipPath: "url(#silhouette-profile)" }}
              />

              {/* Main Clipped Grid Mosaic Frame or Uploaded Portrait */}
              {uploadedImage ? (
                <motion.div 
                  style={{ opacity: photoOpacity }}
                  className="relative w-full h-full bg-white border border-neutral-900 overflow-hidden flex flex-col items-center justify-center rounded-2xl shadow-md p-1 group"
                >
                  <img
                    src={uploadedImage}
                    alt="Uploaded Custom Silhouette Gallery Collage"
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => setUploadedImage(null)}
                    className="absolute top-4 right-4 bg-neutral-900/90 hover:bg-neutral-950 text-white text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full z-30 shadow-lg border border-neutral-800 transition-colors cursor-pointer"
                  >
                    RESET TO DEFAULT
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  style={{ 
                    opacity: photoOpacity,
                    clipPath: "url(#silhouette-profile)"
                  }}
                  className="relative w-full h-full bg-[#fcf9f2] grid grid-cols-12 grid-rows-12 gap-[3px] border border-neutral-900 overflow-hidden"
                >
                  {MOSAIC_PHOTOS.map((item) => {
                    const isHovered = activePhoto?.id === item.id;
                    
                    return (
                      <div
                        key={item.id}
                        className={`${item.gridArea} relative overflow-hidden group cursor-pointer transition-all duration-300`}
                        onMouseEnter={() => setActivePhoto(item)}
                        onMouseLeave={() => setActivePhoto(null)}
                      >
                        {item.type === "text" ? (
                          <div className={`w-full h-full ${item.bgColor || 'bg-neutral-900'} flex flex-col items-center justify-center p-2.5 transition-all duration-500 hover:scale-105 active:scale-95 text-center`}>
                            <span className={`font-mono text-xs sm:text-sm md:text-base font-black tracking-widest ${item.textColor || 'text-white'} uppercase antialiased`}>
                              {item.text}
                            </span>
                          </div>
                        ) : item.type === "image" && item.image ? (
                          <>
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale contrast-125 saturate-0 group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-105"
                            />
                            
                            {/* Red tint highlights mimicking the reference graphic (red beanie/vest) */}
                            {item.overlayColor === "red" && (
                              <div className="absolute inset-0 bg-red-600/35 mix-blend-multiply group-hover:bg-transparent group-hover:mix-blend-normal transition-all duration-500 z-10" />
                            )}
                            
                            {/* Suttle dark depth layer */}
                            <div className="absolute inset-0 bg-neutral-900/15 group-hover:bg-transparent transition-colors duration-500" />
                          </>
                        ) : (
                          // Pattern type cell rendering using pre-defined SVG pattern definitions above
                          <div className="w-full h-full bg-cream-50 flex items-center justify-center relative p-1">
                            <svg className="w-full h-full min-h-6 min-w-6">
                              <rect width="100%" height="100%" fill={`url(#${item.patternType})`} />
                            </svg>
                            <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-red-600/10 transition-colors" />
                          </div>
                        )}

                        {/* Display fine indicators */}
                        {item.year && (
                          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="font-mono text-[9px] text-white bg-neutral-900/90 py-0.5 px-2 rounded-md shadow-sm border border-neutral-800">
                              {item.year}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* Active Orange "LOADING..." spinner in bottom right corner exact to model design reference */}
              <div className="absolute bottom-2 right-4 flex items-center gap-2 bg-white/95 border border-neutral-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] py-2 px-4 rounded-full z-20">
                <svg className="w-4 h-4 text-orange-500 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-90" fill="currentColor" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="font-mono text-[10px] font-extrabold tracking-widest text-orange-600 animate-pulse">
                  LOADING...
                </span>
              </div>

            </div>

            {/* Interactive display description of highlighted active item */}
            <div className="h-28 bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-center transition-all duration-300 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-neutral-900" />
              {activePhoto ? (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-800">
                      {activePhoto.year} &mdash; {activePhoto.category}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                    <strong>{activePhoto.title}:</strong> {activePhoto.desc}
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    DIAGNOSTIC ARCHIVE VIEW
                  </span>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed italic">
                    Hover over the high-contrast segmented profile silhouette above to illuminate historical coordinates, regional patterns, and field moments.
                  </p>
                </div>
              )}
            </div>

            {/* Elegant Custom Silhouette Gallery Image Uploader with Click + Drag-n-Drop Support */}
            <div 
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="group border border-dashed border-neutral-300 hover:border-neutral-500 rounded-xl p-4 bg-white/50 hover:bg-white text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-1 shadow-sm select-none"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
              <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                  {uploadedImage ? "Change Silhouette Image" : "Upload Custom Silhouette Image"}
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 heading-normal">
                Drag & dropping or click to upload the exact custom collage image you created!
              </p>
            </div>

          </div>
        </div>

        {/* Right Hand: Fluid Scrollable Text and Dummy blocks */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center gap-16 md:gap-24 lg:pt-24 lg:pl-10">
          
          {/* Block 1: The Root */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-neutral-400 font-semibold bg-white border border-neutral-200 hover:border-neutral-400 px-2.5 py-1 rounded transition-colors">
                PART 01 // THE ROOT
              </span>
              <div className="h-[1px] flex-grow bg-neutral-300" />
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl text-neutral-900 italic font-normal leading-relaxed mb-6">
              &ldquo;It started with a simple belief: that access to health and education shouldn't be a privilege determined by geography.&rdquo;
            </h3>
            
            <p className="font-sans text-sm md:text-base text-neutral-600 leading-loose max-w-xl">
              Growing up in the diverse landscape of Northeast India, the sharp contrasts of health infrastructure were not academic statistics—they were lived realities. This singular realization created a permanent shift: we cannot bring healing through distant guidelines, but rather through deliberate presence and physical roads.
            </p>
          </motion.div>

          {/* Block 2: The Journey */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-neutral-400 font-semibold bg-white border border-neutral-200 hover:border-neutral-400 px-2.5 py-1 rounded transition-colors">
                PART 02 // THE JOURNEY
              </span>
              <div className="h-[1px] flex-grow bg-neutral-300" />
            </div>
            
            <p className="font-sans text-lg text-neutral-800 leading-relaxed font-light mb-6">
              &ldquo;Over the last decade, transitioning from grassroots initiatives to driving structured community wellbeing, the goal has remained unyielding—building sustainable ecosystems of care.&rdquo;
            </p>
            
            <p className="font-sans text-sm md:text-base text-neutral-600 leading-loose max-w-xl">
              What began with micro-consultations in temporary bamboo structures evolved into decentralized medical pathways. Deepjyoti India Foundation acts as a structural force, ensuring that remote locations receive authentic diagnostic support, persistent follow-ups, and a pipeline of literacy workshops.
            </p>
          </motion.div>

          {/* Block 3: The Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-neutral-400 font-semibold bg-white border border-neutral-200 hover:border-neutral-400 px-2.5 py-1 rounded transition-colors">
                PART 03 // THE PHILOSOPHY
              </span>
              <div className="h-[1px] flex-grow bg-neutral-300" />
            </div>
            
            <h3 className="font-display text-2xl text-neutral-900 leading-snug mb-6 font-normal">
              &ldquo;This space isn't a resume. It’s an evolving mosaic of the communities that shape me, the projects that challenge me, and the vision that moves me forward.&rdquo;
            </h3>
            
            <p className="font-sans text-sm md:text-base text-neutral-600 leading-loose max-w-xl">
              In this design, we make sure that the spotlight focuses intensely on the grassroots storytellers. Taranna's portfolio is a portal into collaborative execution: proving that structural development, emotional intelligence, and bold leadership can meet perfectly at the intersection of empathy.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
